import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReCaptchaModule } from 'angular2-recaptcha';
import { ApiService } from './api.service';
import { ModelService } from './model/model.service';
import { CommentViewComponent } from "./comments/comment-view.component";
import { CommentReplyComponent } from "./comments/comment-reply.component";
import { LoaderComponent } from "./loader/loader.component";
import { GoogleChartsComponent } from "./charts/google-charts.component";
import { mpDatePicker } from "./datepicker/mpdatepicker";
import { mpToolTip } from "./tooltip/mptooltip";
import { GoogleChartsService } from "./charts/google-charts-service"; 


const MODULES = [
  // Do NOT include UniversalModule, HttpModule, or JsonpModule here
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  ReCaptchaModule
];

const PIPES = [
  // put pipes here
  mpDatePicker,
  mpToolTip
];

const COMPONENTS = [
  // put shared components here
  CommentViewComponent,
  CommentReplyComponent,
  LoaderComponent,
  GoogleChartsComponent
];

const PROVIDERS = [
  ModelService,
  ApiService,
  GoogleChartsService
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
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ...PROVIDERS
      ]
    };
  }
}
