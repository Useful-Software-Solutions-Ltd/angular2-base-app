import { Component, OnInit } from '@angular/core';
import { IComponentInfo } from '../shared/icomponent-info';
import {MdButton} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

import {QuoteService} from './quote.service';

@Component({
    templateUrl: 'app/content/home.component.html',
    directives: [
        MdButton,
        MD_CARD_DIRECTIVES
    ]
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