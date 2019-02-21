import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCarParkPage } from './add-car-park';

@NgModule({
  declarations: [
    AddCarParkPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCarParkPage),
  ],
})
export class AddCarParkPageModule {}
