import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the TabsIconosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  template: `
    <ion-header>
      <ion-navbar [color]="isAndroid ? 'royal' : 'primary'">
        <ion-title>Tabs</ion-title>
      </ion-navbar>
    </ion-header>
    
    <ion-content>
    </ion-content>
`})
export class TabIconTextContentPage  {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}


@Component({
  template: `
    <ion-tabs class="tabs-icon-text" [color]="isAndroid ? 'royal' : 'primary'">
      <ion-tab tabIcon="water" tabTitle="Water" [root]="tab1"></ion-tab>
      <ion-tab tabIcon="leaf" tabTitle="Life" [root]="tab2"></ion-tab>
      <ion-tab tabIcon="flame" tabTitle="Fire" [root]="tab3"></ion-tab>
      <ion-tab tabIcon="magnet" tabTitle="Force" [root]="tab4"></ion-tab>
    </ion-tabs>
`})
export class IconTextPage {
  rootPage = IconTextPage;

  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}