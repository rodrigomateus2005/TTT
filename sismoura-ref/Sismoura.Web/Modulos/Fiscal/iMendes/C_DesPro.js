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
var C_DesPro = /** @class */ (function (_super) {
    __extends(C_DesPro, _super);
    function C_DesPro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_DesPro.prototype, "GridProdutos", {
        get: function () {
            return window['GridProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DesPro.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DesPro.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DesPro.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_DesPro.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    C_DesPro.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    C_DesPro.prototype.OnClickGerar = function () {
        var _this = this;
        try {
            abrirEspera("");
            var parametros;
            parametros = {
                codEmpresa: this.cboEmpresa.GetValue()
            };
            var cnpj = this.ExecutarFuncaoServerSideSynch('getCnpjEmpresa', parametros);
            parametros = {
                cnpj: cnpj,
                descricao: this.txtDescricao.GetText()
            };
            this.ExecutarFuncaoServerSideAsynch("GetDescricaoProdutosIMendes", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (retorno) {
                        _this.GridProdutos.PreencherGrid(retorno.Dados.produto);
                    }
                }
                catch (ex) {
                    LogarException(ex);
                }
                finally {
                    fecharEspera();
                }
            }, function (erro) {
                fecharEspera();
                LogarExceptionAjax(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            MostrarAlerta("Houve um falha na consulta");
        }
    };
    C_DesPro.prototype.LimparCampos = function () {
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.txtDescricao.Limpar();
        this.GridProdutos.PreencherGrid([]);
    };
    return C_DesPro;
}(MouraPageAngular));
var c_DesPro = new C_DesPro();
//# sourceMappingURL=C_DesPro.js.map