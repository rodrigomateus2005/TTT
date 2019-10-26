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
var R_CotVFo = /** @class */ (function (_super) {
    __extends(R_CotVFo, _super);
    function R_CotVFo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_CotVFo.prototype, "tabCE", {
        get: function () {
            return window['tabCE_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CotVFo.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CotVFo.prototype, "gridCG", {
        get: function () {
            return window['gridCG_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CotVFo.prototype, "gridRE", {
        get: function () {
            return window['gridRE_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CotVFo.prototype, "txtPeriodoCG", {
        get: function () {
            return window['txtPeriodoCG_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CotVFo.prototype, "txtPeriodoRE", {
        get: function () {
            return window['txtPeriodoRE_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_CotVFo.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.BotaoRelacao_BotaoGerar) {
            adicionarEventoMoura(this.BotaoRelacao_BotaoGerar.Click, this.BotaoRelacao_BotaoGerarClick, this);
        }
    };
    R_CotVFo.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_CotVFo.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (this.tabCE.GetActiveTabIndex() == 0) {
            this.PreencherGradeCG();
        }
        else if (this.tabCE.GetActiveTabIndex() == 1) {
            this.PreencherGradeRE();
        }
        this.RefreshAngular();
    };
    R_CotVFo.prototype.PreencherGradeCG = function () {
        var _this = this;
        try {
            var parametros = {
                dataInicial: ConvertToDate(this.Filtro.Periodo_InicialCG),
                dataFinal: ConvertToDate(this.Filtro.Periodo_FinalCG)
            };
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("PreencherGradeCG", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.gridCG.PreencherGrid(retorno);
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
    R_CotVFo.prototype.PreencherGradeRE = function () {
        var _this = this;
        try {
            var parametros = {
                dataInicial: ConvertToDate(this.Filtro.Periodo_InicialRE),
                dataFinal: ConvertToDate(this.Filtro.Periodo_FinalRE),
                fornecedor: CNum(this.Filtro.Fornecedor),
                codCotacao: CNum(this.Filtro.Cotacao),
                tipo: CNum(this.Filtro.TipoCotacao)
            };
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("PreencherGradeRE", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.gridRE.PreencherGrid(retorno);
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
    R_CotVFo.prototype.BotaoRelacao_BotaoGerarClick = function (s, e) {
        e.processOnServer = false;
        if (this.tabCE.GetActiveTabIndex() == 0) {
            if (this.Filtro.Periodo_InicialCG == null || this.Filtro.Periodo_FinalCG == null) {
                MostrarAlerta("Preencha o campo corretamente: Período de cadastro da cotação");
                e.cancelEventAndBubble = true;
                return;
            }
        }
        else if (this.tabCE.GetActiveTabIndex() == 1) {
            if (this.Filtro.Periodo_InicialRE == null || this.Filtro.Periodo_FinalRE == null) {
                MostrarAlerta("Preencha o campo corretamente: Período ocorrência de envio e recebimento");
                e.cancelEventAndBubble = true;
                return;
            }
        }
        this.PreencherGrade();
    };
    R_CotVFo.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        var dataAtual = this.DataServidor();
        this.Filtro.Periodo_InicialCG = dataAtual;
        this.Filtro.Periodo_FinalCG = dataAtual;
        this.Filtro.Periodo_InicialRE = dataAtual;
        this.Filtro.Periodo_FinalRE = dataAtual;
        this.Filtro.TipoCotacao = "0";
        this.gridCG.PreencherGrid(null);
        this.gridRE.PreencherGrid(null);
        this.RefreshAngular();
    };
    return R_CotVFo;
}(MouraPageRelacaoAngular));
var r_CotVFo = new R_CotVFo();
//# sourceMappingURL=R_CotVFo.js.map