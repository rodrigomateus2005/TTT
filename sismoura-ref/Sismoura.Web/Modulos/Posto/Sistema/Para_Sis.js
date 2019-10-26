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
var Para_Sis = /** @class */ (function (_super) {
    __extends(Para_Sis, _super);
    function Para_Sis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Para_Sis.prototype, "Entity", {
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
    Object.defineProperty(Para_Sis.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Para_Sis.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.Entity.Tipolmc = "VENDA";
        this.PreencherTela();
        this.RefreshAngular();
    };
    Para_Sis.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.OnClickGravar, this);
        }
    };
    Para_Sis.prototype.PreencherTela = function () {
        try {
            var parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherTela", parametros);
            if (retorno) {
                this.Entity = retorno;
                this.RefreshAngular();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Para_Sis.prototype.OnClickGravar = function (s, e) {
        try {
            this.Entity.Pedir_Bico = CNum(this.Entity.Pedir_Bico);
            var parametros = {
                config: this.Entity,
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GravarConfig", parametros);
            MostrarMensagem("Configurações " + retorno.MensagemRetorno + " com sucesso!");
            this.PreencherTela();
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return Para_Sis;
}(MouraPageAngular));
var para_Sis = new Para_Sis();
//# sourceMappingURL=Para_Sis.js.map