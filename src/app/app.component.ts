import {Component, OnInit, Input} from '@angular/core';

import {IComponentInfo} from './shared/icomponent-info';

@Component({
  selector: 'useful-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  info: IComponentInfo = {
    title: 'Useful base app',
    description: 'Useful Angular 2 base app with routing and material',
    feedback: '',
    isBusy: false,
  };

  navRoutes: Object[] = [];

  constructor() {

  }

  ngOnInit() {
    this.navRoutes.push({
      name: 'home',
      description: 'home page',
      route: 'home',
      icon: 'home'
    });

    this.navRoutes.push({
      name: 'demo',
      description: 'demo page',
      route: 'demo',
      icon: 'description'
    });
  }
}
