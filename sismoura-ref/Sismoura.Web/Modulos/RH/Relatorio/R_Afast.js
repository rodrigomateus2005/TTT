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
var R_Afast = /** @class */ (function (_super) {
    __extends(R_Afast, _super);
    function R_Afast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Afast.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Afast.prototype, "cboEmpresa", {
        get: function () {
            return window["cboEmpresa_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Afast.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Afast.prototype, "txtFuncionario", {
        get: function () {
            return window["txtFuncionario_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    R_Afast.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_Afast.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    //
    R_Afast.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.txtFuncionario.Limpar();
        this.Filtro.Data_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Data_Final = this.PrimeiroDiaMes().addMonths(1).addDays(-1);
        this.Filtro.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_Afast.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            parametros = {
                dataInicial: this.Filtro.Data_Inicial,
                dataFinal: this.Filtro.Data_Final,
                codFuncionario: CNum(this.Filtro.Funcionario),
                codEmpresa: CNum(this.Filtro.Empresa)
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                    _this.AccordionFiltros.SetExpanded(false);
                }
                catch (ex) {
                    LogarException(ex);
                }
                finally {
                    fecharEspera();
                }
            }, function (error) {
                fecharEspera();
                LogarException(error);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    return R_Afast;
}(MouraPageRelacaoAngular));
var r_Afast = new R_Afast();
//# sourceMappingURL=R_Afast.js.map