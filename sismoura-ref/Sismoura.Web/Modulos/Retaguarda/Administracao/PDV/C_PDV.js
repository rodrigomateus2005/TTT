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
var C_PDV = /** @class */ (function (_super) {
    __extends(C_PDV, _super);
    function C_PDV() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_PDV.prototype, "btnTestarConexao", {
        get: function () {
            return window['btnTestarConexao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PDV.prototype, "txtUsuario", {
        get: function () {
            return window['txtUsuario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PDV.prototype, "txtIP", {
        get: function () {
            return window['txtIP_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PDV.prototype, "txtBancoDados", {
        get: function () {
            return window['txtBancoDados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PDV.prototype, "txtSenha", {
        get: function () {
            return window['txtSenha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PDV.prototype, "cboPerfil", {
        get: function () {
            return window['cboPerfil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_PDV.prototype.Init = function () {
        _super.prototype.Init.call(this);
        var parametros;
        if (this.btnTestarConexao) {
            adicionarEventoMoura(this.btnTestarConexao.Click, this.VerificarConexao, this);
        }
    };
    C_PDV.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        var parametros;
        var retorno;
        retorno = this.ExecutarFuncaoServerSideSynch("HabilitarPerfil", parametros);
        this.cboPerfil.Visible = retorno;
    };
    C_PDV.prototype.VerificarConexao = function (s, e) {
        var conexao;
        var parametros;
        e.processOnServer = false;
        parametros = {
            usuario: this.txtUsuario.GetText(),
            ip: this.txtIP.GetText(),
            bancoDados: this.txtBancoDados.GetText(),
            senha: this.txtSenha.GetText()
        };
        if (this.txtUsuario.GetText() == "") {
            MostrarAlerta("Informe o usuário");
            return;
        }
        if (this.txtIP.GetText() == "") {
            MostrarAlerta("Informe o IP");
            return;
        }
        if (this.txtBancoDados.GetText() == "") {
            MostrarAlerta("Informe o Banco de Dados");
            return;
        }
        if (this.txtSenha.GetText() == "") {
            MostrarAlerta("Informe a senha");
            return;
        }
        conexao = this.ExecutarFuncaoServerSideSynch("TestarConexao", parametros);
        if (conexao == true) {
            MostrarAlerta("Conexão verificada com sucesso.");
        }
        else {
            MostrarAlerta("Conexão incorreta. Verifique se os campos estão corretos.");
        }
    };
    return C_PDV;
}(MouraPageCadastro));
var c_PDV = new C_PDV;
//# sourceMappingURL=C_PDV.js.map