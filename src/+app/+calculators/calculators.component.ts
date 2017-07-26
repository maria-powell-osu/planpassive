import { Component } from '@angular/core';
import { SeoService } from "../shared/seo.service";

@Component({
    templateUrl: './calculators.component.html',
    selector: 'calculators',
})
export class CalculatorsComponent {
    constructor( private _seoService: SeoService){
        this._seoService.setTitle("Investment Calculators | Plan Passive");
        this._seoService.setMetaDescription("Use our suite of investment calculators to analyze your real estate deals, future value of your investments, or the cost of waiting to invest.");
    }

}
