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
var R_MovPro = /** @class */ (function (_super) {
    __extends(R_MovPro, _super);
    function R_MovPro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_MovPro.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MovPro.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MovPro.prototype, "chkSomenteComMovimentacao", {
        get: function () {
            return window['chkSomenteComMovimentacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MovPro.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MovPro.prototype, "cboDeposito", {
        get: function () {
            return window['cboDeposito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MovPro.prototype, "lstGrupo", {
        get: function () {
            return window['lstGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MovPro.prototype, "cboLote", {
        get: function () {
            return window['cboLote_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MovPro.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_MovPro.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().OnDepoisPesquisou) {
            var that = this;
            this.GetScope().OnDepoisPesquisou = $.proxy(this.OnDepoisPesquisou, this);
            this.GetScope().$watch(function () { return that.Filtro.Produto; }, this.GetScope().OnDepoisPesquisou);
        }
        this.LimparCampos();
    };
    R_MovPro.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.ClickBotaoLinha, this.ClickVisualizar, this);
        }
        if (this.cboLote) {
            this.cboLote.Visible = false;
        }
    };
    R_MovPro.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        try {
            var grupos = void 0;
            grupos = this.lstGrupo.SelectedValues.join(",");
            var variosCodBarra = ValoresSismoura.ConfiguracoesRetaguarda.Varios_CodBarra;
            parametros = {
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                codFornecedor: CNum(this.Filtro.Fornecedor),
                codDeposito: this.cboDeposito.GetValue(),
                codLinha: CNum(this.Filtro.Linha),
                codProduto: CNum(this.Filtro.Produto),
                grupos: grupos + "",
                apenasComMovimentacao: this.chkSomenteComMovimentacao.Checked,
                codLote: this.Filtro.Lote + "",
                variosCodBarra: variosCodBarra
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.grid.PreencherGrid(retorno);
            this.accCadastro.SetExpanded(false);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_MovPro.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        var parametros = {};
        var retorno;
        if (ValoresSismoura.ConfiguracoesRetaguarda.Bloquear_Cliente_Empresa && ValoresSismoura.EmpresaPadraoUsuario > 0) {
            parametros = {
                empresaPadrao: false
            };
            retorno = this.ExecutarFuncaoServerSideSynch("VerificaDepositos", parametros);
        }
        else {
            parametros = {
                empresaPadrao: true
            };
            retorno = this.ExecutarFuncaoServerSideSynch("VerificaDepositos", parametros);
        }
        if (retorno > 0) {
            this.cboDeposito.SetSelectedIndex(retorno);
        }
        else if (this.cboDeposito.Combo.GetItemCount() > 0) {
            this.cboDeposito.SetSelectedIndex(0);
        }
        else {
            this.cboDeposito.LimparSelecao();
        }
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Fornecedor = 0;
        this.Filtro.Linha = 0;
        this.Filtro.Produto = 0;
        this.chkSomenteComMovimentacao.Checked = true;
        this.lstGrupo.LimparSelecao();
        this.Filtro.Lote = "";
        this.grid.PreencherGrid(null);
        this.accCadastro.SetExpanded(true);
        this.RefreshAngular();
    };
    R_MovPro.prototype.ClickVisualizar = function (s, e) {
        var parametros = [];
        var parm;
        try {
            var dataInicio = this.PreparaData(this.Filtro.Periodo_Inicial);
            var dataFim = this.PreparaData(this.Filtro.Periodo_Final);
            parametros.push("dataInicio=" + dataInicio);
            parametros.push("dataFim=" + dataFim);
            parametros.push("deposito=" + this.cboDeposito.GetValue());
            parametros.push("produto=" + e.data["Codigo_Produto"]);
            abrirTelaNovaAbaParametros(URLTela.HistoricoDaMovimentacaoDeProdutos, parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_MovPro.prototype.OnDepoisPesquisou = function () {
        if (this.txtProduto.GetText() != "") {
            this.PreencherComboLote(CNum(this.Filtro.Produto));
            this.cboLote.Visible = true;
        }
        else {
            this.cboLote.LimparSelecao();
            this.cboLote.Visible = false;
        }
    };
    R_MovPro.prototype.PreencherComboLote = function (produto) {
        var parametros;
        parametros = {
            produto: produto
        };
        var itens;
        itens = this.ExecutarFuncaoServerSideSynch("PreencherComboLote", parametros);
        //
        if (this.cboLote && this.cboLote.Combo) {
            for (var x = 0; x < itens.length; x++) {
                this.cboLote.Combo.AddItem(itens[x].Descricao, itens[x].Codigo, "");
            }
            this.cboLote.SetSelectedIndex(0);
        }
    };
    R_MovPro.prototype.PreparaData = function (data) {
        var parm;
        var retorno;
        parm = {
            data: data
        };
        retorno = this.ExecutarFuncaoServerSideSynch("PreparaData", parm);
        return retorno;
    };
    return R_MovPro;
}(MouraPageRelacaoAngular));
var r_MovPro = new R_MovPro();
//# sourceMappingURL=R_MovPro.js.map