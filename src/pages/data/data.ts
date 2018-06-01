import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController, Loading, ActionSheetController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Camera, CameraOptions } from '@ionic-native/camera';

import { UserServiceProvider } from "../../providers/user-service/user-service";
import { User } from '../../models/user.models';

@IonicPage()
@Component({
  selector: 'page-data',
  templateUrl: 'data.html',
})
export class DataPage {
  dataForm: FormGroup;
  cmb: any;
  constructor(public alertCtrl: AlertController,
    public userService: UserServiceProvider,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public camera: Camera) { 
    this.dataForm = this.formBuilder.group({
      clinica: ['', [Validators.required, Validators.minLength(3)]],
      telefono: ['', [Validators.required, Validators.minLength(3)]],
      tipo: ['', [Validators.required, Validators.minLength(1)]],
      codigo_clinica: [' ', [Validators.required, Validators.minLength(1)]],
    });
   }
  onSubmit(): void {
    
  }
  buscar(){
    let formUser = this.dataForm.value;
    this.userService.getClinica(formUser.clinica)
    .then(data =>{
      let cadena: any = data.child("nombre").val();
      console.log(cadena);
      
    })
  }
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Foto desde:',
      buttons: [
        {
          text: 'Galería',
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
    this.camera.getPicture(options)
      .then(imageData => {
        this.base64Image = 'data:image/jpeg;base64,' + imageData;
        this.userService.uploadImage(this.base64Image, 'imgs/', 'img1');
      })
      .catch(error => {
        console.error(error);
      });
  }
  base64Image: any;
  accessGallery() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;

      this.userService.uploadImage(this.base64Image, 'imgs/', 'img1');
    }, (err) => {
      console.log(err);
    });
  }
  buscar() {
    
  }
  forgotPass() {
    
  }
  register() {
    
  }
  cmbSeleccion(){
    
  }
  private showLoading(): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: 'Por favor espera...'
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

}
