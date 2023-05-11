"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var fade_1 = require("./shared/animations/fade");
var AppComponent = /** @class */ (function () {
    function AppComponent(modalService, 
    // private cd: ChangeDetectorRef, //! teste
    formBuilder) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.title = 'a11y-p2';
        this.firstName = 'Flavio';
        this.info = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            firstName: ['Flavio', forms_1.Validators.required],
            surname: ['', forms_1.Validators.required],
            age: ['', forms_1.Validators.required],
            info: [false]
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        // this.selectedTemplate = this.template1; // ! teste
        // this.cd.detectChanges(); // ! teste
    };
    AppComponent.prototype.show = function () {
        // this.selectedTemplate = this.template2; // ! teste
        this.modalRef = this.modalService.open({
            templateRef: this.modalTemplateRef,
            title: 'User Details'
        });
    };
    AppComponent.prototype.submit = function () {
        if (this.form.invalid) {
            return;
        }
        console.table(this.form.value);
        this.modalRef.close();
    };
    __decorate([
        core_1.ViewChild('modal')
    ], AppComponent.prototype, "modalTemplateRef");
    __decorate([
        core_1.ViewChild('template1')
    ], AppComponent.prototype, "template1");
    __decorate([
        core_1.ViewChild('template2')
    ], AppComponent.prototype, "template2");
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
            animations: [fade_1.fade]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
