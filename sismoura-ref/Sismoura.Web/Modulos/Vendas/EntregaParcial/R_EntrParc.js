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
var R_EntrParc = /** @class */ (function (_super) {
    __extends(R_EntrParc, _super);
    function R_EntrParc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_EntrParc.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntrParc.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntrParc.prototype, "txtOrcamento", {
        get: function () {
            return window["txtOrcamento_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntrParc.prototype, "txtVenda", {
        get: function () {
            return window["txtVenda_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntrParc.prototype, "lblDescricaoProduto", {
        get: function () {
            return window["lblDescricaoProduto_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    R_EntrParc.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().MudouTipo) {
            this.GetScope().MudouTipo = $.proxy(this.MudouTipo, this);
            var that = this;
            this.GetScope().$watch(function () { return that.Filtro.Tipo; }, this.GetScope().MudouTipo);
        }
    };
    R_EntrParc.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtVenda) {
            adicionarEventoMoura(this.txtVenda.Procurou, this.OnDescricaoVenda, this);
        }
    };
    //
    R_EntrParc.prototype.MudouTipo = function () {
        this.Filtro.Tipo == "0" ? this.txtVenda.Visible = true : this.txtVenda.Visible = false;
        this.lblDescricaoProduto.Visible = this.txtVenda.Visible;
        this.txtOrcamento.Visible = !this.txtVenda.Visible;
        this.Filtro.Venda = 0;
        this.Filtro.Orcamento = "";
        this.Filtro.DescricaoProduto = "";
        this.RefreshAngular();
    };
    R_EntrParc.prototype.OnDescricaoVenda = function () {
        var parametros;
        var codVenda = this.Filtro.Venda;
        this.Filtro.DescricaoProduto = "";
        if (codVenda > 0) {
            try {
                parametros = { codVenda: codVenda };
                this.Filtro.DescricaoProduto = this.ExecutarFuncaoServerSideSynch("ProcurarDescricaoVenda", parametros);
            }
            catch (ex) {
                LogarException(ex);
            }
        }
        this.RefreshAngular();
    };
    //
    R_EntrParc.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Orcamento = "";
        this.Filtro.Produto = "";
        this.Filtro.Cliente = "";
        this.Filtro.Venda = "";
        this.Filtro.Data_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Data_Final = ConvertToDate(this.DataServidor().setHours(0, 0, 0));
        this.Filtro.Hora_Inicial = ConvertToDate(this.DataServidor().setHours(0, 0, 0));
        this.Filtro.Hora_Final = ConvertToDate(this.DataServidor().setHours(23, 59, 0));
        this.Filtro.DescricaoProduto = "";
        this.Filtro.Tipo = "0";
        this.txtOrcamento.Visible = false;
        this.txtVenda.Visible = true;
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_EntrParc.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            abrirEspera("");
            parametros = {
                codProduto: CNum(this.Filtro.Produto),
                dataInicial: this.Filtro.Data_Inicial,
                horaInicial: this.Filtro.Hora_Inicial,
                dataFinal: this.Filtro.Data_Final,
                horaFinal: this.Filtro.Hora_Final,
                codCliente: CNum(this.Filtro.Cliente),
                tipoPesquisa: CNum(this.Filtro.Tipo),
                codVenda: CNum(this.Filtro.Venda),
                codOrcamento: CNum(this.Filtro.Orcamento)
            };
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                    _this.AccordionFiltros.SetExpanded(false);
                }
                catch (ex) {
                    LogarException(ex);
                }
                finally {
                    fecharEspera();
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
    return R_EntrParc;
}(MouraPageRelacaoAngular));
var r_EntrParc = new R_EntrParc();
//# sourceMappingURL=R_EntrParc.js.map