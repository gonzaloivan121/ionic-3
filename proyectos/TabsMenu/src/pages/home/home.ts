import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'home',
  templateUrl: 'home.html',
})
export class HomePage {
  misParams = {
    musica: null,  
    programar: null,
    baloncesto: null,
    acampar: null,
    pizza: null,
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController
    ){
  }

  public openModal() {
    var modalPage = this.modalCtrl.create(ModalPage, { 'misParams': this.misParams });
    modalPage.onDidDismiss(
      data => {
        const toast = this.toastCtrl.create({
          message: 'Has cerrado el modal correctamente.',
          duration: 2000,
          showCloseButton: true,
          closeButtonText: 'Ok'
        });
       toast.present();
    });
    modalPage.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
}
