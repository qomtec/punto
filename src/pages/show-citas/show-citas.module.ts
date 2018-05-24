import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowCitasPage } from './show-citas';

@NgModule({
  declarations: [
    ShowCitasPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowCitasPage),
  ],
})
export class ShowCitasPageModule {}
