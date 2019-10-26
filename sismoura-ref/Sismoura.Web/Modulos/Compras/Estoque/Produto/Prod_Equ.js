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
var Prod_Equ = /** @class */ (function (_super) {
    __extends(Prod_Equ, _super);
    function Prod_Equ() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Prod_Equ.prototype, "txtAntigo", {
        get: function () {
            return window["txtProdutoAntigo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Prod_Equ.prototype, "txtNovo", {
        get: function () {
            return window["txtProdutoNovo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Prod_Equ.prototype, "chkCodExterno", {
        get: function () {
            return window['chkCodExterno_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Prod_Equ.prototype, "btnEquivaler", {
        get: function () {
            return window['btnEquivaler_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Prod_Equ.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnEquivaler) {
            adicionarEventoMoura(this.btnEquivaler.Click, this.OnClickBtnEquivaler, this);
        }
    };
    Prod_Equ.prototype.OnClickBtnEquivaler = function () {
        var _this = this;
        MsgBoxJS("ATENÇÃO: Todos os dados do Produto Novo serão alterados e o Produto Antigo será inativado. Não será possível reverter esta operação.<br/>Deseja realmente continuar? ", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
            if (result.Resultado == MsgBoxResult.Yes) {
                _this.Equivaler();
            }
        }, null, "");
    };
    Prod_Equ.prototype.Equivaler = function () {
        try {
            var parametros = {
                codAntigo: CNum(this.txtAntigo.GetText()),
                codNovo: CNum(this.txtNovo.GetText()),
                usarCodExterno: this.chkCodExterno.Checked
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("Equivaler", parametros, function (d) {
                try {
                    fecharEspera();
                    var msgRetorno = "";
                    msgRetorno = GetRetornoAJAX(d);
                    if (!String.IsNullOrWhiteSpace(msgRetorno)) {
                        MostrarAlerta(msgRetorno);
                        return;
                    }
                    else {
                        MostrarMensagem("Operação finalizada com sucesso.");
                    }
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
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
    return Prod_Equ;
}(MouraPageAngular));
var prod_Equ = new Prod_Equ;
//# sourceMappingURL=Prod_Equ.js.map