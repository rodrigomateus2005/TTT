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
var C_ConCst = /** @class */ (function (_super) {
    __extends(C_ConCst, _super);
    function C_ConCst() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ConCst.prototype, "cboCstEntrada", {
        get: function () {
            return window['cboCstSaida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCst.prototype, "cboCstSaida", {
        get: function () {
            return window['cboCstSaida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCst.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ConCst.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.ExcluiuLinhaGrade, this.OnExcluiuRegistroGrade, this);
        }
    };
    C_ConCst.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        this.PreencherGrade();
    };
    C_ConCst.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("GetCstProduto", parametros);
            this.Grid.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConCst.prototype.OnDepoisGravar = function () {
        this.PreencherGrade();
    };
    C_ConCst.prototype.OnExcluiuRegistroGrade = function (s, e) {
        try {
            if (e.item['Id']) {
                var parametros = {
                    codTela: CNum(e.item['Id']),
                    tela: ValoresSismoura.NomeTela,
                    codUsuario: ValoresSismoura.UsuarioLogado
                };
                var resultado = this.ExecutarFuncaoServerSideSynch("ExcluirCst", parametros);
                if (resultado) {
                    MostrarMensagem("Registro excluído com sucesso!");
                }
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_ConCst.prototype.LimparCampos = function () {
        this.cboCstEntrada.LimparSelecao();
        this.cboCstSaida.LimparSelecao();
    };
    return C_ConCst;
}(MouraPageCadastroAngular));
var c_ConCst = new C_ConCst();
//# sourceMappingURL=C_ConCst.js.map