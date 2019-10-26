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
var C_FunPer_Old = /** @class */ (function (_super) {
    __extends(C_FunPer_Old, _super);
    function C_FunPer_Old() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_FunPer_Old.prototype, "fileUpload", {
        get: function () {
            return window['fileUpload_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FunPer_Old.prototype, "lblNomeArquivo", {
        get: function () {
            return window['lblNomeArquivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FunPer_Old.prototype, "lblArquivoDownload", {
        get: function () {
            return window['lblArquivoDownload_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_FunPer_Old.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.fileUpload && this.fileUpload.FileUpload) {
            adicionarEventoDevExpress(this.fileUpload.FileUpload.FilesUploadStart, this.OnFilesUploadStart, this);
        }
    };
    C_FunPer_Old.prototype.OnFilesUploadStart = function (source, ev) {
        this.lblNomeArquivo.Text = this.fileUpload.FileName;
    };
    return C_FunPer_Old;
}(MouraPage));
var c_FunPer_Old = new C_FunPer_Old();
//# sourceMappingURL=C_FunPer_Old.js.map