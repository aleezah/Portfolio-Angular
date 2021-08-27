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
  indices = [] as any;

  numberOfGainers = 5;
  // stockInfoList = [{symbol: "AMZN"}, {symbol: "GOOG"}] as any;
  // stockNames = {AMZN: "Amazon", GOOG: "Google"} as any;
  // stockPercents = {AMZN: "15%", GOOG: "10%"} as any;


  // Dow Jones Industrial Average: 
  // S&P/TSX Composite index: ^GSPTSE
  // HANG SENG INDEX: ^HSI
  allIndices = [
    {region: "US", symbol: "^IXIC", name: "Nasdaq"},
    {region: "US", symbol: "^GSPC", name: "S&P 500"},
    {region: "US", symbol: "^DJI", name: "Dow Jones Industrial Average"},
    {region: "CA", symbol: "^GSPTSE", name: "S&P/TSX Composite index"},
    {region: "HK", symbol: "^HSI", name: "HANG SENG INDEX"},
   ] as any;


  constructor(private yfinanceService: YfinanceService) { }

  async ngOnInit(): Promise<void> {
    this.getMovers();

    for(let index of this.allIndices){
      await new Promise(f => setTimeout(f, 750));
      this.getindices(index);
    }
    
  }

  getindices(index: any){
    this.yfinanceService.getQuote(index.symbol, index.region).subscribe(async (quote: any)=>{
      // this.indices.push(quote.quoteResponse.result[0].regularMarketPrice)
      // await new Promise(f => setTimeout(f, 250));
      index["price"] = quote.quoteResponse.result[0].regularMarketPrice
    })
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
        await new Promise(f => setTimeout(f, 1000));
        this.stockInfoList.push(info);
        
      }

      //looping through the losers
      for(let i = 0; i<this.numberOfGainers; i++){

        //for each of the gainers, find the full name and the percent change
        let symbol: string = movers.finance.result[1].quotes[i].symbol;
        let info = {symbol: symbol}
        this.getStockPercentChange(symbol)
        this.getStockName(symbol)
        await new Promise(f => setTimeout(f, 1000));
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