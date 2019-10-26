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
var C_Bomba = /** @class */ (function (_super) {
    __extends(C_Bomba, _super);
    function C_Bomba() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Bomba.prototype, "cbLacre", {
        get: function () {
            return window['cbLacre_callBackPanel'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Bomba.prototype, "txtNumero_Lacre", {
        get: function () {
            return $('#txtNumero_Lacre_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    C_Bomba.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.cbLacre && this.cbLacre != null) {
            adicionarEventoDevExpress(this.cbLacre.EndCallback, this.OnEndCallBackLacre, this);
        }
    };
    C_Bomba.prototype.OnEndCallBackLacre = function (s, e) {
        if (this.txtNumero_Lacre && this.txtNumero_Lacre != null) {
            //Se o número do lacre estiver limpo é porque ou não foi informado ou já foi adicionado na grade
            //Por isso pode receber o foco
            if (this.txtNumero_Lacre.value == '') {
                this.txtNumero_Lacre.focus();
            }
        }
    };
    return C_Bomba;
}(MouraPage));
var c_Bomba = new C_Bomba();
//# sourceMappingURL=C_Bomba.js.map