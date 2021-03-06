import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(public afAuth: AngularFireAuth) { }

  doRegister(email, password){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().createUserWithEmailAndPassword(email, password)
     .then(res => {
       resolve(res);
     }, err => reject(err))
   })
 }
}
