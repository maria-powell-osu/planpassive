import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CalculatorsComponent } from "./calculators.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'investment-calculators', component: CalculatorsComponent }
    ])
  ]
})
export class CalculatorsRoutingModule { }