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
var MouraTextBoxCPFComponent = /** @class */ (function (_super) {
    __extends(MouraTextBoxCPFComponent, _super);
    function MouraTextBoxCPFComponent(mouraService) {
        var _this = _super.call(this) || this;
        _this.mouraService = mouraService;
        return _this;
    }
    Object.defineProperty(MouraTextBoxCPFComponent.prototype, "ngModelMoura", {
        get: function () {
            return this.$ngModelMoura;
        },
        set: function (value) {
            this.$ngModelMoura = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxCPFComponent.prototype, "mascaraCpfCnpj", {
        get: function () {
            if (this.isCpf) {
                return '999.999.999-99';
            }
            else {
                return '99.999.999/9999-99';
            }
        },
        enumerable: true,
        configurable: true
    });
    MouraTextBoxCPFComponent.prototype.getLabel = function () {
        if (_super.prototype.getLabel.call(this)) {
            return _super.prototype.getLabel.call(this);
        }
        else {
            if (this.isCpf) {
                return 'CPF';
            }
            else {
                return 'CNPJ';
            }
        }
    };
    MouraTextBoxCPFComponent.prototype.clickBotaoProcurar = function () {
    };
    __decorate([
        core_1.Input()
    ], MouraTextBoxCPFComponent.prototype, "ngModelMoura", null);
    MouraTextBoxCPFComponent = __decorate([
        core_1.Component({
            selector: 'moura-text-box-cpf',
            templateUrl: './moura-text-box-cpf.component.html',
            styleUrls: ['./moura-text-box-cpf.component.scss']
        })
    ], MouraTextBoxCPFComponent);
    return MouraTextBoxCPFComponent;
}(moura_campo_component_1.MouraCampoComponent));
exports.MouraTextBoxCPFComponent = MouraTextBoxCPFComponent;
//# sourceMappingURL=moura-text-box-cpf.component.js.map