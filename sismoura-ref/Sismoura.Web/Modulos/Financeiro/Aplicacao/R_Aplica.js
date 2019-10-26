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
var R_Aplica = /** @class */ (function (_super) {
    __extends(R_Aplica, _super);
    function R_Aplica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Aplica.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Aplica.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_Aplica.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_Aplica.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_Aplica.prototype.PreencherGrade = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                dataInicial: ConvertToDate(this.Filtro.Periodo_Inicial),
                dataFinal: ConvertToDate(this.Filtro.Periodo_Final),
                conta_corrente: this.Filtro.Conta_Corrente,
                conta_corrente_destino: this.Filtro.Conta_Corrente_Destino
            };
            this.AccordionFiltros.SetExpanded(false);
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("GetData", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.grid.PreencherGrid(retorno);
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
    R_Aplica.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Conta_Corrente = "todos";
        this.Filtro.Conta_Corrente_Destino = "todos";
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    return R_Aplica;
}(MouraPageRelacaoAngular));
var r_Aplica = new R_Aplica();
//# sourceMappingURL=R_Aplica.js.map