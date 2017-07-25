import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { RentalPropertyCalculatorRoutingModule } from "./rental-property-calculator-routing.module";
import { RentalPropertyCalculatorComponent } from "./rental-property-calculator.component";
import { CalculatorFormService } from "./form/calculator-form.service";
import { RentalCalculatorService } from "./rental-property-calculator.service";
import { ResultsComponent } from "./views/results/results.component";
import { CashFlowComponent } from "./views/cashflow/cashflow.component";
import { LoanInformationComponent } from "./views/loan-information/loan-information.component";

const MODULES = [
  // Do NOT include UniversalModule, HttpModule, or JsonpModule here
  SharedModule,
  RentalPropertyCalculatorRoutingModule
];

const PIPES = [
  // put pipes here
];

const COMPONENTS = [
  // put shared components here
  RentalPropertyCalculatorComponent,
  LoanInformationComponent,
  CashFlowComponent,
  ResultsComponent
];

const PROVIDERS = [
  CalculatorFormService,
  RentalCalculatorService
]

@NgModule({
  imports: [
     ...MODULES
  ],
  declarations: [
    ...PIPES,
    ...COMPONENTS
  ],
    exports: [
    ...MODULES,
    ...PIPES,
    ...COMPONENTS
  ]
})
export class RentalPropertyCalculatorModule { }