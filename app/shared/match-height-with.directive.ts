import { Directive, ElementRef, Input, Inject, HostListener, OnChanges } from '@angular/core';
import {DOCUMENT} from "@angular/platform-browser";

//important always use A2 rather than manipulating the DOM directly when possible. This is only used to target elements outside of the app.

@Directive({
    selector: '[matchHeightWith]'
})

export class MatchHeightWithDirective implements OnChanges {
    private target: HTMLElement;
    private source: HTMLElement;
    private document: any;

    @Input('matchHeightWith') sourceName: string;

    @HostListener('window:resize', ['$event.target']) onresize(window: any) {
        this.setHeight();
    }

    constructor(el: ElementRef, @Inject(DOCUMENT) document: any) {
        this.target = el.nativeElement;
        this.document = document;

        this.setHeight();
    }

    setHeight() {
        if (this.source) {
            console.log(this.target.clientHeight);            
            
            this.target.style.height = '0px';
                        
            //console.log("adjusting " + this.target.nodeName + " height from  " + this.target.clientHeight + " to " + this.source.clientHeight);
            this.target.style.height = <any>this.source.clientHeight;
        }
    }

    setSource() {
        if (this.sourceName && this.document) {
            this.source = this.document.querySelector(this.sourceName);
        }
    }

    ngOnChanges() {
        this.setSource();
        this.setHeight();
    }
}