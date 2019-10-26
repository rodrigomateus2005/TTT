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
var DadosChequeEventArgs = /** @class */ (function (_super) {
    __extends(DadosChequeEventArgs, _super);
    function DadosChequeEventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DadosChequeEventArgs;
}(MouraEventArgs));
var MouraDadosChequeJS = /** @class */ (function (_super) {
    __extends(MouraDadosChequeJS, _super);
    function MouraDadosChequeJS(id) {
        var _this = _super.call(this, id) || this;
        _this.InformouCheque = new MouraGenericEventHandler();
        return _this;
    }
    Object.defineProperty(MouraDadosChequeJS.prototype, "pnModal", {
        get: function () {
            return window[this.ID + '_pnModal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraDadosChequeJS.prototype, "btnCancelar", {
        get: function () {
            return window[this.ID + '_btnCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraDadosChequeJS.prototype, "btnOk", {
        get: function () {
            return window[this.ID + '_btnOK_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraDadosChequeJS.prototype, "txtChequeCodigo", {
        get: function () {
            return window[this.ID + '_txtChequeCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraDadosChequeJS.prototype, "txtChequeVencimento", {
        get: function () {
            return window[this.ID + '_txtChequeVencimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraDadosChequeJS.prototype, "txtChequeValor", {
        get: function () {
            return window[this.ID + '_txtChequeValor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraDadosChequeJS.prototype, "txtChequeBanco", {
        get: function () {
            return window[this.ID + '_txtChequeBanco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraDadosChequeJS.prototype, "txtChequeAgencia", {
        get: function () {
            return window[this.ID + '_txtChequeAgencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraDadosChequeJS.prototype, "txtChequeConta", {
        get: function () {
            return window[this.ID + '_txtChequeConta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraDadosChequeJS.prototype, "txtChequeNumero", {
        get: function () {
            return window[this.ID + '_txtChequeNumero_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraDadosChequeJS.prototype, "txtChequeClienteCodigo", {
        get: function () {
            return window[this.ID + '_txtChequeClienteCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraDadosChequeJS.prototype, "txtChequeClienteNome", {
        get: function () {
            return window[this.ID + '_txtChequeClienteNome_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraDadosChequeJS.prototype, "cboChequeClienteTipo", {
        get: function () {
            return window[this.ID + '_cboChequeClienteTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraDadosChequeJS.prototype, "txtChequeClienteCPF", {
        get: function () {
            return window[this.ID + '_txtChequeClienteCPF_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraDadosChequeJS.prototype, "txtChequeClienteFone", {
        get: function () {
            return window[this.ID + '_txtChequeClienteFone_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraDadosChequeJS.prototype, "txtChequeClienteEndereco", {
        get: function () {
            return window[this.ID + '_txtChequeClienteEndereco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraDadosChequeJS.prototype, "cboChequeContaCorrente", {
        get: function () {
            return window[this.ID + '_cboChequeContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraDadosChequeJS.prototype, "txtChequeObservacao", {
        get: function () {
            return window[this.ID + '_txtChequeObservacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraDadosChequeJS.prototype, "cboChequeAlterarSituacao", {
        get: function () {
            return window[this.ID + '_cboChequeAlterarSituacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraDadosChequeJS.prototype, "lblSituacaoAtual", {
        get: function () {
            return window[this.ID + '_lblSituacaoAtual_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraDadosChequeJS.prototype, "hdnCodUsuario", {
        get: function () {
            return $("#" + this.ID + "_hdnCodUsuario")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraDadosChequeJS.prototype, "hdnTela", {
        get: function () {
            return $("#" + this.ID + "_hdnTela")[0];
        },
        enumerable: true,
        configurable: true
    });
    MouraDadosChequeJS.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.cboChequeClienteTipo && this.cboChequeClienteTipo.Combo) {
            adicionarEventoDevExpress(this.cboChequeClienteTipo.Combo.SelectedIndexChanged, this.AlterarTipoCliente, this);
        }
        if (this.txtChequeClienteCodigo) {
            adicionarEventoMoura(this.txtChequeClienteCodigo.Procurou, this.OnProcurouCliente, this);
        }
        if (this.txtChequeCodigo) {
            adicionarEventoMoura(this.txtChequeCodigo.Procurou, this.OnProcurouCheque, this);
            adicionarEventoDevExpress(this.txtChequeCodigo.BotaoNovo.Click, this.OnClickBotaoNovo, this);
        }
        if (this.btnCancelar) {
            adicionarEventoMoura(this.btnCancelar.Click, this.OnClickCancelar, this);
        }
        if (this.btnOk) {
            adicionarEventoMoura(this.btnOk.Click, this.OnClickOk, this);
        }
    };
    MouraDadosChequeJS.prototype.AlterarTipoCliente = function () {
        if (this.cboChequeClienteTipo.GetValue() == "J") {
            this.txtChequeClienteCPF.IsCPF = false;
        }
        else {
            this.txtChequeClienteCPF.IsCPF = true;
        }
    };
    MouraDadosChequeJS.prototype.LimparCampos = function () {
        this.txtChequeCodigo.SetText("");
        this.cboChequeClienteTipo.SetValue("F");
        this.AlterarTipoCliente();
        this.txtChequeAgencia.SetText("");
        this.txtChequeBanco.SetText("");
        this.txtChequeClienteCodigo.Limpar();
        this.txtChequeClienteCPF.SetText("");
        this.txtChequeClienteEndereco.SetText("");
        this.txtChequeClienteFone.SetText("");
        this.txtChequeClienteNome.SetText("");
        this.txtChequeConta.SetText("");
        this.txtChequeNumero.SetText("");
        this.txtChequeObservacao.SetText("");
        this.txtChequeValor.SetText("0");
        this.txtChequeVencimento.Date = new Date();
        this.lblSituacaoAtual.Text = "";
        this.cboChequeContaCorrente.Limpar();
        this.cboChequeAlterarSituacao.LimparSelecao();
    };
    MouraDadosChequeJS.prototype.OnClickCancelar = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
        this.pnModal.Hide();
    };
    MouraDadosChequeJS.prototype.Mostrar = function (valorCheque, codUsuario, tela) {
        this.LimparCampos();
        if (valorCheque > 0) {
            this.txtChequeValor.SetText(valorCheque.Format(2));
        }
        this.hdnCodUsuario.value = "" + codUsuario;
        this.hdnTela.value = "" + tela;
        this.pnModal.Show();
    };
    MouraDadosChequeJS.prototype.ValidarCheque = function () {
        var mensagem = "Preencha o campo corretamente: ";
        var retorno = true;
        if (!ConvertToDate(this.txtChequeVencimento.Date)) {
            mensagem += "Bom Para";
            retorno = false;
        }
        else if (CNum(this.txtChequeValor.GetText()) <= 0) {
            mensagem += "Valor";
            retorno = false;
        }
        else if (String.IsNullOrWhiteSpace(this.cboChequeContaCorrente.GetContaCorrente())) {
            mensagem += "Conta Corrente";
            retorno = false;
        }
        else if (CNum(this.cboChequeAlterarSituacao.GetValue()) <= 0) {
            mensagem += "Alterar Situação do Cheque";
            retorno = false;
        }
        if (!retorno) {
            MostrarAlerta(mensagem);
        }
        return retorno;
    };
    MouraDadosChequeJS.prototype.OnProcurouCliente = function (s, e) {
        if (CNum(this.txtChequeClienteCodigo.GetText()) > 0) {
            var cliente = this.GetDadosCliente(CNum(this.txtChequeClienteCodigo.GetText()));
            if (cliente) {
                this.txtChequeClienteEndereco.SetText(cliente.Endereco);
                this.txtChequeClienteFone.SetText(cliente.Fone);
                this.txtChequeClienteNome.SetText(cliente.Nome);
                if (String.IsNullOrWhiteSpace(cliente.Tipo)) {
                    cliente.Tipo = "F";
                }
                this.cboChequeClienteTipo.SetValue(cliente.Tipo);
                this.AlterarTipoCliente();
                this.txtChequeClienteCPF.SetText(cliente.Cpf);
            }
        }
    };
    MouraDadosChequeJS.prototype.GetDadosCliente = function (codCliente) {
        var parametros;
        try {
            parametros = {
                codCliente: codCliente
            };
            var dados = JSON.parse(DecodeTextoJSON(this.ExecutarHttpRequest("GetDadosCliente", parametros)));
            return dados;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraDadosChequeJS.prototype.OnClickBotaoNovo = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
    };
    MouraDadosChequeJS.prototype.OnProcurouCheque = function (s, e) {
        if (CNum(this.txtChequeCodigo.GetText()) <= 0) {
            this.LimparCampos();
            return;
        }
        var cheque = this.GetDadosCheque(CNum(this.txtChequeCodigo.GetText()));
        if (cheque) {
            this.txtChequeVencimento.Date = ConvertToDate(cheque.Vencimento);
            this.txtChequeAgencia.SetText(cheque.Agencia);
            this.txtChequeBanco.SetText(cheque.Banco.toString());
            this.txtChequeConta.SetText(cheque.Conta);
            this.txtChequeNumero.SetText(cheque.Cheque.toString());
            this.txtChequeObservacao.SetText(cheque.Observacao);
            this.txtChequeClienteCodigo.Procurar(cheque.Cliente.toString());
            this.OnProcurouCliente(this, new MouraTextBoxProcuraRetornoProcura());
            this.txtChequeValor.SetText(cheque.Valor_Cheque.Format(2));
            this.cboChequeClienteTipo.SetValue(cheque.Pessoa);
            this.AlterarTipoCliente();
            this.txtChequeClienteCPF.SetText(cheque.Cpf);
            this.txtChequeClienteEndereco.SetText(cheque.Endereco_Cliente);
            this.txtChequeClienteFone.SetText(cheque.Fone_Cliente);
            this.txtChequeClienteNome.SetText(cheque.Nome_Cliente);
            if (!String.IsNullOrWhiteSpace(cheque.Situacao_Cc)) {
                this.cboChequeContaCorrente.SetContaCorrente(cheque.Situacao_Cc);
            }
            var situacaoAtual = this.GetDadosSituacaoAtual(cheque.Situacao_Atual);
            if (situacaoAtual) {
                this.lblSituacaoAtual.Text = situacaoAtual.Descricao;
                if (situacaoAtual.Baixado) {
                    this.LimparCampos();
                    MostrarAlerta("Este cheque já foi baixado no sistema!");
                    return;
                }
            }
            else {
                this.lblSituacaoAtual.Text = "";
            }
        }
    };
    MouraDadosChequeJS.prototype.GetDadosCheque = function (codCheque) {
        var parametros;
        try {
            parametros = {
                codCheque: codCheque
            };
            var dados = JSON.parse(DecodeTextoJSON(this.ExecutarHttpRequest("GetDadosCheque", parametros)));
            return dados;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraDadosChequeJS.prototype.GetDadosSituacaoAtual = function (situacaoAtual) {
        var parametros;
        try {
            parametros = {
                situacaoAtual: situacaoAtual
            };
            var dados = JSON.parse(DecodeTextoJSON(this.ExecutarHttpRequest("GetDadosSituacaoAtual", parametros)));
            return dados;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraDadosChequeJS.prototype.OnClickOk = function (s, e) {
        e.processOnServer = false;
        var codChequeGerado;
        if (this.ValidarCheque()) {
            if (CNum(this.txtChequeCodigo.GetText()) <= 0) {
                codChequeGerado = this.GravarCheque();
            }
            else {
                codChequeGerado = CNum(this.txtChequeCodigo.GetText());
            }
            var dados = new DadosChequeEventArgs();
            dados.CodigoCheque = codChequeGerado;
            dados.ContaCorrente = this.cboChequeContaCorrente.GetContaCorrente();
            dados.NovaSituacao = CNum(this.cboChequeAlterarSituacao.GetValue());
            dados.ValorCheque = CNum(this.txtChequeValor.GetText());
            this.pnModal.Hide();
            this.InformouCheque.FireEvent(this, dados);
        }
    };
    MouraDadosChequeJS.prototype.GravarCheque = function () {
        var cheque = {};
        cheque.Agencia = this.txtChequeAgencia.GetText();
        cheque.Banco = CNum(this.txtChequeBanco.GetText());
        cheque.Cheque = CNum(this.txtChequeNumero.GetText());
        cheque.Cliente = CNum(this.txtChequeClienteCodigo.GetText());
        cheque.CodEmpresa = this.cboChequeContaCorrente.GetEmpresa();
        cheque.Conta = this.txtChequeConta.GetText();
        cheque.Cpf = this.txtChequeClienteCPF.GetText();
        cheque.Data_Cadastro = new Date();
        cheque.Data_Situacao_Atual = new Date();
        cheque.Endereco_Cliente = this.txtChequeClienteEndereco.GetText();
        cheque.Fone_Cliente = this.txtChequeClienteFone.GetText();
        cheque.Nao_Gerar_Lancamento = true;
        cheque.Nome_Cliente = this.txtChequeClienteNome.GetText();
        cheque.Observacao = this.txtChequeObservacao.GetText();
        cheque.Pessoa = this.cboChequeClienteTipo.GetValue();
        cheque.Situacao_Atual = CNum(this.cboChequeAlterarSituacao.GetValue());
        cheque.Valor_Cheque = CNum(this.txtChequeValor.GetText());
        cheque.Situacao_Cc = this.cboChequeContaCorrente.GetContaCorrente();
        cheque.Enviado = "";
        cheque.Dias = 0;
        cheque.Tipo_Cheque = "E";
        cheque.Codigo = CNum(this.txtChequeCodigo.GetText());
        cheque.Vencimento = this.txtChequeVencimento.Date;
        return this.Grava(cheque);
    };
    MouraDadosChequeJS.prototype.Grava = function (cheque) {
        var parametros;
        try {
            parametros = {
                cheque: JSON.stringify(cheque),
                tela: this.hdnTela.value,
                codUsuario: CNum(this.hdnCodUsuario.value)
            };
            var dados = JSON.parse(DecodeTextoJSON(this.ExecutarHttpRequest("GravarCheque", parametros)));
            return dados;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return MouraDadosChequeJS;
}(MouraControl));
//# sourceMappingURL=MouraDadosChequeJS.js.map