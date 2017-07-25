import { Injectable } from "@angular/core";

@Injectable()
export class GoogleChartsService {
    private googleChartsHaveLoaded:boolean = false;
    private googleChartsHaveDrawn:boolean = false;
    
    constructor (){  
      }

    setHasGoogleChartsLoaded(newValue:boolean) : void{
        this.googleChartsHaveLoaded = newValue;
    }
    getHasGoogleChartsLoaded() : boolean{
        return this.googleChartsHaveLoaded;
    }

    
    setGoogleChartsHaveDrawn(newValue:boolean) : void{
        this.googleChartsHaveDrawn = newValue;
    }
    getGoogleChartsHaveDrawn() : boolean{
        return this.googleChartsHaveDrawn;
    }


}