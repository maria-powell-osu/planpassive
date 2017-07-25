import { ViewChild, ElementRef, OnInit, Directive , Input, Self, Renderer, EventEmitter, Output} from '@angular/core';
import {FormControlName,  NgControl, DefaultValueAccessor } from '@angular/forms';
import { isBrowser } from 'angular2-universal';

declare var jQuery: any;

@Directive({
  selector: '[mp-datepicker]'
})
export class mpDatePicker implements OnInit {
    @Output() dateChange = new EventEmitter();
    private element: ElementRef;
     
   
   constructor( element: ElementRef) {
    this.element = element;
  }
  
  ngOnInit() {
    //added for server-side support since Jquery is rendered in the browser
    if (isBrowser) {
      jQuery(this.element.nativeElement).datepicker({
                dateFormat: 'mm/dd/yy',
                changeMonth: true,
                changeYear: true,
                onSelect: (date:any) => {
                  //returns the new date value
                  this.dateChange.next(date);
                }
            });
      }
    }
}