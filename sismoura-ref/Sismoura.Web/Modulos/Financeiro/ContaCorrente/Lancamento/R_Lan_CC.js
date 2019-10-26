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
var R_Lan_CC = /** @class */ (function (_super) {
    __extends(R_Lan_CC, _super);
    function R_Lan_CC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Lan_CC.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Lan_CC.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Lan_CC.prototype, "txtContaContabil", {
        get: function () {
            return window['txtContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Lan_CC.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_Lan_CC.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_Lan_CC.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtContaContabil) {
            adicionarEventoMoura(this.txtContaContabil.Procurou, this.OnProcurouConta, this);
        }
        if (this.cboContaCorrente && this.cboContaCorrente.Combo) {
            adicionarEventoDevExpress(this.cboContaCorrente.Combo.SelectedIndexChanged, this.OnMudouContaCorrente, this);
        }
    };
    R_Lan_CC.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.grid.PreencherGrid(null);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Conta_Contabil = 0;
        this.cboContaCorrente.Limpar();
        this.Filtro.Total_Registros = "";
        this.Filtro.Total_Entrada = "";
        this.Filtro.Total_Saida = "";
        this.RefreshAngular();
    };
    R_Lan_CC.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (this.ValidarCamposObrigatorios()) {
            parametros = {
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                contaCorrente: this.cboContaCorrente.GetContaCorrente(),
                codContaContabil: CNum(this.Filtro.Conta_Contabil)
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGrade", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                if (retorno) {
                    _this.grid.PreencherGrid(retorno.Dados_Grade);
                    _this.Filtro.Total_Registros = retorno.Total_Registros;
                    _this.Filtro.Total_Entrada = retorno.Total_Entrada;
                    _this.Filtro.Total_Saida = retorno.Total_Saida;
                    _this.RefreshAngular();
                }
                _this.AccordionFiltros.SetExpanded(false);
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
    };
    R_Lan_CC.prototype.OnProcurouConta = function (s, e) {
        if (CNum(this.txtContaContabil.GetText())) {
            if (String.IsNullOrWhiteSpace(this.cboContaCorrente.GetContaCorrente())) {
                MostrarAlerta("Informe a Conta Corrente!");
                this.txtContaContabil.Limpar();
            }
            else {
                if (!this.VerificarContaContabil(CNum(this.txtContaContabil.GetText()), this.cboContaCorrente.GetEmpresa())) {
                    MostrarAlerta("Conta Contábil não encontrada para a empresa da Conta Corrente selecionada!");
                    this.txtContaContabil.Limpar();
                }
            }
        }
    };
    R_Lan_CC.prototype.VerificarContaContabil = function (codContaContabil, codEmpresa) {
        var parametros;
        try {
            parametros = {
                codContaContabil: codContaContabil,
                codEmpresa: codEmpresa
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Lan_CC.prototype.OnMudouContaCorrente = function (s, e) {
        this.Filtro.Conta_Contabil = 0;
        this.RefreshAngular();
    };
    return R_Lan_CC;
}(MouraPageRelacaoAngular));
var r_Lan_CC = new R_Lan_CC();
//# sourceMappingURL=R_Lan_CC.js.map