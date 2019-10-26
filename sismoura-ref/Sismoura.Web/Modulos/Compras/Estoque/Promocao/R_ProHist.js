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
var R_ProHist = /** @class */ (function (_super) {
    __extends(R_ProHist, _super);
    function R_ProHist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_ProHist.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ProHist.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ProHist.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_ProHist.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_ProHist.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_ProHist.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Fornecedor = 0;
        this.Filtro.optFiltro = "0";
        this.Filtro.Produto = 0;
        this.Filtro.Grupo = 0;
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_ProHist.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        try {
            parametros = {
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                produto: CNum(this.Filtro.Produto),
                fornecedor: CNum(this.Filtro.Fornecedor),
                filtro: CNum(this.Filtro.optFiltro),
                grupo: CNum(this.Filtro.Grupo)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.grid.PreencherGrid(retorno);
            this.accCadastro.SetExpanded(false);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_ProHist;
}(MouraPageRelacaoAngular));
var r_ProHist = new R_ProHist();
//# sourceMappingURL=R_ProHist.js.map