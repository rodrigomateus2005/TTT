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
var C_VenCfg = /** @class */ (function (_super) {
    __extends(C_VenCfg, _super);
    function C_VenCfg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_VenCfg.prototype, "Grupo", {
        get: function () {
            var that = this.GetScope()["Grupo"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Grupo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VenCfg.prototype, "Grupos", {
        get: function () {
            return this.GetScope()["Grupos"];
        },
        set: function (value) {
            this.GetScope()["Grupos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VenCfg.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VenCfg.prototype, "gridCadastrados", {
        get: function () {
            return window['gridCadastrados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VenCfg.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VenCfg.prototype, "lstGrupos", {
        get: function () {
            return window['lstGrupos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VenCfg.prototype, "txtCentroCusto", {
        get: function () {
            return window['txtCentroCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VenCfg.prototype, "txtContaContabil", {
        get: function () {
            return window['txtContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VenCfg.prototype, "cboPagamento", {
        get: function () {
            return window['cboPagamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VenCfg.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VenCfg.prototype, "chkContabilizacaoBandeira", {
        get: function () {
            return window['chkContabilizacaoBandeira_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_VenCfg.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.gridCadastrados) {
            adicionarEventoMoura(this.gridCadastrados.SelecionouLinha, this.OnSelecionouLinha, this);
        }
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.Validando, this.OnValidando, this);
            adicionarEventoMoura(this.Grid.SelecionandoItem, this.OnSelecionouItem, this);
        }
        if (this.chkContabilizacaoBandeira) {
            adicionarEventoMoura(this.chkContabilizacaoBandeira.CheckChanged, this.OnchkContabilizacaoBandeiraChanged, this);
        }
        if (this.cboPagamento) {
            adicionarEventoMoura(this.cboPagamento.SelectedItemChanged, this.OnComboBoxPagamentoChange, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.OnComboBoxContaChange, this);
        }
        if (this.txtCentroCusto) {
            adicionarEventoMoura(this.txtCentroCusto.Procurou, this.OnDepoisBuscarCentroCusto, this);
        }
        if (this.txtContaContabil) {
            adicionarEventoMoura(this.txtContaContabil.Procurou, this.OnDepoisBuscarConta, this);
        }
        if (this.txtCodigo) {
            adicionarEventoMoura(this.txtCodigo.Procurou, this.OnDepoisBuscarCodigo, this);
        }
    };
    C_VenCfg.prototype.OnSelecionouItem = function (s, e) {
        this.Grupo.CodGrupo = e.item.CodGrupo;
        this.Grupo.CodCentroCusto = e.item.CodCentroCusto;
        this.Grupo.CodConta = e.item.CodConta;
    };
    C_VenCfg.prototype.OnSelecionouLinha = function (s, e) {
        try {
            var item = e.data;
            if (item.Codigo && item.Codigo != '') {
                this.txtCodigo.Procurar(item.Codigo);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_VenCfg.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.chkContabilizacaoBandeira.Visible = false;
    };
    C_VenCfg.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.txtContaContabil.Disabled = false;
        this.chkContabilizacaoBandeira.Visible = false;
        this.chkContabilizacaoBandeira.Checked = false;
        this.gridCadastrados.PreencherGrid(null);
        this.PreencherGrupos(0);
    };
    C_VenCfg.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var contaValida = true;
        var centroValido = true;
        if (this.Grupos) {
            for (var i = 0; i < this.Grupos.length; i++) {
                if (this.txtCentroCusto && this.txtCentroCusto.Visible && (this.Grupos[i].CodCentroCusto <= 0 || this.Grupos[i].CodCentroCusto == undefined)) {
                    centroValido = false;
                }
                if (this.txtContaContabil && this.txtContaContabil.Disabled == false && (this.Grupos[i].CodConta <= 0 || this.Grupos[i].CodConta == undefined)) {
                    contaValida = false;
                }
            }
        }
        if (!contaValida) {
            MostrarAlerta("Informe a conta contábil para todos os grupos!");
            return false;
        }
        if (!centroValido) {
            MostrarAlerta("Informe o centro de custo para todos os grupos!");
            return false;
        }
        this.EntityTela.Grupos = [];
        var Grupos = [];
        if (this.Grupos) {
            for (var i = 0; i < this.Grupos.length; i++) {
                var Grupo = {};
                Grupo.Conta_Contabil = this.Grupos[i].CodConta;
                Grupo.Grupo = this.Grupos[i].CodGrupo;
                Grupo.Codigo = this.Grupos[i].Codigo;
                if (this.txtCentroCusto && this.txtCentroCusto.Visible) {
                    Grupo.Centro_Custo = this.Grupos[i].CodCentroCusto;
                }
                Grupos.push(Grupo);
            }
        }
        this.EntityTela.Grupos = Grupos;
        return true;
    };
    C_VenCfg.prototype.OnDepoisBuscarCodigo = function () {
        this.PreencherGrupos(this.txtCodigo.GetText().CNum());
    };
    C_VenCfg.prototype.PreencherGrupos = function (Codigo) {
        var parametros;
        parametros = {
            codConfiguracaoPagamento: Codigo
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetGrupos", parametros);
        if (retorno) {
            this.Grupos = retorno;
            this.Grid.AtualizarGrid();
        }
    };
    C_VenCfg.prototype.OnDepoisBuscarCentroCusto = function () {
        if (this.txtCentroCusto.GetText() != "") {
            var parametros;
            parametros = {
                codCentroCusto: this.txtCentroCusto.GetText().CNum(),
                codEmpresa: this.cboEmpresa.GetValue()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificarEmpresas", parametros);
            if (!retorno) {
                MostrarAlerta("Centro de Custo informado não está vinculada a empresa, utilizar a tela Cadastro de Centro de Custo para corrigir esta situação");
                this.txtCentroCusto.Limpar();
                this.txtCentroCusto.Focus();
                return;
            }
        }
    };
    C_VenCfg.prototype.OnDepoisBuscarConta = function () {
        if (this.txtContaContabil.GetText() != "") {
            var parametros;
            parametros = {
                codConta: this.txtContaContabil.GetText().CNum(),
                codEmpresa: this.cboEmpresa.GetValue()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaEmpresas", parametros);
            if (retorno != "") {
                MostrarAlerta(retorno);
                this.txtContaContabil.Limpar();
                this.txtContaContabil.Focus();
                return;
            }
        }
    };
    C_VenCfg.prototype.buscarExistente = function () {
        var parametros;
        if (this.cboPagamento.GetValue() && this.cboEmpresa.GetValue()) {
            parametros = {
                Forma: this.cboPagamento.GetValue(),
                Empresa: this.cboEmpresa.GetValue()
            };
            var cad = this.ExecutarFuncaoServerSideSynch("GetByForma", parametros);
            if (cad > 0) {
                this.txtCodigo.Procurar(cad);
            }
        }
    };
    C_VenCfg.prototype.OnComboBoxContaChange = function () {
        this.txtContaContabil.LimparParametros();
        this.txtContaContabil.AddParametro("Empresa", this.cboEmpresa.GetValue().toString());
        this.txtContaContabil.AddParametro("Sintetico", "N");
        this.txtCentroCusto.LimparParametros();
        this.txtCentroCusto.AddParametro("empresaCc", this.cboEmpresa.GetValue().toString());
        if (this.txtCentroCusto) {
            this.txtCentroCusto.Limpar();
        }
        this.PreencherGrupos(0);
        this.GetCadastrados();
        this.buscarExistente();
    };
    C_VenCfg.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        if (Entity.Forma_Pagamento == 3 || Entity.Forma_Pagamento == 4) {
            this.chkContabilizacaoBandeira.Visible = true;
        }
        else {
            this.chkContabilizacaoBandeira.Visible = false;
            this.chkContabilizacaoBandeira.Checked = false;
        }
        if (Entity.Contabilizacao_Bandeira) {
            this.txtContaContabil.Disabled = true;
            Entity.Conta_Contabil = 0;
            this.txtContaContabil.Limpar();
        }
        else {
            this.txtContaContabil.Disabled = false;
        }
        var parametros;
        parametros = {
            Empresa: Entity.Empresa
        };
        var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
        this.gridCadastrados.PreencherGrid(cad);
        this.RefreshAngular();
    };
    C_VenCfg.prototype.GetCadastrados = function () {
        try {
            var parametros;
            parametros = {
                Empresa: this.cboEmpresa.GetValue()
            };
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.gridCadastrados.PreencherGrid(cad);
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_VenCfg.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.GetCadastrados();
        return true;
    };
    C_VenCfg.prototype.OnComboBoxPagamentoChange = function () {
        if (this.cboPagamento.GetText() == "Cartão de Débito" || this.cboPagamento.GetText() == "Cartão de Crédito") {
            this.chkContabilizacaoBandeira.Visible = true;
        }
        else {
            this.txtContaContabil.Disabled = false;
            this.chkContabilizacaoBandeira.Visible = false;
            this.EntityTela.Contabilizacao_Bandeira = false;
        }
        this.buscarExistente();
        this.RefreshAngular();
    };
    C_VenCfg.prototype.OnchkContabilizacaoBandeiraChanged = function (s, e) {
        if (this.chkContabilizacaoBandeira.Checked) {
            this.txtContaContabil.Disabled = true;
            this.txtContaContabil.Limpar();
            if (this.Grupos) {
                for (var i = 0; i < this.Grupos.length; i++) {
                    this.Grupos[i].Conta = null;
                    this.Grupos[i].CodConta = null;
                    this.Grid.Grid.Refresh();
                }
            }
        }
        else {
            this.txtContaContabil.Disabled = false;
        }
    };
    C_VenCfg.prototype.OnValidando = function (s, e) {
        if (this.lstGrupos.SelectedValues.length <= 0) {
            MostrarAlerta("Informe ao menos um grupo para ser adicionado");
            e.cancelar = true;
            return;
        }
        if (this.cboPagamento.GetText() != "Cartão de Débito" && this.cboPagamento.GetText() != "Cartão de Crédito") {
            if (this.txtContaContabil && e.item.CodConta <= 0) {
                MostrarAlerta("Informe a conta contábil");
                e.cancelar = true;
                this.txtContaContabil.Focus();
                return;
            }
        }
        if (this.txtCentroCusto && e.item.CodCentroCusto <= 0 && this.txtCentroCusto.Visible) {
            MostrarAlerta("Informe o centro de custo");
            e.cancelar = true;
            this.txtCentroCusto.Focus();
            return;
        }
        if (this.Grupos) {
            for (var x = 0; x < this.lstGrupos.SelectedValues.length; x++) {
                for (var i = 0; i < this.Grupos.length; i++) {
                    if (this.Grupos[i].CodGrupo == this.lstGrupos.SelectedValues[x]) {
                        if (this.txtCentroCusto && this.txtCentroCusto.Visible) {
                            this.Grupos[i].CentroCusto = this.txtCentroCusto.GetResultado();
                            this.Grupos[i].CodCentroCusto = this.txtCentroCusto.GetText();
                        }
                        this.Grupos[i].Conta = this.txtContaContabil.GetResultado();
                        this.Grupos[i].CodConta = this.txtContaContabil.GetText();
                    }
                }
            }
        }
        this.Grid.Grid.Refresh();
        this.Grupo = {};
        this.lstGrupos.LimparSelecao();
        this.txtContaContabil.Limpar();
        this.txtCentroCusto.Limpar();
        e.cancelar = true;
        return;
    };
    return C_VenCfg;
}(MouraPageCadastroAngular));
var c_VenCfg = new C_VenCfg();
//# sourceMappingURL=C_VenCfg.js.map