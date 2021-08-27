import { Component, OnInit } from '@angular/core';
import { YfinanceService } from '../yfinance.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movers = {} as any;
  stockInfo = {} as any;
  stockInfoList = [] as any;
  stockInfoListLosers = [] as any;
  stockNames = {} as any;
  stockPercents = {} as any;

  numberOfGainers = 1;
  // stockInfoList = [{symbol: "AMZN"}, {symbol: "GOOG"}] as any;
  // stockNames = {AMZN: "Amazon", GOOG: "Google"} as any;
  // stockPercents = {AMZN: "15%", GOOG: "10%"} as any;

  constructor(private yfinanceService: YfinanceService) { }

  ngOnInit(): void {
    this.getMovers();
  }

  getMovers(){
    this.yfinanceService.getMovers().subscribe(async (movers: any)=>{

      this.movers = movers;

      //looping through the gainers
      for(let i = 0; i<this.numberOfGainers; i++){

        //for each of the gainers, find the full name and the percent change
        let symbol: string = movers.finance.result[0].quotes[i].symbol;
        let info = {symbol: symbol}
        this.getStockPercentChange(symbol)
        this.getStockName(symbol)
        await new Promise(f => setTimeout(f, 500));
        this.stockInfoList.push(info);
        
      }

      //looping through the losers
      for(let i = 0; i<this.numberOfGainers; i++){

        //for each of the gainers, find the full name and the percent change
        let symbol: string = movers.finance.result[1].quotes[i].symbol;
        let info = {symbol: symbol}
        this.getStockPercentChange(symbol)
        this.getStockName(symbol)
        await new Promise(f => setTimeout(f, 500));
        this.stockInfoListLosers.push(info);
      }
    })
  }


  getStockName(symbol: string){
    this.yfinanceService.getStockInfo(symbol).subscribe((info: any)=>{
      this.stockNames[symbol]=info.quoteType.longName
    });
  }


  getStockPercentChange(symbol: string){
    this.yfinanceService.getStockPercentChange(symbol).subscribe(async (financials: any) => {
      this.stockPercents[symbol]=financials.price.regularMarketChangePercent.fmt;
      let info = {symbol: symbol}
    });
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}