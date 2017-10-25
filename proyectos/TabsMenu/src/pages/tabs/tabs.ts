import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from "../contact/contact";
import { HomePage } from "../home/home";
import { PruebaPage } from "../prueba/prueba";



/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = PruebaPage;

  constructor() {

  }
}
