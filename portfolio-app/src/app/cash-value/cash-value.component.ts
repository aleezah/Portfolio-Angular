import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-cash-value',
  templateUrl: './cash-value.component.html',
  styleUrls: ['./cash-value.component.css']
})
export class CashValueComponent implements OnInit {

  optionList: any = ['Account Id', 'Funds', 'Account Type']
   
  form = new FormGroup({
    option: new FormControl('', Validators.required)
  });
   
  get f(){
    return this.form.controls;
  }
   
  submit(){
    console.log();
    if(this.form.value.option === 'Funds')
    {
      console.log(this.form.value);
    }
    else if(this.form.value.option === 'Account Type')
    {
      console.log(this.form.value);
    }
    else if(this.form.value.option === 'Account Id')
    {
      console.log(this.form.value);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
