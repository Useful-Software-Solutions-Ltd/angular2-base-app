import {bootstrap}    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { APP_ROUTER_PROVIDERS } from './app.routes';

import {AppComponent} from './app.component';

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  APP_ROUTER_PROVIDERS
])
  .catch(err => console.error(err));