import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {
  investmentAccounts = {} as any;
  totalInvestments = 0;
  data = [] as any;
  labels = [] as any;

  constructor(private portfolioService: PortfolioService) {

    this.getInvestmentAccounts();
    this.investmentAccounts = this.getTotalInvestments();
    this.labels = ["January", "February", "March", "April", "May", "June", "July"];
    this.data = [45, 55, 35, 65, 60, 25, 45];

 }

  ngOnInit(): void { }

  getInvestmentAccounts(){
    //TODO: add the actual service call once the api is set up

    this.portfolioService.getInvestments().subscribe((investmentAccounts)=>{
      console.log(investmentAccounts)
    })
    
    this.investmentAccounts = [{"investmentaccountid":1,"funds":80000.0,"listOfStocks":[{"stockid":1,"timebought":"9999-12-31T23:59:59.000+00:00","stockname":"Apple","purchaseprice":121.36,"numberofstocks":10000,"investmentaccountids":1,"listOfTransaction":[]}],"listOfTransaction":[]},{"investmentaccountid":2,"funds":89000.0,"listOfStocks":[],"listOfTransaction":[]}];
    
  }



  getTotalInvestments(){
    this.totalInvestments = 0;

    for(let account of this.investmentAccounts){
      this.totalInvestments += account.funds;
    }

    return this.totalInvestments;
  }

  getValueAtDate(accountId: number, date: Date): number{
    return 0;
  }


}
