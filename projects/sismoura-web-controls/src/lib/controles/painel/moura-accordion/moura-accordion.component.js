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
var moura_control_component_1 = require("../../core/moura-control/moura-control.component");
var MouraAccordionComponent = /** @class */ (function (_super) {
    __extends(MouraAccordionComponent, _super);
    function MouraAccordionComponent() {
        return _super.call(this) || this;
    }
    Object.defineProperty(MouraAccordionComponent.prototype, "titulo", {
        get: function () {
            return this.$titulo;
        },
        set: function (value) {
            this.$titulo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraAccordionComponent.prototype, "expandido", {
        get: function () {
            if (this.$expandido == null || this.$expandido === undefined) {
                return true;
            }
            return this.$expandido;
        },
        set: function (value) {
            this.$expandido = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraAccordionComponent.prototype, "maisMenos", {
        get: function () {
            if (this.expandido) {
                return '-';
            }
            else {
                return '+';
            }
        },
        enumerable: true,
        configurable: true
    });
    MouraAccordionComponent.prototype.toggle = function () {
        this.expandido = !this.expandido;
    };
    MouraAccordionComponent = __decorate([
        core_1.Component({
            selector: 'moura-accordion',
            templateUrl: './moura-accordion.component.html',
            styleUrls: ['./moura-accordion.component.scss']
        })
    ], MouraAccordionComponent);
    return MouraAccordionComponent;
}(moura_control_component_1.MouraControlComponent));
exports.MouraAccordionComponent = MouraAccordionComponent;
//# sourceMappingURL=moura-accordion.component.js.map