import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getCoins () {
    return this.http.get('https://api.coingecko.com/api/v3/coins/list');
  }

  getCoin (id:string) {
    return this.http.get('https://api.coingecko.com/api/v3/coins/' + id);
  }
}
