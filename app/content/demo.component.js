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
var button_1 = require('@angular2-material/button');
var card_1 = require('@angular2-material/card');
var DemoComponent = (function () {
    function DemoComponent() {
        this.info = {
            title: 'Demo',
            description: 'Some useful stuff ready to go',
            feedback: '',
            isBusy: false
        };
    }
    DemoComponent.prototype.ngOnInit = function () { };
    DemoComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/content/demo.component.html',
            directives: [
                button_1.MdButton,
                card_1.MD_CARD_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DemoComponent);
    return DemoComponent;
}());
exports.DemoComponent = DemoComponent;
//# sourceMappingURL=demo.component.js.map