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
var R_ProdLo = /** @class */ (function (_super) {
    __extends(R_ProdLo, _super);
    function R_ProdLo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_ProdLo.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ProdLo.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ProdLo.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ProdLo.prototype, "txtLocalizacao1", {
        get: function () {
            return window['txtLocalizacao1_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ProdLo.prototype, "txtLocalizacao2", {
        get: function () {
            return window['txtLocalizacao2_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ProdLo.prototype, "txtLocalizacao3", {
        get: function () {
            return window['txtLocalizacao3_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_ProdLo.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_ProdLo.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.CellPrepared, this.CustomUnboundColumnData, this);
        }
        if (this.txtLocalizacao1) {
            this.Init_Localizacao1();
        }
        if (this.txtLocalizacao2) {
            this.Init_Localizacao2();
        }
        if (this.txtLocalizacao3) {
            this.Init_Localizacao3();
        }
    };
    R_ProdLo.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Produto = 0;
        this.Filtro.Fornecedor = 0;
        this.Filtro.Lote = "";
        this.Filtro.Localizacao1 = 0;
        this.Filtro.Localizacao2 = 0;
        this.Filtro.Localizacao3 = 0;
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_ProdLo.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            parametros = {
                produto: CNum(this.Filtro.Produto),
                fornecedor: CNum(this.Filtro.Fornecedor),
                lote: this.Filtro.Lote + "",
                localizacao1: CNum(this.Filtro.Localizacao1),
                localizacao2: CNum(this.Filtro.Localizacao2),
                localizacao3: CNum(this.Filtro.Localizacao3)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.grid.PreencherGrid(retorno);
            this.accCadastro.SetExpanded(false);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_ProdLo.prototype.CustomUnboundColumnData = function (s, e) {
        if (e.column["dataField"] == "EstoqueUnitario" && e.rowType == "data") {
            if (this.grid.DataSource.length != 0) {
                var produto = void 0, quantidade = void 0;
                var valorEstoqueUnitario = void 0;
                var parametros = void 0;
                produto = CNum(e.data["Codigo"]);
                quantidade = CNum(e.data["Quantidade"]);
                parametros = {
                    produto: produto,
                    quantidade: quantidade
                };
                valorEstoqueUnitario = this.ExecutarFuncaoServerSideSynch("Retorna_Estoque_Unidade_Lote", parametros);
                e.value = valorEstoqueUnitario;
                e.displayValue = valorEstoqueUnitario;
                e.cellElement.text(valorEstoqueUnitario);
            }
        }
    };
    R_ProdLo.prototype.Init_Localizacao1 = function () {
        var configuracao;
        configuracao = CNum(ValoresSismoura.ConfiguracoesRetaguarda.Filtro_Localizacao1);
        if (configuracao > 0) {
            this.txtLocalizacao1.AddParametro("configuracao", configuracao.toString());
        }
        else {
            this.txtLocalizacao1.AddParametro("configuracao", "1");
        }
    };
    R_ProdLo.prototype.Init_Localizacao2 = function () {
        var configuracao;
        configuracao = CNum(ValoresSismoura.ConfiguracoesRetaguarda.Filtro_Localizacao2);
        if (configuracao > 0) {
            this.txtLocalizacao2.AddParametro("configuracao", configuracao.toString());
        }
        else {
            this.txtLocalizacao2.AddParametro("configuracao", "2");
        }
    };
    R_ProdLo.prototype.Init_Localizacao3 = function () {
        var configuracao;
        configuracao = CNum(ValoresSismoura.ConfiguracoesRetaguarda.Filtro_Localizacao3);
        if (configuracao > 0) {
            this.txtLocalizacao3.AddParametro("configuracao", configuracao.toString());
        }
        else {
            this.txtLocalizacao3.AddParametro("configuracao", "3");
        }
    };
    return R_ProdLo;
}(MouraPageRelacaoAngular));
var r_ProdLo = new R_ProdLo();
//# sourceMappingURL=R_ProdLo.js.map