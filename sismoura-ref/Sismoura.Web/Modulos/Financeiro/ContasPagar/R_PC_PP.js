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
var R_PC_PP = /** @class */ (function (_super) {
    __extends(R_PC_PP, _super);
    function R_PC_PP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_PC_PP.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PC_PP.prototype, "lstContaCorrente", {
        get: function () {
            return window['lstContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PC_PP.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PC_PP.prototype, "gridAnaliticaContasPagarPeriodo", {
        get: function () {
            return window['gridAnaliticaContasPagarPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PC_PP.prototype, "gridSintetica", {
        get: function () {
            return window['gridSintetica_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PC_PP.prototype, "tabResultado", {
        get: function () {
            return window['tabResultado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_PC_PP.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        if (this.ParametrosTela) {
            var dataInicial = this.ParametrosTela.dataInicial;
            var dataFinal = this.ParametrosTela.dataFinal;
            var empresas = this.ParametrosTela.empresas;
            if (dataInicial && dataFinal) {
                setTimeout(function () {
                    _this.Filtro.Periodo_Inicial = ConvertToDate(dataInicial);
                    _this.Filtro.Periodo_Final = ConvertToDate(dataFinal);
                    _this.RefreshAngular();
                }, 100);
            }
            if (!String.IsNullOrWhiteSpace(empresas)) {
                var itens_1 = empresas.replace(" ", "").split(",");
                setTimeout(function () {
                    _this.lstEmpresa.SetValues(itens_1);
                }, 100);
            }
        }
    };
    R_PC_PP.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.gridAnaliticaContasPagarPeriodo) {
            adicionarEventoMoura(this.gridAnaliticaContasPagarPeriodo.CellPrepared, this.OnCellPrepared, this);
            adicionarEventoMoura(this.gridAnaliticaContasPagarPeriodo.ClickBotaoLinha, this.ClickBotaoAnalitica, this);
        }
    };
    R_PC_PP.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        parametros = {
            dataInicial: this.Filtro.Periodo_Inicial,
            dataFinal: this.Filtro.Periodo_Final,
            codDocumentoMercantil: CNum(this.Filtro.Documento_Mercantil),
            codDocumentoBancario: CNum(this.Filtro.Documento_Bancario),
            codCentroCusto: CNum(this.Filtro.Centro_Custo),
            codContaContabil: CNum(this.Filtro.Conta_Contabil),
            nDocBancario: this.Filtro.N_Doc_Bancario,
            tipoData: this.Filtro.Tipo_Data,
            tipoConta: this.Filtro.Tipo_Conta,
            codContasCorrentes: this.lstContaCorrente.Lista.GetValues(),
            codEmpresas: this.lstEmpresa.GetValues(),
            somenteFiscal: this.Filtro.Somente_Fiscal,
            exibirLancamentos: this.Filtro.Exibir_Lancamentos
        };
        if (this.tabResultado.GetActiveTabIndex() == 0) {
            this.PreencherGradeAnalitica(parametros);
        }
        else {
            this.PreencherGradeSintetica(parametros);
        }
    };
    R_PC_PP.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Conta_Contabil = 0;
        this.Filtro.Centro_Custo = 0;
        this.Filtro.N_Doc_Bancario = "";
        this.Filtro.Tipo_Data = "V";
        this.Filtro.Tipo_Conta = "T";
        this.Filtro.Agrupar = "NE";
        this.Filtro.Documento_Mercantil = "0";
        this.Filtro.Documento_Bancario = "0";
        this.Filtro.Somente_Fiscal = false;
        this.Filtro.Exibir_Lancamentos = false;
        this.lstContaCorrente.Lista.LimparSelecao();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.gridAnaliticaContasPagarPeriodo.PreencherGrid(null);
        this.gridSintetica.PreencherGrid(null);
        this.Filtro.PMP_Medio = "";
        this.Filtro.Total_Previsto = "";
        this.Filtro.Valor_Real = "";
        this.gridAnaliticaContasPagarPeriodo.Grid.clearGrouping();
        this.gridAnaliticaContasPagarPeriodo.Grid.clearSorting();
        this.RefreshAngular();
    };
    R_PC_PP.prototype.OnCellPrepared = function (s, e) {
        if (e.rowType == "data") {
            if (e.data["Previsao"] == "S") {
                e.cellElement.css("color", "blue");
            }
        }
    };
    R_PC_PP.prototype.ClickBotaoAnalitica = function (s, e) {
        if (e.commandName === 'abrirTela') {
            var parametrosTela = [];
            parametrosTela.push("codigo=" + e.data.Codigo);
            abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.CadastroDeContasAPagar), parametrosTela);
        }
    };
    R_PC_PP.prototype.PreencherGradeAnalitica = function (parametros) {
        var _this = this;
        try {
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGridAnalitica", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                if (retorno) {
                    _this.gridAnaliticaContasPagarPeriodo.PreencherGrid(retorno.Dados_Grade);
                    _this.Filtro.PMP_Medio = retorno.PMP_Medio;
                    _this.Filtro.Total_Previsto = retorno.Total_Previsto;
                    _this.Filtro.Valor_Real = retorno.Valor_Real;
                    _this.gridAnaliticaContasPagarPeriodo.Grid.clearGrouping();
                    if (_this.Filtro.Exibir_Lancamentos) {
                        _this.gridAnaliticaContasPagarPeriodo.ColunaVisible("Tipo", true);
                        _this.gridAnaliticaContasPagarPeriodo.GroupBy("Tipo");
                    }
                    else {
                        _this.gridAnaliticaContasPagarPeriodo.ColunaVisible("Tipo", false);
                    }
                    switch (_this.Filtro.Agrupar) {
                        case "DV":
                            _this.gridAnaliticaContasPagarPeriodo.GroupBy("Data_Vencimento");
                            break;
                        case "CC":
                            _this.gridAnaliticaContasPagarPeriodo.GroupBy("Conta_Corrente");
                            break;
                        default:
                            _this.gridAnaliticaContasPagarPeriodo.OrderBy("Data_Vencimento", "asc");
                    }
                    _this.AccordionFiltros.SetExpanded(false);
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
    R_PC_PP.prototype.PreencherGradeSintetica = function (parametros) {
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
    return R_PC_PP;
}(MouraPageRelacaoAngular));
var r_PC_PP = new R_PC_PP();
//# sourceMappingURL=R_PC_PP.js.map