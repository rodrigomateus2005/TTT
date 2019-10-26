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
var TelaMoura = /** @class */ (function (_super) {
    __extends(TelaMoura, _super);
    function TelaMoura() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TelaMoura.prototype, "dvTela", {
        get: function () {
            return $("#dvTela")[0];
        },
        enumerable: true,
        configurable: true
    });
    TelaMoura.prototype.Init = function () {
        _super.prototype.Init.call(this);
        $("#dvTela").load("ScriptMoura.ashx/TelaTeste?v=" + Math.floor((Math.random() * 100000) + 1), function () {
            // alert("Load was performed.");
        });
    };
    return TelaMoura;
}(MouraPageAngular));
var telaMoura = new TelaMoura();
//# sourceMappingURL=TelaMoura.js.map