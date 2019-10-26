var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var R_EnPrLt = /** @class */ (function (_super) {
    __extends(R_EnPrLt, _super);
    function R_EnPrLt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_EnPrLt.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EnPrLt.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EnPrLt.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EnPrLt.prototype, "Entity", {
        get: function () {
            if (!this.GetScope()["Entity"]) {
                this.GetScope()["Entity"] = {};
            }
            return this.GetScope()["Entity"];
        },
        set: function (value) {
            this.GetScope()["Entity"] = value;
        },
        enumerable: true,
        configurable: true
    });
    R_EnPrLt.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_EnPrLt.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.btnGravar_Click, this);
        }
    };
    R_EnPrLt.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Entity = {};
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_EnPrLt.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        try {
            parametros = {
                fornecedor: this.Entity.Fornecedor,
                grupo: this.Entity.Grupo,
                subGrupo: this.Entity.SubGrupo,
                marca: this.Entity.Marca
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.grid.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_EnPrLt.prototype.btnGravar_Click = function (s, e) {
        e.processOnServer = false;
        try {
            var parametros;
            var lista = this.grid.DataSource;
            var marcados, desmarcados;
            if (!lista || lista.length <= 0) {
                MostrarMensagem("Nenhum registro para atualizar");
                return;
            }
            marcados = lista.filter(function (x) { return x.Enviar_Pedidos_Moura; }).map(function (x) { return x.Codigo; });
            desmarcados = lista.filter(function (x) { return !x.Enviar_Pedidos_Moura; }).map(function (x) { return x.Codigo; });
            parametros = {
                codigoMarcados: marcados,
                codigoDesmarcados: desmarcados
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("AtualizarProdutosEnviarPedidosMoura", parametros);
            if (retorno) {
                MostrarMensagem("Registros atualizados com sucesso");
            }
            else {
                MostrarMensagem("Erro ao tentar atualizar os registros");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_EnPrLt;
}(MouraPageRelacaoAngular));
var r_EnPrLt = new R_EnPrLt();
//# sourceMappingURL=R_EnPrLt.js.map