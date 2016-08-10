import { NgModule } from '@angular/core';

import {HomeComponent} from './home.component';
import {DemoComponent} from './demo.component';

import { HttpModule } from '@angular/http';

import { routes } from './content.routing';

@NgModule({
  imports: [ routes, HttpModule ],
  declarations: [
    HomeComponent, DemoComponent
  ]
})
export class ContentModule { }