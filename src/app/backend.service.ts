import { Injectable } from '@angular/core';
import { provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, addDoc, collection } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor() { }

  async addCoin(coin: any) {
    const docRef = await addDoc(collection(this.db, "favoritas"), {
      moneda: coin.name,
      usuario: 'lucasmendezbaca@gmail.com'
    });
    console.log("Document written with ID: ", docRef.id);
  }
}
