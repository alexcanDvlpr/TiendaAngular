import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }


  	public getProducts() {
    	return this.firestore.collection('productos').snapshotChanges();
  	}

	public getProduct(documentId: string) {
    	return this.firestore.collection('productos').doc(documentId).snapshotChanges();
  	}
}
