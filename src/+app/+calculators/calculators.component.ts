import { Component } from '@angular/core';
import { SeoService } from "../shared/seo.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: './calculators.component.html',
    selector: 'calculators',
})
export class CalculatorsComponent {
    constructor( private _seoService: SeoService, private _router: Router ){
        //since the calculator compoenent lives in the home page as well
        //we need to make sure that the titles only get changes when we are on the
        //calculators route
        if(_router && _router.url !== "/home"){
            this._seoService.setTitle("Investment Calculators | Plan Passive");
            this._seoService.setMetaDescription("Use our suite of investment calculators to analyze your real estate deals, future value of your investments, or the cost of waiting to invest.");
        }
    }
}
