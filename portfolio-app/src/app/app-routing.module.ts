import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashValueComponent } from './cash-value/cash-value.component';
import { HomeComponent } from './home/home.component';
import { InvestmentsComponent } from './investments/investments.component';
import { NetWorthComponent } from './net-worth/net-worth.component';

const routes: Routes = [
  {path: "home", component: HomeComponent, pathMatch: "full"},
  {path: "cash-value", component: CashValueComponent, pathMatch: "full"},
  {path: "investments", component: InvestmentsComponent, pathMatch: "full"},
  {path: "net-worth", component: NetWorthComponent, pathMatch: "full"},
  {path: "", redirectTo: "home", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
