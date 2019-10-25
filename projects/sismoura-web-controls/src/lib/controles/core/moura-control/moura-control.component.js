"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MouraControlComponent = /** @class */ (function () {
    function MouraControlComponent() {
        this.$uniqueID = new Date().getTime();
    }
    Object.defineProperty(MouraControlComponent.prototype, "ctrl", {
        get: function () {
            return this.base ? this.base : this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraControlComponent.prototype, "uniqueID", {
        get: function () {
            return this.$uniqueID;
        },
        enumerable: true,
        configurable: true
    });
    MouraControlComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], MouraControlComponent.prototype, "base", void 0);
    MouraControlComponent = __decorate([
        core_1.Component({
            selector: 'moura-control',
            templateUrl: './moura-control.component.html',
            styleUrls: ['./moura-control.component.scss']
        })
    ], MouraControlComponent);
    return MouraControlComponent;
}());
exports.MouraControlComponent = MouraControlComponent;
//# sourceMappingURL=moura-control.component.js.map