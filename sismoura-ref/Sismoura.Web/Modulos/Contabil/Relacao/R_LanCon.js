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
var R_LanCon = /** @class */ (function (_super) {
    __extends(R_LanCon, _super);
    function R_LanCon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.LANCAMENTO = "lancamento";
        return _this;
    }
    Object.defineProperty(R_LanCon.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "txtContaCredito_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContaContabil_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "txtContaDedito_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContaContabilSobra_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "hdnLancamento", {
        get: function () {
            return $("#hdnLancamento")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "txtContaCredito", {
        get: function () {
            return window['txtContaCredito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "txtContaDebito", {
        get: function () {
            return window['txtContaDebito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "txtConta", {
        get: function () {
            return window['txtConta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "btnLancamento", {
        get: function () {
            return window['btnLancamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "btnOk", {
        get: function () {
            return window['btnOk_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "btnPesquisaAvancada", {
        get: function () {
            return window['btnPesquisaAvancada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "btnFechar", {
        get: function () {
            return window['btnFechar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "Grid_DC", {
        get: function () {
            return window['Grid_DC_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "txtLancamentoInicial", {
        get: function () {
            return window['txtLancamentoInicial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "txtLancamentoFinal", {
        get: function () {
            return window['txtLancamentoFinal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "txtDocumento", {
        get: function () {
            return window['txtDocumento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "txtValor", {
        get: function () {
            return window['txtValor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "txtHistorico", {
        get: function () {
            return window['txtHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "txtPessoa", {
        get: function () {
            return window['txtPessoa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "lblTotalCredito", {
        get: function () {
            return window['lblTotalCredito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "lblTotalDebito", {
        get: function () {
            return window['lblTotalDebito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "lblTotalCreditoDC", {
        get: function () {
            return window['lblTotalCreditoDC_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "lblTotalDebitoDC", {
        get: function () {
            return window['lblTotalDebitoDC_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "mdPesquisaAvancada", {
        get: function () {
            return window['mdPesquisaAvancada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "btnManutencaoEmLote", {
        // Atividade 1061268
        get: function () {
            return window['btnManutencaoEmLote_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "mdlManutencaoEmLote", {
        get: function () {
            return window['mdlManutencaoEmLote_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "GridManutencaoLote", {
        get: function () {
            return window['GridManutencaoLote_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "btnCancelar", {
        get: function () {
            return window['btnCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "cboCampo", {
        get: function () {
            return window['cboCampo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "txtExibicao", {
        get: function () {
            return window['txtExibicao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "txtCampoData", {
        get: function () {
            return window['txtCampoData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "txtCampoDocumento", {
        get: function () {
            return window['txtCampoDocumento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "txtCampoDebito", {
        get: function () {
            return window['txtCampoDebito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "txtCampoCredito", {
        get: function () {
            return window['txtCampoCredito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "txtCampoValor", {
        get: function () {
            return window['txtCampoValor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "txtCampoHistorico", {
        get: function () {
            return window['txtCampoHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "txtCampoDescricaoHistorico", {
        get: function () {
            return window['txtCampoDescricaoHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "btnMarcarTodos", {
        get: function () {
            return window['btnMarcarTodos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "btnDesmarcarTodos", {
        get: function () {
            return window['btnDesmarcarTodos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "btnAlterar", {
        get: function () {
            return window['btnAlterar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "btnExcluir", {
        get: function () {
            return window['btnExcluir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "RelacaoLancamentosManutencaoLote", {
        get: function () {
            return this.GridManutencaoLote.DataSource;
        },
        set: function (value) {
            this.GridManutencaoLote.PreencherGrid(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LanCon.prototype, "RelacaoLancamentos", {
        //-----
        get: function () {
            return this.Grid.DataSource;
        },
        set: function (value) {
            this.Grid.PreencherGrid(value);
        },
        enumerable: true,
        configurable: true
    });
    R_LanCon.prototype.Init = function () {
        _super.prototype.Init.call(this);
        var parametros = {};
        // Atividade 1061268
        if (this.btnManutencaoEmLote) {
            adicionarEventoMoura(this.btnManutencaoEmLote.Click, this.OncClickBotaoManutencaoEmLote, this);
        }
        if (this.btnCancelar) {
            adicionarEventoMoura(this.btnCancelar.Click, this.OnClickBotaoCancelar, this);
        }
        if (this.btnAlterar) {
            adicionarEventoMoura(this.btnAlterar.Click, this.OnAlterarLancamentosManutencaoLote, this);
        }
        if (this.btnExcluir) {
            adicionarEventoMoura(this.btnExcluir.Click, this.OnExcluirLancamentosManutencaoLote, this);
        }
        if (this.btnMarcarTodos) {
            adicionarEventoMoura(this.btnMarcarTodos.Click, this.OnMarcarTodos, this);
        }
        if (this.btnDesmarcarTodos) {
            adicionarEventoMoura(this.btnDesmarcarTodos.Click, this.OnDesmarcarTodos, this);
        }
        if (this.cboCampo) {
            adicionarEventoMoura(this.cboCampo.SelectedItemChanged, this.OnAlterouValor, this);
        }
        if (this.txtCampoCredito) {
            adicionarEventoMoura(this.txtCampoCredito.Procurou, this.onTxtCreditoProcurou, this);
        }
        if (this.txtCampoDebito) {
            adicionarEventoMoura(this.txtCampoDebito.Procurou, this.onTxtDebitoProcurou, this);
        }
        if (this.txtCampoDescricaoHistorico) {
            adicionarEventoMoura(this.txtCampoDescricaoHistorico.TextChanged, this.ValidarCamposModalManutencaoLote, this);
        }
        if (this.txtCampoDocumento) {
            adicionarEventoMoura(this.txtCampoDocumento.TextChanged, this.ValidarCamposModalManutencaoLote, this);
        }
        if (this.txtCampoHistorico) {
            adicionarEventoMoura(this.txtCampoHistorico.TextChanged, this.ValidarCamposModalManutencaoLote, this);
        }
        if (this.txtCampoValor) {
            adicionarEventoMoura(this.txtCampoValor.TextChanged, this.ValidarCamposModalManutencaoLote, this);
        }
        // -----
        if (this.btnLancamento) {
            adicionarEventoMoura(this.btnLancamento.Click, this.OnClickBotaoCadastro, this);
        }
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.LimparModal, this);
        }
        if (this.btnPesquisaAvancada) {
            adicionarEventoMoura(this.btnPesquisaAvancada.Click, this.OnClickBotaoPesquisa, this);
        }
        if (this.btnFechar) {
            adicionarEventoMoura(this.btnFechar.Click, this.OnClickBotaoFecharPesquisa, this);
        }
        if (this.btnOk) {
            adicionarEventoMoura(this.btnOk.Click, this.OnClickBotaoOkPesquisa, this);
        }
        if (this.txtContaDebito) {
            adicionarEventoMoura(this.txtContaDebito.AntesAbrirProcura, this.OnContaDebitoAntesAbrirProcura, this);
        }
        if (this.txtContaDebito) {
            adicionarEventoMoura(this.txtContaDebito.PesquisandoContabil, this.OnContaDebitoPesquisando, this);
        }
        if (this.txtConta) {
            adicionarEventoMoura(this.txtConta.AntesAbrirProcura, this.OnContaAntesAbrirProcura, this);
        }
        if (this.txtConta) {
            adicionarEventoMoura(this.txtConta.PesquisandoContabil, this.OnContaPesquisando, this);
        }
        if (this.txtContaCredito) {
            adicionarEventoMoura(this.txtContaCredito.AntesAbrirProcura, this.OnContaCreditoAntesAbrirProcura, this);
        }
        if (this.txtContaCredito) {
            adicionarEventoMoura(this.txtContaCredito.PesquisandoContabil, this.OnContaCreditoPesquisando, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.PreencherEmpresaContabil, this);
        }
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnClickBotaoLinha, this);
        }
        this.PreencherEmpresaContabil();
    };
    R_LanCon.prototype.PreencherEmpresaContabil = function () {
        this.txtContaCredito.Limpar();
        this.txtContaDebito.Limpar();
        if (this.txtContaCredito_hdnEmpresaContabil != undefined) {
            this.txtContaCredito_hdnEmpresaContabil.value = this.cboEmpresa.GetValue().toString();
        }
        if (this.txtContaDedito_hdnEmpresaContabil != undefined) {
            this.txtContaDedito_hdnEmpresaContabil.value = this.cboEmpresa.GetValue().toString();
        }
        if (this.txtContaDebito) {
            adicionarEventoMoura(this.txtContaDebito.AntesAbrirProcura, this.OnContaDebitoAntesAbrirProcura, this);
        }
        if (this.txtContaDebito) {
            adicionarEventoMoura(this.txtContaDebito.PesquisandoContabil, this.OnContaDebitoPesquisando, this);
        }
        if (this.txtContaCredito) {
            adicionarEventoMoura(this.txtContaCredito.AntesAbrirProcura, this.OnContaCreditoAntesAbrirProcura, this);
        }
        if (this.txtContaCredito) {
            adicionarEventoMoura(this.txtContaCredito.PesquisandoContabil, this.OnContaCreditoPesquisando, this);
        }
        if (this.dlgTelaModal) {
            adicionarEventoMoura(this.dlgTelaModal.Retornou, this.OnRetornouTelaModalCadastro, this);
        }
    };
    R_LanCon.prototype.OnRetornouTelaModalCadastro = function (s, e) {
        try {
            if (e.IDComponenteProcura == this.LANCAMENTO) {
                var parametros = {
                    Codigo: this.hdnLancamento.value.CNum()
                };
                var x = 0;
                var Itens;
                this.Preencher();
                this.Grid.SelectRows([this.hdnLancamento.value], false);
                Itens = this.ExecutarFuncaoServerSideSynch("PreencherGradeDiscriminada", parametros);
                if (Itens) {
                    this.Grid_DC.PreencherGrid(Itens);
                    var debito = 0, credito = 0;
                    for (x = 0; x < Itens.length; ++x) {
                        debito = debito + Itens[x].Valor_Debito;
                        credito = credito + Itens[x].Valor_Credito;
                    }
                    this.lblTotalCreditoDC.Text = credito.Format(2);
                    this.lblTotalDebitoDC.Text = debito.Format(2);
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_LanCon.prototype.OnClickBotaoLinha = function (s, e) {
        var parametros;
        var x = 0;
        var cod = 0;
        if (e.data != undefined) {
            cod = e.data.Codigo;
        }
        else {
            return;
        }
        parametros = {
            Codigo: cod
        };
        this.Grid.SelectRows([cod], false);
        var Itens;
        this.hdnLancamento.value = cod.toString();
        Itens = this.ExecutarFuncaoServerSideSynch("PreencherGradeDiscriminada", parametros);
        if (Itens) {
            this.Grid_DC.PreencherGrid(Itens);
            var debito = 0, credito = 0;
            for (x = 0; x < Itens.length; ++x) {
                debito = debito + Itens[x].Valor_Debito;
                credito = credito + Itens[x].Valor_Credito;
            }
            this.lblTotalCreditoDC.Text = credito.Format(2);
            this.lblTotalDebitoDC.Text = debito.Format(2);
        }
    };
    R_LanCon.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        this.Grid_DC.PreencherGrid([]);
        this.lblTotalCreditoDC.Text = "0";
        this.lblTotalDebitoDC.Text = "0";
        this.RelacaoLancamentos = [];
        this.hdnLancamento.value = null;
        this.Preencher();
    };
    R_LanCon.prototype.Preencher = function () {
        if (this.txtPeriodo.textBoxCalendarioInicio.GetDate() == null || this.txtPeriodo.textBoxCalendarioFim.GetDate() == null) {
            MostrarAlerta("Informe o período de pesquisa!");
            return;
        }
        try {
            var parametros = {
                dataInicial: ConvertToDate(this.txtPeriodo.textBoxCalendarioInicio.GetDate()),
                dataFinal: ConvertToDate(this.txtPeriodo.textBoxCalendarioFim.GetDate()),
                lancamentoInicial: this.txtLancamentoInicial.GetText().CNum(),
                lancamentoFinal: this.txtLancamentoFinal.GetText().CNum(),
                documento: this.txtDocumento.GetText(),
                Valor: this.txtValor.GetText().CNum(),
                ContaCredito: this.txtContaDebito.GetText().CNum(),
                ContaDebito: this.txtContaCredito.GetText().CNum(),
                Historico: this.txtHistorico.GetText().CNum(),
                codEmpresa: this.cboEmpresa.GetValue(),
                codPessoa: this.txtPessoa.GetText().CNum(),
                conta: this.txtConta.GetText().CNum()
            };
            var Lancamentos = this.ExecutarFuncaoServerSideSynch("PreencherGrade", parametros);
            if (Lancamentos && Lancamentos.length > 0) {
                this.RelacaoLancamentos = Lancamentos;
                var x = 0;
                var debito = 0, credito = 0;
                for (x = 0; x < Lancamentos.length; ++x) {
                    debito = debito + Lancamentos[x].Valor_Debito;
                    credito = credito + Lancamentos[x].Valor_Credito;
                }
                this.lblTotalCredito.Text = credito.Format(2);
                this.lblTotalDebito.Text = debito.Format(2);
            }
            else {
                this.Grid.PreencherGrid(null);
                MostrarAlerta("Nenhum registro encontrado!");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_LanCon.prototype.LimparModal = function (s, e) {
        e.processOnServer = false;
        this.txtLancamentoInicial.Limpar();
        this.txtLancamentoInicial.Limpar();
        this.txtLancamentoFinal.Limpar();
        this.txtContaDebito.Limpar();
        this.txtContaCredito.Limpar();
        this.txtDocumento.Limpar();
        this.txtPessoa.Limpar();
    };
    R_LanCon.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.hdnLancamento.value = "";
        this.txtPeriodo.Iniciar();
        this.txtLancamentoInicial.Limpar();
        this.txtLancamentoFinal.Limpar();
        this.txtDocumento.Limpar();
        this.txtValor.Limpar();
        this.txtConta.Limpar();
        this.txtContaDebito.Limpar();
        this.txtHistorico.Limpar();
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.txtPessoa.Limpar();
        this.Grid_DC.PreencherGrid(null);
        this.RelacaoLancamentos = [];
        this.lblTotalCredito.Text = "0";
        this.lblTotalDebito.Text = "0";
        this.lblTotalCreditoDC.Text = "0";
        this.lblTotalDebitoDC.Text = "0";
    };
    R_LanCon.prototype.OnClickBotaoPesquisa = function (s, e) {
        try {
            e.processOnServer = false;
            this.mdPesquisaAvancada.Show();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_LanCon.prototype.OnClickBotaoOkPesquisa = function (s, e) {
        try {
            e.processOnServer = false;
            this.mdPesquisaAvancada.Hide();
            this.PreencherGrade();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_LanCon.prototype.OnClickBotaoFecharPesquisa = function (s, e) {
        try {
            e.processOnServer = false;
            this.LimparModal(s, e);
            this.mdPesquisaAvancada.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_LanCon.prototype.OnClickBotaoCadastro = function (s, e) {
        try {
            e.processOnServer = false;
            var parametros = [];
            if (this.hdnLancamento.value.CNum() > 0) {
                parametros.push("codigo=" + this.hdnLancamento.value);
            }
            else {
                MostrarAlerta('Selecione um lançamento!');
                return;
            }
            this.dlgTelaModal.AbrirTelaModal(formataURLRelativa(URLTela.CadastroLancamentoContabil), parametros, this.LANCAMENTO);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    // Atividade 1061268
    R_LanCon.prototype.OncClickBotaoManutencaoEmLote = function (s, e) {
        try {
            e.processOnServer = false;
            this.cboCampo.SetSelectedIndex(0);
            this.OnAlterouValor();
            this.mdlManutencaoEmLote.Show();
            if (this.Grid.DataSource.length > 0) {
                this.GetLancamentos();
                this.Grid.DataSource.length;
                this.GridManutencaoLote.DataSource.length;
            }
            else {
                this.GridManutencaoLote.PreencherGrid(null);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_LanCon.prototype.OnClickBotaoCancelar = function (s, e) {
        try {
            e.processOnServer = false;
            this.GridManutencaoLote.PreencherGrid(null);
            this.mdlManutencaoEmLote.Hide();
            this.txtExibicao.Obrigatorio = false;
            this.txtCampoCredito.Obrigatorio = false;
            this.txtCampoData.Obrigatorio = false;
            this.txtCampoDebito.Obrigatorio = false;
            this.txtCampoDescricaoHistorico.Obrigatorio = false;
            this.txtCampoDocumento.Obrigatorio = false;
            this.txtCampoHistorico.Obrigatorio = false;
            this.txtCampoValor.Obrigatorio = false;
            this.cboCampo.SetSelectedIndex(0);
            this.OnAlterouValor;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_LanCon.prototype.OnAlterouValor = function () {
        try {
            if (this.cboCampo.GetSelectedIndex() <= 0) {
                this.txtExibicao.Visible = true;
                this.txtExibicao.Enabled = false;
                this.txtExibicao.Obrigatorio = false;
                this.txtCampoData.Visible = false;
                this.txtCampoData.Enabled = false;
                this.txtCampoData.Obrigatorio = false;
                this.txtCampoDocumento.Visible = false;
                this.txtCampoDocumento.Enabled = false;
                this.txtCampoDocumento.Obrigatorio = false;
                this.txtCampoDebito.Visible = false;
                this.txtCampoDebito.Enabled = false;
                this.txtCampoDebito.Obrigatorio = false;
                this.txtCampoCredito.Visible = false;
                this.txtCampoCredito.Enabled = false;
                this.txtCampoCredito.Obrigatorio = false;
                this.txtCampoValor.Visible = false;
                this.txtCampoValor.Enabled = false;
                this.txtCampoValor.Obrigatorio = false;
                this.txtCampoHistorico.Visible = false;
                this.txtCampoHistorico.Enabled = false;
                this.txtCampoHistorico.Obrigatorio = false;
                this.txtCampoDescricaoHistorico.Visible = false;
                this.txtCampoDescricaoHistorico.Enabled = false;
                this.txtCampoDescricaoHistorico.Obrigatorio = false;
                this.ValidarCamposModalManutencaoLote();
                this.LimparCamposManutencaoLote();
            }
            else if (this.cboCampo.GetSelectedIndex() == 1) {
                this.txtExibicao.Visible = false;
                this.txtExibicao.Enabled = false;
                this.txtExibicao.Obrigatorio = false;
                this.txtCampoData.Visible = true;
                this.txtCampoData.Enabled = true;
                this.txtCampoData.Obrigatorio = true;
                this.txtCampoDocumento.Visible = false;
                this.txtCampoDocumento.Enabled = false;
                this.txtCampoDocumento.Obrigatorio = false;
                this.txtCampoDebito.Visible = false;
                this.txtCampoDebito.Enabled = false;
                this.txtCampoDebito.Obrigatorio = false;
                this.txtCampoCredito.Visible = false;
                this.txtCampoCredito.Enabled = false;
                this.txtCampoCredito.Obrigatorio = false;
                this.txtCampoValor.Visible = false;
                this.txtCampoValor.Enabled = false;
                this.txtCampoValor.Obrigatorio = false;
                this.txtCampoHistorico.Visible = false;
                this.txtCampoHistorico.Enabled = false;
                this.txtCampoHistorico.Obrigatorio = false;
                this.txtCampoDescricaoHistorico.Visible = false;
                this.txtCampoDescricaoHistorico.Enabled = false;
                this.txtCampoDescricaoHistorico.Obrigatorio = false;
                this.ValidarCamposModalManutencaoLote();
                this.LimparCamposManutencaoLote();
            }
            else if (this.cboCampo.GetSelectedIndex() == 2) {
                this.txtExibicao.Visible = false;
                this.txtExibicao.Enabled = false;
                this.txtExibicao.Obrigatorio = false;
                this.txtCampoData.Visible = false;
                this.txtCampoData.Enabled = false;
                this.txtCampoData.Obrigatorio = false;
                this.txtCampoDocumento.Visible = true;
                this.txtCampoDocumento.Enabled = true;
                this.txtCampoDocumento.Obrigatorio = true;
                this.txtCampoDebito.Visible = false;
                this.txtCampoDebito.Enabled = false;
                this.txtCampoDebito.Obrigatorio = false;
                this.txtCampoCredito.Visible = false;
                this.txtCampoCredito.Enabled = false;
                this.txtCampoCredito.Obrigatorio = false;
                this.txtCampoValor.Visible = false;
                this.txtCampoValor.Enabled = false;
                this.txtCampoValor.Obrigatorio = false;
                this.txtCampoHistorico.Visible = false;
                this.txtCampoHistorico.Enabled = false;
                this.txtCampoHistorico.Obrigatorio = false;
                this.txtCampoDescricaoHistorico.Visible = false;
                this.txtCampoDescricaoHistorico.Enabled = false;
                this.txtCampoDescricaoHistorico.Obrigatorio = false;
                this.ValidarCamposModalManutencaoLote();
                this.LimparCamposManutencaoLote();
            }
            else if (this.cboCampo.GetSelectedIndex() == 3) {
                this.txtExibicao.Visible = false;
                this.txtExibicao.Enabled = false;
                this.txtExibicao.Obrigatorio = false;
                this.txtCampoData.Visible = false;
                this.txtCampoData.Enabled = false;
                this.txtCampoData.Obrigatorio = false;
                this.txtCampoDocumento.Visible = false;
                this.txtCampoDocumento.Enabled = false;
                this.txtCampoDocumento.Obrigatorio = false;
                this.txtCampoDebito.Visible = true;
                this.txtCampoDebito.Enabled = true;
                this.txtCampoDebito.Obrigatorio = true;
                this.txtCampoCredito.Visible = false;
                this.txtCampoCredito.Enabled = false;
                this.txtCampoCredito.Obrigatorio = false;
                this.txtCampoValor.Visible = false;
                this.txtCampoValor.Enabled = false;
                this.txtCampoValor.Obrigatorio = false;
                this.txtCampoHistorico.Visible = false;
                this.txtCampoHistorico.Enabled = false;
                this.txtCampoHistorico.Obrigatorio = false;
                this.txtCampoDescricaoHistorico.Visible = false;
                this.txtCampoDescricaoHistorico.Enabled = false;
                this.txtCampoDescricaoHistorico.Obrigatorio = false;
                this.ValidarCamposModalManutencaoLote();
                this.LimparCamposManutencaoLote();
            }
            else if (this.cboCampo.GetSelectedIndex() == 4) {
                this.txtExibicao.Visible = false;
                this.txtExibicao.Enabled = false;
                this.txtExibicao.Obrigatorio = false;
                this.txtCampoData.Visible = false;
                this.txtCampoData.Enabled = false;
                this.txtCampoData.Obrigatorio = false;
                this.txtCampoDocumento.Visible = false;
                this.txtCampoDocumento.Enabled = false;
                this.txtCampoDocumento.Obrigatorio = false;
                this.txtCampoDebito.Visible = false;
                this.txtCampoDebito.Enabled = false;
                this.txtCampoDebito.Obrigatorio = false;
                this.txtCampoCredito.Visible = true;
                this.txtCampoCredito.Enabled = true;
                this.txtCampoCredito.Obrigatorio = true;
                this.txtCampoValor.Visible = false;
                this.txtCampoValor.Enabled = false;
                this.txtCampoValor.Obrigatorio = false;
                this.txtCampoHistorico.Visible = false;
                this.txtCampoHistorico.Enabled = false;
                this.txtCampoHistorico.Obrigatorio = false;
                this.txtCampoDescricaoHistorico.Visible = false;
                this.txtCampoDescricaoHistorico.Enabled = false;
                this.txtCampoDescricaoHistorico.Obrigatorio = false;
                this.ValidarCamposModalManutencaoLote();
                this.LimparCamposManutencaoLote();
            }
            else if (this.cboCampo.GetSelectedIndex() == 5) {
                this.txtExibicao.Visible = false;
                this.txtExibicao.Enabled = false;
                this.txtExibicao.Obrigatorio = false;
                this.txtCampoData.Visible = false;
                this.txtCampoData.Enabled = false;
                this.txtCampoData.Obrigatorio = false;
                this.txtCampoDocumento.Visible = false;
                this.txtCampoDocumento.Enabled = false;
                this.txtCampoDocumento.Obrigatorio = false;
                this.txtCampoDebito.Visible = false;
                this.txtCampoDebito.Enabled = false;
                this.txtCampoDebito.Obrigatorio = false;
                this.txtCampoCredito.Visible = false;
                this.txtCampoCredito.Enabled = false;
                this.txtCampoCredito.Obrigatorio = false;
                this.txtCampoValor.Visible = true;
                this.txtCampoValor.Enabled = true;
                this.txtCampoValor.Obrigatorio = true;
                this.txtCampoHistorico.Visible = false;
                this.txtCampoHistorico.Enabled = false;
                this.txtCampoHistorico.Obrigatorio = false;
                this.txtCampoDescricaoHistorico.Visible = false;
                this.txtCampoDescricaoHistorico.Enabled = false;
                this.txtCampoDescricaoHistorico.Obrigatorio = false;
                this.ValidarCamposModalManutencaoLote();
                this.LimparCamposManutencaoLote();
            }
            else if (this.cboCampo.GetSelectedIndex() == 6) {
                this.txtExibicao.Visible = false;
                this.txtExibicao.Enabled = false;
                this.txtExibicao.Obrigatorio = false;
                this.txtCampoData.Visible = false;
                this.txtCampoData.Enabled = false;
                this.txtCampoData.Obrigatorio = false;
                this.txtCampoDocumento.Visible = false;
                this.txtCampoDocumento.Enabled = false;
                this.txtCampoDocumento.Obrigatorio = false;
                this.txtCampoDebito.Visible = false;
                this.txtCampoDebito.Enabled = false;
                this.txtCampoDebito.Obrigatorio = false;
                this.txtCampoCredito.Visible = false;
                this.txtCampoCredito.Enabled = false;
                this.txtCampoCredito.Obrigatorio = false;
                this.txtCampoValor.Visible = false;
                this.txtCampoValor.Enabled = false;
                this.txtCampoValor.Obrigatorio = false;
                this.txtCampoHistorico.Visible = true;
                this.txtCampoHistorico.Enabled = true;
                this.txtCampoHistorico.Obrigatorio = true;
                this.txtCampoDescricaoHistorico.Visible = false;
                this.txtCampoDescricaoHistorico.Enabled = false;
                this.txtCampoDescricaoHistorico.Obrigatorio = false;
                this.ValidarCamposModalManutencaoLote();
                this.LimparCamposManutencaoLote();
            }
            else if (this.cboCampo.GetSelectedIndex() == 7) {
                this.txtExibicao.Visible = false;
                this.txtExibicao.Enabled = false;
                this.txtExibicao.Obrigatorio = false;
                this.txtCampoData.Visible = false;
                this.txtCampoData.Enabled = false;
                this.txtCampoData.Obrigatorio = false;
                this.txtCampoDocumento.Visible = false;
                this.txtCampoDocumento.Enabled = false;
                this.txtCampoDocumento.Obrigatorio = false;
                this.txtCampoDebito.Visible = false;
                this.txtCampoDebito.Enabled = false;
                this.txtCampoDebito.Obrigatorio = false;
                this.txtCampoCredito.Visible = false;
                this.txtCampoCredito.Enabled = false;
                this.txtCampoCredito.Obrigatorio = false;
                this.txtCampoValor.Visible = false;
                this.txtCampoValor.Enabled = false;
                this.txtCampoValor.Obrigatorio = false;
                this.txtCampoHistorico.Visible = false;
                this.txtCampoHistorico.Enabled = false;
                this.txtCampoHistorico.Obrigatorio = false;
                this.txtCampoDescricaoHistorico.Visible = true;
                this.txtCampoDescricaoHistorico.Enabled = true;
                this.txtCampoDescricaoHistorico.Obrigatorio = true;
                this.ValidarCamposModalManutencaoLote();
                this.LimparCamposManutencaoLote();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_LanCon.prototype.GetLancamentos = function () {
        try {
            var parametros = {
                dataInicial: ConvertToDate(this.txtPeriodo.textBoxCalendarioInicio.GetDate()),
                dataFinal: ConvertToDate(this.txtPeriodo.textBoxCalendarioFim.GetDate()),
                lancamentoInicial: this.txtLancamentoInicial.GetText().CNum(),
                lancamentoFinal: this.txtLancamentoFinal.GetText().CNum(),
                documento: this.txtDocumento.GetText(),
                Valor: this.txtValor.GetText().CNum(),
                ContaCredito: this.txtContaDebito.GetText().CNum(),
                ContaDebito: this.txtContaCredito.GetText().CNum(),
                Historico: this.txtHistorico.GetText().CNum(),
                codEmpresa: this.cboEmpresa.GetValue(),
                codPessoa: this.txtPessoa.GetText().CNum(),
                conta: this.txtConta.GetText().CNum()
            };
            var lancamentos = this.ExecutarFuncaoServerSideSynch("PreencherGridModal", parametros);
            if (lancamentos != null) {
                this.GridManutencaoLote.PreencherGrid(lancamentos);
                this.GridManutencaoLote.deselectAll();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_LanCon.prototype.OnMarcarTodos = function (s, e) {
        e.processOnServer = false;
        this.GridManutencaoLote.selectAll();
    };
    R_LanCon.prototype.OnDesmarcarTodos = function (s, e) {
        e.processOnServer = false;
        this.GridManutencaoLote.deselectAll();
    };
    R_LanCon.prototype.GetRowsSelecionadas = function (campo) {
        var retorno = [];
        try {
            for (var i = 0; i < this.GridManutencaoLote.GetSelectedRowsData.length; i++) {
                retorno.push(this.GridManutencaoLote.GetSelectedRowsData[i][campo]);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        return retorno;
    };
    R_LanCon.prototype.OnAlterarLancamentosManutencaoLote = function (s, e) {
        e.processOnServer = false;
        if (this.GridManutencaoLote.GetSelectedRowsData.length > 0 && this.cboCampo.GetSelectedIndex() > 0) {
            var Lancamentos = this.GetRowsSelecionadas("Lancamento");
            try {
                MsgBoxJS("Confirma a alteração dos lançamentos selecionados?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnMsgBoxResponse, this), "Alterar_Lancamentos");
            }
            catch (ex) {
                LogarException(ex);
            }
        }
        else if (this.cboCampo.GetSelectedIndex() == 0) {
            MostrarAlerta("Nenhum valor para ser alterado!");
        }
        else if (this.cboCampo.GetSelectedIndex() > 0 && this.GridManutencaoLote.GetSelectedRowsData.length <= 0) {
            MostrarAlerta("Nenhum registro selecionado para ser alterado!");
        }
    };
    R_LanCon.prototype.OnExcluirLancamentosManutencaoLote = function (s, e) {
        e.processOnServer = false;
        if (this.GridManutencaoLote.GetSelectedRowsData.length > 0) {
            try {
                MsgBoxJS("Confirma a exclusão dos lançamentos selecionados?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnMsgBoxResponse, this), "Excluir_Lancamentos");
            }
            catch (ex) {
                LogarException(ex);
            }
        }
        else if (this.cboCampo.GetSelectedIndex() == 0) {
            MostrarAlerta("Nenhum valor para ser excluído!");
        }
        else if (this.cboCampo.GetSelectedIndex() > 0 && this.GridManutencaoLote.GetSelectedRowsData.length <= 0) {
            MostrarAlerta("Nenhum registro selecionado para ser excluído!");
        }
    };
    R_LanCon.prototype.onTxtDebitoProcurou = function (s, e) {
        this.ValidarCamposModalManutencaoLote();
    };
    R_LanCon.prototype.onTxtCreditoProcurou = function (s, e) {
        this.ValidarCamposModalManutencaoLote();
    };
    R_LanCon.prototype.ValidarCamposModalManutencaoLote = function () {
        if (this.cboCampo.GetSelectedIndex() == 0) {
            this.btnAlterar.SetEnabled(false);
            this.btnExcluir.SetEnabled(true);
            $('#btnAlterar_Botao').css('cursor', 'not-allowed');
            $('#btnExcluir_Botao').css('cursor', 'default');
        }
        else if (this.cboCampo.GetSelectedIndex() != 0 && (this.txtCampoData.Date == null && this.txtCampoCredito.GetText() == "" && this.txtCampoDebito.GetText() == ""
            && this.txtCampoDescricaoHistorico.GetText() == "" && this.txtCampoDocumento.GetText() == "" && this.txtCampoHistorico.GetText() == "" && this.txtCampoValor.GetText() == "")) {
            this.btnAlterar.SetEnabled(false);
            this.btnExcluir.SetEnabled(true);
            $('#btnAlterar_Botao').css('cursor', 'not-allowed');
            $('#btnExcluir_Botao').css('cursor', 'default');
        }
        else if (this.cboCampo.GetSelectedIndex() != 0 && (this.txtCampoData.Date != null || this.txtCampoCredito.GetText() != "" || this.txtCampoDebito.GetText() != ""
            || this.txtCampoDescricaoHistorico.GetText() != "" || this.txtCampoDocumento.GetText() != "" || this.txtCampoHistorico.GetText() != "" || this.txtCampoValor.GetText() != "")) {
            this.btnAlterar.SetEnabled(true);
            this.btnExcluir.SetEnabled(false);
            $('#btnAlterar_Botao').css('cursor', 'default');
            $('#btnExcluir_Botao').css('cursor', 'not-allowed');
        }
    };
    R_LanCon.prototype.LimparCamposManutencaoLote = function () {
        this.txtCampoCredito.Limpar();
        this.txtCampoData.Date = null;
        this.txtCampoDebito.Limpar();
        this.txtCampoDescricaoHistorico.Limpar();
        this.txtCampoDocumento.Limpar();
        this.txtCampoHistorico.Limpar();
        this.txtCampoValor.Limpar();
    };
    R_LanCon.prototype.AlterarRegistrosManutencaoLote = function () {
        if (this.GridManutencaoLote.GetSelectedRowsData.length > 0 && this.cboCampo.GetSelectedIndex() > 0) {
            var Lancamentos = this.GetRowsSelecionadas("Lancamento");
            var LancamentosPartida = this.GetRowsSelecionadas("CodPartida");
            try {
                if (this.cboCampo.GetSelectedIndex() == 1) {
                    if (this.txtCampoData.Date != null) {
                        var parametros = {
                            CodLancamentos: Lancamentos,
                            CodPartidas: LancamentosPartida,
                            Campo: "Data",
                            NovoValor: this.txtCampoData.Date
                        };
                        this.ExecutarFuncaoServerSideSynch("AlterarLancamentosManutencaoLote", parametros);
                        MostrarMensagem("Lançamentos alterados com sucesso!");
                        this.GridManutencaoLote.PreencherGrid(null);
                        this.Grid.PreencherGrid(null);
                    }
                    else {
                        MostrarAlerta("Informe um valor para ser alterado!");
                    }
                }
                else if (this.cboCampo.GetSelectedIndex() == 2) {
                    if (this.txtCampoDocumento.GetText() != "") {
                        var parametros = {
                            CodLancamentos: Lancamentos,
                            CodPartidas: LancamentosPartida,
                            Campo: "Documento",
                            NovoValor: this.txtCampoDocumento.GetText()
                        };
                        this.ExecutarFuncaoServerSideSynch("AlterarLancamentosManutencaoLote", parametros);
                        MostrarMensagem("Lançamentos alterados com sucesso!");
                        this.GridManutencaoLote.PreencherGrid(null);
                        this.Grid.PreencherGrid(null);
                    }
                    else {
                        MostrarAlerta("Informe um valor para ser alterado!");
                    }
                }
                else if (this.cboCampo.GetSelectedIndex() == 3) {
                    if (this.txtCampoDebito.GetText() != "") {
                        var parametros = {
                            CodLancamentos: Lancamentos,
                            CodPartidas: LancamentosPartida,
                            Campo: "Debito",
                            NovoValor: this.txtCampoDebito.GetText()
                        };
                        this.ExecutarFuncaoServerSideSynch("AlterarLancamentosManutencaoLote", parametros);
                        MostrarMensagem("Lançamentos alterados com sucesso!");
                        this.GridManutencaoLote.PreencherGrid(null);
                        this.Grid.PreencherGrid(null);
                    }
                    else {
                        MostrarAlerta("Informe um valor para ser alterado!");
                    }
                }
                else if (this.cboCampo.GetSelectedIndex() == 4) {
                    if (this.txtCampoCredito.GetText() != "") {
                        var parametros = {
                            CodLancamentos: Lancamentos,
                            CodPartidas: LancamentosPartida,
                            Campo: "Credito",
                            NovoValor: this.txtCampoCredito.GetText()
                        };
                        this.ExecutarFuncaoServerSideSynch("AlterarLancamentosManutencaoLote", parametros);
                        MostrarMensagem("Lançamentos alterados com sucesso!");
                        this.GridManutencaoLote.PreencherGrid(null);
                        this.Grid.PreencherGrid(null);
                    }
                    else {
                        MostrarAlerta("Informe um valor para ser alterado!");
                    }
                }
                else if (this.cboCampo.GetSelectedIndex() == 5) {
                    if (this.txtCampoValor.GetText() != "") {
                        if (this.txtCampoValor.GetText().soNumeros() != "") {
                            if (parseFloat(this.txtCampoValor.GetText()) > 0) {
                                var parametros = {
                                    CodLancamentos: Lancamentos,
                                    CodPartidas: LancamentosPartida,
                                    Campo: "Valor",
                                    NovoValor: this.txtCampoValor.GetText()
                                };
                                this.ExecutarFuncaoServerSideSynch("AlterarLancamentosManutencaoLote", parametros);
                                MostrarMensagem(Lancamentos.toString());
                                MostrarMensagem("Lançamentos alterados com sucesso!");
                                this.GridManutencaoLote.PreencherGrid(null);
                                this.Grid.PreencherGrid(null);
                            }
                            else {
                                MostrarAlerta("O campo Valor deve ser maior que zero!");
                            }
                        }
                        else {
                            MostrarAlerta("Informe um valor numérico!");
                        }
                    }
                    else {
                        MostrarAlerta("Informe um valor para ser alterado!");
                    }
                }
                else if (this.cboCampo.GetSelectedIndex() == 6) {
                    if (this.txtCampoHistorico.GetText() != "") {
                        var parametros = {
                            CodLancamentos: Lancamentos,
                            CodPartidas: LancamentosPartida,
                            Campo: "Historico",
                            NovoValor: this.txtCampoHistorico.GetText()
                        };
                        this.ExecutarFuncaoServerSideSynch("AlterarLancamentosManutencaoLote", parametros);
                        MostrarMensagem("Lançamentos alterados com sucesso!");
                        this.GridManutencaoLote.PreencherGrid(null);
                        this.Grid.PreencherGrid(null);
                    }
                    else {
                        MostrarAlerta("Informe um valor para ser alterado!");
                    }
                }
                else if (this.cboCampo.GetSelectedIndex() == 7) {
                    if (this.txtCampoDescricaoHistorico.GetText() != "") {
                        var parametros = {
                            CodLancamentos: Lancamentos,
                            CodPartidas: LancamentosPartida,
                            Campo: "DescricaoHistorico",
                            NovoValor: this.txtCampoDescricaoHistorico.GetText()
                        };
                        this.ExecutarFuncaoServerSideSynch("AlterarLancamentosManutencaoLote", parametros);
                        MostrarMensagem("Lançamentos alterados com sucesso!");
                        this.GridManutencaoLote.PreencherGrid(null);
                        this.Grid.PreencherGrid(null);
                    }
                    else {
                        MostrarAlerta("Informe um valor para ser alterado!");
                    }
                }
            }
            catch (ex) {
                LogarException(ex);
            }
        }
        else if (this.cboCampo.GetSelectedIndex() == 0) {
            MostrarAlerta("Nenhum valor para ser alterado!");
        }
        else if (this.cboCampo.GetSelectedIndex() > 0 && this.GridManutencaoLote.GetSelectedRowsData.length <= 0) {
            MostrarAlerta("Nenhum registro selecionado para ser alterado!");
        }
    };
    R_LanCon.prototype.ExcluirRegistrosManutencaoLote = function () {
        if (this.GridManutencaoLote.GetSelectedRowsData.length > 0) {
            try {
                var Lancamentos = this.GetRowsSelecionadas("Lancamento");
                var parametros = {
                    CodLancamentos: Lancamentos
                };
                this.ExecutarFuncaoServerSideSynch("ExcluirLancamentosManutencaoLote", parametros);
                MostrarMensagem("Lançamentos excluídos com sucesso!");
                this.GridManutencaoLote.PreencherGrid(null);
                this.Grid.PreencherGrid(null);
            }
            catch (ex) {
                LogarException(ex);
            }
        }
        else if (this.cboCampo.GetSelectedIndex() == 0) {
            MostrarAlerta("Nenhum registro selecionado para ser excluído!");
        }
        else if (this.cboCampo.GetSelectedIndex() > 0 && this.GridManutencaoLote.GetSelectedRowsData.length <= 0) {
            MostrarAlerta("Nenhum registro selecionado para ser excluído!");
        }
    };
    R_LanCon.prototype.OnMsgBoxResponse = function (e) {
        if (e.Argument == "Alterar_Lancamentos" && e.Resultado == MsgBoxResult.Yes) {
            this.AlterarRegistrosManutencaoLote();
            this.GetLancamentos();
            this.Preencher();
            this.RefreshAngular();
        }
        else if (e.Argument == "Excluir_Lancamentos" && e.Resultado == MsgBoxResult.Yes) {
            this.ExcluirRegistrosManutencaoLote();
            this.GetLancamentos();
            this.Preencher();
            this.RefreshAngular();
        }
        else if (e.Resultado == MsgBoxResult.No) {
            return;
        }
    };
    //
    R_LanCon.prototype.OnContaAntesAbrirProcura = function (s, ev) {
        this.txtConta.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
    };
    R_LanCon.prototype.OnContaPesquisando = function (s, ev) {
        this.txtConta.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
        var retorno = false;
        var retornoContaContabilExiste = false;
        var parametros;
        var parametroReduzido;
        var parametroSintetica;
        parametros = {
            codigoContaContabil: this.txtConta.TextBoxAdicional.value.CNum(),
            empresa: this.cboEmpresa.GetValue()
        };
        parametroReduzido = {
            reduzido: this.txtConta.TextBoxAdicional.value.CNum(),
        };
        parametroSintetica = {
            codigoContaContabil: this.txtConta.TextBoxAdicional.value.CNum(),
        };
        if (this.txtConta.TextBoxAdicional.value.CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (!retorno) {
                retornoContaContabilExiste = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametroReduzido);
                if (retornoContaContabilExiste) {
                    ev.Cancelar = true;
                    MostrarAlerta('A Conta Débito não pertence a empresa selecionada!');
                    this.txtConta.Limpar();
                    this.txtConta.Focus();
                }
            }
            else if (this.ExecutarFuncaoServerSideSynch("IsContaSintetica", parametroSintetica)) {
                ev.Cancelar = true;
                MostrarAlerta('A conta contábil deve ser do tipo Analítica!');
                this.txtConta.Limpar();
                this.txtConta.Focus();
            }
        }
    };
    R_LanCon.prototype.OnContaDebitoAntesAbrirProcura = function (s, ev) {
        this.txtContaDebito.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
    };
    R_LanCon.prototype.OnContaDebitoPesquisando = function (s, ev) {
        this.txtContaDebito.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
        var retorno = false;
        var retornoContaContabilExiste = false;
        var parametros;
        var parametroReduzido;
        var parametroSintetica;
        parametros = {
            codigoContaContabil: this.txtContaDebito.TextBoxAdicional.value.CNum(),
            empresa: this.cboEmpresa.GetValue()
        };
        parametroReduzido = {
            reduzido: this.txtContaDebito.TextBoxAdicional.value.CNum(),
        };
        parametroSintetica = {
            codigoContaContabil: this.txtContaDebito.TextBoxAdicional.value.CNum(),
        };
        if (this.txtContaDebito.TextBoxAdicional.value.CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (!retorno) {
                retornoContaContabilExiste = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametroReduzido);
                if (retornoContaContabilExiste) {
                    ev.Cancelar = true;
                    MostrarAlerta('A Conta Débito não pertence a empresa selecionada!');
                    this.txtContaDebito.Limpar();
                    this.txtContaDebito.Focus();
                }
            }
            else if (this.ExecutarFuncaoServerSideSynch("IsContaSintetica", parametroSintetica)) {
                ev.Cancelar = true;
                MostrarAlerta('A conta contábil deve ser do tipo Analítica!');
                this.txtContaDebito.Limpar();
                this.txtContaDebito.Focus();
            }
        }
    };
    R_LanCon.prototype.OnContaCreditoAntesAbrirProcura = function (s, ev) {
        this.txtContaCredito.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
    };
    R_LanCon.prototype.OnContaCreditoPesquisando = function (s, ev) {
        this.txtContaCredito.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
        var retorno = false;
        var retornoContaContabilExiste = false;
        var parametros;
        var parametroReduzido;
        var parametroSintetica;
        parametros = {
            codigoContaContabil: this.txtContaCredito.TextBoxAdicional.value.CNum(),
            empresa: this.cboEmpresa.GetValue()
        };
        parametroReduzido = {
            reduzido: this.txtContaCredito.TextBoxAdicional.value.CNum(),
        };
        parametroSintetica = {
            codigoContaContabil: this.txtContaCredito.TextBoxAdicional.value.CNum(),
        };
        if (this.txtContaCredito.TextBoxAdicional.value.CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (!retorno) {
                retornoContaContabilExiste = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametroReduzido);
                if (retornoContaContabilExiste) {
                    ev.Cancelar = true;
                    MostrarAlerta('A Conta Crédito não pertence a empresa selecionada!');
                    this.txtContaCredito.Limpar();
                    this.txtContaCredito.Focus();
                }
            }
            else if (this.ExecutarFuncaoServerSideSynch("IsContaSintetica", parametroSintetica)) {
                ev.Cancelar = true;
                MostrarAlerta('A conta contábil deve ser do tipo Analítica!');
                this.txtContaCredito.Limpar();
                this.txtContaCredito.Focus();
            }
        }
    };
    return R_LanCon;
}(MouraPageRelacaoAngular));
var r_LanCon = new R_LanCon();
//# sourceMappingURL=R_LanCon.js.map