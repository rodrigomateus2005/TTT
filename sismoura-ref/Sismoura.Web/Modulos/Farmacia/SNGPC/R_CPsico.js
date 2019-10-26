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
var R_CPsico = /** @class */ (function (_super) {
    __extends(R_CPsico, _super);
    function R_CPsico() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_CPsico.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CPsico.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    R_CPsico.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_CPsico.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    //
    R_CPsico.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Data_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Data_Final = this.DataServidor();
        this.Filtro.Fornecedor = 0;
        this.Filtro.Produto = 0;
        this.Filtro.TotalDeCompras = "0";
        this.grid.PreencherGrid(null);
        this.grid.GroupBy("Entrada");
        this.AccordionFiltros.SetExpanded(true);
        this.RefreshAngular();
    };
    R_CPsico.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        try {
            abrirEspera();
            var parametros = {};
            parametros = {
                dataInicial: this.Filtro.Data_Inicial,
                dataFinal: this.Filtro.Data_Final,
                fornecedor: CNum(this.Filtro.Fornecedor),
                produto: CNum(this.Filtro.Produto)
            };
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno.dt);
                    _this.grid.GroupBy("Entrada");
                    _this.grid.OrderBy("Data_Entrada", "asc");
                    _this.Filtro.TotalDeCompras = retorno.TotalDeCompras;
                    _this.AccordionFiltros.SetExpanded(false);
                    _this.RefreshAngular();
                }
                catch (ex) {
                    LogarException(ex);
                }
                finally {
                    fecharEspera();
                }
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
    return R_CPsico;
}(MouraPageRelacaoAngular));
var r_CPsico = new R_CPsico();
//# sourceMappingURL=R_CPsico.js.map