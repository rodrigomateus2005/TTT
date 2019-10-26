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
var MouraFotosPastaJS = /** @class */ (function (_super) {
    __extends(MouraFotosPastaJS, _super);
    function MouraFotosPastaJS(id) {
        return _super.call(this, id) || this;
    }
    Object.defineProperty(MouraFotosPastaJS.prototype, "Pasta", {
        get: function () {
            if (!this.hdnPasta)
                return null;
            return this.hdnPasta.value;
        },
        set: function (value) {
            if (!this.hdnPasta)
                return;
            this.hdnPasta.value = value;
            this.uploader.PathSalvarArquivo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFotosPastaJS.prototype, "hdnPasta", {
        get: function () {
            return $("#" + this.ID + "_hdnPasta")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFotosPastaJS.prototype, "uploader", {
        get: function () {
            return window[this.ID + "_uploader_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFotosPastaJS.prototype, "botaoRemover", {
        get: function () {
            return window[this.ID + "_botaoRemover_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFotosPastaJS.prototype, "DivComponente", {
        get: function () {
            return $("#" + this.ID + "_ImgSlider")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFotosPastaJS.prototype, "fileUploader", {
        get: function () {
            try {
                if (!this._fileUploader) {
                    this.IniciarComponente();
                }
                return $(this.DivComponente).dxGallery('instance');
            }
            catch (ex) {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    MouraFotosPastaJS.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.uploader && this.uploader.FileUpload) {
            adicionarEventoMoura(this.uploader.FileUploadComplete, this.OnUploaderFilesUploadComplete, this);
        }
        if (this.botaoRemover) {
            adicionarEventoMoura(this.botaoRemover.Click, this.OnBotaoRemoverClick, this);
        }
        this.IniciarComponente();
    };
    MouraFotosPastaJS.prototype.IniciarComponente = function () {
        if (!this._fileUploader) {
            this._fileUploader = $(this.DivComponente).dxGallery({
                dataSource: [],
                showNavButtons: true,
                stretchImages: true,
                height: 350,
                noDataText: ""
            });
        }
    };
    MouraFotosPastaJS.prototype.PreencherImagens = function (imagens) {
        if (!imagens) {
            imagens = [];
        }
        console.log(imagens);
        if (this.fileUploader) {
            this.fileUploader.option('dataSource', imagens);
        }
    };
    MouraFotosPastaJS.prototype.SetEnabled = function (value) {
        if (this.botaoRemover) {
            this.botaoRemover.SetEnabled(value);
        }
        if (this.uploader.FileUpload) {
            this.uploader.Enabled = value;
        }
    };
    MouraFotosPastaJS.prototype.OnUploaderFilesUploadComplete = function (s, e) {
        this.Atualizar();
        if (this.Items.length > 0) {
            this.selectedIndex = this.Items.length - 1;
        }
        this.uploader.Limpar();
    };
    Object.defineProperty(MouraFotosPastaJS.prototype, "selectedIndex", {
        get: function () {
            var value = -1;
            if (this.fileUploader) {
                value = this.fileUploader.option('selectedIndex');
            }
            return value;
        },
        set: function (value) {
            if (this.fileUploader) {
                this.fileUploader.option('selectedIndex', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFotosPastaJS.prototype, "selectedItem", {
        get: function () {
            var value = "";
            if (this.fileUploader) {
                value = this.fileUploader.option('selectedItem');
            }
            return value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFotosPastaJS.prototype, "Items", {
        get: function () {
            var retorno = [];
            if (this.fileUploader) {
                retorno = this.fileUploader.option('items');
            }
            if (!retorno) {
                retorno = [];
            }
            return retorno;
        },
        enumerable: true,
        configurable: true
    });
    MouraFotosPastaJS.prototype.OnBotaoRemoverClick = function (s, e) {
        e.processOnServer = false;
        if (String.IsNullOrWhiteSpace(this.selectedItem)) {
            MostrarAlerta("Nenhuma imagem selecionada!");
            return;
        }
        MsgBoxJS("Deseja realmente excluir essa foto?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.RespostaMessageBox, this));
    };
    MouraFotosPastaJS.prototype.Atualizar = function () {
        if (!this.hdnPasta)
            return;
        try {
            var param = {
                path: this.Pasta,
                applicationPath: ValoresSismoura.ApplicationPath
            };
            var retornoString = this.ExecutarHttpRequest("MouraFotoPastaJSAtualizar", param);
            var dataSource = [];
            if (!String.IsNullOrWhiteSpace(retornoString)) {
                dataSource = JSON.parse(retornoString);
                if (!dataSource) {
                    dataSource = [];
                }
                this.PreencherImagens(dataSource);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraFotosPastaJS.prototype.Limpar = function () {
        this.PreencherImagens([]);
        this.uploader.Limpar();
    };
    MouraFotosPastaJS.prototype.RespostaMessageBox = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            this.ExcluirSelecionada();
        }
    };
    MouraFotosPastaJS.prototype.ExcluirSelecionada = function () {
        try {
            if (String.IsNullOrWhiteSpace(this.selectedItem))
                return;
            var param = {
                urlImagem: this.selectedItem,
                applicationPath: ValoresSismoura.ApplicationPath
            };
            this.ExecutarHttpRequest("MouraFotoPastaJSExcluir", param);
            this.Atualizar();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return MouraFotosPastaJS;
}(MouraControl));
//# sourceMappingURL=MouraFotosPastaJS.js.map