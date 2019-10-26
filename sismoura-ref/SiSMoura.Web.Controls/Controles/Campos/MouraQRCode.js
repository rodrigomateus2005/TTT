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
var MouraQRCode = /** @class */ (function (_super) {
    __extends(MouraQRCode, _super);
    function MouraQRCode(id) {
        var _this = _super.call(this, id) || this;
        _this._data = "";
        return _this;
    }
    Object.defineProperty(MouraQRCode.prototype, "DivQRCode", {
        get: function () {
            return $("#" + this.ID + "_DivQRCode")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraQRCode.prototype, "btnDownloadQRCode", {
        get: function () {
            return window[this.ID + "_btnDownloadQRCode_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraQRCode.prototype, "Data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
            this.OnGerarQRCode(value);
        },
        enumerable: true,
        configurable: true
    });
    MouraQRCode.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.btnDownloadQRCode) {
            adicionarEventoMoura(this.btnDownloadQRCode.Click, this.OnClickDownloadQRCode, this);
        }
    };
    MouraQRCode.prototype.OnClickDownloadQRCode = function (s, e) {
        e.processOnServer = false;
        this.OnDownloadQRCode();
    };
    MouraQRCode.prototype.OnGerarQRCode = function (text) {
        if (text != "") {
            var qrcode = new QRCode(this.DivQRCode, {
                width: 100,
                height: 100
            });
            qrcode.makeCode(text);
        }
    };
    MouraQRCode.prototype.OnDownloadQRCode = function () {
        var imgElement = this.DivQRCode.getElementsByTagName("img")[0];
        if (!imgElement)
            return;
        var QRCode = imgElement.src;
        var imgQRCode = QRCode.split(",");
        var img = atob(imgQRCode[1]);
        var byteNumbers = new Array(img.length);
        for (var i = 0; i < img.length; i++) {
            byteNumbers[i] = img.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        var blob = new Blob([byteArray], { "type": "image/jpeg" });
        var link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.setAttribute('visibility', 'hidden');
        link.download = 'qrCode';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    MouraQRCode.prototype.SetText = function (valor) {
        if (this.DivQRCode) {
            this.DivQRCode.innerHTML = valor;
        }
    };
    MouraQRCode.prototype.Limpar = function () {
        this.SetText("");
    };
    return MouraQRCode;
}(MouraControl));
//# sourceMappingURL=MouraQRCode.js.map