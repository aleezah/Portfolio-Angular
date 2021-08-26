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
  stockNames = [] as any;
  stockPercents = [] as any;
  // stockInfoList = [{symbol: "AMZN"}, {symbol: "GOOG"}] as any;
  // stockNames = {AMZN: "Amazon", GOOG: "Google"} as any;
  // stockPercents = {AMZN: "15%", GOOG: "10%"} as any;

  constructor(private yfinanceService: YfinanceService) { }

  ngOnInit(): void {
    this.getMovers();
    console.log(this.stockInfoList)
  }

  getMovers(){
    this.yfinanceService.getMovers().subscribe(async (movers: any)=>{

      this.movers = movers;

      //looping through the gainers
      for(let gainer of movers.finance.result[0].quotes){

        //for each of the gainers, find the full name and the percent change
        let symbol: string = gainer.symbol;
        let info = {symbol: symbol}
        this.getStockName(symbol)
        
        await new Promise(f => setTimeout(f, 1000));
        // this.stockInfoList.push(info);
      }
    })
  }


  getStockName(symbol: string){
    this.yfinanceService.getStockInfo(symbol).subscribe((info: any)=>{
      console.log(info.quoteType.longName)
      // return info.quoteType.longName;
      let item = {} as any
      item[symbol]=info.quoteType.longName
      this.stockNames.push(item)
      this.getStockPercentChange(symbol)
    });

  }


  getStockPercentChange(symbol: string){
    this.yfinanceService.getStockPercentChange(symbol).subscribe((financials: any) => {
      //console.log(financials.price.regularMarketChangePercent.fmt)
      let item = {} as any
      item[symbol]=financials.price.regularMarketChangePercent.fmt
      this.stockPercents.push(item)
      console.log(this.stockPercents[0][symbol])
      let info = {symbol: symbol}
      this.stockInfoList.push(info);
    });
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}

  // getStockInfo(symbol: string){
  //   // this.yfinanceService.getStockInfo(symbol).subscribe((info)=>{
  //   //   this.stockInfo = info;
  //   //   console.log(this.stockInfo)
  //   //   this.stockInfoList.push(this.stockInfo)
  //   //   return info
      
  //   // });
  // }
