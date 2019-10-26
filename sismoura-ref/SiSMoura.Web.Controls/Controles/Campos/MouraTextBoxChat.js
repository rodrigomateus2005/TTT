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
var MouraTextBoxChat = /** @class */ (function (_super) {
    __extends(MouraTextBoxChat, _super);
    function MouraTextBoxChat(id) {
        return _super.call(this, id) || this;
    }
    Object.defineProperty(MouraTextBoxChat.prototype, "DivChat", {
        get: function () {
            return $("#" + this.ID + "_dvChat")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxChat.prototype, "SpanMensagem", {
        get: function () {
            return $("#" + this.ID + "_spanMSG")[0];
        },
        enumerable: true,
        configurable: true
    });
    MouraTextBoxChat.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
    };
    MouraTextBoxChat.prototype.GetText = function () {
        return this.SpanMensagem.innerHTML;
    };
    MouraTextBoxChat.prototype.SetText = function (value) {
        this.SpanMensagem.innerHTML = value;
    };
    return MouraTextBoxChat;
}(MouraCampo));
//# sourceMappingURL=MouraTextBoxChat.js.map