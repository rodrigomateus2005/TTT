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
var MouraCadastroButtonClickEventArgs = /** @class */ (function (_super) {
    __extends(MouraCadastroButtonClickEventArgs, _super);
    function MouraCadastroButtonClickEventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraCadastroButtonClickEventArgs;
}(MouraEventArgs));
var MouraCadastroButtonClickEventHandler = /** @class */ (function (_super) {
    __extends(MouraCadastroButtonClickEventHandler, _super);
    function MouraCadastroButtonClickEventHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraCadastroButtonClickEventHandler;
}(MouraGenericEventHandler));
var MouraCadastroButton = /** @class */ (function (_super) {
    __extends(MouraCadastroButton, _super);
    function MouraCadastroButton(id) {
        var _this = _super.call(this, id) || this;
        _this.ClickGravar = new MouraCadastroButtonClickEventHandler();
        _this.ClickNovo = new MouraCadastroButtonClickEventHandler();
        _this.ClickExcluir = new MouraCadastroButtonClickEventHandler();
        return _this;
    }
    Object.defineProperty(MouraCadastroButton.prototype, "BotaoGravar", {
        get: function () {
            return window[this.ID + '_BotaoGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCadastroButton.prototype, "BotaoNovo", {
        get: function () {
            return window[this.ID + '_BotaoNovo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCadastroButton.prototype, "BotaoExcluir", {
        get: function () {
            return window[this.ID + '_BotaoExcluir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    MouraCadastroButton.prototype.IniciarEventos = function () {
        if (this.BotaoGravar) {
            adicionarEventoMoura(this.BotaoGravar.Click, this.OnGravarClick, this);
        }
        if (this.BotaoNovo) {
            adicionarEventoMoura(this.BotaoNovo.Click, this.OnNovoClick, this);
        }
        if (this.BotaoExcluir) {
            adicionarEventoMoura(this.BotaoExcluir.Click, this.OnExcluirClick, this);
        }
    };
    MouraCadastroButton.prototype.OnGravarClick = function (s, e) {
        var evento;
        evento = new MouraCadastroButtonClickEventArgs;
        this.ClickGravar.FireEvent(this, evento);
        if (evento.cancelar) {
            e.processOnServer = false;
        }
    };
    MouraCadastroButton.prototype.OnNovoClick = function (s, e) {
        var evento;
        evento = new MouraCadastroButtonClickEventArgs;
        this.ClickNovo.FireEvent(this, evento);
        if (evento.cancelar) {
            e.processOnServer = false;
        }
    };
    MouraCadastroButton.prototype.OnExcluirClick = function (s, e) {
        var evento;
        evento = new MouraCadastroButtonClickEventArgs;
        this.ClickExcluir.FireEvent(this, evento);
        if (evento.cancelar) {
            e.processOnServer = false;
        }
    };
    return MouraCadastroButton;
}(MouraControl));
//# sourceMappingURL=MouraCadastroButton.js.map