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
var R_EntParHisPro = /** @class */ (function (_super) {
    __extends(R_EntParHisPro, _super);
    function R_EntParHisPro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_EntParHisPro.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntParHisPro.prototype, "txtOrcamento", {
        get: function () {
            return window['txtOrcamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntParHisPro.prototype, "txtVenda", {
        get: function () {
            return window['txtVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntParHisPro.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_EntParHisPro.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().MudouTipo) {
            this.GetScope().MudouTipo = $.proxy(this.MudouTipo, this);
            var that = this;
            this.GetScope().$watch(function () { return that.Filtro.Tipo_Pesquisa; }, this.GetScope().MudouTipo);
        }
    };
    R_EntParHisPro.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.CellPrepared, this.OnCellPrepared, this);
        }
    };
    R_EntParHisPro.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Cliente = 0;
        this.Filtro.Orcamento = "";
        this.Filtro.Produto = 0;
        this.Filtro.Venda = 0;
        this.Filtro.Tipo_Pesquisa = "0";
        this.Filtro.Total_Produtos_Entregue = "";
        this.Filtro.Total_Entrega = "";
        this.Filtro.Total_Produtos = "";
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_EntParHisPro.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var paramatros;
        try {
            paramatros = {
                codProduto: CNum(this.Filtro.Produto),
                codVenda: CNum(this.Filtro.Venda),
                codCliente: CNum(this.Filtro.Cliente),
                tipoPesquisa: CNum(this.Filtro.Tipo_Pesquisa),
                codOrcamento: CNum(this.Filtro.Orcamento)
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", paramatros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                if (retorno) {
                    _this.grid.PreencherGrid(retorno.Dados_Grade);
                    _this.Filtro.Total_Entrega = retorno.Total_Entrega;
                    if (_this.Filtro.Tipo_Pesquisa == "0") {
                        _this.Filtro.Total_Produtos = retorno.Total_Produtos;
                        _this.Filtro.Total_Produtos_Entregue = retorno.Total_Produtos_Entregue;
                    }
                    else {
                        _this.Filtro.Total_Produtos = "";
                        _this.Filtro.Total_Produtos_Entregue = "";
                    }
                    _this.RefreshAngular();
                }
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    R_EntParHisPro.prototype.MudouTipo = function () {
        if (this.Filtro.Tipo_Pesquisa == "0") {
            this.txtVenda.Visible = true;
            this.txtOrcamento.Visible = false;
        }
        else {
            this.txtVenda.Visible = false;
            this.txtOrcamento.Visible = true;
        }
    };
    R_EntParHisPro.prototype.OnCellPrepared = function (s, e) {
        if (e.rowType == "data") {
            if (CNum(e.data["Quantidade"]) == CNum(e.data["Quantidade_Entregue"])) {
                e.cellElement.css("color", "red");
            }
        }
    };
    return R_EntParHisPro;
}(MouraPageRelacaoAngular));
var r_EntParHisPro = new R_EntParHisPro();
//# sourceMappingURL=R_EntParHisPro.js.map