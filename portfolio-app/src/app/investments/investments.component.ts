import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {
  investmentAccounts = [] as any;
  totalInvestments = 0;
  data = [] as any;
  labels = [] as any;
  accountNames : string[] = [];
  form = new FormGroup({
    option: new FormControl('All Investment Accounts', Validators.required)
  });
  investmentAccount = {} as any;
  startDate = "";

  constructor(private portfolioService: PortfolioService) {
    this.labels = ["January", "February", "March", "April", "May", "June", "July"];
    this.data = [45, 55, 35, 65, 60, 25, 45];

 }

  ngOnInit(): void {
    this.getInvestmentAccounts();

    this.onChanges()

    this.getInvestmentHistory()
  }

  getInvestmentAccounts(){

    this.portfolioService.getInvestments().subscribe((investmentAccounts)=>{
      console.log(investmentAccounts);
      this.investmentAccounts = investmentAccounts;

      //calculate the total investments
      this.getTotalInvestments();
    })
    
  }

  getTotalInvestments(){
    this.totalInvestments = 0;

    for(let account of this.investmentAccounts){
      this.totalInvestments += account.funds;
      console.log(account.investmentaccname)
    }

    return this.totalInvestments;
  }

  getValueAtDate(accountId: number, date: Date): number{
    return 0;
  }


  // submit(index: any){
  //   this.investmentAccount = this.investmentAccounts[index];
  // }

  onChanges(): void {
    this.form.valueChanges.subscribe(val => {
      this.investmentAccount = this.investmentAccounts[val.option];
    })
  }

  getInvestmentHistory(){
    this.portfolioService.getInvestmentHistory().subscribe((history)=>{
      console.log(history)
    })
  }

}

    // this.investmentAccounts = [{"investmentaccountid":1,"funds":80000.0,"listOfStocks":[{"stockid":1,"timebought":"9999-12-31T23:59:59.000+00:00","stockname":"Apple","purchaseprice":121.36,"numberofstocks":10000,"investmentaccountids":1,"listOfTransaction":[]}],"listOfTransaction":[]},{"investmentaccountid":2,"funds":89000.0,"listOfStocks":[],"listOfTransaction":[]}];