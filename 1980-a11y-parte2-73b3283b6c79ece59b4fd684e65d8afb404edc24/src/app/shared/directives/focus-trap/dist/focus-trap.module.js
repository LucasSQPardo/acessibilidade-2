"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FocusTrapModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var focus_trap_directive_1 = require("./focus-trap.directive");
var FocusTrapModule = /** @class */ (function () {
    function FocusTrapModule() {
    }
    FocusTrapModule = __decorate([
        core_1.NgModule({
            declarations: [focus_trap_directive_1.FocusTrapDirective],
            imports: [common_1.CommonModule],
            exports: [focus_trap_directive_1.FocusTrapDirective]
        })
    ], FocusTrapModule);
    return FocusTrapModule;
}());
exports.FocusTrapModule = FocusTrapModule;
