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
var C_CfgCom = /** @class */ (function (_super) {
    __extends(C_CfgCom, _super);
    function C_CfgCom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_CfgCom.prototype, "txtContaContabil", {
        get: function () {
            return window['txtContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CfgCom.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_CfgCom.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtContaContabil) {
            adicionarEventoMoura(this.txtContaContabil.AntesAbrirProcura, this.OnAntesAbrirProcuraContaContabil, this);
        }
        if (this.txtContaContabil) {
            adicionarEventoMoura(this.txtContaContabil.Procurou, this.OnDepoisBuscarContaContabil, this);
        }
    };
    C_CfgCom.prototype.OnAntesAbrirProcuraContaContabil = function (s, e) {
        if (this.cboContaCorrente) {
            if (String.IsNullOrWhiteSpace(this.cboContaCorrente.GetContaCorrente())) {
                MsgBoxJS("Informe uma conta corrente para procurar uma conta contábil", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, null, null);
                e.Cancelar = true;
                return;
            }
            this.txtContaContabil.AddParametro("Empresa", "" + this.cboContaCorrente.GetEmpresa());
        }
    };
    C_CfgCom.prototype.OnDepoisBuscarContaContabil = function () {
        var permitidaUsuario;
        var retorno;
        if (this.txtContaContabil) {
            if (this.txtContaContabil.GetText().CNum() <= 0) {
                return;
            }
            var parametros = {
                codContaContabil: this.txtContaContabil.GetText().CNum(),
                usuarioLogado: ValoresSismoura.UsuarioLogado
            };
            permitidaUsuario = this.ExecutarFuncaoServerSideSynch("pertenceEmpresaUsuario", parametros);
            if (!permitidaUsuario) {
                MostrarAlerta("A conta contábil não pertence as empresas vinculadas ao usuário!");
                this.txtContaContabil.Limpar();
                return;
            }
            retorno = this.ExecutarFuncaoServerSideSynch("GetByCod", parametros);
            if (retorno.Sintetico) {
                MostrarAlerta("Você não pode usar uma Conta Sintética!");
                this.txtContaContabil.Limpar();
                return;
            }
        }
    };
    return C_CfgCom;
}(MouraPage));
var c_CfgCom = new C_CfgCom();
//# sourceMappingURL=C_CfgCom.js.map