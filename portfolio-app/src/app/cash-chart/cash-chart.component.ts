import { Component, Input, OnInit, Inject, LOCALE_ID, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-cash-chart',
  templateUrl: './cash-chart.component.html',
  styleUrls: ['./cash-chart.component.css']
})
export class CashChartComponent implements OnInit {


  @Input() labels = [] as any;
  @Input() data = [] as any;
  startDate = new Date() as any;
  options = {} as any;
  timePeriod = (1000);
  // @ViewChild(BaseChartDirective) chart: any;
  @ViewChild('myCashChart') myCashChart : any;
  
  type = 'line';

  //data: any;
  barchart: any;
  
  constructor(@Inject(LOCALE_ID) private locale: string) {
    // this.startDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.startDate = formatDate(new Date().getTime()-this.timePeriod * 24 * 60 * 60 * 1000,'yyyy-MM-dd',this.locale)
  }
  //Bar Chart

  ngOnInit() {
    this.options = {
      responsive: true,
      maintainAspectRatio: true,
      bezierCurve: false,
      scales: {
        xAxes: [{
          type: "time",
          time: {
            parser: "YYYY-MM-DD",
            
          },
          scaleLabel: {
            display:     true,
            labelString: 'Date'
          },
          ticks: {
            max: "2020-11-31",
            min: this.startDate //"2020-01-31"
          }
        }],
        yAxes: [{
          ticks: {
            // max: 100,
            min: 0
          }
        }]
      }
    };

    console.log(this.startDate)
    this.data = {
      labels: ["2021-01-31","2021-03-31","2021-07-21","2021-08-15","2021-08-17","2021-09-20","2021-11-30"],//["January", "February", "March", "April", "May", "June", "July"]
      // labels: this.labels,
      //the format of the time 2020-12-31T23:59:59.000+00:00 is YYYY-MM-DDThh:mm:SSS+00:00
      datasets: [{
        //label: "Angular 11",
        // data: this.data,
        data: [45, 55, 35, 65, 60, 25, 45],
        backgroundColor: "#f38b4a",
        lineTension: 0, 
      }//, {
      //   label: "Angular 12",
      //   data: ["35", "69", "45", "96", "50", "60", "45"],
      //   backgroundColor: "#6970d5",
      //   lineTension: 0, 
      // }
    ]
    };
  }

  updateDate(days: number){    
    this.startDate = formatDate(new Date().getTime()-days * 24 * 60 * 60 * 1000,'yyyy-MM-dd',this.locale)
    this.options.scales.xAxes[0].ticks.min = this.startDate;

    // console.log(this.options)
    this.myCashChart.chart.options = this.options;
    this.myCashChart.chart.update();
    // console.log(this.myLineChart.chart)
    // this.ngOnInit()

  }
  
}
