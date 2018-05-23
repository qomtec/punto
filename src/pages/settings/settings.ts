import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthServiceProvider) {
  }

  logout(){
    this.authService.logout()
    .then(data => {
      console.log(data);
      this.navCtrl.setRoot(LoginPage);
    })
    .catch(error => {
      console.log(error);
    });
  }

}
