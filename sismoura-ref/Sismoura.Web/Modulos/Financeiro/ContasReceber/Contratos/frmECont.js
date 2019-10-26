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
var FrmECont = /** @class */ (function (_super) {
    __extends(FrmECont, _super);
    function FrmECont() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COMMAND_EXCLUIR_PARCELA = "EXCLUIR_PARCELA";
        _this.COMMAND_ABRIR_CONTRATO = "ABRIR_CONTRATO";
        _this.COMMAND_NENHUMA_PARCELA_INFORMADA = "NENHUMA_PARCELA_INFORMADA";
        _this.COMMAND_SELECIONAR_EXISTENTE = "SELECIONAR_EXISTENTE";
        _this.CONTRATO_CANCELADO = false;
        return _this;
    }
    Object.defineProperty(FrmECont.prototype, "ParcelaPendente", {
        get: function () {
            return this.GetScope()["ParcelaPendente"];
        },
        set: function (value) {
            this.GetScope()["ParcelaPendente"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "ParcelasPendentes", {
        get: function () {
            if (!this.GetScope()["ParcelasPendentes"]) {
                this.GetScope()["ParcelasPendentes"] = {};
            }
            return this.GetScope()["ParcelasPendentes"];
        },
        set: function (value) {
            this.GetScope()["ParcelasPendentes"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "Replicas", {
        get: function () {
            if (!this.GetScope()["Replicas"]) {
                this.GetScope()["Replicas"] = {};
            }
            return this.GetScope()["Replicas"];
        },
        set: function (value) {
            this.GetScope()["Replicas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "grdPendente", {
        get: function () {
            return window['grdPendente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "grdBaixadas", {
        get: function () {
            return window['grdBaixadas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "gridAnimal", {
        get: function () {
            return window['gridAnimal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "gridReplicar", {
        get: function () {
            return window['gridReplicar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "chkUtilizarContrato", {
        get: function () {
            return window['chkUtilizarContrato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "chkCortesia", {
        get: function () {
            return window['chkCortesia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "txtContrato", {
        get: function () {
            return window['txtContrato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "txtPeriodo_Vigencia", {
        get: function () {
            return window['txtPeriodo_Vigencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "txtContaContabil", {
        get: function () {
            return window['txtContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "txtQuantidade", {
        get: function () {
            return window['txtQuantidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "txtAnimal", {
        get: function () {
            return window['txtAnimal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "txtQtdeParcela", {
        get: function () {
            return window['txtQtdeParcela_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "txtDias", {
        get: function () {
            return window['txtDias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "cboDias", {
        get: function () {
            return window['cboDias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "cboConta", {
        get: function () {
            return window['cboConta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "cboFormaRecebimentoParcela", {
        get: function () {
            return window['cboFormaRecebimentoParcela_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "lblContCancelado", {
        get: function () {
            return window['lblContCancelado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "lblUltimoContrato", {
        get: function () {
            return window['lblUltimoContrato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "btnReplicar", {
        get: function () {
            return window['btnReplicar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "btnCalcular", {
        get: function () {
            return window['btnCalcular_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "btnAdicionar", {
        get: function () {
            return window['btnAdicionar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "btnReplicarParcelas", {
        get: function () {
            return window['btnReplicarParcelas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "btnCancelarReplicar", {
        get: function () {
            return window['btnCancelarReplicar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "btnOkReplicar", {
        get: function () {
            return window['btnOkReplicar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "btnEmitirContrato", {
        get: function () {
            return window['btnEmitirContrato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "btnAnexos", {
        get: function () {
            return window['btnAnexos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "AbaAnimal", {
        get: function () {
            return window['AbaAnimal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "txtServico", {
        get: function () {
            return window['txtServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "txtParcela", {
        get: function () {
            return window['txtParcela_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "chkCortesiaParcela", {
        get: function () {
            return window['chkCortesiaParcela_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "dlgAnexo", {
        get: function () {
            return window['dlgAnexo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "hdnAceitaGravarSemParcelas", {
        get: function () {
            return $("#hdnAceitaGravarSemParcelas")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmECont.prototype, "mdReplicar", {
        get: function () {
            return window['mdReplicar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    FrmECont.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (this.ParametrosURL.Codigo) {
            var codigo = this.ParametrosURL.Codigo;
            if (CNum(codigo) > 0) {
                this.PreencherEntidade(codigo);
            }
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.EstabelecimentoEnum == this.GetEnumPetShop()) {
            this.tab.AlterarVisibleAba("AbaAnimal", true);
            this.txtAnimal.Visible = true;
            this.gridAnimal.Visible = true;
        }
        else {
            this.txtAnimal.Visible = false;
            this.gridAnimal.Visible = false;
            this.tab.AlterarVisibleAba("AbaAnimal", false);
        }
        this.txtContrato.Visible = false;
    };
    FrmECont.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtServico) {
            adicionarEventoMoura(this.txtServico.Procurou, this.ProcurouServico, this);
        }
        if (this.txtContrato) {
            adicionarEventoMoura(this.txtContrato.Procurou, this.ProcurouContrato, this);
        }
        if (this.txtQuantidade) {
            adicionarEventoMoura(this.txtQuantidade.TextChanged, this.AlterouTextoQuantidade, this);
        }
        if (this.txtParcela) {
            adicionarEventoMoura(this.txtParcela.TextChanged, this.AlterouTextoParcela, this);
        }
        if (this.txtCliente) {
            adicionarEventoMoura(this.txtCliente.Procurou, this.ProcurouCliente, this);
        }
        if (this.grdPendente) {
            adicionarEventoMoura(this.grdPendente.ExcluindoItem, this.AntesExcluirPendente, this);
        }
        if (this.gridAnimal) {
            adicionarEventoMoura(this.gridAnimal.SelecionouLinha, this.SelecionouAnimal, this);
        }
        if (this.btnCalcular) {
            adicionarEventoMoura(this.btnCalcular.Click, this.ClicouCalcular, this);
        }
        if (this.btnAnexos) {
            adicionarEventoMoura(this.btnAnexos.Click, this.ClicouAnexo, this);
        }
        if (this.btnCancelarReplicar) {
            adicionarEventoMoura(this.btnCancelarReplicar.Click, this.ClicouCancelarReplicar, this);
        }
        if (this.btnReplicar) {
            adicionarEventoMoura(this.btnReplicar.Click, this.CliclouReplicar, this);
        }
        if (this.btnReplicarParcelas) {
            adicionarEventoMoura(this.btnReplicarParcelas.Click, this.ClicouReplicarParcelas, this);
        }
        if (this.btnOkReplicar) {
            adicionarEventoMoura(this.btnOkReplicar.Click, this.ClicouOkReplicar, this);
        }
        if (this.btnAdicionar) {
            adicionarEventoMoura(this.btnAdicionar.Click, this.ClicouAdicionar, this);
        }
        if (this.btnEmitirContrato) {
            adicionarEventoMoura(this.btnEmitirContrato.Click, this.ClicouEmitirContrato, this);
        }
        if (this.chkUtilizarContrato) {
            adicionarEventoMoura(this.chkUtilizarContrato.CheckChanged, this.ContratoCheckChanged, this);
        }
    };
    FrmECont.prototype.GetEnumPetShop = function () {
        var parametros;
        try {
            parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("GetEnumPetShop", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
        return retorno;
    };
    FrmECont.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.ParcelasPendentes = [];
        this.Replicas = [];
        Entity.Codigo = 0;
        Entity.Valor_Unitario = 0;
        Entity.Qtde = 1;
        Entity.Total = 0;
        Entity.Data_Inicio = this.DataServidor();
        Entity.Data_Termino = this.DataServidor();
        Entity.PagamentosPendentesGravar = [];
        this.txtPeriodo_Vigencia.textBoxCalendarioInicio.SetDate(Entity.Data_Inicio);
        this.txtPeriodo_Vigencia.textBoxCalendarioFim.SetDate(Entity.Data_Termino);
        this.txtPeriodo_Vigencia.AtualizarDiferenca();
        this.cboConta.SetContaCorrente("0");
        this.LimparCampos();
        this.RefreshAngular();
    };
    FrmECont.prototype.LimparCampos = function () {
        var _this = this;
        this.grdBaixadas.PreencherGrid(null);
        this.grdPendente.Grid.PreencherGrid(null);
        this.lblContCancelado.Visible = false;
        this.CONTRATO_CANCELADO = false;
        setTimeout(function () { return _this.LimparParcelasPendentes(); });
        this.LimparCamposSelecionarContratoImportar();
        this.LimparPastaTempAnexos();
        this.LimparReplique();
        this.hdnAceitaGravarSemParcelas.value = "0";
        this.ObterUltimoContrato();
        this.RefreshAngular();
    };
    FrmECont.prototype.LimparParcelasPendentes = function () {
        this.ParcelaPendente = {};
        this.ParcelaPendente.Data_Vencimento = this.DataServidor();
        this.ParcelaPendente.Parcela = this.GetProximaParcela();
        this.ParcelaPendente.Conta_Contabil = 0;
        this.ParcelaPendente.Cortesia = false;
        this.ParcelaPendente.Valor = 0;
        this.ParcelaPendente.Codigo_Forma_Recebimento = 0;
        this.GetScope().$applyAsync();
    };
    FrmECont.prototype.LimparCamposSelecionarContratoImportar = function () {
        this.chkUtilizarContrato.Checked = false;
        this.txtContrato.SetText("");
        this.txtContrato.Visible = false;
    };
    FrmECont.prototype.LimparCamposImportacaoContrato = function () {
        var _this = this;
        this.ParcelaPendente = {};
        this.grdBaixadas.PreencherGrid(null);
        this.grdPendente.Grid.PreencherGrid(null);
        this.EntityTela.Codigo = 0;
        if (this.EntityTela.Codigo == 0 && this.EntityTela.Cliente == 0) {
            try {
                var parametros = void 0;
                parametros = {
                    codCliente: this.EntityTela.Cliente,
                    cancelado: false
                };
                var contrato = this.ExecutarFuncaoServerSideSynch("GetContratoPorClienteOrderCodigo", parametros);
                if (contrato) {
                    MsgBoxJS("Já existe o contrato " + contrato.Codigo + " aberto para este cliente. Deseja visualizar?", MsgBoxOptions.YesNo, MsgBoxIcon.Alert, function (result) {
                        if (result.Argument == _this.COMMAND_ABRIR_CONTRATO && result.Resultado == MsgBoxResult.Yes) {
                            _this.PreencherEntidade(contrato.CodigoToString);
                        }
                    }, this.COMMAND_ABRIR_CONTRATO);
                    this.EntityTela.Cortesia = false;
                    this.EntityTela.Nota = false;
                    this.EntityTela.N_Promissoria = false;
                    this.EntityTela.N_Nota_Promissoria = "";
                    this.EntityTela.Conta = "";
                    this.EntityTela.Banco = "";
                    this.EntityTela.Agencia = "";
                    this.EntityTela.N_Cheque = "";
                    this.EntityTela.Valor_Cheque = 0;
                    this.ParcelaPendente.Parcela = this.GetProximaParcela();
                    this.ParcelaPendente.Data_Vencimento = this.DataServidor();
                    this.ParcelaPendente.Conta_Contabil = 0;
                    this.ParcelaPendente.Cortesia = false;
                    this.ParcelaPendente.Valor = 0;
                    this.ParcelaPendente.Codigo_Forma_Recebimento = 0;
                    this.ObterUltimoContrato();
                }
            }
            catch (ex) {
                LogarException(ex);
            }
            this.RefreshAngular();
        }
    };
    FrmECont.prototype.LimparPastaTempAnexos = function () {
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
    FrmECont.prototype.LimparReplique = function () {
        this.txtDias.SetText("");
        this.txtQtdeParcela.SetText("");
        this.cboDias.SetValue("N");
        this.gridReplicar.Grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    FrmECont.prototype.ObterUltimoContrato = function () {
        try {
            var parametros = void 0;
            parametros = {};
            var contrato = this.ExecutarFuncaoServerSideSynch("GetUltimoContrato", parametros);
            if (contrato > 0) {
                this.lblUltimoContrato.Text = contrato;
            }
            else {
                this.lblUltimoContrato.Text = "";
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    FrmECont.prototype.PreencherEntidade = function (codigo) {
        _super.prototype.PreencherEntidade.call(this, codigo);
        this.hdnAceitaGravarSemParcelas.value = "0";
    };
    FrmECont.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        try {
            if (Entity.Codigo && Entity.Codigo > 0) {
                this.txtCliente.Focus();
            }
            if (Entity && ConvertToDate(Entity.Data_Cancelado) && this.txtContrato.GetText() == "") {
                MostrarAlerta("Este contrato foi cancelado, não será possível alterá-lo!");
                this.lblContCancelado.Visible = true;
                this.CONTRATO_CANCELADO = true;
                this.btnReplicar.SetEnabled(false);
                this.RefreshAngular();
            }
            else {
                this.lblContCancelado.Visible = false;
                this.CONTRATO_CANCELADO = false;
                this.btnReplicar.SetEnabled(true);
            }
            this.CarregarParcelasPendentes(Entity.Codigo, true);
            this.PreencherGradeBaixadas(Entity.Codigo);
            this.PreencherGradeAnimal(Entity.Cliente);
            this.LimparCamposSelecionarContratoImportar();
            this.LimparParcelasPendentes();
            this.PreenchePagamentosPendentesGravar(Entity);
            if (Entity.Codigo) {
                this.txtCliente.Focus();
            }
            this.cboConta.SetContaCorrente(Entity.Conta_Corrente.toString());
            Entity.Conta_Corrente_String = this.cboConta.GetContaCorrente();
            Entity.Empresa = this.cboConta.GetEmpresa();
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    FrmECont.prototype.CarregarParcelasPendentes = function (codigo, somentePendentes) {
        try {
            var parametros = void 0;
            parametros = {
                codigo: codigo,
                somentePendentes: somentePendentes
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("CarregarParcelasPendentes", parametros);
            this.ParcelasPendentes = retorno;
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    FrmECont.prototype.PreencherGradeBaixadas = function (codigo) {
        var _this = this;
        try {
            var parametros = void 0;
            parametros = {
                codigo: codigo
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGridBaixadas", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.grdBaixadas.PreencherGrid(retorno);
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
    FrmECont.prototype.PreencherGradeAnimal = function (codigo) {
        var _this = this;
        try {
            var parametros = void 0;
            parametros = {
                codigo: codigo
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGridAnimal", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.gridAnimal.PreencherGrid(retorno.lista);
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
    FrmECont.prototype.GetProximaParcela = function () {
        var ultimaParcelaBaixada = 0;
        var ultimaParcelaPendente = 0;
        ultimaParcelaBaixada = this.GetMaxParcelaBaixada();
        if (this.ParcelasPendentes.length > 0) {
            ultimaParcelaPendente = this.ParcelasPendentes.Max("Parcela");
        }
        if (ultimaParcelaBaixada > ultimaParcelaPendente) {
            return ultimaParcelaBaixada + 1;
        }
        else {
            return ultimaParcelaPendente + 1;
        }
    };
    FrmECont.prototype.GetMaxParcelaBaixada = function () {
        var retorno = 0;
        var atual = 0;
        for (var x = 0; x < this.grdBaixadas.DataSource.length - 1; x++) {
            atual = this.grdBaixadas.DataSource[x].Parcela;
            if (atual > retorno) {
                retorno = atual;
            }
        }
        return retorno;
    };
    FrmECont.prototype.MoverAnexosNovos = function () {
        try {
            var parametros = void 0;
            parametros = {
                codigo: this.EntityTela.Codigo
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("MoverAnexosNovos", parametros, function (d) {
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
    FrmECont.prototype.OnAntesGravar = function () {
        var _this = this;
        _super.prototype.OnAntesGravar.call(this);
        if (this.CONTRATO_CANCELADO || !this.btnAdicionar.GetEnabled() || !this.btnReplicarParcelas.GetEnabled()) {
            MostrarAlerta("Este contrato foi cancelado, não será possível alterá-lo!");
            return false;
        }
        if (!this.ValidarCamposObrigatorios()) {
            return false;
        }
        if (CNum(this.hdnAceitaGravarSemParcelas.value) == 0) {
            if (this.ParcelasPendentes.length <= 0 || !this.ParcelasPendentes) {
                MsgBoxJS("É necessário adicionar parcelas ao contrato. Deseja realmente continuar sem adicionar nenhuma parcela?", MsgBoxOptions.YesNo, MsgBoxIcon.Alert, function (e) {
                    if (e.Argument == "NENHUMA_PARCELA_INFORMADA" && e.Resultado == MsgBoxResult.Yes) {
                        _this.hdnAceitaGravarSemParcelas.value = "1";
                        _this.ClicarGravar();
                    }
                }, this.COMMAND_NENHUMA_PARCELA_INFORMADA);
                return false;
            }
        }
        if (ConvertToDate(this.EntityTela.Data_Cancelado) && this.txtContrato.GetText() == "") {
            MostrarAlerta("Este contrato foi cancelado, não será possível alterá-lo!");
            this.btnAdicionar.SetEnabled(false);
            this.btnReplicarParcelas.SetEnabled(false);
            return false;
        }
        else {
            this.btnAdicionar.SetEnabled(true);
            this.btnReplicarParcelas.SetEnabled(true);
        }
        this.PreenchePagamentosPendentesGravar(this.EntityTela);
        this.EntityTela.Empresa = this.cboConta.GetEmpresa();
        this.EntityTela.Conta_Corrente_String = this.cboConta.GetContaCorrente();
        return true;
    };
    FrmECont.prototype.PreenchePagamentosPendentesGravar = function (Entity) {
        var aux;
        for (var x = 0; x < this.ParcelasPendentes.length; x++) {
            aux = {};
            aux.Codigo = this.ParcelasPendentes[x].Codigo_Contrato_Pagamento;
            aux.Conta_Contabil = this.ParcelasPendentes[x].Conta_Contabil;
            aux.Contrato = Entity.Codigo;
            aux.Cortesia = this.ParcelasPendentes[x].Cortesia;
            aux.Data_Pagamento = this.ParcelasPendentes[x].Data_Vencimento;
            aux.Doc_Bancario = this.ParcelasPendentes[x].Codigo_Forma_Recebimento;
            aux.Doc_Merc = 2;
            aux.Parcela = this.ParcelasPendentes[x].Parcela;
            aux.Valor = this.ParcelasPendentes[x].Valor;
            if (this.chkCortesia.Checked) {
                aux.Cortesia = true;
            }
            Entity.PagamentosPendentesGravar.push(aux);
        }
    };
    FrmECont.prototype.OnAntesDeletar = function () {
        _super.prototype.OnAntesDeletar.call(this);
        if (this.CONTRATO_CANCELADO) {
            MostrarAlerta("Este contrato foi cancelado, não será possível alterá-lo!");
            return false;
        }
        return true;
    };
    FrmECont.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        try {
            var parametros = void 0;
            parametros = {
                codigo: this.EntityTela.Codigo
            };
            this.ExecutarFuncaoServerSideSynch("OnDepoisExcluiuSucesso", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
        return true;
    };
    FrmECont.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.hdnAceitaGravarSemParcelas.value = "0";
        this.MoverAnexosNovos();
        return true;
    };
    FrmECont.prototype.ProcurouContrato = function (s, e) {
        this.PreencherEntidade(this.txtContrato.GetText());
        if (this.txtCodigo.GetText() != "") {
            this.txtCliente.Focus();
        }
        this.LimparCamposImportacaoContrato();
    };
    FrmECont.prototype.ProcurouServico = function (s, e) {
        this.EntityTela.Total = 0;
        this.EntityTela.Valor_Unitario = 0;
        if (this.EntityTela.Servico > 0) {
            try {
                var parametros = void 0;
                parametros = {
                    codigo: this.EntityTela.Servico
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("ObterDadosServico", parametros);
                if (retorno.Preco_Produto) {
                    this.EntityTela.Valor_Unitario = retorno.Preco_Produto;
                    this.EntityTela.Total = retorno.Preco_Produto * this.EntityTela.Qtde;
                }
            }
            catch (ex) {
                LogarException(ex);
            }
        }
    };
    FrmECont.prototype.ProcurouCliente = function (s, e) {
        var _this = this;
        if (ValoresSismoura.ConfiguracoesRetaguarda.EstabelecimentoEnum == this.GetEnumPetShop() && this.EntityTela.Cliente > 0) {
            this.PreencherGradeAnimal(this.EntityTela.Cliente);
        }
        if ((this.EntityTela.Codigo == 0 || !this.EntityTela.Codigo) && this.EntityTela.Cliente > 0) {
            try {
                var parametros = void 0;
                parametros = {
                    codCliente: this.EntityTela.Cliente,
                    cancelado: false
                };
                var contratos_1 = this.ExecutarFuncaoServerSideSynch("GetContratosPorCliente", parametros);
                if (contratos_1) {
                    MsgBoxJS("Atenção. Já existe o contrato " + contratos_1.Codigo + " aberto para este cliente. Deseja visualizar?", MsgBoxOptions.YesNo, MsgBoxIcon.Alert, function (result) {
                        if (result.Resultado == MsgBoxResult.Yes && _this.COMMAND_SELECIONAR_EXISTENTE == result.Argument) {
                            _this.PreencherEntidade(contratos_1.CodigoToString);
                        }
                    }, this.COMMAND_SELECIONAR_EXISTENTE);
                }
                if (ValoresSismoura.ConfiguracoesRetaguarda.EstabelecimentoEnum == this.GetEnumPetShop()) {
                }
            }
            catch (ex) {
                LogarException(ex);
            }
        }
    };
    FrmECont.prototype.AlterouTextoQuantidade = function (s, e) {
        if (CNum(this.txtQuantidade.GetText()) <= 0) {
            this.EntityTela.Qtde = 1;
        }
        else {
            this.EntityTela.Qtde = CNum(this.txtQuantidade.GetText());
        }
        this.EntityTela.Total = this.EntityTela.Valor_Unitario * this.EntityTela.Qtde;
    };
    FrmECont.prototype.AlterouTextoParcela = function (s, e) {
        var _this = this;
        try {
            if (CNum(this.txtParcela.GetText()) <= 0) {
                this.ParcelaPendente.Parcela = 1;
            }
            var entity = void 0;
            entity = this.ParcelasPendentes.filter(function (item) { return item.Parcela == CNum(_this.txtParcela.GetText()); })[0] || null;
            if (entity) {
                this.ParcelaPendente = entity;
            }
            else {
                this.LimparParcelasPendentes();
                //this.ParcelaPendente.Parcela = this.GetProximaParcela();
                this.txtParcela.SetText(this.ParcelaPendente.Parcela.toString());
                this.RefreshAngular();
            }
            RecebeFoco(this.chkCortesiaParcela.ID);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    FrmECont.prototype.AntesExcluirPendente = function (s, e) {
        if (!e.item) {
            e.cancelar = true;
            return;
        }
        try {
            var parametros = void 0;
            parametros = {
                codigo: e.item.Codigo_Receber
            };
            var receber = this.ExecutarFuncaoServerSideSynch("ObterDadosContasReceber", parametros);
            if (receber && receber.Baixa) {
                MostrarAlerta("Esta parcela não pode ser removida, pois já foi baixada");
                e.cancelar = true;
                return;
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    FrmECont.prototype.ClicouAdicionar = function (s, e) {
        var _this = this;
        if (this.CONTRATO_CANCELADO) {
            MostrarAlerta("Este contrato foi cancelado, não será possível alterá-lo!");
            return false;
        }
        if (!this.ValidarAdicionarParcela()) {
            return;
        }
        var item;
        item = this.ParcelasPendentes.filter(function (item) { return item.Parcela == _this.ParcelaPendente.Parcela; })[0] || null;
        if (!item) {
            item = {};
            item.Contador = this.ParcelasPendentes.length + 1;
            this.ParcelasPendentes.push(item);
        }
        item.Codigo_Forma_Recebimento = this.ParcelaPendente.Codigo_Forma_Recebimento;
        item.Conta_Contabil = this.ParcelaPendente.Conta_Contabil;
        item.Conta_Contabil_Descricao = this.txtContaContabil.LabelResultado.textContent;
        item.Cortesia = this.ParcelaPendente.Cortesia;
        item.Data_Vencimento = this.ParcelaPendente.Data_Vencimento;
        item.Codigo_Forma_Recebimento = this.ParcelaPendente.Codigo_Forma_Recebimento;
        item.Forma_Recebimento = this.cboFormaRecebimentoParcela.GetText();
        item.Parcela = this.ParcelaPendente.Parcela;
        item.Valor = this.ParcelaPendente.Valor;
        item.Codigo_Receber = 0;
        this.ParcelaPendente.Data_Vencimento = this.ParcelaPendente.Data_Vencimento.addMonths(1);
        this.ParcelaPendente.Parcela = this.GetProximaParcela();
        this.txtParcela.Focus();
        this.RefreshAngular();
    };
    FrmECont.prototype.ValidarAdicionarParcela = function () {
        var validador = true;
        var mensagem = "Preencha o campo corretamente: ";
        if (this.ParcelaPendente.Parcela <= 0) {
            mensagem += "Parcela";
            validador = false;
        }
        else if (!this.ParcelaPendente.Data_Vencimento) {
            mensagem += "Vencimento";
            validador = false;
        }
        else if (this.ParcelaPendente.Conta_Contabil <= 0) {
            mensagem += "Conta Contábil";
            validador = false;
        }
        else if (this.ParcelaPendente.Codigo_Forma_Recebimento <= 0) {
            mensagem += "Forma de Recebimento";
            validador = false;
        }
        else if (this.ParcelaPendente.Valor <= 0) {
            mensagem += "Valor da parcela";
            validador = false;
        }
        if (validador) {
            try {
                var parametros = void 0;
                parametros = {
                    codContaContabil: this.ParcelaPendente.Conta_Contabil
                };
                var conta = this.ExecutarFuncaoServerSideSynch("ObterDadosContaContabil", parametros);
                if (conta && conta.Sintetico == "S") {
                    mensagem = "A conta contábil deve ser do tipo Análitica";
                    validador = false;
                }
            }
            catch (ex) {
                LogarException(ex);
            }
        }
        if (!validador) {
            MostrarAlerta(mensagem);
        }
        return validador;
    };
    FrmECont.prototype.ClicouEmitirContrato = function (s, e) {
        if (this.EntityTela.Codigo <= 0 || !this.EntityTela.Codigo) {
            MostrarAlerta("Informe um contrato para ser impresso!");
            return;
        }
        try {
            var parametros = void 0;
            parametros = {
                codContrato: this.EntityTela.Codigo,
                codModelo: this.EntityTela.Modelo_Contrato
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("ImprimirContrato", parametros, function (d) {
                fecharEspera();
                abrirTelaNovaAbaParametros(formataURLRelativa("/EditorHTML.aspx"), null);
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
    FrmECont.prototype.ClicouCancelarReplicar = function (s, e) {
        this.btnReplicar.SetEnabled(true);
        this.Replicas = [];
        this.LimparReplique();
        this.mdReplicar.Hide();
    };
    FrmECont.prototype.CliclouReplicar = function (s, e) {
        if (this.EntityTela.Cortesia) {
            MostrarAlerta("Impossivel replicar as parcelas de um contrato marcado como cortesia");
            return;
        }
        if (this.ParcelasPendentes.length <= 0) {
            MostrarAlerta("Insira ao menos uma parcela para gerar a replicação");
            return;
        }
        this.LimparReplique();
        this.mdReplicar.Show();
    };
    FrmECont.prototype.ClicouReplicarParcelas = function (s, e) {
        this.AdicionarParcelaReplicadaGrade();
    };
    FrmECont.prototype.ClicouOkReplicar = function (s, e) {
        this.Replicas.splice(0, 1);
        this.ParcelasPendentes = this.ParcelasPendentes.concat(this.Replicas);
        this.ParcelasPendentes.sort(function (a, b) { return a.Parcela - b.Parcela; });
        this.ParcelaPendente.Data_Vencimento = this.ParcelaPendente.Data_Vencimento.addMonths(1);
        this.ParcelaPendente.Parcela = this.GetProximaParcela();
        this.RefreshAngular();
        this.mdReplicar.Hide();
        this.LimparReplique();
    };
    FrmECont.prototype.ClicouCalcular = function (s, e) {
        this.ParcelaPendente.Valor = this.EntityTela.Total;
        this.RefreshAngular();
    };
    FrmECont.prototype.ClicouAnexo = function (s, e) {
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
    FrmECont.prototype.ContratoCheckChanged = function (s, e) {
        if (this.chkUtilizarContrato.Checked) {
            this.txtContrato.Visible = true;
        }
        else {
            this.txtContrato.Visible = false;
        }
    };
    FrmECont.prototype.AdicionarParcelaReplicadaGrade = function () {
        var mensagem = "Preencha o campo corretamente: ";
        var validador = true;
        if (CNum(this.txtQtdeParcela.GetText()) <= 0) {
            mensagem += "Parcela";
            validador = false;
        }
        else if (this.cboDias.GetValue() == "") {
            mensagem += "Dias";
            validador = false;
        }
        else if (CNum(this.txtDias.GetText()) <= 0) {
            mensagem += "Dias";
            validador = false;
        }
        if (validador) {
            this.Replicas = [];
            this.AdicionarParcelaReplicada();
        }
        else {
            MostrarAlerta(mensagem);
        }
    };
    FrmECont.prototype.AdicionarParcelaReplicada = function () {
        var _this = this;
        var ultimaParcela;
        var arrayAux = this.ParcelasPendentes;
        ultimaParcela = arrayAux.sort(function (a, b) { return b.Parcela - a.Parcela; })[0] || null;
        if (!ultimaParcela) {
            return;
        }
        try {
            var parametros = void 0;
            parametros = {
                ultimaParcela: ultimaParcela,
                tipoDias: this.cboDias.GetValue(),
                qtdeDias: CNum(this.txtDias.GetText()),
                qtdeParcelas: CNum(this.txtQtdeParcela.GetText())
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("DuplicarParcelasContrato", parametros, function (d) {
                fecharEspera();
                _this.Replicas = GetRetornoAJAX(d);
                _this.gridReplicar.AtualizarGrid();
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
    FrmECont.prototype.SelecionouAnimal = function (s, e) {
        this.txtAnimal.Procurar(e.data["Codigo"]);
    };
    return FrmECont;
}(MouraPageCadastroAngular));
var frmECont = new FrmECont();
//# sourceMappingURL=frmECont.js.map