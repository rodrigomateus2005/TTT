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
var R_RC_Imp = /** @class */ (function (_super) {
    __extends(R_RC_Imp, _super);
    function R_RC_Imp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_RC_Imp.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Imp.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Imp.prototype, "infVenda", {
        get: function () {
            return window["infVenda_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Imp.prototype, "lstEmpresa", {
        get: function () {
            return window["lstEmpresa_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Imp.prototype, "lstContaCorrente", {
        get: function () {
            return window["lstContaCorrente_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Imp.prototype, "lstPosicaoTitulos", {
        get: function () {
            return window["lstPosicaoTitulos_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    R_RC_Imp.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_RC_Imp.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
            adicionarEventoMoura(this.grid.ClickBotaoLinha, this.OnClickBotaDetalhe, this);
        }
        if (this.lstEmpresa)
            adicionarEventoMoura(this.lstEmpresa.SelectionChanged, this.OnEmpresaChenged, this);
    };
    //
    R_RC_Imp.prototype.OnSelecionouLinha = function (s, e) {
        try {
            abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroDeContasAReceber), e.data["Codigo_Receber"]);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_RC_Imp.prototype.OnClickBotaDetalhe = function (s, e) {
        if (e.commandName == "infVenda")
            this.infVenda.Abrir(CNum(e.data["Codigo_Venda"]));
    };
    R_RC_Imp.prototype.OnEmpresaChenged = function (s, e) {
        var empresas = this.lstEmpresa.GetValuesNumber();
        empresas.length <= 0 ? this.lstContaCorrente.Lista.RemoverTodosItens() : this.PreencherContasCorrente(empresas);
    };
    R_RC_Imp.prototype.PreencherContasCorrente = function (empresas) {
        try {
            this.lstContaCorrente.Preencher(empresas, !this.lstContaCorrente.CheckBox.Checked);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    //
    R_RC_Imp.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.ClienteInativo = true;
        this.Filtro.SomenteFiscal = false;
        this.Filtro.Vendedor = 0;
        this.lstPosicaoTitulos.LimparSelecao();
        this.lstContaCorrente.Lista.LimparSelecao();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.PreencherContasCorrente(this.lstEmpresa.GetValuesNumber());
        ValoresSismoura.ConfiguracoesRetaguarda.Conta_Vendedor_Cliente == true ? this.Filtro.TipoVendedor = "C" : this.Filtro.TipoVendedor = "V";
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_RC_Imp.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            abrirEspera("");
            parametros = {
                codVendedor: CNum(this.Filtro.Vendedor),
                tipoVendedor: this.Filtro.TipoVendedor,
                posicoesTitulos: this.lstPosicaoTitulos.GetValues().join(","),
                somenteFiscal: this.Filtro.SomenteFiscal,
                somenteClienteAtivo: this.Filtro.ClienteInativo,
                empresas: this.lstEmpresa.GetValues().join(","),
                contasCorrentes: this.lstContaCorrente.Lista.GetValues().join(",")
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
    return R_RC_Imp;
}(MouraPageRelacaoAngular));
var r_RC_Imp = new R_RC_Imp();
//# sourceMappingURL=R_RC_Imp.js.map