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
var R_EntraAniAdoc = /** @class */ (function (_super) {
    __extends(R_EntraAniAdoc, _super);
    function R_EntraAniAdoc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_EntraAniAdoc.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntraAniAdoc.prototype, "grid", {
        get: function () { return window['grid_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntraAniAdoc.prototype, "txtPeriodo", {
        get: function () { return window['txtPeriodo_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntraAniAdoc.prototype, "lstEmpresa", {
        get: function () { return window['lstEmpresa_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntraAniAdoc.prototype, "cboSituacaoEntrada", {
        get: function () { return window['cboSituacaoEntrada_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntraAniAdoc.prototype, "cboSituacaoPetsEntrada", {
        get: function () { return window['cboSituacaoPetsEntrada_Object']; },
        enumerable: true,
        configurable: true
    });
    R_EntraAniAdoc.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.ClickBotaoLinha, this.OnClickouVisualizarGrid, this);
        }
    };
    R_EntraAniAdoc.prototype.OnClickouVisualizarGrid = function (s, e) {
        var codEntrada = "" + e.data['Codigo_Entrada_Adocao'];
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            if (e.commandName == "VISUALIZAR_ENTRADA") {
                abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroEntradaAnimaisAdocao), codEntrada);
            }
        }
    };
    R_EntraAniAdoc.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        setTimeout(function () {
            _this.LimparCampos();
        }, 300);
    };
    R_EntraAniAdoc.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        if (this.grid) {
            this.grid.PreencherGrid(null);
        }
        if (this.txtPeriodo) {
            this.txtPeriodo.Iniciar();
        }
        if (this.lstEmpresa) {
            this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        }
        if (this.cboSituacaoEntrada) {
            this.cboSituacaoEntrada.SetValue(0);
        }
        if (this.cboSituacaoPetsEntrada) {
            this.cboSituacaoPetsEntrada.SetValue(0);
        }
    };
    R_EntraAniAdoc.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (!this.txtPeriodo.IsValido()) {
            MostrarAlerta("Informe o período corretamente.");
            return;
        }
        if (this.lstEmpresa.GetValues().length == 0) {
            MostrarAlerta("Informe a empresa");
            return;
        }
        this.GetDadosRelacao();
    };
    R_EntraAniAdoc.prototype.GetDadosRelacao = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate().ToDate(),
                empresas: this.lstEmpresa.GetValuesRelacao(),
                situacaoEntrada: this.cboSituacaoEntrada.GetValue(),
                situacaoAnimaisEntrada: this.cboSituacaoPetsEntrada.GetValue()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GetRelacaoEntradaAdocao", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                    _this.grid.GroupBy("Codigo_Entrada_Adocao");
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarExceptionAjax(erro);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    return R_EntraAniAdoc;
}(MouraPageRelacaoAngular));
var r_EntraAniAdoc = new R_EntraAniAdoc();
//# sourceMappingURL=R_EntraAniAdoc.js.map