import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YfinanceService {

  constructor(private http: HttpClient) { }

  //refer to https://rapidapi.com/apidojo/api/yahoo-finance1/


  getMovers(){
    return this.http.get('https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-movers',{
      params: {region: 'US', lang: 'en-US', count: '6', start: '0'},
      headers: {
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
        'x-rapidapi-key': '75abbe4638msh2921d6904d01f42p19a211jsne706d9eccb36'
      }
    })
  }

  getStockInfo(){
    return this.http.get('https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary', {
      // qs: {symbol: 'AMRN', region: 'US'},
      headers: {
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
        'x-rapidapi-key': '75abbe4638msh2921d6904d01f42p19a211jsne706d9eccb36',
        // useQueryString: true
      }
    }
    

    )
  }
}
