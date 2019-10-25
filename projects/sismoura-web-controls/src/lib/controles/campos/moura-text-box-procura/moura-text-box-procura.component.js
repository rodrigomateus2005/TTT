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
var MouraTextBoxProcuraComponent = /** @class */ (function (_super) {
    __extends(MouraTextBoxProcuraComponent, _super);
    function MouraTextBoxProcuraComponent(mouraService) {
        var _this = _super.call(this) || this;
        _this.mouraService = mouraService;
        _this.permitirProcurar = true;
        _this.carregarEngine();
        return _this;
    }
    Object.defineProperty(MouraTextBoxProcuraComponent.prototype, "engineName", {
        get: function () {
            return this.$engineName;
        },
        set: function (value) {
            this.$engineName = value;
            this.engine = null;
            this.carregarEngine();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraComponent.prototype, "ngModelMoura", {
        get: function () {
            return this.$ngModelMoura;
        },
        set: function (value) {
            this.$ngModelMoura = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraComponent.prototype, "ngModelMouraCodigo", {
        get: function () {
            if (this.ngModelMoura) {
                return this.ngModelMoura.Id;
            }
            else {
                return null;
            }
        },
        set: function (value) {
            var _this = this;
            if (typeof value === 'string') {
                value = parseFloat(value);
            }
            if (value && !isNaN(value)) {
                if (!this.ngModelMoura || this.ngModelMoura.Id !== value) {
                    this.mouraService.getByIDProcura(this.engineName, value.toString(), true).then(function (resultado) {
                        if (resultado) {
                            _this.ngModelMoura = resultado;
                        }
                        else {
                            _this.ngModelMoura = null;
                        }
                    });
                }
            }
            else {
                this.ngModelMoura = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraComponent.prototype, "ngModelMouraLabel", {
        get: function () {
            if (this.ngModelMoura) {
                return this.ngModelMoura.Descricao;
            }
            else {
                return null;
            }
        },
        set: function (value) {
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraComponent.prototype, "permitirProcurar", {
        get: function () {
            return this.$permitirProcurar;
        },
        set: function (value) {
            if (value == null || value === undefined) {
                value = true;
            }
            this.$permitirProcurar = value;
        },
        enumerable: true,
        configurable: true
    });
    MouraTextBoxProcuraComponent.prototype.abrirProcura = function (textoCampoProcura) {
        var _this = this;
        this.modalProcura.abrir().then(function (resultado) {
            if (resultado) {
                _this.ngModelMoura = resultado;
            }
        });
    };
    MouraTextBoxProcuraComponent.prototype.carregarEngine = function () {
        var _this = this;
        if (!this.engine) {
            this.mouraService.getEngineProcura(this.engineName).then(function (engine) {
                _this.engine = engine;
            }).catch(function (e) {
                _this.$engineName = null;
            });
        }
    };
    MouraTextBoxProcuraComponent.prototype.onKeyDown = function (event) {
        if (this.permitirProcurar) {
            var abrirPesquisa = false;
            if (event.keyCode === 113) {
                abrirPesquisa = true;
            } // F2
            if (abrirPesquisa) {
                this.abrirProcura('');
            }
        }
    };
    __decorate([
        core_1.ViewChild('modalProcura', { static: false })
    ], MouraTextBoxProcuraComponent.prototype, "modalProcura", void 0);
    MouraTextBoxProcuraComponent = __decorate([
        core_1.Component({
            selector: 'moura-text-box-procura',
            templateUrl: './moura-text-box-procura.component.html',
            styleUrls: ['./moura-text-box-procura.component.scss']
        })
    ], MouraTextBoxProcuraComponent);
    return MouraTextBoxProcuraComponent;
}(moura_campo_component_1.MouraCampoComponent));
exports.MouraTextBoxProcuraComponent = MouraTextBoxProcuraComponent;
//# sourceMappingURL=moura-text-box-procura.component.js.map