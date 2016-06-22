import { Component, OnInit } from '@angular/core';
import {IComponentInfo} from '../shared/icomponent-info';
import {MdButton} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

@Component({ 
    templateUrl: 'app/content/demo.component.html',
      directives: [
        MdButton,
        MD_CARD_DIRECTIVES
    ]
})
export class DemoComponent implements OnInit {
    info: IComponentInfo = {
        title: 'Demo',
        description: 'Some useful stuff ready to go',
        feedback: '',
        isBusy: false
    }; 
    
    constructor() { }

    ngOnInit() { }

}