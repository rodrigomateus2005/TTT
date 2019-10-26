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
var MouraBaixaReceberJS = /** @class */ (function (_super) {
    __extends(MouraBaixaReceberJS, _super);
    function MouraBaixaReceberJS(id) {
        var _this = _super.call(this, id) || this;
        if (!_this.BaixouConta)
            _this.BaixouConta = new MouraEventHandler();
        return _this;
    }
    Object.defineProperty(MouraBaixaReceberJS.prototype, "BaixouConta", {
        get: function () {
            return window[this.ID + "_BaixouConta"];
        },
        set: function (value) {
            window[this.ID + "_BaixouConta"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "dadosCheque", {
        get: function () {
            return window[this.ID + '_dadosCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "pnModal", {
        get: function () {
            return window[this.ID + "_pnModal_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "lblTotalAReceber", {
        get: function () {
            return window[this.ID + "_lblTotalAReceber_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "cboFormaPagamento", {
        get: function () {
            return window[this.ID + "_cboFormaPagamento_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "txtNumeroDocumento", {
        get: function () {
            return window[this.ID + "_txtNumeroDocumento_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "txtContaContabil", {
        get: function () {
            return window[this.ID + "_txtContaContabil_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "cboContaCorrente", {
        get: function () {
            return window[this.ID + "_cboContaCorrente_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "cboGerar", {
        get: function () {
            return window[this.ID + "_cboGerar_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "cboCartao", {
        get: function () {
            return window[this.ID + "_cboCartao_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "txtDataCredito", {
        get: function () {
            return window[this.ID + "_txtDataCredito_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "txtValor", {
        get: function () {
            return window[this.ID + "_txtValor_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "btnOK", {
        get: function () {
            return window[this.ID + "_btnOK_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "btnCancelar", {
        get: function () {
            return window[this.ID + "_btnCancelar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "btnAdicionar", {
        get: function () {
            return window[this.ID + '_btnAdicionar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "grd", {
        get: function () {
            return window[this.ID + "_grd_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "hdnFormaPagamento", {
        get: function () {
            return $("#" + this.ID + "_hdnFormaPagamento")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "hdnValorJuros", {
        get: function () {
            return $("#" + this.ID + "_hdnValorJuros")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "hdnMulta", {
        get: function () {
            return $("#" + this.ID + "_hdnMulta")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "hdnValorDesconto", {
        get: function () {
            return $("#" + this.ID + "_hdnValorDesconto")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "hdnCodigos", {
        get: function () {
            return $("#" + this.ID + "_hdnCodigos")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "hdnCodigo", {
        get: function () {
            return $("#" + this.ID + "_hdnCodigo")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "hdnCodUsuario", {
        get: function () {
            return $("#" + this.ID + "_hdnCodUsuario")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "hdnTela", {
        get: function () {
            return $("#" + this.ID + "_hdnTela")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "hdnObservacao", {
        get: function () {
            return $("#" + this.ID + "_hdnObservacao")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "hdnDataBaixa", {
        get: function () {
            return $("#" + this.ID + "_hdnDataBaixa")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "hdnCodEmpresa", {
        get: function () {
            return $("#" + this.ID + "_hdnCodEmpresa")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "hdnVencimentoResiduos", {
        get: function () {
            return $("#" + this.ID + "_hdnVencimentoResiduos")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "hdnIsBaixaLote", {
        get: function () {
            return $("#" + this.ID + "_hdnIsBaixaLote")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "hdnCreditoUtilizado", {
        get: function () {
            return $("#" + this.ID + "_hdnCreditoUtilizado")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "hdnTipoDesconto", {
        get: function () {
            return $("#" + this.ID + "_hdnTipoDesconto")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraBaixaReceberJS.prototype, "FormasPagamento", {
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
    Object.defineProperty(MouraBaixaReceberJS.prototype, "Codigos", {
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
    MouraBaixaReceberJS.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.btnOK) {
            adicionarEventoMoura(this.btnOK.Click, this.OnClickOk, this);
        }
        if (this.btnCancelar) {
            adicionarEventoMoura(this.btnCancelar.Click, this.OnCancelarClick, this);
        }
        if (this.btnAdicionar) {
            adicionarEventoMoura(this.btnAdicionar.Click, this.OnAdicionarClick, this);
        }
        if (this.grd && this.grd) {
            adicionarEventoMoura(this.grd.ExcluiuLinhaGrade, this.OnExcluiuItem, this);
        }
        if (this.txtContaContabil) {
            adicionarEventoMoura(this.txtContaContabil.Procurou, this.OnProcurouContaContabil, this);
        }
        if (this.dadosCheque) {
            adicionarEventoMoura(this.dadosCheque.InformouCheque, this.OnInformouCheque, this);
        }
    };
    MouraBaixaReceberJS.prototype.OnCancelarClick = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
        this.pnModal.Hide();
    };
    MouraBaixaReceberJS.prototype.LimparCampos = function () {
        var data = new Date();
        var valorRecebido = this.FormasPagamento.Sum("Valor");
        this.txtContaContabil.Limpar();
        this.txtNumeroDocumento.SetText("");
        this.txtDataCredito.Date = data;
        if (valorRecebido <= CNum(this.lblTotalAReceber.Text)) {
            this.txtValor.SetText("" + (this.lblTotalAReceber.Text.CNum() - valorRecebido).Format(ValoresSismoura.CasasDecimaisValor));
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
        this.cboCartao.LimparSelecao();
    };
    MouraBaixaReceberJS.prototype.OnClickOk = function (s, e) {
        if (this.hdnIsBaixaLote.value == "true") {
            this.BaixarContaEmLote();
        }
        else {
            this.BaixarContaIndividual();
        }
    };
    /**
     * Se o desconto está em porcentagem ou no valor real. (P ou R)
     * @param tipoDesconto
     */
    MouraBaixaReceberJS.prototype.MostrarEmLote = function (codigos, tela, codUsuario, valorAReceber, contaContabilPadrao, contaCorrentePadrao, observacao, valorJuros, valorDesconto, dataBaixa, formaPagamentoPadrao, tipoDesconto, multa) {
        this.txtContaContabil.LimparParametros();
        this.hdnIsBaixaLote.value = "" + true;
        this.FormasPagamento = [];
        this.lblTotalAReceber.Text = valorAReceber.Format(2);
        this.LimparCampos();
        if (contaContabilPadrao > 0) {
            this.txtContaContabil.Procurar(contaContabilPadrao.toString());
        }
        if (!String.IsNullOrWhiteSpace(contaCorrentePadrao)) {
            this.cboContaCorrente.SetContaCorrente(contaCorrentePadrao);
        }
        this.txtContaContabil.AddParametro("Empresa", this.cboContaCorrente.GetContaCorrente());
        this.txtContaContabil.AddParametro("Sintetico", "N");
        this.Codigos = codigos;
        this.hdnTela.value = tela;
        this.hdnCodUsuario.value = "" + codUsuario;
        this.hdnObservacao.value = observacao;
        this.hdnValorJuros.value = "" + valorJuros;
        this.hdnMulta.value = "" + multa;
        this.hdnValorDesconto.value = "" + valorDesconto;
        this.hdnDataBaixa.value = "" + dataBaixa.toLocaleDateString("en-US");
        this.hdnTipoDesconto.value = tipoDesconto;
        if (formaPagamentoPadrao > 0) {
            this.cboFormaPagamento.SetValue(formaPagamentoPadrao);
        }
        else if (this.cboFormaPagamento.GetItemCount() > 0) {
            this.cboFormaPagamento.SetSelectedIndex(0);
        }
        this.PreencherGrade();
        this.pnModal.Show();
    };
    MouraBaixaReceberJS.prototype.Mostrar = function (codContaReceber, Tela, codUsuario, valorAPagar, contaContabilPadrao, contaCorrentePadrao, observacao, valorJuros, valorDesconto, dataBaixa, codEmpresa, valorCreditoUtilizado, numDocBancario, dataEmissaoResiduo, dataVencResiduo, formaPagamentoPadrao, multa) {
        this.FormasPagamento = [];
        this.txtContaContabil.LimparParametros();
        this.hdnIsBaixaLote.value = "" + false;
        this.lblTotalAReceber.Text = valorAPagar.Format(ValoresSismoura.CasasDecimaisValor);
        this.LimparCampos();
        if (contaCorrentePadrao != null) {
            this.cboContaCorrente.SetContaCorrente(contaCorrentePadrao);
        }
        if (contaContabilPadrao > 0) {
            this.txtContaContabil.Procurar("" + contaContabilPadrao);
        }
        if (this.txtContaContabil.Parametros.length == 0) {
            this.txtContaContabil.LimparParametros();
            this.txtContaContabil.AddParametro("Empresa", this.cboContaCorrente.GetEmpresa().toString());
            this.txtContaContabil.AddParametro("Sintetico", "N");
        }
        this.hdnCodigo.value = "" + codContaReceber;
        this.hdnTela.value = "" + Tela;
        this.hdnCodUsuario.value = "" + codUsuario;
        this.hdnObservacao.value = "" + observacao;
        this.hdnValorJuros.value = "" + valorJuros;
        this.hdnValorDesconto.value = "" + valorDesconto;
        this.hdnDataBaixa.value = "" + dataBaixa.toLocaleDateString("en-US");
        this.hdnCodEmpresa.value = "" + codEmpresa;
        this.hdnCreditoUtilizado.value = "" + valorCreditoUtilizado;
        this.hdnMulta.value = "" + multa;
        if (!dataEmissaoResiduo) {
            dataEmissaoResiduo = new Date();
        }
        if (formaPagamentoPadrao > 0) {
            this.cboFormaPagamento.SetValue(formaPagamentoPadrao);
        }
        else {
            this.cboFormaPagamento.SetSelectedIndex(0);
        }
        if (!String.IsNullOrWhiteSpace(numDocBancario)) {
            this.txtNumeroDocumento.SetText(numDocBancario);
        }
        //Quando o valor do crédito utilizado é maior ou igual ao valor a pago não é exibida a tela para informar as formas de pagamento.
        if (valorCreditoUtilizado == CNum(this.lblTotalAReceber.Text)) {
            this.BaixarContaIndividual();
            return;
        }
        this.PreencherGrade();
        this.pnModal.Show();
    };
    MouraBaixaReceberJS.prototype.PreencherGrade = function () {
        this.grd.PreencherGrid(this.FormasPagamento);
    };
    MouraBaixaReceberJS.prototype.BaixarContaEmLote = function () {
        var _this = this;
        var parametros;
        var dataBaixa = this.hdnDataBaixa.value;
        try {
            parametros = {
                codigos: JSON.stringify(this.Codigos),
                observacao: this.hdnObservacao.value,
                dataBaixa: dataBaixa,
                FormasPagamento: JSON.stringify(this.FormasPagamento),
                totalReceber: this.lblTotalAReceber.Text,
                codUsuario: CNum(this.hdnCodUsuario.value),
                tela: this.hdnTela.value,
                valorDesconto: this.hdnValorDesconto.value,
                valorJuros: this.hdnValorJuros.value,
                multa: this.hdnMulta.value
            };
            abrirEspera("");
            this.ExecutarHttpRequestAsync("BaixarContasEmLote", parametros, function (d) {
                fecharEspera();
                var retorno = JSON.parse(DecodeTextoJSON(d));
                if (retorno) {
                    MostrarAlerta(retorno);
                    return;
                }
                _this.TerminouEmLote();
                _this.pnModal.Hide();
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
    MouraBaixaReceberJS.prototype.BaixarContaIndividual = function () {
        var _this = this;
        var parametros;
        var dataVencimentoResiduo;
        var dataVencimentoVazia = "N";
        dataVencimentoResiduo = this.hdnVencimentoResiduos.value;
        if (!dataVencimentoResiduo) {
            dataVencimentoResiduo = new Date().FormataData();
            dataVencimentoVazia = "S";
        }
        debugger;
        try {
            parametros = {
                codigo: CNum(this.hdnCodigo.value),
                observacao: this.hdnObservacao.value,
                dataBaixa: this.hdnDataBaixa.value,
                dataVencResiduo: dataVencimentoResiduo,
                dataVencimentoVazia: dataVencimentoVazia,
                formasPagamento: JSON.stringify(this.FormasPagamento),
                totalReceber: this.lblTotalAReceber.Text,
                codUsuario: CNum(this.hdnCodUsuario.value),
                tela: this.hdnTela.value,
                contaCorrente: this.cboContaCorrente.GetContaCorrente(),
                creditoUtilizado: this.hdnCreditoUtilizado.value,
                valorDesconto: this.hdnValorDesconto.value,
                valorJuros: this.hdnValorJuros.value,
                multa: this.hdnMulta.value
            };
            abrirEspera("");
            this.ExecutarHttpRequestAsync("BaixarContaIndividual", parametros, function (d) {
                fecharEspera();
                var retorno = JSON.parse(DecodeTextoJSON(d));
                if (retorno) {
                    MostrarAlerta(retorno);
                    return;
                }
                _this.TerminouContaIndividual();
                _this.pnModal.Hide();
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
    MouraBaixaReceberJS.prototype.OnExcluiuItem = function (s, e) {
        this.FormasPagamento = this.grd.DataSource;
    };
    MouraBaixaReceberJS.prototype.OnAdicionarClick = function (s, e) {
        e.processOnServer = false;
        var pedirBandeira = false;
        if (this.ValidarPagamento(pedirBandeira)) {
            if (CNum(this.cboFormaPagamento.GetValue()) > 0) {
                var doc;
                doc = this.GetDocumentoBancario(CNum(this.cboFormaPagamento.GetValue()));
                if (doc) {
                    if (doc.Pedir_Dados_Cheque) {
                        this.dadosCheque.Mostrar(CNum(this.txtValor.GetText()), CNum(this.hdnCodUsuario.value), this.hdnTela.value);
                        return;
                    }
                    else if (doc.Pedir_Bandeira_Cartao) {
                        pedirBandeira = true;
                    }
                }
            }
            this.AdicionarPagamento(0, 0, "", 0, pedirBandeira);
        }
    };
    MouraBaixaReceberJS.prototype.GetDocumentoBancario = function (formaPagamento) {
        var parametros;
        try {
            parametros = {
                formaPagamento: formaPagamento
            };
            var dados = JSON.parse(DecodeTextoJSON(this.ExecutarHttpRequest("GetDocBancarioBaixaPagar", parametros)));
            return dados;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraBaixaReceberJS.prototype.AdicionarPagamento = function (chequeCodigo, chequeAlterarSituacao, chequeContaCorrente, valorCheque, pedirBandeira) {
        var pagamento = {};
        var lista;
        if (this.ValidarPagamento(pedirBandeira)) {
            if (this.cboContaCorrente.GetEmpresa() != 0) {
                if (!this.VerificarContabil()) {
                    this.txtContaContabil.Limpar();
                    MostrarAlerta("A Conta Contábil deve ser da mesma empresa da conta corrente!");
                    return;
                }
                pagamento.Conta_Contabil_Codigo = CNum(this.txtContaContabil.GetText());
                pagamento.Conta_Contabil_Descricao = this.txtContaContabil.GetResultado();
                pagamento.Conta_Corrente = this.cboContaCorrente.GetContaCorrente();
                pagamento.Contador = this.FormasPagamento.length + 1;
                pagamento.Data_Credito = this.txtDataCredito.Date;
                pagamento.Doc_Bancario_Codigo = CNum(this.cboFormaPagamento.GetValue());
                pagamento.Doc_Bancario_Descricao = this.cboFormaPagamento.GetText();
                pagamento.Gerar = this.cboGerar.GetValue();
                pagamento.Valor = CNum(this.txtValor.GetText());
                pagamento.N_Doc_Bancario = this.txtNumeroDocumento.GetText();
                if (pedirBandeira) {
                    pagamento.Cartao_Codigo = this.cboCartao.GetValue();
                }
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
                lista = this.FormasPagamento;
                lista.push(pagamento);
                this.FormasPagamento = lista;
                this.PreencherGrade();
                this.LimparCampos();
            }
        }
    };
    MouraBaixaReceberJS.prototype.OnInformouCheque = function (sender, e) {
        this.AdicionarPagamento(e.CodigoCheque, e.NovaSituacao, e.ContaCorrente, e.ValorCheque, false);
    };
    MouraBaixaReceberJS.prototype.VerificarContabil = function () {
        var parametros;
        try {
            parametros = {
                contaContabil: CNum(this.txtContaContabil.GetText()),
                empresa: this.cboContaCorrente.GetEmpresa()
            };
            var contabilEmpresa = JSON.parse(DecodeTextoJSON(this.ExecutarHttpRequest("VerificarContabil", parametros)));
            return contabilEmpresa;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraBaixaReceberJS.prototype.ValidarPagamento = function (pedirBandeira) {
        var retorno = true;
        var mensagem = "Preencha o campo corretamente: ";
        if (CNum(this.cboFormaPagamento.GetValue()) <= 0) {
            mensagem += "Forma Pagamento";
            retorno = false;
        }
        else if (CNum(this.txtContaContabil.GetText()) <= 0) {
            mensagem += "Conta Contábil";
            retorno = false;
        }
        else if (String.IsNullOrWhiteSpace(this.cboContaCorrente.GetContaCorrente())) {
            mensagem += "Conta Corrente";
            retorno = false;
        }
        else if (String.IsNullOrWhiteSpace(this.cboGerar.GetValue())) {
            mensagem += "Gerar Lançamento";
            retorno = false;
        }
        else if (!this.txtDataCredito.Date) {
            mensagem += "Data de Crédito";
            retorno = false;
        }
        else if (CNum(this.txtValor.GetText()) <= 0) {
            mensagem += "Valor";
            retorno = false;
        }
        else if (pedirBandeira && CNum(this.cboCartao.GetValue()) <= 0) {
            mensagem += "Cartão";
            retorno = false;
        }
        if (!retorno) {
            MostrarAlerta(mensagem);
        }
        return retorno;
    };
    MouraBaixaReceberJS.prototype.OnProcurouContaContabil = function (s, e) {
        if (CNum(this.txtContaContabil.GetText()) > 0) {
            if (ValoresSismoura.ConfiguracoesRetaguarda.Procura_Fornecedor_Buscar_Empresa) {
                if (this.IsContaPermitidaUsuario(CNum(this.txtContaContabil.GetText()), CNum(this.hdnCodUsuario.value))) {
                    this.txtContaContabil.Limpar();
                    MostrarAlerta("A conta contábil não pertence as empresas vinculadas ao usuário!");
                    return;
                }
            }
            debugger;
            if (this.IsSintetica(CNum(this.txtContaContabil.GetText()))) {
                this.txtContaContabil.Limpar();
                MostrarAlerta("Você não pode usar uma Conta Sintética!");
                return;
            }
            if (!this.VerificarContabil()) {
                this.txtContaContabil.Limpar();
                MostrarAlerta("A Conta Contábil deve ser da mesma empresa da conta corrente!");
                return;
            }
        }
    };
    MouraBaixaReceberJS.prototype.IsSintetica = function (contaContabil) {
        var parametros;
        try {
            parametros = {
                contaContabil: contaContabil
            };
            var sintetico = JSON.parse(DecodeTextoJSON(this.ExecutarHttpRequest("IsSintetica", parametros)));
            return sintetico;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraBaixaReceberJS.prototype.IsContaPermitidaUsuario = function (contaContabil, codUsuario) {
        var parametros;
        try {
            parametros = {
                contaContabil: contaContabil,
                codUsuario: codUsuario
            };
            var permitida = JSON.parse(DecodeTextoJSON(this.ExecutarHttpRequest("IsContaPermitidaUsuario", parametros)));
            return permitida;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraBaixaReceberJS.prototype.TerminouContaIndividual = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                codigo: CNum(this.hdnCodigo.value),
                formasPagamento: JSON.stringify(this.FormasPagamento),
                codUsario: CNum(this.hdnCodUsuario.value),
                tela: this.hdnTela.value
            };
            abrirEspera("");
            this.ExecutarHttpRequestAsync("TerminouBaixaReceberContaIndividual", parametros, function (d) {
                fecharEspera();
                var retorno = JSON.parse(DecodeTextoJSON((d)));
                if (retorno.Alerta) {
                    MostrarAlerta(retorno.Mensagem);
                }
                else {
                    MostrarMensagem(retorno.Mensagem);
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
    MouraBaixaReceberJS.prototype.TerminouEmLote = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                listaCodigo: JSON.stringify(this.Codigos),
                formasPagamento: JSON.stringify(this.FormasPagamento),
                tipoDesconto: this.hdnTipoDesconto.value,
                txtDesconto: this.hdnValorDesconto.value,
                dataDaBaixa: this.hdnDataBaixa.value,
                txtJuros: this.hdnValorJuros.value,
                codUsuario: this.hdnCodUsuario.value,
                tela: this.hdnTela.value,
                txtMulta: this.hdnMulta.value
            };
            abrirEspera("");
            this.ExecutarHttpRequestAsync("TerminouBaixaReceberLote", parametros, function (d) {
                fecharEspera();
                var retorno = JSON.parse(DecodeTextoJSON((d)));
                if (retorno.Alerta) {
                    MostrarAlerta(retorno.Mensagem);
                }
                else {
                    MostrarMensagem(retorno.Mensagem);
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
    return MouraBaixaReceberJS;
}(MouraControl));
//# sourceMappingURL=MouraBaixaReceberJS.js.map