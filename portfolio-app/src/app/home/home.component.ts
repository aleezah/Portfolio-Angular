import { Component, OnInit } from '@angular/core';
import { YfinanceService } from '../yfinance.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movers = {} as any;

  constructor(private yfinanceService: YfinanceService) { }

  ngOnInit(): void {
    this.getMovers()
  }

  getMovers(){
    this.yfinanceService.getMovers().subscribe((movers)=>{
      console.log(movers);
      this.movers = movers;
    })
  }

}
