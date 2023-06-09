"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FocusBackModule = void 0;
var common_1 = require("@angular/common");
var focus_back_directive_1 = require("./focus-back.directive");
var core_1 = require("@angular/core");
var FocusBackModule = /** @class */ (function () {
    function FocusBackModule() {
    }
    FocusBackModule = __decorate([
        core_1.NgModule({
            declarations: [focus_back_directive_1.FocusBackDirective],
            imports: [common_1.CommonModule],
            exports: [focus_back_directive_1.FocusBackDirective]
        })
    ], FocusBackModule);
    return FocusBackModule;
}());
exports.FocusBackModule = FocusBackModule;
