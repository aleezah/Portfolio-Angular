import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashValueComponent } from './cash-value/cash-value.component';
import { HomeComponent } from './home/home.component';
import { InvestmentsComponent } from './investments/investments.component';
import { NetWorthComponent } from './net-worth/net-worth.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "cash-value", component: CashValueComponent},
  {path: "investments", component: InvestmentsComponent},
  {path: "net-worth", component: NetWorthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
