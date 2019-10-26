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
var R_RC_PP = /** @class */ (function (_super) {
    __extends(R_RC_PP, _super);
    function R_RC_PP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_RC_PP.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_PP.prototype, "lstPosicoesTitulos", {
        get: function () {
            return window['lstPosicoesTitulos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_PP.prototype, "lstContaCorrente", {
        get: function () {
            return window['lstContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_PP.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_PP.prototype, "chkSemConvenio", {
        get: function () {
            return window['chkSemConvenio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_PP.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_PP.prototype, "infVenda", {
        get: function () {
            return window['infVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_RC_PP.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().MudouAgrupamento) {
            this.GetScope().MudouAgrupamento = $.proxy(this.MudouAgrupamento, this);
            var that = this;
            this.GetScope().$watch(function () { return that.Filtro.Agrupamento; }, this.GetScope().MudouAgrupamento);
        }
        if (!this.GetScope().MudouNotaFiscal) {
            this.GetScope().MudouNotaFiscal = $.proxy(this.MudouNotaFiscal, this);
            var that = this;
            this.GetScope().$watch(function () { return that.Filtro.Nota_Fiscal; }, this.GetScope().MudouNotaFiscal);
        }
        if (this.ParametrosTela) {
            var dataInicial = this.ParametrosTela.dataInicial;
            var dataFinal = this.ParametrosTela.dataFinal;
            var empresas = this.ParametrosTela.empresas;
            if (dataInicial && dataFinal) {
                setTimeout(function () {
                    _this.Filtro.Periodo_Inicial = ConvertToDate(dataInicial);
                    _this.Filtro.Periodo_Final = ConvertToDate(dataFinal);
                    _this.RefreshAngular();
                }, 500);
            }
            if (!String.IsNullOrWhiteSpace(empresas)) {
                var itens = empresas.replace(" ", "").split(",");
                setTimeout(function () {
                    _this.lstEmpresa.SetValues(itens);
                }, 500);
            }
        }
    };
    R_RC_PP.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.lstEmpresa) {
            adicionarEventoMoura(this.lstEmpresa.SelectionChanged, this.OnMudouEmpresa, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
            adicionarEventoMoura(this.grid.ClickBotaoLinha, this.OnClickBotaoLinha, this);
            adicionarEventoMoura(this.grid.CellPrepared, this.OnCellPrepared, this);
        }
    };
    R_RC_PP.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Tipo_Data = "V";
        this.Filtro.Situacao = "TD";
        this.Filtro.Agrupamento = "NAO";
        this.Filtro.Forma_Pagamento = "0";
        this.Filtro.Doc_Mercantil = "0";
        this.Filtro.Estado = "";
        this.Filtro.Fechamento = 0;
        this.Filtro.Nota_Fiscal = 0;
        this.Filtro.Nome_ClienteNF = "";
        this.Filtro.ValorNF = "";
        this.Filtro.Romaneio = 0;
        this.Filtro.NossoNumero = "";
        this.Filtro.Vendedor = 0;
        this.Filtro.Centro_Custo = 0;
        this.Filtro.Cidade = 0;
        this.Filtro.Zona_Venda = 0;
        this.Filtro.Convenio = 0;
        this.Filtro.Usuario_Responsavel = 0;
        this.Filtro.Conta_Contabil = 0;
        this.lstPosicoesTitulos.LimparSelecao();
        this.lstContaCorrente.Lista.LimparSelecao();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.Filtro.Cliente_Inativo = true;
        this.Filtro.Totalizar_Dia = false;
        this.Filtro.Somente_Boleto = false;
        this.Filtro.Sem_Convenio = false;
        if (ValoresSismoura.ConfiguracoesRetaguarda.Conta_Vendedor_Cliente) {
            this.Filtro.Tipo_Vendedor = "C";
        }
        else {
            this.Filtro.Tipo_Vendedor = "V";
        }
        this.Filtro.PMC = "";
        this.Filtro.Total_Previsto = "";
        this.lstContaCorrente.Preencher(this.lstEmpresa.GetValuesNumber(), true);
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_RC_PP.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            if (this.ValidarCamposObrigatorios()) {
                parametros = {
                    dataInicial: this.Filtro.Periodo_Inicial,
                    dataFinal: this.Filtro.Periodo_Final,
                    codVendedor: CNum(this.Filtro.Vendedor),
                    formaPagamento: CNum(this.Filtro.Forma_Pagamento),
                    docMercantil: CNum(this.Filtro.Doc_Mercantil),
                    codCentroCusto: CNum(this.Filtro.Centro_Custo),
                    codCidade: CNum(this.Filtro.Cidade),
                    codZonaVenda: CNum(this.Filtro.Zona_Venda),
                    notaFiscal: CNum(this.Filtro.Nota_Fiscal),
                    codRomaneio: CNum(this.Filtro.Romaneio),
                    codConvenio: CNum(this.Filtro.Convenio),
                    codUsuarioResponsavel: CNum(this.Filtro.Usuario_Responsavel),
                    codContaContabil: CNum(this.Filtro.Conta_Contabil),
                    codFechamento: CNum(this.Filtro.Fechamento),
                    nossoNumero: CNum(this.Filtro.Nosso_Numero),
                    situacao: this.Filtro.Situacao,
                    tipoData: this.Filtro.Tipo_Data,
                    tipoVendedor: this.Filtro.Tipo_Vendedor,
                    codPosicoesTitulo: this.lstPosicoesTitulos.GetValues(),
                    codEmpresas: this.lstEmpresa.GetValues(),
                    clienteInativo: this.Filtro.Cliente_Inativo,
                    semConvenio: this.Filtro.Sem_Convenio,
                    somenteBoleto: this.Filtro.Somente_Boleto,
                    codContasCorrentes: this.lstContaCorrente.Lista.GetValues(),
                    estado: this.Filtro.Estado,
                    agrupamento: this.Filtro.Agrupamento
                };
                abrirEspera("");
                this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                    var retorno = GetRetornoAJAX(d);
                    if (retorno) {
                        _this.grid.PreencherGrid(retorno.Dados_Grade);
                        _this.Filtro.PMC = retorno.PMC;
                        _this.Filtro.Total_Previsto = retorno.TotalPrevisto;
                        _this.grid.Grid.clearGrouping();
                        switch (_this.Filtro.Agrupamento) {
                            case "CON": //Convênio
                                _this.grid.GroupBy("Convenio");
                                break;
                            case "CLI": //Cliente
                                _this.grid.GroupBy("Nome_Cliente");
                                break;
                            case "CEN": //Centro de Custo
                                _this.grid.GroupBy("Centro_Custo");
                                break;
                        }
                        if (_this.Filtro.Totalizar_Dia) {
                            _this.grid.GroupBy("Data_Vencimento");
                        }
                        _this.AccordionFiltros.SetExpanded(false);
                    }
                    fecharEspera();
                    _this.RefreshAngular();
                }, function (erro) {
                    fecharEspera();
                    LogarException(erro);
                }, this);
            }
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    R_RC_PP.prototype.MudouAgrupamento = function () {
        if (this.Filtro.Agrupamento === "CON") {
            this.Filtro.Sem_Convenio = false;
            this.chkSemConvenio.Visible = false;
        }
        else {
            this.chkSemConvenio.Visible = true;
        }
    };
    R_RC_PP.prototype.OnMudouEmpresa = function (s, e) {
        this.lstContaCorrente.Preencher(this.lstEmpresa.GetValuesNumber(), true);
    };
    R_RC_PP.prototype.OnSelecionouLinha = function (s, e) {
        abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroDeContasAReceber), e.data["Codigo"]);
    };
    R_RC_PP.prototype.OnClickBotaoLinha = function (s, e) {
        if (e.commandName == "DETALHES") {
            this.infVenda.Abrir(CNum(e.data["Venda"]));
        }
    };
    R_RC_PP.prototype.OnCellPrepared = function (s, e) {
        if (e.rowType == "data") {
            var previsao = e.data["Previsao"];
            var data = ConvertToDate(e.data["Data_Vencimento"]);
            if (data) {
                if (e.data["ContaVencida"]) {
                    e.cellElement.css("color", "red");
                }
            }
            if (!String.IsNullOrWhiteSpace(previsao)) {
                if (previsao === "S") {
                    e.cellElement.css("color", "blue");
                }
            }
        }
    };
    R_RC_PP.prototype.MudouNotaFiscal = function () {
        var nf = CNum(this.Filtro.Nota_Fiscal);
        this.Filtro.Nome_ClienteNF = "";
        this.Filtro.ValorNF = "";
        if (nf > 0) {
            var dadosNota = this.GetInformacoesNF(nf);
            if (dadosNota) {
                this.Filtro.Nome_ClienteNF = dadosNota.Nome;
                this.Filtro.ValorNF = dadosNota.TotalNF;
            }
            else {
                MostrarAlerta("Nota Fiscal não encontrada");
                this.Filtro.Nota_Fiscal = "";
            }
        }
    };
    R_RC_PP.prototype.GetInformacoesNF = function (notaFiscal) {
        var parametros;
        try {
            parametros = {
                notaFiscal: notaFiscal
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetInformacoesNF", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_RC_PP;
}(MouraPageRelacaoAngular));
var r_RC_PP = new R_RC_PP();
//# sourceMappingURL=R_RC_PP.js.map