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
var G_Simulador = /** @class */ (function (_super) {
    __extends(G_Simulador, _super);
    function G_Simulador() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(G_Simulador.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Simulador.prototype, "lstGrupo", {
        get: function () {
            return window['lstGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Simulador.prototype, "GridProdutos", {
        get: function () {
            return window['GridProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Simulador.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Simulador.prototype, "btnExportar", {
        get: function () {
            return window['btnExportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Simulador.prototype, "btnDownload", {
        get: function () {
            return window['btnDownload_Object'];
        },
        enumerable: true,
        configurable: true
    });
    G_Simulador.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.OnClickGerar, this);
        }
    };
    G_Simulador.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    G_Simulador.prototype.OnClickGerar = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            abrirEspera("");
            var parametros = {
                codEmpresa: this.cboEmpresa.GetValue(),
                listaGrupo: this.lstGrupo.GetValues()
            };
            this.ExecutarFuncaoServerSideAsynch("GetProdutos", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (retorno) {
                        _this.GridProdutos.PreencherGrid(retorno);
                    }
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarExceptionAjax(erro);
            }, this);
        }
        catch (ex) {
            MostrarAlerta("Ocorreu um erro ao Gerar a lista de Produtos!");
        }
    };
    return G_Simulador;
}(MouraPageAngular));
var g_Simulador = new G_Simulador();
//# sourceMappingURL=G_Simulador.js.map