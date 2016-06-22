import { Injectable } from '@angular/core';

@Injectable()
export class QuoteService {

    constructor() { }

    getQuote(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                resolve('we march on');
            }, 1000);
        });
    }
}