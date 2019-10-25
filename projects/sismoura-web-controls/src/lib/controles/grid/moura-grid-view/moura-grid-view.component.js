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
var MouraGridViewComponent = /** @class */ (function (_super) {
    __extends(MouraGridViewComponent, _super);
    function MouraGridViewComponent(differs) {
        var _this = _super.call(this) || this;
        _this.differs = differs;
        _this.paginacoesPermitidas = [50, 100, 200];
        _this.dataSourceDiffer = differs.find({}).create();
        return _this;
    }
    Object.defineProperty(MouraGridViewComponent.prototype, "devExtremeGridView", {
        get: function () {
            return this.$devExtremeGridView;
        },
        set: function (value) {
            this.$devExtremeGridView = value;
            this.atualizarGrid();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewComponent.prototype, "colunas", {
        get: function () {
            return this.$colunas;
        },
        set: function (value) {
            this.$colunas = value;
            this.atualizarGrid();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewComponent.prototype, "ngDataSource", {
        get: function () {
            return this.$ngDataSource;
        },
        set: function (value) {
            this.$ngDataSource = value;
            this.setInstanceProperty(function (x) { return x.ngDataSource = value; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewComponent.prototype, "alturaGrade", {
        get: function () {
            return this.$alturaGrade;
        },
        set: function (value) {
            if (!value) {
                value = 0;
            }
            this.$alturaGrade = value;
            this.setInstanceProperty(function (x) { return x.alturaGrade = value; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewComponent.prototype, "permitirMoverColunas", {
        get: function () {
            return this.$permitirMoverColunas;
        },
        set: function (value) {
            this.$permitirMoverColunas = value;
            this.setInstanceProperty(function (x) { return x.permitirMoverColunas = value; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewComponent.prototype, "permitirOrdenacao", {
        get: function () {
            return this.$permitirOrdenacao;
        },
        set: function (value) {
            this.$permitirOrdenacao = value;
            this.setInstanceProperty(function (x) { return x.permitirOrdenacao = value; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewComponent.prototype, "permitirEditarGrid", {
        get: function () {
            return this.$permitirEditarGrid;
        },
        set: function (value) {
            this.$permitirEditarGrid = value;
            this.setInstanceProperty(function (x) { return x.permitirEditarGrid = value; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewComponent.prototype, "exibirLinhaFiltro", {
        get: function () {
            return this.$exibirLinhaFiltro;
        },
        set: function (value) {
            this.$exibirLinhaFiltro = value;
            this.setInstanceProperty(function (x) { return x.exibirLinhaFiltro = value; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewComponent.prototype, "exibirPainelPesquisa", {
        get: function () {
            return this.$exibirPainelPesquisa;
        },
        set: function (value) {
            this.$exibirPainelPesquisa = value;
            this.setInstanceProperty(function (x) { return x.exibirPainelPesquisa = value; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewComponent.prototype, "exibirAgrupamento", {
        get: function () {
            return this.$exibirAgrupamento;
        },
        set: function (value) {
            this.$exibirAgrupamento = value;
            this.setInstanceProperty(function (x) { return x.exibirAgrupamento = value; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewComponent.prototype, "exibirPaginacao", {
        get: function () {
            return this.$exibirPaginacao;
        },
        set: function (value) {
            this.$exibirPaginacao = value;
            this.setInstanceProperty(function (x) { return x.exibirPaginacao = value; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewComponent.prototype, "tamahoPaginacao", {
        get: function () {
            return this.$tamahoPaginacao;
        },
        set: function (value) {
            if (this.paginacoesPermitidas.filter(function (x) { return x === value; }).length === 0) {
                value = this.paginacoesPermitidas[0];
            }
            this.$tamahoPaginacao = value;
            this.setInstanceProperty(function (x) { return x.tamahoPaginacao = value; });
        },
        enumerable: true,
        configurable: true
    });
    MouraGridViewComponent.prototype.ngDoCheck = function () {
        if (this.devExtremeGridView) {
            var changes = this.dataSourceDiffer.diff(this.ngDataSource); // check for changes
            if (changes) {
                this.devExtremeGridView.atualizar();
            }
        }
    };
    MouraGridViewComponent.prototype.setInstanceProperty = function (propriedadeSet) {
        if (!this.devExtremeGridView) {
            return;
        }
        if (!propriedadeSet) {
            return;
        }
        propriedadeSet(this.devExtremeGridView);
    };
    MouraGridViewComponent.prototype.atualizarGrid = function () {
        if (this.devExtremeGridView) {
            if (this.colunas) {
                for (var i = 0; i < this.colunas.length; i++) {
                    this.colunas[i].mouraGridViewController = this;
                }
            }
        }
    };
    MouraGridViewComponent = __decorate([
        core_1.Component({
            selector: 'moura-grid-view',
            templateUrl: './moura-grid-view.component.html',
            styleUrls: ['./moura-grid-view.component.scss']
        })
    ], MouraGridViewComponent);
    return MouraGridViewComponent;
}(moura_control_component_1.MouraControlComponent));
exports.MouraGridViewComponent = MouraGridViewComponent;
//# sourceMappingURL=moura-grid-view.component.js.map