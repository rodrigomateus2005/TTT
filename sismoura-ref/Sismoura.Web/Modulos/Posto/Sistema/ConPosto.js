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
var ConPosto = /** @class */ (function (_super) {
    __extends(ConPosto, _super);
    function ConPosto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ConPosto.prototype, "cboTipoLMC", {
        get: function () {
            return window['cboTipoLMC_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConPosto.prototype, "txtCombustivel", {
        get: function () {
            return window['txtCombustivel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConPosto.prototype, "chkConsPlaca", {
        get: function () {
            return window['chkConsPlaca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConPosto.prototype, "hdnCodConfiguracao", {
        get: function () {
            return $('#hdnCodConfiguracao')[0];
        },
        enumerable: true,
        configurable: true
    });
    ConPosto.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.cboTipoLMC.SetSelectedIndex(0);
        this.PreencherTela();
    };
    ConPosto.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    ConPosto.prototype.PreencherTela = function () {
        try {
            var parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherTela", parametros);
            if (retorno) {
                this.hdnCodConfiguracao.value = retorno.Id;
                this.cboTipoLMC.SetValue(retorno.Tipolmc);
                this.chkConsPlaca.Checked = retorno.Consulta_Placa;
                this.txtCombustivel.SetText(retorno.Pedir_Bico);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    ConPosto.prototype.ClicouBtnAtualizarConfig = function () {
        try {
            var parametros = {
                id: this.hdnCodConfiguracao.value,
                tipolmc: this.cboTipoLMC.GetValue(),
                consultaPlaca: this.chkConsPlaca.Checked,
                pedirBico: CNum(this.txtCombustivel.GetText()),
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("OnClicouBtnAtualizar", parametros);
            MostrarMensagem("Configurações " + retorno + " com sucesso!");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return ConPosto;
}(MouraPageAngular));
var conPosto = new ConPosto();
//# sourceMappingURL=ConPosto.js.map