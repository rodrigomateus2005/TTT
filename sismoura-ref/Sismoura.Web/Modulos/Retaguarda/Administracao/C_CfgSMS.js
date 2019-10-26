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
var C_CfgSMS = /** @class */ (function (_super) {
    __extends(C_CfgSMS, _super);
    function C_CfgSMS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_CfgSMS.prototype, "Configuracao", {
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
    Object.defineProperty(C_CfgSMS.prototype, "lblStatus", {
        get: function () {
            return window['lblStatus_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CfgSMS.prototype, "btnAtivarEnvioSMS", {
        get: function () {
            return window['btnAtivarEnvioSMS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CfgSMS.prototype, "btnSalvarConfig", {
        get: function () {
            return window['btnSalvarConfig_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_CfgSMS.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        var config;
        config = this.GetConfiguracao();
        if (config) {
            this.Configuracao = config;
        }
        else {
            this.Configuracao = {};
        }
        this.lblStatus.Text = "Status: Envio de SMS Inativo";
        if (!String.IsNullOrWhiteSpace(this.Configuracao.Login) && !String.IsNullOrWhiteSpace(this.Configuracao.Senha) && this.Configuracao.Autorizacao === this.GetMacAddressHash()) {
            this.lblStatus.Text = "Status: Envio de SMS Ativo";
        }
        this.RefreshAngular();
    };
    C_CfgSMS.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnAtivarEnvioSMS) {
            adicionarEventoMoura(this.btnAtivarEnvioSMS.Click, this.OnClickAtivar, this);
        }
        if (this.btnSalvarConfig) {
            adicionarEventoMoura(this.btnSalvarConfig.Click, this.OnClickSalvar, this);
        }
    };
    C_CfgSMS.prototype.GetConfiguracao = function () {
        var parametros;
        try {
            parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("GetConfiguracao", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CfgSMS.prototype.GetMacAddressHash = function () {
        var parametros;
        try {
            parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("GetMacAddressHash", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CfgSMS.prototype.OnClickAtivar = function (s, e) {
        e.processOnServer = false;
        if (this.ValidarCamposObrigatorios()) {
            this.GravarConfiguracao(true);
        }
    };
    C_CfgSMS.prototype.GravarConfiguracao = function (gerarAutorizacao) {
        var _this = this;
        var parametros;
        try {
            parametros = {
                entity: this.Configuracao,
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado,
                gerarAutorizacao: gerarAutorizacao
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GravarConfiguracao", parametros, function (d) {
                fecharEspera();
                if (gerarAutorizacao) {
                    MostrarMensagem("Login Ativado");
                }
                else {
                    MostrarMensagem("Configurações gravadas com sucesso");
                }
                var retorno = GetRetornoAJAX(d);
                _this.Configuracao = retorno;
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
    C_CfgSMS.prototype.OnClickSalvar = function (s, e) {
        e.processOnServer = false;
        var config = this.GetConfiguracao();
        if (config) {
            this.GravarConfiguracao(false);
        }
        else {
            MostrarAlerta("O envio de SMS ainda não foi ativado. Clique no botão Ativar Envio de SMS antes de gravar as configurações");
        }
    };
    return C_CfgSMS;
}(MouraPageAngular));
var c_CfgSMS = new C_CfgSMS();
//# sourceMappingURL=C_CfgSMS.js.map