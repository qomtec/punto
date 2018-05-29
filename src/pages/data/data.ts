import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserServiceProvider } from "../../providers/user-service/user-service";
@IonicPage()
@Component({
  selector: 'page-data',
  templateUrl: 'data.html',
})
export class DataPage {
  dataForm: FormGroup;
  constructor(public alertCtrl: AlertController,
    public userService: UserServiceProvider,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController) { 
    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.dataForm = this.formBuilder.group({
      clinica: ['', [Validators.required, Validators.minLength(3)]],
      tipo: ['', [Validators.required, Validators.minLength(1)]],
      codigo_clinica: [' ', [Validators.required, Validators.minLength(1)]],
    });
   }
  onSubmit() {
    
  }
  forgotPass() {
    
  }
  register() {
    
  }

}
