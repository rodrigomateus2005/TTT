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
var C_MailPlan = /** @class */ (function (_super) {
    __extends(C_MailPlan, _super);
    function C_MailPlan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_MailPlan.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MailPlan.prototype, "htmlEditorMensagem", {
        get: function () {
            return window['htmlEditorMensagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MailPlan.prototype, "htmlEditorAssinatura", {
        get: function () {
            return window['htmlEditorAssinatura_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MailPlan.prototype, "grdRegistros", {
        get: function () {
            return window['grdRegistros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_MailPlan.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.grdRegistros) {
            adicionarEventoMoura(this.grdRegistros.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_MailPlan.prototype.OnGravouSucesso = function (s, e) {
        var entidade = this.GetScope().Entity;
    };
    C_MailPlan.prototype.OnExcluiuSucesso = function (s, e) {
        var entidade = this.GetScope().Entity;
    };
    C_MailPlan.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (!this.ValidarCampos()) {
            return false;
        }
        var entidade;
        entidade = this.GetScope().Entity;
        entidade.Assinatura_Email = this.htmlEditorAssinatura.Html.toString();
        entidade.Mensagem = this.htmlEditorMensagem.Html.toString();
        this.GetScope().Entity = entidade;
        this.RefreshAngular();
        return true;
    };
    C_MailPlan.prototype.ValidarCampos = function () {
        try {
            if (String.IsNullOrWhiteSpace(this.htmlEditorAssinatura.Html.toString())) {
                MostrarAlerta("Informe a assinatura do email.");
                return false;
            }
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
    C_MailPlan.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        return true;
    };
    C_MailPlan.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_MailPlan.prototype.OnDepoisLimpar = function (Entity) {
        this.txtCodigo.Limpar();
        this.htmlEditorAssinatura.Html = "";
        this.htmlEditorMensagem.Html = "";
        this.htmlEditorMensagem.Html = this.GetTags();
        this.RefreshAngular();
    };
    C_MailPlan.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        debugger;
        this.htmlEditorMensagem.Html = this.GetTags();
    };
    C_MailPlan.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        this.htmlEditorAssinatura.Html = Entidade.Assinatura_Email;
        this.htmlEditorMensagem.Html = Entidade.Mensagem;
    };
    C_MailPlan.prototype.GetTags = function () {
        var parametros;
        var tags;
        parametros = {};
        tags = this.ExecutarFuncaoServerSideSynch("PreencherTags", parametros);
        return tags;
    };
    return C_MailPlan;
}(MouraPageCadastroAngular));
var c_MailPlan = new C_MailPlan();
//# sourceMappingURL=C_MailPlan.js.map