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
var FrmR_Con = /** @class */ (function (_super) {
    __extends(FrmR_Con, _super);
    function FrmR_Con() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FrmR_Con.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmR_Con.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmR_Con.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    FrmR_Con.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    FrmR_Con.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.CellPrepared, this.CustomUnboundColumnData, this);
            adicionarEventoMoura(this.grid.CellPrepared, this.CellPrepared, this);
        }
    };
    FrmR_Con.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            parametros = {
                codConcorrente: CNum(this.Filtro.Concorrente),
                codProduto: CNum(this.Filtro.Produto)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.grid.PreencherGrid(retorno);
            this.accCadastro.SetExpanded(false);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    FrmR_Con.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Concorrente = 0;
        this.Filtro.Produto = 0;
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    FrmR_Con.prototype.CustomUnboundColumnData = function (s, e) {
        if (e.column["dataField"] == "Margem" && e.rowType == "data") {
            if (this.grid.DataSource.length != 0) {
                var precoCusto = void 0, precoVenda = void 0;
                var valorMargem = void 0;
                var parametros = void 0;
                precoCusto = CNum(e.data["Custo_Medio"]);
                precoVenda = CNum(e.data["Preco_Produto"]);
                parametros = {
                    precoCusto: precoCusto,
                    precoVenda: precoVenda
                };
                valorMargem = this.ExecutarFuncaoServerSideSynch("RetornaMargemProduto", parametros);
                e.value = valorMargem;
                e.displayValue = valorMargem;
                e.cellElement.text(valorMargem);
            }
        }
        if (e.column["dataField"] == "MargemConcorrente" && e.rowType == "data") {
            if (this.grid.DataSource.length != 0) {
                var precoCusto = void 0, precoVenda = void 0;
                var valorMargem = void 0;
                var parametros = void 0;
                precoCusto = CNum(e.data["Custo_Medio"]);
                precoVenda = CNum(e.data["PrecoConcorrente"]);
                parametros = {
                    precoCusto: precoCusto,
                    precoVenda: precoVenda
                };
                valorMargem = this.ExecutarFuncaoServerSideSynch("RetornaMargemProduto", parametros);
                e.value = valorMargem;
                e.displayValue = valorMargem;
                e.cellElement.text(valorMargem);
            }
        }
    };
    FrmR_Con.prototype.CellPrepared = function (s, e) {
        if (e.columnIndex >= 0) {
            if (e.column["dataField"] == "PrecoConcorrente" && e.rowType == "data") {
                var num = CNum(e.data["Preco_Produto"]);
                if (num > CNum(e.value)) {
                    e.cellElement.css("color", "red");
                }
            }
        }
    };
    return FrmR_Con;
}(MouraPageRelacaoAngular));
var frmR_Con = new FrmR_Con();
//# sourceMappingURL=FrmR_Con.js.map