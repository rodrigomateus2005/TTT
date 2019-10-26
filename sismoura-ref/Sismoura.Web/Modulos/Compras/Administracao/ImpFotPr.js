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
var ImpFotPr = /** @class */ (function (_super) {
    __extends(ImpFotPr, _super);
    function ImpFotPr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ImpFotPr.prototype, "fpFotos", {
        get: function () {
            return window["fpFotos_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImpFotPr.prototype, "btnImportarFotos", {
        get: function () {
            return window["btnImportarFotos_Object"];
        },
        enumerable: true,
        configurable: true
    });
    ImpFotPr.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnImportarFotos) {
            adicionarEventoMoura(this.btnImportarFotos.Click, this.btnImportarFotos_ClickBotao, this);
        }
    };
    ImpFotPr.prototype.btnImportarFotos_ClickBotao = function (s, e) {
        e.processOnServer = false;
        abrirEspera("Importando Fotos");
        this.fpFotos.EnviarArquivoAtual("ImportarFotosProdutos").then(function (retorno) {
            fecharEspera();
            if (retorno) {
                MostrarMensagem("Fotos Importadas");
            }
            else {
                MostrarAlerta("Erro ao tentar importar fotos. Tente novamente.");
            }
        }).catch(function (erro) {
            fecharEspera();
        });
    };
    return ImpFotPr;
}(MouraPageAngular));
var impFotPr = new ImpFotPr();
//# sourceMappingURL=ImpFotPr.js.map