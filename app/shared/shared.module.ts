import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }        from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { MdCoreModule } from '@angular2-material/core';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdCardModule } from '@angular2-material/card';
import { MdListModule } from '@angular2-material/list';
import { MdIconModule } from '@angular2-material/icon';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
  ],
  exports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    // Forms
    FormsModule,
    // Material Design
    MdCoreModule, 
    MdCardModule,
    MdListModule,
    MdIconModule,
    MdProgressCircleModule,
    MdToolbarModule,
    MdButtonModule,
    MdSidenavModule
  ]
})
export class SharedModule { }