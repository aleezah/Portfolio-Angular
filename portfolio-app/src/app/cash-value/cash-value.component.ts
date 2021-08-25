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
  submitClicked = true
  backClicked = false

  constructor(private portfolioService: PortfolioService) {
    this.cashAcct=this.getTotalAccounts()
 }
   
  form = new FormGroup({
    option: new FormControl('')
  });
   
  get f(){
    return this.form.controls;
  }
   
  submit(){
    this.submitClicked = false
    this.backClicked = true
    console.log(this.cashAcct)
  }

  back(){
    this.backClicked = false
    this.submitClicked = true
  }

  ngOnInit(): void {
  }
  getTotalAccounts(){
    //TODO: add the actual service call once the api is set up

     this.portfolioService.getCashAccounts().subscribe((cashAccounts)=>{

      this.cashAcct = cashAccounts
     
  }
     )
  }
}
