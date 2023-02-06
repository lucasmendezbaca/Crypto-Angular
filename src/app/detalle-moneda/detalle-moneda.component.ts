import { Component, AfterViewInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-moneda',
  templateUrl: './detalle-moneda.component.html',
  styleUrls: ['./detalle-moneda.component.css']
})
export class DetalleMonedaComponent implements AfterViewInit {
  dataPoints:any = [];
  chart:any;

  private id:any;
  public coinInfo:any = {};
  public historicalMarketData:any;
  public chartDays:any = 'max';
  
  constructor(private apiService:ApiService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.coinInfo = this.getCoinInfo(this.id);
    });
  }

  chartOptions = {
    theme: "light2",
    zoomEnabled: true,
    exportEnabled: true,
    // title: {
    //   text: this.coinInfo.name + "Price"
    // },
    subtitles: [{
      text: "Loading Data...",
      fontSize: 24,
      horizontalAlign: "center",
      verticalAlign: "center",
      dockInsidePlotArea: true
    }],
    axisY: {
      title: "Closing Price (in EUR)",
      prefix: "€"
    },
    data: [{
      type: "line",
      name: "Closing Price",
      yValueFormatString: "$#,###.00",
      xValueType: "dateTime",
      dataPoints: this.dataPoints
    }]
  }

  getChartInstance(chart: object) {
    this.chart = chart;
  }

  ngAfterViewInit(): void {
    this.getHistoricalMarketData(this.id, 'eur', this.chartDays);
  }

  getCoinInfo (id:string) {
    this.apiService.getCoin(id).subscribe((data:any) => {
      this.coinInfo = data;
    });
  }

  getHistoricalMarketData (id:string, vs_currenci:string, days:string) {
    this.apiService.getHistoricalMarketData(id, vs_currenci, days).subscribe((data:any) => {
      console.log(data.prices[0][0])
      for(let i = 0; i < data.prices.length; i++){
        this.dataPoints.push({x: new Date(data.prices[i][0]), y: Number(data.prices[i][1]) });
      }
      this.chart.subtitles[0].remove();
    });
  }

}
