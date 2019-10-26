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
var C_ESCaixa = /** @class */ (function (_super) {
    __extends(C_ESCaixa, _super);
    function C_ESCaixa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ESCaixa.prototype, "lblTotal", {
        get: function () {
            return window['lblTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ESCaixa.prototype, "txtCampo1", {
        get: function () {
            return window['txtCampo1_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ESCaixa.prototype, "txtCampo2", {
        get: function () {
            return window['txtCampo2_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ESCaixa.prototype, "txtCampo3", {
        get: function () {
            return window['txtCampo3_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ESCaixa.prototype, "txtCampo4", {
        get: function () {
            return window['txtCampo4_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ESCaixa.prototype, "txtCampo5", {
        get: function () {
            return window['txtCampo5_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ESCaixa.prototype, "txtCampo6", {
        get: function () {
            return window['txtCampo6_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ESCaixa.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtCampo1) {
            adicionarEventoMoura(this.txtCampo1.TextChanged, this.OntxtCampoChange, this);
        }
        if (this.txtCampo2) {
            adicionarEventoMoura(this.txtCampo2.TextChanged, this.OntxtCampoChange, this);
        }
        if (this.txtCampo3) {
            adicionarEventoMoura(this.txtCampo3.TextChanged, this.OntxtCampoChange, this);
        }
        if (this.txtCampo4) {
            adicionarEventoMoura(this.txtCampo4.TextChanged, this.OntxtCampoChange, this);
        }
        if (this.txtCampo5) {
            adicionarEventoMoura(this.txtCampo5.TextChanged, this.OntxtCampoChange, this);
        }
        if (this.txtCampo6) {
            adicionarEventoMoura(this.txtCampo6.TextChanged, this.OntxtCampoChange, this);
        }
    };
    C_ESCaixa.prototype.OntxtCampoChange = function () {
        var soma;
        soma = this.txtCampo1.GetText().CNum() + this.txtCampo2.GetText().CNum() + this.txtCampo3.GetText().CNum() +
            this.txtCampo4.GetText().CNum() + this.txtCampo5.GetText().CNum() + this.txtCampo6.GetText().CNum();
        this.lblTotal.Text = soma.Format(2);
    };
    return C_ESCaixa;
}(MouraPage));
var c_ESCaixa = new C_ESCaixa;
//# sourceMappingURL=C_ESCaixa.js.map