"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var moura_campo_component_1 = require("../moura-campo/moura-campo.component");
var MouraLabelComponent = /** @class */ (function (_super) {
    __extends(MouraLabelComponent, _super);
    function MouraLabelComponent() {
        return _super.call(this) || this;
    }
    Object.defineProperty(MouraLabelComponent.prototype, "ngModelMoura", {
        get: function () {
            return this.$ngModelMoura;
        },
        set: function (value) {
            this.$ngModelMoura = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input()
    ], MouraLabelComponent.prototype, "ngModelMoura", null);
    MouraLabelComponent = __decorate([
        core_1.Component({
            selector: 'moura-label',
            templateUrl: './moura-label.component.html',
            styleUrls: ['./moura-label.component.scss']
        })
    ], MouraLabelComponent);
    return MouraLabelComponent;
}(moura_campo_component_1.MouraCampoComponent));
exports.MouraLabelComponent = MouraLabelComponent;
//# sourceMappingURL=moura-label.component.js.map