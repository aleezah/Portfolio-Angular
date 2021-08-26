import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestmentsComponent } from './investments/investments.component';
import { CashValueComponent } from './cash-value/cash-value.component';
import { NetWorthComponent } from './net-worth/net-worth.component';
import { HttpClientModule } from '@angular/common/http';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ChartModule } from 'angular2-chartjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { HomeComponent } from './home/home.component';
// import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentsComponent,
    CashValueComponent,
    NetWorthComponent,
    LineChartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
    // DatePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
