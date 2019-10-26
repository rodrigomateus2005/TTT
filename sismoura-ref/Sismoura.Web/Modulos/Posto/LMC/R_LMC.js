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
var R_LMC = /** @class */ (function (_super) {
    __extends(R_LMC, _super);
    function R_LMC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_LMC.prototype, "btnAlterar", {
        get: function () {
            return window['btnAlterar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_LMC.prototype.Init = function () {
        _super.prototype.Init.call(this);
        shortcut.add("F4", $.proxy(function () {
            this.btnAlterar.DoClick();
        }, this));
    };
    return R_LMC;
}(MouraPage));
var r_LMC = new R_LMC;
//# sourceMappingURL=R_LMC.js.map