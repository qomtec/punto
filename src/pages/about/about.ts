import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  cards: any;
  category: string = 'gear';
  constructor(public navCtrl: NavController) {
    this.cards = new Array(10);
  }
  goToAccount(){
    this.navCtrl.push(SettingsPage);
  }
}
