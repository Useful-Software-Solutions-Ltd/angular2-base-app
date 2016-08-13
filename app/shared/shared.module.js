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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var sidenav_1 = require('@angular2-material/sidenav');
var card_1 = require('@angular2-material/card');
var list_1 = require('@angular2-material/list');
var icon_1 = require('@angular2-material/icon');
var progress_circle_1 = require('@angular2-material/progress-circle');
var toolbar_1 = require('@angular2-material/toolbar');
var button_1 = require('@angular2-material/button');
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule
            ],
            declarations: [],
            exports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                router_1.RouterModule,
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
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map