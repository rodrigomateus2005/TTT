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
var R_CotPer = /** @class */ (function (_super) {
    __extends(R_CotPer, _super);
    function R_CotPer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_CotPer.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CotPer.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CotPer.prototype, "Entity", {
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
    R_CotPer.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_CotPer.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_CotPer.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Entity.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Entity.Periodo_Final = this.DataServidor();
        this.Entity.Fornecedor = null;
        this.Entity.Filtro = "2";
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_CotPer.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        try {
            parametros = {
                dataInicio: this.Entity.Periodo_Inicial,
                dataFim: this.Entity.Periodo_Final,
                fornecedor: this.Entity.Fornecedor,
                filtro: this.Entity.Filtro
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.grid.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_CotPer;
}(MouraPageRelacaoAngular));
var r_CotPer = new R_CotPer();
//# sourceMappingURL=R_CotPer.js.map