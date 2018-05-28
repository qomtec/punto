import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheetController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { UserServiceProvider } from "../../providers/user-service/user-service";
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  private postId: string;
  image: string = null;
  constructor(
    public navCtrl: NavController,
    public camera: Camera,
    public actionSheetCtrl: ActionSheetController) { }
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
  register() {
    this.navCtrl.setRoot(TabsPage)
  }
  login() {
    this.navCtrl.setRoot(LoginPage)
  }
  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.base64Image = 'data:image/jpeg;base64,'+imageData;
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
      }, (err) => {
       console.log(err);
     });
   }
  /*subir() {
    const cameraOptions: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };
  }
  addLibraryPhoto() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: 0,
      correctOrientation: true
    }
    this.savePhoto(options);
  }
  savePhoto (options) {
    
    this.storage.get('uid').then((val) => {
      var uid = val;
      
      this.camera.getPicture(options).then((imageData) => {
          let base64Image = 'data:image/jpeg;base64,' + imageData;
          
          return this.userService.uploadImage(base64Image, uid, this.postId);
        }, (err) => {
          //this.toast.show(err, 5000);
        });
    });
    
}*/

}
