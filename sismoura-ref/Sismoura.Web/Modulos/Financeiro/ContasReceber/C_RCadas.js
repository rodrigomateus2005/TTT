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
var C_RCadas = /** @class */ (function (_super) {
    __extends(C_RCadas, _super);
    function C_RCadas() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isContinuarAlterarParcelas = false;
        //--Flag para definir se houve alteração na grdAlterarParcelas
        _this.flagAlterouParcelas = false;
        //--
        //--Flag para verificar se o usuário quer gravar só a parcela da tela ou as parcelas vinculadas
        _this.flagPrimeiraVez = true;
        return _this;
    }
    Object.defineProperty(C_RCadas.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "txtTipoLancamentoContabil", {
        get: function () {
            return window['txtTipoLancamentoContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "txtTipoLancamentoContabil_hdnEmpresaContabil", {
        get: function () {
            return $("#txtTipoLancamentoContabil_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "txtContaContabil", {
        get: function () {
            return window['txtContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "txtUsuarioResponsavel", {
        get: function () {
            return window['txtUsuarioResponsavel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "hdnBaixa", {
        get: function () {
            return $('#hdnBaixa')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "hdnData", {
        get: function () {
            return $('#hdnData')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "txtValor", {
        get: function () {
            return window['txtValor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "hdnConfiguracoesBloquearClienteEmpresa", {
        get: function () {
            return $('#hdnConfiguracoesBloquearClienteEmpresa')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "btnReplicar", {
        //Replica
        get: function () {
            return window['btnReplicar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "mdReplicar", {
        get: function () {
            return window['mdReplicar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "txtQtdeParcela", {
        get: function () {
            return window['txtQtdeParcela_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "cboDias", {
        get: function () {
            return window['cboDias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "txtDias", {
        get: function () {
            return window['txtDias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "txtTipoLancamentoContabilReplica", {
        get: function () {
            return window['txtTipoLancamentoContabilReplica_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "txtTipoLancamentoContabilReplica_hdnEmpresaContabil", {
        get: function () {
            return $("#txtTipoLancamentoContabilReplica_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "lblCliente", {
        //get Replicas(): SiSMoura.Core.Entity.ContasReceberReplicadoRetorno[] {
        //    return this.GetScope()["Replicas"];
        //}
        //set Replicas(value: SiSMoura.Core.Entity.ContasReceberReplicadoRetorno[]) {
        //    this.GetScope()["Replicas"] = value;
        //}
        get: function () {
            return window['lblCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "Replicas", {
        get: function () {
            return this.GetScope()["Replicas"];
        },
        set: function (value) {
            this.GetScope()["Replicas"] = value;
            this.RefreshAngular();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "grdReplicar", {
        //get Replica(): any {
        //    var that = this.GetScope()["Replica"];
        //    if (!that) {
        //        that = {};
        //    }
        //    return that;
        //}
        //set Replica(value: any) {
        //    this.GetScope()["Replica"] = value;
        //}
        get: function () {
            return window['grdReplicar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "btnOkReplicar", {
        get: function () {
            return window['btnOkReplicar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "btnCancelarReplica", {
        get: function () {
            return window['btnCancelarReplica_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "grdRateioCentroCusto", {
        //Centro Custo
        get: function () {
            return window['grdRateioCentroCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "Custo", {
        get: function () {
            var that = this.GetScope()["Custo"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Custo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "Custos", {
        get: function () {
            return this.GetScope()["Custos"];
        },
        set: function (value) {
            this.GetScope()["Custos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "txtCentro_Custo", {
        get: function () {
            return window['txtCentro_Custo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "txtValorCentroCusto", {
        get: function () {
            return window['txtValorCentroCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "rdTipoRateio", {
        get: function () {
            return window['rdTipoRateio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "txtCentroCusto", {
        get: function () {
            return window['txtCentroCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "mdAlterarParcelas", {
        //mdAlterarParcelas
        get: function () {
            return window['mdAlterarParcelas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "grdAlterarParcelas", {
        get: function () {
            return window['grdAlterarParcelas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "btnGravarParcelas", {
        get: function () {
            return window['btnGravarParcelas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "btnSairParcelas", {
        get: function () {
            return window['btnSairParcelas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "Parcela", {
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
    Object.defineProperty(C_RCadas.prototype, "Parcelas", {
        get: function () {
            return this.GetScope()["Parcelas"];
        },
        set: function (value) {
            this.GetScope()["Parcelas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RCadas.prototype, "Centro_Custo", {
        // Fim dos botões do mdAlterarParcelas
        get: function () {
            var that = this.GetScope()["Centro_Custo"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Centro_Custo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    //--
    C_RCadas.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.txtCliente) {
            adicionarEventoMoura(this.txtCliente.Procurou, this.OnDepoisBuscarCliente, this);
        }
        if (this.txtTipoLancamentoContabil) {
            adicionarEventoMoura(this.txtTipoLancamentoContabil.Procurou, this.OnProcurouTxtTipoLancamentoContabil, this);
        }
        if (this.txtTipoLancamentoContabilReplica) {
            adicionarEventoMoura(this.txtTipoLancamentoContabilReplica.Procurou, this.OnProcurouTxtTipoLancamentoContabilReplica, this);
        }
        if (this.txtTipoLancamentoContabil) {
            adicionarEventoMoura(this.txtTipoLancamentoContabil.Procurou, this.OnProcurouTxtTipoLancamentoContabil, this);
        }
        if (this.txtContaContabil) {
            adicionarEventoMoura(this.txtContaContabil.Procurou, this.OnDepoisBuscarContaContabil, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.SelecionarRegistro, this);
            adicionarEventoMoura(this.grid.CellPrepared, this.OnGridCellPrepared, this);
        }
        if (this.btnReplicar) {
            adicionarEventoMoura(this.btnReplicar.Click, this.MostrarModalReplica, this);
        }
        if (this.grdReplicar) {
            adicionarEventoMoura(this.grdReplicar.ItemAdicionado, this.OnClickIncluirReplica, this);
            adicionarEventoMoura(this.grdReplicar.LimpouItem, this.LimparModalReplica, this);
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
        if (this.txtContaContabil) {
            adicionarEventoMoura(this.txtContaContabil.AntesAbrirProcura, this.OnAntesAbrirProcuraContaContabil, this);
        }
        if (this.txtUsuarioResponsavel) {
            adicionarEventoMoura(this.txtUsuarioResponsavel.Procurou, this.OnDepoisBuscarUsuario, this);
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
    C_RCadas.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().MudouContaCorrente) {
            this.GetScope().MudouContaCorrente = $.proxy(this.MudouContaCorrente, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Conta_Corrente; }, this.GetScope().MudouContaCorrente);
        }
        if (!this.GetScope().OnDepoisBuscarCentroCusto) {
            this.GetScope().OnDepoisBuscarCentroCusto = $.proxy(this.OnDepoisBuscarCentroCusto, this);
            this.GetScope().$watch(function (scope) { return scope.Centro_Custo; }, this.GetScope().OnDepoisBuscarCentroCusto);
        }
        if (!this.GetScope().OnDepoisBuscarCentroCustoItem) {
            var that = this;
            this.GetScope().OnDepoisBuscarCentroCustoItem = $.proxy(this.OnDepoisBuscarCentroCusto, this);
            this.GetScope().$watch(function (scope) { return that.Custo.Centro_Custo; }, this.GetScope().OnDepoisBuscarCentroCustoItem);
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_Centro_Custo) {
            if (ValoresSismoura.ConfiguracoesRetaguarda.Funcionamento_ContaR.substring(0, 1).toUpperCase() == "R") {
                this.tab.AlterarVisibleAba("AbaCentroCusto", true);
                this.txtCentroCusto.Visible = false;
                this.txtCentroCusto.Obrigatorio = false;
            }
            else {
                this.tab.AlterarVisibleAba("AbaCentroCusto", false);
                this.txtCentroCusto.Visible = true;
                this.txtCentroCusto.Obrigatorio = true;
            }
        }
        else {
            this.tab.AlterarVisibleAba("AbaCentroCusto", false);
            this.txtCentroCusto.Visible = false;
            this.txtCentroCusto.Obrigatorio = false;
        }
        this.PreencherEmpresaContabil(ValoresSismoura.EmpresaPadraoUsuario);
        //this.SetColunasEditaveis();
    };
    C_RCadas.prototype.MudouContaCorrente = function (newValue, oldValue) {
        if (oldValue) {
            this.txtTipoLancamentoContabil.Limpar();
            this.txtTipoLancamentoContabil.LimparParametros();
            this.txtTipoLancamentoContabil.AddParametro("TipoConfiguracaoContabil", "CRCA");
            this.txtTipoLancamentoContabil.AddParametro("codEmpresa", "" + this.cboContaCorrente.GetEmpresa());
            this.txtTipoLancamentoContabilReplica.Limpar();
            this.txtTipoLancamentoContabilReplica.LimparParametros();
            this.txtTipoLancamentoContabilReplica.AddParametro("TipoConfiguracaoContabil", "CRCA");
            this.txtTipoLancamentoContabilReplica.AddParametro("codEmpresa", "" + this.cboContaCorrente.GetEmpresa());
        }
        this.PreencherEmpresaContabil(this.cboContaCorrente.GetEmpresa());
        if (this.GetScope().Entity.Conta_Contabil && this.GetScope().Entity.Conta_Corrente) {
            this.txtCentroCusto.LimparParametros();
            this.txtCentroCusto.AddParametro("empresaCc", "" + this.cboContaCorrente.GetEmpresa());
            this.txtCentro_Custo.LimparParametros();
            this.txtCentro_Custo.AddParametro("empresaCc", "" + this.cboContaCorrente.GetEmpresa());
            this.OnDepoisBuscarCentroCusto();
            if (ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_Centro_Custo) {
                if (ValoresSismoura.ConfiguracoesRetaguarda.Funcionamento_ContaR.substring(0, 1).toUpperCase() == "R") {
                    this.VerificarCentroCustoGrade(newValue, oldValue);
                }
            }
            var parametros = {
                codContabil: this.GetScope().Entity.Conta_Contabil,
                contaCorrente: this.GetScope().Entity.Conta_Corrente
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificarContabil", parametros);
            if (!retorno) {
                MostrarAlerta("A Conta Contábil deve pertencer a mesma empresa da conta corrente!");
                this.txtContaContabil.Limpar();
                return;
            }
        }
    };
    C_RCadas.prototype.PreencherEmpresaContabil = function (codEmpresa) {
        if (this.txtTipoLancamentoContabil_hdnEmpresaContabil != undefined) {
            this.txtTipoLancamentoContabil_hdnEmpresaContabil.value = codEmpresa;
        }
        if (this.txtTipoLancamentoContabilReplica_hdnEmpresaContabil != undefined) {
            this.txtTipoLancamentoContabilReplica_hdnEmpresaContabil.value = codEmpresa;
        }
    };
    C_RCadas.prototype.VerificarCentroCustoGrade = function (newValue, oldValue) {
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
                    this.tab.SetActiveTabIndex(3);
                    MostrarAlerta("A empresa da conta corrente informada não possui vínculo com todos os Centros de Custo encontrados na grade de Rateio por Centro de Custo");
                    this.EntityTela.Conta_Corrente = oldValue;
                    break;
                }
            }
            return;
        }
    };
    C_RCadas.prototype.OnGravouSucesso = function (s, e) {
        this.PreencherGradeContas();
        this.hdnData.value = "";
    };
    C_RCadas.prototype.OnDepoisBuscarCentroCusto = function () {
        var codCentroCusto;
        if (ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_Centro_Custo) {
            if (ValoresSismoura.ConfiguracoesRetaguarda.Funcionamento_ContaR.substring(0, 1).toUpperCase() == "R") {
                codCentroCusto = this.Custo.Centro_Custo;
            }
            else {
                codCentroCusto = +this.Centro_Custo;
            }
        }
        if (codCentroCusto) {
            var parametros;
            var centro;
            parametros = {
                codCentroCusto: codCentroCusto,
                contaCorrente: this.EntityTela.Conta_Corrente
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificarEmpresas", parametros);
            if (!retorno) {
                MostrarAlerta("Centro de Custo informado não está vinculada a empresa da conta corrente, utilizar a tela Cadastro de Centro de Custo para corrigir esta situação");
                if (ValoresSismoura.ConfiguracoesRetaguarda.Funcionamento_ContaR.substring(0, 1).toUpperCase() == "R") {
                    this.txtCentro_Custo.Limpar();
                    this.txtCentro_Custo.Focus();
                }
                else {
                    this.txtCentroCusto.Limpar();
                    this.txtCentroCusto.Focus();
                }
                return;
            }
        }
    };
    C_RCadas.prototype.OnExcluiuSucesso = function (s, e) {
    };
    C_RCadas.prototype.OnDepoisLimpar = function (Entity) {
        Entity.Data_Emissao = new Date();
        //this.cboContaCorrente.SetSelectedIndex(-1);
        this.LimparModalReplica();
        this.Custos = [];
        this.Centro_Custo = 0;
    };
    C_RCadas.prototype.LimparModalReplica = function () {
        this.cboDias.SetSelectedIndex(0);
        this.txtQtdeParcela.SetText("0");
        this.txtDias.SetText("0");
        //this.txtTipoLancamentoContabilReplica.Limpar();
        this.RefreshAngular();
    };
    C_RCadas.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        //if (Entidade.Codigo <= 0) {
        //    return;   
        //}
        //let param: any = {
        //    codUsuario: ValoresSismoura.UsuarioLogado,
        //    contaReceber: Entidade.Codigo
        //}
        //let verificarUsuarioEmpresa: boolean = this.ExecutarFuncaoServerSideSynch("VerificarUsuarioEmpresa", param);
        //if (!verificarUsuarioEmpresa) {
        //    //this.Limpar();
        //    MostrarAlerta("A Conta a Receber não pertence a empresa vinculada ao usuário logado no sistema!");
        //    return;
        //}
        //this.cboContaCorrente.Combo.SetValue(Entidade.Conta_Corrente);
        //if (Entidade.Baixa) {
        //    this.hdnBaixa.value = "S";
        //} else { 
        //    this.hdnBaixa.value = "N";
        //}
        if (!Entidade.Centros_Custo) {
            Entidade.Centros_Custo = [];
        }
        var parametros = {
            codReceber: Entidade.Codigo
        };
        var centroCustos = this.ExecutarFuncaoServerSideSynch("GetCentroCustoRetorno", parametros);
        if (centroCustos.length > 0) {
            this.Custos = centroCustos;
            this.cboContaCorrente.SetContaCorrente(this.EntityTela.Conta_Corrente);
            this.txtCentroCusto.Procurar(this.Custos[0].Centro_Custo_Codigo.toString());
        }
        else {
            this.Custos = [];
        }
    };
    C_RCadas.prototype.OnAntesSetEntidade = function (eventArg) {
        _super.prototype.OnAntesSetEntidade.call(this, eventArg);
        if (eventArg.Entidade.Codigo > 0) {
            eventArg.Entidade.Usuario_Alteracao = ValoresSismoura.UsuarioLogado;
            var param = {
                codUsuario: ValoresSismoura.UsuarioLogado,
                contaReceber: eventArg.Entidade.Codigo
            };
            var verificarUsuarioEmpresa = this.ExecutarFuncaoServerSideSynch("VerificarUsuarioEmpresa", param);
            if (!verificarUsuarioEmpresa) {
                this.Limpar();
                this.txtCodigo.Focus();
                eventArg.Cancelar = true;
                MostrarAlerta("A Conta a Receber não pertence a empresa vinculada ao usuário logado no sistema!");
                return;
            }
            this.cboContaCorrente.Combo.SetValue(eventArg.Entidade.Conta_Corrente);
            this.cboContaCorrente.AtualizarLabels();
            if (eventArg.Entidade.Baixa) {
                this.hdnBaixa.value = "S";
            }
            else {
                this.hdnBaixa.value = "N";
            }
            if (!eventArg.Entidade.Centros_Custo) {
                eventArg.Entidade.Centros_Custo = [];
            }
            var parametros = {
                codReceber: eventArg.Entidade.Codigo
            };
            var centroCustos = this.ExecutarFuncaoServerSideSynch("GetCentroCustoRetorno", parametros);
            if (centroCustos.length > 0) {
                this.Custos = centroCustos;
            }
        }
    };
    C_RCadas.prototype.OnProcurouTxtTipoLancamentoContabil = function () {
        var retorno;
        var parametros = {
            codigo: this.txtTipoLancamentoContabil.GetText().CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("getContabilConfiguracaoLancamento", parametros);
        if (retorno) {
            if (retorno.Tipo_Configuracao != "CRCA" && retorno.Tipo_Configuracao != "CRCO") {
                MostrarAlerta("O tipo de configuração não é referente a Contas a Receber");
                this.txtTipoLancamentoContabil.Limpar();
            }
        }
    };
    C_RCadas.prototype.OnProcurouTxtTipoLancamentoContabilReplica = function () {
        var retorno;
        var parametros = {
            codigo: this.txtTipoLancamentoContabilReplica.GetText().CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("getContabilConfiguracaoLancamento", parametros);
        if (retorno) {
            if (retorno.Tipo_Configuracao != "CRCA" && retorno.Tipo_Configuracao != "CRCO") {
                MostrarAlerta("O tipo de configuração não é referente a Contas a Receber");
                this.txtTipoLancamentoContabilReplica.Limpar();
            }
        }
    };
    C_RCadas.prototype.SelecionarRegistro = function (s, e) {
        this.PreencherEntidade(e.data.Codigo);
    };
    C_RCadas.prototype.OnGridCellPrepared = function (s, e) {
        try {
            if (e.rowType == "data" && e.data) {
                var impagavel = "" + e.data["Impagavel"];
                if (impagavel == "S") {
                    e.cellElement.css("color", "red");
                }
            }
        }
        catch (ex) {
        }
    };
    C_RCadas.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (this.hdnBaixa.value == "S") {
            MostrarAlerta("Esta conta já foi baixada, não será possível alterá-la!");
            return false;
        }
        var entidade = this.GetScope().Entity;
        entidade.Conta_Corrente = this.cboContaCorrente.Combo.GetValue();
        var bloquerClienteEmpresa = this.ExecutarFuncaoServerSideSynch("ConfiguracaoBloquerClienteEmpresa", {});
        var codUsuario = ValoresSismoura.UsuarioLogado;
        if (entidade.Codigo > 0 && bloquerClienteEmpresa && codUsuario > 0) {
            var parametrosValidacao = {
                codUsuario: codUsuario,
                contaReceber: entidade.Codigo
            };
            var verificarUsuarioEmpresa = this.ExecutarFuncaoServerSideSynch("VerificarUsuarioEmpresa", parametrosValidacao);
            if (!verificarUsuarioEmpresa) {
                MostrarAlerta("Usuário não vinculado a empresa da conta a receber. Devido a isso, a mesma não poderá ser alterada.");
                return false;
            }
        }
        if (entidade.Conta_Corrente == "" || entidade.Conta_Corrente == null) {
            MostrarAlerta("Informe a conta corrente");
            return false;
        }
        if (entidade.Doc_Merc <= 0 || entidade.Doc_Merc == null || entidade.Doc_Merc == undefined) {
            MostrarAlerta("Informe o Documento Mercantil.");
            return false;
        }
        if (this.txtTipoLancamentoContabil.Visible) {
            if (entidade.Configuracao_Lancamento <= 0 || entidade.Configuracao_Lancamento == null || entidade.Configuracao_Lancamento == undefined) {
                MostrarAlerta("Informe o Tipo de Lançamento Contábil.");
                return false;
            }
        }
        //Comentado na atividade 776025
        //centro de custo
        //this.Custos = [];
        //var centros: SiSMoura.Core.Entity.CentroDeCustoRetorno = <SiSMoura.Core.Entity.CentroDeCustoRetorno>{};
        //if (this.txtCentro_Custo) {
        //    centros.Centro_Custo_Codigo = this.txtCentro_Custo.GetText().CNum();//this.Centro_Custo;
        //}
        //centros.Valor = this.EntityTela.Valor;
        //centros.Contador = this.Custos.Max("Contador") + 1;
        //this.Custos.push(centros);
        //entidade.Conta_Corrente = this.cboContaCorrente.value
        //entidade.Conta_Corrente = this.cboContaCorrente.GetValue();
        //let parametros: any = {
        //    contaCorrente: this.cboContaCorrente.GetValue()
        //}
        //var retorno: SiSMoura.Core.Entity.Conta_Corrente
        //retorno = this.ExecutarFuncaoServerSideSynch("getByContaCorrente", parametros);
        //if (retorno) {
        entidade.Empresa = this.cboContaCorrente.GetEmpresa();
        //}
        if (this.hdnData.value == "" || this.hdnData.value == undefined || this.hdnData.value == null) {
            if (typeof entidade.Data_Vencimento == "string") {
                var aux = entidade.Data_Vencimento;
                entidade.Data_Vencimento = aux.ToDate();
            }
            if (typeof entidade.Data_Emissao == "string") {
                var aux = entidade.Data_Emissao;
                entidade.Data_Emissao = aux.ToDate();
            }
            if (entidade.Data_Vencimento.setHours(0, 0, 0, 0) < entidade.Data_Emissao.setHours(0, 0, 0, 0)) {
                MsgBoxJS("A data de emissão está maior que a data de vencimento. Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouOpcaoMsgBoxData, this));
                return false;
            }
        }
        if (!this.isContinuarAlterarParcelas) {
            this.GetParcelasContasReceber(entidade);
            return false;
        }
        this.PreencherCustos(entidade);
        this.isContinuarAlterarParcelas = false;
        return true;
    };
    C_RCadas.prototype.OnSelecionouOpcaoMsgBoxData = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            this.hdnData.value = "Passou";
            this.ClicarGravar();
        }
        else {
            this.hdnData.value = "";
        }
    };
    C_RCadas.prototype.OnAntesDeletar = function () {
        _super.prototype.OnAntesDeletar.call(this);
        if (this.hdnBaixa.value == "S") {
            MostrarAlerta("Esta conta já foi baixada, não será possível excluí-la!");
            return false;
        }
        return true;
    };
    C_RCadas.prototype.OnDepoisBuscarCliente = function () {
        this.PreencherGradeContas();
    };
    C_RCadas.prototype.PreencherGradeContas = function () {
        var retorno;
        var parametros = {
            codCliente: this.txtCliente.GetText().CNum(),
            codUsuario: ValoresSismoura.UsuarioLogado
        };
        retorno = this.ExecutarFuncaoServerSideSynch("ImportarContas", parametros);
        this.grid.PreencherGrid(retorno);
    };
    C_RCadas.prototype.OnDepoisBuscarContaContabil = function () {
        var entidade = this.GetScope().Entity;
        var permitidaUsuario;
        var permitidaEmpresa;
        var retorno;
        if (entidade.Conta_Contabil <= 0) {
            return;
        }
        var parametros = {
            codContaContabil: entidade.Conta_Contabil,
            usuarioLogado: ValoresSismoura.UsuarioLogado,
            Empresa: ValoresSismoura.EmpresaPadraoUsuario
        };
        if (this.hdnConfiguracoesBloquearClienteEmpresa.value == "1") {
            permitidaUsuario = this.ExecutarFuncaoServerSideSynch("pertenceEmpresaUsuario", parametros);
            if (!permitidaUsuario) {
                MostrarAlerta("A conta contábil não pertence as empresas vinculadas ao usuário!");
                this.txtContaContabil.Limpar();
                return;
            }
        }
        retorno = this.ExecutarFuncaoServerSideSynch("GetByCod", parametros);
        if (retorno.Sintetico == "S") {
            MostrarAlerta("Você não pode usar uma Conta Sintética!");
            this.txtContaContabil.Limpar();
            return;
        }
        if (!retorno.Receber) {
            MostrarAlerta("A Conta Contábil não pode ser lançada na Contas a Receber!. Para utilizar a Conta Contábil nessa tela, entre no Cadastro de Conta Contábil e marque o Check Contas a Receber.");
            this.txtContaContabil.Limpar();
            return;
        }
        parametros = {
            codContabil: entidade.Conta_Contabil,
            contaCorrente: entidade.Conta_Corrente
        };
        retorno = this.ExecutarFuncaoServerSideSynch("VerificarContabil", parametros);
        if (!retorno) {
            MostrarAlerta("A Conta Contábil deve pertencer a mesma empresa da conta corrente!");
            this.txtContaContabil.Limpar();
            return;
        }
    };
    C_RCadas.prototype.MostrarModalReplica = function (s, e) {
        e.processOnServer = false;
        if (this.hdnBaixa.value == "S") {
            MostrarAlerta("Esta conta já foi baixada, não será possível replica-la!");
        }
        else {
            var retorno = void 0;
            var replicada = void 0;
            var parametros = {
                codigo: this.txtCodigo.GetText().CNum()
            };
            retorno = this.ExecutarFuncaoServerSideSynch("CarregarContasReceber", parametros);
            if (!retorno) {
                MostrarAlerta("Insira uma conta cadastrada para replica-la!");
                e.cancelEventAndBubble = true;
                return;
            }
            replicada = this.ExecutarFuncaoServerSideSynch("getProcuraContaReplicadaBaixada", parametros);
            if (replicada) {
                MostrarAlerta("Esta conta foi replicada e há conta(s) replicada(s) baixada(s), não será possível replicar novamente. Para replicar novamente, estorne as contas baixadas.");
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
            this.Replicas = [];
            this.mdReplicar.Show();
        }
    };
    C_RCadas.prototype.OnClickReplicar = function (s, e) {
        e.processOnServer = false;
        var entidade = this.GetScope().Entity;
        if (this.Replicas.length > 0) {
            MsgBoxJS("Deseja realmente replicar a conta? <br /> Caso já exista replicamento da conta selecionada, as parcelas serão excluídas e geradas novamente.", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouOpcaoMsgBox, this));
        }
        else {
            MostrarAlerta("Nenhuma conta inserida para replicar.");
        }
    };
    C_RCadas.prototype.OnSelecionouOpcaoMsgBox = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            this.Replicar();
        }
    };
    C_RCadas.prototype.OnClickIncluirReplica = function (s, e) {
        if (this.txtQtdeParcela.GetText().CNum() <= 0 || this.cboDias.GetValue() == "" || this.txtDias.GetText().CNum() <= 0) {
            MostrarAlerta("Por favor, informe o código a parcela, o tipo e os dias.");
            e.cancelar = true;
            return;
        }
        else {
            this.Replicas = [];
            var parametros = {
                codigo: this.txtCodigo.GetText().CNum(),
                tipoDias: this.cboDias.GetValue(),
                dias: this.txtDias.GetText().CNum(),
                qtdParcelas: this.txtQtdeParcela.GetText().CNum()
            };
            var listaReplica = this.ExecutarFuncaoServerSideSynch("AdicionarParcelaReplicada", parametros);
            var replica = void 0;
            for (var x = 0; x < listaReplica.length; x++) {
                replica = {};
                replica.Data_Vencimento = listaReplica[x].Data_Vencimento;
                replica.Parcela = listaReplica[x].Parcela;
                replica.Valor = listaReplica[x].Valor;
                replica.Contador = listaReplica[x].Contador;
                this.Replicas.push(replica);
            }
        }
    };
    C_RCadas.prototype.Replicar = function () {
        try {
            var retorno = void 0;
            var parametros = {
                codigo: this.txtCodigo.GetText().CNum(),
                listaReplica: this.Replicas,
                configuracaoLancamento: this.txtTipoLancamentoContabilReplica.GetText().CNum(),
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            retorno = this.ExecutarFuncaoServerSideSynch("Replicar", parametros);
            if (retorno == "Contas Replicadas com sucesso!") {
                MostrarMensagem(retorno);
            }
            else {
                MostrarAlerta(retorno);
            }
            this.Replicas = [];
            this.LimparModalReplica();
            this.PreencherGradeContas();
            this.mdReplicar.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_RCadas.prototype.CancelarReplica = function (s, e) {
        e.processOnServer = false;
        this.txtQtdeParcela.SetText("");
        this.txtDias.SetText("");
        this.Replicas = [];
        this.PreencherGradeContas();
        this.LimparModalReplica();
        this.mdReplicar.Hide();
    };
    C_RCadas.prototype.CarregarCentroCusto = function (codCentroCusto) {
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
    C_RCadas.prototype.OnCustoAdicionado = function (s, e) {
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
    C_RCadas.prototype.OnClickIncluirCusto = function (s, e) {
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
        if (this.txtValor.GetText().CNum() <= 0) {
            MostrarAlerta("Informe o valor do lançamento.");
            e.cancelar = true;
            return;
        }
        if (this.txtCentro_Custo.GetText() == "") {
            MostrarAlerta("Informe o código do Centro de Custo.");
            e.cancelar = true;
            return;
        }
        for (var x = 0; x < this.Custos.length; x++) {
            if (this.Custos[x].Centro_Custo_Codigo == this.txtCentro_Custo.GetText().CNum()) {
                MostrarAlerta("Centro de custo já inserido.");
                e.cancelar = true;
                return;
            }
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
        var entidade = this.CarregarCentroCusto(this.txtCentro_Custo.GetText().CNum());
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
    C_RCadas.prototype.PreencherCustos = function (entidade) {
        var custos;
        if (!this.txtCentroCusto.Visible) {
            custos = this.grdRateioCentroCusto.Grid.DataSource;
            //custos = [];
        }
        else {
            custos = this.Custos;
        }
        var custosExistentes = entidade.Centros_Custo;
        entidade.Centros_Custo = [];
        for (var x = 0; x < custos.length; x++) {
            var novoCusto = {};
            var custoGrid = void 0;
            if (!custosExistentes)
                custosExistentes = [];
            for (var y = 0; y < custosExistentes.length; y++) {
                if (custosExistentes[y].Id == custos[x].Id) {
                    novoCusto = custosExistentes[y];
                    y = custosExistentes.length;
                }
            }
            custoGrid = custos[x];
            novoCusto.Cod_Receber = this.txtCodigo.GetText().CNum();
            novoCusto.Id = custoGrid.Id;
            novoCusto.Centro_Custo = custoGrid.Centro_Custo_Codigo;
            novoCusto.Valor = custoGrid.Valor;
            entidade.Centros_Custo.push(novoCusto);
        }
    };
    C_RCadas.prototype.OnAntesAbrirProcuraContaContabil = function (s, e) {
        if (String.IsNullOrWhiteSpace(this.cboContaCorrente.GetContaCorrente())) {
            MsgBoxJS("Informe uma conta corrente para procurar uma conta contábil", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, null, null);
            e.Cancelar = true;
            return;
        }
        this.txtContaContabil.AddParametro("Empresa", "" + this.cboContaCorrente.GetEmpresa());
        this.txtContaContabil.AddParametro("contasReceber", "True");
    };
    C_RCadas.prototype.OnDepoisBuscarUsuario = function () {
        var entidade = this.GetScope().Entity;
        var retorno;
        if (entidade.Usuario_Responsavel <= 0) {
            return;
        }
        var parametros = {
            usuarioResponsavel: entidade.Usuario_Responsavel,
            contaCorrente: this.cboContaCorrente.GetContaCorrente()
        };
        if (this.hdnConfiguracoesBloquearClienteEmpresa.value == "1") {
            var responsavelContaCorrente = this.ExecutarFuncaoServerSideSynch("ContaCorrenteUsuarioResponsavel", parametros);
            if (!responsavelContaCorrente) {
                MostrarAlerta("O usuário informado não pertence as empresas vinculadas ao usuário!");
                //MostrarAlerta("O usuário informado não possui vínculo com a conta corrente selecionada!")
                this.txtUsuarioResponsavel.Limpar();
                return;
            }
        }
    };
    C_RCadas.prototype.GetParcelasContasReceber = function (entidade) {
        try {
            var Conta_Contabil = entidade.Conta_Contabil, Numero_Documento = entidade.Numero_Documento, Contrato = entidade.Contrato, Numero_Orcamento = entidade.Numero_Orcamento;
            var parametros = {
                Conta_Contabil: Conta_Contabil || 0,
                Numero_Documento: Numero_Documento || 0,
                Contrato: Contrato || 0,
                Numero_Orcamento: Numero_Orcamento || 0
            };
            this.ExecutarFuncaoServerSideAsynch('GetParcelasPendentesContasReceber', parametros, this.AlterarParcelasPendentes, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_RCadas.prototype.ContinuarAlterandoParcelas = function () {
        this.isContinuarAlterarParcelas = true;
        this.ClicarGravar();
    };
    C_RCadas.prototype.SetColunasEditaveis = function () {
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
    C_RCadas.prototype.AlterarParcelasPendentes = function (d) {
        var _this = this;
        try {
            var parcelasPendentes_1 = GetRetornoAJAX(d);
            if (this.flagPrimeiraVez) {
                if (parcelasPendentes_1.length > 1) {
                    MsgBoxJS('Existem mais parcelas para esta conta, deseja alterá-las?', MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                        if (result.Resultado === MsgBoxResult.Yes) {
                            _this.Parcelas = parcelasPendentes_1;
                            _this.lblCliente.Text = _this.txtCliente.LabelResultado.textContent;
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
    C_RCadas.prototype.OnEditouGridAlterarParcelas = function (s, e) {
        try {
            this.flagAlterouParcelas = true;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_RCadas.prototype.OnGravouAlterarParcelas = function () {
        if (this.flagAlterouParcelas) {
            //--validações de campos obrigatórios na grade para alterar as parcelas 
            var msgCampoObrigatorio = '';
            for (var i = 0; i < this.Parcelas.length; i++) {
                var parcela = this.Parcelas[i];
                if (!parcela.Doc_Merc) {
                    msgCampoObrigatorio += "Informe o 'Doc. Mercantil' para a parcela: " + parcela.Parcela + "<br>";
                }
                if (!parcela.Conta_Contabil) {
                    msgCampoObrigatorio += "Informe a 'Conta Contábil Financeira' para a parcela: " + parcela.Parcela + "<br>";
                }
                if (!parcela.Data_Vencimento) {
                    msgCampoObrigatorio += "Informe a 'Data de Vencimento' para a parcela: " + parcela.Parcela + "<br>";
                }
                if (!parcela.Valor) {
                    msgCampoObrigatorio += "Informe o 'Valor' para a parcela: " + parcela.Parcela + "<br>";
                }
                if (!parcela.Conta_Corrente) {
                    msgCampoObrigatorio += "Informe a 'Conta Corrente' para a parcela: " + parcela.Parcela + "<br>";
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
    C_RCadas.prototype.OnSairParcelas = function () {
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
    return C_RCadas;
}(MouraPageCadastroAngular));
var c_RCadas = new C_RCadas();
//# sourceMappingURL=C_RCadas.js.map