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
var R_TrocaRank = /** @class */ (function (_super) {
    __extends(R_TrocaRank, _super);
    function R_TrocaRank() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_TrocaRank.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_TrocaRank.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_TrocaRank.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_TrocaRank.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_TrocaRank.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.grid.PreencherGrid(null);
        this.Filtro.Periodo_Inicial = this.DataServidor();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Fornecedor = 0;
        this.RefreshAngular();
    };
    R_TrocaRank.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            parametros = {
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                codFornecedor: CNum(this.Filtro.Fornecedor)
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.grid.PreencherGrid(retorno);
                _this.AccordionFiltros.SetExpanded(false);
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    return R_TrocaRank;
}(MouraPageRelacaoAngular));
var r_TrocaRank = new R_TrocaRank();
//# sourceMappingURL=R_TrocaRank.js.map