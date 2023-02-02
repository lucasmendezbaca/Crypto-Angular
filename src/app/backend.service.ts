import { Injectable } from '@angular/core';
import { collection, addDoc } from '@angular/fire/firestore';
// import { collection, addDoc } from "firebase/firestore"; 

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor() { }

  addCoin(coin: any) {
    addDoc(collection('coins'), coin)
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  }
}
