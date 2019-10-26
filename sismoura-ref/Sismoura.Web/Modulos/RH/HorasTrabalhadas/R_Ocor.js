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
var R_Ocor = /** @class */ (function (_super) {
    __extends(R_Ocor, _super);
    function R_Ocor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Ocor.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Ocor.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Ocor.prototype, "txtFuncionario", {
        get: function () {
            return window["txtFuncionario_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    R_Ocor.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.grid.MoverColunaParaAgrupamento("1Periodo", "Entrada1");
        this.grid.MoverColunaParaAgrupamento("1Periodo", "Saida1");
        this.grid.MoverColunaParaAgrupamento("2Periodo", "Entrada2");
        this.grid.MoverColunaParaAgrupamento("2Periodo", "Saida2");
        this.grid.MoverColunaParaAgrupamento("3Periodo", "Entrada3");
        this.grid.MoverColunaParaAgrupamento("3Periodo", "Saida3");
    };
    R_Ocor.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    //
    R_Ocor.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Funcionario = 0;
        this.Filtro.Data_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Data_Final = this.DataServidor();
        this.txtFuncionario.AddParametro("codEmpresa", ValoresSismoura.EmpresaPadraoUsuario.toString());
        this.grid.PreencherGrid(null);
        this.grid.GroupBy("AgruparPorEla");
        this.grid.OrderBy("Data", "asc");
        this.RefreshAngular();
    };
    R_Ocor.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            abrirEspera("");
            parametros = {
                dataInicial: this.Filtro.Data_Inicial,
                dataFinal: this.Filtro.Data_Final,
                usuario: CNum(this.Filtro.Funcionario)
            };
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                    _this.grid.GroupBy("AgruparPorEla");
                    _this.grid.OrderBy("Data", "asc");
                    _this.AccordionFiltros.SetExpanded(false);
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
    return R_Ocor;
}(MouraPageRelacaoAngular));
var r_Ocor = new R_Ocor();
//# sourceMappingURL=R_Ocor.js.map