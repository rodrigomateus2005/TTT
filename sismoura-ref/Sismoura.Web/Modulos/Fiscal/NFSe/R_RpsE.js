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
var R_RpsE = /** @class */ (function (_super) {
    __extends(R_RpsE, _super);
    function R_RpsE() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_RpsE.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RpsE.prototype, "txtPeriodoEnvio", {
        get: function () {
            return window['txtPeriodoEnvio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RpsE.prototype, "cknEmpresa", {
        get: function () {
            return window['cknEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RpsE.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_RpsE.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_RpsE.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_RpsE.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        try {
            var parametros = void 0;
            var periodoInicio = this.txtPeriodoEnvio.textBoxCalendarioInicio.GetDate();
            var periodoFim = this.txtPeriodoEnvio.textBoxCalendarioFim.GetDate();
            var empresas = [];
            for (var x = 0; x < this.cknEmpresa.GetValues().length; x++) {
                empresas.push(this.cknEmpresa.GetValues()[x]);
            }
            parametros = {
                periodoInicio: periodoInicio,
                periodoFim: periodoFim,
                empresa: empresas
            };
            var resposta = this.ExecutarFuncaoServerSideSynch('GetRelacaoRpsEnviados', parametros);
            this.grid.PreencherGrid(resposta);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_RpsE.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.txtPeriodoEnvio.Iniciar();
        //cboSituacao.ProcuraValue(0)
        this.grid.PreencherGrid([]);
    };
    return R_RpsE;
}(MouraPageRelacaoAngular));
var r_RpsE = new R_RpsE();
//# sourceMappingURL=R_RpsE.js.map