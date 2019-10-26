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
var C_MailCon = /** @class */ (function (_super) {
    __extends(C_MailCon, _super);
    function C_MailCon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_MailCon.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MailCon.prototype, "htmlEditorMensagem", {
        get: function () {
            return window['htmlEditorMensagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_MailCon.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    C_MailCon.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        this.htmlEditorMensagem.Html = Entidade.Mensagem;
    };
    C_MailCon.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (!this.ValidarCampos()) {
            return false;
        }
        var entidade;
        entidade = this.GetScope().Entity;
        var parametros = {
            html: this.htmlEditorMensagem.Html.toString()
        };
        entidade.Mensagem = this.ExecutarFuncaoServerSideSynch("GetHtmlEmbedImage", parametros);
        this.GetScope().Entity = entidade;
        this.RefreshAngular();
        return true;
    };
    C_MailCon.prototype.OnDepoisLimpar = function (Entity) {
        this.txtCodigo.Limpar();
        this.htmlEditorMensagem.Html = "";
        this.htmlEditorMensagem.Html = this.GetTags();
        this.RefreshAngular();
    };
    C_MailCon.prototype.ValidarCampos = function () {
        try {
            if (String.IsNullOrWhiteSpace(this.htmlEditorMensagem.Html.toString())) {
                MostrarAlerta("Informe o corpo do email.");
                return false;
            }
            return true;
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_MailCon.prototype.GetTags = function () {
        var tags = this.ExecutarFuncaoServerSideSynch("PreencherTags", {});
        return tags;
    };
    return C_MailCon;
}(MouraPageCadastroAngular));
var c_MailCon = new C_MailCon();
//# sourceMappingURL=C_MailCon.js.map