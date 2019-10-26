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
var R_ConEqui = /** @class */ (function (_super) {
    __extends(R_ConEqui, _super);
    function R_ConEqui() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_ConEqui.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConEqui.prototype, "Resultados", {
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
    R_ConEqui.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_ConEqui.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        if (!this.GetScope().MudouMaquina) {
            this.GetScope().MudouMaquina = $.proxy(this.MudouMaquina, this);
            var that = this;
            this.GetScope().$watch(function () { return that.Filtro.Maquina; }, this.GetScope().MudouMaquina);
        }
    };
    R_ConEqui.prototype.MudouMaquina = function () {
        var parametros;
        try {
            parametros = {
                codMaquina: CNum(this.Filtro.Maquina)
            };
            abrirEspera("");
            var Maquina = this.ExecutarFuncaoServerSideSynch("GetMaquina", parametros);
            if (Maquina) {
                this.Filtro.Modelo = Maquina.Modelo;
            }
            else {
                this.Filtro.Modelo = "";
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
        finally {
            fecharEspera();
            this.RefreshAngular();
        }
    };
    R_ConEqui.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Ano = "0";
        this.Resultados = [];
        this.RefreshAngular();
    };
    R_ConEqui.prototype.ValidarCampos = function () {
        return this.ValidarCamposObrigatorios();
    };
    R_ConEqui.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            this.Resultados = [];
            if (!this.ValidarCampos()) {
                return;
            }
            parametros = {
                codMaquina: CNum(this.Filtro.Maquina),
                ano: CNum(this.Filtro.Ano)
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
    return R_ConEqui;
}(MouraPageRelacaoAngular));
var r_ConEqui = new R_ConEqui();
//# sourceMappingURL=R_ConEqui.js.map