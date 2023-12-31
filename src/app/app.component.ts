import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { App } from '@capacitor/app';
// import * as LiveUpdates from '@capacitor/live-updates';
// import { Preferences } from '@capacitor/preferences';
// import { UpdateModalComponent } from './components/update-modal/update-modal.component';
import { BundleInfo, CapacitorUpdater } from '@capgo/capacitor-updater';
import { SplashScreen } from '@capacitor/splash-screen';
import { Dialog } from '@capacitor/dialog';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  data: BundleInfo | null = null;

  constructor(
    private modalCtrl: ModalController
  ) {
    // CapacitorUpdater.notifyAppReady()

    // this.initializeApp(

    // );
  }

  // async openModal() {
  //   const modal = await this.modalCtrl.create({
  //     component: UpdateModalComponent,
  //   });
  //   modal.present();

  //   const { data, role } = await modal.onWillDismiss();

  //   if (role === 'confirm') {
  //     await LiveUpdates.reload();
  //   } else {
  //     const result = await LiveUpdates.sync();
  //     console.log('result03: ', JSON.stringify(result));
  //     await Preferences.set({
  //       key: 'shouldReloadApp',
  //       value: result.activeApplicationPathChanged.toString()
  //     })
  //   }
  // }

  // async initializeApp() {
  //   App.addListener('resume', async () => {
  //     const shouldReloadApp = await Preferences.get({ key: 'shouldReloadApp' });
  //     if (shouldReloadApp?.value === 'true') {
  //       console.log('====upload===');
  //       // await LiveUpdates.reload();
  //     } else {
  //       const result = await LiveUpdates.sync();
  //       console.log('result02: ', JSON.stringify(result));
  //       await Preferences.set({
  //         key: 'shouldReloadApp',
  //         value: result.activeApplicationPathChanged.toString()
  //       })
  //     }
  //   });

  //   this.openModal();
    
  //   //First sync on app load
  //   // const result = await LiveUpdates.sync();
  //   // console.log('result01: ', JSON.stringify(result));
  //   // await Preferences.set({
  //   //   key: 'shouldReloadApp',
  //   //   value: result.activeApplicationPathChanged.toString()
  //   // })
  // }

  async initializeApp() {
    
  }
}
