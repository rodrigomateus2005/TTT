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
var R_ABCFarma = /** @class */ (function (_super) {
    __extends(R_ABCFarma, _super);
    function R_ABCFarma() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iniciouIntegracao = false;
        return _this;
    }
    Object.defineProperty(R_ABCFarma.prototype, "btnGerarABC", {
        get: function () {
            return window["btnGerarABC_Object"];
        },
        enumerable: true,
        configurable: true
    });
    R_ABCFarma.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnGerarABC) {
            adicionarEventoMoura(this.btnGerarABC.Click, this.OnClickBotaoGerar, this);
        }
    };
    R_ABCFarma.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        setInterval(function () {
            _this.AtualizarStatusIntegracao();
        }, 3000);
    };
    R_ABCFarma.prototype.OnClickBotaoGerar = function (s, e) {
        try {
            e.processOnServer = false;
            MsgBoxJS("Ao clicar neste botão os preços da ABC Farma serão atualizados no servidor da internet. Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRespondeuMSGBox, this), null);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_ABCFarma.prototype.OnRespondeuMSGBox = function (result) {
        var _this = this;
        try {
            if (result.Resultado != MsgBoxResult.Yes) {
                return;
            }
            var parametros;
            parametros = {
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            abrirEspera("");
            this.iniciouIntegracao = true;
            this.ExecutarFuncaoServerSideAsynch("AtualizarABCFarma", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.iniciouIntegracao = false;
                    if (String.IsNullOrWhiteSpace(retorno)) {
                        MostrarMensagem("Preços atualizados com sucesso");
                    }
                }
                catch (ex) {
                    _this.iniciouIntegracao = false;
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                _this.iniciouIntegracao = false;
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            this.iniciouIntegracao = false;
            LogarException(ex);
        }
    };
    R_ABCFarma.prototype.AtualizarStatusIntegracao = function () {
        try {
            var parametros;
            if (!this.iniciouIntegracao) {
                return;
            }
            parametros = {};
            this.ExecutarFuncaoServerSideAsynch("GetStatusIntegracao", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    if (!String.IsNullOrWhiteSpace(retorno)) {
                        abrirEspera(retorno);
                    }
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, function (erro) {
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_ABCFarma;
}(MouraPageAngular));
var r_ABCFarma = new R_ABCFarma();
//# sourceMappingURL=R_ABCFarma.js.map