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
var quote_service_1 = require('./quote.service');
var HomeComponent = (function () {
    function HomeComponent(quoteService) {
        this.quoteService = quoteService;
        this.info = {
            title: 'Home',
            description: 'Useful Angular 2 base app with routing and material',
            feedback: '',
            isBusy: false,
        };
        this.quote = '';
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.getQuote = function () {
        var _this = this;
        this.quoteService.getQuote().then(function (quote) {
            _this.quote = quote;
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/content/home.component.html'
        }), 
        __metadata('design:paramtypes', [quote_service_1.QuoteService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map