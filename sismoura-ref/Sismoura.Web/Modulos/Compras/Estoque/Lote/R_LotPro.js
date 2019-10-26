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
var R_LotPro = /** @class */ (function (_super) {
    __extends(R_LotPro, _super);
    function R_LotPro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_LotPro.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LotPro.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LotPro.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_LotPro.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_LotPro.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_LotPro.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.TipoPeriodo = "1";
        this.Filtro.Periodo_Inicial = null;
        this.Filtro.Periodo_Final = null;
        this.Filtro.Produto = 0;
        this.Filtro.PermitirEstoqueZero = false;
        this.Filtro.Tipo = 0;
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_LotPro.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        try {
            parametros = {
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                tipoPeriodo: this.Filtro.TipoPeriodo,
                codProduto: CNum(this.Filtro.Produto),
                tipoProduto: CNum(this.Filtro.TipoProduto),
                permitirEstoqueZero: this.Filtro.PermitirEstoqueZero
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            var estoque = void 0;
            var parametros2 = void 0;
            for (var _i = 0, retorno_1 = retorno; _i < retorno_1.length; _i++) {
                var linha = retorno_1[_i];
                if (linha["Peso_Produto"] > 1) {
                    parametros2 = {
                        codigo: CNum(linha["Codigo"]),
                        quantidade: CNum(linha["Quantidade"])
                    };
                    estoque = this.ExecutarFuncaoServerSideSynch("Retorna_Estoque_Unidade_Lote", parametros2);
                    linha["Estoque"] = estoque;
                }
                else {
                    parametros2 = {
                        valor: CNum(linha["Quantidade"])
                    };
                    linha["Estoque"] = this.ExecutarFuncaoServerSideSynch("FormataValor", parametros2);
                }
            }
            this.grid.PreencherGrid(retorno);
            this.grid.GroupBy("Codigo");
            this.accCadastro.SetExpanded(false);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_LotPro;
}(MouraPageRelacaoAngular));
var r_LotPro = new R_LotPro();
//# sourceMappingURL=R_LotPro.js.map