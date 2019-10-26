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
var C_LanCon = /** @class */ (function (_super) {
    __extends(C_LanCon, _super);
    function C_LanCon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_LanCon.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanCon.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanCon.prototype, "txtData", {
        get: function () {
            return window['txtData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanCon.prototype, "txtDocumento", {
        get: function () {
            return window['txtDocumento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanCon.prototype, "cboTipo", {
        get: function () {
            return window['cboTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanCon.prototype, "txtContaDebito", {
        get: function () {
            return window['txtContaDebito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanCon.prototype, "txtValor_Debito", {
        get: function () {
            return window['txtValor_Debito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanCon.prototype, "txtContaCredito", {
        get: function () {
            return window['txtContaCredito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanCon.prototype, "txtValor_Credito", {
        get: function () {
            return window['txtValor_Credito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanCon.prototype, "txtHistorico", {
        get: function () {
            return window['txtHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanCon.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanCon.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanCon.prototype, "lblDebito", {
        get: function () {
            return window['lblDebito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanCon.prototype, "lblCredito", {
        get: function () {
            return window['lblCredito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanCon.prototype, "lblDiferenca", {
        get: function () {
            return window['lblDiferenca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanCon.prototype, "btnNovoA", {
        get: function () {
            return window['btnNovoA_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanCon.prototype, "txtContaDebito_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContaDebito_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanCon.prototype, "txtContaCredito_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContaCredito_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanCon.prototype, "Lancamentos", {
        get: function () {
            if (!this.GetScope()["Lancamentos"]) {
                this.GetScope()["Lancamentos"] = [];
            }
            return this.GetScope()["Lancamentos"];
        },
        set: function (value) {
            this.GetScope()["Lancamentos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanCon.prototype, "Lancamento", {
        get: function () {
            if (!this.GetScope()["Lancamento"]) {
                return null;
            }
            else {
                return this.GetScope()["Lancamento"];
            }
        },
        set: function (value) {
            this.GetScope()["Lancamento"] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_LanCon.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.txtHistorico.Procurou, this.OnTxtHistoricoProcurou, this);
        if (this.txtContaCredito) {
            adicionarEventoMoura(this.txtContaCredito.AntesAbrirProcura, this.OnContaContabilCreditoAntesAbrirProcura, this);
            adicionarEventoMoura(this.txtContaCredito.PesquisandoContabil, this.OnContaContabilCreditoPesquisando, this);
        }
        if (this.txtContaDebito) {
            adicionarEventoMoura(this.txtContaDebito.AntesAbrirProcura, this.OnContaContabilDebitoAntesAbrirProcura, this);
            adicionarEventoMoura(this.txtContaDebito.PesquisandoContabil, this.OnContaContabilDebitoPesquisando, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.PreencherEmpresaContabil(), this);
        }
        if (this.cboTipo && this.cboTipo.Combo) {
            adicionarEventoDevExpress(this.cboTipo.Combo.SelectedIndexChanged, this.OnComboTipoSelectedIndexChanged, this);
        }
        if (this.btnNovoA) {
            adicionarEventoMoura(this.btnNovoA.Click, this.OnClickBotaoNovoPartir, this);
        }
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.Validando, this.OnValidandoAdicionar, this);
            adicionarEventoMoura(this.Grid.ItemAdicionado, this.RecalcularLabels, this);
            adicionarEventoMoura(this.Grid.ItemAlterado, this.RecalcularLabels, this);
            adicionarEventoMoura(this.Grid.ItemExcluido, this.RecalcularLabels, this);
            adicionarEventoMoura(this.Grid.LimpouItem, this.OnLimpandoItem, this);
        }
        this.PreencherEmpresaContabil();
    };
    C_LanCon.prototype.OnClickBotaoNovoPartir = function (s, e) {
        try {
            e.processOnServer = false;
            this.EntityTela.Codigo = 0;
            this.txtCodigo.SetText("");
            var lista = this.Lancamentos;
            for (var i = 0; i < lista.length; i++) {
                lista[i].Codigo = 0;
            }
            this.Lancamentos = [];
            this.Lancamentos = lista;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_LanCon.prototype.OnLimpandoItem = function (s, e) {
        try {
            var item = e.item;
            if (!item) {
                return;
            }
            if (this.cboTipo.GetValue() == "2") {
                for (var i = 0; i < this.Lancamentos.length; i++) {
                    if (this.Lancamentos[i].Valor_Debito > 0) {
                        this.Lancamento.Debito = this.Lancamentos[i].Debito;
                        this.Lancamento.Valor_Debito = this.Lancamentos[i].Valor_Debito;
                        // this.RefreshAngular();
                    }
                }
            }
            else if (this.cboTipo.GetValue() == "3") {
                for (var i = 0; i < this.Lancamentos.length; i++) {
                    if (this.Lancamentos[i].Valor_Credito > 0) {
                        this.Lancamento.Credito = this.Lancamentos[i].Credito;
                        this.Lancamento.Valor_Credito = this.Lancamentos[i].Valor_Credito;
                        //this.RefreshAngular();
                    }
                }
            }
            this.txtDescricao.SetText("");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_LanCon.prototype.OnValidandoAdicionar = function (s, e) {
        try {
            var item = e.item;
            this.EntityTela.Lancamentos_Partida = {};
            if (!item) {
                return;
            }
            var credito = this.Lancamentos.Sum("Valor_Credito");
            var debito = this.Lancamentos.Sum("Valor_Debito");
            if (this.cboTipo.GetValue() == "2" && debito > 0) {
                item.Valor_Debito = 0;
                item.Debito = 0;
            }
            else if (this.cboTipo.GetValue() == "3" && credito > 0) {
                item.Valor_Credito = 0;
                item.Credito = 0;
            }
            var parametros = {
                codHistorico: this.txtHistorico.GetText().CNum()
            };
            var descricaoHistorico = this.ExecutarFuncaoServerSideSynch("RetornaHistoricoPadrao", parametros);
            //Se a descrição do histórico for alterada, ele pega a descrição nova            
            if (this.txtDescricao.GetText() != "" && this.txtDescricao.GetText() != descricaoHistorico) {
                item.Historico_Descricao = this.txtDescricao.GetText();
            }
            else {
                //Se a descrição não for alterada, ele pega a descrição padrão
                item.Historico_Descricao = descricaoHistorico;
            }
            item.Debito_Descricao = this.txtContaDebito.GetResultado();
            item.Credito_Descricao = this.txtContaCredito.GetResultado();
            item.Debito = this.txtContaDebito.TextBoxAdicional.value.CNum();
            item.Credito = this.txtContaCredito.TextBoxAdicional.value.CNum();
            item.Codigo_Debito = this.txtContaDebito.GetText().CNum();
            item.Codigo_Credito = this.txtContaCredito.GetText().CNum();
            this.Lancamento.Debito = item.Codigo_Debito;
            //this.EntityTela.Lancamentos_Partida.Conta_Debito = item.Codigo_Debito;
            this.Lancamento.Credito = item.Codigo_Credito;
            //this.Lancamento.Historico_Descricao = this.txtDescricao.GetText();
            //this.Lancamento.Credito_Descricao = this.txtContaCredito.GetResultado();
            //this.Lancamento.Debito_Descricao = this.txtContaDebito.GetResultado();
            e.item = item;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_LanCon.prototype.OnComboTipoSelectedIndexChanged = function () {
        this.Lancamentos = [];
        this.VerificarTipo(this.cboTipo.GetValue());
        this.RefreshAngular();
        this.Grid.AtualizarGrid();
        if (this.cboTipo.GetValue() == 4) {
            this.txtContaCredito.Obrigatorio = false;
            this.txtContaDebito.Obrigatorio = false;
            this.txtValor_Debito.Obrigatorio = false;
            this.txtValor_Credito.Obrigatorio = false;
        }
        else {
            this.txtContaCredito.Obrigatorio = true;
            this.txtContaDebito.Obrigatorio = true;
            this.txtValor_Debito.Obrigatorio = true;
            this.txtValor_Credito.Obrigatorio = true;
        }
    };
    C_LanCon.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.txtData.Date = new Date();
        Entity.Data = new Date();
        if (ValoresSismoura.EmpresaPadraoUsuario) {
            Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        }
        else {
            Entity.Empresa = null;
        }
        this.Lancamento = null;
        this.Lancamentos = [];
        Entity.Tipo = 1;
        this.VerificarTipo("1");
        this.habilitarCampos("1");
        this.RefreshAngular();
    };
    C_LanCon.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.VerificarTipo(this.cboTipo.GetValue());
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario.toString());
        this.txtData.Date = ConvertToDate(new Date);
        if (this.cboTipo.GetValue() == 4) {
            this.txtContaCredito.Obrigatorio = false;
            this.txtContaDebito.Obrigatorio = false;
            this.txtValor_Debito.Obrigatorio = false;
            this.txtValor_Credito.Obrigatorio = false;
        }
        else {
            this.txtContaCredito.Obrigatorio = true;
            this.txtContaDebito.Obrigatorio = true;
            this.txtValor_Debito.Obrigatorio = true;
            this.txtValor_Credito.Obrigatorio = true;
        }
    };
    C_LanCon.prototype.VerificarTipo = function (Tipo) {
        var flag;
        if (Tipo == "1") {
            flag = false;
        }
        else {
            flag = true;
        }
        this.Grid.Visible = flag;
        this.lblCredito.Visible = flag;
        this.lblDebito.Visible = flag;
        this.lblDiferenca.Visible = flag;
        this.RefreshAngular();
    };
    C_LanCon.prototype.RecalcularLabels = function (s, e) {
        try {
            this.CalcularTotal(this.EntityTela);
            //this.txtContaDebito.Focus();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_LanCon.prototype.CalcularTotal = function (EntityContabil) {
        try {
            var totalServicos = 0, totalProdutos = 0;
            var total = 0;
            var entity = EntityContabil;
            if (!entity) {
                this.lblCredito.Text = (0).Format(2);
                this.lblDebito.Text = (0).Format(2);
                this.lblDiferenca.Text = (0).Format(2);
                return;
            }
            this.lblCredito.Text = this.Lancamentos.Sum("Valor_Credito").Format(2);
            this.lblDebito.Text = this.Lancamentos.Sum("Valor_Debito").Format(2);
            this.lblDiferenca.Text = (this.lblDebito.Text.CNum() - this.lblCredito.Text.CNum()).Format(2);
            if (entity.Tipo) {
                this.habilitarCampos(entity.Tipo.toString());
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_LanCon.prototype.habilitarCampos = function (Tipo) {
        this.txtValor_Credito.Enabled = true;
        this.txtValor_Credito.ReadOnly = false;
        this.txtContaCredito.Disabled = false;
        this.txtValor_Debito.Enabled = true;
        this.txtValor_Debito.ReadOnly = false;
        this.txtContaDebito.Disabled = false;
        var teste = this.txtContaDebito.GetText().CNum();
        if (Tipo == "2" && this.lblDebito.Text.CNum() > 0) {
            this.txtValor_Debito.Enabled = false;
            this.txtValor_Debito.ReadOnly = true;
            this.txtContaDebito.Disabled = true;
        }
        else if (Tipo == "3" && this.lblCredito.Text.CNum() > 0) {
            this.txtValor_Credito.Enabled = false;
            this.txtValor_Credito.ReadOnly = true;
            this.txtContaCredito.Disabled = true;
        }
    };
    C_LanCon.prototype.PreencherEmpresaContabil = function () {
        if (this.txtContaDebito_hdnEmpresaContabil != undefined) {
            this.txtContaDebito_hdnEmpresaContabil.value = this.cboEmpresa.GetValue();
        }
        if (this.txtContaCredito_hdnEmpresaContabil != undefined) {
            this.txtContaCredito_hdnEmpresaContabil.value = this.cboEmpresa.GetValue();
        }
        if (this.txtContaDebito) {
            adicionarEventoMoura(this.txtContaDebito.AntesAbrirProcura, this.OnContaContabilDebitoAntesAbrirProcura, this);
        }
        if (this.txtContaDebito) {
            adicionarEventoMoura(this.txtContaDebito.PesquisandoContabil, this.OnContaContabilDebitoPesquisando, this);
        }
        if (this.txtContaCredito) {
            adicionarEventoMoura(this.txtContaCredito.AntesAbrirProcura, this.OnContaContabilCreditoAntesAbrirProcura, this);
        }
        if (this.txtContaCredito) {
            adicionarEventoMoura(this.txtContaCredito.PesquisandoContabil, this.OnContaContabilCreditoPesquisando, this);
        }
    };
    C_LanCon.prototype.OnContaContabilCreditoAntesAbrirProcura = function (s, ev) {
        this.txtContaCredito.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
    };
    C_LanCon.prototype.OnContaContabilCreditoPesquisando = function (s, ev) {
        this.txtContaCredito.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
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
            codigo: this.txtContaCredito.TextBoxAdicional.value.CNum(),
            codEmpresa: ValoresSismoura.EmpresaPadraoUsuario
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
            else if (this.ExecutarFuncaoServerSideSynch("IsContaSinteticaReduzido", parametroSintetica)) {
                ev.Cancelar = true;
                MostrarAlerta('A conta contábil deve ser do tipo Analítica!');
                this.txtContaCredito.Limpar();
                this.txtContaCredito.Focus();
            }
        }
    };
    C_LanCon.prototype.OnContaContabilDebitoAntesAbrirProcura = function (s, ev) {
        this.txtContaDebito.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
    };
    C_LanCon.prototype.OnContaContabilDebitoPesquisando = function (s, ev) {
        this.txtContaDebito.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
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
            codigo: this.txtContaDebito.TextBoxAdicional.value.CNum(),
            codEmpresa: ValoresSismoura.EmpresaPadraoUsuario
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
            else if (this.ExecutarFuncaoServerSideSynch("IsContaSinteticaReduzido", parametroSintetica)) {
                ev.Cancelar = true;
                MostrarAlerta('A conta contábil deve ser do tipo Analítica!');
                this.txtContaDebito.Limpar();
                this.txtContaDebito.Focus();
            }
        }
    };
    C_LanCon.prototype.OnTxtHistoricoProcurou = function (s, e) {
        if (this.txtHistorico.GetText().CNum() > 0 && String.IsNullOrWhiteSpace(this.txtDescricao.GetText())) {
            this.txtDescricao.SetText(this.txtHistorico.GetResultado());
        }
    };
    C_LanCon.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        MostrarMensagem("Lançamento Contábil efetuado com sucesso.");
        return true;
    };
    C_LanCon.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (this.lblDiferenca.Visible && this.lblDiferenca.Text.CNum() != 0) {
            MostrarAlerta("A diferença entre o(s) débito(s) e o(s) crédito(s) deve ser zero!");
            return false;
        }
        else if ((this.Lancamento.Valor_Debito != this.Lancamento.Valor_Credito) && this.lblDiferenca.Visible == false) {
            MostrarAlerta("O valor de débito e crédito devem ser iguais!");
            return false;
        }
        if (this.cboTipo.GetValue() != "1" && (!this.Lancamentos || this.Lancamentos.length == 0)) {
            MostrarAlerta("Informe ao menos um lançamento!");
            return false;
        }
        //////////valida se o mês em questão ja foi fechado//////////
        var params = {
            codEmpresa: this.cboEmpresa.GetValue(),
            mes: this.txtData.Date.getMonth() + 1,
            ano: this.txtData.Date.getFullYear()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("getFechamentosContabeis", params);
        if (!retorno) {
            MostrarAlerta("Não será possível gravar o lançamento pois o mês em questão encontra-se com o período contábil fechado.", 0);
            return false;
        }
        ///////////////////////////////////////////////////
        if (this.cboTipo.GetValue() == "1") {
            if (!this.Lancamento.Valor_Debito || this.Lancamento.Valor_Debito == 0) {
                MostrarAlerta("Preencha o campo corretamente: Valor Débito");
                return false;
            }
            if (!this.Lancamento.Valor_Credito || this.Lancamento.Valor_Credito == 0) {
                MostrarAlerta("Preencha o campo corretamente: Valor Crédito");
                return false;
            }
            if (!this.EntityTela.Contadebito || this.EntityTela.Contadebito == 0) {
                MostrarAlerta("Preencha o campo corretamente: Conta Débito");
                return false;
            }
            if (!this.EntityTela.Contacredito || this.EntityTela.Contacredito == 0) {
                MostrarAlerta("Preencha o campo corretamente: Conta Crédito");
                return false;
            }
            if (!this.Lancamento.Historico || this.Lancamento.Historico == 0) {
                MostrarAlerta("Preencha o campo corretamente: Conta Crédito");
                return false;
            }
            this.EntityTela.Valor = this.Lancamento.Valor_Credito;
            this.Lancamento.Debito = this.EntityTela.Contadebito;
            this.Lancamento.Credito = this.EntityTela.Contacredito;
            this.EntityTela.Historico = this.Lancamento.Historico;
            var parHistorico = {
                codHistorico: this.txtHistorico.GetText().CNum()
            };
            var descricaoHistorico = this.ExecutarFuncaoServerSideSynch("RetornaHistoricoPadrao", parHistorico);
            var lancamentoexistente;
            if (this.txtDescricao.GetText() != "" && this.txtDescricao.GetText() != descricaoHistorico) {
                this.EntityTela.Descricao_Historico = this.txtDescricao.GetText();
            }
            else {
                this.EntityTela.Descricao_Historico = "";
            }
            var item = {};
            item.Conta_Debito = this.Lancamento.Debito;
            item.Valor_Debito = this.Lancamento.Valor_Debito;
            item.Conta_Credito = this.Lancamento.Credito;
            item.Valor_Credito = this.Lancamento.Valor_Credito;
            item.Historico = this.Lancamento.Historico;
            if (!this.EntityTela.Lancamentos_Partida || this.EntityTela.Lancamentos_Partida.length == 0) {
                this.EntityTela.Lancamentos_Partida = [];
                this.EntityTela.Lancamentos_Partida.push(item);
            }
            else {
                var alterar = item;
                this.EntityTela.Lancamentos_Partida = [];
                this.EntityTela.Lancamentos_Partida.push(alterar);
            }
        }
        else {
            this.EntityTela.Lancamentos_Partida = [];
            for (var i = 0; i < this.Lancamentos.length; i++) {
                var item = {};
                //var parHistorico: any = {
                //    codHistorico: this.Lancamentos[i].Historico
                //}
                //var descricaoHistorico = this.ExecutarFuncaoServerSideSynch("RetornaHistoricoPadrao", parHistorico);
                //if (this.Lancamentos[i].Historico_Descricao == "" || this.Lancamentos[i].Historico_Descricao == descricaoHistorico) {
                //    this.Lancamentos[i].Historico_Descricao = "";
                //}
                item.Codigo = this.Lancamentos[i].Codigo;
                item.Conta_Debito = this.Lancamentos[i].Codigo_Debito;
                item.Valor_Debito = this.Lancamentos[i].Valor_Debito;
                item.Conta_Credito = this.Lancamentos[i].Codigo_Credito;
                item.Valor_Credito = this.Lancamentos[i].Valor_Credito;
                item.Historico = this.Lancamentos[i].Historico;
                item.Descricao_Historico = this.Lancamentos[i].Historico_Descricao;
                this.EntityTela.Lancamentos_Partida.push(item);
            }
            if (this.cboTipo.GetValue() == "2") {
                this.EntityTela.Valor = this.Lancamento.Valor_Debito;
                this.EntityTela.Contadebito = this.Lancamento.Debito;
            }
            else if (this.cboTipo.GetValue() == "3") {
                this.EntityTela.Valor = this.Lancamento.Valor_Credito;
                this.EntityTela.Contacredito = this.Lancamento.Credito;
            }
        }
        return true;
    };
    C_LanCon.prototype.OnDepoisBuscarExistente = function (Entidade) {
        try {
            _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
            this.Lancamento = {};
            this.Lancamentos = [];
            if (Entidade.Tipo == 1) {
                if (Entidade.Contadebito && Entidade.Contadebito > 0 && Entidade.Contacredito && Entidade.Contacredito > 0) {
                    this.Lancamento.Valor_Credito = Entidade.Lancamentos_Partida[0].Valor_Credito;
                    this.Lancamento.Valor_Debito = Entidade.Lancamentos_Partida[0].Valor_Debito;
                    this.Lancamento.Debito = Entidade.Contadebito;
                    this.Lancamento.Credito = Entidade.Contacredito;
                    this.Lancamento.Historico = Entidade.Historico;
                    this.Lancamento.Historico_Descricao = Entidade.Lancamentos_Partida[0].Descricao_Historico;
                }
                else {
                    this.Lancamento.Valor_Credito = Entidade.Lancamentos_Partida[0].Valor_Credito;
                    this.Lancamento.Valor_Debito = Entidade.Lancamentos_Partida[0].Valor_Debito;
                    Entidade.Contadebito = Entidade.Lancamentos_Partida[0].Conta_Debito;
                    Entidade.Contacredito = Entidade.Lancamentos_Partida[0].Conta_Credito;
                    this.Lancamento.Historico = Entidade.Lancamentos_Partida[0].Historico;
                    this.Lancamento.Historico_Descricao = Entidade.Lancamentos_Partida[0].Descricao_Historico;
                }
            }
            else if (Entidade.Tipo == 2) {
                this.Lancamento.Valor_Debito = Entidade.Valor;
                this.Lancamento.Debito = Entidade.Contadebito;
            }
            else if (Entidade.Tipo == 3) {
                this.Lancamento.Valor_Credito = Entidade.Valor;
                this.Lancamento.Credito = Entidade.Contacredito;
            }
            if (Entidade.Tipo != 1) {
                var parametros = {
                    codLancamento: Entidade.Codigo,
                    Empresa: Entidade.Empresa
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("GetLancamentoPartida", parametros);
                if (retorno) {
                    this.Lancamentos = retorno;
                }
            }
            //Valindando conta contabil credito
            var params = {
                reduzido: Entidade.Contacredito,
                codEmpresa: Entidade.Empresa
            };
            var retornoCredito = this.ExecutarFuncaoServerSideSynch("GetByReduzidoEmpresa", params);
            if (retornoCredito != null) {
                if (retornoCredito.Codigo > 0) {
                    this.txtContaCredito.SetText(retornoCredito.Codigo.toString());
                    //Entidade.Contacredito = retornoCredito.Reduzido
                }
            }
            //Valindando conta contabil débito
            var paramsDebito = {
                reduzido: Entidade.Contadebito,
                codEmpresa: Entidade.Empresa
            };
            var retornoDebito = this.ExecutarFuncaoServerSideSynch("GetByReduzidoEmpresa", paramsDebito);
            if (retornoDebito != null) {
                if (retornoDebito.Codigo > 0) {
                    //this.txtContaDebito.SetText(retornoDebito.Codigo.toString());
                    Entidade.Contadebito = retornoDebito.Codigo;
                }
            }
            this.VerificarTipo(Entidade.Tipo.toString());
            this.CalcularTotal(this.EntityTela);
            this.habilitarCampos(Entidade.Tipo.toString());
            if (Entidade.Tipo == 4) {
                this.txtContaCredito.Obrigatorio = false;
                this.txtContaDebito.Obrigatorio = false;
                this.txtValor_Debito.Obrigatorio = false;
                this.txtValor_Credito.Obrigatorio = false;
            }
            else {
                this.txtContaCredito.Obrigatorio = true;
                this.txtContaDebito.Obrigatorio = true;
                this.txtValor_Debito.Obrigatorio = true;
                this.txtValor_Credito.Obrigatorio = true;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_LanCon;
}(MouraPageCadastroAngular));
var c_LanCon = new C_LanCon();
//# sourceMappingURL=C_LanCon.js.map