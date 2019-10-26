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
var CA_LMC = /** @class */ (function (_super) {
    __extends(CA_LMC, _super);
    function CA_LMC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CA_LMC.prototype, "txtNumOrdem", {
        get: function () {
            return window['txtNumOrdem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CA_LMC.prototype, "txtData", {
        get: function () {
            return window['txtData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CA_LMC.prototype, "txtPaginas", {
        get: function () {
            return window['txtPaginas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CA_LMC.prototype, "txtPaginaInicial", {
        get: function () {
            return window['txtPaginaInicial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CA_LMC.prototype, "txtPaginaFinal", {
        get: function () {
            return window['txtPaginaFinal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CA_LMC.prototype, "txtOperando", {
        get: function () {
            return window['txtOperando_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CA_LMC.prototype, "txtCapacidade", {
        get: function () {
            return window['txtCapacidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CA_LMC.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    CA_LMC.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.txtData.Date = this.DataServidor();
    };
    CA_LMC.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    CA_LMC.prototype.OnClickBotaoLimpar = function () {
        this.txtData.Date = this.DataServidor();
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.txtCapacidade.SetText("");
        this.txtNumOrdem.SetText("");
        this.txtOperando.SetText("");
        this.txtPaginaFinal.SetText("");
        this.txtPaginaInicial.SetText("");
        this.txtPaginas.SetText("");
    };
    CA_LMC.prototype.OnClickBotaoImprimir = function () {
        if (this.ValidarCamposObrigatorios()) {
            try {
                var parametros = {
                    data: this.txtData.Date,
                    numOrdem: this.txtNumOrdem.GetText().CNum(),
                    paginas: this.txtPaginas.GetText().CNum(),
                    paginaInicial: this.txtPaginaInicial.GetText().CNum(),
                    paginaFinal: this.txtPaginaFinal.GetText().CNum(),
                    empresaCod: this.cboEmpresa.GetValue(),
                    operando: this.txtOperando.GetText(),
                    capacidade: this.txtCapacidade.GetText(),
                    nomeTela: ValoresSismoura.NomeTela
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("ClicouBtnImprimir", parametros);
                if (!String.IsNullOrWhiteSpace(retorno)) {
                    MostrarAlerta(retorno);
                }
                else {
                    AbrirReport("~/Report/Fixos/", "TermoAberturaLMC.REPX");
                }
            }
            catch (ex) {
                LogarException(ex);
            }
        }
    };
    return CA_LMC;
}(MouraPageAngular));
var cA_LMC = new CA_LMC();
//# sourceMappingURL=CA_LMC.js.map