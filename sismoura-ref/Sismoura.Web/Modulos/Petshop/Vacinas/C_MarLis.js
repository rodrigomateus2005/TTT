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
var C_MarLis = /** @class */ (function (_super) {
    __extends(C_MarLis, _super);
    function C_MarLis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_MarLis.prototype, "txtServico", {
        get: function () {
            return window['txtServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_MarLis.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtServico) {
            adicionarEventoMoura(this.txtServico.Procurou, this.OnPesquisouServico, this);
        }
    };
    C_MarLis.prototype.OnPesquisouServico = function (s, e) {
        var parametros;
        var retorno;
        if (this.txtServico.GetText().CNum() <= 0) {
            return;
        }
        parametros = {
            codigoServico: this.txtServico.GetText().CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetDadosServico", parametros);
        if (retorno) {
            var servicoInvalido = false;
            if (retorno.Doses <= 0) {
                servicoInvalido = true;
            }
            if (servicoInvalido) {
                MostrarAlerta("Esse serviço não possui doses configuradas");
                this.txtServico.Limpar();
                this.txtServico.Focus();
            }
        }
    };
    return C_MarLis;
}(MouraPage));
var c_MarLis = new C_MarLis();
//# sourceMappingURL=C_MarLis.js.map