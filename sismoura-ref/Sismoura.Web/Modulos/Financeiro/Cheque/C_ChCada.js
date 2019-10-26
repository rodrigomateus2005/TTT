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
var C_ChCada = /** @class */ (function (_super) {
    __extends(C_ChCada, _super);
    function C_ChCada() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ChCada.prototype, "cboSituacaoFiltro", {
        get: function () {
            return window['cboSituacaoFiltro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ChCada.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ChCada.prototype, "cboSituacao", {
        get: function () {
            return window['cboSituacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ChCada.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ChCada.prototype, "GridConsulta", {
        get: function () {
            return window['GridConsulta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ChCada.prototype, "GridHistorico", {
        get: function () {
            return window['GridHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ChCada.prototype, "txtBanco", {
        get: function () {
            return window['txtBanco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ChCada.prototype, "txtNomeTitular", {
        get: function () {
            return window['txtNomeTitular_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ChCada.prototype, "btnConsultar", {
        get: function () {
            return window['btnConsultar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ChCada.prototype, "btnGerarHistorico", {
        get: function () {
            return window['btnGerarHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ChCada.prototype, "btnOkBaixaCheque", {
        get: function () {
            return window['btnOkBaixaCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ChCada.prototype, "btnFecharConsulta", {
        get: function () {
            return window['btnFecharConsulta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ChCada.prototype, "mdConsulta", {
        get: function () {
            return window['mdConsulta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ChCada.prototype, "mdBaixaCheque", {
        get: function () {
            return window['mdBaixaCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ChCada.prototype, "txtAgencia", {
        get: function () {
            return window['txtAgencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ChCada.prototype, "txtConta", {
        get: function () {
            return window['txtConta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ChCada.prototype, "txtCPF", {
        get: function () {
            return window['txtCPF_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ChCada.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ChCada.prototype, "txtEnviado", {
        get: function () {
            return window['txtEnviado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ChCada.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ChCada.prototype, "cboTipo", {
        get: function () {
            return window['cboTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ChCada.prototype, "txtVenda", {
        get: function () {
            return window['txtVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ChCada.prototype, "Filtro", {
        get: function () {
            return this.GetScope()["Filtro"];
        },
        set: function (value) {
            this.GetScope()["Filtro"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ChCada.prototype, "txtTipoLancamentoBaixa_hdnEmpresaContabil", {
        get: function () {
            return $("#txtTipoLancamentoBaixa_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ChCada.prototype, "txtTipoLancamentoBaixa", {
        get: function () {
            return window['txtTipoLancamentoBaixa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ChCada.prototype, "txtTipoLancamento_hdnEmpresaContabil", {
        get: function () {
            return $("#txtTipoLancamento_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ChCada.prototype, "txtTipoLancamento", {
        get: function () {
            return window['txtTipoLancamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ChCada.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnConsultar) {
            adicionarEventoMoura(this.btnConsultar.Click, this.OnClickConsultar, this);
        }
        if (this.btnGerarHistorico) {
            adicionarEventoMoura(this.btnGerarHistorico.Click, this.OnClickGerarHistorico, this);
        }
        if (this.btnOkBaixaCheque) {
            adicionarEventoMoura(this.btnOkBaixaCheque.Click, this.OnClickBaixaCheque, this);
        }
        if (this.txtTipoLancamentoBaixa) {
            adicionarEventoMoura(this.txtTipoLancamentoBaixa.Procurou, this.ProcurouLancamentoBaixa, this);
        }
        if (this.txtTipoLancamento) {
            adicionarEventoMoura(this.txtTipoLancamento.Procurou, this.OnPesquisouLancamento, this);
        }
        if (this.txtEnviado) {
            adicionarEventoMoura(this.txtEnviado.Procurou, this.OnPesquisouEnviado, this);
        }
        if (this.txtCliente) {
            adicionarEventoMoura(this.txtCliente.Procurou, this.OnPesquisouCliente, this);
        }
        if (this.btnFecharConsulta) {
            adicionarEventoMoura(this.btnFecharConsulta.Click, this.OnClickFecharConsulta, this);
        }
    };
    C_ChCada.prototype.PreencherEmpresaContabil = function (codEmpresa) {
        if (this.txtTipoLancamento_hdnEmpresaContabil != undefined) {
            this.txtTipoLancamento_hdnEmpresaContabil.value = codEmpresa;
        }
        if (this.txtTipoLancamentoBaixa_hdnEmpresaContabil != undefined) {
            this.txtTipoLancamentoBaixa_hdnEmpresaContabil.value = codEmpresa;
        }
    };
    C_ChCada.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        if (ValoresSismoura.ConfiguracoesRetaguarda.Cheque_Obriga_nome) {
            this.txtNomeTitular.Obrigatorio = true;
        }
        else {
            this.txtNomeTitular.Obrigatorio = false;
        }
        if (!ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_Modulo_Contabil) {
            this.txtTipoLancamentoBaixa.Visible = false;
            this.txtTipoLancamento.Visible = false;
        }
        if (!this.GetScope().MudouFiltro) {
            this.GetScope().MudouFiltro = $.proxy(this.MudouFiltro, this);
            this.GetScope().$watch(function (scope) { return _this.Filtro; }, this.GetScope().MudouFiltro);
        }
        if (!this.GetScope().MudouSituacao) {
            this.GetScope().MudouSituacao = $.proxy(this.MudouSituacao, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Situacao_Atual; }, this.GetScope().MudouSituacao);
        }
        if (!this.GetScope().MudouContaCorrente) {
            this.GetScope().MudouContaCorrente = $.proxy(this.MudouContaCorrente, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Situacao_Cc; }, this.GetScope().MudouContaCorrente);
        }
        if (!this.GetScope().MudouVenda) {
            this.GetScope().MudouVenda = $.proxy(this.MudouVenda, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Venda; }, this.GetScope().MudouVenda);
        }
        if (!this.GetScope().MudouTipo) {
            this.GetScope().MudouTipo = $.proxy(this.MudouTipo, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Pessoa; }, this.GetScope().MudouTipo);
        }
        if (!this.GetScope().OnProcurarClienteCPF) {
            this.GetScope().OnProcurarClienteCPF = $.proxy(this.OnProcurarClienteCPF, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Cpf; }, this.GetScope().OnProcurarClienteCPF);
        }
        this.OnDepoisLimpar(this.GetScope().Entity);
        this.PreencherEmpresaContabil(ValoresSismoura.EmpresaPadraoUsuario);
    };
    C_ChCada.prototype.OnProcurarClienteCPF = function () {
        var parametros;
        if (!String.IsNullOrWhiteSpace(this.EntityTela.Cpf) && this.EntityTela.Cpf != "___.___.___-__") {
            parametros = {
                numeroCPF: this.EntityTela.Cpf
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("OnProcurarClienteCPF", parametros);
            if (retorno.Pessoa) {
                this.txtCliente.Procurar(retorno.Pessoa);
            }
        }
    };
    C_ChCada.prototype.MudouTipo = function (newValue, oldValue) {
        if (newValue == "F") {
            this.txtCPF.IsCPF = true;
            this.MudarLabelComponente(this.txtCPF, "CPF");
        }
        else {
            this.txtCPF.IsCPF = false;
            this.MudarLabelComponente(this.txtCPF, "CNPJ");
        }
        this.RefreshAngular();
    };
    C_ChCada.prototype.MudarLabelComponente = function (componente, novoTexto) {
        if (!componente) {
            return;
        }
        if (componente.Obrigatorio || componente.ObrigatorioUsuario) {
            novoTexto = "* " + novoTexto;
        }
        componente.SetTextLabelControl(novoTexto);
    };
    C_ChCada.prototype.OnPesquisouCliente = function () {
        var parametros;
        parametros = {
            codCliente: this.EntityTela.Cliente
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("OnPesquisouCliente", parametros);
        if (retorno) {
            this.EntityTela.Pessoa = retorno.Tipo;
            this.MudouTipo(this.EntityTela.Pessoa, this.EntityTela.Pessoa);
            this.EntityTela.Nome_Cliente = retorno.Nome;
            this.EntityTela.Fone_Cliente = retorno.Fone;
            this.EntityTela.Endereco_Cliente = retorno.Endereco;
            this.EntityTela.Cpf = retorno.CPF;
        }
        this.RefreshAngular();
    };
    C_ChCada.prototype.OnPesquisouEnviado = function () {
        var parametros;
        parametros = {
            codEnviado: this.EntityTela.Cod_Enviado
        };
        if (this.EntityTela.Cod_Enviado == null) {
            this.EntityTela.Enviado = "";
            return;
        }
        var retorno = this.ExecutarFuncaoServerSideSynch("OnPesquisouEnviado", parametros);
        this.EntityTela.Enviado = "";
        if (retorno.NomeEnviado) {
            this.EntityTela.Enviado = retorno.NomeEnviado;
        }
    };
    C_ChCada.prototype.OnPesquisouLancamento = function () {
        var parametros;
        var empresa;
        if (this.EntityTela.Configuracao_Lancamento) {
            if (this.cboContaCorrente.GetEmpresa() > 0) {
                empresa = this.cboContaCorrente.GetEmpresa();
            }
            else {
                empresa = ValoresSismoura.EmpresaPadraoUsuario;
            }
            parametros = {
                codTipoLancamento: this.EntityTela.Configuracao_Lancamento,
                codEmpresa: empresa
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("OnDepoisLancamentoPesquisou", parametros);
            if (!retorno) {
                MostrarAlerta("Registro não encontrado ou Inativo");
                this.txtTipoLancamento.Limpar();
            }
        }
    };
    C_ChCada.prototype.ProcurouLancamentoBaixa = function () {
        var parametros;
        var empresa;
        if (this.cboContaCorrente.GetEmpresa() > 0) {
            empresa = this.cboContaCorrente.GetEmpresa();
        }
        else {
            empresa = ValoresSismoura.EmpresaPadraoUsuario;
        }
        parametros = {
            codTipoLancamentoBaixa: this.txtTipoLancamentoBaixa.GetText().CNum(),
            codEmpresa: empresa
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("OnDepoisLancamentoBaixaPesquisou", parametros);
        if (!retorno) {
            MostrarAlerta("Registro não encontrado ou Inativo");
            this.txtTipoLancamentoBaixa.Limpar();
        }
    };
    C_ChCada.prototype.OnClickFecharConsulta = function (s, e) {
        e.processOnServer = false;
        this.mdConsulta.Hide();
    };
    C_ChCada.prototype.OnClickBaixaCheque = function (s, e) {
        e.processOnServer = false;
        if (this.txtTipoLancamentoBaixa.GetText().CNum() == 0) {
            MostrarAlerta("Informe o tipo de lançamento contábil para o depósito do cheque.");
            return;
        }
        var parametros;
        parametros = {
            codTipoLancamentoBaixa: this.txtTipoLancamentoBaixa.GetText().CNum(),
            dataSituacao: ConvertToDate(this.EntityTela.Data_Situacao_Atual),
            valor: this.EntityTela.Valor_Cheque,
            codigo: this.EntityTela.Codigo,
            nomeTela: ValoresSismoura.NomeTela,
            codUsuario: ValoresSismoura.UsuarioLogado
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("VerificarBaixaCheque", parametros);
        if (retorno.ConfiguracaoContabil) {
            if (retorno.ContaCredito) {
                MostrarAlerta("A configuração contábil informada não possui Conta Crédito em seu cadastro.");
                return;
            }
            if (retorno.ContaDebito) {
                MostrarAlerta("A configuração contábil informada não possui Conta Débito em seu cadastro.");
                return;
            }
            if (retorno.HistoricoPadrao) {
                MostrarAlerta("A configuração contábil informada não possui Histórico Padrão em seu cadastro.");
                return;
            }
            if (retorno.Empresa) {
                MostrarAlerta("A configuração contábil informada não possui Empresa em seu cadastro.");
                return;
            }
        }
        else {
            this.txtTipoLancamentoBaixa.Limpar();
            this.mdBaixaCheque.Hide();
            MostrarMensagem("Lançamento contábil gerado com sucesso");
        }
    };
    C_ChCada.prototype.OnClickGerarHistorico = function (s, e) {
        e.processOnServer = false;
        if (this.EntityTela.Codigo <= 0) {
            MostrarAlerta("Preencha o campo corretamente: Código");
            this.txtCodigo.Focus();
            return;
        }
        this.PreencherGridHistorico();
    };
    C_ChCada.prototype.OnClickConsultar = function (s, e) {
        e.processOnServer = false;
        if (this.EntityTela.Banco <= 0) {
            MostrarAlerta("Preencha o campo corretamente: Banco");
            this.txtBanco.Focus();
            return;
        }
        if (String.IsNullOrWhiteSpace(this.EntityTela.Agencia)) {
            MostrarAlerta("Preencha o campo corretamente: Agência");
            this.txtAgencia.Focus();
            return;
        }
        if (String.IsNullOrWhiteSpace(this.EntityTela.Conta)) {
            MostrarAlerta("Preencha o campo corretamente: Conta");
            this.txtConta.Focus();
            return;
        }
        this.mdConsulta.Show();
        this.PreencherGridConsulta();
    };
    C_ChCada.prototype.MudouVenda = function () {
        var parametros;
        parametros = {
            codVenda: this.EntityTela.Venda
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("ValidarVenda", parametros);
        if (!retorno && this.EntityTela.Venda != 0) {
            MostrarAlerta("Venda não encontrada");
            //this.EntityTela.Venda = 0;
            this.txtVenda.Limpar();
            this.txtVenda.Focus();
            return;
        }
    };
    C_ChCada.prototype.MudouContaCorrente = function () {
        this.txtTipoLancamento.Limpar();
        this.txtTipoLancamento.LimparParametros();
        this.txtTipoLancamento.AddParametro("TipoConfiguracaoContabil", "CCH");
        this.txtTipoLancamento.AddParametro("codEmpresa", "" + this.cboContaCorrente.GetEmpresa());
        this.PreencherEmpresaContabil(this.cboContaCorrente.GetEmpresa());
    };
    C_ChCada.prototype.MudouSituacao = function () {
        this.txtTipoLancamento.Limpar();
    };
    C_ChCada.prototype.MudouFiltro = function () {
        this.GetCadastrados();
    };
    C_ChCada.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.EntityTela.Data_Cadastro = this.DataServidor();
        var parametros;
        if (this.EntityTela.Cliente == null) {
            this.EntityTela.Cliente = 0;
        }
        if (this.EntityTela.Codigo == null) {
            this.EntityTela.Codigo = 0;
        }
        parametros = {
            codigo: this.EntityTela.Codigo,
            codCliente: this.EntityTela.Cliente,
            banco: this.EntityTela.Banco,
            agencia: this.EntityTela.Agencia,
            conta: this.EntityTela.Conta,
            codCheque: this.EntityTela.Cheque
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("VerificarCadastro", parametros);
        if (retorno.codigoFuncaoAdm) {
            //CarregarFuncaoAdministrativa("Retorno", retorno.codigoFuncaoAdm);
            //this.dlgFuncaoAdm.Verificar()
        }
        else {
            if (retorno.msg) {
                var par = {
                    codigo: retorno.msg
                };
                MsgBoxJS("Já existe um cheque cadastrado com estas informações. Deseja visualizar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRespondeuMensagemExistente, this), par);
                return false;
            }
        }
        return true;
    };
    C_ChCada.prototype.OnRespondeuMensagemExistente = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            result.Argument.codigo;
            try {
                this.txtCodigo.Procurar(result.Argument.codigo);
            }
            catch (ex) {
                LogarException(ex);
            }
        }
    };
    C_ChCada.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        var parametros;
        if (ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_Modulo_Contabil) {
            parametros = {
                situacaoAtual: this.EntityTela.Situacao_Atual
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificarCadastro2", parametros);
        }
        if (retorno) {
            this.txtTipoLancamentoBaixa.LimparParametros();
            this.txtTipoLancamentoBaixa.AddParametro("TipoConfiguracaoContabil", "DC"); //tipo_configuracao
            this.txtTipoLancamentoBaixa.AddParametro("codEmpresa", this.cboContaCorrente.GetEmpresa().toString());
            //this.txtTipoLancamentoBaixa.Parametros = this.txtTipoLancamentoBaixa.Parametros;
            this.mdBaixaCheque.Show();
        }
        return true;
    };
    C_ChCada.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Codigo = 0;
        Entity.Venda = 0;
        Entity.Cpf = "";
        Entity.Banco = 0;
        Entity.Agencia = "";
        Entity.Conta = "";
        Entity.Cheque = 0;
        Entity.Valor_Cheque = 0;
        Entity.Vencimento = this.DataServidor();
        Entity.Data_Situacao_Atual = this.DataServidor();
        Entity.Pessoa = "J";
        Entity.Situacao_Cc = "";
        this.Filtro = -1;
        //this.cboSituacaoFiltro.SetSelectedIndex(-1);
        //this.cboContaCorrente.SetSelectedIndex(-1);
        //this.cboSituacao.SetSelectedIndex(-1);
        Entity.Observacao = "";
        Entity.Vendedor = 0;
        Entity.Cod_Enviado = 0;
        Entity.Cliente = 0;
        Entity.Nome_Cliente = "";
        Entity.Fone_Cliente = "";
        Entity.Endereco_Cliente = "";
        Entity.Configuracao_Lancamento = 0;
        this.txtTipoLancamentoBaixa.Limpar();
        Entity.Nao_Gerar_Lancamento = false;
        this.Grid.PreencherGrid(null);
        this.GridHistorico.PreencherGrid(null);
        if (this.cboContaCorrente && this.cboContaCorrente.CheckBox) {
            try {
                this.cboContaCorrente.CheckBox.Checked = true;
                this.cboContaCorrente.OnCheckInativos();
                //this.cboContaCorrente.CheckBox.OnCheckChanged();
            }
            catch (e) {
            }
        }
        this.MudouContaCorrente();
        this.RefreshAngular();
    };
    C_ChCada.prototype.PreencherGridHistorico = function () {
        try {
            var parametros;
            parametros = {
                codCheque: this.EntityTela.Codigo
            };
            var cad = this.ExecutarFuncaoServerSideSynch("PreencherHistorico", parametros);
            this.GridHistorico.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ChCada.prototype.PreencherGridConsulta = function () {
        try {
            var parametros;
            parametros = {
                codBanco: this.EntityTela.Banco,
                agencia: this.EntityTela.Agencia,
                conta: this.EntityTela.Conta
            };
            var cad = this.ExecutarFuncaoServerSideSynch("ConsultarCheque", parametros);
            this.GridConsulta.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ChCada.prototype.GetCadastrados = function () {
        try {
            var parametros;
            parametros = {
                codSituacao: this.cboSituacaoFiltro.GetValue()
            };
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ChCada.prototype.OnDepoisBuscarExistente = function (Entity) {
        setTimeout($.proxy(function () { this.cboContaCorrente.AtualizarLabels(); }, this), 100);
        this.MudouContaCorrente();
        this.GridHistorico.PreencherGrid(null);
    };
    return C_ChCada;
}(MouraPageCadastroAngular));
var c_ChCada = new C_ChCada();
//# sourceMappingURL=C_ChCada.js.map