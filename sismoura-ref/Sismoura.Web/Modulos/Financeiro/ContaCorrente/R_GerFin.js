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
var R_GerFin = /** @class */ (function (_super) {
    __extends(R_GerFin, _super);
    function R_GerFin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_GerFin.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_GerFin.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_GerFin.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_GerFin.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_GerFin.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_GerFin.prototype.PreencherGrade = function () {
        var _this = this;
        var parametros;
        try {
            var lista = this.lstEmpresa.GetValues();
            var empresas;
            if (lista.length > 0)
                empresas = this.lstEmpresa.GetValues().join(",");
            else
                empresas = "";
            parametros = {
                dataInicial: ConvertToDate(this.Filtro.Periodo_Inicial),
                dataFinal: ConvertToDate(this.Filtro.Periodo_Final),
                empresas: empresas
            };
            this.AccordionFiltros.SetExpanded(false);
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("PreencherGrade", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.grid.PreencherGrid(retorno);
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
            this.grid.GroupBy("Tipo");
            this.grid.ExpandAll(0);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    R_GerFin.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    return R_GerFin;
}(MouraPageRelacaoAngular));
var r_GerFin = new R_GerFin();
//# sourceMappingURL=R_GerFin.js.map