import {OnInit, Directive, ElementRef, Input} from '@angular/core';
import { isBrowser } from 'angular2-universal';

declare var jQuery: any;

@Directive({
  selector: '[mptooltip]'
})
export class mpToolTip implements OnInit {
    private element: ElementRef;
    @Input () text : string;
     
   constructor( element: ElementRef) {
    this.element = element;
  }
  
  ngOnInit() {
    if(isBrowser){jQuery(this.element.nativeElement).attr('title', this.text).tooltip();}
  }
}