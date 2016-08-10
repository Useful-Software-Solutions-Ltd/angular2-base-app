import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';

import {MdSidenavModule} from '@angular2-material/sidenav';
import {MdCardModule} from '@angular2-material/card';
import {MdListModule} from '@angular2-material/list';
import {MdIconModule} from '@angular2-material/icon';
import {MdProgressCircleModule} from '@angular2-material/progress-circle';
import {MdToolbarModule} from '@angular2-material/toolbar';
import {MdButtonModule} from '@angular2-material/button';

import { ContentModule } from './content/content.module';
import { HomeComponent } from './content/home.component';
import { DemoComponent } from './content/demo.component';

import { QuoteService } from './content/quote.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DemoComponent
        ],
    bootstrap:    [AppComponent],
    providers: [ QuoteService ],
    imports: [
        BrowserModule, 
        // Router
        routing, 
        // Forms
        FormsModule, 
        // Material Design 
        MdSidenavModule,
        MdCardModule,
        MdListModule,
        MdIconModule,
        MdProgressCircleModule,
        MdToolbarModule,
        MdButtonModule
    ]
})
export class AppModule {}