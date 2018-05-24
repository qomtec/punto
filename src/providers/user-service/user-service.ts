import { Injectable } from '@angular/core';

import { User, Users } from "../../models/user.models";
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "angularfire2/database";
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable()
export class UserServiceProvider {
  private dbPath = '/users/';
  userRef: AngularFireObject<User> = null;
  item: Observable<any>;
  public usuario: User;
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
  getUsers(codigo_clinica: string): Promise<Users>{
    return new Promise((resolve, reject) => {
      let itemsRef: AngularFireList<Users>;
      let items: Observable<Users[]>;
      itemsRef = this.db.list(this.dbPath, ref => ref.orderByKey());
      items = itemsRef.valueChanges();
      console.log(items);
      
    });
  }
}
