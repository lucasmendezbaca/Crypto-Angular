import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {
  private allCoins = new Array();
  public filterCoins = new Array();
  public favouriteCoins: any = new Array();
  public coinName = ''

  constructor(private apiService: ApiService, private backendService: BackendService) {
    this.getFavoriteCoins();
  }

  ngOnInit() {
    this.apiService.getCoins().subscribe((data:any) => {
      this.allCoins = data;
      console.log(data);
    })
  }

  filter() {
    if(this.coinName.length > 0) {
      this.filterCoins = this.allCoins.filter( coin => coin.name.toLowerCase().startsWith(this.coinName.toLowerCase()));
    } else {
      this.filterCoins = new Array();
    }
  }

  addFavourite(coin:object) {
    this.backendService.addCoin(coin);
  }

  // getFavoriteCoins() {
  //   this.backendService.favouriteCoins.forEach(coin => {
  //     this.favouriteCoins = new Array();
  //     for(let i = 0; i < coin.length; i++) {
  //       this.apiService.getCoin(coin[i].moneda).subscribe((data:any) => {
  //         if(this.favouriteCoins.find((newCoin:any) => newCoin.id == data.id)) {
  //           return;
  //         }
  //         this.favouriteCoins.push(data);
  //       })
  //     }
  //   })
  // }

  getFavoriteCoins() {
    this.backendService.favouriteCoins.subscribe((data:any) => {
      this.favouriteCoins = new Array();
      for(let i = 0; i < data.length; i++) {
        this.apiService.getCoin(data[i].moneda).subscribe((data:any) => {
          if(this.favouriteCoins.find((newCoin:any) => newCoin.id == data.id)) {
            return;
          }
          this.favouriteCoins.push(data);
        })
      }
    })
  }

  deleteFavourite(coin:object) {
    this.backendService.deleteCoin(coin);
  }
}
