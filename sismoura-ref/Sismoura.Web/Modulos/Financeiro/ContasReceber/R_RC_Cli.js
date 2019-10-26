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
var R_RC_Cli = /** @class */ (function (_super) {
    __extends(R_RC_Cli, _super);
    function R_RC_Cli() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_RC_Cli.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Cli.prototype, "lstContaCorrente", {
        get: function () {
            return window['lstContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Cli.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Cli.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Cli.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Cli.prototype, "txtNota", {
        get: function () {
            return window['txtNota_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Cli.prototype, "lblValor", {
        get: function () {
            return window['lblValor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Cli.prototype, "lblLocalCliente", {
        get: function () {
            return window['lblLocalCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Cli.prototype, "lblLocalCobranca", {
        get: function () {
            return window['lblLocalCobranca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Cli.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Cli.prototype, "txtLocalTrabalho", {
        get: function () {
            return window['txtLocalTrabalho_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Cli.prototype, "txtRG", {
        get: function () {
            return window['txtRG_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Cli.prototype, "txtCPF", {
        get: function () {
            return window['txtCPF_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Cli.prototype, "infVenda", {
        get: function () {
            return window['infVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_RC_Cli.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().MudouTipoData) {
            this.GetScope().MudouTipoData = $.proxy(this.MudouTipoData, this);
            var that = this;
            this.GetScope().$watch(function () { return that.Filtro.Tipo_Data; }, this.GetScope().MudouTipoData);
        }
    };
    R_RC_Cli.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtCliente) {
            adicionarEventoMoura(this.txtCliente.Procurou, this.OnProcurouCliente, this);
        }
        if (this.lstEmpresa) {
            adicionarEventoMoura(this.lstEmpresa.SelectionChanged, this.OnMudouEmpresa, this);
        }
        if (this.txtNota) {
            adicionarEventoMoura(this.txtNota.Procurou, this.OnProcurouNota, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
            adicionarEventoMoura(this.grid.CellPrepared, this.OnCellPrepared, this);
            adicionarEventoMoura(this.grid.ClickBotaoLinha, this.OnClickBotaoLinha, this);
        }
    };
    R_RC_Cli.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Cliente = 0;
        this.Filtro.Vendedor = 0;
        this.lstContaCorrente.Lista.LimparSelecao();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.Filtro.Tipo_Data = "E";
        this.Filtro.Local_Trabalho = "";
        this.Filtro.RG_IE = "";
        this.Filtro.CPF = "";
        this.Filtro.Nota_Fiscal = 0;
        this.Filtro.Somente_Fiscal = false;
        this.Filtro.Agrupar_Data = false;
        if (ValoresSismoura.ConfiguracoesRetaguarda.Conta_Vendedor_Cliente) {
            this.Filtro.Tipo_Vendedor = "C";
        }
        else {
            this.Filtro.Tipo_Vendedor = "V";
        }
        this.lstContaCorrente.Preencher(this.lstEmpresa.GetValuesNumber(), true);
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_RC_Cli.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (this.ValidarCamposObrigatorios()) {
            try {
                parametros = {
                    dataInicial: this.Filtro.Periodo_Inicial,
                    dataFinal: this.Filtro.Periodo_Final,
                    notaFiscal: CNum(this.Filtro.Nota_Fiscal),
                    codCliente: CNum(this.Filtro.Cliente),
                    codVendedor: CNum(this.Filtro.Vendedor),
                    codContasCorrentes: this.lstContaCorrente.Lista.GetValues(),
                    tipoData: this.Filtro.Tipo_Data,
                    tipoVendedor: this.Filtro.Tipo_Vendedor,
                    somenteFiscal: this.Filtro.Somente_Fiscal,
                    codEmpresas: this.lstEmpresa.GetValues()
                };
                abrirEspera("");
                this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
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
        }
    };
    R_RC_Cli.prototype.OnProcurouCliente = function (s, e) {
        var codCliente = CNum(this.txtCliente.GetText());
        this.Filtro.Local_Trabalho = "";
        this.Filtro.RG_IE = "";
        this.Filtro.CPF = "";
        if (codCliente > 0) {
            this.PreencherInformacoesCliente(codCliente);
        }
        this.RefreshAngular();
    };
    R_RC_Cli.prototype.PreencherInformacoesCliente = function (codCliente) {
        var parametros;
        try {
            parametros = {
                codCliente: codCliente
            };
            var dadosCliente = this.ExecutarFuncaoServerSideSynch("PreencherInformacoesCliente", parametros);
            if (dadosCliente) {
                this.Filtro.Local_Trabalho = dadosCliente.Local_Trabalho;
                this.Filtro.RG_IE = dadosCliente.RG_IE;
                this.Filtro.CPF = dadosCliente.CPF;
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_RC_Cli.prototype.OnMudouEmpresa = function (s, e) {
        this.lstContaCorrente.Preencher(this.lstEmpresa.GetValuesNumber(), true);
    };
    R_RC_Cli.prototype.OnProcurouNota = function (s, e) {
        var notaFiscal = CNum(this.txtNota.GetText());
        this.Filtro.Valor = "";
        this.Filtro.Local_Cliente = "";
        this.Filtro.Local_Cobranca = "";
        if (notaFiscal > 0) {
            this.GetInformacoesNF(notaFiscal);
        }
        this.RefreshAngular();
    };
    R_RC_Cli.prototype.GetInformacoesNF = function (notaFiscal) {
        var parametros;
        try {
            parametros = {
                notaFiscal: notaFiscal
            };
            var dadosNF = this.ExecutarFuncaoServerSideSynch("GetInformacoesNF", parametros);
            if (dadosNF) {
                this.Filtro.Valor = dadosNF.Total_NF;
                this.Filtro.Local_Cobranca = dadosNF.Endereco_Cobranca;
                this.Filtro.Local_Cliente = dadosNF.Endereco_Entrega;
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_RC_Cli.prototype.OnSelecionouLinha = function (s, e) {
        abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroDeContasAReceber), e.data["Codigo"]);
    };
    R_RC_Cli.prototype.OnCellPrepared = function (s, e) {
        if (e.rowType == "data") {
            if (e.data["Previsao"] == "S") {
                e.cellElement.css("color", "blue");
            }
        }
    };
    R_RC_Cli.prototype.MudouTipoData = function () {
        if (this.Filtro.Tipo_Data == "N") {
            this.txtNota.Visible = true;
            this.txtNota.Obrigatorio = true;
            this.txtPeriodo.Visible = false;
            this.txtPeriodo.Obrigatorio = false;
            this.txtCliente.Limpar();
            this.txtCliente.Visible = false;
            this.txtCliente.Obrigatorio = false;
            this.txtLocalTrabalho.Visible = false;
            this.txtRG.Visible = false;
            this.txtCPF.Visible = false;
            this.Filtro.Local_Trabalho = "";
            this.Filtro.RG_IE = "";
            this.Filtro.CPF = "";
        }
        else {
            this.txtNota.Visible = false;
            this.txtNota.Obrigatorio = false;
            this.txtNota.Limpar();
            this.Filtro.Valor = "";
            this.Filtro.Local_Cliente = "";
            this.Filtro.Local_Cobranca = "";
            this.txtPeriodo.Visible = true;
            this.txtPeriodo.Obrigatorio = true;
            //this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
            //this.Filtro.Periodo_Final = this.DataServidor();
            this.txtCliente.Visible = true;
            this.txtCliente.Obrigatorio = true;
            this.txtLocalTrabalho.Visible = true;
            this.txtRG.Visible = true;
            this.txtCPF.Visible = true;
        }
        this.lblValor.Visible = this.txtNota.Visible;
        this.lblLocalCliente.Visible = this.txtNota.Visible;
        this.lblLocalCobranca.Visible = this.txtNota.Visible;
        this.RefreshAngular();
    };
    R_RC_Cli.prototype.OnClickBotaoLinha = function (s, e) {
        this.infVenda.Abrir(CNum(e.data["Venda"]));
    };
    return R_RC_Cli;
}(MouraPageRelacaoAngular));
var r_RC_Cli = new R_RC_Cli();
//# sourceMappingURL=R_RC_Cli.js.map