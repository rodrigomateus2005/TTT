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
var C_PLote = /** @class */ (function (_super) {
    __extends(C_PLote, _super);
    function C_PLote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_PLote.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PLote.prototype, "mdBaixar", {
        get: function () {
            return window['mdBaixar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PLote.prototype, "Conta_Pagar", {
        get: function () {
            return this.GetScope()["Conta_Pagar"];
        },
        set: function (value) {
            this.GetScope()["Conta_Pagar"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PLote.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PLote.prototype, "txtFornecedor", {
        get: function () {
            return window['txtFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PLote.prototype, "txtContaContabil", {
        get: function () {
            return window['txtContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PLote.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PLote.prototype, "btnFecharImpCheque", {
        get: function () {
            return window['btnFecharImpCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PLote.prototype, "btnImprimirCheque", {
        get: function () {
            return window['btnImprimirCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PLote.prototype, "mdCheque", {
        get: function () {
            return window['mdCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PLote.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PLote.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PLote.prototype, "btnBaixar", {
        get: function () {
            return window['btnBaixar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PLote.prototype, "lblValorCheque", {
        get: function () {
            return window['lblValorCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PLote.prototype, "lblValorExtenso", {
        get: function () {
            return window['lblValorExtenso_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PLote.prototype, "cboModeloImpressao", {
        get: function () {
            return window['cboModeloImpressao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PLote.prototype, "cboContaCorrenteC", {
        get: function () {
            return window['cboContaCorrenteC_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PLote.prototype, "txtNumeroCheque", {
        get: function () {
            return window['txtNumeroCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PLote.prototype, "txtNominal", {
        get: function () {
            return window['txtNominal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PLote.prototype, "txtDataEmissaoCheque", {
        get: function () {
            return window['txtDataEmissaoCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PLote.prototype, "lblData", {
        get: function () {
            return window['lblData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PLote.prototype, "btnEmitirCheque", {
        get: function () {
            return window['btnEmitirCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PLote.prototype, "NomeCidade", {
        get: function () {
            return this.GetScope()["NomeCidade"];
        },
        set: function (value) {
            this.GetScope()["NomeCidade"] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_PLote.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtContaContabil) {
            adicionarEventoMoura(this.txtContaContabil.AntesAbrirProcura, this.OnAntesAbrirProcuraContaContabil, this);
        }
        if (this.txtContaContabil) {
            adicionarEventoMoura(this.txtContaContabil.Procurou, this.OnDepoisBuscarContaContabil, this);
        }
        if (this.txtFornecedor) {
            adicionarEventoMoura(this.txtFornecedor.Procurou, this.OnPesquisouFornecedor, this);
        }
        if (this.btnEmitirCheque) {
            adicionarEventoMoura(this.btnEmitirCheque.Click, this.OnClickBtnEmitirCheque, this);
        }
        if (this.btnFecharImpCheque) {
            adicionarEventoMoura(this.btnFecharImpCheque.Click, this.OnClickFecharImpCheque, this);
        }
        if (this.btnImprimirCheque) {
            adicionarEventoMoura(this.btnImprimirCheque.Click, this.OnClickImprimirCheque, this);
        }
        if (this.btnBaixar) {
            adicionarEventoMoura(this.btnBaixar.Click, this.OnClickBaixar, this);
        }
        if (this.btnImprimirCheque) {
            adicionarEventoMoura(this.btnImprimirCheque.Click, this.OnClickImprimirCheque, this);
        }
        if (this.txtDataEmissaoCheque) {
            adicionarEventoMoura(this.txtDataEmissaoCheque.ValueChanged, this.MudouDataEmissaoCheque, this);
        }
        if (this.lstEmpresa) {
            adicionarEventoMoura(this.lstEmpresa.SelectionChanged, this.OnListEmpresaChange, this);
        }
        if (this.mdBaixar) {
            adicionarEventoMoura(this.mdBaixar.BaixouConta, this.OnBaixouConta, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.CalculateCustomSummary, this.CalculateCustomSummary, this);
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
            adicionarEventoMoura(this.grid.CellPrepared, this.CellPrepared, this);
        }
    };
    C_PLote.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        if (!this.GetScope().MudouContaCorrente) {
            this.GetScope().MudouDesconto = $.proxy(this.MudouContaCorrente, this);
            this.GetScope().$watch(function (scope) { return _this.Conta_Pagar.Conta_Corrente; }, this.GetScope().MudouContaCorrente);
        }
    };
    C_PLote.prototype.OnListEmpresaChange = function () {
    };
    C_PLote.prototype.MudouContaCorrente = function () {
        try {
            var parametros;
            parametros = {
                codContaCorrente: this.Conta_Pagar.Codigo
            };
            var codigoCheque = this.ExecutarFuncaoServerSideSynch("GetCodigoUltimoCheque", parametros);
            if (codigoCheque > 0) {
                this.txtNumeroCheque.SetText("" + (codigoCheque + 1));
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PLote.prototype.OnAntesAbrirProcuraContaContabil = function (s, e) {
        if (this.cboContaCorrente) {
            if (String.IsNullOrWhiteSpace(this.cboContaCorrente.GetContaCorrente())) {
                MsgBoxJS("Informe uma conta corrente para procurar uma conta contábil", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, null, null);
                e.Cancelar = true;
                return;
            }
            this.txtContaContabil.AddParametro("Empresa", "" + this.cboContaCorrente.GetEmpresa());
        }
    };
    C_PLote.prototype.OnDepoisBuscarContaContabil = function () {
        var permitidaUsuario;
        var retorno;
        if (this.txtContaContabil) {
            if (this.txtContaContabil.GetText().CNum() <= 0) {
                return;
            }
            var parametros = {
                codContaContabil: this.txtContaContabil.GetText().CNum(),
                usuarioLogado: ValoresSismoura.UsuarioLogado
            };
            permitidaUsuario = this.ExecutarFuncaoServerSideSynch("pertenceEmpresaUsuario", parametros);
            if (!permitidaUsuario) {
                MostrarAlerta("A conta contábil não pertence as empresas vinculadas ao usuário!");
                this.txtContaContabil.Limpar();
                return;
            }
            retorno = this.ExecutarFuncaoServerSideSynch("GetByCod", parametros);
            if (!retorno.Pagar) {
                MostrarAlerta("Conta Contábil não encontrado(a) ou inativo(a)");
                this.txtContaContabil.Limpar();
                return;
            }
        }
    };
    C_PLote.prototype.LimparDadosBaixa = function () {
        this.Conta_Pagar.Data_Emissao = this.DataServidor();
        this.Conta_Pagar.Desconto = 0;
        this.Conta_Pagar.Desconto = 0;
        this.Conta_Pagar.Juros = 0;
        this.Conta_Pagar.Doc_Merc = 0;
        this.Conta_Pagar.Observacao = "";
        this.RefreshAngular();
    };
    C_PLote.prototype.OnClickFecharImpCheque = function (s, e) {
        e.processOnServer = false;
        this.mdCheque.Hide();
    };
    C_PLote.prototype.OnClickImprimirCheque = function (s, e) {
        e.processOnServer = false;
        try {
            var dataSource;
            var codigos = [];
            dataSource = this.grid.GetSelectedRowsData;
            for (var x = 0; x < dataSource.length; x++) {
                codigos.push(dataSource[x].Codigo);
            }
            var contasSelecionadas = codigos.join(",");
            if (contasSelecionadas == undefined) {
                MostrarAlerta("Selecione as parcelas");
                return;
            }
            if (this.ValidarCheque()) {
                var parametros = {
                    valor: this.lblValorCheque.Text.CNum(),
                    nominal: this.txtNominal.GetText(),
                    cidade: this.NomeCidade,
                    dataEmissao: this.txtDataEmissaoCheque.Date,
                    contasPagas: contasSelecionadas,
                    contaCorrente: this.cboContaCorrenteC.GetContaCorrente(),
                    numeroCheque: this.txtNumeroCheque.GetText(),
                    codBanco: this.cboModeloImpressao.GetText().CNum(),
                    nomeTela: ValoresSismoura.NomeTela,
                    codUsuario: ValoresSismoura.UsuarioLogado
                };
                var impressao = this.ExecutarFuncaoServerSideSynch("EmitirCheque", parametros);
                if (impressao.MensagemAlerta != null) {
                    MostrarAlerta(impressao.MensagemAlerta);
                    return;
                }
                if (impressao.MensagemRetorno != null) {
                    this.ImprimirMatricial("", impressao.MensagemRetorno);
                }
                this.LimparCamposImpressaoCheque();
                this.mdCheque.Hide();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PLote.prototype.ValidarCheque = function () {
        if (this.cboContaCorrenteC.GetContaCorrente() == undefined) {
            MostrarMensagemCampoObrigatorio("Conta Corrente");
            return false;
        }
        if (this.txtNumeroCheque.GetText() == undefined) {
            MostrarMensagemCampoObrigatorio("Número do Cheque");
            return false;
        }
        if (this.txtDataEmissaoCheque.Date == undefined) {
            MostrarMensagemCampoObrigatorio("Data de Emissão");
            return false;
        }
        if (this.cboModeloImpressao.GetValue() == 0) {
            MostrarMensagemCampoObrigatorio("Modelo de Impressão");
            return false;
        }
        return true;
    };
    C_PLote.prototype.OnClickBaixar = function (s, e) {
        e.processOnServer = false;
        try {
            var parametros;
            var bloquearContaVencida = false;
            var contaCorrentePadrao = "";
            var contaContabilPadrao = 0;
            var valorPagar = 0;
            var dataSource;
            var codigos = [];
            codigos = this.grid.GetSelectedRowsData.map(function (item) { return item.Codigo; });
            if (codigos.length == 0) {
                MostrarAlerta("Selecione as contas que serão pagas");
                return;
            }
            if (this.Conta_Pagar.Data_Emissao == undefined) {
                MostrarMensagemCampoObrigatorio("Data da Baixa");
                return;
            }
            if (ValoresSismoura.ConfiguracoesRetaguarda.Pedir_Senha_Dar_Baixa > 0) {
                for (var x = 0; x < codigos.length; x++) {
                    parametros = {
                        codConta: codigos[x]
                    };
                    var contaPagar = this.ExecutarFuncaoServerSideSynch("ObterConta", parametros);
                    if (contaPagar == undefined) {
                        MostrarAlerta("Conta a pagar " + codigos[x] + "não cadastrada");
                        return;
                    }
                    parametros = {
                        dataAtual: this.DataServidor().ToDate(),
                        dataVencimento: contaPagar.Data_Vencimento.ToDate()
                    };
                    var diferencaDias = this.ExecutarFuncaoServerSideSynch("CalcularDiferencaDias", parametros);
                    if (diferencaDias > ValoresSismoura.ConfiguracoesRetaguarda.Pedir_Senha_Dar_Baixa) {
                        this.dlgFuncaoAdm.Verificar("SolSenBaixa", ValoresSismoura.UsuarioLogado, false, this.OnCarregouFuncaoSenhaDarBaixa, this);
                    }
                }
            }
            this.BaixarConta();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PLote.prototype.OnClickBtnEmitirCheque = function (s, e) {
        e.processOnServer = false;
        var valorSelecionado;
        var parametros;
        var valorExtenso = "";
        try {
            parametros = {
                codEmpresa: ValoresSismoura.EmpresaPadraoUsuario
            };
            var cidade = this.ExecutarFuncaoServerSideSynch("ObterCidade", parametros);
            this.NomeCidade = cidade.Cidade;
            this.LimparCamposImpressaoCheque();
            valorSelecionado = this.grid.GetSelectedRowsData.Sum("Valor");
            this.lblValorCheque.Text = valorSelecionado.Format(ValoresSismoura.CasasDecimaisValor);
            parametros = {
                valorCheque: this.lblValorCheque.Text.CNum()
            };
            valorExtenso = this.ExecutarFuncaoServerSideSynch("GetValorExtenso", parametros);
            this.lblValorExtenso.Text = valorExtenso;
            this.MudouDataEmissaoCheque();
            var dataSource;
            var codigos = [];
            dataSource = this.grid.GetSelectedRowsData;
            for (var x = 0; x < dataSource.length; x++) {
                codigos.push(dataSource[x].Codigo);
            }
            var contasSelecionadas = codigos.join(",");
            if (contasSelecionadas == "") {
                MostrarAlerta("Selecione as parcelas");
                return;
            }
            this.mdCheque.Show();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PLote.prototype.BaixarConta = function () {
        var _this = this;
        var valorPagar = 0;
        var contaContabilPadrao = 0;
        var contaCorrentePadrao = "";
        var parametros;
        var dataSource;
        var codigos = [];
        codigos = this.grid.GetSelectedRowsData.map(function (item) { return item.Codigo; });
        if (codigos != null && codigos.length == 0) {
            MostrarAlerta("Selecione as contas que serão pagas");
            return;
        }
        try {
            parametros = {
                codigos: codigos
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GetValorAPagar", parametros, function (d) {
                var retorno = GetRetornoAJAX(d);
                if (retorno.Erro) {
                    MostrarAlerta(retorno.MensagemAlerta);
                    return;
                }
                contaContabilPadrao = retorno.Entidade.ContaContabilPadrao;
                contaCorrentePadrao = retorno.Entidade.ContaCorrentePadrao;
                valorPagar = retorno.Entidade.ValorPagar;
                valorPagar += _this.Conta_Pagar.Juros;
                if (_this.Conta_Pagar.Desconto > valorPagar) {
                    MostrarAlerta("O valor do desconto deve ser menor do que o valor a ser pago");
                    return;
                }
                valorPagar -= _this.Conta_Pagar.Desconto;
                _this.mdBaixar.Mostrar(codigos, ValoresSismoura.NomeTela, ValoresSismoura.UsuarioLogado, valorPagar, contaContabilPadrao, contaCorrentePadrao, _this.Conta_Pagar.Observacao, _this.Conta_Pagar.Juros, _this.Conta_Pagar.Desconto, _this.Conta_Pagar.Data_Emissao, _this.Conta_Pagar.N_Doc_Bancario);
                fecharEspera();
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
    C_PLote.prototype.OnCarregouFuncaoSenhaDarBaixa = function (retorno) {
        if (retorno.Autorizado) {
            this.BaixarConta();
        }
        else {
            MostrarAlerta("Usuário sem permissão para baixar contas que venceram a mais de " + ValoresSismoura.ConfiguracoesRetaguarda.Pedir_Senha_Dar_Baixa + " dias");
            return;
        }
    };
    C_PLote.prototype.PreencherGrade = function () {
        var _this = this;
        var empresas = "";
        var lista = this.lstEmpresa.GetValuesRelacao();
        if (this.validarCamposFiltro()) {
            try {
                var parametros;
                parametros = {
                    dataInicio: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                    dataFim: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                    docMercantil: this.Conta_Pagar.Doc_Merc,
                    fornecedor: this.Conta_Pagar.Codigo_Fornecedor,
                    contaContabil: this.Conta_Pagar.Conta_Contabil,
                    contaCorrente: this.Conta_Pagar.Conta_Corrente,
                    listaEmpresas: lista
                };
                abrirEspera("");
                this.ExecutarFuncaoServerSideAsynch("GetRegistrosCadastrados", parametros, function (d) {
                    var cad = GetRetornoAJAX(d);
                    _this.grid.Grid.deselectAll();
                    _this.grid.PreencherGrid(cad);
                    fecharEspera();
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
    C_PLote.prototype.validarCamposFiltro = function () {
        var empresas = "";
        var lista = this.lstEmpresa.GetValuesRelacao();
        if (lista.length <= 0) {
            MostrarAlerta("Informe a empresa!");
            return;
        }
        if (this.txtPeriodo.textBoxCalendarioInicio.GetDate() == undefined) {
            MostrarAlerta("Informe o período de vencimento");
            return;
        }
        if (this.txtPeriodo.textBoxCalendarioFim.GetDate() == undefined) {
            MostrarAlerta("Informe o período de vencimento");
            return;
        }
        if (this.Conta_Pagar.Conta_Corrente == undefined) {
            this.Conta_Pagar.Conta_Corrente = "";
        }
        if (this.Conta_Pagar.Codigo_Fornecedor == null) {
            this.Conta_Pagar.Codigo_Fornecedor = 0;
        }
        if (this.Conta_Pagar.Conta_Contabil == null) {
            this.Conta_Pagar.Conta_Contabil = 0;
        }
        if (this.Conta_Pagar.Doc_Merc == null) {
            this.Conta_Pagar.Doc_Merc = 0;
        }
        return true;
    };
    C_PLote.prototype.OnPesquisouFornecedor = function () {
        if (CNum(this.txtFornecedor.GetText()) > 0) {
            try {
                var parametros;
                parametros = {
                    codFornecedor: CNum(this.txtFornecedor.GetText()),
                    codUsuario: ValoresSismoura.UsuarioLogado
                };
                var vinculoFornecedor = this.ExecutarFuncaoServerSideSynch("VerificarVinculoFornecedor", parametros);
                if (!vinculoFornecedor) {
                    MostrarAlerta("O fornecedor não possui vínculo com nenhumas das empresas vinculadas ao usuário logado!");
                    this.txtFornecedor.Limpar();
                    return;
                }
            }
            catch (ex) {
                LogarException(ex);
            }
        }
    };
    C_PLote.prototype.LimparCamposImpressaoCheque = function () {
        this.lblValorCheque.Text = "";
        this.lblValorExtenso.Text = "";
        this.cboModeloImpressao.LimparSelecao();
        this.cboContaCorrenteC.Limpar();
        this.txtNumeroCheque.SetText("");
        this.txtNominal.SetText("");
        this.txtDataEmissaoCheque.Date = this.DataServidor();
        this.lblData.Text = "";
    };
    C_PLote.prototype.MudouDataEmissaoCheque = function () {
        if (this.txtDataEmissaoCheque.Date != undefined) {
            var parametros;
            parametros = {
                cidade: this.NomeCidade,
                dataEmissao: this.txtDataEmissaoCheque.Date
            };
            var dataFormatada = this.ExecutarFuncaoServerSideSynch("GetDataFormatadaCheque", parametros);
            this.lblData.Text = dataFormatada;
        }
    };
    C_PLote.prototype.LimparCampos = function () {
        this.Conta_Pagar.Conta_Contabil = 0;
        this.Conta_Pagar.Codigo_Fornecedor = 0;
        this.LimparDadosBaixa();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.Conta_Pagar.Conta_Corrente = "";
        this.Conta_Pagar.N_Doc_Bancario = "";
        var dataInicial = new Date(this.DataServidor().getFullYear(), this.DataServidor().getMonth(), 1);
        this.txtPeriodo.textBoxCalendarioInicio.SetDate(dataInicial);
        this.grid.PreencherGrid(null);
        this.grid.deselectAll();
        this.RefreshAngular();
    };
    C_PLote.prototype.OnBaixouConta = function (s, e) {
        this.LimparCampos();
        //this.PreencherGrade();
    };
    C_PLote.prototype.CalculateCustomSummary = function (s, e) {
        switch (e.options.summaryProcess) {
            case "start":
                this.somaColuna = 0;
                this.counter = 0;
                break;
            case "calculate":
                if (this.grid.Grid.isRowSelected(this.grid.Grid.getSelectedRowKeys()[this.counter])) {
                    if (e.options.name == "Valor") {
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
    C_PLote.prototype.CellPrepared = function (s, e) {
        if (e.rowType == "data") {
            if (this.grid.GetSelectedRowsData.filter(function (item) { return item.Codigo == e.data["Codigo"]; }).length > 0) {
                e.cellElement.css("font-weight", "bold");
            }
            else {
                e.cellElement.css("font-weight", "normal");
            }
        }
    };
    C_PLote.prototype.OnSelecionouLinha = function () {
        this.grid.Refresh();
    };
    return C_PLote;
}(MouraPageRelacaoAngular));
var c_PLote = new C_PLote();
//# sourceMappingURL=C_PLote.js.map