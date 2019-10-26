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
var MouraCheckBox = /** @class */ (function (_super) {
    __extends(MouraCheckBox, _super);
    //get Disabled(): boolean {
    //    if (this.Check) {
    //        return this.Check.disabled;
    //    }
    //    return false;
    //}
    //set Disabled(value: boolean) {
    //    if (this.Check) {
    //        this.Check.disabled = value;
    //    }
    //}
    function MouraCheckBox(id) {
        var _this = _super.call(this, id) || this;
        _this.CheckChanged = new MouraEventHandler();
        return _this;
    }
    Object.defineProperty(MouraCheckBox.prototype, "Check", {
        get: function () {
            return $("#" + this.ID + "_CheckBox")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCheckBox.prototype, "DivText", {
        get: function () {
            return $("#" + this.ID + "_CheckBox_Text")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCheckBox.prototype, "Checked", {
        get: function () {
            if (this.Check) {
                return this.Check.checked;
            }
            else {
                return false;
            }
        },
        set: function (value) {
            if (this.Check) {
                this.Check.checked = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCheckBox.prototype, "Text", {
        get: function () {
            if (this.DivText) {
                return this.DivText.innerText;
            }
            else {
                return "";
            }
        },
        set: function (value) {
            if (this.DivText) {
                if (value) {
                    value = value.GetString();
                }
                this.DivText.innerText = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    MouraCheckBox.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        this.Text = this.Text;
        if (this.Check) {
            adicionarEventoJQuery(this.Check, "change", this.OnCheckChanged, this);
        }
    };
    MouraCheckBox.prototype.OnCheckChanged = function () {
        this.CheckChanged.FireEvent(this, new MouraEventArgs());
    };
    return MouraCheckBox;
}(MouraCampo));
//# sourceMappingURL=MouraCheckBox.js.map