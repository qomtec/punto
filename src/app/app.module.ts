import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { SettingsPage } from "../pages/settings/settings";
import { MainPage } from "../pages/main/main";
import { AddCitasPage } from "../pages/add-citas/add-citas";
import { PrincipalPage } from "../pages/principal/principal";
import { ShowCitasPage } from "../pages/show-citas/show-citas";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { MensajeServiceProvider } from '../providers/mensaje-service/mensaje-service';

const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyAqgZ2ahuD-_A8Fg9cQM2TddaJjB6Cr3yQ",
  authDomain: "qomtec-college.firebaseapp.com",
  databaseURL: "https://qomtec-college.firebaseio.com",
  projectId: "qomtec-college",
  storageBucket: "qomtec-college.appspot.com",
  messagingSenderId: "92306874555"

};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    SettingsPage,
    MainPage,
    PrincipalPage,
    AddCitasPage,
    ShowCitasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    SettingsPage,
    MainPage,
    PrincipalPage,
    AddCitasPage,
    ShowCitasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    UserServiceProvider,
    MensajeServiceProvider
  ]
})
export class AppModule {
  constructor(private statusBar: StatusBar){
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('#9DE3FF');
  }
}
