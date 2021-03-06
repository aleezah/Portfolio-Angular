import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-cash-value',
  templateUrl: './cash-value.component.html',
  styleUrls: ['./cash-value.component.css']
})
export class CashValueComponent implements OnInit {

  cashAcct: any = []
  acctNames: string[] = [];
  submitClicked = true
  backClicked = false
  acct = {} as any;
  data = [] as any;
  labels = [] as any;
  totalCash = 0;

  constructor(private portfolioService: PortfolioService) {
    

   
 }
   
  form = new FormGroup({
    option: new FormControl("All Cash Accounts")
  });
   
  get f(){
    return this.form.controls;
  }
   
  submit(){
   
    this.submitClicked = false
    this.backClicked = true
    console.log(this.form.value.option)

    
    
    /*for(let account of this.cashAcct){
     // console.log(account.cashaccname)
      if (this.form.value.option===account.cashaccname)
      {
        this.acct=account
        this.accountFunds=account.funds 
        this.accountName=account.cashaccname
        this.accountType=account.accounttype
        this.accountId=account.cashaccountid
      }
      console.log(account)
    }
  */
  }

  back(){
    this.backClicked = false
    this.submitClicked = true

  }

  ngOnInit(): void {
    this.cashAcct=this.getTotalAccounts()
    this.onChanges()
  }
  getTotalAccounts(){
    //TODO: add the actual service call once the api is set up

     this.portfolioService.getCashAccounts().subscribe((cashAccounts)=>{

      this.cashAcct = cashAccounts

      this.getCashTotal()
      
    //  this.acctNames=this.getCashAccountNames()
      
     
  }
  
     ) 
  }

  getCashTotal(){
    this.totalCash=0
    for (let account of this.cashAcct )
    {
      this.totalCash=account.funds+this.totalCash
    }
    return this.totalCash

}

  onChanges(): void {
    this.form.valueChanges.subscribe(val => {
      this.acct = this.cashAcct[val.option];
    })
  }
/*
  getCashAccountNames(){
    this.acctNames = []
    console.log("getting account names")
    console.log(this.cashAcct)
    for(let account of this.cashAcct){
      console.log(account)
      this.acctNames.push(account.cashaccname)
      console.log("name"+account.cashaccname)
    }
    return this.acctNames;
  }*/
  
}
