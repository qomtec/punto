import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    authService: AuthServiceProvider,
    public alertCtrl: AlertController) {
    
    authService
    .afAuth
    .authState
    .subscribe(data => {
      if (data) {
        /*if (data.emailVerified == true) {
          this.rootPage = TabsPage;
        } else {
          this.showAlert("Aún no se ha confirmado la cuenta");
          this.rootPage = LoginPage;
        }*/
        this.rootPage = TabsPage;
        
      } else {
        this.rootPage = LoginPage;
      }
    });
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  /*private showAlert(message: string): void {
    this.alertCtrl.create({
      message: message,
      buttons: ['Ok']
    }).present();
  }*/
}
