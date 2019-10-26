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
var I_ConEst = /** @class */ (function (_super) {
    __extends(I_ConEst, _super);
    function I_ConEst() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(I_ConEst.prototype, "fileUpload", {
        get: function () {
            return window['fileUpload_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(I_ConEst.prototype, "lblNomeArquivo", {
        get: function () {
            return window['lblNomeArquivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(I_ConEst.prototype, "lstArquivos", {
        get: function () {
            return window['lstArquivos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(I_ConEst.prototype, "hdnNomeArquivo", {
        get: function () {
            return window["hdnNomeArquivo"];
        },
        enumerable: true,
        configurable: true
    });
    I_ConEst.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.fileUpload && this.fileUpload.FileUpload) {
            adicionarEventoDevExpress(this.fileUpload.FileUpload.FilesUploadStart, this.OnFilesUploadStart, this);
        }
    };
    I_ConEst.prototype.OnFilesUploadStart = function (source, ev) {
        this.lblNomeArquivo.Text = this.replaceSpecialChars(this.fileUpload.FileName);
        this.lstArquivos.AdicionarItem(this.lblNomeArquivo.Text, "");
        this.hdnNomeArquivo.value = this.lblNomeArquivo.Text;
    };
    I_ConEst.prototype.replaceSpecialChars = function (str) {
        str = str.replace(/[ÀÁÂÃÄÅ]/, "A");
        str = str.replace(/[àáâãäå]/, "a");
        str = str.replace(/[ÈÉÊË]/, "E");
        str = str.replace(/[Ç]/, "C");
        str = str.replace(/[ç]/, "c");
        return str;
    };
    return I_ConEst;
}(MouraPage));
var i_ConEst = new I_ConEst();
//# sourceMappingURL=I_ConEst.js.map