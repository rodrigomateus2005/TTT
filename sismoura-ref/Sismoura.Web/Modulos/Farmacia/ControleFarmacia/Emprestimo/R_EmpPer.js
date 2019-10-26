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
var R_EmpPer = /** @class */ (function (_super) {
    __extends(R_EmpPer, _super);
    function R_EmpPer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_EmpPer.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EmpPer.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    R_EmpPer.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_EmpPer.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    //
    R_EmpPer.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Data_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Data_Final = this.DataServidor();
        this.Filtro.Tipo = -1;
        this.Filtro.Farmacia = 0;
        this.grid.PreencherGrid(null);
        this.AccordionFiltros.SetExpanded(true);
        this.RefreshAngular();
    };
    R_EmpPer.prototype.preencheCombo = function () {
        if (this.Filtro.Tipo == null) {
            this.Filtro.Tipo = -1;
            this.RefreshAngular();
        }
        return this.Filtro.Tipo;
    };
    R_EmpPer.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        try {
            abrirEspera();
            var parametros = {};
            parametros = {
                farmacia: CNum(this.Filtro.Farmacia),
                tipo: CNum(this.preencheCombo()),
                dataInicial: this.Filtro.Data_Inicial,
                dataFinal: this.Filtro.Data_Final
            };
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                    _this.AccordionFiltros.SetExpanded(false);
                    _this.RefreshAngular();
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
    return R_EmpPer;
}(MouraPageRelacaoAngular));
var r_EmpPer = new R_EmpPer();
//# sourceMappingURL=R_EmpPer.js.map