"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ModalComponent = void 0;
var fade_1 = require("./../../animations/fade");
var core_1 = require("@angular/core");
var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        // @HostBinding('class.show') public show = false; //? adiciona classe de mesmo nome para o host  - verificar modal.component.scss
        this.fade = true;
        // ngAfterViewInit() {
        //   setTimeout(() => this.show = true); //gambiarra para triggar o changedetection pois é uma função assincrona
        // }
    }
    __decorate([
        core_1.HostBinding('@fade')
    ], ModalComponent.prototype, "fade");
    ModalComponent = __decorate([
        core_1.Component({
            selector: 'app-modal',
            templateUrl: './modal.component.html',
            styleUrls: ['modal.component.scss'],
            animations: [fade_1.fade]
        })
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
