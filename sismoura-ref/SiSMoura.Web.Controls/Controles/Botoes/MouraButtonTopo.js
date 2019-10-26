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
var MouraButtonTopo = /** @class */ (function (_super) {
    __extends(MouraButtonTopo, _super);
    function MouraButtonTopo(id) {
        var _this = _super.call(this, id) || this;
        _this.Click = new MouraEventHandler();
        return _this;
    }
    Object.defineProperty(MouraButtonTopo.prototype, "botao", {
        get: function () {
            return window[this.ID + "_botao"];
        },
        enumerable: true,
        configurable: true
    });
    MouraButtonTopo.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.botao) {
            adicionarEventoJQuery(this.botao, "click", this.botao_Click, this);
        }
    };
    MouraButtonTopo.prototype.botao_Click = function (e) {
        this.Click.FireEvent(this, new MouraEventArgs());
    };
    return MouraButtonTopo;
}(MouraControl));
//# sourceMappingURL=MouraButtonTopo.js.map