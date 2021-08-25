import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  @Input() labels = [] as any;
  @Input() data = [] as any;
  
  type = 'line';
  options = {
    responsive: true,
    maintainAspectRatio: true,
    bezierCurve: false,
    scales: {
      yAxes: [{
        ticks: {
          max: 100,
          min: 0
        }
      }]
    }
  };
  //data: any;
  barchart: any;
  
  constructor(private http: HttpClient) { }
  //Bar Chart

  ngOnInit() {
    this.data = {
      labels: this.labels, //["January", "February", "March", "April", "May", "June", "July"], //months
      datasets: [{
        //label: "Angular 11",
        data: this.data, //[45, 55, 35, 65, 60, 25, 45],
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
}
