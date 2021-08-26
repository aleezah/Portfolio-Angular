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
import { NetChartComponent } from './net-chart/net-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatInputModule} from '@angular/material/input'
import {MatNativeDateModule} from '@angular/material/core';
import { CashChartComponent } from './cash-chart/cash-chart.component'
// import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentsComponent,
    CashValueComponent,
    NetWorthComponent,
    LineChartComponent,
    HomeComponent,
    NetChartComponent,
    CashChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule

    // DatePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
