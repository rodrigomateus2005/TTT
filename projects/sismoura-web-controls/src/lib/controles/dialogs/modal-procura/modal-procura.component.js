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
var moura_grid_column_1 = require("../../grid/moura-grid-view/moura-grid-column");
var moura_grid_column_botao_selecionar_1 = require("../../grid/moura-grid-view/moura-grid-column-botao-selecionar");
var ModalProcuraComponent = /** @class */ (function (_super) {
    __extends(ModalProcuraComponent, _super);
    function ModalProcuraComponent(mouraService) {
        var _this = _super.call(this) || this;
        _this.mouraService = mouraService;
        _this.likeText = [
            {
                Valor: 0,
                Descricao: 'Exatamente igual'
            },
            {
                Valor: 1,
                Descricao: 'Começar com'
            },
            {
                Valor: 2,
                Descricao: 'Terminar com'
            },
            {
                Valor: 3,
                Descricao: 'Qualquer parte'
            }
        ];
        _this.likeSelecionado = _this.likeText[3];
        return _this;
    }
    Object.defineProperty(ModalProcuraComponent.prototype, "engine", {
        get: function () {
            return this.$engine;
        },
        set: function (value) {
            this.$engine = value;
            if (value) {
                if (value.CamposProcura && value.CamposProcura.length > 0) {
                    this.itemSelecionado = value.CamposProcura[0];
                }
                if (value.ColunasProcura && value.ColunasProcura.length > 0) {
                    var colunasProcura = this.engine.ColunasProcura.map(function (item) {
                        var coluna = new moura_grid_column_1.MouraGridColumn(item.DataField);
                        coluna.fieldName = item.DataField;
                        coluna.caption = item.CaptionColuna;
                        coluna.width = item.TamanhoColuna;
                        return coluna;
                    });
                    colunasProcura.unshift(new moura_grid_column_botao_selecionar_1.MouraGridColumnBotaoSelecionar());
                    this.colunasProcura = colunasProcura;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ModalProcuraComponent.prototype.abrir = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
            _this.modalMouraProcura.abrir().then(function () {
                if (_this.resolve) {
                    _this.resolve(null);
                    _this.resolve = null;
                }
            }).catch(reject);
        });
    };
    ModalProcuraComponent.prototype.pesquisar = function () {
        var _this = this;
        this.mouraService.executarProcura(this.engine.Nome, this.getFiltroSelecionado(), true).then(function (retorno) {
            _this.resultado = retorno;
        });
    };
    ModalProcuraComponent.prototype.getFiltroSelecionado = function () {
        return {
            Valor: this.itemSelecionado.Valor,
            TipoLike: this.likeSelecionado.Valor,
            Campo: this.itemSelecionado.DescricaoCampo
        };
    };
    ModalProcuraComponent.prototype.onSelecinouLinha = function ($options) {
        this.resolve({
            Id: $options.data[this.engine.CampoID],
            Descricao: $options.data[this.engine.CampoDescricao]
        });
        this.resolve = null;
        this.modalMouraProcura.fechar();
    };
    __decorate([
        core_1.ViewChild('modalMouraProcura', { static: false })
    ], ModalProcuraComponent.prototype, "modalMouraProcura", void 0);
    __decorate([
        core_1.Input()
    ], ModalProcuraComponent.prototype, "engine", null);
    ModalProcuraComponent = __decorate([
        core_1.Component({
            selector: 'modal-procura',
            templateUrl: './modal-procura.component.html',
            styleUrls: ['./modal-procura.component.scss']
        })
    ], ModalProcuraComponent);
    return ModalProcuraComponent;
}(moura_control_component_1.MouraControlComponent));
exports.ModalProcuraComponent = ModalProcuraComponent;
//# sourceMappingURL=modal-procura.component.js.map