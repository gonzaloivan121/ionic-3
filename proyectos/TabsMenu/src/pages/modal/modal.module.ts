import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ModalPage } from './modal';

@NgModule({
  declarations: [
    ModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPage),
  ],
  entryComponents: [
    ModalPage,
  ]
})
export class ModalPageModule {}