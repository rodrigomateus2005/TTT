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
var R_PB_PP = /** @class */ (function (_super) {
    __extends(R_PB_PP, _super);
    function R_PB_PP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_PB_PP.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PB_PP.prototype, "lstContaCorrente", {
        get: function () {
            return window['lstContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PB_PP.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PB_PP.prototype, "gridAnalitica", {
        get: function () {
            return window['gridAnalitica_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PB_PP.prototype, "gridSintetica", {
        get: function () {
            return window['gridSintetica_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PB_PP.prototype, "txtNumeroCheque", {
        get: function () {
            return window['txtNumeroCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PB_PP.prototype, "tabResultado", {
        get: function () {
            return window['tabResultado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PB_PP.prototype, "cboTipoEmpresa", {
        get: function () {
            return window['cboTipoEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_PB_PP.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (ValoresSismoura.ConfiguracoesRetaguarda.Talao_Cheque_Forma_Pagamento.CNum() > 0) {
            this.txtNumeroCheque.Visible = true;
        }
        else {
            this.txtNumeroCheque.Visible = false;
        }
        if (this.lstEmpresa.GetAllValues().length == 1) {
            this.cboTipoEmpresa.Enabled = false;
        }
        if (this.ParametrosTela) {
            var dataInicio = ConvertToDate(this.ParametrosTela.dataInicial);
            var dataFim = ConvertToDate(this.ParametrosTela.dataFinal);
            var empresa = this.ParametrosTela.empresa;
            if (dataInicio && dataFim && !String.IsNullOrWhiteSpace(empresa)) {
                this.Filtro.Periodo_Inicial = dataInicio;
                this.Filtro.Periodo_Final = dataFim;
                var empresas = void 0;
                empresas = empresa.split(",");
                this.lstEmpresa.SetValues(empresas);
                this.OnMudouEmpresa();
                this.PreencherGrade();
                this.RefreshAngular();
            }
        }
    };
    R_PB_PP.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.lstEmpresa) {
            adicionarEventoMoura(this.lstEmpresa.SelectionChanged, this.OnMudouEmpresa, this);
        }
    };
    R_PB_PP.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Conta_Contabil = 0;
        this.Filtro.N_Doc_Bancario = "";
        this.Filtro.Numero_Cheque = 0;
        this.Filtro.Tipo_Data = "B";
        this.Filtro.Tipo_Conta = "T";
        this.Filtro.Documento_Bancario = "0";
        this.Filtro.Documento_Mercantil = "0";
        this.Filtro.Segmento_Fornecedor = "0";
        this.Filtro.Tipo_Empresa = "P";
        this.lstContaCorrente.Lista.LimparSelecao();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.OnMudouEmpresa();
        this.Filtro.Somente_Fiscal = false;
        this.gridAnalitica.PreencherGrid(null);
        this.gridSintetica.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_PB_PP.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (this.ValidarCamposObrigatorios()) {
            parametros = {
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                codDocumentoBancario: CNum(this.Filtro.Documento_Bancario),
                codDocumentoMercantil: CNum(this.Filtro.Documento_Mercantil),
                codContaContabil: CNum(this.Filtro.Conta_Contabil),
                numeroCheque: CNum(this.Filtro.Numero_Cheque),
                tipoData: this.Filtro.Tipo_Data,
                nroDocBancario: this.Filtro.N_Doc_Bancario,
                codSegmentoFornecedor: CNum(this.Filtro.Segmento_Fornecedor),
                tipoConta: this.Filtro.Tipo_Conta,
                codContasCorrentes: this.lstContaCorrente.Lista.GetValues(),
                codEmpresas: this.lstEmpresa.GetValues(),
                somenteFiscal: this.Filtro.Somente_Fiscal,
                tipoEmpresa: this.cboTipoEmpresa.GetText()
            };
            if (this.tabResultado.GetActiveTabIndex() == 0) {
                this.PreencherGridAnalitica(parametros);
            }
            else {
                this.PreencherGridSintetica(parametros);
            }
        }
    };
    R_PB_PP.prototype.OnMudouEmpresa = function () {
        this.lstContaCorrente.Preencher(this.lstEmpresa.GetValuesNumber(), true);
    };
    R_PB_PP.prototype.PreencherGridAnalitica = function (parametros) {
        var _this = this;
        try {
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGridAnalitica", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.gridAnalitica.PreencherGrid(retorno);
                _this.AccordionFiltros.SetExpanded(false);
                _this.gridAnalitica.OrderBy("Valor_Acumulado", "asc");
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
    R_PB_PP.prototype.PreencherGridSintetica = function (parametros) {
        var _this = this;
        try {
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGridSintetica", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.gridSintetica.PreencherGrid(retorno);
                _this.AccordionFiltros.SetExpanded(false);
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
    return R_PB_PP;
}(MouraPageRelacaoAngular));
var r_PB_PP = new R_PB_PP();
//# sourceMappingURL=R_PB_PP.js.map