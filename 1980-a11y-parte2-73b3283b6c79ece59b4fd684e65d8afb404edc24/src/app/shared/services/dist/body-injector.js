"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BodyInjectorService = void 0;
var core_1 = require("@angular/core");
var BodyInjectorService = /** @class */ (function () {
    function BodyInjectorService(appRef) {
        this.appRef = appRef;
    }
    BodyInjectorService.prototype.stackBeforeAppRoot = function (componentRef) {
        var domElement = this.createDomElement(componentRef);
        var appRoot = document.body.querySelector('app-root'); // * referencia do app-root do index.html
        document.body.insertBefore(domElement, appRoot);
    };
    BodyInjectorService.prototype.createDomElement = function (componentRef) {
        this.appRef.attachView(componentRef.hostView);
        var domElement = componentRef.hostView.rootNodes[0];
        return domElement;
    };
    BodyInjectorService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], BodyInjectorService);
    return BodyInjectorService;
}());
exports.BodyInjectorService = BodyInjectorService;
