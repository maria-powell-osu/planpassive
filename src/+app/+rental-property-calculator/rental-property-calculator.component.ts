import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray} from '@angular/forms';
import { RentalCalculatorService } from './rental-property-calculator.service';
import { GoogleChartsService } from "../shared/charts/google-charts-service";
import { LoaderComponent } from '../shared/loader/loader.component';
import { NgModule }      from '@angular/core';
import { CalculatorFormService } from './form/calculator-form.service';
import { SeoService } from "../shared/seo.service";
import { isBrowser } from 'angular2-universal';

@Component({
    templateUrl: './rental-property-calculator.component.html',
    providers: [RentalCalculatorService, CalculatorFormService]
})
export class RentalPropertyCalculatorComponent implements OnInit {
     loading : Boolean;
     calcForm : FormGroup;
     view : string;
     resultData : any;

     constructor (private _rentalCalculatorService : RentalCalculatorService,
                  private fb: FormBuilder,
                  private _calculatorFormService : CalculatorFormService,
                  private _googleChartsService : GoogleChartsService,
                  private _seoService: SeoService){
        this._seoService.setTitle("Rental Property Calculator | Plan Passive");
        this._seoService.setMetaDescription("Use the best fee rental property calculator online. See customized graphs and charts of your cash flow, total return, and cash on equity over time.");
    }

     ngOnInit(): void {
          if(isBrowser){
            window.scrollTo(0, 0);
        }
         this.view = 'loan';
         this.calcForm = this._calculatorFormService.calcForm;
         this._calculatorFormService.addEventListeners(this.calcForm);
     } 
    scrollToTop(){
        if(isBrowser){
            window.scrollTo(0, 0);
        }
    }
      calculate() {
        this.scrollToTop();
        //setting this to true, highlights missing fields now in form
        this.calcForm.patchValue({'userClickedResults': true});

        //Only run calculation if the required inputs are there and valid
        if(this.calcForm.valid){
            this.resultData = this._rentalCalculatorService.calculateResults(this.calcForm);
            
            if (this.resultData){

                //watchers have been added for those used in charts to draw up the graphs
                this.calcForm.patchValue({'summaryData': this.resultData.summaryData});
                this.calcForm.patchValue({'cashFlowProjectionTableData': this.resultData.cashFlowProjectionTable});
                this.calcForm.patchValue({'cashFlowProjectionChart': this.resultData.cashFlowProjectionChart});
                this.calcForm.patchValue({'cashFlowSummary': this.resultData.cashFlowSummary});
                this.calcForm.patchValue({'incomePieChart': this.resultData.incomePieChart});
                this.calcForm.patchValue({'expensePieChart': this.resultData.expensePieChart});
                this.calcForm.patchValue({'cashOnEquityTable': this.resultData.cashOnEquityTable});
                this.calcForm.patchValue({'cashOnEquityChart': this.resultData.cashOnEquityChart});
                this.calcForm.patchValue({'totalReturnTable': this.resultData.totalReturnTable});
                this.calcForm.patchValue({'totalReturnStackedBarChart': this.resultData.totalReturnStackedBarChart});
                this.calcForm.patchValue({'totalReturnSummary': this.resultData.totalReturnSummary});

                //since we are in ngAfterViewInit which loads after view is loaded, we tell Angular to check the values again
                //without this view will not load
               // this._crd.detectChanges();
            }
        }
     
     }
}