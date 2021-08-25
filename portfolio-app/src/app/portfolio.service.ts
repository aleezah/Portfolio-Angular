import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  url = "http://portfolio-manager-portfolio-manager.namdevops7.conygre.com"
  constructor(private http: HttpClient) {

  }

  getInvestments(){
    return this.http.get(`${this.url}/investments`)
    //return [{"investmentaccountid":1,"funds":80000.0,"listOfStocks":[{"stockid":1,"timebought":"9999-12-31T23:59:59.000+00:00","stockname":"Apple","purchaseprice":121.36,"numberofstocks":10000,"investmentaccountids":1,"listOfTransaction":[]}],"listOfTransaction":[]},{"investmentaccountid":2,"funds":89000.0,"listOfStocks":[],"listOfTransaction":[]}]
  }

  getCashAccounts(){
    return this.http.get(`${this.url}/Cash Account`)
    //return [{"investmentaccountid":1,"funds":80000.0,"listOfStocks":[{"stockid":1,"timebought":"9999-12-31T23:59:59.000+00:00","stockname":"Apple","purchaseprice":121.36,"numberofstocks":10000,"investmentaccountids":1,"listOfTransaction":[]}],"listOfTransaction":[]},{"investmentaccountid":2,"funds":89000.0,"listOfStocks":[],"listOfTransaction":[]}]
  }

  getAllStocks(){
    return this.http.get(`${this.url}/stocks/all`)
  }
}
