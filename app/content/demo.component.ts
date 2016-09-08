import { Component, OnInit, Inject } from '@angular/core';
import {IComponentInfo} from '../shared/icomponent-info';

@Component({ 
    moduleId: module.id,
    templateUrl: 'demo.component.html'
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