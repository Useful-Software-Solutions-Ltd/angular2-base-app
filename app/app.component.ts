import {Component, OnInit, Input} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdSpinner} from '@angular2-material/progress-circle';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';

import {IComponentInfo} from './shared/icomponent-info';
import {MatchHeightWithDirective} from './shared/match-height-with.directive';

import {QuoteService} from './content/quote.service';


@Component({
  selector: 'useful-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [
    MdIconRegistry,
    HTTP_PROVIDERS,
    QuoteService
  ],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    ROUTER_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    MdButton,
    MdIcon,
    MatchHeightWithDirective
  ]
})


export class AppComponent implements OnInit {
  height: number;
  
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
      route: '/home',
      icon: 'home'
    });

    this.navRoutes.push({
      name: 'demo',
      description: 'demo page',
      route: '/demo',
      icon: 'description'
    });
  }
}
