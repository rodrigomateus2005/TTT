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
var FotosProduto = /** @class */ (function (_super) {
    __extends(FotosProduto, _super);
    function FotosProduto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FotosProduto.prototype, "fotosProduto", {
        get: function () {
            return window['fotosProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    FotosProduto.prototype.Init = function () {
        _super.prototype.Init.call(this);
        //if (this.btnEntrar) {
        //    adicionarEventoJQuery(this.btnEntrar, "click", this.OnClickLogin, this);
        //}
        this.fotosProduto.Atualizar();
    };
    FotosProduto.prototype.ZerarFotos = function () {
        this.fotosProduto.fileUploader.option("dataSource", []);
    };
    return FotosProduto;
}(MouraPage));
var fotosProduto = new FotosProduto();
//# sourceMappingURL=FotosProduto.js.map