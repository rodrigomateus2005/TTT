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
var R_MatVen1 = /** @class */ (function (_super) {
    __extends(R_MatVen1, _super);
    function R_MatVen1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_MatVen1.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MatVen1.prototype, "Grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MatVen1.prototype, "Entity", {
        get: function () {
            if (!this.GetScope()["Entity"]) {
                this.GetScope()["Entity"] = {};
            }
            return this.GetScope()["Entity"];
        },
        set: function (value) {
            this.GetScope()["Entity"] = value;
        },
        enumerable: true,
        configurable: true
    });
    R_MatVen1.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_MatVen1.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_MatVen1.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Entity.Periodo = null;
        this.Entity.Funcionario = null;
        this.Grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_MatVen1.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        try {
            parametros = {
                periodo: this.Entity.Periodo,
                funcionario: CNum(this.Entity.Funcionario)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.Grid.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    return R_MatVen1;
}(MouraPageRelacaoAngular));
var r_MatVen1 = new R_MatVen1();
//# sourceMappingURL=R_MetVen1.js.map