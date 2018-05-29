import { Injectable } from '@angular/core';

import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase';
@Injectable()
export class AuthServiceProvider {

  constructor(
    public afAuth: AngularFireAuth) { }
    
  signinWithEmail(user: { email: string, password: string }): Promise<any> {
    return new Promise((resolve,reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password)
      .then((data: firebase.User) => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
    });
  }
  logout(): Promise<any>{
    return new Promise((resolve,reject) => {
      this.afAuth.auth.signOut()
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
    });
  }
  signupWithEmail(user: { email: string, password: string }): Promise<firebase.User> {
    console.log(user.email + ' --- ' + user.password );
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .catch();
  }
  
}
