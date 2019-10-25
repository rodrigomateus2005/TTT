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
var TamanhosCampo;
(function (TamanhosCampo) {
    TamanhosCampo[TamanhosCampo["pequeno"] = 2] = "pequeno";
    TamanhosCampo[TamanhosCampo["medio"] = 4] = "medio";
    TamanhosCampo[TamanhosCampo["grande"] = 6] = "grande";
    TamanhosCampo[TamanhosCampo["gigante"] = 8] = "gigante";
    TamanhosCampo[TamanhosCampo["full"] = 12] = "full";
})(TamanhosCampo = exports.TamanhosCampo || (exports.TamanhosCampo = {}));
var MouraCampoComponent = /** @class */ (function (_super) {
    __extends(MouraCampoComponent, _super);
    function MouraCampoComponent() {
        var _this = _super.call(this) || this;
        _this.tamanhoCampo = TamanhosCampo.full;
        return _this;
    }
    Object.defineProperty(MouraCampoComponent.prototype, "label", {
        get: function () {
            return this.getLabel();
        },
        set: function (value) {
            this.$label = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCampoComponent.prototype, "ctrlCampo", {
        get: function () {
            return this.ctrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCampoComponent.prototype, "cssTamanho", {
        get: function () {
            if (!this.tamanhoCampo) {
                this.tamanhoCampo = TamanhosCampo.full;
            }
            return 'col-sm-' + this.tamanhoCampo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCampoComponent.prototype, "labelControle", {
        get: function () {
            var retorno = '';
            if (this.obrigatorio) {
                retorno += '* ';
            }
            retorno += this.label;
            return retorno;
        },
        enumerable: true,
        configurable: true
    });
    MouraCampoComponent.prototype.getLabel = function () {
        return this.$label;
    };
    MouraCampoComponent = __decorate([
        core_1.Component({
            selector: 'moura-campo',
            templateUrl: './moura-campo.component.html',
            styleUrls: ['./moura-campo.component.scss']
        })
    ], MouraCampoComponent);
    return MouraCampoComponent;
}(moura_control_component_1.MouraControlComponent));
exports.MouraCampoComponent = MouraCampoComponent;
//# sourceMappingURL=moura-campo.component.js.map