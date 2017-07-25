import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { InvestmentReturnCalculatorRoutingModule } from "./investment-return-calculator-routing.module";
import { InvestmentReturnCalculatorComponent } from "./investment-return-calculator.component";
import { InvestmentCalculatorService } from "./investment-return-calculator.service";

const MODULES = [
  // Do NOT include UniversalModule, HttpModule, or JsonpModule here
  SharedModule,
  InvestmentReturnCalculatorRoutingModule
];

const PIPES = [
  // put pipes here
];

const COMPONENTS = [
  // put shared components here
  InvestmentReturnCalculatorComponent
];

const PROVIDERS = [
  InvestmentCalculatorService
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
export class InvestmentReturnCalculatorModule { }