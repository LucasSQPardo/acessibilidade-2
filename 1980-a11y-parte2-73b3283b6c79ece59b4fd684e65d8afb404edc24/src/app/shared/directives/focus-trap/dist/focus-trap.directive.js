"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FocusTrapDirective = void 0;
var core_1 = require("@angular/core");
var FocusTrapDirective = /** @class */ (function () {
    function FocusTrapDirective(elementRef) {
        this.elementRef = elementRef;
        this.firstFocusableElement = null;
        this.lastFocusableElement = null;
    }
    FocusTrapDirective.prototype.ngAfterViewInit = function () {
        var focusableElements = this.elementRef.nativeElement.querySelectorAll("\n      [tabindex]:not([tabindex=\"-1\"]),\n      a[href]:not([disabled]),\n      button:not([disabled]),\n      textarea:not([disabled]),\n      input:not([disabled]),\n      select:not([disabled])");
        this.firstFocusableElement = focusableElements[0];
        this.lastFocusableElement = focusableElements[focusableElements.length - 1];
        this.firstFocusableElement.focus();
    };
    FocusTrapDirective.prototype.manageTab = function (event) {
        if (event.key !== 'Tab') {
            return;
        }
        if (event.shiftKey && document.activeElement === this.firstFocusableElement) {
            this.lastFocusableElement.focus();
            event.preventDefault();
        }
        else if (document.activeElement === this.lastFocusableElement) {
            this.firstFocusableElement.focus();
            event.preventDefault();
        }
    };
    __decorate([
        core_1.HostListener('keydown', ['$event'])
    ], FocusTrapDirective.prototype, "manageTab");
    FocusTrapDirective = __decorate([
        core_1.Directive({
            selector: '[appFocusTrap]'
        })
    ], FocusTrapDirective);
    return FocusTrapDirective;
}());
exports.FocusTrapDirective = FocusTrapDirective;
