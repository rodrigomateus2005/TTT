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
var R_VemEmp = /** @class */ (function (_super) {
    __extends(R_VemEmp, _super);
    function R_VemEmp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_VemEmp.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VemEmp.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VemEmp.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_VemEmp.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_VemEmp.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_VemEmp.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.grid.PreencherGrid(null);
        this.lstEmpresa.LimparSelecao();
        this.Filtro.Considerar_Trocas = true;
        this.Filtro.Apenas_Faturamento = false;
        this.RefreshAngular();
    };
    R_VemEmp.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            parametros = {
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                codEmpresas: this.lstEmpresa.GetValuesNumber(),
                considerarTrocas: this.Filtro.Considerar_Trocas,
                apenasComFaturamento: this.Filtro.Apenas_Faturamento
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
    return R_VemEmp;
}(MouraPageRelacaoAngular));
var r_VemEmp = new R_VemEmp();
//# sourceMappingURL=R_VemEmp.js.map