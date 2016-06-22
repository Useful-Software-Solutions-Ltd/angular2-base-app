"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./content/home.component');
var demo_component_1 = require('./content/demo.component');
exports.routes = [
    {
        path: '',
        redirectTo: '/home',
        terminal: true
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'demo',
        component: demo_component_1.DemoComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map