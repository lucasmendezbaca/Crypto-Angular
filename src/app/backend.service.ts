import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { ApiService } from './api.service';
import { Firestore, collectionData, setDoc, doc, collection, query, where, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  favouriteCoins: Observable<any>;
  private db: Firestore;

  constructor(firestore: Firestore, private auth: AuthenticationService, private apiService: ApiService) {
    this.db = firestore;

    const coinsDB = collection(firestore, 'favoritas');
    this.favouriteCoins = collectionData(query(coinsDB, where("usuario", "==", this.auth.user.email)));
    console.log(this.auth.user.email)
  }

  async addCoin(coin: any) {
    await setDoc(doc(this.db, "favoritas", coin.id), {
      moneda: coin.id,
      usuario: this.auth.user.email
    });
    console.log("Document written with ID: ", coin.name);
  }

  async deleteCoin(coin: any) {
    await deleteDoc(doc(this.db, "favoritas", coin.name.toLowerCase()));
    console.log("Document deleted with ID: ", coin.name);
  }

}
