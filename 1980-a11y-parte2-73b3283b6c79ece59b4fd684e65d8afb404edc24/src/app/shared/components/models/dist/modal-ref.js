"use strict";
exports.__esModule = true;
exports.ModalRef = void 0;
var ModalRef = /** @class */ (function () {
    function ModalRef(componentRef) {
        this.componentRef = componentRef;
    }
    ModalRef.prototype.close = function () {
        console.log('close called');
        this.componentRef.destroy();
    };
    return ModalRef;
}());
exports.ModalRef = ModalRef;
