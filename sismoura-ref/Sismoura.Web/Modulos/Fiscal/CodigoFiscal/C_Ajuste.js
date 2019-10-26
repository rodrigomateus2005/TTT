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
var C_Ajuste = /** @class */ (function (_super) {
    __extends(C_Ajuste, _super);
    function C_Ajuste() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Ajuste.prototype, "Ajustes", {
        get: function () {
            return this.GetScope()["Ajustes"];
        },
        set: function (value) {
            this.GetScope()["Ajustes"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ajuste.prototype, "Ajuste", {
        get: function () {
            if (!this.GetScope()["Ajuste"]) {
                return null;
            }
            else {
                return this.GetScope()["Ajuste"];
            }
        },
        set: function (value) {
            this.GetScope()["Ajuste"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ajuste.prototype, "AjustesRetorno", {
        get: function () {
            if (!this.GetScope()["AjustesRetorno"]) {
                return null;
            }
            else {
                return this.GetScope()["AjustesRetorno"];
            }
        },
        set: function (value) {
            this.GetScope()["AjustesRetorno"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ajuste.prototype, "AjusteRetorno", {
        get: function () {
            return this.GetScope()["AjusteRetorno"];
        },
        set: function (value) {
            this.GetScope()["AjusteRetorno"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ajuste.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ajuste.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ajuste.prototype, "cboImposto", {
        get: function () {
            return window['cboImposto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ajuste.prototype, "cboOperacao", {
        get: function () {
            return window['cboOperacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ajuste.prototype, "txtCodigoAjuste", {
        get: function () {
            return window['txtCodigoAjuste_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ajuste.prototype, "txtContaDebito", {
        get: function () {
            return window['txtContaDebito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ajuste.prototype, "txtContaCredito", {
        get: function () {
            return window['txtContaCredito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ajuste.prototype, "txtHistorico", {
        get: function () {
            return window['txtHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ajuste.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ajuste.prototype, "txtContaCredito_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContaCredito_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ajuste.prototype, "txtContaDebito_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContaDebito_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ajuste.prototype, "hdnEmpresa", {
        get: function () {
            return $("#hdnEmpresa")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ajuste.prototype, "cboTipoOperacao", {
        get: function () {
            return window['cboTipoOperacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ajuste.prototype, "txtCodigoSubItem", {
        get: function () {
            return window['txtCodigoSubItem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ajuste.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ajuste.prototype, "GridContabil", {
        get: function () {
            return window['GridContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ajuste.prototype, "btnAdicionar", {
        get: function () {
            return window['btnAdicionar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ajuste.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Ajuste.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.DepoisPesquisar, this.OnDepoisPesquisar, this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGrdSelecionouItem, this);
        }
        if (this.GridContabil) {
            adicionarEventoMoura(this.GridContabil.Grid.SelecionouLinha, this.OnGrdContabilSelecionou, this);
            adicionarEventoMoura(this.GridContabil.Validando, this.OnAdicionandoComando, this);
            adicionarEventoMoura(this.GridContabil.LimpouItem, this.ClickLimpar, this);
        }
        if (this.cboImposto) {
            adicionarEventoMoura(this.cboImposto.SelectedItemChanged, this.ValidarCampos, this);
        }
        if (this.btnAdicionar) {
            adicionarEventoMoura(this.btnAdicionar.Click, this.OnAdicionandoComando, this);
        }
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.ClickLimpar, this);
        }
        if (this.txtContaCredito) {
            adicionarEventoMoura(this.txtContaCredito.AntesAbrirProcura, this.OnContaCreditoAntesAbrirProcura, this);
            adicionarEventoMoura(this.txtContaCredito.PesquisandoContabil, this.OnContaCreditoPesquisando, this);
        }
        if (this.txtContaDebito) {
            adicionarEventoMoura(this.txtContaDebito.AntesAbrirProcura, this.OnContaDebitoAntesAbrirProcura, this);
            adicionarEventoMoura(this.txtContaDebito.PesquisandoContabil, this.OnContaDebitoPesquisando, this);
        }
        if (this.txtHistorico) {
            //adicionarEventoMoura(this.txtHistorico.Procurou,this.ValidaCamposContabeis,this);
        }
        this.ValidarCampos();
        this.PreencherEmpresaContabil();
    };
    C_Ajuste.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        if (this.GetScope()) {
            if (!this.GetScope().MudouZero) {
                this.GetScope().MudouZero = $.proxy(this.MudouZero, this);
                this.GetScope().$watch(function (scope) { return scope.Entity.Codigo_Subitem_GIA; }, this.GetScope().MudouZero);
            }
        }
        this.ValidaCamposContabeis();
        this.AjustesRetorno = [];
    };
    C_Ajuste.prototype.MudouZero = function (Padrao) {
        var Entity = this.GetScope().Entity;
        if (Padrao == "0") {
            Padrao = "";
            this.RefreshAngular();
        }
        else if ((CNum(Padrao) > 0) && (Padrao == Entity.Codigo_Subitem_GIA)) {
            Entity.Codigo_Subitem_GIA = ("" + ("00000" + Padrao).slice(-5));
            this.txtCodigoSubItem.SetText("" + Padrao);
        }
    };
    C_Ajuste.prototype.PreencherEmpresaContabil = function () {
        this.txtContaCredito.Limpar();
        this.txtContaDebito.Limpar();
        if (this.txtContaDebito_hdnEmpresaContabil != undefined) {
            this.txtContaDebito_hdnEmpresaContabil.value = this.hdnEmpresa.value;
        }
        if (this.txtContaCredito_hdnEmpresaContabil != undefined) {
            this.txtContaCredito_hdnEmpresaContabil.value = this.hdnEmpresa.value;
        }
    };
    C_Ajuste.prototype.ValidaCamposContabeis = function () {
        /*if (this.txtContaDebito.GetText() == ""
            || this.txtContaCredito.GetText() == ""
            || this.txtHistorico.GetText() == "") {
            this.GridContabil.btnAdiconar.SetEnabled(false);
            this.GridContabil.btnNovo.SetEnabled(false);
        } else {
            this.GridContabil.btnAdiconar.SetEnabled(true);
            this.GridContabil.btnNovo.SetEnabled(true);
        }*/
    };
    C_Ajuste.prototype.ValidarCampos = function () {
        if (this.cboImposto.GetValue() != "1") {
            this.txtCodigoAjuste.Enabled = false;
            this.txtCodigoSubItem.Enabled = false;
            this.cboTipoOperacao.Enabled = false;
            this.txtCodigoAjuste.Obrigatorio = false;
            this.txtCodigoSubItem.Obrigatorio = false;
            this.cboTipoOperacao.Obrigatorio = false;
            this.txtCodigoSubItem.Limpar();
            this.txtCodigoAjuste.Limpar();
        }
        else {
            this.txtCodigoAjuste.Enabled = true;
            this.txtCodigoSubItem.Enabled = true;
            this.cboTipoOperacao.Enabled = true;
            this.txtCodigoAjuste.Obrigatorio = true;
            this.txtCodigoSubItem.Obrigatorio = true;
            this.cboTipoOperacao.Obrigatorio = true;
        }
    };
    C_Ajuste.prototype.OnContaCreditoAntesAbrirProcura = function (s, ev) {
        this.txtContaCredito.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
    };
    C_Ajuste.prototype.OnContaCreditoPesquisando = function (s, ev) {
        this.txtContaCredito.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
    };
    C_Ajuste.prototype.OnContaDebitoAntesAbrirProcura = function (s, ev) {
        this.txtContaCredito.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
    };
    C_Ajuste.prototype.OnContaDebitoPesquisando = function (s, ev) {
        this.txtContaCredito.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
    };
    C_Ajuste.prototype.OnAdicionandoComando = function (s, e) {
        e.cancelar = true;
        if (!this.ValidaCampoContabil(this.txtContaDebito)) {
            e.cancelar = true;
            return;
        }
        if (!this.ValidaCampoContabil(this.txtContaCredito)) {
            e.cancelar = true;
            return;
        }
        if (!this.ValidaCampoContabil(this.txtHistorico)) {
            e.cancelar = true;
            return;
        }
        if (this.GridContabil.Grid.DataSource.FindAll("Empresa", this.cboEmpresa.GetValue()).length > 0) {
            MostrarAlerta("Não foi possível adicionar mais de um ajuste contábil por empresa.", 0);
        }
        else {
            var entidade = [];
            entidade.Empresa = this.cboEmpresa.GetValue();
            entidade.Empresa_Exibicao = this.cboEmpresa.GetValue().toString() + "-" + this.cboEmpresa.GetText();
            entidade.Conta_Credito = this.Ajuste.Conta_Credito;
            entidade.Conta_Credito_Exibicao = this.txtContaCredito.TextBoxAdicional.value + "-" + this.txtContaCredito.GetResultado();
            entidade.Conta_Debito = this.Ajuste.Conta_Debito;
            entidade.Conta_Debito_Exibicao = this.txtContaDebito.TextBoxAdicional.value + "-" + this.txtContaDebito.GetResultado();
            entidade.Historico = this.Ajuste.Historico;
            entidade.Historico_Exibicao = this.Ajuste.Historico + "-" + this.txtHistorico.GetResultado();
            this.AjustesRetorno.push(entidade);
        }
        this.LimparCamposContabeis();
    };
    C_Ajuste.prototype.ClickLimpar = function (s, e) {
        e.processOnServer = false;
        this.LimparCamposContabeis();
    };
    C_Ajuste.prototype.LimparCamposContabeis = function () {
        this.cboEmpresa.LimparSelecao();
        this.txtContaCredito.Limpar();
        this.txtContaDebito.Limpar();
        this.txtHistorico.Limpar();
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
    };
    C_Ajuste.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_Modulo_Contabil && ValoresSismoura.UtilizarModuloContabil) {
            if (this.txtContaCredito.GetText().CNum() == 0 || this.txtContaDebito.GetText().CNum() == 0 || this.txtHistorico.GetText().CNum() == 0) {
                MostrarAlerta("Preencher corretamente os campos da Aba Contabilidade para possibilitar a integração contábil");
                return false;
            }
        }
        var Entity = this.GetScope().Entity;
        Entity.Codigo_Ajuste = ("" + this.txtCodigoAjuste.GetText());
        this.EntityTela.Ajustes_Contabil = [];
        for (var i = 0; i < this.AjustesRetorno.length; i++) {
            var item = {};
            item.Conta_Credito = this.AjustesRetorno[i].Conta_Credito;
            item.Conta_Debito = this.AjustesRetorno[i].Conta_Debito;
            item.Historico = this.AjustesRetorno[i].Historico;
            item.Empresa = this.AjustesRetorno[i].Empresa;
            this.EntityTela.Ajustes_Contabil.push(item);
        }
        return true;
    };
    C_Ajuste.prototype.validarContabil = function () {
        if (ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_Modulo_Contabil && ValoresSismoura.UtilizarModuloContabil) {
            if (this.txtContaCredito.GetText().CNum() == 0 || this.txtContaDebito.GetText().CNum() == 0 || this.txtHistorico.GetText().CNum() == 0) {
                return false;
            }
            else {
                return true;
            }
        }
    };
    C_Ajuste.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.Limpar();
        this.txtCodigo.Focus();
        this.BuscarGrade();
        this.LimparCamposContabeis();
        return true;
    };
    C_Ajuste.prototype.OnDepoisLimpar = function () {
        _super.prototype.OnDepoisLimpar.call(this, this.EntityTela);
        this.GridContabil.Grid.PreencherGrid([]);
        this.AjustesRetorno = [];
        this.LimparCamposContabeis();
    };
    C_Ajuste.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.BuscarGrade();
        return true;
    };
    C_Ajuste.prototype.OnAntesDeletar = function () {
        _super.prototype.OnAntesDeletar.call(this);
        var params = {
            codAjuste: this.EntityTela.Codigo
        };
        var ajustesEntrada = this.ExecutarFuncaoServerSideSynch("ValidarAjustesEntrada", params);
        var ajustesFiscal = this.ExecutarFuncaoServerSideSynch("ValidarAjustesFiscal", params);
        if (ajustesEntrada.length > 0 || ajustesFiscal.length > 0) {
            MostrarAlerta(" Não é permitido a exclusão de ajuste com movimentação!");
            return false;
        }
        else {
            return true;
        }
    };
    C_Ajuste.prototype.OnDepoisPesquisar = function (s, e) {
        if (e.Entity) {
            if (e.Entity.Imposto != 1) {
                this.txtCodigoAjuste.Enabled = false;
                this.txtCodigoSubItem.Enabled = false;
                this.cboTipoOperacao.Enabled = false;
                this.txtCodigoSubItem.Limpar();
                this.txtCodigoAjuste.Limpar();
            }
            else {
                this.txtCodigoAjuste.Enabled = true;
                this.txtCodigoSubItem.Enabled = true;
                this.cboTipoOperacao.Enabled = true;
            }
            var params = {
                codigo: e.Entity.Codigo
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetCadastradosGrade", params);
            this.GridContabil.Grid.PreencherGrid(retorno);
            this.AjustesRetorno = retorno;
        }
        else {
            this.GridContabil.Grid.PreencherGrid([]);
        }
    };
    C_Ajuste.prototype.BuscarGrade = function () {
        var parametros = {};
        var Itens = this.ExecutarFuncaoServerSideSynch("CarregarGrade", parametros);
        this.Grid.PreencherGrid(Itens);
    };
    C_Ajuste.prototype.OnGrdSelecionouItem = function (s, e) {
        this.txtCodigo.Procurar(e.data.Codigo);
        this.ValidarCampos();
        var params = {
            codigo: e.data.Codigo
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetCadastradosGrade", params);
        this.GridContabil.Grid.PreencherGrid(retorno);
    };
    C_Ajuste.prototype.OnGrdContabilSelecionou = function (s, e) {
        this.txtContaCredito.Procurar(e.data.Conta_Credito);
        this.txtContaDebito.Procurar(e.data.Conta_Debito);
        this.txtHistorico.Procurar(e.data.Historico);
        this.cboEmpresa.SetValue(e.data.Empresa);
    };
    C_Ajuste.prototype.ValidaCampoContabil = function (campo) {
        if (campo.GetText() == '') {
            MostrarAlerta("Preencha o campo " + campo.LabelInicial.replace(' (F2)', ''));
            return false;
        }
        return true;
    };
    return C_Ajuste;
}(MouraPageCadastroAngular));
var c_Ajuste = new C_Ajuste();
//# sourceMappingURL=C_Ajuste.js.map