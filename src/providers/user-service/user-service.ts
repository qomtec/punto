import { Injectable } from '@angular/core';

import { User } from "../../models/user.models";
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable()
export class UserServiceProvider {
  private dbPath = '/users/';
  public listadoUsuarios =[User];
  constructor(public db: AngularFireDatabase) { }

  getUser(codigo: string): Promise<User> {
    return new Promise((resolve, reject) => {
      let ref = firebase.database().ref(this.dbPath + codigo);
      ref.on("value", data => {
        resolve(data.val());
      });
    });
  }
  addUser(user: User): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.object(this.dbPath + user.codigo)
        .set(user)
        .then(data => {
          resolve(data);
        }).catch(error => {
          reject(error);
        });
    });
  }
  public getUsers(codigo: string): Promise<User[]>{
    return new Promise((resolve,reject)=>{
      firebase.database().ref(this.dbPath).orderByChild('codigo_clinica').equalTo(codigo).on('value', data =>{
        console.clear();
        //resolve(data.val())
        let datos = [User]
        for (var key in data.val()){
          if (data.val()[key].tipo == "p"){
            this.listadoUsuarios.push(data.val()[key])
          }
        }
        resolve(data.val());
      })
    });
  
  }
}
