import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { User } from "../../models/user.models";
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { MensajeServiceProvider } from '../../providers/mensaje-service/mensaje-service';
import { SettingsPage } from "../settings/settings";

@IonicPage()
@Component({
  selector: 'page-show-citas',
  templateUrl: 'show-citas.html',
})
export class ShowCitasPage {
  lista: any;
  viewTitle: string;
  myDate: String = new Date().toISOString();
  selectedDay = new Date();
  
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };
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
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
  onEventSelected(event) {
    //let start = moment(event.startTime).format('LLLL');
    //let end = moment(event.endTime).format('LLLL');
    
    /*let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();*/
    console.log(event.startTime.format('LLLL'));
    
  }
 
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
    console.log(this.selectedDay);
    
  }
  goToAccount(){
    this.navCtrl.setRoot(SettingsPage);
  }
}
