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
var R_CupVen = /** @class */ (function (_super) {
    __extends(R_CupVen, _super);
    function R_CupVen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_CupVen.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CupVen.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CupVen.prototype, "txtCupomDesconto", {
        get: function () {
            return window['txtCupomDesconto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CupVen.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CupVen.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_CupVen.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        this.PreencherGrade();
    };
    //public Init() {
    //    super.Init();
    //}
    R_CupVen.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var lista;
        var parametros;
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        try {
            lista = this.lstEmpresa.GetValues().join(",");
            parametros = {
                empresas: lista,
                cupomDesconto: CNum(this.txtCupomDesconto.GetText()),
                dataInicio: ConvertToDate(this.txtPeriodo.textBoxCalendarioInicio.GetDate()),
                dataFim: ConvertToDate(this.txtPeriodo.textBoxCalendarioFim.GetDate())
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.grid.PreencherGrid(retorno.Tabela);
                _this.grid.GroupBy("Cupom_Desconto");
                _this.lstEmpresa.txtProcura.value = "";
                AtualizarModelAngular(_this.lstEmpresa.txtProcura);
                _this.RefreshAngular();
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
    R_CupVen.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Cupom_Desconto = 0;
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.txtPeriodo.textBoxCalendarioInicio.SetDate(new Date());
        this.txtPeriodo.textBoxCalendarioFim.SetDate(new Date());
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    return R_CupVen;
}(MouraPageRelacaoAngular));
var r_CupVen = new R_CupVen();
//# sourceMappingURL=R_CupVen.js.map