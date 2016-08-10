"use strict";
var home_component_1 = require('./home.component');
var demo_component_1 = require('./demo.component');
exports.routes = [
    {
        path: '',
        redirectTo: 'home',
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
//# sourceMappingURL=content.routing.js.map