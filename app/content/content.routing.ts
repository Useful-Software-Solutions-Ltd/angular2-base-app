import { Routes,
    RouterModule }  from '@angular/router';

import {HomeComponent} from './home.component';
import {DemoComponent} from './demo.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
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

export const contentRouting = RouterModule.forRoot(routes);