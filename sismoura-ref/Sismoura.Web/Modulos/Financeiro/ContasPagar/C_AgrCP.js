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
var C_AgrCP = /** @class */ (function (_super) {
    __extends(C_AgrCP, _super);
    function C_AgrCP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_AgrCP.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgrCP.prototype, "btnAgrupar", {
        get: function () {
            return window['btnAgrupar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgrCP.prototype, "btnCancelar", {
        get: function () {
            return window['btnCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgrCP.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgrCP.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgrCP.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgrCP.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgrCP.prototype, "txtFornecedor", {
        get: function () {
            return window['txtFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgrCP.prototype, "txtContaContabil", {
        get: function () {
            return window['txtContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgrCP.prototype, "Agrupar", {
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
    Object.defineProperty(C_AgrCP.prototype, "Parcelas", {
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
    Object.defineProperty(C_AgrCP.prototype, "mdAgrupar", {
        get: function () {
            return window['mdAgrupar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_AgrCP.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    C_AgrCP.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
        if (this.btnAgrupar) {
            adicionarEventoMoura(this.btnAgrupar.Click, this.OnClickAgrupar, this);
        }
        if (this.btnCancelar) {
            adicionarEventoMoura(this.btnCancelar.Click, this.OnClickCancelar, this);
        }
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.OnClickGerar, this);
        }
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.OnClickGravar, this);
        }
        if (this.txtFornecedor) {
            adicionarEventoMoura(this.txtFornecedor.AntesAbrirProcura, this.OnAntesProcurarFornecedor, this);
        }
        if (this.txtContaContabil) {
            adicionarEventoMoura(this.txtContaContabil.AntesAbrirProcura, this.OnAntesProcurarContaContabil, this);
            adicionarEventoMoura(this.txtContaContabil.Procurou, this.OnDepoisProcurouConta, this);
        }
        if (this.cboContaCorrente) {
            adicionarEventoDevExpress(this.cboContaCorrente.Combo.SelectedIndexChanged, this.OnSelectionContaChanged, this);
        }
    };
    C_AgrCP.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (this.ValidarCamposObrigatorios()) {
            parametros = {
                codFornecedor: CNum(this.Filtro.Fornecedor),
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                tipoFiltro: this.Filtro.Filtrar
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
    C_AgrCP.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.LimparFiltros();
        this.LimparCamposModal();
        this.AccordionFiltros.SetExpanded(true);
    };
    C_AgrCP.prototype.LimparFiltros = function () {
        this.Filtro.Fornecedor = 0;
        this.Filtro.Filtrar = "V";
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Selecionado = CNum(0).Format(ValoresSismoura.CasasDecimaisValor);
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    C_AgrCP.prototype.LimparCamposModal = function () {
        this.Agrupar.DocMercantil = null;
        this.Agrupar.N_DocMercantil = "";
        this.cboContaCorrente.Limpar();
        this.Agrupar.ContaContabil = 0;
        this.Agrupar.Portador = "";
        this.Agrupar.FormaPagamento = null;
        this.Agrupar.N_Doc_Bancario = "";
        this.Agrupar.Observacao = "";
        this.Agrupar.Parcela = 0;
        this.Agrupar.Vencimento_Inicial = this.DataServidor();
        this.Agrupar.TipoDias = "ND";
        this.Agrupar.Dias = 0;
        this.Parcelas = [];
        this.RefreshAngular();
    };
    C_AgrCP.prototype.OnAntesProcurarContaContabil = function (s, e) {
        this.txtContaContabil.LimparParametros();
        this.txtContaContabil.AddParametro("Sintetico", "N");
        if (ValoresSismoura.ConfiguracoesRetaguarda.Bloquear_Cliente_Empresa) {
            this.txtContaContabil.AddParametro("Empresa", this.RetornaEmpresasUsuario());
        }
        else {
            this.txtContaContabil.AddParametro("Empresa", this.cboContaCorrente.GetEmpresa() > 0 ? this.cboContaCorrente.GetEmpresa().toString() : "");
        }
    };
    C_AgrCP.prototype.OnAntesProcurarFornecedor = function (s, e) {
        this.txtFornecedor.LimparParametros();
        if (ValoresSismoura.ConfiguracoesRetaguarda.Procura_Fornecedor_Buscar_Empresa) {
            this.txtFornecedor.AddParametro("Codigo_Empresa", this.RetornaEmpresasUsuario());
        }
    };
    C_AgrCP.prototype.RetornaEmpresasUsuario = function () {
        var parametros;
        try {
            var retorno = this.ExecutarFuncaoServerSideSynch("RetornaEmpresasUsuario", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
        return retorno;
    };
    C_AgrCP.prototype.OnClickAgrupar = function (s, e) {
        e.processOnServer = false;
        if (this.grid.GetSelectedRowsData.length <= 0) {
            MostrarAlerta("Selecione as contas a serem agrupadas!");
            return;
        }
        else if (CNum(this.Filtro.Fornecedor) <= 0) {
            MostrarMensagemCampoObrigatorio("Fornecedor");
            return;
        }
        this.LimparCamposModal();
        this.Agrupar.ValorSelecionado = this.grid.GetSelectedRowsData.Sum("Valor").Format(ValoresSismoura.CasasDecimaisValor);
        this.mdAgrupar.Show();
    };
    C_AgrCP.prototype.OnClickCancelar = function (s, e) {
        e.processOnServer = false;
        this.mdAgrupar.Hide();
    };
    C_AgrCP.prototype.ValidarCamposModal = function () {
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
        else if (this.Parcelas.length <= 0) {
            MostrarAlerta("Insira ao menos uma parcela!");
            retorno = false;
        }
        return retorno;
    };
    C_AgrCP.prototype.VerificarParcelas = function () {
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
            if (!ConvertToDate(this.Agrupar.Vencimento_Inicial)) {
                MostrarAlerta("Informe o vencimento inicial para gerar as parcelas!");
                retorno = false;
            }
        }
        return retorno;
    };
    C_AgrCP.prototype.OnClickGerar = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        if (CNum(this.Agrupar.Dias) == 0 && this.Agrupar.TipoDias == "ND") {
            MsgBoxJS("Atenção. O número de dias está igual a zero. Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Alert, function (r) {
                if (r.Resultado == MsgBoxResult.Yes) {
                    if (_this.VerificarParcelas()) {
                        _this.GerarParcelas();
                    }
                }
            });
        }
        else {
            if (this.VerificarParcelas()) {
                this.GerarParcelas();
            }
        }
    };
    C_AgrCP.prototype.GerarParcelas = function () {
        var _this = this;
        var parametros;
        parametros = {
            tipoDias: this.Agrupar.TipoDias,
            valorSelecionado: CNum(this.Agrupar.ValorSelecionado),
            vencimentoInicial: ConvertToDate(this.Agrupar.Vencimento_Inicial),
            parcelas: CNum(this.Agrupar.Parcela),
            dias: CNum(this.Agrupar.Dias)
        };
        this.Parcelas = [];
        try {
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGradeParcelas", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.Parcelas = retorno;
                _this.Agrupar.Parcela = 0;
                _this.Agrupar.Dias = 0;
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
    C_AgrCP.prototype.OnClickGravar = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        if (this.ValidarCamposModal()) {
            MsgBoxJS("As contas selecionadas serão excluídas, não havendo como retorná-las. Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (r) {
                if (r.Resultado == MsgBoxResult.Yes) {
                    _this.GravarContas();
                }
            });
        }
    };
    C_AgrCP.prototype.GravarContas = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                contasExcluidas: this.grid.GetSelectedRowsData.map(function (item) { return item.Codigo; }),
                parcelas: JSON.stringify(this.Parcelas),
                codDocMerc: this.Agrupar.DocMercantil,
                nDocMerc: this.Agrupar.N_DocMercantil,
                contaCorrente: this.cboContaCorrente.GetContaCorrente(),
                portador: this.Agrupar.Portador,
                codDocBancario: CNum(this.Agrupar.FormaPagamento),
                nDocBancario: this.Agrupar.N_Doc_Bancario,
                observacao: this.Agrupar.Observacao,
                codFornecedor: CNum(this.Filtro.Fornecedor),
                codContaContabil: CNum(this.Agrupar.ContaContabil),
                tela: ValoresSismoura.NomeTela,
                usuario: ValoresSismoura.UsuarioLogado
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GravarContas", parametros, function (d) {
                fecharEspera();
                _this.mdAgrupar.Hide();
                MostrarMensagem("Contas inseridas com sucesso para o Fornecedor " + _this.txtFornecedor.GetResultado());
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
    C_AgrCP.prototype.OnSelectionContaChanged = function (s, e) {
        this.txtContaContabil.Limpar();
    };
    C_AgrCP.prototype.OnDepoisProcurouConta = function (s, e) {
        if (CNum(this.txtContaContabil.GetText()) && this.cboContaCorrente.GetEmpresa() > 0) {
            this.VerificarContaContabilEmpresa();
        }
    };
    C_AgrCP.prototype.VerificarContaContabilEmpresa = function () {
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
    C_AgrCP.prototype.OnSelecionouLinha = function (s, e) {
        this.Filtro.Selecionado = this.grid.GetSelectedRowsData.Sum("Valor").Format(ValoresSismoura.CasasDecimaisValor);
        this.RefreshAngular();
    };
    return C_AgrCP;
}(MouraPageRelacaoAngular));
var c_AgrCP = new C_AgrCP();
//# sourceMappingURL=C_AgrCP.js.map