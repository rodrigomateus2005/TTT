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
var R_SemPag = /** @class */ (function (_super) {
    __extends(R_SemPag, _super);
    function R_SemPag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_SemPag.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SemPag.prototype, "lstEmpresa", {
        //Filtros
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SemPag.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_SemPag.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_SemPag.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_SemPag.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        if (ValoresSismoura && ValoresSismoura.EmpresaPadraoUsuario > 0) {
            this.lstEmpresa.SelecionarEmpresaPadraoUsuario;
        }
        this.grd.PreencherGrid([]);
    };
    R_SemPag.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        try {
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarGrid", { empresas: this.lstEmpresa.GetValuesRelacaoNumber() }, function (d) {
                try {
                    fecharEspera();
                    _this.grd.PreencherGrid(GetRetornoAJAX(d));
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
            this.grd.PreencherGrid([]);
            LogarException(ex);
            fecharEspera();
        }
    };
    return R_SemPag;
}(MouraPageRelacaoAngular));
var r_SemPag = new R_SemPag();
//# sourceMappingURL=R_SemPag.js.map