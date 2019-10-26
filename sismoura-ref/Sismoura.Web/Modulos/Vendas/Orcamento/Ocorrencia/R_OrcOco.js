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
var R_OrcOco = /** @class */ (function (_super) {
    __extends(R_OrcOco, _super);
    function R_OrcOco() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_OrcOco.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_OrcOco.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_OrcOco.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_OrcOco.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_OrcOco.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.grid.PreencherGrid(null);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Tipo_Periodo = "0";
        this.Filtro.Status = 0;
        this.Filtro.Tipo = 0;
        this.RefreshAngular();
    };
    R_OrcOco.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (this.ValidarCamposObrigatorios()) {
            parametros = {
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                tipoPeriodo: this.Filtro.Tipo_Periodo,
                codStatus: CNum(this.Filtro.Status),
                codTipo: CNum(this.Filtro.Tipo),
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.grid.PreencherGrid(retorno);
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
    };
    return R_OrcOco;
}(MouraPageRelacaoAngular));
var r_OrcOco = new R_OrcOco();
//# sourceMappingURL=R_OrcOco.js.map