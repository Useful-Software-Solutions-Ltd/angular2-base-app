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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var forms_1 = require('@angular/forms');
var app_routing_1 = require('./app.routing');
var sidenav_1 = require('@angular2-material/sidenav');
var card_1 = require('@angular2-material/card');
var list_1 = require('@angular2-material/list');
var icon_1 = require('@angular2-material/icon');
var progress_circle_1 = require('@angular2-material/progress-circle');
var toolbar_1 = require('@angular2-material/toolbar');
var button_1 = require('@angular2-material/button');
var home_component_1 = require('./content/home.component');
var demo_component_1 = require('./content/demo.component');
var quote_service_1 = require('./content/quote.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                demo_component_1.DemoComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [quote_service_1.QuoteService],
            imports: [
                platform_browser_1.BrowserModule,
                // Router
                app_routing_1.routing,
                // Forms
                forms_1.FormsModule,
                // Material Design 
                sidenav_1.MdSidenavModule,
                card_1.MdCardModule,
                list_1.MdListModule,
                icon_1.MdIconModule,
                progress_circle_1.MdProgressCircleModule,
                toolbar_1.MdToolbarModule,
                button_1.MdButtonModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map