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
var EditorHTML = /** @class */ (function (_super) {
    __extends(EditorHTML, _super);
    function EditorHTML() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EditorHTML.prototype, "htmlEditor", {
        get: function () {
            return window['htmlEditor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    EditorHTML.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.htmlEditor) {
            adicionarEventoDevExpress(this.htmlEditor.Editor.HtmlChanged, this.htmlEditor_HtmlChanged, this);
        }
    };
    EditorHTML.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        setTimeout(function () { _this.corrigirHtml(); }, 1000);
    };
    EditorHTML.prototype.htmlEditor_HtmlChanged = function () {
        // this.corrigirHtml();
    };
    EditorHTML.prototype.corrigirHtml = function () {
        var html = $("<div>" + this.htmlEditor.Html + "</div>");
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            html.find("table.MsoTableGrid td").css("word-break", "normal");
        }
        else {
            html.find("table.MsoTableGrid td").css("word-break", "break-all");
        }
        this.htmlEditor.Html = html[0].innerHTML;
    };
    return EditorHTML;
}(MouraPage));
var editorHTML = new EditorHTML();
//# sourceMappingURL=EditorHTML.js.map