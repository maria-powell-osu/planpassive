import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CalculatorsModule } from '../+calculators/calculators.module';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    CalculatorsModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { 
}
