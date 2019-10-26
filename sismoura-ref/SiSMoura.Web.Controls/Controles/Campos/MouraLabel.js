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
var MouraLabel = /** @class */ (function (_super) {
    __extends(MouraLabel, _super);
    function MouraLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MouraLabel.prototype, "LabelComponente", {
        get: function () {
            return $('#' + this.ID + '_LabelComponente')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraLabel.prototype, "LabelComponenteValue", {
        get: function () {
            return $('#' + this.ID + '_LabelComponenteValue')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraLabel.prototype, "Text", {
        get: function () {
            if (this.LabelComponente && this.LabelComponenteValue) {
                return this.LabelComponenteValue.value;
            }
            return "";
        },
        set: function (value) {
            if (this.LabelComponente && this.LabelComponenteValue) {
                this.LabelComponenteValue.value = value;
                this.LabelComponente.innerText = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    MouraLabel.prototype.IniciarEventos = function () {
    };
    return MouraLabel;
}(MouraCampo));
//# sourceMappingURL=MouraLabel.js.map