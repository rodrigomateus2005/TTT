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
var FrmExCo = /** @class */ (function (_super) {
    __extends(FrmExCo, _super);
    function FrmExCo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FrmExCo.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmExCo.prototype, "tabPanel", {
        get: function () {
            return window['MouraTabPanel1_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmExCo.prototype, "cboDelimitador", {
        get: function () {
            return window['cboDelimitador_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmExCo.prototype, "cboCampo", {
        get: function () {
            return window['cboCampo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmExCo.prototype, "cboPreencher", {
        get: function () {
            return window['cboPreencher_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmExCo.prototype, "cboAlinhamento", {
        get: function () {
            return window['cboAlinhamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmExCo.prototype, "txtDelimitador", {
        get: function () {
            return window['txtDelimitador_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmExCo.prototype, "txtTamanho", {
        get: function () {
            return window['txtTamanho_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmExCo.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmExCo.prototype, "btnExporta", {
        get: function () {
            return window['btnExporta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmExCo.prototype, "txtGrupo", {
        get: function () {
            return window['txtGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmExCo.prototype, "Configuracao", {
        get: function () {
            if (!this.GetScope()["Configuracao"]) {
                this.GetScope()["Configuracao"] = {};
            }
            return this.GetScope()["Configuracao"];
        },
        set: function (value) {
            this.GetScope()["Configuracao"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmExCo.prototype, "Configuracoes", {
        get: function () {
            if (!this.GetScope()["Configuracoes"]) {
                this.GetScope()["Configuracoes"] = [];
            }
            return this.GetScope()["Configuracoes"];
        },
        set: function (value) {
            this.GetScope()["Configuracoes"] = value;
        },
        enumerable: true,
        configurable: true
    });
    FrmExCo.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        this.PreencherGrade();
        this.tabPanel.SetActiveTabIndex(0);
        this.btnGravar.Visible = false;
    };
    FrmExCo.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.AdicionandoItem, this.OnCliqueAdicionarItem, this);
            adicionarEventoMoura(this.grid.Grid.SelecionouLinha, this.OnSelecionouItem, this);
            adicionarEventoMoura(this.grid.ItemExcluido, this.OnCliqueExcluir, this);
            adicionarEventoMoura(this.grid.AlterandoItem, this.OnAlterandoItem, this);
        }
        if (this.cboDelimitador) {
            adicionarEventoDevExpress(this.cboDelimitador.Combo.SelectedIndexChanged, this.OnTipoDelimitadorChanged, this);
        }
        if (this.cboCampo) {
            adicionarEventoDevExpress(this.cboCampo.Combo.SelectedIndexChanged, this.OnCampoChanged, this);
        }
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.OnClickGravar, this);
        }
        if (this.tabPanel) {
            adicionarEventoMoura(this.tabPanel.ActiveTabChanged, this.OnTabChanged, this);
        }
        if (this.btnExporta) {
            adicionarEventoMoura(this.btnExporta.Click, this.OnClickExportar, this);
        }
    };
    FrmExCo.prototype.PreencherGrade = function () {
        var _this = this;
        try {
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", {}, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.Configuracoes = retorno;
                _this.RefreshAngular();
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
    FrmExCo.prototype.LimparCampos = function () {
        this.txtDelimitador.Visible = false;
        this.txtTamanho.Visible = true;
        this.cboPreencher.Enabled = true;
        this.Configuracao.Tamanho_Delimitador = "";
        this.RefreshAngular();
    };
    FrmExCo.prototype.OnTipoDelimitadorChanged = function (s, e) {
        this.VerificaDelimitador();
    };
    FrmExCo.prototype.VerificaDelimitador = function () {
        var enable = true;
        if (this.cboDelimitador.GetValue() == "T") {
            this.txtDelimitador.Visible = false;
            this.txtTamanho.Visible = true;
        }
        else if (this.cboDelimitador.GetValue() == "D") {
            this.txtTamanho.Visible = false;
            this.txtDelimitador.Visible = true;
            enable = false;
        }
        else {
            this.cboPreencher.SetSelectedIndex(0);
        }
        this.cboPreencher.Enabled = enable;
    };
    FrmExCo.prototype.OnSelecionouItem = function (s, e) {
        var _this = this;
        var preenchimento = e.data["Tipo_Preenchimento"];
        if (!String.IsNullOrWhiteSpace(preenchimento)) {
            this.Configuracao.Tipo_Preenchimento = preenchimento.substring(0, 1);
        }
        setTimeout(function () { _this.VerificaDelimitador(); }, 100);
        this.RefreshAngular();
    };
    FrmExCo.prototype.OnCliqueAdicionarItem = function (s, e) {
        if (this.ValidarCampos()) {
            if (!this.cboPreencher.Enabled) {
                e.item.Tipo_Preenchimento = "";
            }
            else {
                e.item.Tipo_Preenchimento = this.cboPreencher.GetText();
            }
            this.atualizou = true;
        }
        else {
            e.cancelar = true;
        }
    };
    FrmExCo.prototype.OnClickGravar = function (s, e) {
        if (this.Configuracoes.length > 0) {
            this.Gravar();
        }
        else {
            MostrarAlerta("Configurações não preenchidas!!!");
        }
    };
    FrmExCo.prototype.Gravar = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                configuracoes: this.Configuracoes,
                tela: ValoresSismoura.NomeTela,
                usuario: ValoresSismoura.UsuarioLogado
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("Gravar", parametros, function (d) {
                fecharEspera();
                _this.atualizou = false;
                MostrarMensagem("Configurações salvas com sucesso!");
                _this.PreencherGrade();
                _this.LimparCampos();
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
    FrmExCo.prototype.OnTabChanged = function (s, e) {
        var _this = this;
        if (this.tabPanel.GetActiveTabIndex() == 0) {
            this.btnGravar.Visible = false;
            if (this.atualizou) {
                MsgBoxJS("As configurações foram modificadas. Deseja sair sem gravar?", MsgBoxOptions.YesNo, MsgBoxIcon.Alert, function (r) {
                    if (r.Resultado == MsgBoxResult.No) {
                        _this.tabPanel.SetActiveTabIndex(1);
                        _this.btnGravar.Visible = true;
                    }
                });
            }
        }
        else if (this.tabPanel.GetActiveTabIndex() == 1) {
            this.btnGravar.Visible = true;
        }
    };
    FrmExCo.prototype.ValidarCampos = function () {
        var retorno = true;
        var alerta = "Preencha o campo corretamente: ";
        if (this.cboAlinhamento.GetText() == "") {
            retorno = false;
            alerta += "Alinhamento";
        }
        else if (this.cboCampo.GetText() == "") {
            retorno = false;
            alerta += "Campo";
        }
        else if (this.cboDelimitador.GetText() == "") {
            retorno = false;
            alerta += "Delimitador";
        }
        else if (this.cboPreencher.GetText() == "" && this.cboPreencher.Enabled) {
            retorno = false;
            alerta += "Preencher com";
        }
        else if (this.txtDelimitador.Visible) {
            if (this.txtDelimitador.GetText() == "") {
                retorno = false;
                alerta += "Delimitador";
            }
        }
        else if (this.txtTamanho.Visible) {
            if (CNum(this.txtTamanho.GetText()) <= 0) {
                retorno = false;
                alerta += "Tamanho";
            }
        }
        if (!retorno) {
            MostrarAlerta(alerta);
        }
        return retorno;
    };
    FrmExCo.prototype.OnCliqueExcluir = function (s, e) {
        this.atualizou = true;
        this.ExcluirConfig(e.item);
    };
    FrmExCo.prototype.OnAlterandoItem = function (s, e) {
        if (this.ValidarCampos()) {
            e.item.Tipo_Preenchimento = this.cboPreencher.GetText();
            this.atualizou = true;
        }
        else {
            e.cancelar = true;
        }
    };
    FrmExCo.prototype.OnCampoChanged = function (s, e) {
        var entity = this.Configuracoes.FindAll("Campo", this.cboCampo.GetValue())[0];
        if (!entity) {
            this.grid.Limpar();
        }
        else {
            this.Configuracao.Campo = entity.Campo;
            this.Configuracao.Tipo_Delimitador = entity.Tipo_Delimitador;
            this.Configuracao.Alinhamento = entity.Alinhamento;
            if (!String.IsNullOrWhiteSpace(this.Configuracao.Tipo_Preenchimento)) {
                this.Configuracao.Tipo_Preenchimento = entity.Tipo_Preenchimento.substring(0, 1);
            }
            this.VerificaDelimitador();
            this.Configuracao.Tamanho_Delimitador = entity.Tamanho_Delimitador;
            this.RefreshAngular();
        }
    };
    FrmExCo.prototype.ObterConfiguracoes = function () {
        var parametros = {};
        try {
            var retorno = this.ExecutarFuncaoServerSideSynch("ObterConfiguracoes", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    FrmExCo.prototype.OnClickExportar = function (s, e) {
        var configuracoes;
        configuracoes = this.ObterConfiguracoes();
        if (configuracoes.length > 0) {
            this.FazerDownload(configuracoes);
        }
        else {
            MostrarAlerta("Layout do arquivo de exportação não encontrado, por favor cadastre o layout para gerar o arquivo!!!");
        }
    };
    FrmExCo.prototype.FazerDownload = function (configuracoes) {
        var _this = this;
        var parametros = {
            tela: ValoresSismoura.NomeTela,
            codUsuario: ValoresSismoura.UsuarioLogado,
            grupo: CNum(this.txtGrupo.GetText()),
            configuracoes: configuracoes
        };
        try {
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("FazerDownload", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                if (retorno != "") {
                    MostrarAlerta(retorno + _this.txtGrupo.GetText() + " - " + _this.txtGrupo.LabelResultado);
                }
                else {
                    var parametrosTela = [];
                    abrirTelaNovaAbaParametros(formataURLRelativa("Modulos/Geral/AbrirArquivo.aspx"), parametrosTela);
                }
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
    FrmExCo.prototype.ExcluirConfig = function (config) {
        var param;
        try {
            param = {
                config: config,
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            this.ExecutarFuncaoServerSideSynch("ExcluirConfig", param);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return FrmExCo;
}(MouraPageAngular));
var frmExCo = new FrmExCo();
//# sourceMappingURL=FrmExCo.js.map