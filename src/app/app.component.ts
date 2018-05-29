import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { MainPage } from '../pages/main/main';
import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { DataPage } from '../pages/data/data';


import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { User } from '../models/user.models';

export interface MenuItem {
  title: string;
  component: any;
  icon: string;
}
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  datosUsuario = new User();
  appMenuItems: Array<MenuItem>;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    authService: AuthServiceProvider,
    public alertCtrl: AlertController,
    userService: UserServiceProvider) {
    this.appMenuItems = [
      {title: 'Home', component: TabsPage, icon: 'home'},
      {title: 'Citas', component: AboutPage, icon: 'checkmark-circle-outline'}
    ];
    this.datosUsuario.name = " ";
    this.rootPage = DataPage;
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
        //console.clear();
        userService.getUser(data.uid).then( datos => {
          User.currentUser = datos;
          this.datosUsuario = datos;
          if (User.currentUser.tipo == "d"){
            this.datosUsuario.tipo ="Médico";
            this.appMenuItems = [
              {title: 'Home', component: TabsPage, icon: 'home'},
              {title: 'Ver citas', component: AboutPage, icon: 'glasses'},
              {title: 'Agregar citas', component: AboutPage, icon: 'add-circle'}
            ];
            this.rootPage = MainPage;
          } else if (User.currentUser.tipo == "p"){
            this.datosUsuario.tipo ="Paciente";
            this.rootPage = TabsPage;
          }          
        }).catch( error => {
          console.log(error);
        });
      } else {
        this.rootPage = LoginPage;
      }
    });
    platform.ready().then(() => {
      statusBar.styleDefault();
      statusBar.overlaysWebView(false);

    });
  }
  /*private showAlert(message: string): void {
    this.alertCtrl.create({
      message: message,
      buttons: ['Ok']
    }).present();
  }*/
}
