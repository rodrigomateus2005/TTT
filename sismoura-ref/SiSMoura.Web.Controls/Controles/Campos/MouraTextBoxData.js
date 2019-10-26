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
var MouraTextBoxData = /** @class */ (function (_super) {
    __extends(MouraTextBoxData, _super);
    function MouraTextBoxData(id) {
        var _this = _super.call(this, id) || this;
        if (!_this.ValueChanged)
            _this.ValueChanged = new MouraEventHandler();
        if (!_this.LostFocus)
            _this.LostFocus = new MouraEventHandler();
        return _this;
    }
    Object.defineProperty(MouraTextBoxData.prototype, "ValueChanged", {
        get: function () {
            return window[this.ID + '_ValueChanged'];
        },
        set: function (value) {
            window[this.ID + '_ValueChanged'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxData.prototype, "LostFocus", {
        get: function () {
            return window[this.ID + '_LostFocus'];
        },
        set: function (value) {
            window[this.ID + '_LostFocus'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxData.prototype, "TextBoxCalendario", {
        get: function () {
            return window[this.ID + "_TextBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxData.prototype, "Textbox", {
        get: function () {
            return $("#" + this.ID + "_TextBox_I")[0];
        },
        enumerable: true,
        configurable: true
    });
    MouraTextBoxData.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.TextBoxCalendario) {
            adicionarEventoDevExpress(this.TextBoxCalendario.ValueChanged, this.AlterouData, this);
            adicionarEventoDevExpress(this.TextBoxCalendario.LostFocus, this.OnLostFocus, this);
        }
    };
    Object.defineProperty(MouraTextBoxData.prototype, "Date", {
        get: function () {
            if (this.TextBoxCalendario) {
                return this.TextBoxCalendario.GetDate();
            }
            else {
                return null;
            }
        },
        set: function (value) {
            if (this.TextBoxCalendario) {
                this.TextBoxCalendario.SetDate(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxData.prototype, "Text", {
        get: function () {
            if (this.TextBoxCalendario) {
                return this.TextBoxCalendario.GetText();
            }
            else {
                return null;
            }
        },
        set: function (value) {
            if (this.TextBoxCalendario) {
                this.TextBoxCalendario.SetText(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxData.prototype, "Disabled", {
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
    MouraTextBoxData.prototype.Focus = function () {
        if (this.TextBoxCalendario) {
            //Usa o timeout, pois no firefox as vezes o foco não está sendo enviado
            setTimeout($.proxy(function () { this.Textbox.focus(); }, this), 50);
        }
    };
    MouraTextBoxData.prototype.IsValido = function () {
        if (this.Date == null || this.Date == undefined) {
            return false;
        }
        return _super.prototype.IsValido.call(this);
    };
    MouraTextBoxData.prototype.AlterouData = function (s, e) {
        this.ValueChanged.FireEvent(this, e);
    };
    MouraTextBoxData.prototype.OnLostFocus = function (s, e) {
        this.LostFocus.FireEvent(this, new MouraEventArgs());
    };
    return MouraTextBoxData;
}(MouraCampo));
//# sourceMappingURL=MouraTextBoxData.js.map