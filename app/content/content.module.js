"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var shared_module_1 = require('../shared/shared.module');
var home_component_1 = require('./home.component');
var demo_component_1 = require('./demo.component');
var quote_service_1 = require('./quote.service');
var content_routing_1 = require('./content.routing');
var ContentModule = (function () {
    function ContentModule() {
    }
    ContentModule = __decorate([
        core_1.NgModule({
            imports: [
                content_routing_1.contentRouting,
                shared_module_1.SharedModule
            ],
            providers: [
                quote_service_1.QuoteService
            ],
            declarations: [
                home_component_1.HomeComponent, demo_component_1.DemoComponent
            ],
            exports: [
                home_component_1.HomeComponent, demo_component_1.DemoComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ContentModule);
    return ContentModule;
}());
exports.ContentModule = ContentModule;
//# sourceMappingURL=content.module.js.map