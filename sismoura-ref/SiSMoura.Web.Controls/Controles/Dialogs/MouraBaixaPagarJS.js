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
var MouraBaixaPagarJS = /** @class */ (function (_super) {
    __extends(MouraBaixaPagarJS, _super);
    function MouraBaixaPagarJS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MouraBaixaPagarJS.prototype, "dadosCheque", {
        get: function () {
            return window[this.ID + '_dadosCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "centrosCusto", {
        get: function () {
            return window[this.ID + '_dadosCentroCusto'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "pnModal", {
        get: function () {
            return window[this.ID + "_pnModal_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "lblTotalAPagar", {
        get: function () {
            return window[this.ID + "_lblTotalAPagar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "cboFormaPagamento", {
        get: function () {
            return window[this.ID + "_cboFormaPagamento_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "txtNumeroDocumento", {
        get: function () {
            return window[this.ID + "_txtNumeroDocumento_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "txtContaContabil", {
        get: function () {
            return window[this.ID + "_txtContaContabil_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "cboContaCorrente", {
        get: function () {
            return window[this.ID + "_cboContaCorrente_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "cboGerar", {
        get: function () {
            return window[this.ID + "_cboGerar_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "txtDataCredito", {
        get: function () {
            return window[this.ID + "_txtDataCredito_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "txtValor", {
        get: function () {
            return window[this.ID + "_txtValor_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "btnOK", {
        get: function () {
            return window[this.ID + "_btnOK_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "btnCancelar", {
        get: function () {
            return window[this.ID + "_btnCancelar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "btnAdicionar", {
        get: function () {
            return window[this.ID + "_btnAdicionar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "grd", {
        get: function () {
            return window[this.ID + "_grd_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "chkLancamentoIndividual", {
        get: function () {
            return window[this.ID + "_chkLancamentoIndividual_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "optDadosConta", {
        get: function () {
            return window[this.ID + "_optDadosConta_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "hdnFormaPagamento", {
        get: function () {
            return $("#" + this.ID + "_hdnFormaPagamento")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "hdnValorJuros", {
        get: function () {
            return $("#" + this.ID + "_hdnValorJuros")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "hdnValorDesconto", {
        get: function () {
            return $("#" + this.ID + "_hdnValorDesconto")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "hdnCodigos", {
        get: function () {
            return $("#" + this.ID + "_hdnCodigos")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "hdnCodigo", {
        get: function () {
            return $("#" + this.ID + "_hdnCodigo")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "hdnCodUsuario", {
        get: function () {
            return $("#" + this.ID + "_hdnCodUsuario")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "hdnTela", {
        get: function () {
            return $("#" + this.ID + "_hdnTela")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "hdnObservacao", {
        get: function () {
            return $("#" + this.ID + "_hdnObservacao")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "hdnDataBaixa", {
        get: function () {
            return $("#" + this.ID + "_hdnDataBaixa")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "hdnNumeroDocBancario", {
        get: function () {
            return $("#" + this.ID + "_hdnNumeroDocBancario")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "hdnVencimentoResiduos", {
        get: function () {
            return $("#" + this.ID + "_hdnVencimentoResiduos")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "hdnValorCotacao", {
        get: function () {
            return $("#" + this.ID + "_hdnValorCotacao")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "hdnIsBaixaLote", {
        get: function () {
            return $("#" + this.ID + "_hdnIsBaixaLote")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "FormasPagamento", {
        get: function () {
            var retorno;
            if (this.hdnFormaPagamento.value == "")
                return [];
            try {
                retorno = JSON.parse(this.hdnFormaPagamento.value.split("'").join('"'));
            }
            catch (ex) {
                retorno = [];
            }
            return retorno;
        },
        set: function (contasPagarPagamento) {
            this.hdnFormaPagamento.value = JSON.stringify(contasPagarPagamento);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaPagarJS.prototype, "Codigos", {
        get: function () {
            var retorno;
            if (this.hdnCodigos.value == "")
                return [];
            try {
                retorno = JSON.parse(this.hdnCodigos.value.split("'").join('"'));
            }
            catch (ex) {
                retorno = [];
            }
            return retorno;
        },
        set: function (codigos) {
            this.hdnCodigos.value = JSON.stringify(codigos);
        },
        enumerable: true,
        configurable: true
    });
    MouraBaixaPagarJS.prototype.IniciarEventos = function () {
        this.BaixouConta = new MouraGenericEventHandler();
        if (this.btnAdicionar) {
            adicionarEventoMoura(this.btnAdicionar.Click, this.OnBtnAdicionarClick, this);
        }
        if (this.btnOK) {
            adicionarEventoMoura(this.btnOK.Click, this.OnClickOk, this);
        }
        if (this.btnCancelar) {
            adicionarEventoMoura(this.btnCancelar.Click, this.OnClickCancelar, this);
        }
        if (this.grd) {
            adicionarEventoMoura(this.grd.ExcluiuLinhaGrade, this.OnGridExcluiuItem, this);
        }
        if (this.txtContaContabil) {
            adicionarEventoMoura(this.txtContaContabil.Procurou, this.OnPesquisouContaContabil, this);
        }
        if (this.chkLancamentoIndividual) {
            adicionarEventoMoura(this.chkLancamentoIndividual.CheckChanged, this.MudouLancamentoIndividual, this);
        }
        if (this.optDadosConta) {
            adicionarEventoMoura(this.optDadosConta.SelectionChanged, this.MudouDadosConta, this);
        }
        if (this.dadosCheque) {
            adicionarEventoMoura(this.dadosCheque.InformouCheque, this.OnInformouCheque, this);
        }
        if (this.centrosCusto) {
            adicionarEventoMoura(this.centrosCusto.InformouCentroCusto, this.OnInformouCentroCusto, this);
        }
    };
    MouraBaixaPagarJS.prototype.OnBtnAdicionarClick = function (s, e) {
        try {
            e.processOnServer = false;
            if (this.validarPagamento()) {
                if (this.cboFormaPagamento.GetSelectedIndex() > 0) {
                    var parametros = {
                        formaPagamento: this.cboFormaPagamento.GetValue()
                    };
                    var doc = JSON.parse(DecodeTextoJSON(this.ExecutarHttpRequest("GetDocBancarioBaixaPagar", parametros)));
                    if (doc != null && doc.Pedir_Dados_Cheque) {
                        if (this.chkLancamentoIndividual.Checked) {
                            this.dadosCheque.Mostrar(0, ValoresSismoura.UsuarioLogado, ValoresSismoura.NomeTela);
                        }
                        else {
                            this.dadosCheque.Mostrar(CNum(this.txtValor.GetText()), ValoresSismoura.UsuarioLogado, ValoresSismoura.NomeTela);
                        }
                        return;
                    }
                }
                this.AdicionarPagamento(0, 0, "", 0);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraBaixaPagarJS.prototype.AdicionarPagamento = function (chequeCodigo, chequeAlterarSituacao, chequeContaCorrente, valorCheque) {
        if (this.validarPagamento()) {
            var pagamento;
            var lista;
            try {
                if (this.chkLancamentoIndividual.Checked) {
                    var fator = 0;
                    var valorDescConta = 0;
                    var valorJurosConta = 0;
                    var valorTotalBruto = 0;
                    var totalCalculado = 0;
                    var x = 0;
                    valorTotalBruto = this.lblTotalAPagar.Text.CNum() - this.hdnValorJuros.value.CNum() + this.hdnValorDesconto.value.CNum();
                    lista = [];
                    for (var x = 0; x < this.Codigos.length; x++) {
                        pagamento = {};
                        var parametros = {
                            codConta: this.Codigos[x]
                        };
                        var contaPagar = JSON.parse(DecodeTextoJSON(this.ExecutarHttpRequest("GetContasPagarBaixaPagar", parametros)));
                        fator = contaPagar.Valor / valorTotalBruto;
                        valorJurosConta = this.hdnValorJuros.value.CNum() * fator;
                        valorDescConta = this.hdnValorDesconto.value.CNum() * fator;
                        var parametros = {
                            codContabil: contaPagar.Conta_Contabil
                        };
                        if (this.optDadosConta.GetValue() == "1") {
                            pagamento.Conta_Contabil_Codigo = contaPagar.Conta_Contabil;
                            pagamento.Conta_Contabil_Descricao = JSON.parse(DecodeTextoJSON(this.ExecutarHttpRequest("GetContaContabilBaixaPagar", parametros))).Descricao;
                            pagamento.N_Doc_Bancario = contaPagar.N_Doc_Bancario;
                            pagamento.Conta_Corrente = contaPagar.Conta_Corrente;
                        }
                        else if (this.optDadosConta.GetValue() == "2") {
                            pagamento.Conta_Contabil_Codigo = contaPagar.Conta_Contabil;
                            pagamento.Conta_Contabil_Descricao = JSON.parse(DecodeTextoJSON(this.ExecutarHttpRequest("GetContaContabilBaixaPagar", parametros))).Descricao;
                            pagamento.N_Doc_Bancario = this.txtNumeroDocumento.GetText();
                            pagamento.Conta_Corrente = this.cboContaCorrente.GetContaCorrente();
                            pagamento.Conta_Pagar = contaPagar.Codigo;
                        }
                        else {
                            pagamento.Conta_Contabil_Codigo = this.txtContaContabil.GetText().CNum();
                            pagamento.Conta_Contabil_Descricao = this.txtContaContabil.GetResultado();
                            pagamento.N_Doc_Bancario = this.txtNumeroDocumento.GetText();
                            pagamento.Conta_Corrente = this.cboContaCorrente.GetContaCorrente();
                        }
                        pagamento.Contador = lista.length + 1;
                        pagamento.Data_Credito = this.txtDataCredito.Date;
                        pagamento.Doc_Bancario_Codigo = this.cboFormaPagamento.GetValue();
                        pagamento.Doc_Bancario_Descricao = this.cboFormaPagamento.GetText();
                        pagamento.Gerar = this.cboGerar.GetValue();
                        pagamento.Valor = (contaPagar.Valor + valorJurosConta - valorDescConta).Format(2).CNum();
                        if (chequeCodigo > 0) {
                            pagamento.Cheque_Codigo = chequeCodigo;
                            pagamento.Cheque_Alterar_Situacao = chequeAlterarSituacao;
                            pagamento.Cheque_Conta_Corrente = chequeContaCorrente;
                            pagamento.InformouCheque = true;
                        }
                        else {
                            pagamento.Cheque_Codigo = null;
                            pagamento.Cheque_Alterar_Situacao = 0;
                            pagamento.Cheque_Conta_Corrente = "";
                            pagamento.InformouCheque = false;
                        }
                        lista.push(pagamento);
                    }
                    totalCalculado = lista.Sum("Valor");
                    if (totalCalculado != this.lblTotalAPagar.Text.CNum()) {
                        if (lista.length > 0) {
                            lista[0].Valor -= totalCalculado - this.lblTotalAPagar.Text.CNum();
                        }
                    }
                    debugger;
                }
                else {
                    lista = this.FormasPagamento;
                    pagamento = {};
                    pagamento.Conta_Contabil_Codigo = this.txtContaContabil.GetText().CNum();
                    pagamento.Conta_Contabil_Descricao = this.txtContaContabil.GetResultado();
                    pagamento.Conta_Corrente = this.cboContaCorrente.GetContaCorrente();
                    pagamento.Contador = lista.length + 1;
                    pagamento.Data_Credito = this.txtDataCredito.Date;
                    pagamento.Doc_Bancario_Codigo = this.cboFormaPagamento.GetValue();
                    pagamento.Doc_Bancario_Descricao = this.cboFormaPagamento.GetText();
                    pagamento.Gerar = this.cboGerar.GetValue();
                    pagamento.Valor = this.txtValor.GetText().CNum();
                    pagamento.N_Doc_Bancario = this.txtNumeroDocumento.GetText();
                    pagamento.Conta_Pagar = 0;
                    if (chequeCodigo > 0) {
                        pagamento.Cheque_Codigo = chequeCodigo;
                        pagamento.Cheque_Alterar_Situacao = chequeAlterarSituacao;
                        pagamento.Cheque_Conta_Corrente = chequeContaCorrente;
                        pagamento.InformouCheque = true;
                        if (valorCheque > 0) {
                            pagamento.Valor = valorCheque;
                        }
                    }
                    else {
                        pagamento.Cheque_Codigo = null;
                        pagamento.Cheque_Alterar_Situacao = 0;
                        pagamento.Cheque_Conta_Corrente = "";
                        pagamento.InformouCheque = false;
                    }
                    lista.push(pagamento);
                }
                this.FormasPagamento = lista;
                this.PreencherGrade();
                this.LimparCampos();
            }
            catch (ex) {
                LogarException(ex);
            }
        }
    };
    MouraBaixaPagarJS.prototype.PreencherGrade = function () {
        this.grd.PreencherGrid(this.FormasPagamento);
    };
    MouraBaixaPagarJS.prototype.OnClickCancelar = function (s, e) {
        e.processOnServer = false;
        this.MudouLancamentoIndividual();
        this.BloquearDadosConta();
        this.LimparCampos();
        this.pnModal.Hide();
    };
    MouraBaixaPagarJS.prototype.OnClickOk = function (s, e) {
        e.processOnServer = false;
        if (this.hdnIsBaixaLote.value == "true") {
            this.BaixarContaLote();
        }
        else {
            this.BaixarContaIndividual();
        }
    };
    MouraBaixaPagarJS.prototype.OnGridExcluiuItem = function (s, ev) {
        this.FormasPagamento = this.grd.DataSource;
    };
    MouraBaixaPagarJS.prototype.OnPesquisouContaContabil = function () {
        var contaPagar;
        var parametros;
        debugger;
        try {
            if (!String.IsNullOrWhiteSpace(this.txtContaContabil.GetText())) {
                if (this.txtContaContabil.Parametros != undefined && this.txtContaContabil.Parametros.length > 0) {
                    for (var x = 0; this.txtContaContabil.Parametros.length - 1; x++) {
                        if (this.txtContaContabil.Parametros[x].Key == "contasPagar") {
                            contaPagar = this.txtContaContabil.Parametros[x].Value;
                        }
                    }
                }
                if (ValoresSismoura.ConfiguracoesRetaguarda.Procura_Fornecedor_Buscar_Empresa) {
                    parametros = {
                        codContaContabil: this.txtContaContabil.GetText().CNum(),
                        codUsuario: ValoresSismoura.UsuarioLogado
                    };
                    var permitidoUsuario = JSON.parse(DecodeTextoJSON(this.ExecutarHttpRequest("VerificaContaPermitidaUsuarioBaixaPagar", parametros)));
                    if (!permitidoUsuario) {
                        this.txtContaContabil.Limpar();
                        MostrarAlerta("A conta contábil não pertence as empresas vinculadas ao usuário!");
                        return;
                    }
                    var entidade = JSON.parse(DecodeTextoJSON(this.ExecutarHttpRequest("GetContaContabilAtivasBaixaPagar", parametros)));
                    if (entidade) {
                        if (entidade.Sintetico == "S") {
                            this.txtContaContabil.Limpar();
                            MostrarAlerta("Você não pode usar uma Conta Sintética!");
                            return;
                        }
                        if (contaPagar && !entidade.Pagar) {
                            MostrarAlerta("Esta conta não é uma Conta a Pagar!");
                            return;
                        }
                    }
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraBaixaPagarJS.prototype.MudouLancamentoIndividual = function () {
        if (this.chkLancamentoIndividual.Checked) {
            this.txtValor.Enabled = false;
            this.optDadosConta.Visible = true;
        }
        else {
            this.txtValor.Enabled = true;
            this.optDadosConta.Visible = false;
            this.optDadosConta.LimparSelecao();
        }
        this.BloquearDadosConta();
    };
    MouraBaixaPagarJS.prototype.BloquearDadosConta = function () {
        if (this.optDadosConta.GetValue() == "") {
            if (this.optDadosConta.GetValue() == "1") {
                this.txtNumeroDocumento.Enabled = false;
                this.cboContaCorrente.Enabled = false;
            }
            else {
                this.txtNumeroDocumento.Enabled = true;
                this.cboContaCorrente.Enabled = true;
            }
            this.txtContaContabil.Enabled = false;
        }
        else {
            this.txtNumeroDocumento.Enabled = true;
            this.txtContaContabil.Enabled = true;
            this.cboContaCorrente.Enabled = true;
        }
    };
    MouraBaixaPagarJS.prototype.MudouDadosConta = function () {
        this.BloquearDadosConta();
    };
    MouraBaixaPagarJS.prototype.LimparCampos = function () {
        var data = new Date();
        var valorRecebido = this.FormasPagamento.Sum("Valor");
        this.txtContaContabil.Limpar();
        this.txtNumeroDocumento.SetText("");
        this.txtDataCredito.Date = data;
        if (valorRecebido <= this.lblTotalAPagar.Text.CNum()) {
            this.txtValor.SetText("" + (this.lblTotalAPagar.Text.CNum() - valorRecebido).Format(2));
        }
        else {
            this.txtValor.SetText("0,00");
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.Bloquear_Gerar_Lancamento_Receber) {
            this.cboGerar.SetValue("N");
            this.cboGerar.SetEnabled(false);
        }
        else {
            this.cboGerar.SetValue("S");
            this.cboGerar.SetEnabled(true);
        }
        this.cboFormaPagamento.LimparSelecao();
        this.cboContaCorrente.Limpar();
        this.chkLancamentoIndividual.Checked = false;
        this.MudouLancamentoIndividual();
    };
    MouraBaixaPagarJS.prototype.validarPagamento = function () {
        if (this.cboFormaPagamento.GetSelectedIndex() < 0) {
            MostrarMensagemCampoObrigatorio("Forma de Pagamento");
            return false;
        }
        if (String.IsNullOrWhiteSpace(this.optDadosConta.GetValue())) {
            if (ValoresSismoura.ConfiguracoesRetaguarda.Talao_Cheque_Forma_Pagamento != null &&
                this.cboFormaPagamento.GetText() == ValoresSismoura.ConfiguracoesRetaguarda.Talao_Cheque_Forma_Pagamento &&
                this.txtNumeroDocumento.GetText().CNum() <= 0) {
                MostrarMensagemCampoObrigatorio("Nº do Documento");
            }
            if (this.txtContaContabil.GetText().CNum() <= 0) {
                MostrarMensagemCampoObrigatorio("Conta Contábil");
                return false;
            }
            if (this.cboContaCorrente.GetContaCorrente() == "" || this.cboContaCorrente.GetContaCorrente() == undefined) {
                MostrarMensagemCampoObrigatorio("Conta Corrente");
                return false;
            }
            if (this.cboGerar.GetText() == "" || this.cboGerar.GetText() == undefined) {
                MostrarMensagemCampoObrigatorio("Gerar Lançamento");
                return false;
            }
            if (this.txtDataCredito.Date == undefined) {
                MostrarMensagemCampoObrigatorio("Data de Crédito");
                return false;
            }
            if (CNum(this.txtValor.GetText()) <= 0) {
                MostrarMensagemCampoObrigatorio("Valor");
                return false;
            }
        }
        else if (this.optDadosConta.GetValue() == "2") {
            if (ValoresSismoura.ConfiguracoesRetaguarda.Talao_Cheque_Forma_Pagamento != null &&
                this.cboFormaPagamento.GetText() == ValoresSismoura.ConfiguracoesRetaguarda.Talao_Cheque_Forma_Pagamento &&
                this.txtNumeroDocumento.GetText().CNum() <= 0) {
                MostrarMensagemCampoObrigatorio("Nº do Documento");
                return false;
            }
            if (String.IsNullOrWhiteSpace(this.cboContaCorrente.GetContaCorrente())) {
                MostrarMensagemCampoObrigatorio("Conta Corrente");
                return false;
            }
        }
        if (String.IsNullOrWhiteSpace(this.optDadosConta.GetValue()) &&
            ValoresSismoura.ConfiguracoesRetaguarda.Talao_Cheque_Forma_Pagamento == this.cboFormaPagamento.GetValue()) {
            try {
                var parametros = {
                    numeroDocumento: this.txtNumeroDocumento.GetText().CNum(),
                    contaCorrente: this.cboContaCorrente.GetContaCorrente(),
                    formaPagamento: this.cboFormaPagamento.GetValue()
                };
                var retorno = JSON.parse(DecodeTextoJSON(this.ExecutarHttpRequest("VerificaChequeUtilizadoBaixaPagar", parametros)));
                if (retorno) {
                    MostrarAlerta("O cheque número " + this.txtNumeroDocumento.GetText().CNum() + "já foi utilizado na baixa de contas a pagar");
                    return false;
                }
                var existeChequeIntervalo = JSON.parse(DecodeTextoJSON(this.ExecutarHttpRequest("ExisteChequeIntervaloBaixaPagar", parametros)));
                if (!existeChequeIntervalo) {
                    MostrarAlerta("Número de cheque não cadastrado");
                    return false;
                }
                var talaoFolhaCancelada = JSON.parse(DecodeTextoJSON(this.ExecutarHttpRequest("VerificaTalaoFolhaCanceladaBaixaPagar", parametros)));
                if (talaoFolhaCancelada != null) {
                    MostrarAlerta("O Cheque informado está cancelado. Motivo: " + talaoFolhaCancelada.Motivo);
                    return false;
                }
            }
            catch (ex) {
                LogarException(ex);
                throw ex;
            }
        }
        return true;
    };
    MouraBaixaPagarJS.prototype.MostrarBaixa = function (Codigo, Tela, codUsuario, valorAPagar, contaContabilPadrao, contaCorrentePadrao, observacao, valorJuros, valorDesconto, dataBaixa, numeroDocBancario, vencimentoResiduo, valorCotacao, formaPgtoPadrao) {
        this.FormasPagamento = [];
        this.lblTotalAPagar.Text = valorAPagar.Format(2);
        this.MudouLancamentoIndividual();
        this.LimparCampos();
        if (contaContabilPadrao > 0) {
            this.txtContaContabil.Procurar(contaContabilPadrao.toString());
        }
        if (contaCorrentePadrao != null) {
            this.cboContaCorrente.SetContaCorrente(contaCorrentePadrao);
        }
        if (this.txtContaContabil.Parametros.length == 0) {
            this.txtContaContabil.AddParametro("Empresa", this.cboContaCorrente.GetEmpresa().toString());
        }
        if (formaPgtoPadrao > 0) {
            this.cboFormaPagamento.SetValue(formaPgtoPadrao);
        }
        this.txtNumeroDocumento.SetText(numeroDocBancario);
        this.hdnCodigo.value = "" + Codigo;
        this.hdnTela.value = "" + Tela;
        this.hdnCodUsuario.value = "" + codUsuario;
        this.hdnObservacao.value = !observacao ? "" : "" + observacao;
        this.hdnValorJuros.value = "" + valorJuros;
        this.hdnValorDesconto.value = "" + valorDesconto;
        this.hdnDataBaixa.value = "" + dataBaixa.toLocaleDateString("en-US");
        this.hdnNumeroDocBancario.value = "" + numeroDocBancario;
        this.hdnVencimentoResiduos.value = "" + vencimentoResiduo.toLocaleDateString("en-US");
        this.hdnValorCotacao.value = "" + valorCotacao;
        this.hdnIsBaixaLote.value = "" + false;
        this.chkLancamentoIndividual.Visible = false;
        this.PreencherGrade();
        this.pnModal.Show();
    };
    MouraBaixaPagarJS.prototype.Mostrar = function (Codigos, Tela, codUsuario, valorAPagar, contaContabilPadrao, contaCorrentePadrao, observacao, valorJuros, valorDesconto, dataBaixa, numeroDocBancario) {
        this.txtContaContabil.LimparParametros();
        this.FormasPagamento = [];
        this.lblTotalAPagar.Text = valorAPagar.Format(2);
        this.LimparCampos();
        this.MudouLancamentoIndividual();
        if (contaContabilPadrao > 0) {
            this.txtContaContabil.Procurar("" + contaContabilPadrao);
        }
        if (contaCorrentePadrao != null) {
            this.cboContaCorrente.SetContaCorrente(contaCorrentePadrao);
        }
        if (this.txtContaContabil.Parametros.length == 0) {
            this.txtContaContabil.AddParametro("Empresa", this.cboContaCorrente.GetEmpresa().toString());
        }
        this.Codigos = Codigos;
        this.hdnTela.value = "" + Tela;
        this.hdnCodUsuario.value = "" + codUsuario;
        this.hdnObservacao.value = !observacao ? "" : "" + observacao;
        this.hdnValorJuros.value = "" + valorJuros;
        this.hdnValorDesconto.value = "" + valorDesconto;
        this.hdnDataBaixa.value = "" + dataBaixa.toLocaleDateString("en-US");
        this.hdnNumeroDocBancario.value = "" + numeroDocBancario;
        this.hdnIsBaixaLote.value = "" + true;
        this.FormasPagamento = [];
        this.PreencherGrade();
        this.pnModal.Show();
    };
    MouraBaixaPagarJS.prototype.BaixarContaIndividual = function () {
        var _this = this;
        try {
            var parametros;
            var valorPago = this.FormasPagamento.Sum("Valor");
            var x;
            var contaPagarPagamento;
            var cheque;
            var listaCheques;
            var chequeSituacao;
            var listaPagamentos;
            listaPagamentos = [];
            listaCheques = [];
            if (CNum(valorPago.Format(ValoresSismoura.CasasDecimaisValor)) != this.lblTotalAPagar.Text.CNum()) {
                MostrarAlerta("O valor total das formas de pagamento deve ser igual ao valor a ser pago");
                return;
            }
            if (this.hdnValorDesconto.value.replace(".", ",").CNum() > this.lblTotalAPagar.Text.CNum()) {
                MostrarAlerta("O valor do desconto deve ser menor do que o valor a ser pago");
                return;
            }
            parametros = {
                codConta: this.hdnCodigo.value.CNum()
            };
            var contaPagar = JSON.parse(DecodeTextoJSON(this.ExecutarHttpRequest("GetContasPagarBaixaPagar", parametros)));
            if (contaPagar == null) {
                MostrarAlerta("Conta a Pagar não cadastrada!");
                return;
            }
            for (x = 0; x < this.FormasPagamento.length; x++) {
                contaPagarPagamento = {};
                contaPagarPagamento.Doc_Bancario = this.FormasPagamento[x].Doc_Bancario_Codigo;
                contaPagarPagamento.N_Doc_Bancario = this.FormasPagamento[x].N_Doc_Bancario;
                contaPagarPagamento.Valor = this.FormasPagamento[x].Valor;
                contaPagarPagamento.Conta_Corrente = this.FormasPagamento[x].Conta_Corrente;
                contaPagarPagamento.Gerar_Lancamento = this.FormasPagamento[x].Gerar;
                contaPagarPagamento.Data_Credito = this.FormasPagamento[x].Data_Credito;
                contaPagarPagamento.Conta_Contabil_Lancamento = this.FormasPagamento[x].Conta_Contabil_Codigo;
                contaPagarPagamento.Conta_Pagar = contaPagar.Codigo;
                if (CNum(this.FormasPagamento[x].Cheque_Codigo) > 0) {
                    cheque = {};
                    chequeSituacao = {};
                    parametros = {
                        codCheque: this.FormasPagamento[x].Cheque_Codigo
                    };
                    var retorno = JSON.parse(DecodeTextoJSON(this.ExecutarHttpRequest("GetChequeBaixaPagar", parametros)));
                    cheque = retorno;
                    if (cheque != null) {
                        cheque.Situacao_Atual = this.FormasPagamento[x].Cheque_Alterar_Situacao;
                        cheque.Data_Situacao_Atual = new Date();
                        cheque.Nao_Gerar_Lancamento = true;
                        if (cheque.ChequeSituacoes == null) {
                            cheque.ChequeSituacoes = [];
                        }
                        chequeSituacao.Cheque = cheque.Codigo;
                        chequeSituacao.Situacao = cheque.Situacao_Atual;
                        chequeSituacao.Data = new Date();
                        chequeSituacao.Motivo = ".";
                        cheque.ChequeSituacoes.push(chequeSituacao);
                        listaCheques.push(cheque);
                        contaPagarPagamento.Cheque = cheque.Codigo;
                    }
                }
                listaPagamentos.push(contaPagarPagamento);
            }
            parametros = {
                contaPagar: JSON.stringify(contaPagar),
                listaPagamentos: JSON.stringify(listaPagamentos),
                listaCheques: JSON.stringify(listaCheques),
                dataBaixa: this.hdnDataBaixa.value,
                observacao: this.hdnObservacao.value,
                tela: this.hdnTela.value,
                codUsuario: this.hdnCodUsuario.value,
                valorDesconto: this.hdnValorDesconto.value,
                valorJuros: this.hdnValorJuros.value,
                vencimentoResiduo: this.hdnVencimentoResiduos.value,
                valorCotacao: this.hdnValorCotacao.value
            };
            abrirEspera("");
            this.ExecutarHttpRequestAsyncPost("ContaIndividualBaixaPagar", parametros, function (d) {
                fecharEspera();
                var baixar = JSON.parse(DecodeTextoJSON(d));
                if (baixar.Erro) {
                    MostrarAlerta(baixar.MensagemAlerta);
                    return;
                }
                var valorPagar = contaPagar.Valor;
                var valorPago = listaPagamentos.Sum("Valor");
                if (_this.hdnValorCotacao.value.CNum() > 0) {
                    valorPagar *= _this.hdnValorCotacao.value.CNum();
                }
                valorPagar += _this.hdnValorJuros.value.CNum();
                _this.pnModal.Hide();
                if (ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_Centro_Custo && (valorPago < valorPagar)) {
                    _this.centrosCusto.Mostrar(contaPagar.Codigo, CNum(_this.lblTotalAPagar.Text), ValoresSismoura.NomeTela, ValoresSismoura.UsuarioLogado);
                }
                else {
                    _this.Terminou(contaPagar.Codigo);
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
    MouraBaixaPagarJS.prototype.BaixarContaLote = function () {
        var _this = this;
        try {
            var valorPago = this.FormasPagamento.Sum("Valor");
            var x = 0;
            var parametros;
            var listaContasPagar;
            var listaCheques;
            var listaPagamentos;
            var contaPagarPagamento;
            var chequeSituacao;
            listaCheques = [];
            listaPagamentos = [];
            listaContasPagar = [];
            if (CNum(valorPago.Format(ValoresSismoura.CasasDecimaisValor)) != this.lblTotalAPagar.Text.CNum()) {
                MostrarAlerta("O valor total das formas de pagamento deve ser igual ao valor a ser pago");
                return;
            }
            if (this.hdnValorDesconto.value.replace(".", ",").CNum() > this.lblTotalAPagar.Text.CNum()) {
                MostrarAlerta("O valor do desconto deve ser menor do que o valor a ser pago");
                return;
            }
            for (x = 0; x < this.Codigos.length; x++) {
                parametros = {
                    codConta: this.Codigos[x]
                };
                var contaPagar = JSON.parse(DecodeTextoJSON(this.ExecutarHttpRequest("GetContasPagarBaixaPagar", parametros)));
                if (contaPagar == null) {
                    MostrarAlerta("Conta a pagar não cadastrada");
                    return;
                }
                var stop_1 = false;
                for (var i = 0; i < this.FormasPagamento.length && !stop_1; i++) {
                    if (this.FormasPagamento[i].Conta_Pagar == this.Codigos[x]) {
                        contaPagar.N_Doc_Bancario = this.FormasPagamento[i].N_Doc_Bancario;
                        stop_1 = true;
                    }
                }
                listaContasPagar.push(contaPagar);
            }
            for (var i = 0; i < this.FormasPagamento.length; i++) {
                contaPagarPagamento = {};
                contaPagarPagamento.Doc_Bancario = this.FormasPagamento[i].Doc_Bancario_Codigo;
                contaPagarPagamento.N_Doc_Bancario = this.FormasPagamento[i].N_Doc_Bancario;
                contaPagarPagamento.Valor = this.FormasPagamento[i].Valor;
                contaPagarPagamento.Conta_Pagar = this.FormasPagamento[i].Conta_Pagar;
                if (CNum(this.FormasPagamento[i].Cheque_Codigo) > 0) {
                    chequeSituacao = {};
                    parametros = {
                        codCheque: this.FormasPagamento[i].Cheque_Codigo
                    };
                    var cheque = JSON.parse(DecodeTextoJSON(this.ExecutarHttpRequest("GetChequeBaixaPagar", parametros)));
                    cheque.Situacao_Atual = this.FormasPagamento[i].Cheque_Alterar_Situacao;
                    cheque.Data_Situacao_Atual = new Date();
                    if (cheque.ChequeSituacoes == null) {
                        cheque.ChequeSituacoes = [];
                    }
                    cheque.Nao_Gerar_Lancamento = true;
                    chequeSituacao.Cheque = cheque.Codigo;
                    chequeSituacao.Situacao = cheque.Situacao_Atual;
                    chequeSituacao.Data = new Date();
                    chequeSituacao.Motivo = ".";
                    cheque.ChequeSituacoes.push(chequeSituacao);
                    listaCheques.push(cheque);
                    contaPagarPagamento.Cheque = cheque.Codigo;
                }
                contaPagarPagamento.Conta_Corrente = this.FormasPagamento[i].Conta_Corrente;
                contaPagarPagamento.Gerar_Lancamento = this.FormasPagamento[i].Gerar;
                contaPagarPagamento.Data_Credito = this.FormasPagamento[i].Data_Credito;
                contaPagarPagamento.Conta_Contabil_Lancamento = this.FormasPagamento[i].Conta_Contabil_Codigo;
                listaPagamentos.push(contaPagarPagamento);
            }
            try {
                parametros = {
                    listaContasPagar: JSON.stringify(listaContasPagar),
                    listaPagamentos: JSON.stringify(listaPagamentos),
                    listaCheques: JSON.stringify(listaCheques),
                    dataBaixa: this.hdnDataBaixa.value,
                    observacao: this.hdnObservacao.value,
                    tela: this.hdnTela.value,
                    codUsuario: this.hdnCodUsuario.value,
                    totalPagar: this.lblTotalAPagar.Text,
                    valorDesconto: this.hdnValorDesconto.value,
                    valorJuros: this.hdnValorJuros.value
                };
                abrirEspera("");
                this.ExecutarHttpRequestAsyncPost("ContaLoteBaixaPagar", parametros, function (d) {
                    fecharEspera();
                    var baixar = JSON.parse(DecodeTextoJSON(d));
                    if (baixar.Erro) {
                        MostrarAlerta(baixar.MensagemAlerta);
                        return;
                    }
                    _this.pnModal.Hide();
                    _this.TerminouBaixaLote();
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
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    MouraBaixaPagarJS.prototype.TerminouBaixaLote = function () {
        var _this = this;
        try {
            var parametros;
            parametros = {
                codigos: JSON.stringify(this.Codigos),
                formasPagamento: JSON.stringify(this.FormasPagamento),
                dataBaixa: this.hdnDataBaixa.value,
                codUsuario: this.hdnCodUsuario.value,
                nomeTela: this.hdnTela.value,
                valorPagar: this.lblTotalAPagar.Text,
                valorJuros: this.hdnValorJuros.value,
                valorDesconto: this.hdnValorDesconto.value
            };
            abrirEspera("");
            this.ExecutarHttpRequestAsync("TerminouLoteBaixarPagar", parametros, function (d) {
                fecharEspera();
                var resultadoBaixa = JSON.parse(DecodeTextoJSON(d));
                if (resultadoBaixa.MensagemAlerta != null) {
                    MostrarAlerta(resultadoBaixa.MensagemAlerta);
                    return;
                }
                if (resultadoBaixa.MensagemRetorno != null) {
                    MostrarMensagem(resultadoBaixa.MensagemRetorno);
                }
                _this.BaixouConta.FireEvent(_this, new MouraEventArgs());
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
    MouraBaixaPagarJS.prototype.Terminou = function (codConta) {
        var _this = this;
        try {
            var parametros;
            parametros = {
                codConta: codConta,
                formasPagamento: JSON.stringify(this.FormasPagamento),
                nomeTela: this.hdnTela.value,
                codUsuario: this.hdnCodUsuario.value.CNum()
            };
            abrirEspera("");
            this.ExecutarHttpRequestAsync("TerminouBaixarPagar", parametros, function (d) {
                fecharEspera();
                var resultadoBaixa = JSON.parse(DecodeTextoJSON(d));
                if (resultadoBaixa.MensagemAlerta != null) {
                    MostrarAlerta(resultadoBaixa.MensagemAlerta);
                    return;
                }
                if (resultadoBaixa.MensagemRetorno != null) {
                    MostrarMensagem(resultadoBaixa.MensagemRetorno);
                }
                _this.BaixouConta.FireEvent(_this, new MouraEventArgs());
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
    MouraBaixaPagarJS.prototype.OnInformouCheque = function (s, e) {
        this.AdicionarPagamento(e.CodigoCheque, e.NovaSituacao, e.ContaCorrente, e.ValorCheque);
    };
    MouraBaixaPagarJS.prototype.OnInformouCentroCusto = function (s, e) {
        this.Terminou(CNum(this.hdnCodigo.value));
    };
    return MouraBaixaPagarJS;
}(MouraControl));
//# sourceMappingURL=MouraBaixaPagarJS.js.map