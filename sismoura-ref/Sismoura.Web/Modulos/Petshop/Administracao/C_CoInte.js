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
var C_CoInte = /** @class */ (function (_super) {
    __extends(C_CoInte, _super);
    function C_CoInte() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_CoInte.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CoInte.prototype, "btnTestar", {
        get: function () {
            return window["btnTestar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    C_CoInte.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnTestar) {
            adicionarEventoMoura(this.btnTestar.Click, this.OnClickBotaoTestar, this);
        }
    };
    C_CoInte.prototype.OnClickBotaoTestar = function (s, e) {
        try {
            e.processOnServer = false;
            var parametros = {
                host: this.EntityTela.Stage_Host,
                porta: this.EntityTela.Stage_Porta,
                id: this.EntityTela.Stage_Sid,
                usuario: this.EntityTela.Stage_User,
                senha: this.EntityTela.Stage_Pwd
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("TestarConexao", parametros);
            if (retorno == "OK") {
                MostrarMensagem("Conexão realizada com sucesso!");
            }
            else if (retorno == "") {
                MostrarAlerta("Ocorreu um erro ao testar a conexão");
            }
            else {
                MostrarAlerta(retorno);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CoInte.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        var parametros = {};
        var cad = this.ExecutarFuncaoServerSideSynch("GetConfiguracaoAtiva", parametros);
        if (cad && cad > 0) {
            this.PreencherEntidade(cad);
        }
        this.txtCodigo.Visible = false;
    };
    return C_CoInte;
}(MouraPageCadastroAngular));
var c_CoInte = new C_CoInte();
//# sourceMappingURL=C_CoInte.js.map