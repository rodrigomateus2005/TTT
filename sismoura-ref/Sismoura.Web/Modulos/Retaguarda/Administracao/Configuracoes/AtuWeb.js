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
var AtuWeb = /** @class */ (function (_super) {
    __extends(AtuWeb, _super);
    function AtuWeb() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._pathImportado = "";
        return _this;
    }
    Object.defineProperty(AtuWeb.prototype, "fpSite", {
        get: function () {
            return window['fpSite_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AtuWeb.prototype, "pathImportado", {
        get: function () {
            return this._pathImportado;
        },
        set: function (value) {
            this._pathImportado = value;
        },
        enumerable: true,
        configurable: true
    });
    AtuWeb.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.fpSite) {
            adicionarEventoMoura(this.fpSite.FileUploadComplete, this.OnUploadComplete, this);
        }
    };
    AtuWeb.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    AtuWeb.prototype.OnClickBotaoAtualizar = function () {
        var _this = this;
        try {
            if (String.IsNullOrWhiteSpace(this.pathImportado)) {
                MostrarAlerta("Informe o arquivo de atualização do site");
                return;
            }
            MsgBoxJS("Deseja realmente atualizar esta publicação do SisMoura Web utilizando o arquivo selecionado?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.Yes) {
                    _this.IniciarAtualizacao();
                }
            }, null, null);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    AtuWeb.prototype.IniciarAtualizacao = function () {
        try {
            var parametros;
            if (String.IsNullOrWhiteSpace(this.pathImportado)) {
                MostrarAlerta("Informe o arquivo de atualização do site");
                return;
            }
            parametros = {
                fileName: this.pathImportado
            };
            abrirEspera("Aguarde o término da atualização. Este processo pode demorar vários minutos!");
            this.ExecutarFuncaoServerSideAsynch("AtualizarSistema", parametros, function (d) {
                var retorno = GetRetornoAJAX(d);
                if (!String.IsNullOrWhiteSpace(retorno)) {
                    fecharEspera();
                    MostrarAlerta(retorno);
                }
                else {
                    MostrarMensagem("Atualização realizada com sucesso");
                    abrirEspera("Aguarde. Recarregando o site após a atualização");
                    window.location.href = formataURLRelativa("/Principal.aspx");
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
    AtuWeb.prototype.OnUploadComplete = function (s, e) {
        try {
            if (this.fpSite && this.fpSite.File) {
                this.pathImportado = this.fpSite.PathSalvarArquivo + this.fpSite.File.name;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return AtuWeb;
}(MouraPageAngular));
var atuWeb = new AtuWeb();
//# sourceMappingURL=AtuWeb.js.map