import { Injectable, Inject } from '@angular/core';
import { getDOM, DomAdapter } from '@angular/platform-browser/src/dom/dom_adapter';
import {DOCUMENT} from '@angular/platform-browser';

 
@Injectable()
 
export class SeoService {

    private headElement: HTMLElement;
    private metaDescription: HTMLElement;
    private DOM: any;
    private titleElement: HTMLElement;

    constructor( @Inject(DOCUMENT) private _document: any){
            this.DOM = getDOM();
    }
    public setTitle(title: string) {
        this._document.title = title
    }
    public setMetaDescription(content: string) {
        const head = this._document.head;
        const name = "description";
        let childNodesAsList = this.DOM.childNodesAsList(head);
        let metaEl = childNodesAsList.find(el => el['attribs'] ? el['attribs'].name == name : false);
        if (metaEl) metaEl['attribs'].content = content;
    }
 
}