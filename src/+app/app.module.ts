import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule }   from '@angular/forms';
import { ReCaptchaModule } from 'angular2-recaptcha';
import { CollapseModule } from 'ngx-bootstrap';



//Plan Passive Components
import { BlogListComponent} from "./+blogs/blog-list/blog-list.component";
import { BlogViewComponent } from "./+blogs/blog-view/blog-view.component"; 
import { RentalPropertyCalculatorComponent} from "./+calculators/rental-property-calculator/rental-property-calculator.component";
import { CalculatorFormService} from './+calculators/rental-property-calculator/form/calculator-form.service';
import { InvestmentReturnCalculatorComponent } from "./+calculators/investment-return-calculator/investment-return-calculator.component";  
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { LoaderComponent } from "./shared/loader/loader.component";
import { CashFlowComponent } from "./+calculators/rental-property-calculator/views/cashflow/cashflow.component";
import { RouterModule } from "@angular/router";
import { LoanInformationComponent } from './+calculators/rental-property-calculator/views/loan-information/loan-information.component';
import { ResultsComponent } from './+calculators/rental-property-calculator/views/results/results.component';
import { mpDatePicker } from './shared/datepicker/mpdatepicker';
import { mpToolTip } from './shared/tooltip/mptooltip';
import { FooterComponent } from './shared/footer/footer.component'; 
import { GoogleChartsComponent } from './+calculators/charts/google-charts.component';
import { CommentViewComponent } from './+comments/comment-view/comment-view.component';
import { CommentReplyComponent } from './+comments/comment-reply/comment-reply.component';

//import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    ReCaptchaModule,
    RouterModule,
    CollapseModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    BlogViewComponent,
    BlogListComponent,
    NavbarComponent,
    RentalPropertyCalculatorComponent,
    InvestmentReturnCalculatorComponent,
    LoaderComponent,
    CashFlowComponent,
    LoanInformationComponent,
    ResultsComponent,
    mpDatePicker,
    mpToolTip,
    GoogleChartsComponent,
    CommentViewComponent,
    CommentReplyComponent,
    FooterComponent
     ],
})
export class AppModule {
}

export { AppComponent } from './app.component';
