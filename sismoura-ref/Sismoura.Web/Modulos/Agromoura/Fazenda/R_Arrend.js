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
var R_Arrend = /** @class */ (function (_super) {
    __extends(R_Arrend, _super);
    function R_Arrend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Arrend.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Arrend.prototype, "Resultados", {
        get: function () {
            if (!this.GetScope()["Resultados"]) {
                this.GetScope()["Resultados"] = [];
            }
            return this.GetScope()["Resultados"];
        },
        set: function (value) {
            this.GetScope()["Resultados"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Arrend.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Arrend.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_Arrend.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_Arrend.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        if (!this.GetScope().MudouForma) {
            this.GetScope().MudouForma = $.proxy(this.MudouForma, this);
            var that = this;
            this.GetScope().$watch(function () { return that.Filtro.Forma; }, this.GetScope().MudouForma);
        }
    };
    R_Arrend.prototype.MudouForma = function () {
        if (this.Filtro) {
            var visible = this.Filtro.Forma == "C";
            if (this.txtProduto) {
                this.txtProduto.Visible = visible;
            }
            this.Grid.Grid.ColunaVisible("Produto", visible);
            this.Grid.Grid.ColunaVisible("Qtde_Total", visible);
            this.Grid.Grid.ColunaVisible("Valor_Un", visible);
        }
    };
    R_Arrend.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Forma = "0";
        this.Resultados = [];
        this.RefreshAngular();
    };
    R_Arrend.prototype.ValidarCampos = function () {
        return this.ValidarCamposObrigatorios();
    };
    R_Arrend.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            this.Resultados = [];
            if (!this.ValidarCampos()) {
                return;
            }
            parametros = {
                forma: this.Filtro.Forma,
                codProduto: CNum(this.Filtro.Produto)
            };
            abrirEspera("");
            this.Resultados = this.ExecutarFuncaoServerSideSynch("PreencherGrade", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
        finally {
            fecharEspera();
            this.RefreshAngular();
        }
    };
    return R_Arrend;
}(MouraPageRelacaoAngular));
var r_Arrend = new R_Arrend();
//# sourceMappingURL=R_Arrend.js.map