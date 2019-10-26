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
var MouraHTMLEditor = /** @class */ (function (_super) {
    __extends(MouraHTMLEditor, _super);
    function MouraHTMLEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFullScreen = false;
        return _this;
    }
    Object.defineProperty(MouraHTMLEditor.prototype, "Editor", {
        get: function () {
            return window[this.ID + "_Editor"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraHTMLEditor.prototype, "hdnFechar", {
        get: function () {
            return $("#" + this.ID + "_hdnFechar")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraHTMLEditor.prototype, "hdnAbriuClient", {
        get: function () {
            return $("#" + this.ID + "_hdnAbriuClient")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraHTMLEditor.prototype, "Html", {
        get: function () {
            return this.Editor.GetHtml();
        },
        set: function (value) {
            this.Editor.SetHtml(value);
        },
        enumerable: true,
        configurable: true
    });
    MouraHTMLEditor.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.Editor) {
            adicionarEventoDevExpress(this.Editor.CustomCommand, this.OnCustomCommandHTMLEditor, this);
        }
    };
    MouraHTMLEditor.prototype.ToggleFullscreen = function () {
        this.isFullScreen = !this.isFullScreen;
        this.Editor.ExecuteCommand('fullscreen', '', false);
    };
    MouraHTMLEditor.prototype.Mostrar = function () {
        this.hdnAbriuClient.value = "S";
        $("#" + this.ID).removeAttr("style");
    };
    MouraHTMLEditor.prototype.Esconder = function () {
        this.hdnAbriuClient.value = "";
        $("#" + this.ID).hide();
    };
    MouraHTMLEditor.prototype.Abrir = function () {
        this.hdnAbriuClient.value = "S";
        $("#" + this.ID).removeClass("invisible");
    };
    MouraHTMLEditor.prototype.Fechar = function () {
        this.hdnAbriuClient.value = "";
        if (this.isFullScreen) {
            this.ToggleFullscreen();
        }
        $("#" + this.ID).addClass("invisible");
    };
    MouraHTMLEditor.prototype.OnCustomCommandHTMLEditor = function (s, e) {
        switch (e.commandName) {
            case 'Salvar':
                s.PerformDataCallback(e.commandName, function () { });
                break;
            case 'Fechar':
                if (this.hdnAbriuClient.value == "S") {
                    this.Fechar();
                }
                else {
                    this.hdnFechar.value = 'fechar';
                    __doPostBack("", ""); //Usado para recarregar a imagem
                }
                break;
        }
    };
    return MouraHTMLEditor;
}(MouraCampo));
//# sourceMappingURL=MouraHTMLEditor.js.map