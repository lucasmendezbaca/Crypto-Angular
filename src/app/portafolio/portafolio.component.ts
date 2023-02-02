import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {
  constructor(private apiService: ApiService) { }

  private allCoins = new Array();
  public filterCoins = new Array();
  public favouriteCoins = new Array();
  public coinName = ''

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
    this.favouriteCoins.push(coin);
  }

  deleteFavourite(coin:object) {
    this.favouriteCoins.splice(this.favouriteCoins.indexOf(coin), 1);
  }
}
