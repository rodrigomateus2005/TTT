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
var R_CFOPES = /** @class */ (function (_super) {
    __extends(R_CFOPES, _super);
    function R_CFOPES() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_CFOPES.prototype, "cboCfopEntrada", {
        get: function () {
            return window['cboCfopSaida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CFOPES.prototype, "cboCfopSaida", {
        get: function () {
            return window['cboCfopSaida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CFOPES.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_CFOPES.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grd) {
            adicionarEventoMoura(this.grd.ExcluiuLinhaGrade, this.OnExcluiuRegistroGrade, this);
        }
    };
    R_CFOPES.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        this.PreencherGrade();
    };
    R_CFOPES.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("GetCfopProduto", parametros);
            this.grd.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_CFOPES.prototype.OnDepoisGravar = function () {
        this.PreencherGrade();
    };
    R_CFOPES.prototype.OnExcluiuRegistroGrade = function (s, e) {
        try {
            if (e.item['Id']) {
                var parametros = {
                    codTela: CNum(e.item['Id']),
                    tela: ValoresSismoura.NomeTela,
                    codUsuario: ValoresSismoura.UsuarioLogado
                };
                var resultado = this.ExecutarFuncaoServerSideSynch("ExcluirCfop", parametros);
                if (resultado) {
                    MostrarMensagem("Registro excluído com sucesso!");
                }
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    R_CFOPES.prototype.LimparCampos = function () {
        this.cboCfopEntrada.LimparSelecao();
        this.cboCfopSaida.LimparSelecao();
    };
    return R_CFOPES;
}(MouraPageCadastroAngular));
var r_CFOPES = new R_CFOPES();
//# sourceMappingURL=R_CFOPES.js.map