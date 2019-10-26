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
var R_AtuCli = /** @class */ (function (_super) {
    __extends(R_AtuCli, _super);
    function R_AtuCli() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_AtuCli.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AtuCli.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AtuCli.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_AtuCli.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_AtuCli.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_AtuCli.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_AtuCli.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        try {
            parametros = {
                dataInicio: this.Filtro.Periodo_Inicial,
                dataFim: this.Filtro.Periodo_Final
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.grid.PreencherGrid(retorno);
            this.accCadastro.SetExpanded(false);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_AtuCli;
}(MouraPageRelacaoAngular));
var r_AtuCli = new R_AtuCli();
//# sourceMappingURL=R_AtuCli.js.map