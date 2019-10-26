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
var MouraFileUpload = /** @class */ (function (_super) {
    __extends(MouraFileUpload, _super);
    function MouraFileUpload(id) {
        var _this = _super.call(this, id) || this;
        _this.FileUploadComplete = new MouraGenericEventHandler();
        _this.FileUploadStart = new MouraEventHandler();
        return _this;
    }
    Object.defineProperty(MouraFileUpload.prototype, "FileName", {
        get: function () {
            try {
                return this.FileUpload.fileInfosCache.fileInfos[0][0].fileName;
            }
            catch (ex) {
                return "";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFileUpload.prototype, "FileUpload", {
        get: function () {
            return window[this.ID + "_FileUpload"];
        },
        enumerable: true,
        configurable: true
    });
    MouraFileUpload.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.FileUpload) {
            adicionarEventoDevExpress(this.FileUpload.FileUploadComplete, this.OnFileUploadComplete, this);
            adicionarEventoDevExpress(this.FileUpload.FileUploadStart, this.OnFileUploadStart, this);
        }
    };
    MouraFileUpload.prototype.OnFileUploadComplete = function (s, e) {
        this.FileUploadComplete.FireEvent(this, e);
    };
    MouraFileUpload.prototype.OnFileUploadStart = function (s, e) {
        this.FileUploadStart.FireEvent(this, new MouraEventArgs());
    };
    return MouraFileUpload;
}(MouraControl));
//# sourceMappingURL=MouraFileUpload.js.map