import { provideRouter, RouterConfig } from '@angular/router';

import {HomeComponent} from './content/home.component';
import {DemoComponent} from './content/demo.component';

export const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/home',
        terminal: true
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'demo',
        component: DemoComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];