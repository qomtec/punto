import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { User } from "../../models/user.models";
import { UserServiceProvider } from '../../providers/user-service/user-service';

@IonicPage()
@Component({
  selector: 'page-show-citas',
  templateUrl: 'show-citas.html',
})
export class ShowCitasPage {
  lista: any;
  constructor(
    public navCtrl: NavController,
    public userService: UserServiceProvider) {
    console.clear();
    this.userService.getUsers(User.currentUser.codigo_clinica)
      .then(data => {
        this.lista = data;
      });
  }
  ionViewDidLoad() {

  }
}
