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
var Teste2 = /** @class */ (function (_super) {
    __extends(Teste2, _super);
    function Teste2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Teste2.prototype, "txtTestar", {
        get: function () {
            return window['txtTestar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Teste2.prototype, "txtConteudo", {
        get: function () {
            return window['txtConteudo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Teste2.prototype, "btnTestarPlugin", {
        get: function () {
            return window['btnTestarPlugin_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Teste2.prototype, "grdTeste", {
        get: function () {
            return window['grdTeste_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Teste2.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnTestarPlugin) {
            adicionarEventoMoura(this.btnTestarPlugin.Click, this.btnTestarPlugin_Click, this);
        }
        this.grdTeste.MoverColunaParaAgrupamento("agp1", "Descricao");
        this.grdTeste.MoverColunaParaAgrupamento("agp1", "Nome");
    };
    Teste2.prototype.btnTestarPlugin_Click = function (sender, e) {
        e.processOnServer = false;
        PluginMouraWeb.Imprimir(this.txtTestar.GetText(), this.txtConteudo.GetText()).then(function (isOnline) {
            console.log(isOnline);
        });
    };
    return Teste2;
}(MouraPage));
var teste2 = new Teste2();
//# sourceMappingURL=Teste2.js.map