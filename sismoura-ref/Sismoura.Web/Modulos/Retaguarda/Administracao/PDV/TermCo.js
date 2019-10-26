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
var TermCo = /** @class */ (function (_super) {
    __extends(TermCo, _super);
    function TermCo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TermCo.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TermCo.prototype, "lblInfo", {
        get: function () {
            return window['lblInfo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    TermCo.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        var modelo = ValoresSismoura.ConfiguracoesRetaguarda.Terminal_Consulta_Modelo;
        if (modelo) {
            this.lblInfo.Text = modelo.toUpperCase();
        }
        else {
            this.lblInfo.Text = "Nenhum modelo de Terminal Consulta configurado!";
        }
    };
    TermCo.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.OnClickGerar, this);
        }
    };
    TermCo.prototype.OnClickGerar = function (s, e) {
        e.processOnServer = false;
        this.GerarArquivo();
    };
    TermCo.prototype.GerarArquivo = function () {
        var parametros;
        if (ValoresSismoura.ConfiguracoesRetaguarda.Terminal_Consulta_Modelo) {
            parametros = {
                modelo: ValoresSismoura.ConfiguracoesRetaguarda.Terminal_Consulta_Modelo
            };
            try {
                abrirEspera("");
                this.ExecutarFuncaoServerSideAsynch("GerarArquivo", parametros, function (d) {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (retorno.Erro) {
                        MostrarAlerta(retorno.Mensagem);
                    }
                    else {
                        MostrarMensagem(retorno.Mensagem);
                    }
                    var parametrosTela = [];
                    abrirTelaNovaAbaParametros(formataURLRelativa("Modulos/Geral/AbrirArquivo.aspx"), parametrosTela);
                }, function (erro) {
                    fecharEspera();
                    LogarException(erro);
                }, this);
            }
            catch (ex) {
                fecharEspera();
                LogarException(ex);
            }
        }
        else {
            MostrarAlerta("Nenhum modelo de Terminal Consulta configurado!");
        }
    };
    return TermCo;
}(MouraPageAngular));
var termCo = new TermCo();
//# sourceMappingURL=TermCo.js.map