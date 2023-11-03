import { Component } from '@angular/core';
// import { Deploy, DeployClass } from 'cordova-plugin-ionic';
import { Deploy } from 'cordova-plugin-ionic/dist/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  updateStatus: string = 'Update not started';
  appid: string = 'io.ionic.starter';
  binaryVersionCode: string = '0.0.1';
  versionCurrent: string = 'TBD';
  buildId: string = '';
  versionsAvailable: string = 'Unknown';
  newChannel: string = 'Production';
  channelCurrent: string = 'Production';

  constructor(
    private _deploy: Deploy
  ) {}
  
  async performManualUpdate() {
    this.updateStatus = 'Checking for Update';
    const update = await this._deploy.checkForUpdate()
    if (update.available){
      this.updateStatus = 'Update found. Downloading update';
      await this._deploy.downloadUpdate((progress) => {
        console.log(progress);
      })
      this.updateStatus = 'Update downloaded. Extracting update';
      await this._deploy.extractUpdate((progress) => {
        console.log(progress);
      })
      console.log('Reloading app');
      this.updateStatus = 'Update extracted. Reloading app';
      await this._deploy.reloadApp();
    } else {
      console.log('No update available');
      this.updateStatus = 'No update available';
    }
  }

  async getUpdateConfig() {
    const info = (await this._deploy.getConfiguration()).appId;
    this.appid = info;
    const version = (await this._deploy.getConfiguration()).binaryVersionCode;
    this.binaryVersionCode = version;
  }

  async getCurrVersion() {
    let versionCurrent = (await this._deploy.getCurrentVersion());
    if (versionCurrent) {
      this.versionCurrent = versionCurrent.versionId;
      this.buildId = versionCurrent.buildId;
    } else {
      this.versionCurrent = 'No version found';
      this.buildId = 'No buildId found';
    }
  }

  async onCheckVersions() {
    const versions = await this._deploy.getAvailableVersions();
    if (versions.length > 0) {
      this.versionsAvailable = versions.length.toString();
    } else {
      this.versionsAvailable = "None";
    }
  }

  // async onCheckVersions() {
  //   const versions = await this._deploy.getAvailableVersions();
  //   if (versions.length) {
  //          this._deploy.deleteVersionById(versions[0].versionId);
  //   } else {
  //          console.log("No live update versions to delete");
  //   }
  // }

  async configureDeploy() {
    let appid = (await this._deploy.getConfiguration()).appId;
    const config = {
      'appId': appid,
      'channel': this.newChannel
    }
    await this._deploy.configure(config);
    this.channelCurrent = (await this._deploy.getConfiguration()).channel;
  }
}
