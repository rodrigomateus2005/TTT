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
var G_Faturamento = /** @class */ (function (_super) {
    __extends(G_Faturamento, _super);
    function G_Faturamento() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(G_Faturamento.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Faturamento.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Faturamento.prototype, "btnGerarCR", {
        get: function () {
            return window['btnGerarCR_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Faturamento.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Faturamento.prototype, "btnImprimir", {
        get: function () {
            return window['btnImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Faturamento.prototype, "mdImpressao", {
        get: function () {
            return window['mdImpressao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Faturamento.prototype, "accImpressao", {
        get: function () {
            return window['accImpressao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Faturamento.prototype, "gridImprimir", {
        get: function () {
            return window['gridImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Faturamento.prototype, "btnLimparImprimir", {
        get: function () {
            return window['btnLimparImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Faturamento.prototype, "btnGerarImprimir", {
        get: function () {
            return window['btnGerarImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Faturamento.prototype, "btnImprimirConta", {
        get: function () {
            return window['btnImprimirConta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Faturamento.prototype, "Parcelas", {
        get: function () {
            if (!this.GetScope()["Parcelas"]) {
                this.GetScope()["Parcelas"] = [];
            }
            return this.GetScope()["Parcelas"];
        },
        set: function (value) {
            this.GetScope()["Parcelas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Faturamento.prototype, "Agrupar", {
        get: function () {
            if (!this.GetScope()["Agrupar"]) {
                this.GetScope()["Agrupar"] = {};
            }
            return this.GetScope()["Agrupar"];
        },
        set: function (value) {
            this.GetScope()["Agrupar"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Faturamento.prototype, "Imprimir", {
        get: function () {
            if (!this.GetScope()["Imprimir"]) {
                this.GetScope()["Imprimir"] = {};
            }
            return this.GetScope()["Imprimir"];
        },
        set: function (value) {
            this.GetScope()["Imprimir"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Faturamento.prototype, "mdAgrupar", {
        get: function () {
            return window['mdAgrupar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Faturamento.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Faturamento.prototype, "btnCancelar", {
        get: function () {
            return window['btnCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Faturamento.prototype, "btnAgrupar", {
        get: function () {
            return window['btnAgrupar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Faturamento.prototype, "txtContaContabil", {
        get: function () {
            return window['txtContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    G_Faturamento.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    G_Faturamento.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnCancelar) {
            adicionarEventoMoura(this.btnCancelar.Click, this.OnClickCancelar, this);
        }
        if (this.btnGerarCR) {
            adicionarEventoMoura(this.btnGerarCR.Click, this.OnClickGerarCR, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.OnClickGerar, this);
        }
        if (this.btnAgrupar) {
            adicionarEventoMoura(this.btnAgrupar.Click, this.OnClickAgrupar, this);
        }
        if (this.btnImprimir) {
            adicionarEventoMoura(this.btnImprimir.Click, this.OnClickImprimir, this);
        }
        if (this.btnLimparImprimir) {
            adicionarEventoMoura(this.btnLimparImprimir.Click, this.LimparCamposModalImprimir, this);
        }
        if (this.btnGerarImprimir) {
            adicionarEventoMoura(this.btnGerarImprimir.Click, this.OnClickGerarImprimir, this);
        }
        if (this.btnImprimirConta) {
            adicionarEventoMoura(this.btnImprimirConta.Click, this.OnClickImprimirRelacao, this);
        }
        if (this.txtContaContabil) {
            adicionarEventoMoura(this.txtContaContabil.AntesAbrirProcura, this.OnAntesProcurarContaContabil, this);
            adicionarEventoMoura(this.txtContaContabil.Procurou, this.OnDepoisProcurouConta, this);
        }
        if (this.cboContaCorrente) {
            adicionarEventoDevExpress(this.cboContaCorrente.Combo.SelectedIndexChanged, this.OnSelectionContaChanged, this);
        }
    };
    G_Faturamento.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.LimparFiltros();
        this.LimparCamposModal();
        this.LimparCamposModalImprimir();
        this.AccordionFiltros.SetExpanded(true);
    };
    G_Faturamento.prototype.LimparFiltros = function () {
        this.Filtro.Cliente = 0;
        this.Filtro.Forma_Pagamento = "0";
        this.Filtro.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        this.Filtro.Periodo_Inicial = this.DataServidor();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.ValorSelecionado = CNum("0").Format(ValoresSismoura.CasasDecimaisValor);
        this.Filtro.ValorFinalSelecionado = CNum("0").Format(ValoresSismoura.CasasDecimaisValor);
        this.Filtro.Gerar_Juros = false;
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    G_Faturamento.prototype.LimparCamposModalImprimir = function () {
        this.Imprimir.Cliente = 0;
        this.Imprimir.Forma_Pagamento = "0";
        this.Imprimir.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        this.Imprimir.Periodo_Inicial = this.DataServidor();
        this.Imprimir.Periodo_Final = this.DataServidor();
        this.gridImprimir.PreencherGrid(null);
        this.RefreshAngular();
    };
    G_Faturamento.prototype.LimparCamposModal = function () {
        this.Agrupar.DocMercantil = null;
        this.cboContaCorrente.Limpar();
        this.Agrupar.ContaContabil = 0;
        this.Agrupar.FormaRecebimento = null;
        this.Agrupar.Parcela = 0;
        this.Agrupar.Vencimento_Inicial = null;
        this.Agrupar.TipoDias = "ND";
        this.Agrupar.Dias = 0;
        this.Parcelas = [];
        this.RefreshAngular();
    };
    G_Faturamento.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (this.ValidarCamposObrigatorios()) {
            parametros = {
                empresa: CNum(this.Filtro.Empresa),
                formaPagamento: CNum(this.Filtro.Forma_Pagamento),
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                cliente: CNum(this.Filtro.Cliente)
            };
            try {
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
    G_Faturamento.prototype.OnClickCancelar = function (s, e) {
        e.processOnServer = false;
        this.mdAgrupar.Hide();
    };
    G_Faturamento.prototype.OnClickGerarCR = function (s, e) {
        e.processOnServer = false;
        if (this.grid.GetSelectedRowsData.length <= 0) {
            MostrarAlerta("Nenhuma conta foi selecionada!");
            return;
        }
        this.LimparCamposModal();
        this.Agrupar.ValorSelecionado = this.Filtro.ValorSelecionado;
        this.mdAgrupar.Show();
        this.RefreshAngular();
    };
    G_Faturamento.prototype.ValidarCamposGravar = function () {
        var retorno = true;
        if (String.IsNullOrWhiteSpace(this.Agrupar.DocMercantil)) {
            retorno = false;
            MostrarMensagemCampoObrigatorio("Documento Mercantil");
        }
        else if (String.IsNullOrWhiteSpace(this.cboContaCorrente.GetContaCorrente())) {
            retorno = false;
            MostrarMensagemCampoObrigatorio("Conta Corrente");
        }
        else if (CNum(this.Agrupar.ContaContabil) <= 0) {
            retorno = false;
            MostrarMensagemCampoObrigatorio("Conta Contábil");
        }
        else if (String.IsNullOrWhiteSpace(this.Agrupar.FormaRecebimento)) {
            retorno = false;
            MostrarMensagemCampoObrigatorio("Forma de Recebimento");
        }
        else if (this.Parcelas.length <= 0) {
            MostrarAlerta("Insira ao menos uma parcela!");
            retorno = false;
        }
        return retorno;
    };
    G_Faturamento.prototype.ValidarCamposParcelas = function () {
        var retorno = true;
        if (CNum(this.Agrupar.Parcela) <= 0) {
            MostrarMensagemCampoObrigatorio("Parcela");
            retorno = false;
        }
        else if (CNum(this.Agrupar.Parcela) > 60) {
            MostrarAlerta("O número máximo de parcelas possíveis para gerar é 60!");
            retorno = false;
        }
        else if (this.Agrupar.TipoDias == "DF") {
            if (CNum(this.Agrupar.Dias) > 31 || CNum(this.Agrupar.Dias) <= 0) {
                MostrarAlerta("Informe um número menor ou igual a 31");
                retorno = false;
            }
        }
        if (retorno) {
            if (this.Filtro.Gerar_Juros) {
                if (this.grid.GetSelectedRowsData.Sum("Valor_Final") <= 0) {
                    MostrarAlerta("Valor inválido para gerar conta a receber!");
                    retorno = false;
                }
            }
            else {
                if (this.grid.GetSelectedRowsData.Sum("Valor") <= 0) {
                    MostrarAlerta("Valor inválido para gerar conta a receber!");
                    retorno = false;
                }
            }
        }
        if (retorno) {
            if (!ConvertToDate(this.Agrupar.Vencimento_Inicial)) {
                MostrarAlerta("Informe o vencimento inicial para gerar as parcelas!");
                retorno = false;
            }
            else if (String.IsNullOrWhiteSpace(this.Agrupar.DocMercantil)) {
                retorno = false;
                MostrarMensagemCampoObrigatorio("Documento Mercantil");
            }
            else if (String.IsNullOrWhiteSpace(this.cboContaCorrente.GetContaCorrente())) {
                retorno = false;
                MostrarMensagemCampoObrigatorio("Conta Corrente");
            }
            else if (CNum(this.Agrupar.ContaContabil) <= 0) {
                retorno = false;
                MostrarMensagemCampoObrigatorio("Conta Contábil");
            }
            else if (String.IsNullOrWhiteSpace(this.Agrupar.FormaRecebimento)) {
                retorno = false;
                MostrarMensagemCampoObrigatorio("Forma de Recebimento");
            }
        }
        return retorno;
    };
    G_Faturamento.prototype.OnSelecionouLinha = function (s, e) {
        this.Filtro.ValorSelecionado = this.grid.GetSelectedRowsData.Sum("Valor").Format(ValoresSismoura.CasasDecimaisValor);
        this.Filtro.ValorFinalSelecionado = this.grid.GetSelectedRowsData.Sum("Valor_Final").Format(ValoresSismoura.CasasDecimaisValor);
        this.RefreshAngular();
    };
    G_Faturamento.prototype.OnClickGerar = function (s, e) {
        e.processOnServer = false;
        if (this.ValidarCamposParcelas()) {
            this.GerarParcelas();
        }
    };
    G_Faturamento.prototype.GerarParcelas = function () {
        var _this = this;
        var parametros;
        var selecionados;
        selecionados = this.grid.GetSelectedRowsData;
        try {
            parametros = {
                contasSelecionadas: JSON.stringify(selecionados),
                formaRecebimento: CNum(this.Agrupar.FormaRecebimento),
                parcelas: CNum(this.Agrupar.Parcela),
                dias: CNum(this.Agrupar.Dias),
                tipoDias: this.Agrupar.TipoDias,
                vencimentoInicial: ConvertToDate(this.Agrupar.Vencimento_Inicial),
                valorSelecionado: CNum(this.Agrupar.ValorSelecionado),
                gerarJuros: this.Filtro.Gerar_Juros
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGridParcelas", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.Parcelas = retorno;
                _this.RefreshAngular();
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
    G_Faturamento.prototype.OnClickAgrupar = function (s, e) {
        if (this.ValidarCamposGravar()) {
            this.AgruparContasReceber();
        }
    };
    G_Faturamento.prototype.AgruparContasReceber = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                contasReceberAntigas: JSON.stringify(this.grid.GetSelectedRowsData),
                contasReceberNovas: JSON.stringify(this.Parcelas),
                documentoMercantil: CNum(this.Agrupar.DocMercantil),
                contaCorrente: this.cboContaCorrente.GetContaCorrente(),
                codEmpresa: this.cboContaCorrente.GetEmpresa(),
                formaRecebimento: CNum(this.Agrupar.FormaRecebimento),
                contaContabil: CNum(this.Agrupar.ContaContabil),
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("Agrupar", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                MsgBoxJS("Conta(s) agrupada(s) com sucesso!<br />Deseja imprimir o(s) faturamento(s)?", MsgBoxOptions.YesNo, MsgBoxIcon.Alert, function (r) {
                    if (r.Resultado == MsgBoxResult.Yes) {
                        _this.ImprimirFaturamento(retorno);
                    }
                });
                _this.mdAgrupar.Hide();
                _this.LimparCampos();
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
    G_Faturamento.prototype.ImprimirFaturamento = function (codFaturamento) {
        var parametros;
        try {
            parametros = {
                codFaturamento: codFaturamento
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PrepararImpressao", parametros, function (d) {
                fecharEspera();
                AbrirReport("~/Report/Fixos/", "FaturaCliente.REPX");
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
    G_Faturamento.prototype.OnClickImprimir = function (s, e) {
        this.LimparCamposModalImprimir();
        this.mdImpressao.Show();
    };
    G_Faturamento.prototype.OnClickGerarImprimir = function (s, e) {
        if (ValidarPeriodo(this.Imprimir.Periodo_Inicial, this.Imprimir.Periodo_Final)) {
            this.PreencherGradeImprimir();
        }
    };
    G_Faturamento.prototype.PreencherGradeImprimir = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                codFaturamento: CNum(this.Imprimir.Codigo),
                empresa: CNum(this.Imprimir.Empresa),
                formaPagamento: CNum(this.Imprimir.Forma_Pagamento),
                dataInicial: this.Imprimir.Periodo_Inicial,
                dataFinal: this.Imprimir.Periodo_Final,
                cliente: CNum(this.Imprimir.Cliente)
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGridImprimir", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.gridImprimir.PreencherGrid(retorno);
                _this.accImpressao.SetExpanded(false);
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
    G_Faturamento.prototype.OnClickImprimirRelacao = function () {
        if (this.gridImprimir.GetSelectedRowsData.length <= 0) {
            MostrarAlerta("Selecione alguma conta para imprimir!");
            return;
        }
        this.ImprimirFatAgrupado();
    };
    G_Faturamento.prototype.ImprimirFatAgrupado = function () {
        var parametros;
        try {
            parametros = {
                dados: this.gridImprimir.GetSelectedRowsData
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PrepararImpressaoRelacao", parametros, function (d) {
                fecharEspera();
                AbrirReport("~/Report/Fixos/", "FaturaCliente.REPX");
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
    G_Faturamento.prototype.OnSelectionContaChanged = function (s, e) {
        this.txtContaContabil.Limpar();
    };
    G_Faturamento.prototype.OnAntesProcurarContaContabil = function (s, e) {
        this.txtContaContabil.LimparParametros();
        this.txtContaContabil.AddParametro("Sintetico", "N");
        this.txtContaContabil.AddParametro("Empresa", this.cboContaCorrente.GetEmpresa() > 0 ? this.cboContaCorrente.GetEmpresa().toString() : "");
    };
    G_Faturamento.prototype.OnDepoisProcurouConta = function (s, e) {
        if (CNum(this.txtContaContabil.GetText()) && this.cboContaCorrente.GetEmpresa() > 0) {
            if (this.VerificarContaContabil()) {
                this.VerificarContaContabilEmpresa();
            }
        }
    };
    G_Faturamento.prototype.VerificarContaContabilEmpresa = function () {
        var parametros;
        try {
            parametros = {
                contaContabil: CNum(this.txtContaContabil.GetText()),
                empresa: CNum(this.cboContaCorrente.GetEmpresa())
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (!String.IsNullOrWhiteSpace(retorno)) {
                MostrarAlerta(retorno);
                this.txtContaContabil.Limpar();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    G_Faturamento.prototype.VerificarContaContabil = function () {
        var parametros;
        try {
            parametros = {
                contaContabil: CNum(this.txtContaContabil.GetText())
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametros);
            if (!String.IsNullOrWhiteSpace(retorno)) {
                MostrarAlerta(retorno);
                this.txtContaContabil.Limpar();
                return false;
            }
            else {
                return true;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return G_Faturamento;
}(MouraPageRelacaoAngular));
var g_Faturamento = new G_Faturamento();
//# sourceMappingURL=G_Faturamento.js.map