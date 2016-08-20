import { NgModule }       from '@angular/core';
import { AppComponent }   from './app.component';

import { SharedModule } from './shared/shared.module';
import { ContentModule } from './content/content.module';

//import { QuoteService } from './content/quote.service';

@NgModule({
     imports: [
        SharedModule,
        ContentModule
    ],
    declarations: [
        AppComponent
        ],
    bootstrap: [
        AppComponent
        ]
    // providers: [ QuoteService ],
})
export class AppModule {}