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
var R_V_Bico_Angular = /** @class */ (function (_super) {
    __extends(R_V_Bico_Angular, _super);
    function R_V_Bico_Angular() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_V_Bico_Angular.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_V_Bico_Angular.prototype, "grdRelacaoVendaBico", {
        get: function () {
            return window['grdRelacaoVendaBico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_V_Bico_Angular.prototype, "cboCaixa", {
        get: function () {
            return window['cboCaixa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_V_Bico_Angular.prototype, "chkCupom", {
        get: function () {
            return window['chkCupom_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_V_Bico_Angular.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_V_Bico_Angular.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        try {
            var lista = void 0, cboCaixaValue = void 0;
            lista = this.cboCaixa.lstEmpresa.GetValues().join(",");
            if (this.cboCaixa.cboCaixa.GetValue() < 0 || this.cboCaixa.cboCaixa.GetValue() == null)
                cboCaixaValue = "0";
            else
                cboCaixaValue = this.cboCaixa.cboCaixa.GetValue();
            parametros = {
                dataInicial: ConvertToDate(this.Filtro.Periodo_Inicial),
                dataFinal: ConvertToDate(this.Filtro.Periodo_Final),
                empresas: lista,
                codPDV: CNum(this.cboCaixa.cboPdv.GetValue()),
                codCaixa: CNum(cboCaixaValue),
                cupomFiscal: this.chkCupom.Checked
            };
            this.AccordionFiltros.SetExpanded(false);
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("GetCadastrados", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.grdRelacaoVendaBico.PreencherGrid(retorno);
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
    R_V_Bico_Angular.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_V_Bico_Angular.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_V_Bico_Angular.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.cboCaixa.lstEmpresa.LimparSelecao();
        this.cboCaixa.cboCaixa.SetSelectedIndex(0);
        this.cboCaixa.cboPdv.SetSelectedIndex(0);
        this.chkCupom.Checked = false;
        this.grdRelacaoVendaBico.PreencherGrid(null);
        this.RefreshAngular();
    };
    return R_V_Bico_Angular;
}(MouraPageRelacaoAngular));
var r_V_Bico_Angular = new R_V_Bico_Angular();
//# sourceMappingURL=R_V_Bico_Angular.js.map