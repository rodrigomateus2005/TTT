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
var MouraTextBoxCepComponent = /** @class */ (function (_super) {
    __extends(MouraTextBoxCepComponent, _super);
    function MouraTextBoxCepComponent(mouraService) {
        var _this = _super.call(this) || this;
        _this.mouraService = mouraService;
        return _this;
    }
    Object.defineProperty(MouraTextBoxCepComponent.prototype, "ngModelMoura", {
        get: function () {
            return this.$ngModelMoura;
        },
        set: function (value) {
            this.$ngModelMoura = value;
            this.ngEndereco = null;
        },
        enumerable: true,
        configurable: true
    });
    MouraTextBoxCepComponent.prototype.clickBotaoProcurar = function () {
        this.executarProcuraCEP(this.ngModelMoura);
    };
    MouraTextBoxCepComponent.prototype.executarProcuraCEP = function (cep) {
        var _this = this;
        if (String.IsNullOrWhiteSpace(cep)) {
            return;
        }
        var param = { CEP: cep };
        var mostrarAlertaCep = function () {
            MostrarAlerta("Ocorreu um erro ao consultar o CEP.<br />\n      Poss\u00EDveis causas: Servi\u00E7o indispon\u00EDvel / Cep n\u00E3o existe / Sem conex\u00E3o com a internet");
        };
        this.mouraService.executarConsultaCEP(cep).then(function (retorno) {
            if (retorno && retorno.EncontrouEndereco) {
                _this.ngEndereco = retorno;
            }
            else {
                mostrarAlertaCep();
            }
        }).catch(function (erro) {
            mostrarAlertaCep();
        });
    };
    __decorate([
        core_1.Input()
    ], MouraTextBoxCepComponent.prototype, "ngModelMoura", null);
    MouraTextBoxCepComponent = __decorate([
        core_1.Component({
            selector: 'moura-text-box-cep',
            templateUrl: './moura-text-box-cep.component.html',
            styleUrls: ['./moura-text-box-cep.component.scss']
        })
    ], MouraTextBoxCepComponent);
    return MouraTextBoxCepComponent;
}(moura_campo_component_1.MouraCampoComponent));
exports.MouraTextBoxCepComponent = MouraTextBoxCepComponent;
//# sourceMappingURL=moura-text-box-cep.component.js.map