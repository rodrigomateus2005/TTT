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
var R_CONF_LMC = /** @class */ (function (_super) {
    __extends(R_CONF_LMC, _super);
    function R_CONF_LMC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_CONF_LMC.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CONF_LMC.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CONF_LMC.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CONF_LMC.prototype, "lstCombustivel", {
        get: function () {
            return window['lstCombustivel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CONF_LMC.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_CONF_LMC.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_CONF_LMC.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_CONF_LMC.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.txtPeriodo.IniciarDataAtual();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.Grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_CONF_LMC.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        try {
            if (this.txtPeriodo) {
                if (this.txtPeriodo.textBoxCalendarioInicio.GetDate() == null
                    || this.txtPeriodo.textBoxCalendarioFim.GetDate() == null) {
                    MostrarAlerta("Por favor, preencha as datas para realizar a busca.");
                    return;
                }
                var codEmpresas = this.lstEmpresa.GetValues();
                var empresas;
                if (codEmpresas) {
                    empresas = codEmpresas.join(",");
                }
                var codCombustiveis = this.lstCombustivel.GetValues();
                var combustiveis;
                if (codCombustiveis) {
                    combustiveis = codCombustiveis.join(",");
                }
                var parametros = {
                    dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                    dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                    empresas: empresas + "",
                    combustiveis: combustiveis + ""
                };
                this.Grid.PreencherGrid(this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros));
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_CONF_LMC;
}(MouraPageRelacaoAngular));
var r_CONF_LMC = new R_CONF_LMC();
//# sourceMappingURL=R_CONF_LMC.js.map