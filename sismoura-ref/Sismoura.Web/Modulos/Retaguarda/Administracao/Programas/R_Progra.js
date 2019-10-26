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
var R_Progra = /** @class */ (function (_super) {
    __extends(R_Progra, _super);
    function R_Progra() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Progra.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Progra.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Progra.prototype, "Entity", {
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
    R_Progra.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().MudouIndex) {
            this.GetScope().MudouIndex = $.proxy(this.MudouIndex, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Sistema; }, this.GetScope().MudouIndex);
        }
        this.LimparCampos();
    };
    R_Progra.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_Progra.prototype.MudouIndex = function () {
        this.Grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_Progra.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Entity.Sistema = null;
        this.Grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_Progra.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        try {
            parametros = {
                sistema: CNum(this.Entity.Sistema)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.Grid.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_Progra;
}(MouraPageRelacaoAngular));
var r_Progra = new R_Progra();
//# sourceMappingURL=R_Progra.js.map