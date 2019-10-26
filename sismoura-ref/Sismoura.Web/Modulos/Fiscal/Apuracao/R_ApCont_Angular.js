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
var R_ApCont_Angular = /** @class */ (function (_super) {
    __extends(R_ApCont_Angular, _super);
    function R_ApCont_Angular() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_ApCont_Angular.prototype, "AccordionFiltros", {
        get: function () {
            return window["accCadastro_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ApCont_Angular.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ApCont_Angular.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ApCont_Angular.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_ApCont_Angular.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_ApCont_Angular.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_ApCont_Angular.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        var Apuracao;
        var FaturamentoTrimestre;
        if (this.txtPeriodo.GetDate() == null && this.txtPeriodo.Date.lastDayOfMonth() == null) {
            MostrarAlerta("Preenchimento incorreto: Data");
            return;
        }
        try {
            var list;
            var empresas;
            if (this.lstEmpresa.GetValues()) {
                parametros = {
                    periodo: this.txtPeriodo.Date,
                    empresa: this.lstEmpresa.GetValues().toString()
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
                if (retorno) {
                    this.grid.PreencherGrid(retorno);
                }
                else {
                    this.grid.PreencherGrid(null);
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_ApCont_Angular.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.txtPeriodo.Date = new Date();
        this.lstEmpresa.LimparSelecao();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.grid.PreencherGrid(null);
    };
    return R_ApCont_Angular;
}(MouraPageRelacaoAngular));
var r_ApCont_Angular = new R_ApCont_Angular();
//# sourceMappingURL=R_ApCont_Angular.js.map