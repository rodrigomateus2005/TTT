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
var R_ComSub = /** @class */ (function (_super) {
    __extends(R_ComSub, _super);
    function R_ComSub() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_ComSub.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComSub.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComSub.prototype, "lblComissao", {
        get: function () {
            return window['lblComissao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComSub.prototype, "lblComissaoInfo", {
        get: function () {
            return window['lblComissaoInfo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComSub.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_ComSub.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_ComSub.prototype.PreencherGrade = function () {
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
                var comissaoTotal = retorno.Sum("Comissao");
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
    R_ComSub.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Vendedor = "";
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.lblComissaoInfo.Text = "A comissão de SubGrupo utiliza a porcentagem informada no cadastro de SubGrupo.";
        this.grid.PreencherGrid(null);
        this.lblComissao.Text = "";
        this.RefreshAngular();
    };
    return R_ComSub;
}(MouraPageRelacaoAngular));
var r_ComSub = new R_ComSub();
//# sourceMappingURL=R_ComSub.js.map