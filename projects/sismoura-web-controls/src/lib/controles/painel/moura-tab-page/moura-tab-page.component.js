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
var MouraTabPageComponent = /** @class */ (function (_super) {
    __extends(MouraTabPageComponent, _super);
    function MouraTabPageComponent() {
        return _super.call(this) || this;
    }
    Object.defineProperty(MouraTabPageComponent.prototype, "mouraTabPanelCtrl", {
        get: function () {
            return this.$mouraTabPanelCtrl;
        },
        set: function (value) {
            this.$mouraTabPanelCtrl = value;
            this.mouraTabPanelCtrl.adicionarTab(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTabPageComponent.prototype, "titulo", {
        get: function () {
            return this.$titulo;
        },
        set: function (value) {
            this.$titulo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTabPageComponent.prototype, "IdTab", {
        get: function () {
            return 'tab-page-' + this.uniqueID;
        },
        enumerable: true,
        configurable: true
    });
    MouraTabPageComponent.prototype.selecionar = function () {
        if (this.mouraTabPanelCtrl) {
            this.mouraTabPanelCtrl.selecionar(this);
        }
    };
    MouraTabPageComponent = __decorate([
        core_1.Component({
            selector: 'moura-tab-page',
            templateUrl: './moura-tab-page.component.html',
            styleUrls: ['./moura-tab-page.component.scss']
        })
    ], MouraTabPageComponent);
    return MouraTabPageComponent;
}(moura_control_component_1.MouraControlComponent));
exports.MouraTabPageComponent = MouraTabPageComponent;
//# sourceMappingURL=moura-tab-page.component.js.map