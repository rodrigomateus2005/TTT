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
var R_EmpPen = /** @class */ (function (_super) {
    __extends(R_EmpPen, _super);
    function R_EmpPen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_EmpPen.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EmpPen.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    R_EmpPen.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_EmpPen.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    //
    R_EmpPen.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Farmacia = 0;
        this.Filtro.Tipo = -1;
        this.grid.PreencherGrid(null);
        this.AccordionFiltros.SetExpanded(true);
        this.RefreshAngular();
    };
    R_EmpPen.prototype.preencheCombo = function () {
        if (this.Filtro.Tipo == null) {
            this.Filtro.Tipo = -1;
            this.RefreshAngular();
        }
        return this.Filtro.Tipo;
    };
    R_EmpPen.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        try {
            abrirEspera();
            var parametros = {};
            parametros = {
                farmacia: CNum(this.Filtro.Farmacia),
                tipo: CNum(this.preencheCombo())
            };
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                    _this.AccordionFiltros.SetExpanded(false);
                }
                catch (ex) {
                    LogarException(ex);
                }
                finally {
                    fecharEspera();
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
    return R_EmpPen;
}(MouraPageRelacaoAngular));
var r_EmpPen = new R_EmpPen();
//# sourceMappingURL=R_EmpPen.js.map