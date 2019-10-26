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
var C_ConLan = /** @class */ (function (_super) {
    __extends(C_ConLan, _super);
    function C_ConLan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ConLan.prototype, "txtContaDebito_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContaDebito_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConLan.prototype, "txtContaCredito_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContaCredito_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConLan.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConLan.prototype, "txtTipoLancamento", {
        get: function () {
            return window['txtTipoLancamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConLan.prototype, "txtContaCredito", {
        get: function () {
            return window['txtContaCredito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConLan.prototype, "txtContaDebito", {
        get: function () {
            return window['txtContaDebito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConLan.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConLan.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConLan.prototype, "cboTipo", {
        get: function () {
            return window['cboTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConLan.prototype, "chkDesconsiderarLancamento", {
        get: function () {
            return window['chkDesconsiderarLancamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConLan.prototype, "lblMsgLanc", {
        get: function () {
            return window['lblMsgLanc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConLan.prototype, "btnTipos", {
        get: function () {
            return window['btnTipos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConLan.prototype, "cboGrupo", {
        get: function () {
            return window['cboGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConLan.prototype, "cnkLancamentoMultiplo", {
        get: function () {
            return window['cnkLancamentoMultiplo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConLan.prototype, "hdnItem", {
        get: function () {
            return $("#hdnItem")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConLan.prototype, "lblCredito", {
        get: function () {
            return window['lblCredito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConLan.prototype, "lblDebito", {
        get: function () {
            return window['lblDebito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConLan.prototype, "grdTiposCadastrados", {
        get: function () {
            return window['grdTiposCadastrados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConLan.prototype, "grdItem", {
        get: function () {
            return window['grdItem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConLan.prototype, "txtHistoricoPadrao", {
        get: function () {
            return window['txtHistoricoPadrao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConLan.prototype, "mdConfiguracoes", {
        get: function () {
            return window['mdConfiguracoes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConLan.prototype, "Parametros", {
        get: function () {
            if (!this.GetScope()["Parametros"]) {
                return [];
            }
            else {
                return this.GetScope()["Parametros"];
            }
        },
        set: function (value) {
            this.GetScope()["Parametros"] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_ConLan.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grdItem) {
            adicionarEventoMoura(this.grdItem.Validando, this.OnClickBotaoGravar, this);
            adicionarEventoMoura(this.grdItem.ExcluindoItem, this.OnClickExcluirCampos, this);
            adicionarEventoMoura(this.grdItem.LimpouItem, this.OnClickBotaoLimpar, this);
            adicionarEventoMoura(this.grdItem.Grid.SelecionouLinha, this.OnClickBotaoLinhaItem, this);
        }
        if (this.txtTipoLancamento) {
            adicionarEventoMoura(this.txtTipoLancamento.AntesAbrirProcura, this.OnTipoLancamentoAntesAbrirProcura, this);
            adicionarEventoMoura(this.txtTipoLancamento.AbriuProcura, this.OnTipoLancamentoPesquisando, this);
            adicionarEventoMoura(this.txtTipoLancamento.Procurou, this.OnProcurouTipoLancamento, this);
        }
        if (this.txtContaDebito) {
            adicionarEventoMoura(this.txtContaDebito.AntesAbrirProcura, this.OnContaContabilDebitoAntesAbrirProcura, this);
            adicionarEventoMoura(this.txtContaDebito.Pesquisando, this.OnContaContabilDebitoPesquisando, this);
            adicionarEventoMoura(this.txtContaDebito.Procurou, this.OnProcurouContaContabilDebito, this);
            adicionarEventoMoura(this.txtContaDebito.AbriuProcura, this.OnAbriuProcuraContaContabilDebito, this);
        }
        if (this.txtContaCredito) {
            adicionarEventoMoura(this.txtContaCredito.AntesAbrirProcura, this.OnContaContabilCreditoAntesAbrirProcura, this);
            adicionarEventoMoura(this.txtContaCredito.Pesquisando, this.OnContaContabilCreditoPesquisando, this);
            adicionarEventoMoura(this.txtContaCredito.Procurou, this.OnProcurouContaContabilCredito, this);
            adicionarEventoMoura(this.txtContaCredito.AbriuProcura, this.OnAbriuProcuraContaContabilCredito, this);
        }
        if (this.txtCodigo) {
            adicionarEventoMoura(this.txtCodigo.Procurou, this.PreencherGradeItens, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.PreencherEmpresaContabil, this);
        }
        if (this.cboTipo) {
            adicionarEventoMoura(this.cboTipo.SelectedItemChanged, this.OnTipoChanged, this);
        }
        if (this.cboGrupo) {
            adicionarEventoMoura(this.cboGrupo.SelectedItemChanged, this.OnGrupoChanged, this);
        }
        if (this.btnTipos) {
            adicionarEventoMoura(this.btnTipos.Click, this.OnClickTipos, this);
        }
        if (this.grdTiposCadastrados) {
            adicionarEventoMoura(this.grdTiposCadastrados.SelecionouLinha, this.OnClickBotaoLinha, this);
        }
        this.PreencherEmpresaContabil();
    };
    C_ConLan.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.validarTipo();
    };
    C_ConLan.prototype.OnClickExcluirCampos = function (s, e) {
        var lista = [];
        for (var x = 0; x < this.Parametros.length; x++) {
            if (this.Parametros.length == 1) {
                this.Parametros = [];
            }
            else {
                if (this.Parametros[x] != e.item) {
                    lista.push(this.Parametros[x]);
                }
            }
        }
        this.Parametros = [];
        this.Parametros = lista;
    };
    C_ConLan.prototype.OnClickBotaoLinhaItem = function (s, e) {
        try {
            this.cboGrupo.SetValue(e.data.Cod_Grupo);
            this.txtContaDebito.Limpar();
            this.txtContaCredito.Limpar();
            this.txtHistoricoPadrao.Limpar();
            this.cnkLancamentoMultiplo.Checked = e.data.Lancamento_Multiplo;
            if (e.data.Cod_Conta_Debito > 0) {
                this.txtContaDebito.Procurar(e.data.Cod_Conta_Debito);
            }
            if (e.data.Cod_Conta_Credito > 0) {
                this.txtContaCredito.Procurar(e.data.Cod_Conta_Credito);
            }
            if (e.data.Cod_Historico > 0) {
                this.txtHistoricoPadrao.Procurar(e.data.Cod_Historico);
            }
            this.VerificarCamposNota();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConLan.prototype.OnClickBotaoLimpar = function (s, e) {
        try {
            this.LimparCampoItens();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConLan.prototype.OnClickBotaoGravar = function (s, e) {
        try {
            if (this.cboGrupo.GetValue() == "") {
                MostrarAlerta("Informe o Grupo!");
                e.cancelar = true;
                return false;
            }
            if (this.txtContaDebito.GetText().CNum() == 0 && this.txtContaDebito.Enabled) {
                MostrarAlerta("Informe a conta de débito!");
                e.cancelar = true;
                return false;
            }
            if (this.txtContaCredito.GetText().CNum() == 0 && this.txtContaCredito.Enabled) {
                MostrarAlerta("Informe a conta de crédito!");
                e.cancelar = true;
                return false;
            }
            if (this.txtHistoricoPadrao.GetText().CNum() == 0) {
                MostrarAlerta("Informe o histórico!");
                e.cancelar = true;
                return false;
            }
            if (this.cboTipo.GetValue() == "CM" && this.txtTipoLancamento.GetText() == "") {
                MostrarAlerta("Tipo de Lançamento Contas a Pagar");
                e.cancelar = true;
                return false;
            }
            var maiorContador;
            if (this.Parametros.length > 0) {
                maiorContador = Math.max.apply(Math, this.Parametros.map(function (o) { return o.Contador; })) + 1;
            }
            else {
                maiorContador = 1;
            }
            e.item.Contador = maiorContador;
            e.item.Cod_Conta_Credito = this.txtContaCredito.GetText().CNum();
            e.item.Cod_Conta_Debito = this.txtContaDebito.GetText().CNum();
            e.item.Desc_Conta_Credito = this.txtContaCredito.GetResultado();
            e.item.Desc_Conta_Debito = this.txtContaDebito.GetResultado();
            e.item.Cod_Grupo = this.cboGrupo.GetValue();
            e.item.Desc_Grupo = this.cboGrupo.GetText();
            e.item.Cod_Historico = this.txtHistoricoPadrao.GetText().CNum();
            e.item.Desc_Historico = this.txtHistoricoPadrao.GetResultado();
            e.item.Lancamento_Multiplo = this.cnkLancamentoMultiplo.Checked;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConLan.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar;
        this.EntityTela.Parametros = [];
        for (var x = 0; x < this.Parametros.length; ++x) {
            var parametro = this.Parametros[x];
            if (parametro) {
                var item = {};
                item.Tipo_Parametro = parametro.Cod_Grupo;
                item.Conta_Credito = parametro.Cod_Conta_Credito;
                item.Conta_Debito = parametro.Cod_Conta_Debito;
                item.Historico_Padrao = parametro.Cod_Historico;
                item.Lancamento_Multiplo = parametro.Lancamento_Multiplo;
                this.EntityTela.Parametros.push(item);
            }
        }
        if (this.chkDesconsiderarLancamento.Checked) {
            this.EntityTela.Desconsiderar_Lancamentos = true;
        }
        else {
            this.EntityTela.Desconsiderar_Lancamentos = false;
        }
        return true;
    };
    C_ConLan.prototype.PreencherEmpresaContabil = function () {
        this.LimparCampoItens();
        if (this.txtContaDebito_hdnEmpresaContabil != undefined) {
            this.txtContaDebito_hdnEmpresaContabil.value = this.cboEmpresa.GetValue();
        }
        if (this.txtContaCredito_hdnEmpresaContabil != undefined) {
            this.txtContaCredito_hdnEmpresaContabil.value = this.cboEmpresa.GetValue();
        }
        if (this.txtContaCredito) {
            adicionarEventoMoura(this.txtContaCredito.AntesAbrirProcura, this.OnContaContabilCreditoAntesAbrirProcura, this);
            adicionarEventoMoura(this.txtContaCredito.Pesquisando, this.OnContaContabilCreditoPesquisando, this);
        }
        if (this.txtContaDebito) {
            adicionarEventoMoura(this.txtContaDebito.Pesquisando, this.OnContaContabilDebitoPesquisando, this);
            adicionarEventoMoura(this.txtContaDebito.AntesAbrirProcura, this.OnContaContabilDebitoAntesAbrirProcura, this);
        }
        this.txtCodigo.LimparParametros();
        this.txtCodigo.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
    };
    C_ConLan.prototype.OnClickBotaoLinha = function (s, e) {
        try {
            this.PreencherEntidade(e.rowKey);
            this.PreencherGradeItens();
            this.mdConfiguracoes.ModalDialog.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConLan.prototype.OnClickTipos = function (s, e) {
        e.processOnServer = false;
        if (this.cboTipo.GetValue() == "" || this.cboTipo.GetValue() == undefined || this.cboTipo.GetValue() == null) {
            MostrarAlerta("Informe o campo Tipo!");
            return;
        }
        if (this.cboEmpresa.GetValue() == 0) {
            MostrarAlerta("Informe a empresa!");
            return;
        }
        this.PreencherConfiguracoesCadastradas();
        this.mdConfiguracoes.ModalDialog.Show();
    };
    C_ConLan.prototype.OnGrupoChanged = function () {
        this.PreencherItemPorGrupo();
        this.VerificarCamposNota();
    };
    C_ConLan.prototype.PreencherItemPorGrupo = function () {
        try {
            for (var x = 0; x < this.Parametros.length; ++x) {
                var parametro = this.Parametros[x];
                if (parametro.Cod_Grupo == this.cboGrupo.GetValue()) {
                    this.txtContaDebito.Limpar();
                    this.txtContaCredito.Limpar();
                    this.txtHistoricoPadrao.Limpar();
                    this.cnkLancamentoMultiplo.Checked = parametro.Lancamento_Multiplo;
                    if (parametro.Cod_Conta_Debito > 0) {
                        this.txtContaDebito.Procurar(parametro.Cod_Conta_Debito);
                    }
                    if (parametro.Cod_Conta_Credito > 0) {
                        this.txtContaCredito.Procurar(parametro.Cod_Conta_Credito);
                    }
                    if (parametro.Cod_Historico > 0) {
                        this.txtHistoricoPadrao.Procurar(parametro.Cod_Historico);
                    }
                    this.VerificarCamposNota();
                    return;
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConLan.prototype.PreencherConfiguracoesCadastradas = function () {
        var parametros = {
            Tipo: this.cboTipo.GetValue(),
            codEmpresa: this.cboEmpresa.GetValue()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("PreencherConfiguracoesCadastradas", parametros);
        if (retorno) {
            this.grdTiposCadastrados.PreencherGrid(retorno);
        }
        else {
            this.grdTiposCadastrados.PreencherGrid(null);
        }
    };
    C_ConLan.prototype.OnTipoChanged = function () {
        this.PreencherComboGrupo();
        this.VerificarCamposNota();
        this.LabelMensagemLancamentos();
        this.validarTipo();
        this.Parametros = [];
    };
    C_ConLan.prototype.validarTipo = function () {
        if (this.cboTipo.GetValue() == "CM") {
            this.txtTipoLancamento.Enabled = true;
            this.txtTipoLancamento.Obrigatorio = true;
            this.txtTipoLancamento.PermitirProcurar = true;
        }
        else {
            this.txtTipoLancamento.Enabled = false;
            this.txtTipoLancamento.Obrigatorio = false;
            this.txtTipoLancamento.PermitirProcurar = false;
            this.txtTipoLancamento.Limpar();
        }
    };
    C_ConLan.prototype.PreencherComboGrupo = function () {
        this.cboGrupo.ClearItems();
        this.cboGrupo.AddItem("", "", "");
        this.cboGrupo.AddItem("Valor Total", "VR", "");
        this.cnkLancamentoMultiplo.Checked = false;
        this.cnkLancamentoMultiplo.Enabled = false;
        if (this.cboTipo.GetValue() == "CPCA") {
            this.chkDesconsiderarLancamento.Enabled = true;
        }
        else {
            this.chkDesconsiderarLancamento.Enabled = false;
            this.chkDesconsiderarLancamento.Checked = false;
        }
        if (this.cboTipo.GetValue() == "CM" || this.cboTipo.GetValue() == "NS") {
            this.cboGrupo.AddItem("ICMS", "ICMS", "");
            this.cboGrupo.AddItem("ICMS - ST", "ICMSST", "");
            this.cboGrupo.AddItem("IPI", "IPI", "");
            this.cboGrupo.AddItem("PIS", "PIS", "");
            this.cboGrupo.AddItem("COFINS", "COFINS", "");
            this.cboGrupo.AddItem("ISSQN", "ISSQN", "");
            this.cboGrupo.AddItem("IRRF", "IRRF", "");
            this.cboGrupo.AddItem("INSS", "INSS", "");
            this.cboGrupo.AddItem("CSLL", "CSLL", "");
            this.cnkLancamentoMultiplo.Checked = true;
            this.cnkLancamentoMultiplo.Enabled = true;
        }
    };
    C_ConLan.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.Parametros = [];
        this.LabelMensagemLancamentos();
        this.LimparCampoItens();
        Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        this.txtTipoLancamento.Limpar();
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.cnkLancamentoMultiplo.Checked = false;
        this.validarTipo();
        return true;
    };
    C_ConLan.prototype.LimparCampoItens = function () {
        this.txtContaDebito.Limpar();
        this.txtContaCredito.Limpar();
        this.txtHistoricoPadrao.Limpar();
        this.cboGrupo.LimparSelecao();
        this.PreencherComboGrupo();
        this.lblDebito.Visible = false;
        this.lblCredito.Visible = false;
    };
    C_ConLan.prototype.PreencherGradeItens = function () {
        var parametros = {
            Codigo: this.txtCodigo.GetText().CNum()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("PreencherLista", parametros);
        if (retorno.length > 0) {
            this.Parametros = retorno;
            if (retorno[0].Tipo_Configuracao == "CPCA") {
                this.chkDesconsiderarLancamento.Enabled = true;
            }
            else {
                this.chkDesconsiderarLancamento.Enabled = false;
            }
            if (retorno[0].Desconsiderar_Lancamentos == "S") {
                this.chkDesconsiderarLancamento.Checked = true;
            }
            else {
                this.chkDesconsiderarLancamento.Checked = false;
            }
        }
        else {
            this.Parametros = [];
        }
        this.validarTipo();
    };
    C_ConLan.prototype.LabelMensagemLancamentos = function () {
        if (this.cboTipo.GetValue() == "LA") {
            this.lblMsgLanc.Visible = true;
        }
        else {
            this.lblMsgLanc.Visible = false;
        }
    };
    C_ConLan.prototype.VerificarCamposNota = function () {
        if (this.cboTipo.GetValue() == "CM") {
            var parametros = {
                codEmpresa: this.cboEmpresa.GetValue()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetParametroByEmpresa", parametros);
            if (retorno) {
                if (retorno.Integracao_Nota_Entrada == 2 || retorno.Integracao_Nota_Entrada == 3) {
                    if (this.cboGrupo.GetValue() == "VR") {
                        this.txtContaCredito.Enabled = false;
                        this.txtContaDebito.Enabled = true;
                        this.lblDebito.Visible = true;
                        this.lblCredito.Visible = false;
                        this.txtContaCredito.Limpar();
                    }
                    else if (this.cboGrupo.GetValue() != "") {
                        this.txtContaCredito.Enabled = true;
                        this.txtContaDebito.Enabled = false;
                        this.lblCredito.Visible = true;
                        this.lblDebito.Visible = false;
                        this.txtContaDebito.Limpar();
                    }
                }
            }
        }
        else {
            this.txtContaCredito.Enabled = true;
            this.txtContaDebito.Enabled = true;
            this.lblDebito.Visible = false;
            this.lblCredito.Visible = false;
        }
    };
    C_ConLan.prototype.OnProcurouContaContabilCredito = function () {
        this.txtContaCredito.LimparParametros();
        this.txtContaCredito.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
    };
    C_ConLan.prototype.OnAbriuProcuraContaContabilCredito = function () {
        this.txtContaCredito.LimparParametros();
        this.txtContaCredito.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
    };
    C_ConLan.prototype.OnContaContabilCreditoAntesAbrirProcura = function (s, ev) {
        this.txtContaCredito.LimparParametros();
        this.txtContaCredito.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
    };
    C_ConLan.prototype.OnContaContabilCreditoPesquisando = function (s, ev) {
        this.txtContaCredito.LimparParametros();
        this.txtContaCredito.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
        var retorno = false;
        var retornoContaContabilExiste = false;
        var parametros;
        var parametroSintetica;
        var parametroReduzido;
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
    C_ConLan.prototype.OnTipoLancamentoAntesAbrirProcura = function (s, ev) {
        this.txtTipoLancamento.AddParametro("TipoConfiguracaoContabil", "CPCA");
        this.txtTipoLancamento.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
    };
    C_ConLan.prototype.OnTipoLancamentoPesquisando = function () {
        this.txtTipoLancamento.AddParametro("TipoConfiguracaoContabil", "CPCA");
        this.txtTipoLancamento.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
    };
    C_ConLan.prototype.OnProcurouTipoLancamento = function (s, ev) {
        this.txtTipoLancamento.AddParametro("TipoConfiguracaoContabil", "CPCA");
        this.txtTipoLancamento.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
        if (String.IsNullOrWhiteSpace(this.txtTipoLancamento.GetText())) {
            ev.Cancelar = true;
            return;
        }
        else {
            var params = {
                codConfig: this.txtTipoLancamento.GetText().CNum(),
                codEmpresa: this.cboEmpresa.GetValue()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetConfiguracaoByCodigo", params);
            if (retorno) {
                this.txtTipoLancamento.SetText(retorno.Reduzido.toString());
            }
            else {
                if (!this.ExecutarFuncaoServerSideSynch("ValidarReduzidoEmpresa", params)) {
                    this.txtTipoLancamento.Limpar();
                    MostrarAlerta("Conta a pagar inválida!");
                    this.txtTipoLancamento.Focus();
                    ev.Cancelar = true;
                    return;
                }
            }
        }
    };
    C_ConLan.prototype.OnProcurouContaContabilDebito = function () {
        this.txtContaDebito.LimparParametros();
        this.txtContaDebito.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
    };
    C_ConLan.prototype.OnAbriuProcuraContaContabilDebito = function () {
        this.txtContaDebito.LimparParametros();
        this.txtContaDebito.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
    };
    C_ConLan.prototype.OnContaContabilDebitoAntesAbrirProcura = function (s, ev) {
        this.txtContaDebito.LimparParametros();
        this.txtContaDebito.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
    };
    C_ConLan.prototype.OnContaContabilDebitoPesquisando = function (s, ev) {
        this.txtContaDebito.LimparParametros();
        this.txtContaDebito.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
        var retorno = false;
        var retornoContaContabilExiste = false;
        var parametros;
        var parametroSintetica;
        var parametroReduzido;
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
    return C_ConLan;
}(MouraPageCadastroAngular));
var c_ConLan = new C_ConLan();
//# sourceMappingURL=C_ConLan.js.map