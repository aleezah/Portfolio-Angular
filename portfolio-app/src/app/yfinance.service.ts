import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YfinanceService {
  host = 'apidojo-yahoo-finance-v1.p.rapidapi.com'
  key =  'a08d6debbcmsh7f9d6e1be5d4fedp1fc813jsn3f2c6e66d2d8'

  constructor(private http: HttpClient) { }

  //refer to https://rapidapi.com/apidojo/api/yahoo-finance1/


  getMovers(){
    return this.http.get('https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-movers',{
      params: {region: 'US', lang: 'en-US', count: '6', start: '0'},
      headers: {
        'x-rapidapi-host': this.host,
        'x-rapidapi-key': this.key
      }
    })
  }

  getStockInfo(symbol: string){
    return this.http.get('https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary', {
      // qs: {symbol: 'AMRN', region: 'US'},
      params:{symbol: symbol},
      headers: {
        'x-rapidapi-host': this.host,
        'x-rapidapi-key': this.key,
        // useQueryString: true
      }
    }
    

    )
  }

  getStockPercentChange(symbol: string){
    return this.http.get('https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials', {
      // qs: {symbol: 'AMRN', region: 'US'},
      params:{
        symbol: symbol,
        f:"p2"
      },
      headers: {
        'x-rapidapi-host': this.host,
        'x-rapidapi-key': this.key,
        // useQueryString: true
      }
    })
  }

  getQuote(symbol: string, region: string){
    return this.http.get('https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes', {
      params:{
        symbols: symbol,
        region: region
      },
      headers: {
        'x-rapidapi-host': this.host,
        'x-rapidapi-key': this.key,
        // useQueryString: true
      }
    })
  }


}
