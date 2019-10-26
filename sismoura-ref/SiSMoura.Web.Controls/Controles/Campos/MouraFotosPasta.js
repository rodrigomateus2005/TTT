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
var MouraFotosPasta = /** @class */ (function (_super) {
    __extends(MouraFotosPasta, _super);
    function MouraFotosPasta(id) {
        return _super.call(this, id) || this;
    }
    Object.defineProperty(MouraFotosPasta.prototype, "Pasta", {
        get: function () {
            return this.hdnPasta.value;
        },
        set: function (value) {
            this.hdnPasta.value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFotosPasta.prototype, "hdnPasta", {
        get: function () {
            return $("#" + this.ID + "_hdnPasta")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFotosPasta.prototype, "img", {
        get: function () {
            return window[this.ID + "_ImgSlider"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFotosPasta.prototype, "callBackPanel", {
        get: function () {
            return window[this.ID + "_callBackPanel_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFotosPasta.prototype, "uploader", {
        get: function () {
            return window[this.ID + "_uploader_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFotosPasta.prototype, "botaoRemover", {
        get: function () {
            return window[this.ID + "_botaoRemover_Object"];
        },
        enumerable: true,
        configurable: true
    });
    MouraFotosPasta.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.uploader && this.uploader.FileUpload) {
            adicionarEventoDevExpress(this.uploader.FileUpload.FilesUploadComplete, this.OnUploaderFilesUploadComplete, this);
        }
        if (this.botaoRemover) {
            adicionarEventoMoura(this.botaoRemover.Click, this.OnBotaoRemoverClick, this);
        }
    };
    MouraFotosPasta.prototype.SetEnabled = function (value) {
        if (this.botaoRemover) {
            this.botaoRemover.SetEnabled(value);
        }
        if (this.uploader.FileUpload) {
            this.uploader.FileUpload.SetEnabled(value);
        }
    };
    MouraFotosPasta.prototype.OnUploaderFilesUploadComplete = function (s, e) {
        this.Atualizar();
    };
    MouraFotosPasta.prototype.OnBotaoRemoverClick = function (s, e) {
        e.processOnServer = false;
        if (!this.img) {
            MostrarAlerta("Nenhuma imagem selecionada!");
            return;
        }
        MsgBoxJS("Deseja realmente excluir essa foto?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.RespostaMessageBox, this));
    };
    MouraFotosPasta.prototype.Atualizar = function () {
        this.callBackPanel.PerformCallback("");
    };
    MouraFotosPasta.prototype.Limpar = function () {
        if (!String.IsNullOrWhiteSpace(this.Pasta)) {
            this.Pasta = "";
            this.Atualizar();
        }
    };
    MouraFotosPasta.prototype.RespostaMessageBox = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            this.ExcluirSelecionada();
        }
    };
    MouraFotosPasta.prototype.ExcluirSelecionada = function () {
        if (!this.img)
            return;
        var indexExcluir = this.img.GetActiveItemIndex();
        var url;
        url = this.img.items[indexExcluir].s;
        this.callBackPanel.PerformCallback("EXCLUIR:" + url);
    };
    return MouraFotosPasta;
}(MouraControl));
//# sourceMappingURL=MouraFotosPasta.js.map