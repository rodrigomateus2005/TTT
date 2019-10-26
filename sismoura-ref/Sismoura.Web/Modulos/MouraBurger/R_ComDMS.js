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
var R_ComDMS = /** @class */ (function (_super) {
    __extends(R_ComDMS, _super);
    function R_ComDMS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_ComDMS.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComDMS.prototype, "Entity", {
        get: function () {
            if (!this.GetScope()["Entity"]) {
                this.GetScope()["Entity"] = {};
            }
            return this.GetScope()["Entity"];
        },
        set: function (value) {
            this.GetScope()["Entity"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComDMS.prototype, "Resultados", {
        get: function () {
            if (!this.GetScope()["Resultados"]) {
                this.GetScope()["Resultados"] = [];
            }
            return this.GetScope()["Resultados"];
        },
        set: function (value) {
            this.GetScope()["Resultados"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComDMS.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_ComDMS.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_ComDMS.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_ComDMS.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Entity.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Entity.Periodo_Final = this.DataServidor();
        this.Entity.Hora_Inicial = null;
        this.Entity.Hora_Final = null;
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.Entity.Vendedor = 0;
        this.Entity.Situacao = 0;
        this.Resultados = [];
        this.RefreshAngular();
    };
    R_ComDMS.prototype.ValidarCampos = function () {
        if ((this.Entity.Hora_Inicial && !this.Entity.Hora_Final) || (this.Entity.Hora_Final && !this.Entity.Hora_Inicial)) {
            MostrarAlerta("Caso um dos horários seja informado é necessário informar o outro");
            return false;
        }
        return true;
    };
    R_ComDMS.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            this.Resultados = [];
            if (!this.ValidarCampos()) {
                return;
            }
            parametros = {
                dataInicio: this.Entity.Periodo_Inicial,
                dataFim: this.Entity.Periodo_Final,
                horarioInicio: this.Entity.Hora_Inicial,
                horarioFim: this.Entity.Hora_Final,
                codVendedor: this.Entity.Vendedor,
                empresa: this.lstEmpresa.GetValuesRelacaoNumber(),
                codSituacao: this.Entity.Situacao
            };
            abrirEspera("");
            this.Resultados = this.ExecutarFuncaoServerSideSynch("RelacaoComandasPedidosPeriodo", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
        finally {
            fecharEspera();
            this.RefreshAngular();
        }
    };
    return R_ComDMS;
}(MouraPageRelacaoAngular));
var r_ComDMS = new R_ComDMS();
//# sourceMappingURL=R_ComDMS.js.map