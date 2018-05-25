import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { User } from "../../models/user.models";
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { MensajeServiceProvider } from '../../providers/mensaje-service/mensaje-service';

@IonicPage()
@Component({
  selector: 'page-show-citas',
  templateUrl: 'show-citas.html',
})
export class ShowCitasPage {
  lista: any;
  myDate: String = new Date().toISOString();
  constructor(
    public navCtrl: NavController,
    public userService: UserServiceProvider) {
    
  }
  ionViewDidLoad() {
    console.clear();
  }
  dateChange(myDate) {
    //console.log(this.myDate.toString());
    /*this.mensajeService.listCitas(User.currentUser.codigo,
      this.myDate.split('T')[0]).then(data => {
        this.mensajeService.listaCitasUsuario; 
        console.log(this.mensajeService.listaCitasUsuario);
      });*/
  }
}
