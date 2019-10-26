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
var R_FluCaiRes = /** @class */ (function (_super) {
    __extends(R_FluCaiRes, _super);
    function R_FluCaiRes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_FluCaiRes.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FluCaiRes.prototype, "lblSaldoInicial", {
        get: function () {
            return window['lblSaldoInicial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FluCaiRes.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FluCaiRes.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_FluCaiRes.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_FluCaiRes.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_FluCaiRes.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.DataServidor();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.cboContaCorrente.Combo.SetSelectedIndex(0);
        this.grid.PreencherGrid(null);
        this.Filtro.Saldo_Inicial = CNum("0").Format(ValoresSismoura.CasasDecimaisValor);
        this.AccordionFiltros.SetExpanded(true);
        this.RefreshAngular();
    };
    R_FluCaiRes.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (this.ValidarCamposObrigatorios()) {
            try {
                parametros = {
                    contaCorrente: this.cboContaCorrente.GetContaCorrente(),
                    considerarCCInativas: this.cboContaCorrente.CheckBox.Checked,
                    dataInicial: ConvertToDate(this.Filtro.Periodo_Inicial),
                    dataFinal: ConvertToDate(this.Filtro.Periodo_Final)
                };
                abrirEspera("");
                this.ExecutarFuncaoServerSideAsynch("PreencherGrade", parametros, function (d) {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno.Dados);
                    _this.Filtro.Saldo_Inicial = CNum(retorno.Saldo_Inicial).Format(ValoresSismoura.CasasDecimaisValor);
                    if (CNum(retorno.Saldo_Inicial) >= 0) {
                        _this.lblSaldoInicial.LabelComponente.style.color = "blue";
                    }
                    else {
                        _this.lblSaldoInicial.LabelComponente.style.color = "red";
                    }
                    _this.AccordionFiltros.SetExpanded(false);
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
        }
    };
    return R_FluCaiRes;
}(MouraPageRelacaoAngular));
var r_FluCaiRes = new R_FluCaiRes();
//# sourceMappingURL=R_FluCaiRes.js.map