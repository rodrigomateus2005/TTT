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
var G_ArqBanXML = /** @class */ (function (_super) {
    __extends(G_ArqBanXML, _super);
    function G_ArqBanXML() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(G_ArqBanXML.prototype, "txtSenha", {
        get: function () {
            return window['txtSenha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_ArqBanXML.prototype, "txtBanco", {
        get: function () {
            return window['txtBanco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_ArqBanXML.prototype, "txtUsuario", {
        get: function () {
            return window['txtUsuario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_ArqBanXML.prototype, "txtServidor", {
        get: function () {
            return window['txtServidor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_ArqBanXML.prototype, "txtBancoCliente", {
        get: function () {
            return window['txtBancoCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_ArqBanXML.prototype, "lblTipoBanco", {
        get: function () {
            return window['lblTipoBanco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    G_ArqBanXML.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtBancoCliente) {
            adicionarEventoMoura(this.txtBancoCliente.Procurou, this.OnPesquisouBancoCliente, this);
        }
    };
    G_ArqBanXML.prototype.OnClickBotaoGerar = function () {
        try {
            //Public Shared Function GetArquivoXML(servidor As String, banco As String, usuario As String, senha As String) As String
            if (String.IsNullOrWhiteSpace(this.txtServidor.GetText())) {
                MostrarAlerta("Informe o servidor!");
                return;
            }
            if (String.IsNullOrWhiteSpace(this.txtBanco.GetText())) {
                MostrarAlerta("Informe o banco!");
                return;
            }
            if (String.IsNullOrWhiteSpace(this.txtUsuario.GetText())) {
                MostrarAlerta("Informe o usuário!");
                return;
            }
            if (String.IsNullOrWhiteSpace(this.txtSenha.GetText())) {
                MostrarAlerta("Informe a senha!");
                return;
            }
            var Parametros = {
                servidor: this.txtServidor.GetText(),
                banco: this.txtBanco.GetText(),
                usuario: this.txtUsuario.GetText(),
                senha: this.txtSenha.GetText()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetArquivoXML", Parametros);
            downloadArquivo(retorno, "BancoLocal.xml", "application/xml");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    G_ArqBanXML.prototype.OnClickBotaoGerarCliente = function () {
        try {
            //Public Shared Function GetArquivoXMLBancoCliente(codBancoCliente As Long) As String
            if (this.txtBancoCliente.GetText().CNum() <= 0) {
                MostrarAlerta("Informe o banco do cliente");
                return;
            }
            var Parametros = {
                codBancoCliente: this.txtBancoCliente.GetText().CNum()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetArquivoXMLBancoCliente", Parametros);
            downloadArquivo(retorno, "BancoLocal.xml", "application/xml");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    G_ArqBanXML.prototype.OnPesquisouBancoCliente = function (s, e) {
        try {
            this.lblTipoBanco.Text = "";
            if (this.txtBancoCliente.GetText().CNum() <= 0) {
                return;
            }
            var Parametros = {
                codBancoCliente: this.txtBancoCliente.GetText().CNum()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetInfoBancoCliente", Parametros);
            if (retorno && retorno.TipoBancoEntity) {
                this.lblTipoBanco.Text = retorno.TipoBancoEntity.Descricao;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return G_ArqBanXML;
}(MouraPageAngular));
var g_ArqBanXML = new G_ArqBanXML();
//# sourceMappingURL=G_ArqBanXML.js.map