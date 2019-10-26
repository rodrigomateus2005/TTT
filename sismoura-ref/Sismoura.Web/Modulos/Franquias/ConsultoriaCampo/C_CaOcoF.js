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
var C_CaOcoF = /** @class */ (function (_super) {
    __extends(C_CaOcoF, _super);
    function C_CaOcoF() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_CaOcoF.prototype, "fileUpload", {
        get: function () {
            return window['fileUpload_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_CaOcoF.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.fileUpload && this.fileUpload.FileUpload) {
            adicionarEventoDevExpress(this.fileUpload.FileUpload.FilesUploadStart, this.OnFilesUploadStart, this);
        }
    };
    C_CaOcoF.prototype.OnFilesUploadStart = function (source, ev) {
        __doPostBack('fileUpload', this.fileUpload.FileName);
    };
    return C_CaOcoF;
}(MouraPage));
var c_CaOcoF = new C_CaOcoF();
//# sourceMappingURL=C_CaOcoF.js.map