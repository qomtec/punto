import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SettingsPage } from "../settings/settings";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToAccount(){
    this.navCtrl.push(SettingsPage);
  }
}
