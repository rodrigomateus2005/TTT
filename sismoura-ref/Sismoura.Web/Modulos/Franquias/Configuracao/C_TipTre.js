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
var C_TipTre = /** @class */ (function (_super) {
    __extends(C_TipTre, _super);
    function C_TipTre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_TipTre.prototype, "fileUpload", {
        get: function () {
            return window['fileUpload_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipTre.prototype, "lblNomeArquivo", {
        get: function () {
            return window['lblNomeArquivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipTre.prototype, "lblArquivoDownload", {
        get: function () {
            return window['lblArquivoDownload_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_TipTre.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.fileUpload && this.fileUpload.FileUpload) {
            adicionarEventoDevExpress(this.fileUpload.FileUpload.FilesUploadStart, this.OnFilesUploadStart, this);
        }
    };
    C_TipTre.prototype.OnFilesUploadStart = function (source, ev) {
        this.lblNomeArquivo.Text = this.replaceSpecialChars(this.fileUpload.FileName);
    };
    C_TipTre.prototype.replaceSpecialChars = function (str) {
        str = str.replace(/[ÀÁÂÃÄÅ]/, "A");
        str = str.replace(/[àáâãäå]/, "a");
        str = str.replace(/[ÈÉÊË]/, "E");
        str = str.replace(/[Ç]/, "C");
        str = str.replace(/[ç]/, "c");
        return str;
    };
    return C_TipTre;
}(MouraPage));
var c_TipTre = new C_TipTre();
//# sourceMappingURL=C_TipTre.js.map