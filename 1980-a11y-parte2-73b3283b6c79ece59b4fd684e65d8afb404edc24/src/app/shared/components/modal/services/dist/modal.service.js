"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ModalService = void 0;
var modal_component_1 = require("./../modal.component");
var core_1 = require("@angular/core");
var modal_ref_1 = require("../../models/modal-ref");
var ModalService = /** @class */ (function () {
    function ModalService(componentFactoryResolver, injector, bodyInjector) {
        this.injector = injector;
        this.bodyInjector = bodyInjector;
        this.componentFacory = componentFactoryResolver.resolveComponentFactory(modal_component_1.ModalComponent);
    }
    ModalService.prototype.open = function (config) {
        var componentRef = this.createComponentRef();
        componentRef.instance.config = config;
        console.log(componentRef.instance);
        console.log('open Called');
        this.bodyInjector.stackBeforeAppRoot(componentRef);
        var modalRef = new modal_ref_1.ModalRef(componentRef);
        componentRef.instance.modalRef = modalRef;
        return modalRef;
    };
    ModalService.prototype.createComponentRef = function () {
        return this.componentFacory.create(this.injector);
    };
    ModalService = __decorate([
        core_1.Injectable()
    ], ModalService);
    return ModalService;
}());
exports.ModalService = ModalService;
