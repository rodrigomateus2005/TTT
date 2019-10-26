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
var R_OSPrSr = /** @class */ (function (_super) {
    __extends(R_OSPrSr, _super);
    function R_OSPrSr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_OSPrSr.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_OSPrSr.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_OSPrSr.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_OSPrSr.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_OSPrSr.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_OSPrSr.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        try {
            parametros = {
                periodo_inicial: this.Filtro.Periodo_Inicial,
                periodo_final: this.Filtro.Periodo_Final,
                vendedor: CNum(this.Filtro.Vendedor),
                produto: CNum(this.Filtro.Produto),
                grupo: CNum(this.Filtro.Grupo),
                subgrupo: CNum(this.Filtro.Subgrupo),
                situacao: CNum(this.Filtro.Situacao),
                venda: CNum(this.Filtro.Venda),
                prodServ: CNum(this.Filtro.prodServ)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.grid.PreencherGrid(retorno);
            this.accCadastro.SetExpanded(false);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_OSPrSr.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Vendedor = "";
        this.Filtro.Produto = "";
        this.Filtro.Grupo = "";
        this.Filtro.Subgrupo = "";
        this.Filtro.ProdServ = 0;
        this.Filtro.Situacao = 0;
        this.Filtro.Venda = 0;
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    return R_OSPrSr;
}(MouraPageRelacaoAngular));
var r_OSPrSr = new R_OSPrSr();
//# sourceMappingURL=R_OSPrSr.js.map