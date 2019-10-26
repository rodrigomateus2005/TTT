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
var C_FranCon = /** @class */ (function (_super) {
    __extends(C_FranCon, _super);
    function C_FranCon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_FranCon.prototype, "htmlEditor", {
        get: function () {
            return window['htmlEditor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FranCon.prototype, "lblAvisoEmail", {
        get: function () {
            return window['lblAvisoEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FranCon.prototype, "corpoEmail", {
        get: function () {
            return window['corpoEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FranCon.prototype, "btnTag", {
        get: function () {
            return window['btnTag_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FranCon.prototype, "txtTagsDisponiveis", {
        get: function () {
            return window['txtTagsDisponiveis_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FranCon.prototype, "mdTags", {
        get: function () {
            return window['mdTags_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FranCon.prototype, "txtMensagem", {
        get: function () {
            return window['txtMensagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FranCon.prototype, "txtAssunto", {
        get: function () {
            return window['txtAssunto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FranCon.prototype, "cboEmail", {
        get: function () {
            return window['cboEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_FranCon.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnTag) {
            adicionarEventoMoura(this.btnTag.Click, this.OnClickTag, this);
        }
    };
    C_FranCon.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        this.GetScope().$applyAsync();
    };
    C_FranCon.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.MudouAcao();
        if (!this.GetScope().MudouAcao) {
            this.GetScope().MudouAcao = $.proxy(this.MudouAcao, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Acao; }, this.GetScope().MudouAcao);
        }
    };
    C_FranCon.prototype.MudouAcao = function () {
        var entidade = this.GetScope().Entity;
        if (entidade.Acao == 3) {
            this.txtAssunto.Visible = false;
            $('#corpoEmail').hide();
            this.htmlEditor.Editor.SetVisible(false);
            this.txtMensagem.Visible = true;
            this.btnTag.Visible = false;
            this.cboEmail.Visible = false;
            $('#lblAvisoEmail').hide();
            entidade.Assunto = null;
            entidade.Codigo_Configuracao_Email = 0;
        }
        if (entidade.Acao == 2) {
            this.txtAssunto.Visible = true;
            $('#corpoEmail').show();
            this.htmlEditor.Editor.SetVisible(true);
            this.txtMensagem.Visible = false;
            this.btnTag.Visible = true;
            this.cboEmail.Visible = true;
            $('#lblAvisoEmail').show();
        }
        if (entidade.Acao == 1) {
            this.txtMensagem.Visible = false;
            this.txtAssunto.Visible = false;
            $('#corpoEmail').hide();
            this.htmlEditor.Editor.SetVisible(false);
            this.btnTag.Visible = false;
            this.cboEmail.Visible = false;
            $('#lblAvisoEmail').hide();
            this.htmlEditor.Html = "";
            entidade.Assunto = null;
            entidade.Mensagem = null;
            entidade.Codigo_Configuracao_Email = 0;
        }
        this.RefreshAngular();
    };
    C_FranCon.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Acao = 1;
        this.htmlEditor.Html = "";
        this.htmlEditor.Visible = false;
        this.txtMensagem.Visible = false;
        this.txtAssunto.Visible = false;
        this.cboEmail.Visible = false;
        this.btnTag.Visible = false;
        this.GetScope().$applyAsync();
    };
    C_FranCon.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        if (Entity.Acao == 2) {
            this.htmlEditor.Html = Entity.Mensagem;
        }
    };
    C_FranCon.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var entity = this.EntityTela;
        if (entity.Acao == 2) {
            entity.Mensagem = this.htmlEditor.Html;
        }
        return true;
    };
    C_FranCon.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        return true;
    };
    C_FranCon.prototype.OnClickTag = function (s, e) {
        e.processOnServer = false;
        this.txtTagsDisponiveis.SetText(this.GetTags());
        this.mdTags.Show();
    };
    C_FranCon.prototype.GetTags = function () {
        var parametros;
        var tags;
        parametros = {};
        tags = this.ExecutarFuncaoServerSideSynch("PreencherHTmlPadrao", parametros);
        return tags;
    };
    return C_FranCon;
}(MouraPageCadastroAngular));
var c_FranCon = new C_FranCon();
//# sourceMappingURL=C_FranCon.js.map