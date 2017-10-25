import { Component } from '@angular/core';

import { Platform, ActionSheetController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the PruebaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-prueba',
  templateUrl: 'prueba.html',
})

export class PruebaPage {
  constructor(
      public platform: Platform,
      public navCtrl: NavController,
      public navParams: NavParams,
      public actionSheetCtrl: ActionSheetController
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PruebaPage');
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Menú de Acciones',
      buttons: [
        {
          text: 'Borrar',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Has seleccionado Borrar');
          }
        },

        {
          text: 'Compartir',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Has seleccionado Compartir');
          }
        },

        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Has seleccionado Play');
          }
        },

        {
          text: 'Favorito',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Has seleccionado Favorito');
          }
        },

        {
          text: 'Cancelar',
          role: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Has seleccionado Cancelar');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
