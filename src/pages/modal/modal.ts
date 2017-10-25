import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})

export class ModalPage {
  misParams: null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController
    ){
    this.misParams = navParams.get('misParams');
  }

  public closeModal(){
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }
}