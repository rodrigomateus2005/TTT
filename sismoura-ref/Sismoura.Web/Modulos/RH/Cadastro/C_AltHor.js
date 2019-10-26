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
var C_AltHor = /** @class */ (function (_super) {
    __extends(C_AltHor, _super);
    function C_AltHor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_AltHor.prototype, "mdReplicar", {
        get: function () {
            return window['mdReplicar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AltHor.prototype, "txtDepartamento", {
        get: function () {
            return window['txtDepartamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_AltHor.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.mdReplicar && this.mdReplicar.ModalDialog) {
            adicionarEventoDevExpress(this.mdReplicar.ModalDialog.EndCallback, this.OnEndCallBackModalReplicar, this);
        }
    };
    C_AltHor.prototype.OnEndCallBackModalReplicar = function () {
        this.txtDepartamento.Focus();
    };
    return C_AltHor;
}(MouraPage));
var c_AltHor = new C_AltHor;
//# sourceMappingURL=C_AltHor.js.map