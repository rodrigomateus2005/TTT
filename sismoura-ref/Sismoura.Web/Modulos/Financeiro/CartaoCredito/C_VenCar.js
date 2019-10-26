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
var C_VenCar = /** @class */ (function (_super) {
    __extends(C_VenCar, _super);
    function C_VenCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_VenCar.prototype, "fileUpload", {
        get: function () {
            return window['fileUpload_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VenCar.prototype, "lblNomeArquivo", {
        get: function () {
            return window['lblNomeArquivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_VenCar.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.fileUpload) {
            adicionarEventoMoura(this.fileUpload.FileUploadStart, this.OnFilesUploadStart, this);
            adicionarEventoMoura(this.fileUpload.FileUploadComplete, this.OnFilesUploadComplete, this);
        }
    };
    C_VenCar.prototype.OnFilesUploadStart = function (source, ev) {
        this.lblNomeArquivo.Text = this.replaceSpecialChars(this.fileUpload.FileName);
    };
    C_VenCar.prototype.OnFilesUploadComplete = function (source, ev) {
        __doPostBack(this.fileUpload.ID, "Completou=" + ev.callbackData);
    };
    C_VenCar.prototype.replaceSpecialChars = function (str) {
        str = str.replace(/[ÀÁÂÃÄÅ]/, "A");
        str = str.replace(/[àáâãäå]/, "a");
        str = str.replace(/[ÈÉÊË]/, "E");
        str = str.replace(/[Ç]/, "C");
        str = str.replace(/[ç]/, "c");
        return str;
    };
    return C_VenCar;
}(MouraPage));
var c_VenCar = new C_VenCar();
//# sourceMappingURL=C_VenCar.js.map