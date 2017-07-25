import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RentalPropertyCalculatorComponent } from "./rental-property-calculator.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'rental-property-calculator', component: RentalPropertyCalculatorComponent }
    ])
  ]
})
export class RentalPropertyCalculatorRoutingModule { }