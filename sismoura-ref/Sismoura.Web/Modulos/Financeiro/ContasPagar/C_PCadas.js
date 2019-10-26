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
var C_PCadas = /** @class */ (function (_super) {
    __extends(C_PCadas, _super);
    function C_PCadas() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isContinuarAlterarParcelas = false;
        _this.mudarEmpresa = false;
        //--Flag para definir se houve alteração na grdAlterarParcelas
        _this.flagAlterouParcelas = false;
        //--
        //--Flag para verificar se o usuário quer gravar só a parcela da tela ou as parcelas vinculadas
        _this.flagPrimeiraVez = true;
        _this.flag = false;
        return _this;
    }
    Object.defineProperty(C_PCadas.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "txtFornecedor", {
        get: function () {
            return window['txtFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "txtContaContabil", {
        get: function () {
            return window['txtContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "txtValor", {
        get: function () {
            return window['txtValor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "txtJurosPorc", {
        get: function () {
            return window['txtJurosPorc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "hdnFornecedor", {
        get: function () {
            return $('#hdnFornecedor')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "hdnPago", {
        get: function () {
            return $('#hdnPago')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "hdnData", {
        get: function () {
            return $('#hdnData')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "btnEmitirAutorizacao", {
        get: function () {
            return window['btnEmitirAutorizacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "btnBaixar", {
        get: function () {
            return window['btnBaixar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "grdContas", {
        get: function () {
            return window['grdContas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "hdnURL", {
        get: function () {
            return $('#hdnURL')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "hdnConfiguracoesBloquearClienteEmpresa", {
        get: function () {
            return $('#hdnConfiguracoesBloquearClienteEmpresa')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "btnReplicar", {
        //Replica
        get: function () {
            return window['btnReplicar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "mdReplicar", {
        get: function () {
            return window['mdReplicar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "mdAlterarParcelas", {
        //mdAlterarParcelas
        get: function () {
            return window['mdAlterarParcelas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "grdAlterarParcelas", {
        get: function () {
            return window['grdAlterarParcelas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "btnGravarParcelas", {
        get: function () {
            return window['btnGravarParcelas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "btnSairParcelas", {
        get: function () {
            return window['btnSairParcelas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "Parcela", {
        get: function () {
            var that = this.GetScope()["Parcela"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Parcela"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "Parcelas", {
        get: function () {
            return this.GetScope()["Parcelas"];
        },
        set: function (value) {
            this.GetScope()["Parcelas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "txtQtdeParcela", {
        // Fim dos botões do mdAlterarParcelas
        get: function () {
            return window['txtQtdeParcela_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "cboDias", {
        get: function () {
            return window['cboDias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "txtDias", {
        get: function () {
            return window['txtDias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "txtN_DocBancarioReplicar", {
        get: function () {
            return window['txtN_DocBancarioReplicar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "Replicas", {
        get: function () {
            return this.GetScope()["Replicas"];
        },
        set: function (value) {
            this.GetScope()["Replicas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "grdReplicar", {
        get: function () {
            return window['grdReplicar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "btnOkReplicar", {
        get: function () {
            return window['btnOkReplicar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "btnCancelarReplica", {
        get: function () {
            return window['btnCancelarReplica_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "grdRateioCentroCusto", {
        //Centro Custo
        get: function () {
            return window['grdRateioCentroCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "Custos", {
        get: function () {
            return this.GetScope()["Custos"];
        },
        set: function (value) {
            this.GetScope()["Custos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "txtCentroCusto", {
        get: function () {
            return window['txtCentroCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "txtValorCentroCusto", {
        get: function () {
            return window['txtValorCentroCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "rdTipoRateio", {
        get: function () {
            return window['rdTipoRateio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "txtTipoLancamentoContabil_hdnEmpresaContabil", {
        get: function () {
            return $("#txtTipoLancamentoContabil_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "txtTipoLancamentoContabil", {
        get: function () {
            return window['txtTipoLancamentoContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "dlgAnexo", {
        get: function () {
            return window['dlgAnexo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "btnAnexos", {
        get: function () {
            return window['btnAnexos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "cboEmpOrigem", {
        get: function () {
            return window['cboEmpOrigem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCadas.prototype, "lblFornecedor", {
        get: function () {
            return window['lblFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    //--
    C_PCadas.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        adicionarEventoMoura(this.AntesClickBotaoNovo, this.OnAntesClickBotaoNovo, this);
        if (this.txtFornecedor) {
            adicionarEventoMoura(this.txtFornecedor.Procurou, this.OnDepoisBuscarFornecedor, this);
        }
        if (this.txtJurosPorc) {
            adicionarEventoMoura(this.txtJurosPorc.TextChanged, this.OnDepoisAlterarJuros, this);
        }
        if (this.txtTipoLancamentoContabil) {
            adicionarEventoMoura(this.txtTipoLancamentoContabil.AntesAbrirProcura, this.OnAntesAbrirProcuraTipoLancamento, this);
            adicionarEventoMoura(this.txtTipoLancamentoContabil.Procurou, this.OnProcurouTxtTipoLancamentoContabil, this);
        }
        if (this.txtContaContabil) {
            adicionarEventoMoura(this.txtContaContabil.Procurou, this.OnDepoisBuscarContaContabil, this);
            adicionarEventoMoura(this.txtContaContabil.AntesAbrirProcura, this.OnAntesAbrirProcuraContaContabil, this);
            adicionarEventoMoura(this.txtContaContabil.LostFocus, this.OnPesquisandoContaContabil, this);
        }
        if (this.txtValor) {
            adicionarEventoMoura(this.txtValor.TextChanged, this.OnDepoisAlterarValor, this);
        }
        if (this.btnEmitirAutorizacao) {
            adicionarEventoMoura(this.btnEmitirAutorizacao.Click, this.OnClickBtnEmitirAutorizacao, this);
        }
        if (this.btnBaixar) {
            adicionarEventoMoura(this.btnBaixar.Click, this.OnClickBtnBaixar, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.SelecionarRegistro, this);
        }
        if (this.btnReplicar) {
            adicionarEventoMoura(this.btnReplicar.Click, this.MostrarModalReplica, this);
        }
        if (this.grdReplicar) {
            adicionarEventoMoura(this.grdReplicar.ItemAdicionado, this.OnClickIncluirReplica, this);
            adicionarEventoMoura(this.grdReplicar.LimpouItem, this.OnClickBtnNovoReplica, this);
        }
        if (this.btnOkReplicar) {
            adicionarEventoMoura(this.btnOkReplicar.Click, this.OnClickReplicar, this);
        }
        if (this.btnCancelarReplica) {
            adicionarEventoMoura(this.btnCancelarReplica.Click, this.CancelarReplica, this);
        }
        if (this.grdRateioCentroCusto) {
            adicionarEventoMoura(this.grdRateioCentroCusto.AdicionandoItem, this.OnClickIncluirCusto, this);
            adicionarEventoMoura(this.grdRateioCentroCusto.ItemAdicionado, this.OnCustoAdicionado, this);
        }
        if (this.txtCentroCusto) {
            adicionarEventoMoura(this.txtCentroCusto.Procurou, this.OnDepoisBuscarCentroCusto, this);
        }
        if (this.btnAnexos) {
            adicionarEventoMoura(this.btnAnexos.Click, this.ClicouAnexo, this);
        }
        if (this.grdAlterarParcelas) {
            adicionarEventoMoura(this.grdAlterarParcelas.ItemAlterado, this.OnEditouGridAlterarParcelas, this);
        }
        if (this.btnGravarParcelas) {
            adicionarEventoMoura(this.btnGravarParcelas.Click, this.OnGravouAlterarParcelas, this);
        }
        if (this.btnSairParcelas) {
            adicionarEventoMoura(this.btnSairParcelas.Click, this.OnSairParcelas, this);
        }
    };
    C_PCadas.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().MudouContaCorrente) {
            this.GetScope().MudouContaCorrente = $.proxy(this.MudouContaCorrente, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Conta_Corrente; }, this.GetScope().MudouContaCorrente);
        }
        //ATV 901764
        if (!this.GetScope().MudouTipoDias) {
            this.GetScope().MudouTipoDias = $.proxy(this.MudouTipoDias, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.TipoDias; }, this.GetScope().MudouTipoDias);
        }
        this.PreencherEmpresaContabil(ValoresSismoura.EmpresaPadraoUsuario);
        //this.SetColunasEditaveis();
    };
    C_PCadas.prototype.OnAntesAbrirProcuraTipoLancamento = function (s, e) {
        this.txtTipoLancamentoContabil.LimparParametros();
        this.txtTipoLancamentoContabil.AddParametro("TipoConfiguracaoContabil", "CPCA");
        this.txtTipoLancamentoContabil.AddParametro("codEmpresa", this.cboContaCorrente.GetEmpresa().toString());
    };
    C_PCadas.prototype.PreencherEmpresaContabil = function (codEmpresa) {
        if (this.txtTipoLancamentoContabil_hdnEmpresaContabil != undefined) {
            this.txtTipoLancamentoContabil_hdnEmpresaContabil.value = codEmpresa;
        }
    };
    C_PCadas.prototype.OnPesquisandoContaContabil = function (e) {
        if (!this.EntityTela.Conta_Contabil) {
            return;
        }
        if (this.flag) {
            return;
        }
        var contaContabil = this.EntityTela.Conta_Contabil;
        this.txtContaContabil.SetText("");
        this.EntityTela.Conta_Contabil = null;
        this.RefreshAngular();
        var parametros = {
            codConta: contaContabil
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("OnPesquisandoContaContabil", parametros);
        if (retorno.Existente) {
            if (!retorno.Analitica) {
                MostrarAlerta("Você não pode usar uma Conta Sintética!");
                this.EntityTela.Conta_Contabil = 0;
                //this.txtContaContabil.Limpar();
                this.txtContaContabil.Focus();
                this.flag = false;
                return;
            }
            if (!this.VerificarContabilEmpresa(contaContabil, this.EntityTela.Conta_Corrente)) {
                this.flag = false;
                return;
            }
            this.EntityTela.Conta_Contabil = contaContabil;
            this.txtContaContabil.Procurar(contaContabil.toString());
            this.RefreshAngular();
            if (!this.flag) {
                this.flag = true;
                return;
            }
        }
        else {
            MostrarAlerta("A Conta Contábil informada não existe ou não está vinculada a esta empresa!");
            this.flag = false;
        }
    };
    C_PCadas.prototype.MudouContaCorrente = function (newValue, oldValue) {
        if (this.EntityTela.Empresa_Origem <= 0 || this.EntityTela.Empresa_Origem == null) {
            this.cboEmpOrigem.Combo.SetText("");
        }
        if (this.cboContaCorrente.Combo.GetValue() != null) {
            if (this.mudarEmpresa == false) {
                this.cboEmpOrigem.SetValue(this.cboContaCorrente.GetEmpresa());
                this.EntityTela.Empresa_Origem = this.cboEmpOrigem.GetValue().CNum();
            }
        }
        this.mudarEmpresa = false;
        this.txtCentroCusto.LimparParametros();
        this.txtCentroCusto.AddParametro("EmpresaCc", "" + this.cboContaCorrente.GetEmpresa());
        this.OnDepoisBuscarCentroCusto();
        this.VerificarCentroCustoGrade(newValue, oldValue);
        if (!this.VerificarContabilEmpresa(this.EntityTela.Conta_Contabil, this.EntityTela.Conta_Corrente)) {
            this.EntityTela.Conta_Contabil = 0;
            this.txtContaContabil.Limpar();
        }
        if (oldValue) {
            this.txtTipoLancamentoContabil.Limpar();
        }
        this.PreencherEmpresaContabil(this.cboContaCorrente.GetEmpresa());
    };
    C_PCadas.prototype.VerificarCentroCustoGrade = function (newValue, oldValue) {
        if (this.Custos && this.Custos.length > 0) {
            if (!this.EntityTela.Conta_Corrente) {
                return;
            }
            for (var x = 0; x < this.Custos.length; x++) {
                var parametros = {
                    codCentroCusto: this.Custos[x].Centro_Custo_Codigo,
                    contaCorrente: this.EntityTela.Conta_Corrente
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("VerificarEmpresas", parametros);
                if (!retorno) {
                    MostrarAlerta("A empresa da conta corrente informada não possui vínculo com todos os Centros de Custo encontrados na grade de Rateio por Centro de Custo");
                    this.EntityTela.Conta_Corrente = oldValue;
                    break;
                }
            }
            return;
        }
    };
    C_PCadas.prototype.MudouTipoDias = function () {
        if (this.EntityTela.TipoDias == "F") {
            this.txtDias.SetTextLabelControl("Dia");
        }
        else {
            this.txtDias.SetTextLabelControl("Dias");
        }
    };
    C_PCadas.prototype.OnDepoisBuscarCentroCusto = function () {
        if (this.txtCentroCusto.GetText() != "") {
            var parametros;
            parametros = {
                codCentroCusto: this.txtCentroCusto.GetText().CNum(),
                contaCorrente: this.EntityTela.Conta_Corrente
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificarEmpresas", parametros);
            if (!retorno) {
                MostrarAlerta("Centro de Custo informado não está vinculada a empresa da conta corrente, utilizar a tela Cadastro de Centro de Custo para corrigir esta situação");
                this.txtCentroCusto.Limpar();
                this.txtCentroCusto.Focus();
                return;
            }
        }
    };
    C_PCadas.prototype.OnGravouSucesso = function (s, e) {
        this.hdnData.value = "";
    };
    C_PCadas.prototype.OnExcluiuSucesso = function (s, e) {
    };
    C_PCadas.prototype.OnAntesClickBotaoNovo = function (s, e) {
        this.hdnFornecedor.value = "";
    };
    C_PCadas.prototype.OnDepoisLimpar = function (Entity) {
        Entity.Data_Emissao = new Date();
        this.hdnPago.value = "";
        this.hdnData.value = "";
        this.cboContaCorrente.Combo.SetSelectedIndex(-1);
        this.cboEmpOrigem.Combo.SetSelectedIndex(-1);
        if (this.cboContaCorrente.Combo.GetItemCount() == 1) {
            this.cboEmpOrigem.Enabled = false;
        }
        //this.cboContaCorrente.Limpar();
        this.txtQtdeParcela.SetText("");
        this.txtDias.SetText("");
        this.rdTipoRateio.SetValue("V");
        this.Replicas = [];
        this.Custos = [];
        this.grid.PreencherGrid(null);
        this.grid.Refresh;
        if (this.hdnFornecedor.value.CNum() > 0) {
            Entity.Codigo_Fornecedor = this.hdnFornecedor.value.CNum();
            this.OnDepoisBuscarFornecedor();
        }
        this.LimparPastaTempAnexos();
    };
    C_PCadas.prototype.OnAntesSetEntidade = function (eventArg) {
        _super.prototype.OnAntesSetEntidade.call(this, eventArg);
        if (eventArg.Entidade.Codigo > 0) {
            eventArg.Entidade.Usuario_Alterou = ValoresSismoura.UsuarioLogado;
            var param = {
                codigo: eventArg.Entidade.Codigo,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            if (!this.ExecutarFuncaoServerSideSynch("isContaEmpresaUsuario", param)) {
                this.Limpar();
                this.txtCodigo.Focus();
                eventArg.Cancelar = true;
                MostrarAlerta("A Conta a Pagar não pertence a empresa vinculada ao usuário logado no sistema!");
                return;
            }
            this.cboContaCorrente.Combo.SetValue(eventArg.Entidade.Conta_Corrente);
            this.cboContaCorrente.AtualizarLabels();
            this.cboEmpOrigem.Combo.SetValue(eventArg.Entidade.Empresa_Origem);
            this.mudarEmpresa = true;
            if (eventArg.Entidade.Pago) {
                this.hdnPago.value = "S";
            }
            else {
                this.hdnPago.value = "N";
            }
            if (!eventArg.Entidade.CentrosCusto) {
                eventArg.Entidade.CentrosCusto = [];
            }
            var parametros = {
                codPagar: eventArg.Entidade.Codigo
            };
            var centroCustos = this.ExecutarFuncaoServerSideSynch("GetCentroCustoRetorno", parametros);
            if (centroCustos.length > 0) {
                this.Custos = centroCustos;
            } //else {
            //this.Custos = []
            //}
        }
    };
    C_PCadas.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
    };
    C_PCadas.prototype.SelecionarRegistro = function (s, e) {
        this.PreencherEntidade(e.data.Codigo);
    };
    C_PCadas.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (this.hdnPago.value == "S") {
            MostrarAlerta("Esta conta já foi paga, não será possível alterá-la!");
            return false;
        }
        var entidade = this.GetScope().Entity;
        entidade.Conta_Corrente = this.cboContaCorrente.Combo.GetValue();
        //Validacoes aqui
        if (entidade.Codigo_Fornecedor <= 0) {
            MostrarAlerta("Informe o fornecedor.");
            return false;
        }
        if (entidade.Doc_Merc <= 0) {
            MostrarAlerta("Informe o documento mercantil.");
            return false;
        }
        if (entidade.Parcela <= 0 || entidade.Parcela == undefined) {
            MostrarAlerta("Informe o parcela.");
            return false;
        }
        if (entidade.Conta_Corrente == "" || entidade.Conta_Corrente == null) {
            MostrarAlerta("Informe a conta corrente.");
            return false;
        }
        if (entidade.Conta_Contabil <= 0 || entidade.Conta_Contabil == undefined || entidade.Conta_Contabil == null) {
            MostrarAlerta("Informe a conta contábil.");
            return false;
        }
        if (ValoresSismoura.UtilizarModuloContabil) {
            if (entidade.Configuracao_Lancamento <= 0 || entidade.Configuracao_Lancamento == undefined || entidade.Configuracao_Lancamento == null) {
                MostrarAlerta("Informe o tipo de lançamento contábil.");
                return false;
            }
        }
        entidade.CentrosCusto = [];
        var centroC = {};
        this.Custos.forEach(function (custo) {
            centroC.Centro_Custo = custo.Centro_Custo_Codigo;
            centroC.Valor = custo.Valor;
            centroC.Id = custo.Id;
            entidade.CentrosCusto.push(centroC);
        });
        var parametros = {
            contaContabil: entidade.Conta_Contabil
        };
        if (this.hdnData.value == "" || this.hdnData.value == undefined || this.hdnData.value == null) {
            if (typeof entidade.Data_Vencimento == "string") {
                var aux = entidade.Data_Vencimento;
                entidade.Data_Vencimento = ("" + aux).ToDate();
            }
            if (typeof entidade.Data_Emissao == "string") {
                var aux = entidade.Data_Emissao;
                entidade.Data_Emissao = ("" + aux).ToDate();
            }
            if (entidade.Data_Vencimento < entidade.Data_Emissao) {
                MsgBoxJS("A data de emissão está maior que a data de vencimento. Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouOpcaoMsgBoxData, this));
                return false;
            }
        }
        var Codigo_Entrada = entidade.Codigo_Entrada;
        if (Codigo_Entrada && !this.isContinuarAlterarParcelas) {
            var parametros_1 = { Codigo_Entrada: Codigo_Entrada };
            this.ExecutarFuncaoServerSideAsynch('GetParcelasPendentesContasPagar', parametros_1, this.AlterarParcelasPendentes, this.TratarErroFuncaoAsync, this);
            return false;
        }
        this.isContinuarAlterarParcelas = false;
        return true;
    };
    C_PCadas.prototype.OnSelecionouOpcaoMsgBoxData = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            this.hdnData.value = "Passou";
            this.ClicarGravar();
        }
        else {
            this.hdnData.value = "";
        }
    };
    C_PCadas.prototype.OnAntesDeletar = function () {
        _super.prototype.OnAntesDeletar.call(this);
        if (this.hdnPago.value == "S") {
            MostrarAlerta("Esta conta já foi paga, não será possível excluí-la!");
            return false;
        }
        return true;
    };
    C_PCadas.prototype.OnDepoisBuscarFornecedor = function () {
        this.hdnFornecedor.value = this.txtFornecedor.GetText();
        if (this.txtFornecedor.GetText().CNum() <= 0) {
            return;
        }
        //if (!this.EntityTela.Codigo) {
        if (!CNum(this.txtCodigo.GetText())) {
            var parametros = {
                codFornecedor: this.txtFornecedor.GetText().CNum()
            };
            var contaContabil = this.ExecutarFuncaoServerSideSynch("ObterCodContaContabil", parametros);
            if (contaContabil) {
                this.txtContaContabil.Procurar(contaContabil.toString());
            }
        }
        this.PreencherGridContas(); //ATV 901764: Foi necessário separar o método de preenchimento da grid de contas p/ preencher novamente ao replicar contas.
    };
    C_PCadas.prototype.PreencherGridContas = function () {
        var permitidaFuncionario;
        var retorno;
        var parametros = {
            codFornecedor: this.txtFornecedor.GetText().CNum(),
            codEmpresa: ValoresSismoura.EmpresaPadraoUsuario,
            codUsuario: ValoresSismoura.UsuarioLogado
        };
        permitidaFuncionario = this.ExecutarFuncaoServerSideSynch("isFornecedorEmpresa", parametros);
        if (!permitidaFuncionario) {
            MostrarAlerta("O fornecedor não pertence as empresas vinculadas ao usuário!");
            this.txtFornecedor.Limpar();
            return;
        }
        retorno = this.ExecutarFuncaoServerSideSynch("ImportarContas", parametros);
        this.grid.PreencherGrid(retorno);
    };
    C_PCadas.prototype.OnDepoisAlterarJuros = function () {
        var entidade = this.GetScope().Entity;
        this.CalculaValor(entidade);
    };
    C_PCadas.prototype.OnProcurouTxtTipoLancamentoContabil = function () {
        var retorno;
        var parametros = {
            codigo: this.txtTipoLancamentoContabil.GetText().CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("getContabilConfiguracaoLancamento", parametros);
        if (retorno) {
            if (retorno.Tipo_Configuracao != "CPCA") {
                MostrarAlerta("O tipo de configuração não é referente a Contas a Pagar");
                this.txtTipoLancamentoContabil.Limpar();
            }
        }
    };
    C_PCadas.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGridContas();
        return true;
    };
    C_PCadas.prototype.OnDepoisAlterarValor = function () {
        var entidade = this.GetScope().Entity;
        this.CalculaValor(entidade);
    };
    C_PCadas.prototype.CalculaValor = function (Entidade) {
        var valor = Entidade.Valor;
        var juros = Entidade.Juros_Porc;
        if (valor > 0 && juros > 0) {
            var resultado = valor + ((valor / 100) * juros);
            Entidade.Valor = resultado;
            this.GetScope().$applyAsync();
        }
    };
    C_PCadas.prototype.MostrarModalReplica = function (s, e) {
        e.processOnServer = false;
        if (this.hdnPago.value == "S") {
            MostrarAlerta("Esta conta já foi baixada, não será possível replica-la!");
        }
        else {
            if (this.txtCodigo.GetText().CNum() <= 0) {
                MostrarAlerta("Informe uma conta cadastrada para replica-la");
                e.cancelEventAndBubble = true;
                return;
            }
            var retorno = void 0;
            var replicada = void 0;
            var parametros = {
                codigo: this.txtCodigo.GetText().CNum()
            };
            retorno = this.ExecutarFuncaoServerSideSynch("CarregarContasPagar", parametros);
            if (!retorno) {
                MostrarAlerta("Insira uma conta cadastrada para replica-la!");
                e.cancelEventAndBubble = true;
                return;
            }
            replicada = this.ExecutarFuncaoServerSideSynch("VerificarReplicadoPago", parametros);
            if (replicada) {
                MostrarAlerta("A conta informada já foi replicada e existem parcelas pagas. Para replicar novamente, realize o estorno.");
                e.cancelEventAndBubble = true;
                return;
            }
            if (retorno.Replicado > 0) {
                MostrarAlerta("Para replicar utilize a conta: " + retorno.Replicado);
                e.cancelEventAndBubble = true;
                return;
            }
            if (retorno.Parcela != 1) {
                MostrarAlerta("A Conta só poderá ser replicada da parcela 1. <br> Caso existam mais parcelas, apague-as e replique!");
                e.cancelEventAndBubble = true;
                return;
            }
            this.MudouTipoDias(); //ATV: 901764
            this.mdReplicar.Show();
            this.grdReplicar.Grid.AjustarWidth();
            this.grdReplicar.Grid.PreencherGrid(null);
        }
    };
    C_PCadas.prototype.OnClickBtnNovoReplica = function (s, e) {
        this.txtQtdeParcela.SetText("");
        this.txtDias.SetText("");
        this.txtN_DocBancarioReplicar.SetText("");
        //this.EntityTela.TipoDias = "";  //ATV: 901764: Combo
        this.cboDias.Combo.SetSelectedIndex(-1);
    };
    C_PCadas.prototype.OnClickIncluirReplica = function (s, e) {
        if (this.EntityTela.TipoDias == 'F' && this.txtDias.GetText().CNum() > 31) {
            MostrarAlerta("Informe um dia menor ou igual a 31");
            e.cancelar = true;
            return;
        }
        else {
            this.Replicas = [];
            var parametros = {
                codigo: this.txtCodigo.GetText().CNum(),
                tipoDias: this.cboDias.GetValue(),
                dias: this.txtDias.GetText().CNum(),
                qtdParcelas: this.txtQtdeParcela.GetText().CNum(),
                nDoc: this.txtN_DocBancarioReplicar.GetText(),
                Data_Emissao: this.EntityTela.Data_Emissao
            };
            var listaReplica = this.ExecutarFuncaoServerSideSynch("AdicionarParcelaReplicada", parametros);
            var replica = e.item;
            for (var x = 0; x < listaReplica.length; x++) {
                replica = {};
                replica.Data_Vencimento = listaReplica[x].Data_Vencimento;
                replica.Data_Emissao = this.EntityTela.Data_Emissao;
                replica.Parcela = listaReplica[x].Parcela;
                replica.Valor = listaReplica[x].Valor;
                replica.N_Doc_Bancario = listaReplica[x].N_Doc_Bancario;
                this.Replicas.push(replica);
            }
        }
    };
    C_PCadas.prototype.OnClickReplicar = function (s, e) {
        e.processOnServer = false;
        var entidade = this.GetScope().Entity;
        if (this.Replicas.length > 0) {
            MsgBoxJS("Deseja realmente replicar a conta a pagar? <br /> Caso já exista replicamento da conta selecionada, as parcelas serão excluídas e geradas novamente.", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouOpcaoMsgBox, this));
        }
        else {
            MostrarAlerta("Nenhuma conta inserida para replicar.");
        }
    };
    C_PCadas.prototype.OnSelecionouOpcaoMsgBox = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            this.Replicar();
        }
    };
    C_PCadas.prototype.Replicar = function () {
        var retorno;
        var parametros = {
            codigo: this.txtCodigo.GetText().CNum(),
            listaReplica: this.Replicas,
            tela: ValoresSismoura.NomeTela,
            codUsuario: ValoresSismoura.UsuarioLogado
        };
        abrirEspera();
        this.ExecutarFuncaoServerSideAsynch("Replicar", parametros, this.OnReplicouSucesso, this.OnErroReplicou, this);
    };
    C_PCadas.prototype.OnReplicouSucesso = function (d) {
        fecharEspera();
        var retorno = JSON.parse(d);
        if (retorno.d) {
            MostrarMensagem(retorno.d);
        }
        this.Replicas = [];
        this.EntityTela.TipoDias = ""; //ATV 901764
        this.mdReplicar.Hide();
        this.PreencherGridContas(); //ATV 901764
    };
    C_PCadas.prototype.OnErroReplicou = function (error) {
        fecharEspera();
        LogarExceptionAjax(error);
    };
    C_PCadas.prototype.CancelarReplica = function (s, e) {
        e.processOnServer = false;
        this.txtQtdeParcela.SetText("");
        this.txtDias.SetText("");
        this.txtN_DocBancarioReplicar.SetText("");
        this.EntityTela.TipoDias = "";
        this.Replicas = [];
        this.grdReplicar.Limpar();
        this.mdReplicar.Hide();
    };
    C_PCadas.prototype.CarregarCentroCusto = function (codCentroCusto) {
        if (codCentroCusto <= 0) {
            this.Custos = [];
        }
        else {
            var retorno = void 0;
            var parametros = void 0;
            parametros = {
                codCentroCusto: codCentroCusto
            };
            retorno = this.ExecutarFuncaoServerSideSynch("CarregarCentroCusto", parametros);
            return retorno;
        }
    };
    C_PCadas.prototype.OnClickIncluirCusto = function (s, e) {
        var centroCusto = e.item;
        var vlrCentroCusto = this.txtValorCentroCusto.GetText().CNum();
        var valor = this.txtValor.GetText().CNum();
        var valorInformado = 0;
        for (var x = 0; x < this.Custos.length; x++) {
            valorInformado = valorInformado + this.Custos[x].Porcentagem;
        }
        if (this.rdTipoRateio.GetValue() == "P") {
            valorInformado = valorInformado + vlrCentroCusto;
        }
        else {
            valorInformado = valorInformado + (vlrCentroCusto * 100 / valor).Format(2).CNum();
        }
        if (valorInformado > 100) {
            MostrarAlerta("Valor informado ultrapassa 100% do total do lançamento");
            e.cancelar = true;
            return;
        }
        for (var x = 0; x < this.Custos.length; x++) {
            if (this.Custos[x].Centro_Custo_Codigo == centroCusto.Centro_Custo_Codigo) {
                MostrarAlerta("Centro de custo já inserido.");
                e.cancelar = true;
                return;
            }
        }
        if (this.txtValor.GetText().CNum() <= 0) {
            MostrarAlerta("Informe o valor da conta a pagar.");
            e.cancelar = true;
            return;
        }
        if (this.txtCentroCusto.GetText() == "") {
            MostrarAlerta("Informe o código do Centro de Custo.");
            e.cancelar = true;
            return;
        }
        if (this.txtValorCentroCusto.GetText().CNum() <= 0) {
            MostrarAlerta("Informe o valor do Centro de Custo.");
            e.cancelar = true;
            return;
        }
        if (this.rdTipoRateio.GetValue() == "P" && this.txtValorCentroCusto.GetText().CNum() > 100) {
            MostrarAlerta("Ao selecionar o tipo '%', o valor do ventro de custo não pode ser maior do que 100.");
            e.cancelar = true;
            return;
        }
        var entidade = this.CarregarCentroCusto(this.txtCentroCusto.GetText().CNum());
        centroCusto.Centro_Custo_Codigo = entidade.Codigo;
        centroCusto.Centro_Custo_Descricao = entidade.Descricao;
        centroCusto.Centro_Custo = entidade.Cc;
        if (this.rdTipoRateio.GetValue() == "P") {
            centroCusto.Porcentagem = vlrCentroCusto;
            centroCusto.Valor = (valor * vlrCentroCusto / 100).Format(2).CNum();
        }
        else {
            centroCusto.Porcentagem = (vlrCentroCusto * 100 / valor).Format(2).CNum();
            centroCusto.Valor = vlrCentroCusto;
        }
    };
    C_PCadas.prototype.OnCustoAdicionado = function (s, e) {
        var centroCusto = e.item;
        var valor = this.txtValor.GetText().CNum();
        var totalAdicionado = 0;
        for (var x = 0; x < this.Custos.length; x++) {
            this.Custos[x].Porcentagem = (this.Custos[x].Valor * 100 / valor).Format(2).CNum();
            totalAdicionado += this.Custos[x].Valor;
        }
        totalAdicionado -= centroCusto.Valor;
        if (centroCusto.Valor > (valor - totalAdicionado)) {
            centroCusto.Valor = (valor - totalAdicionado);
        }
    };
    C_PCadas.prototype.PreencherCustos = function (entidade) {
        var custos = this.Custos;
        entidade.CentrosCusto = [];
        for (var x = 0; x < custos.length; x++) {
            var novoCusto = {};
            var custoGrid = void 0;
            custoGrid = custos[x];
            novoCusto.Cod_Pagar = this.txtCodigo.GetText().CNum();
            novoCusto.Id = custoGrid.Id;
            novoCusto.Centro_Custo = custoGrid.Centro_Custo_Codigo;
            novoCusto.Valor = custoGrid.Valor;
            entidade.CentrosCusto.push(novoCusto);
        }
    };
    C_PCadas.prototype.OnClickBtnEmitirAutorizacao = function (s, e) {
        if (!this.txtCodigo.GetText().CNum()) {
            MostrarAlerta("Selecione uma conta para emissão.");
            e.processOnServer = false;
        }
    };
    C_PCadas.prototype.OnClickBtnBaixar = function (s, e) {
        var codigo = this.txtCodigo.GetText().CNum();
        if (!codigo) {
            MostrarAlerta("Selecione uma conta para baixar.");
            e.processOnServer = false;
        }
        else {
            var codConta = codigo;
            var url = this.hdnURL.value;
            if (codConta > 0) {
                abrirTelaNovaAbaCodigo(url, codConta.toString());
            }
        }
    };
    C_PCadas.prototype.OnAntesAbrirProcuraContaContabil = function (s, e) {
        if (String.IsNullOrWhiteSpace(this.cboContaCorrente.GetContaCorrente())) {
            MsgBoxJS("Informe uma conta corrente para procurar uma conta contábil", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, null, null);
            e.Cancelar = true;
            return;
        }
        this.txtContaContabil.LimparParametros();
        this.txtContaContabil.AddParametro("Empresa", "" + this.cboContaCorrente.GetEmpresa());
        this.txtContaContabil.AddParametro("contasPagar", "True");
    };
    C_PCadas.prototype.OnDepoisBuscarContaContabil = function () {
        var entidade = this.GetScope().Entity;
        var permitidaUsuario;
        var retorno;
        if (entidade.Conta_Contabil <= 0 || entidade.Conta_Contabil == undefined) {
            return;
        }
        var parametros = {
            codContaContabil: entidade.Conta_Contabil
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetByCod", parametros);
        if (retorno.Sintetico == "S") {
            MostrarAlerta("Você não pode usar uma Conta Sintética!");
            this.txtContaContabil.Limpar();
            return;
        }
        if (!retorno.Pagar) {
            MostrarAlerta("A Conta Contábil não pode ser lançada na Contas a Pagar!. Para utilizar a Conta Contábil nessa tela, entre no Cadastro de Conta Contábil e marque o Check Contas a Pagar.");
            this.txtContaContabil.Limpar();
            return;
        }
        if (!this.VerificarContabilEmpresa(entidade.Conta_Contabil, this.EntityTela.Conta_Corrente)) {
            this.txtContaContabil.Limpar();
            return;
        }
    };
    C_PCadas.prototype.VerificarContabilEmpresa = function (codContabil, contaCorrente) {
        if (codContabil == null || codContabil == 0) {
            this.EntityTela.Conta_Contabil = 0;
            return false;
        }
        if (contaCorrente) {
            var parametros = {
                codContabil: codContabil,
                contaCorrente: contaCorrente
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificarContabilEmpresa", parametros);
        }
        else {
            return true;
        }
        if (!retorno) {
            MostrarAlerta("A conta contábil deve pertencer a mesma empresa da conta corrente!");
            this.EntityTela.Conta_Contabil = 0;
            this.txtContaContabil.Focus();
            return false;
        }
        else {
            return true;
        }
    };
    C_PCadas.prototype.ClicouAnexo = function (s, e) {
        var path;
        try {
            var parametros = void 0;
            if (this.EntityTela.Codigo > 0) {
                parametros = {
                    codigo: this.EntityTela.Codigo
                };
            }
            else {
                parametros = {
                    codigo: 0
                };
            }
            path = this.ExecutarFuncaoServerSideSynch("ObterPath", parametros);
            this.dlgAnexo.MostrarClient(path);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PCadas.prototype.LimparPastaTempAnexos = function () {
        try {
            var parametros = {};
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("LimparPastaTempAnexos", parametros, function (d) {
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
    C_PCadas.prototype.AlterarParcelasPendentes = function (d) {
        var _this = this;
        try {
            var parcelasPendentes_1 = GetRetornoAJAX(d);
            if (this.flagPrimeiraVez) {
                if (parcelasPendentes_1.length > 1) {
                    MsgBoxJS('Existem mais parcelas para esta conta, Deseja alterá-las?', MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                        if (result.Resultado === MsgBoxResult.Yes) {
                            _this.grdAlterarParcelas.Grid.PreencherGrid(parcelasPendentes_1);
                            _this.Parcelas = parcelasPendentes_1;
                            _this.lblFornecedor.Text = _this.txtFornecedor.LabelResultado.textContent;
                            _this.mdAlterarParcelas.Show();
                            _this.isContinuarAlterarParcelas = false;
                            _this.hdnData.value = '';
                            _this.RefreshAngular();
                        }
                        else {
                            _this.ContinuarAlterandoParcelas();
                            _this.flagPrimeiraVez = true;
                        }
                    });
                }
                else {
                    this.ContinuarAlterandoParcelas();
                    this.flagPrimeiraVez = true;
                }
            }
            else {
                this.ContinuarAlterandoParcelas();
                this.flagPrimeiraVez = true;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PCadas.prototype.ContinuarAlterandoParcelas = function () {
        this.isContinuarAlterarParcelas = true;
        this.ClicarGravar();
    };
    C_PCadas.prototype.SetColunasEditaveis = function () {
        var _this = this;
        try {
            this.grdAlterarParcelas.Grid.Colunas.forEach(function (coluna) {
                _this.grdAlterarParcelas.Grid.SetColunaEditavel(coluna.FieldName, coluna.IsEditavel);
            });
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PCadas.prototype.OnEditouGridAlterarParcelas = function (s, e) {
        try {
            this.flagAlterouParcelas = true;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PCadas.prototype.OnGravouAlterarParcelas = function () {
        if (this.flagAlterouParcelas) {
            //--validações de campos obrigatórios na grade para alterar as parcelas 
            var msgCampoObrigatorio = '';
            for (var i = 0; i < this.Parcelas.length; i++) {
                var parcela = this.Parcelas[i];
                if (!parcela.Parcela) {
                    msgCampoObrigatorio += "Informe a 'Número da Parcela' para a parcela: " + parcela.Parcela + "<br>";
                }
                if (!parcela.Data_Vencimento) {
                    msgCampoObrigatorio += "Informe a 'Data de vencimento' para a parcela: " + parcela.Parcela + "<br>";
                }
                if (!parcela.Conta_Corrente) {
                    msgCampoObrigatorio += "Informe a 'Conta Corrente' para a parcela: " + parcela.Parcela + "<br>";
                }
                if (!parcela.Conta_Contabil) {
                    msgCampoObrigatorio += "Informe a 'Conta Contábil' para a parcela: " + parcela.Parcela + "<br>";
                }
            }
            //--
            if (!String.IsNullOrWhiteSpace(msgCampoObrigatorio)) {
                MostrarAlerta(msgCampoObrigatorio);
                return;
            }
            var parametros = {
                Parcelas: this.Parcelas,
                Tela: ValoresSismoura.NomeTela
            };
            this.ExecutarFuncaoServerSideAsynch('AlterarParcelasPendentes', parametros, null, this.TratarErroFuncaoAsync, this);
            MostrarMensagem("As parcelas foram alteradas com sucesso!");
            this.flagAlterouParcelas = false;
            this.mdAlterarParcelas.Hide();
            this.flagPrimeiraVez = true;
        }
        else {
            MostrarAlerta("Nenhuma parcela foi alterada!");
            this.flagAlterouParcelas = false;
            this.mdAlterarParcelas.Hide();
            this.flagPrimeiraVez = true;
        }
    };
    C_PCadas.prototype.OnSairParcelas = function () {
        var _this = this;
        if (this.flagAlterouParcelas) {
            MsgBoxJS('Deseja salvar as alterações?', MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado === MsgBoxResult.Yes) {
                    _this.OnGravouAlterarParcelas();
                }
                else {
                    _this.flagAlterouParcelas = false;
                    _this.mdAlterarParcelas.Hide();
                    MostrarAlerta("Nenhuma parcela foi alterada!");
                    _this.flagPrimeiraVez = false;
                }
            });
        }
        else {
            this.flagAlterouParcelas = false;
            this.mdAlterarParcelas.Hide();
            MostrarAlerta("Nenhuma parcela foi alterada!");
            this.flagPrimeiraVez = false;
        }
    };
    return C_PCadas;
}(MouraPageCadastroAngular));
var c_PCadas = new C_PCadas();
//# sourceMappingURL=C_PCadas.js.map