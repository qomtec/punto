import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public authService: AuthServiceProvider,
              public formBuilder: FormBuilder,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController) {
                
    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    console.clear();
  }
  onSubmit(): void{
    let loading: Loading = this.showLoading();
    console.clear();
    this.authService.signinWithEmail(this.loginForm.value)
    .then(data => {
      if (data){
        this.navCtrl.setRoot(TabsPage);
        loading.dismiss();
      }
    })
    .catch(error => {
      loading.dismiss();
      this.showAlert(error);
    });
  }
  private showLoading(): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: 'Espera un momento...'
    });
    loading.present();
    return loading;
  }
  private showAlert(message: string): void {
    this.alertCtrl.create({
      message: message,
      buttons: ['Ok']
    }).present();
  }
  register(){
    this.navCtrl.setRoot(RegisterPage);
  }
  login(){
    
  }
}
