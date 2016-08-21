import { Component, OnInit } from '@angular/core';
import { IComponentInfo } from '../shared/icomponent-info';

import {QuoteService} from './quote.service';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    info: IComponentInfo = {
        title: 'Home',
        description: 'Useful Angular 2 base app with routing and material',
        feedback: '',
        isBusy: false,
    };

    quote: string = '';

    constructor(private quoteService: QuoteService) { }

    ngOnInit() { }

    getQuote(): void {
        this.quoteService.getQuote().then((quote) => {
            this.quote = quote;
        });
    }

}