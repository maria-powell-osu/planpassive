import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InvestmentReturnCalculatorComponent } from "./investment-return-calculator.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'investment-return-calculator', component: InvestmentReturnCalculatorComponent }
    ])
  ]
})
export class InvestmentReturnCalculatorRoutingModule { }