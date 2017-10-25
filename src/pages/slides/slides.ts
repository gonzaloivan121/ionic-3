import { Component } from '@angular/core';

import { NavController, NavParams, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the SlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  templateUrl: 'slides.html',
})
export class SlidesPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController
    ){
  }

  slides = [
    {
      title: "¡Bienvenido a mi aplicación!",
      description: "Mi nombre es <b>Gonzalo Chaparro</b>, trabajo en <b>Atech, SL (Málaga)</b> y me dedico al desarrollo web y multiplataforma.",
      image: "assets/imgs/ica-slidebox-img-1.png",
    },
    {
      title: "¿Qué es Ionic?",
      description: "<b>Ionic Framework</b> es un SDK de código abierto que permite a los desarrolladores crear aplicaciones móviles de alta calidad con tecnologías web como HTML, CSS, y JavaScript.",
      image: "assets/imgs/ica-slidebox-img-2.png",
    },
    {
      title: "Atech SL",
      description: "<b>Atech</b> es una empresa conformada por profesionales con más de 15 años de experiencia en el desempeño de soluciones relacionadas con las TIC.",
      image: "assets/imgs/ica-slidebox-img-3.png",
    }
  ];

  push() {
    this.navCtrl.push(TabsPage);
  }

  ionViewWillLeave() {
    const bienvenido = this.toastCtrl.create({
          message: 'Bienvenido a mi aplicación',
          duration: 1500,
          showCloseButton: false,
          position: 'top'
      });
      bienvenido.present();
  }
}
