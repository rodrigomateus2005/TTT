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
var R_Conv = /** @class */ (function (_super) {
    __extends(R_Conv, _super);
    function R_Conv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Conv.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Conv.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Conv.prototype, "Entity", {
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
    R_Conv.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_Conv.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.Grid.CellPrepared, this.CellPrepared, this);
    };
    R_Conv.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Entity.Operadora = "0";
        this.Grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_Conv.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        try {
            parametros = {
                comboValue: this.Entity.Operadora
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.Grid.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Conv.prototype.CellPrepared = function (s, e) {
        try {
            if (e.rowType == "data" && e.row && e.row.key) {
                if (e.row.key.Inativo && e.row.key.Inativo == 'S') {
                    e.cellElement.css("background-color", "#808080");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_Conv;
}(MouraPageRelacaoAngular));
var r_Conv = new R_Conv();
//# sourceMappingURL=R_Conv.js.map