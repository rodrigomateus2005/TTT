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
var MouraFileUpdloadJsStartUpload = /** @class */ (function () {
    function MouraFileUpdloadJsStartUpload() {
    }
    return MouraFileUpdloadJsStartUpload;
}());
var MouraFileUploadJS = /** @class */ (function (_super) {
    __extends(MouraFileUploadJS, _super);
    function MouraFileUploadJS(id) {
        var _this = _super.call(this, id) || this;
        _this.FileUploadInstance = null;
        _this._accept = "";
        _this._pathSalvarArquivo = "";
        _this._file = null;
        _this.FileUploadComplete = new MouraGenericEventHandler();
        _this.FileUploadStart = new MouraGenericEventHandler();
        _this.ValueChanged = new MouraGenericEventHandler();
        return _this;
    }
    Object.defineProperty(MouraFileUploadJS.prototype, "DvFileUpload", {
        get: function () {
            return $("#" + this.ID + "_dvFileUpload")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFileUploadJS.prototype, "Accept", {
        get: function () {
            return this._accept;
        },
        set: function (value) {
            this._accept = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFileUploadJS.prototype, "PathSalvarArquivo", {
        get: function () {
            return this._pathSalvarArquivo;
        },
        set: function (value) {
            this._pathSalvarArquivo = value;
            this.SetURLUpload(this.GetURLUpload(""));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFileUploadJS.prototype, "File", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFileUploadJS.prototype, "FileUpload", {
        get: function () {
            try {
                var retorno = $("#" + this.DvFileUpload.id).dxFileUploader("instance");
                return retorno;
            }
            catch (ex) {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFileUploadJS.prototype, "Enabled", {
        set: function (value) {
            if (this.FileUpload) {
                this.FileUpload.option('disabled', !value);
            }
        },
        enumerable: true,
        configurable: true
    });
    MouraFileUploadJS.prototype.ChangeAccept = function (newAccept) {
        if (this.FileUploadInstance) {
            this.FileUploadInstance.option("accept", newAccept);
        }
    };
    MouraFileUploadJS.prototype.SetURLUpload = function (value) {
        if (this.FileUpload) {
            this.FileUpload.option('uploadUrl', value);
        }
    };
    MouraFileUploadJS.prototype.GetURLUpload = function (fileName) {
        return ValoresSismoura.ApplicationPath + "FileUpload.ashx/uploadArquivo?path=" + this.PathSalvarArquivo + "&fileName=" + fileName;
    };
    MouraFileUploadJS.prototype.IniciarComponenteFileUpload = function () {
        var that = this;
        if (this.DvFileUpload) {
            $("#" + this.DvFileUpload.id).dxFileUploader({
                buttonText: '...',
                labelText: ' Selecione um arquivo ou arraste ele aqui',
                multiple: false,
                accept: this.Accept,
                uploadMode: "instantly",
                uploadUrl: that.GetURLUpload(""),
                uploadMethod: "POST",
                uploadButtonText: "Carregar",
                uploadedMessage: "Arquivo carregado",
                uploadFailedMessage: "Ocorreu um erro ao carregar o arquivo",
                onUploadStarted: $.proxy(that.OnUploadStart, that),
                onUploaded: $.proxy(that.OnUploadComplete, that),
                onValueChanged: $.proxy(that.OnValueChanged, that),
            });
            this.FileUploadInstance = $("#" + this.DvFileUpload.id).dxFileUploader("instance");
        }
    };
    MouraFileUploadJS.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.FileUpload) {
            //adicionarEventoDevExpress(this.FileUpload.FileUploadComplete, this.OnFileUploadComplete, this);
            //adicionarEventoDevExpress(this.FileUpload.FileUploadStart, this.OnFileUploadStart, this);
        }
        if (!this.FileUpload) {
            this.IniciarComponenteFileUpload();
        }
    };
    MouraFileUploadJS.prototype.Limpar = function () {
        if (this.FileUpload) {
            this.FileUpload.reset();
        }
    };
    MouraFileUploadJS.prototype.OnUploadStart = function (e) {
        this.File = e.file;
        var args = new MouraFileUpdloadJsStartUpload();
        args.cancelar = false;
        args.fileName = e.file.name;
        this.FileUploadStart.FireEvent(this, args);
        if (args.cancelar) {
            e.request.abort();
        }
    };
    MouraFileUploadJS.prototype.OnUploadComplete = function (e) {
        this.FileUploadComplete.FireEvent(this, {});
    };
    MouraFileUploadJS.prototype.OnValueChanged = function (e) {
        this.ValueChanged.FireEvent(this, e);
    };
    MouraFileUploadJS.prototype.AbrirTela = function () {
        this.FileUpload.element().find(".dx-button").trigger("click");
    };
    MouraFileUploadJS.prototype.EnviarArquivoAtual = function (nomeMetodoServer) {
        if (!this.File) {
            return;
        }
        var formData = new FormData();
        formData.append("arquivo", this.File, this.File.name);
        var link;
        link = window.location.href;
        link = link.split("?")[0];
        if (!link.endsWith(".aspx")) {
            if (!link.endsWith("/")) {
                link += "/";
            }
            link += "Login";
        }
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: link + "/" + nomeMetodoServer,
                type: 'POST',
                data: formData,
                success: function (data) {
                    //resolve(JSON.parse(data).d);
                    resolve(data.d);
                },
                error: function (erro, ajaxOptions, thrownError) {
                    if (erro && erro.status == 403) {
                        window.location.href = formataURLRelativa("/Login");
                    }
                    LogarExceptionAjax(erro);
                    reject(erro);
                },
                cache: false,
                contentType: false,
                processData: false
            });
        });
    };
    return MouraFileUploadJS;
}(MouraControl));
//# sourceMappingURL=MouraFileUploadJS.js.map