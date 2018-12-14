import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public afAuth: AngularFireAuth) { }

  doLogin(email, passwd){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().signInWithEmailAndPassword(email, passwd)
     .then(res => {
       resolve(res);
     }, err => reject(err))
   })
 }


}
