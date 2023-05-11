"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ModalModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var focus_trap_module_1 = require("./../../directives/focus-trap/focus-trap.module");
var modal_component_1 = require("./modal.component");
var modal_service_1 = require("./services/modal.service");
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule = __decorate([
        core_1.NgModule({
            declarations: [modal_component_1.ModalComponent],
            imports: [
                common_1.CommonModule,
                focus_trap_module_1.FocusTrapModule
            ],
            exports: [modal_component_1.ModalComponent],
            providers: [modal_service_1.ModalService]
        })
    ], ModalModule);
    return ModalModule;
}());
exports.ModalModule = ModalModule;
