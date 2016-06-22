import {Component, OnInit} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdSpinner} from '@angular2-material/progress-circle';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';

import {IComponentInfo} from './shared/icomponent-info';

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
    MdToolbar,
    MdButton,
    MdIcon
  ]
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
      route: '/home',
      icon: 'home'
    });

    this.navRoutes.push({
      name: 'demo',
      description: 'demo page',
      route: '/demo',
      icon: 'description'
    });

    //temporary fix until usAsDefault gets added to rc
    //this.router.navigate(['/home']);
  }
}
