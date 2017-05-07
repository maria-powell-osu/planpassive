import { NgModule } from '@angular/core';

import { SharedModule } from '../shared.modules/shared.module';
import { CalculatorsComponent } from './calculators.component';
import { CalculatorsRoutingComponent } from './calculators-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CalculatorsRoutingComponent
  ],
  declarations: [
    CalculatorsComponent
  ]
})
export class CalculatorsModule { }