import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import '@angular/compiler';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { BundleInfo, CapacitorUpdater } from '@capgo/capacitor-updater';
import { App } from '@capacitor/app';
import { SplashScreen } from '@capacitor/splash-screen';
import { Dialog } from '@capacitor/dialog';

let data: BundleInfo | null = null;
CapacitorUpdater.notifyAppReady();

App.addListener('appStateChange', async (state: any) => {
  console.log('appStateChange', JSON.stringify(state))
  if (state.isActive) {
    console.log('getLatest')
    // Do the download during user active app time to prevent failed download
    try {
      const latest = await CapacitorUpdater.getLatest();
      console.log('latest', JSON.stringify(latest))
      const { value } = await Dialog.confirm({
        title: 'Update Available',
        message: `Version ${latest.version} is available. Would you like to update now?`,
      })
      console.log('value: ', value);
      
      if (value && latest.url) {
        console.log('=== download start===');
        data = await CapacitorUpdater.download({
          // url: latest.url,
          // version: latest.version,
          ...latest
        })
        console.log('=== download end===');
        console.log('download', JSON.stringify(data));
        CapacitorUpdater.set({ id: data.id })
      }
    } 
    catch (err) {
      console.log('err: ', JSON.stringify(err));
    }
  }
  if (!state.isActive && data) {
    console.log('set')
    // Do the switch when user leave app or when you want
    SplashScreen.show()
    try {
      await CapacitorUpdater.set({ id: data.id })
    }
    catch (err) {
      console.log(err)
      SplashScreen.hide() // in case the set fail, otherwise the new app will have to hide it
    }
  }
})

// CapacitorUpdater.addListener('updateAvailable', async (res) => {
//   console.log('==update available==');
//   console.log('res-update: ', JSON.stringify(res));
//   try {
//     const { value } = await Dialog.confirm({
//       title: 'Update Available',
//       message: `Version ${res.bundle.version} is available. Would you like to update now?`,
//     })
//     console.log('value: ', value);

//     if (value)
//       CapacitorUpdater.set(res.bundle)

//   }
//   catch (error) {
//     console.log(error)
//   }
// })

// CapacitorUpdater.notifyAppReady()

defineCustomElements(window);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
