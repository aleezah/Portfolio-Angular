import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { PortfolioService } from '../portfolio.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { formatDate } from '@angular/common';
import { Component, Input, OnInit, Inject, LOCALE_ID, ViewChild } from '@angular/core';



@Component({
  selector: 'app-net-worth',
  templateUrl: './net-worth.component.html',
  styleUrls: ['./net-worth.component.css']
})
export class NetWorthComponent implements OnInit {

  
  constructor(@Inject(LOCALE_ID) private locale: string,private portfolioService: PortfolioService)  {
  //  this.labels = ["January", "February", "March", "April", "May", "June", "July"];
    //this.data = [45, 55, 35, 65, 60, 25, 45];
  }
  
  events: any = new Date();
  day:any = new Date();
  year:any = new Date();
  month:any = new Date();
  data = [] as any;
  labels = [] as any;
  netWorthSum=0
  cashTotal=0
  investTotal=0
  cashAcct: any = []
  investAcct: any = []

  addEvent(event: MatDatepickerInputEvent<Date>) {
    this.events =event.value;
    this.events = formatDate(this.events, 'yyyy-MM-dd',this.locale)
  }
  ngOnInit(): void {
    this.cashAcct=this.getTotalAccounts()
    this.investAcct=this.getInvestmentAccounts()
  }

  getTotalAccounts()
  {
    this.portfolioService.getCashAccounts().subscribe((cashAccounts)=>{
      this.cashAcct = cashAccounts
      this.getCashTotal()
    });
  } 
  getInvestmentAccounts(){

    this.portfolioService.getInvestments().subscribe((investmentAccounts)=>{
      console.log(investmentAccounts);
      this.investAcct = investmentAccounts;

      //calculate the total investments
      this.getInvestTotal();
    })
    
  }

  getCashTotal(){
    console.log("here")
  for (let account of this.cashAcct )
  {
    this.cashTotal=account.funds+this.cashTotal
  }
  return this.cashTotal

}
getNetWorth(){
this.netWorthSum=this.cashTotal+this.investTotal
return this.netWorthSum
}

getInvestTotal(){
  console.log("here")
for (let account of this.investAcct )
{
  console.log(account)
  this.investTotal=account.funds+this.investTotal
}
return this.investTotal

}
  
  
}
