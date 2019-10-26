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
var MouraComboBox = /** @class */ (function (_super) {
    __extends(MouraComboBox, _super);
    function MouraComboBox(id) {
        var _this = _super.call(this, id) || this;
        _this.SelectedItemChanged = new MouraEventHandler();
        return _this;
    }
    Object.defineProperty(MouraComboBox.prototype, "Combo", {
        get: function () {
            return window[this.ID + "_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBox.prototype, "ValueEnabledFalse", {
        get: function () {
            return this._valueEnabledFalse;
        },
        set: function (value) {
            this._valueEnabledFalse = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBox.prototype, "IndexEnabledFalse", {
        get: function () {
            return this._indexEnabledFalse;
        },
        set: function (value) {
            this._indexEnabledFalse = value;
        },
        enumerable: true,
        configurable: true
    });
    MouraComboBox.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.Combo) {
            adicionarEventoDevExpress(this.Combo.SelectedIndexChanged, this.OnComboChange, this);
            adicionarEventoDevExpress(this.Combo.Init, this.OnComboInit, this);
        }
    };
    MouraComboBox.prototype.OnComboChange = function () {
        this.SelectedItemChanged.FireEvent(this, new MouraEventArgs());
    };
    MouraComboBox.prototype.OnComboInit = function () {
        if (this.Combo && this.Combo.GetValue() != null && this.Combo.GetValue() != undefined && !String.IsNullOrWhiteSpace(this.NgModel)) {
            //faz isso, pois o angular as vezes preencheu a combo mas o texto não está correto na combo
            //fazendo isso, a combo se atualiza
            this.Combo.SetValue(this.Combo.GetValue());
        }
    };
    MouraComboBox.prototype.GetText = function () {
        if (this.Combo && this.Combo.GetText) {
            return this.Combo.GetText();
        }
        return "";
    };
    MouraComboBox.prototype.GetValue = function () {
        if (this.Combo) {
            if (this.Combo.GetValue) {
                return this.Combo.GetValue();
            }
            else {
                return this.ValueEnabledFalse;
            }
        }
        return null;
    };
    MouraComboBox.prototype.GetSelectedIndex = function () {
        if (this.Combo) {
            if (this.Combo.GetSelectedIndex) {
                return this.Combo.GetSelectedIndex();
            }
            else {
                return this.IndexEnabledFalse;
            }
        }
        return null;
    };
    MouraComboBox.prototype.SetSelectedIndex = function (value) {
        if (this.Combo) {
            this.Combo.SetSelectedIndex(value);
        }
    };
    MouraComboBox.prototype.GetItemCount = function () {
        if (this.Combo) {
            return this.Combo.GetItemCount();
        }
        else {
            return 0;
        }
    };
    MouraComboBox.prototype.GetItensCombo = function () {
        var retorno = [];
        if (this.Combo) {
            for (var i = 0; i < this.Combo.GetItemCount(); i++) {
                var item = this.Combo.GetItem(i);
                retorno.push(item);
            }
        }
        return retorno;
    };
    MouraComboBox.prototype.SetValue = function (value) {
        if (this.Combo) {
            this.Combo.SetValue(value);
        }
    };
    MouraComboBox.prototype.LimparSelecao = function () {
        if (this.Combo) {
            this.Combo.SetSelectedIndex(-1);
        }
    };
    MouraComboBox.prototype.Focus = function () {
        if (this.Combo) {
            this.Combo.Focus();
        }
    };
    MouraComboBox.prototype.ClearItems = function () {
        if (this.Combo) {
            this.Combo.ClearItems();
        }
    };
    MouraComboBox.prototype.AddItem = function (text, value, imageUrl) {
        if (this.Combo) {
            this.Combo.AddItem(text, value, imageUrl);
        }
    };
    Object.defineProperty(MouraComboBox.prototype, "Enabled", {
        get: function () {
            if (this.Combo && this.Combo.GetEnabled) {
                return this.Combo.GetEnabled();
            }
            return false;
        },
        set: function (value) {
            if (this.Combo && this.Combo.SetEnabled) {
                this.Combo.SetEnabled(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBox.prototype, "Disabled", {
        get: function () {
            if ($("#" + (this.ID + "_comboBox")).attr("disabled")) {
                return true;
            }
            else {
                return false;
            }
        },
        set: function (disabled) {
            if (disabled) {
                $("#" + this.ID + "_comboBox").attr("disabled", "true");
            }
            else {
                $("#" + this.ID + "_comboBox").removeAttr("disabled");
            }
        },
        enumerable: true,
        configurable: true
    });
    MouraComboBox.prototype.IsValido = function () {
        if (this.GetSelectedIndex() < 0) {
            return false;
        }
        if (this.GetValue() == null || this.GetValue() == undefined) {
            return false;
        }
        if (typeof this.GetValue() == "string") {
            if (String.IsNullOrWhiteSpace(this.GetValue())) {
                return false;
            }
        }
        return _super.prototype.IsValido.call(this);
    };
    return MouraComboBox;
}(MouraCampo));
//# sourceMappingURL=MouraComboBox.js.map