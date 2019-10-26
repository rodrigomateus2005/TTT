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
var MouraTextBoxHora = /** @class */ (function (_super) {
    __extends(MouraTextBoxHora, _super);
    function MouraTextBoxHora() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MouraTextBoxHora.prototype, "textBoxHorario", {
        get: function () {
            return window[this.ID + '_TextBox'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxHora.prototype, "Textbox", {
        get: function () {
            return $("#" + this.ID + "_TextBox_I")[0];
        },
        enumerable: true,
        configurable: true
    });
    MouraTextBoxHora.prototype.IniciarEventos = function () {
    };
    Object.defineProperty(MouraTextBoxHora.prototype, "Enabled", {
        get: function () {
            return this.textBoxHorario.GetEnabled();
        },
        set: function (value) {
            this.textBoxHorario.SetEnabled(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxHora.prototype, "Disabled", {
        get: function () {
            if (this.Textbox) {
                return this.Textbox.disabled;
            }
            else {
                return false;
            }
        },
        set: function (disabled) {
            if (this.Textbox) {
                this.Textbox.disabled = disabled;
            }
        },
        enumerable: true,
        configurable: true
    });
    return MouraTextBoxHora;
}(MouraCampo));
//# sourceMappingURL=MouraTextBoxHora.js.map