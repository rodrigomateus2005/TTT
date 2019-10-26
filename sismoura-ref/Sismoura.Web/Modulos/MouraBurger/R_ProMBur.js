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
var R_ProMBur = /** @class */ (function (_super) {
    __extends(R_ProMBur, _super);
    function R_ProMBur() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_ProMBur.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ProMBur.prototype, "Entity", {
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
    Object.defineProperty(R_ProMBur.prototype, "Resultados", {
        get: function () {
            var that = this.GetScope()["Resultados"];
            if (!that) {
                that = [];
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Resultados"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ProMBur.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_ProMBur.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_ProMBur.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_ProMBur.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Entity.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Entity.Periodo_Final = this.DataServidor();
        this.Entity.Hora_Inicial = null;
        this.Entity.Hora_Final = null;
        this.Resultados = [];
        this.RefreshAngular();
    };
    R_ProMBur.prototype.ValidarCampos = function () {
        if ((this.Entity.Hora_Inicial && !this.Entity.Hora_Final) || (this.Entity.Hora_Final && !this.Entity.Hora_Inicial)) {
            MostrarAlerta("Caso um dos horários seja informado é necessário informar o outro");
            return false;
        }
        return true;
    };
    R_ProMBur.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            this.Resultados = [];
            if (!this.ValidarCampos()) {
                return;
            }
            parametros = {
                dataInicio: this.Entity.Periodo_Inicial,
                dataFim: this.Entity.Periodo_Final,
                horarioInicio: this.Entity.Hora_Inicial,
                horarioFim: this.Entity.Hora_Final,
                empresa: this.lstEmpresa.GetValuesRelacaoNumber()
            };
            abrirEspera("");
            this.Resultados = this.ExecutarFuncaoServerSideSynch("RelacaoProdutividadePeriodo", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
        finally {
            fecharEspera();
            this.RefreshAngular();
        }
    };
    return R_ProMBur;
}(MouraPageRelacaoAngular));
var r_ProMBur = new R_ProMBur();
//# sourceMappingURL=R_ProMBur.js.map