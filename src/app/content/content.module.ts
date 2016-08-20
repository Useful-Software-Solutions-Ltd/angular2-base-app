import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import {HomeComponent} from './home.component';
import {DemoComponent} from './demo.component';

import { QuoteService } from './quote.service';

import { HttpModule } from '@angular/http';

import { contentRouting } from './content.routing';

@NgModule({
  imports: [ 
    contentRouting, 
    SharedModule 
    ],
   providers:[
     QuoteService
   ],
  declarations: [
    HomeComponent, DemoComponent
  ],
  exports:[
    HomeComponent, DemoComponent
  ]
})
export class ContentModule { }