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
var C_ConPSA = /** @class */ (function (_super) {
    __extends(C_ConPSA, _super);
    function C_ConPSA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ConPSA.prototype, "txtValorEstimadoContrato", {
        get: function () {
            return window['txtValorEstimadoContrato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConPSA.prototype, "txtRealporTonCorte", {
        get: function () {
            return window['txtRealporTonCorte_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConPSA.prototype, "txtRealporTonTransporte", {
        get: function () {
            return window['txtRealporTonTransporte_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConPSA.prototype, "cboTipoServico", {
        get: function () {
            return window['cboTipoServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConPSA.prototype, "txtValorHectare", {
        get: function () {
            return window['txtValorHectare_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConPSA.prototype, "txtArea", {
        get: function () {
            return window['txtArea_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConPSA.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConPSA.prototype, "lblEstimativaTonCana", {
        get: function () {
            return window['lblEstimativaTonCana_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ConPSA.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtValorEstimadoContrato) {
            adicionarEventoMoura(this.txtRealporTonCorte.LostFocus, this.OnLostFocus, this);
            adicionarEventoMoura(this.txtRealporTonTransporte.LostFocus, this.OnLostFocus, this);
            adicionarEventoMoura(this.txtValorEstimadoContrato.LostFocus, this.OnLostFocus, this);
            adicionarEventoMoura(this.txtArea.LostFocus, this.OnLostFocus, this);
            adicionarEventoMoura(this.txtValorHectare.LostFocus, this.OnLostFocus, this);
        }
        adicionarEventoMoura(this.txtValorEstimadoContrato.TextChanged, this.OnFormatar, this);
    };
    C_ConPSA.prototype.OnLostFocus = function () {
        if (this.cboTipoServico.GetValue() == "1") {
            var valor = this.lblEstimativaTonCana.Text.CNum() * (this.txtRealporTonCorte.Textbox.value.CNum() + this.txtRealporTonTransporte.Textbox.value.CNum());
            this.txtValorEstimadoContrato.Textbox.value = valor.toString();
        }
        else {
            var valor = this.txtArea.Textbox.value.CNum() * this.txtValorHectare.Textbox.value.CNum();
            this.txtValorEstimadoContrato.Textbox.value = valor.toString();
        }
        this.txtValorEstimadoContrato.Textbox.value = this.txtValorEstimadoContrato.Textbox.value.FormatNumber(2);
    };
    C_ConPSA.prototype.OnFormatar = function () {
        this.txtValorEstimadoContrato.Textbox.value = this.txtValorEstimadoContrato.Textbox.value.FormatNumber(2);
        this.txtArea.Textbox.value = this.txtArea.Textbox.value.FormatNumber(3);
    };
    return C_ConPSA;
}(MouraPageAngular));
var c_ConPSA = new C_ConPSA();
//# sourceMappingURL=C_ConPSA.js.map