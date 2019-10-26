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
var R_FazCli = /** @class */ (function (_super) {
    __extends(R_FazCli, _super);
    function R_FazCli() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_FazCli.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltro_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FazCli.prototype, "Resultados", {
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
    R_FazCli.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_FazCli.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_FazCli.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Tipo = "T";
        this.Resultados = [];
        this.RefreshAngular();
    };
    R_FazCli.prototype.ValidarCampos = function () {
        return this.ValidarCamposObrigatorios();
    };
    R_FazCli.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            this.Resultados = [];
            if (!this.ValidarCampos()) {
                return;
            }
            parametros = {
                tipo: this.Filtro.Tipo,
                codMunicipio: CNum(this.Filtro.codMunicipio),
                codProprietario: CNum(this.Filtro.codProprietario)
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
    return R_FazCli;
}(MouraPageRelacaoAngular));
var r_FazCli = new R_FazCli();
//# sourceMappingURL=R_FazCli.js.map