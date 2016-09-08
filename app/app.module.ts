import { NgModule }       from '@angular/core';
import { AppComponent }   from './app.component';

import { SharedModule } from './shared/shared.module';
import { ContentModule } from './content/content.module';

import { MdIconRegistry } from '@angular2-material/icon';

@NgModule({
     imports: [
        SharedModule,
        ContentModule
    ],
    providers:[
        MdIconRegistry
    ],
    declarations: [
        AppComponent
        ],
    bootstrap: [
        AppComponent
        ]
})
export class AppModule {}