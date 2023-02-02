import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  // private coins: Observable<any[]>;
  private coinsCollection: any;

  constructor(firestore: Firestore, private auth: AuthenticationService) {
    this.coinsCollection = collection(firestore, 'favoritas');
    // this.coins = collectionData(coinsCollection);
  }

  async addCoin(coin: any) {
    const docRef = await addDoc(this.coinsCollection, {
      moneda: coin.name,
      usuario: 'lucasmendezbaca@gmail.com'
    });
    console.log("Document written with ID: ", docRef.id);
    console.log(this.auth.curenUser());
  }
}
