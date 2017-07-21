import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CalculatorsRoutingModule } from "./calculators-routing.module";
import { CalculatorsComponent } from "./calculators.component";
const MODULES = [
  // Do NOT include UniversalModule, HttpModule, or JsonpModule here
  SharedModule,
  CalculatorsRoutingModule
];

const PIPES = [
  // put pipes here
];

const COMPONENTS = [
  // put shared components here
  CalculatorsComponent
];

const PROVIDERS = [
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
export class CalculatorsModule { }