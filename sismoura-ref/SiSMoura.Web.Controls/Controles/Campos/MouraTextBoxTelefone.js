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
var MouraTextBoxTelefone = /** @class */ (function (_super) {
    __extends(MouraTextBoxTelefone, _super);
    function MouraTextBoxTelefone(id) {
        return _super.call(this, id) || this;
    }
    Object.defineProperty(MouraTextBoxTelefone.prototype, "TextBoxDDD", {
        get: function () {
            return $("#" + this.ID + "_textBoxDDD")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxTelefone.prototype, "TextBoxTelefone", {
        get: function () {
            return $("#" + this.ID + "_textBoxTelefone")[0];
        },
        enumerable: true,
        configurable: true
    });
    MouraTextBoxTelefone.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.TextBoxDDD != null && this.TextBoxDDD) {
            adicionarEventoJQuery(this.TextBoxDDD, "keypress", this.OnTextBoxDDDKeyPress, this);
            adicionarEventoJQuery(this.TextBoxDDD, "keyup", this.OnTextBoxDDDKeyUp, this);
        }
    };
    MouraTextBoxTelefone.prototype.OnTextBoxDDDKeyPress = function (ev) {
        return sonumeros(ev);
    };
    MouraTextBoxTelefone.prototype.OnTextBoxDDDKeyUp = function (ev) {
        var keyCode;
        keyCode = getTeclaCodeEvent(ev);
        if (!(IsControlKeyCode(keyCode) || IsFirefoxControlKeyEvent(ev))) {
            console.log(ev);
            if (this.TextBoxDDD.value.length == this.TextBoxDDD.maxLength) {
                selecionarProximoFocus(this.TextBoxDDD);
            }
        }
    };
    MouraTextBoxTelefone.prototype.GetText = function () {
        if (this.TextBoxTelefone) {
            return this.TextBoxTelefone.value;
        }
        else {
            return "";
        }
    };
    Object.defineProperty(MouraTextBoxTelefone.prototype, "Tipo", {
        get: function () {
            return this.tipo;
        },
        set: function (tipo) {
            this.tipo = tipo;
        },
        enumerable: true,
        configurable: true
    });
    MouraTextBoxTelefone.prototype.IsValido = function () {
        if (String.IsNullOrWhiteSpace(this.GetText())) {
            return false;
        }
        if (this.Tipo != MouraTextBoxTipo.Texto) {
            if (this.GetText().CNum() == 0) {
                return false;
            }
        }
        return _super.prototype.IsValido.call(this);
    };
    return MouraTextBoxTelefone;
}(MouraCampo));
//# sourceMappingURL=MouraTextBoxTelefone.js.map