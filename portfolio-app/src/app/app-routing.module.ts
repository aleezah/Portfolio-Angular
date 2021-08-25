import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashValueComponent } from './cash-value/cash-value.component';
import { InvestmentsComponent } from './investments/investments.component';

const routes: Routes = [
  {path: "cash-value", component: CashValueComponent},
  {path: "investments", component: InvestmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
