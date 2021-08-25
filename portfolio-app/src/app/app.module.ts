import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestmentsComponent } from './investments/investments.component';
import { CashValueComponent } from './cash-value/cash-value.component';
import { NetWorthComponent } from './net-worth/net-worth.component';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentsComponent,
    CashValueComponent,
    NetWorthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
