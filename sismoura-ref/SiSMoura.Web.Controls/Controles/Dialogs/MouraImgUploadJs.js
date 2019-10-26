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
var MouraImgUpdloadJsStartUpload = /** @class */ (function () {
    function MouraImgUpdloadJsStartUpload() {
    }
    return MouraImgUpdloadJsStartUpload;
}());
var MouraImgUploadJs = /** @class */ (function (_super) {
    __extends(MouraImgUploadJs, _super);
    function MouraImgUploadJs(id) {
        var _this = _super.call(this, id) || this;
        //private _data: string = "";
        //public get Data(): string {
        //    return this._data;
        //}
        //public set Data(value: string) {
        //    this._data = value;
        //}
        _this._titulo = "";
        _this._accept = "";
        _this._maxSize = 0;
        _this._pathSalvarImg = "";
        _this._imagem = null;
        _this.ImgUploadComplete = new MouraGenericEventHandler();
        _this.ImgUploadStart = new MouraGenericEventHandler();
        return _this;
    }
    Object.defineProperty(MouraImgUploadJs.prototype, "DivImg", {
        get: function () {
            return $("#" + this.ID + "_DivImg")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraImgUploadJs.prototype, "Img", {
        get: function () {
            return $("#" + this.ID + "_Img")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraImgUploadJs.prototype, "btnLimpar", {
        get: function () {
            return window[this.ID + "_btnLimpar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraImgUploadJs.prototype, "Titulo", {
        get: function () {
            return this._titulo;
        },
        set: function (value) {
            this._titulo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraImgUploadJs.prototype, "Accept", {
        get: function () {
            return this._accept;
        },
        set: function (value) {
            this._accept = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraImgUploadJs.prototype, "MaxSize", {
        get: function () {
            return this._maxSize;
        },
        set: function (value) {
            this._maxSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraImgUploadJs.prototype, "PathSalvarImg", {
        get: function () {
            return this._pathSalvarImg;
        },
        set: function (value) {
            this._pathSalvarImg = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraImgUploadJs.prototype, "Imagem", {
        get: function () {
            return this._imagem;
        },
        set: function (value) {
            this._imagem = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraImgUploadJs.prototype, "ImgUpload", {
        get: function () {
            try {
                var retorno = $("#" + this.DivImg.id).dxFileUploader("instance");
                return retorno;
            }
            catch (ex) {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    MouraImgUploadJs.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (!this.ImgUpload) {
            $("#" + this.Img.id).hide();
            this.IniciarComponenteImgUpload();
        }
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.OnClickLimpar, this);
        }
    };
    MouraImgUploadJs.prototype.OnClickLimpar = function (s, e) {
        e.processOnServer = false;
        this.Limpar();
    };
    MouraImgUploadJs.prototype.SetText = function (valor) {
        if (this.ImgUpload) {
            this.ImgUpload.reset();
        }
        this.Img.src = "";
        $("#" + this.Img.id).hide();
    };
    MouraImgUploadJs.prototype.Limpar = function () {
        this.SetText("");
    };
    MouraImgUploadJs.prototype.IniciarComponenteImgUpload = function () {
        var url = ValoresSismoura.ApplicationPath + "FileUpload.ashx/uploadArquivo?path=" + this.PathSalvarImg;
        var that = this;
        $("#" + this.DivImg.id).dxFileUploader({
            buttonText: '...',
            labelText: ' Selecione uma Imagem',
            multiple: false,
            accept: this.Accept,
            uploadMode: "instantly",
            uploadUrl: url,
            uploadMethod: "POST",
            uploadButtonText: "Carregar",
            uploadedMessage: "Imagem carregada",
            uploadFailedMessage: "Ocorreu um erro ao carregar a Imagem",
            onUploadStarted: $.proxy(that.OnUploadStart, that),
            onUploaded: $.proxy(that.OnUploadComplete, that),
        });
        var retorno = $("#" + this.DivImg.id).dxFileUploader("instance");
    };
    MouraImgUploadJs.prototype.OnUploadStart = function (e) {
        this.Imagem = e.file;
        var args = new MouraImgUpdloadJsStartUpload();
        args.cancelar = false;
        this.ImgUploadStart.FireEvent(this, args);
        if (args.cancelar) {
            e.request.abort();
        }
        if (this.Imagem.size > this._maxSize) {
            if (this.Imagem.size > 2097152 && this.MaxSize == 2097152) {
                var maxSizeByte = (this._maxSize / 2);
                var maxSizeMega = (this._maxSize / maxSizeByte);
                MostrarAlerta("Não é possível carregar uma imagem com mais de " + maxSizeMega + " MB");
                this.Img.src = "";
                this.ImgUpload.reset();
                e.cancelar = true;
                return false;
            }
            else if (this.Imagem.size > 409600 && this.MaxSize == 409600) {
                debugger;
                var maxSizeByte = (this._maxSize / 400);
                var maxSizeKbyte = (this._maxSize / maxSizeByte);
                MostrarAlerta("Não é possível carregar uma imagem com mais de " + maxSizeKbyte + " KB");
                this.Img.src = "";
                this.ImgUpload.reset();
                e.cancelar = true;
                return false;
            }
        }
        else {
            PreencherImagemBlob(this.Img, this.Imagem);
            $("#" + this.Img.id).show();
            return true;
        }
    };
    MouraImgUploadJs.prototype.OnConvertStringToByteArray = function () {
        var img = this.FormatImg();
        if (img != undefined) {
            return Sting64ToByteArray(img);
        }
        return [];
    };
    MouraImgUploadJs.prototype.OnConvertByteArrayToString = function (img) {
        if (img) {
            if (img.length > 0) {
                $("#" + this.Img.id).show();
                return this.Img.src = "data:image/jpeg;base64," + ByteArrayToSting64(img);
            }
            $("#" + this.Img.id).hide();
        }
        return null;
    };
    MouraImgUploadJs.prototype.FormatImg = function () {
        var foto = this.Img.src.split(",");
        return foto[1];
    };
    MouraImgUploadJs.prototype.OnUploadComplete = function (e) {
        this.ImgUploadComplete.FireEvent(this, {});
    };
    return MouraImgUploadJs;
}(MouraControl));
//# sourceMappingURL=MouraImgUploadJs.js.map