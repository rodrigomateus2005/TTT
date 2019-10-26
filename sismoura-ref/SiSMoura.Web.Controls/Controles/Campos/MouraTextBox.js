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
var MouraTextBoxTipo;
(function (MouraTextBoxTipo) {
    MouraTextBoxTipo[MouraTextBoxTipo["Texto"] = 0] = "Texto";
    MouraTextBoxTipo[MouraTextBoxTipo["Numerico"] = 1] = "Numerico";
    MouraTextBoxTipo[MouraTextBoxTipo["Decimal"] = 2] = "Decimal";
})(MouraTextBoxTipo || (MouraTextBoxTipo = {}));
var MouraTextBox = /** @class */ (function (_super) {
    __extends(MouraTextBox, _super);
    function MouraTextBox(id) {
        var _this = _super.call(this, id) || this;
        if (!_this.TextChanged)
            _this.TextChanged = new MouraEventHandler();
        if (!_this.LostFocus)
            _this.LostFocus = new MouraEventHandler();
        return _this;
    }
    Object.defineProperty(MouraTextBox.prototype, "TextChanged", {
        get: function () {
            return window[this.ID + '_TextChanged'];
        },
        set: function (value) {
            window[this.ID + '_TextChanged'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBox.prototype, "LostFocus", {
        get: function () {
            return window[this.ID + '_LostFocus'];
        },
        set: function (value) {
            window[this.ID + '_LostFocus'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBox.prototype, "Tipo", {
        get: function () {
            return this.tipo;
        },
        set: function (tipo) {
            this.tipo = tipo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBox.prototype, "QuantidadeCasas", {
        get: function () {
            return this.quantidadeCasas;
        },
        set: function (quantidadeCasas) {
            this.quantidadeCasas = quantidadeCasas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBox.prototype, "PermitirVazio", {
        get: function () {
            return this.permitirVazio;
        },
        set: function (permitirVazio) {
            this.permitirVazio = permitirVazio;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBox.prototype, "PermitirZeroEsquerda", {
        get: function () {
            return this.permitirZeroEsquerda;
        },
        set: function (permitirZeroEsquerda) {
            this.permitirZeroEsquerda = permitirZeroEsquerda;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBox.prototype, "PermitirSomenteNegativo", {
        get: function () {
            return this.permitirSomenteNegativo;
        },
        set: function (permitirSomenteNegativo) {
            this.permitirSomenteNegativo = permitirSomenteNegativo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBox.prototype, "PermitirSomentePositivo", {
        get: function () {
            return this.permitirSomentePositivo;
        },
        set: function (permitirSomentePositivo) {
            this.permitirSomentePositivo = permitirSomentePositivo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBox.prototype, "Textbox", {
        get: function () {
            return $("#" + this.ID + "_TextBox")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBox.prototype, "ReadOnly", {
        get: function () {
            return this.Textbox.readOnly;
        },
        set: function (readOnly) {
            this.Textbox.readOnly = readOnly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBox.prototype, "Disabled", {
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
    Object.defineProperty(MouraTextBox.prototype, "Enabled", {
        get: function () {
            if (this.Textbox) {
                return !this.Textbox.disabled;
            }
            return false;
        },
        set: function (value) {
            if (this.Textbox) {
                this.Textbox.disabled = !value;
            }
        },
        enumerable: true,
        configurable: true
    });
    MouraTextBox.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.Textbox != null && this.Textbox) {
            adicionarEventoJQuery(this.Textbox, "keypress", this.OnTextBoxKeyPress, this);
            adicionarEventoJQuery(this.Textbox, "keydown", this.OnTextBoxKeyDown, this);
            adicionarEventoJQuery(this.Textbox, "keyup", this.OnTextBoxKeyUp, this);
            adicionarEventoJQuery(this.Textbox, "blur", this.OnTextBoxBlur, this);
            adicionarEventoJQuery(this.Textbox, "change", this.OnTextBoxChange, this);
        }
    };
    MouraTextBox.prototype.GetText = function () {
        if (this.Textbox) {
            return this.Textbox.value;
        }
        else {
            return "";
        }
    };
    MouraTextBox.prototype.SetText = function (valor) {
        if (this.Textbox) {
            this.Textbox.value = valor;
        }
    };
    MouraTextBox.prototype.Limpar = function () {
        this.SetText("");
    };
    MouraTextBox.prototype.Focus = function () {
        if (this.Textbox) {
            //Usa o timeout, pois no firefox as vezes o foco não está sendo enviado
            setTimeout($.proxy(function () { this.Textbox.focus(); }, this), 50);
        }
    };
    MouraTextBox.prototype.SelectAll = function () {
        if (this.Textbox) {
            this.Textbox.select();
        }
    };
    MouraTextBox.prototype.OnTextBoxKeyPress = function (ev) {
        if (this.Tipo == MouraTextBoxTipo.Numerico) {
            if (!this.verificanumeros(ev)) {
                ev.preventDefault();
            }
        }
        else if (this.Tipo == MouraTextBoxTipo.Decimal) {
            if (!this.verificadecimais(ev)) {
                ev.preventDefault();
            }
        }
    };
    MouraTextBox.prototype.OnTextBoxKeyDown = function (ev) {
    };
    MouraTextBox.prototype.OnTextBoxKeyUp = function (ev) {
    };
    MouraTextBox.prototype.OnTextBoxChange = function (ev) {
        this.TextChanged.FireEvent(this, ev);
    };
    MouraTextBox.prototype.OnTextBoxBlur = function (ev) {
        var zerosEsquerda = "";
        var negativo = "";
        if (this.PermitirVazio) {
            if (this.Textbox.value == "") {
                return;
            }
        }
        if (this.PermitirZeroEsquerda) {
            for (var x = 0; x < this.Textbox.value.length; x++) {
                if (this.Textbox.value[x] != "0") {
                    break;
                }
                zerosEsquerda += "0";
            }
        }
        if (this.PermitirSomenteNegativo) {
            if (this.Textbox.value[0] != "-") {
                negativo = "-";
            }
            this.Textbox.value = negativo + this.Textbox.value;
        }
        if (this.PermitirSomentePositivo) {
            if (this.Textbox.value[0] == "-") {
                this.Textbox.value = this.Textbox.value.substr(1, this.Textbox.value.length - 1);
            }
        }
        if (this.Tipo == MouraTextBoxTipo.Numerico) {
            formatNumero(this.Textbox, 0);
        }
        else if (this.Tipo == MouraTextBoxTipo.Decimal) {
            formatNumero(this.Textbox, this.QuantidadeCasas);
        }
        this.Textbox.value = zerosEsquerda + this.Textbox.value;
        if (this.Textbox.maxLength > -1) {
            if (this.Textbox.maxLength < this.Textbox.value.length) {
                this.Textbox.value = this.Textbox.value.substr(this.Textbox.value.length - this.Textbox.maxLength, this.Textbox.maxLength);
            }
        }
        //if (this.Textbox.value[0] == ".") {
        //    this.Textbox.value = this.Textbox.value.substr(1, this.Textbox.value.length - 1);
        //}
        this.LostFocus.FireEvent(this, new MouraEventArgs());
    };
    MouraTextBox.prototype.verificanumeros = function (e) {
        var tecla = getTeclaCodeEvent(e);
        return IsNumberKeyCode(tecla) || IsControlKeyCode(tecla) || IsFirefoxControlKeyEvent(e) || IsNegativeKeyCode(tecla);
    };
    MouraTextBox.prototype.verificadecimais = function (e) {
        var tecla = getTeclaCodeEvent(e);
        var separadorDecimal = Globalize.cldr.main("numbers/symbols-numberSystem-latn/decimal");
        if (separadorDecimal.charCodeAt(0) == tecla && !IsFirefoxControlKeyEvent(e)) {
            if (this.GetText().indexOf(separadorDecimal) < 0) {
                return true;
            }
        }
        return this.verificanumeros(e);
    };
    MouraTextBox.prototype.IsValido = function () {
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
    MouraTextBox.prototype.iniciarMascara = function (mascara) {
        $(this.Textbox).attr("data-inputmask", "'mask': '" + mascara + "'");
        iniciarMascaras();
    };
    return MouraTextBox;
}(MouraCampo));
//# sourceMappingURL=MouraTextBox.js.map