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
var R_FluCaiGer = /** @class */ (function (_super) {
    __extends(R_FluCaiGer, _super);
    function R_FluCaiGer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_FluCaiGer.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FluCaiGer.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FluCaiGer.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_FluCaiGer.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.grid.MoverColunaParaAgrupamento("ContaReceber", "Rec_Previsto");
        this.grid.MoverColunaParaAgrupamento("ContaReceber", "Rec_Realizado");
        this.grid.MoverColunaParaAgrupamento("ContaReceber", "Rec_Saldo");
        this.grid.MoverColunaParaAgrupamento("ContaReceber", "Rec_Provisionado");
        this.grid.MoverColunaParaAgrupamento("ContaPagar", "P_Provisionado");
        this.grid.MoverColunaParaAgrupamento("ContaPagar", "P_Previsto");
        this.grid.MoverColunaParaAgrupamento("ContaPagar", "P_Realizado");
        this.grid.MoverColunaParaAgrupamento("ContaPagar", "P_Saldo");
        this.grid.MoverColunaParaAgrupamento("Cheques", "Che_Previsto");
        this.grid.MoverColunaParaAgrupamento("Cheques", "Che_Realizado");
        this.grid.MoverColunaParaAgrupamento("Cheques", "Che_Saldo");
        this.grid.MoverColunaParaAgrupamento("Cartao", "Cartao_Previsto");
        this.grid.MoverColunaParaAgrupamento("Cartao", "Cartao_Realizado");
        this.grid.MoverColunaParaAgrupamento("Cartao", "Cartao_Saldo");
        this.grid.MoverColunaParaAgrupamento("CCorrente", "Cor_Saldo");
        this.grid.MoverColunaParaAgrupamento("CCorrente", "Cor_Lanc");
        this.grid.MoverColunaParaAgrupamento("Caixa", "Caixa_Dia");
        this.grid.MoverColunaParaAgrupamento("Caixa", "Caixa_Saldo");
        this.grid.MoverColunaParaAgrupamento("Previsto", "Total_Previsto");
        this.grid.MoverColunaParaAgrupamento("Previsto", "Acumulado_Previsto");
        this.LimparCampos();
    };
    R_FluCaiGer.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_FluCaiGer.prototype.PreencherGrade = function () {
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
                    _this.grid.PreencherGrid(retorno);
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
    R_FluCaiGer.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.DataServidor();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.cboContaCorrente.Combo.SetSelectedIndex(0);
        this.grid.PreencherGrid(null);
        this.AccordionFiltros.SetExpanded(true);
        this.RefreshAngular();
    };
    return R_FluCaiGer;
}(MouraPageRelacaoAngular));
var r_FluCaiGer = new R_FluCaiGer();
//# sourceMappingURL=R_FluCaiGer.js.map