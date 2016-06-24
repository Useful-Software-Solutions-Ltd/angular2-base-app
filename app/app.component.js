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
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var sidenav_1 = require('@angular2-material/sidenav');
var card_1 = require('@angular2-material/card');
var list_1 = require('@angular2-material/list');
var icon_1 = require('@angular2-material/icon');
var toolbar_1 = require('@angular2-material/toolbar');
var button_1 = require('@angular2-material/button');
var quote_service_1 = require('./content/quote.service');
var AppComponent = (function () {
    function AppComponent() {
        this.info = {
            title: 'Useful base app',
            description: 'Useful Angular 2 base app with routing and material',
            feedback: '',
            isBusy: false,
        };
        this.navRoutes = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.navRoutes.push({
            name: 'home',
            description: 'home page',
            route: '/home',
            icon: 'home'
        });
        this.navRoutes.push({
            name: 'demo',
            description: 'demo page',
            route: '/demo',
            icon: 'description'
        });
        //temporary fix until usAsDefault gets added to rc
        //this.router.navigate(['/home']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'useful-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
            providers: [
                icon_1.MdIconRegistry,
                http_1.HTTP_PROVIDERS,
                quote_service_1.QuoteService
            ],
            directives: [
                sidenav_1.MD_SIDENAV_DIRECTIVES,
                list_1.MD_LIST_DIRECTIVES,
                card_1.MD_CARD_DIRECTIVES,
                router_1.ROUTER_DIRECTIVES,
                toolbar_1.MD_TOOLBAR_DIRECTIVES,
                button_1.MdButton,
                icon_1.MdIcon
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map