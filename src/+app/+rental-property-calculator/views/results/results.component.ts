import { Component, Input, AfterViewInit, ChangeDetectorRef  } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RentalCalculatorService } from '../../rental-property-calculator.service';

@Component({
    templateUrl: "./results.component.html",
    selector: 'result'
})

export class ResultsComponent {
     @Input() calcForm: FormGroup;
     @Input() resultData: any;
     @Input() cashFlowView : string;
     @Input() totalReturnView : string;
     @Input() cashOnEquityView : string;
     cashFlowTableLoading: boolean;
     cashFlowChartLoading: boolean;
     totalReturnChartLoading: boolean;
     totalReturnTableLoading: boolean;
     cashOnEquityChartLoading: boolean;
     cashOnEquityTableLoading: boolean;
     pieChartLoading : boolean;
     incomePieChartsLabels: any;


     constructor(private _rentalCalculatorService: RentalCalculatorService, 
                private _crd: ChangeDetectorRef){
         this.cashFlowTableLoading = false;
         this.cashFlowChartLoading = false;
         this.totalReturnChartLoading = false;
         this.totalReturnTableLoading = false;
         this.cashOnEquityChartLoading = false;
         this.cashOnEquityTableLoading = false;
         this.pieChartLoading = false;
         this.cashFlowView ='graph';
         this.totalReturnView = 'graph';
         this.cashOnEquityView = 'graph';
     }
}