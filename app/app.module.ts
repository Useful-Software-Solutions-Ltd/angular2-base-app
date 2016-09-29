import { NgModule }       from '@angular/core';
import { AppComponent }   from './app.component';

import { SharedModule } from './shared/shared.module';
import { ContentModule } from './content/content.module';

import { MaterialModule } from '@angular/material';

//import { MdIconRegistry } from '@angular2-material/icon';

@NgModule({
     imports: [
        SharedModule,
        ContentModule,
        MaterialModule.forRoot()
    ],
    providers:[
       //MdIconRegistry
    ],
    declarations: [
        AppComponent
        ],
    bootstrap: [
        AppComponent
        ]
})
export class AppModule {}