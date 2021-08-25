import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  accountNames : string[] = [];
  form = new FormGroup({
    option: new FormControl('', Validators.required)
  });
  investmentAccount = {} as any;

  constructor(private portfolioService: PortfolioService) {
    this.labels = ["January", "February", "March", "April", "May", "June", "July"];
    this.data = [45, 55, 35, 65, 60, 25, 45];

 }

  ngOnInit(): void {
    this.getInvestmentAccounts();
  }

  getInvestmentAccounts(){

    this.portfolioService.getInvestments().subscribe((investmentAccounts)=>{
      console.log(investmentAccounts)
      this.investmentAccounts = investmentAccounts;
      this.accountNames = this.getInvestmentAccountNames();
    })
    
    //this.investmentAccounts = [{"investmentaccountid":1,"funds":80000.0,"listOfStocks":[{"stockid":1,"timebought":"9999-12-31T23:59:59.000+00:00","stockname":"Apple","purchaseprice":121.36,"numberofstocks":10000,"investmentaccountids":1,"listOfTransaction":[]}],"listOfTransaction":[]},{"investmentaccountid":2,"funds":89000.0,"listOfStocks":[],"listOfTransaction":[]}];
    
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

  getInvestmentAccountNames(){
    this.accountNames = []
    console.log("getting account names")
    console.log(this.investmentAccounts)
    for(let account of this.investmentAccounts){
      console.log(account)
      this.accountNames.push(account.investmentaccname)
      console.log("name"+account.investmentaccname)
    }
    return this.accountNames;
  }

  submit(event: any){
    console.log("submission result:")
    console.log(event)
  }
}
