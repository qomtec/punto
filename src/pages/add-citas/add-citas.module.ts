import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCitasPage } from './add-citas';

@NgModule({
  declarations: [
    AddCitasPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCitasPage),
  ],
})
export class AddCitasPageModule {}
