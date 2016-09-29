import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }        from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

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
    MaterialModule
  ]
})
export class SharedModule { }