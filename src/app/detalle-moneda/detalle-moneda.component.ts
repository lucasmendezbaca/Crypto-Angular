import { Component, AfterViewInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-moneda',
  templateUrl: './detalle-moneda.component.html',
  styleUrls: ['./detalle-moneda.component.css']
})
export class DetalleMonedaComponent implements AfterViewInit {

  private id:any;
  public coinInfo:any;
  public historicalMarketData:any;
  
  constructor(private apiService:ApiService, private activatedRoute:ActivatedRoute) { }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];


      this.getCoinInfo(this.id);
      this.getHistoricalMarketData(this.id, 'usd', '30');
    });
  }

  getCoinInfo (id:string) {
    this.apiService.getCoin(id).subscribe((data:any) => {
      this.coinInfo = data;
    });
  }

  getHistoricalMarketData (id:string, vs_currenci:string, days:string) {
    this.apiService.getHistoricalMarketData(id, vs_currenci, days).subscribe((data:any) => {
      this.historicalMarketData = data;
    });
  }

}
