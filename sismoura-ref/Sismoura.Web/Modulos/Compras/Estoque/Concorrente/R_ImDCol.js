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
var R_ImDCol = /** @class */ (function (_super) {
    __extends(R_ImDCol, _super);
    function R_ImDCol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_ImDCol.prototype, "fileUpload", {
        get: function () {
            return window['fileUpload_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ImDCol.prototype, "lblNomeArquivo", {
        get: function () {
            return window['lblNomeArquivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_ImDCol.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.fileUpload && this.fileUpload.FileUpload) {
            adicionarEventoDevExpress(this.fileUpload.FileUpload.FilesUploadStart, this.OnFilesUploadStart, this);
        }
    };
    R_ImDCol.prototype.OnFilesUploadStart = function (source, ev) {
        this.lblNomeArquivo.Text = this.replaceSpecialChars(this.fileUpload.FileName);
    };
    R_ImDCol.prototype.replaceSpecialChars = function (str) {
        str = str.replace(/[ÀÁÂÃÄÅ]/, "A");
        str = str.replace(/[àáâãäå]/, "a");
        str = str.replace(/[ÈÉÊË]/, "E");
        str = str.replace(/[Ç]/, "C");
        str = str.replace(/[ç]/, "c");
        return str;
    };
    return R_ImDCol;
}(MouraPage));
var r_ImDCol = new R_ImDCol();
//# sourceMappingURL=R_ImDCol.js.map