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
var Senha_A = /** @class */ (function (_super) {
    __extends(Senha_A, _super);
    function Senha_A() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Senha_A.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Senha_A.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtCodigo) {
            adicionarEventoMoura(this.txtCodigo.LostFocus, this.OnChangetxtCodigo, this);
        }
    };
    Senha_A.prototype.OnChangetxtCodigo = function () {
        this.txtCodigo.SetText(this.txtCodigo.GetText().replace(/\D/g, ''));
    };
    return Senha_A;
}(MouraPage));
var senha_A = new Senha_A();
//# sourceMappingURL=Senha_A.js.map