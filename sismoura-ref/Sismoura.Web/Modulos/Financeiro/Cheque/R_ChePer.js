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
var R_ChePer_Angular = /** @class */ (function (_super) {
    __extends(R_ChePer_Angular, _super);
    function R_ChePer_Angular() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_ChePer_Angular.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ChePer_Angular.prototype, "optTipoPeriodo", {
        get: function () {
            return window['optTipoPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ChePer_Angular.prototype, "txtNumeroCheque", {
        get: function () {
            return window['txtNumeroCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ChePer_Angular.prototype, "txtTitular", {
        get: function () {
            return window['txtTitular_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ChePer_Angular.prototype, "cboSituacao", {
        get: function () {
            return window['cboSituacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ChePer_Angular.prototype, "cboTipoCheque", {
        get: function () {
            return window['cboTipoCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ChePer_Angular.prototype, "cboOrigem", {
        get: function () {
            return window['cboOrigem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ChePer_Angular.prototype, "txtEnviado", {
        get: function () {
            return window['txtEnviado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ChePer_Angular.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ChePer_Angular.prototype, "txtVendedor", {
        get: function () {
            return window['txtVendedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ChePer_Angular.prototype, "lstContaCorrente", {
        get: function () {
            return window['lstContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ChePer_Angular.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ChePer_Angular.prototype, "btnAlterarSituacao", {
        get: function () {
            return window['btnAlterarSituacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ChePer_Angular.prototype, "txtDataLancamento", {
        get: function () {
            return window['txtDataLancamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ChePer_Angular.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ChePer_Angular.prototype, "txtNovaContaContabil", {
        get: function () {
            return window['txtNovaContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ChePer_Angular.prototype, "txtNovaSituacao", {
        get: function () {
            return window['txtNovaSituacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ChePer_Angular.prototype, "cboNovaContaCorrente", {
        get: function () {
            return window['cboNovaContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ChePer_Angular.prototype, "txtConfiguracaoLancamento", {
        get: function () {
            return window['txtConfiguracaoLancamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ChePer_Angular.prototype, "txtNovoVencimento", {
        get: function () {
            return window['txtNovoVencimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_ChePer_Angular.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_ChePer_Angular.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnAlterarSituacao) {
            adicionarEventoMoura(this.btnAlterarSituacao.Click, this.OnClickBtnAlterarSituacao, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.CalculateCustomSummary, this.CalculateCustomSummary, this);
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
        if (this.ParametrosTela["dataInicial"]) {
            this.txtPeriodo.textBoxCalendarioInicio.SetDate((this.ParametrosTela["dataInicial"]).ToDate());
        }
        if (this.ParametrosTela["dataFinal"]) {
            this.txtPeriodo.textBoxCalendarioFim.SetDate((this.ParametrosTela["dataFinal"]).ToDate());
        }
    };
    R_ChePer_Angular.prototype.OnSelecionouLinha = function (s, e) {
        this.grid.Refresh();
        this.RefreshAngular();
    };
    R_ChePer_Angular.prototype.OnClickBtnAlterarSituacao = function (s, e) {
        e.processOnServer = false;
        MsgBoxJS('Deseja realmente executar a operação?', MsgBoxOptions.YesNo, null, $.proxy(this.OnSelecionouMsgBox, this));
    };
    R_ChePer_Angular.prototype.OnSelecionouMsgBox = function (result) {
        if (result.Resultado === MsgBoxResult.Yes) {
            this.AlterarSituacoes();
        }
    };
    R_ChePer_Angular.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        try {
            var parametros = void 0;
            var dataInicial = this.txtPeriodo.textBoxCalendarioInicio.GetDate();
            var dataFinal = this.txtPeriodo.textBoxCalendarioFim.GetDate();
            var codSituacao = 0;
            var tipoCheque = '';
            var origem = '';
            if (dataInicial === null || dataFinal === null) {
                MostrarAlerta(this.CampoObrigatorio('Período'));
                return false;
            }
            if (this.cboTipoCheque.Combo.GetItem(this.cboTipoCheque.GetSelectedIndex())) {
                tipoCheque = this.cboTipoCheque.Combo.GetItem(this.cboTipoCheque.GetSelectedIndex()).value;
            }
            if (this.cboOrigem.Combo.GetItem(this.cboOrigem.GetSelectedIndex())) {
                origem = this.cboOrigem.Combo.GetItem(this.cboOrigem.GetSelectedIndex()).value;
            }
            if (this.cboSituacao.Combo.GetItem(this.cboSituacao.GetSelectedIndex())) {
                codSituacao = parseInt(this.cboSituacao.Combo.GetItem(this.cboSituacao.GetSelectedIndex()).value);
            }
            parametros = {
                dataInicial: dataInicial,
                dataFinal: dataFinal,
                codFornecedor: this.txtEnviado.GetText().CNum(),
                codVendedor: this.txtVendedor.GetText().CNum(),
                codCliente: this.txtCliente.GetText().CNum(),
                nomeTitular: this.txtTitular.GetText(),
                tipoData: this.optTipoPeriodo.GetValue(),
                numeroCheque: this.txtNumeroCheque.GetText().CNum(),
                tipoCheque: tipoCheque,
                origem: origem,
                codSituacao: codSituacao,
                contasCorrentes: this.SelectedValuesIn(this.lstContaCorrente.Lista.GetValues())
            };
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch('GetRelacaoChequesNoPeriodo', parametros, function (d) {
                _this.grid.PreencherGrid(JSON.parse(d).d);
                fecharEspera();
            }, function (e) {
                LogarException(e);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_ChePer_Angular.prototype.CampoObrigatorio = function (campo) {
        return 'Preencha o campo corretamente: ' + campo;
    };
    R_ChePer_Angular.prototype.SelectedValuesIn = function (values) {
        if (values.length === 0) {
            return '';
        }
        return "'" + values.join("','") + "'";
    };
    R_ChePer_Angular.prototype.AlterarSituacoes = function () {
        var _this = this;
        var linhasSelecionadas;
        var codigos;
        linhasSelecionadas = this.grid.Grid.getSelectedRowsData();
        var parametros;
        var mensagemErro = '';
        if (linhasSelecionadas.length === 0) {
            MostrarAlerta('Selecione o(s) cheque(s)');
            return false;
        }
        if (this.txtNovaSituacao.GetText().CNum() <= 0) {
            MostrarAlerta(this.CampoObrigatorio('Situação'));
            return false;
        }
        if (!this.txtDataLancamento.Date || this.txtDataLancamento.Date.getFullYear() < 1) {
            MostrarAlerta(this.CampoObrigatorio('Data Lançamento'));
            return false;
        }
        if (!this.txtNovoVencimento.Date || this.txtNovoVencimento.Date.getFullYear() < 1) {
            MostrarAlerta(this.CampoObrigatorio('Data Vencimento'));
            return false;
        }
        if (this.cboNovaContaCorrente.Combo.GetValue() === null) {
            mensagemErro += this.CampoObrigatorio('Conta Corrente');
        }
        if (this.txtConfiguracaoLancamento.GetText() === '') {
            mensagemErro += '<br/>' + this.CampoObrigatorio('Informe o tipo de lançamento contábil');
        }
        if (this.cboNovaContaCorrente.Combo.GetValue() !== null) {
            mensagemErro = mensagemErro.replace('<br/>', '');
        }
        if (this.cboNovaContaCorrente.Combo.GetValue() === null || this.txtConfiguracaoLancamento.GetText() === '') {
            MostrarAlerta(mensagemErro);
            return false;
        }
        codigos = linhasSelecionadas.map(function (linha) { return linha.Codigo; });
        parametros = {
            Codigos: codigos,
            NomeTela: ValoresSismoura.NomeTela,
            DataLancamento: this.txtDataLancamento.Date,
            ContaContabilLancamento: this.txtNovaContaContabil.GetText().CNum(),
            Situacao_Atual: this.txtNovaSituacao.GetText().CNum(),
            Situacao_Cc: this.cboNovaContaCorrente.Combo.GetValue(),
            Vencimento: this.txtNovoVencimento.Date,
            Configuracao_Lancamento: this.txtConfiguracaoLancamento.GetText().CNum(),
            Situacao: this.txtNovaSituacao.GetText().CNum()
        };
        try {
            this.ExecutarFuncaoServerSideAsynch('ObterPorCodigo', parametros, function (d) {
                MostrarMensagem('Situações alteradas com sucesso');
                _this.LimparCamposSalvar();
                _this.PreencherGrade();
            }, function (e) {
                LogarException(e);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_ChePer_Angular.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        var dataInicio = new Date();
        dataInicio.setDate(1);
        this.optTipoPeriodo.SetValue('VE');
        this.txtNumeroCheque.Limpar();
        this.txtTitular.Limpar();
        this.txtPeriodo.textBoxCalendarioInicio.SetDate(dataInicio);
        this.txtPeriodo.textBoxCalendarioFim.SetDate(new Date());
        this.cboSituacao.SetSelectedIndex(0);
        this.cboOrigem.SetSelectedIndex(0);
        this.cboTipoCheque.SetSelectedIndex(0);
        this.txtEnviado.Limpar();
        this.txtCliente.Limpar();
        this.lstContaCorrente.Lista.LimparSelecao();
        this.grid.PreencherGrid(null);
    };
    R_ChePer_Angular.prototype.LimparCamposSalvar = function () {
        this.txtDataLancamento.Date = null;
        this.txtNovaContaContabil.Limpar();
        this.txtNovaSituacao.Limpar();
        this.cboNovaContaCorrente.Limpar();
        this.txtNovoVencimento.Date = null;
        this.txtConfiguracaoLancamento.Limpar();
    };
    R_ChePer_Angular.prototype.CalculateCustomSummary = function (s, e) {
        switch (e.options.summaryProcess) {
            case "start":
                this.somaColuna = 0;
                this.counter = 0;
                break;
            case "calculate":
                if (this.grid.Grid.isRowSelected(this.grid.Grid.getSelectedRowKeys()[this.counter])) {
                    if (e.options.name == "Valor_Cheque") {
                        this.somaColuna += e.options.value;
                    }
                    this.counter++;
                }
                break;
            case "finalize":
                e.options.totalValue = this.somaColuna;
                this.RefreshAngular();
                break;
        }
    };
    return R_ChePer_Angular;
}(MouraPageRelacaoAngular));
var r_ChePer_Angular = new R_ChePer_Angular();
//# sourceMappingURL=R_ChePer.js.map