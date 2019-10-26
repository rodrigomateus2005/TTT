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
var R_AberEnc = /** @class */ (function (_super) {
    __extends(R_AberEnc, _super);
    function R_AberEnc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_AberEnc.prototype, "Livro", {
        get: function () {
            if (!this.GetScope()["Livro"]) {
                this.GetScope()["Livro"] = {};
            }
            return this.GetScope()["Livro"];
        },
        set: function (value) {
            this.GetScope()["Livro"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AberEnc.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AberEnc.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AberEnc.prototype, "btnImprimir", {
        get: function () {
            return window['btnImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_AberEnc.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.ClickLimpar, this);
        }
        if (this.btnImprimir) {
            adicionarEventoMoura(this.btnImprimir.Click, this.Imprimir, this);
        }
    };
    R_AberEnc.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_AberEnc.prototype.ClickLimpar = function (s, e) {
        this.LimparCampos();
    };
    R_AberEnc.prototype.LimparCampos = function () {
        var ano = new Date().getFullYear() - 1;
        this.Livro.Periodo_Inicial = new Date(ano, 0, 1);
        this.Livro.Periodo_Final = new Date(ano, 11, 31);
        this.Livro.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        this.Livro.VolumeInicial = "1";
        this.Livro.VolumeFinal = "1";
        this.Livro.AssinaturaSocio = "";
        this.RefreshAngular();
    };
    R_AberEnc.prototype.Imprimir = function (s, e) {
        this.RefreshAngular();
        var caminho = "~/Report/Fixos/";
        var arquivo = "TermoAberFec.REPX";
        var parametros;
        if (!this.ValidarTermo()) {
            return;
        }
        try {
            parametros = {
                empresaSelecionada: CNum(this.Livro.Empresa),
                assinaturaSocio: CNum(this.Livro.AssinaturaSocio),
                nomeModulo: "Contabil",
                volumeInicial: CNum(this.Livro.VolumeInicial),
                volumeFinal: CNum(this.Livro.VolumeFinal),
                dataInicio: this.Livro.Periodo_Inicial,
                dataFim: this.Livro.Periodo_Final
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PrepararImpressao", parametros, function (d) {
                fecharEspera();
                //AbrirReportInternal(caminho, arquivo);
                AbrirReport(caminho, arquivo);
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
    R_AberEnc.prototype.ValidarTermo = function () {
        var retorno = true;
        try {
            if (!this.Livro.Periodo_Inicial || !this.Livro.Periodo_Final || !ValidarPeriodo(this.Livro.Periodo_Inicial, this.Livro.Periodo_Final)) {
                MostrarAlerta("Informe corretamente o período do Termo de Abertura e Encerramento.");
                retorno = false;
            }
            else if (CNum(this.Livro.VolumeInicial) <= 0 || CNum(this.Livro.VolumeFinal) <= 0) {
                MostrarAlerta("Informe corretamente o Volume do Termo de Abertura e Encerramento.");
                retorno = false;
            }
            else if (CNum(this.Livro.VolumeInicial) > CNum(this.Livro.VolumeFinal)) {
                MostrarAlerta("O Volume Inicial não pode ser maior do que o Volume Final.");
                retorno = false;
            }
            else if (String.IsNullOrWhiteSpace(this.Livro.AssinaturaSocio)) {
                MostrarAlerta("Informe corretamente a Assinatura do Termo de Abertura e Encerramento.");
                retorno = false;
            }
        }
        catch (ex) {
            LogarException(ex);
            return false;
        }
        return retorno;
    };
    return R_AberEnc;
}(MouraPageAngular));
var r_AberEnc = new R_AberEnc();
//# sourceMappingURL=R_AberEnc.js.map