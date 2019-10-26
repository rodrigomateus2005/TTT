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
var R_FisPro = /** @class */ (function (_super) {
    __extends(R_FisPro, _super);
    function R_FisPro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_FisPro.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FisPro.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_FisPro.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_FisPro.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_FisPro.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial_Venda = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final_Venda = this.DataServidor();
        this.Filtro.Periodo_Inicial_Compra = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final_Compra = this.DataServidor();
        this.Filtro.Fornecedor = 0;
        this.Filtro.Grupo = 0;
        this.Filtro.Somente_Comprados = false;
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_FisPro.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            parametros = {
                dataInicialVenda: this.Filtro.Periodo_Inicial_Venda,
                dataFinalVenda: this.Filtro.Periodo_Final_Venda,
                dataInicialCompra: this.Filtro.Periodo_Inicial_Compra,
                dataFinalCompra: this.Filtro.Periodo_Final_Compra,
                codGrupo: CNum(this.Filtro.Grupo),
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
    return R_FisPro;
}(MouraPageRelacaoAngular));
var r_FisPro = new R_FisPro();
//# sourceMappingURL=R_FisPro.js.map