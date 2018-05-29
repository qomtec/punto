import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IonicPage, NavController, AlertController, Loading, LoadingController, ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import * as firebase from 'firebase/app';

import { DataPage } from '../data/data';
import { LoginPage } from '../login/login';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { UserServiceProvider } from "../../providers/user-service/user-service";
import { User } from '../../models/user.models';
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  private postId: string;

  constructor(
    public alertCtrl: AlertController,
    public authService: AuthServiceProvider,
    public userService: UserServiceProvider,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController) {
    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.signupForm = this.formBuilder.group({
      clinica: ['', [Validators.required, Validators.minLength(3)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', [Validators.required, Validators.minLength(6)]],
      tipo: ['', [Validators.required, Validators.minLength(1)]],
      codigo_clinica: [' ', [Validators.required, Validators.minLength(1)]],
    });
  }
  onSubmit(): void {
    let loading: Loading = this.showLoading();
    let formUser = this.signupForm.value;
    this.authService.signupWithEmail({ email: formUser.email, password: formUser.password })
      .then((data: firebase.User) => {
        delete formUser.password;
        let uuid: string = data.uid;
        console.log(uuid);
        
        let user = new User();
        user.codigo = uuid;
        user.email = formUser.email;
        user.codigo_clinica = "";
        user.name = formUser.name;
        user.photo = "";
        user.tipo = "";
        user.username = "";
        this.userService.addUser(user)
          .then(data => {
            this.navCtrl.setRoot(DataPage)
          }).catch(error => {
          
          });
        loading.dismiss();
      }).catch(error => {
        loading.dismiss();
        this.showAlert(error);
      });
    //this.navCtrl.setRoot(TabsPage)
  }
  signupForm: FormGroup;

  register() {
    
  }
  login() {
    this.navCtrl.setRoot(LoginPage)
  }
  showLoading(): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: 'Por favor espera...'
    });
    loading.present();
    return loading;
  }
  private showAlert(message: string): void{
    this.alertCtrl.create({
      message: message,
      buttons: ['Ok']
    }).present();
  }
  /*
  image: string = null;
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Tomar foto desde:',
      buttons: [
        {
          text: 'Galeria',
          handler: () => {
            this.accessGallery();
          }
        }, {
          text: 'Cámara',
          handler: () => {
            this.takePhoto();
          }
        }, {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }
 
  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 1024,
      targetWidth: 800,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.base64Image = 'data:image/jpeg;base64,'+imageData;
      this.userService.uploadImage(this.base64Image,'imgs/','img1');
    })
    .catch(error =>{
      console.error( error );
    });
  }
  base64Image: any;
  accessGallery(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL
     }).then((imageData) => {
       this.base64Image = 'data:image/jpeg;base64,'+imageData;
      
       this.userService.uploadImage(this.base64Image,'imgs/','img1');
      }, (err) => {
       console.log(err);
     });
   }*/
}
