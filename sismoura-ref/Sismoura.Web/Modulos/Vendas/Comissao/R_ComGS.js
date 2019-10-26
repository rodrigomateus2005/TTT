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
var R_ComGS = /** @class */ (function (_super) {
    __extends(R_ComGS, _super);
    function R_ComGS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_ComGS.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComGS.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComGS.prototype, "lblComissao", {
        get: function () {
            return window['lblComissao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComGS.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_ComGS.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_ComGS.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        try {
            var parametros = {
                dataInicial: ConvertToDate(this.Filtro.Periodo_Inicial),
                dataFinal: ConvertToDate(this.Filtro.Periodo_Final),
                codVendedor: CNum(this.Filtro.Vendedor),
                empresas: this.lstEmpresa.GetValues().join(",")
            };
            this.AccordionFiltros.SetExpanded(false);
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                var comissaoTotal = retorno.Sum("ComissaoR");
                _this.lblComissao.Text = comissaoTotal.Format(2);
                debugger;
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
    R_ComGS.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Vendedor = "";
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.lblComissao.Text = "";
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    return R_ComGS;
}(MouraPageRelacaoAngular));
var r_ComGS = new R_ComGS();
//# sourceMappingURL=R_ComGS.js.map