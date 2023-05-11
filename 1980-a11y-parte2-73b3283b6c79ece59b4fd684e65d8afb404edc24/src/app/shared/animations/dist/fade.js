"use strict";
exports.__esModule = true;
exports.fade = void 0;
var animations_1 = require("@angular/animations");
exports.fade = animations_1.trigger('fade', [
    animations_1.transition(':enter', [
        animations_1.style({ opacity: 0 }),
        animations_1.animate(250, animations_1.style({ opacity: 1 }))
    ]),
    animations_1.transition(':leave', [
        animations_1.animate(250, animations_1.style({ opacity: 0 }))
    ])
]);
