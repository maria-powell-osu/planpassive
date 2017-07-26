import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';
import { isBrowser } from 'angular2-universal';

 
@Injectable()
 
export class SeoService {

    private headElement: HTMLElement;
    private metaDescription: HTMLElement;
    private DOM: any;
    private titleElement: HTMLElement;

    constructor(){
        if(isBrowser){
            this.DOM = getDOM();
            this.headElement = this.DOM.query('head');
            this.titleElement = this.getOrCreateTitleElement();
            this.metaDescription = this.getOrCreateMetaElement('description');
        }
    }
    
    public setTitle(newTitle: string) {
        if(isBrowser){
         this.titleElement.innerHTML = newTitle;
        }
    }
 
    public setMetaDescription(description: string) {
        if(isBrowser){
        this.metaDescription.setAttribute('content', description);
        }
    }
    
    /**
    * get the HTML Element when it is in the markup, or create it.
    * @param name
    * @returns {HTMLElement}
    */
    private getOrCreateMetaElement(name: string): HTMLElement {
        if(isBrowser){
            let el: HTMLElement;
            el = this.DOM.query('meta[name=' + name + ']');
            if (el === null) {
                el = this.DOM.createElement('meta');
                el.setAttribute('name', name);
                this.headElement.appendChild(el);
            }
            return el;
        }
    }

    private getOrCreateTitleElement(): HTMLElement {
        if(isBrowser){
            let el: HTMLElement;
            el = this.DOM.query('title');
            if (el === null) {
                el = this.DOM.createElement('title');
                this.headElement.appendChild(el);
            }
            return el;
        }
    }
 
}