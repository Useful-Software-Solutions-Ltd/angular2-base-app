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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var platform_browser_1 = require("@angular/platform-browser");
//important always use A2 rather than manipulating the DOM directly when possible. This is only used to target elements outside of the app.
var MatchHeightWithDirective = (function () {
    function MatchHeightWithDirective(el, document) {
        this.target = el.nativeElement;
        this.document = document;
        this.setHeight();
    }
    MatchHeightWithDirective.prototype.onresize = function (window) {
        this.setHeight();
    };
    MatchHeightWithDirective.prototype.setHeight = function () {
        if (this.source) {
            console.log(this.target.clientHeight);
            this.target.style.height = '0px';
            //console.log("adjusting " + this.target.nodeName + " height from  " + this.target.clientHeight + " to " + this.source.clientHeight);
            this.target.style.height = this.source.clientHeight;
        }
    };
    MatchHeightWithDirective.prototype.setSource = function () {
        if (this.sourceName && this.document) {
            this.source = this.document.querySelector(this.sourceName);
        }
    };
    MatchHeightWithDirective.prototype.ngOnChanges = function () {
        this.setSource();
        this.setHeight();
    };
    __decorate([
        core_1.Input('matchHeightWith'), 
        __metadata('design:type', String)
    ], MatchHeightWithDirective.prototype, "sourceName", void 0);
    __decorate([
        core_1.HostListener('window:resize', ['$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], MatchHeightWithDirective.prototype, "onresize", null);
    MatchHeightWithDirective = __decorate([
        core_1.Directive({
            selector: '[matchHeightWith]'
        }),
        __param(1, core_1.Inject(platform_browser_1.DOCUMENT)), 
        __metadata('design:paramtypes', [core_1.ElementRef, Object])
    ], MatchHeightWithDirective);
    return MatchHeightWithDirective;
}());
exports.MatchHeightWithDirective = MatchHeightWithDirective;
//# sourceMappingURL=match-height-with.directive.js.map