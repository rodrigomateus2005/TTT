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
var C_Mod_BanNuv = /** @class */ (function (_super) {
    __extends(C_Mod_BanNuv, _super);
    function C_Mod_BanNuv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Mod_BanNuv.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Mod_BanNuv.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Mod_BanNuv.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Mod_BanNuv.prototype, "btnModelo", {
        get: function () {
            return window['btnModelo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Mod_BanNuv.prototype, "htmlEditor", {
        get: function () {
            return window['htmlEditor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Mod_BanNuv.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grd) {
            adicionarEventoMoura(this.grd.SelecionouLinha, this.onGridSelecionouLinha, this);
        }
        if (this.btnModelo) {
            adicionarEventoMoura(this.btnModelo.Click, this.onHtmlEditor, this);
        }
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        adicionarEventoDevExpress(this.htmlEditor.Editor.CommandExecuting, this.OnHtmlEditorCommandExecuting, this);
        adicionarEventoDevExpress(this.htmlEditor.Editor.Init, this.OnHtmlEditorInit, this);
        this.AtualizarGrid();
    };
    C_Mod_BanNuv.prototype.OnHtmlEditorInit = function (s, e) {
        this.htmlEditor.ToggleFullscreen();
        this.htmlEditor.Esconder();
        window.scrollTo(0, 0);
    };
    C_Mod_BanNuv.prototype.OnHtmlEditorCommandExecuting = function (s, e) {
        if (e.commandName == "Fechar") {
            e.cancel = true;
            this.htmlEditor.ToggleFullscreen();
            this.htmlEditor.Esconder();
        }
    };
    C_Mod_BanNuv.prototype.OnGravouSucesso = function (s, e) {
        this.AtualizarGrid();
        this.LimparCampos();
    };
    C_Mod_BanNuv.prototype.OnExcluiuSucesso = function (s, e) {
        this.AtualizarGrid();
    };
    C_Mod_BanNuv.prototype.onGridSelecionouLinha = function (s, e) {
        this.PreencherEntidade(e.data.Codigo);
    };
    C_Mod_BanNuv.prototype.AtualizarGrid = function () {
        var parametros = {};
        var modelos = this.ExecutarFuncaoServerSideSynch("CarregarModelos", parametros);
        this.grd.PreencherGrid(modelos);
    };
    C_Mod_BanNuv.prototype.onHtmlEditor = function (s, e) {
        e.processOnServer = false;
        var parametros = {};
        if (this.htmlEditor.Html == "" && this.txtCodigo.GetText().CNum() == 0) {
            var tagsPadrao = this.ExecutarFuncaoServerSideSynch("MontarModelo", parametros);
            this.htmlEditor.Html = tagsPadrao;
        }
        else if (this.txtCodigo.GetText().CNum() > 0) {
            if (this.GetScope().Entity.Modelo_Orcamento != null) {
                this.htmlEditor.Html = this.GetScope().Entity.Modelo_Orcamento;
            }
            else {
                var tagsPadrao = this.ExecutarFuncaoServerSideSynch("MontarModelo", parametros);
                this.htmlEditor.Html = tagsPadrao;
            }
        }
        this.htmlEditor.Mostrar();
        this.htmlEditor.ToggleFullscreen();
    };
    C_Mod_BanNuv.prototype.LimparCampos = function () {
        this.htmlEditor.Html = "";
    };
    C_Mod_BanNuv.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar;
        if (this.htmlEditor.Html != "") {
            this.GetScope().Entity.Modelo_Orcamento = this.htmlEditor.Html.toString();
        }
        return true;
    };
    C_Mod_BanNuv.prototype.OnDepoisClickNovo = function () {
        _super.prototype.OnDepoisClickNovo;
        this.htmlEditor.Html = "";
        return true;
    };
    C_Mod_BanNuv.prototype.OnDepoisLimpar = function () {
        _super.prototype.OnDepoisLimpar;
        this.htmlEditor.Html = "";
        return true;
    };
    return C_Mod_BanNuv;
}(MouraPageCadastroAngular));
var c_Mod_BanNuv = new C_Mod_BanNuv();
//# sourceMappingURL=C_Mod_BanNuv.js.map