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
var RMV_Capa = /** @class */ (function (_super) {
    __extends(RMV_Capa, _super);
    function RMV_Capa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RMV_Capa.prototype, "btnImprimir", {
        get: function () {
            return window["btnImprimir_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    RMV_Capa.prototype.OnPageLoad = function () { _super.prototype.OnPageLoad.call(this); };
    RMV_Capa.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnImprimir)
            adicionarEventoMoura(this.btnImprimir.Click, this.OnClickImprimir, this);
    };
    RMV_Capa.prototype.OnClickImprimir = function (s, e) {
        try {
            AbrirReport('~/Report/Fixos/Farmacia/', 'RMV_Capa.REPX');
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return RMV_Capa;
}(MouraPageAngular));
var rmv_Capa = new RMV_Capa();
//# sourceMappingURL=RMV_Capa.js.map