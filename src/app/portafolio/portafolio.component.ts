import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCoins().subscribe((data) => {
      console.log(data);
    })
  }
}
