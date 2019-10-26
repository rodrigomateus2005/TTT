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
var C_SitPedido = /** @class */ (function (_super) {
    __extends(C_SitPedido, _super);
    function C_SitPedido() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_SitPedido.prototype, "gridJS", {
        get: function () {
            return window['gridJS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_SitPedido.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.gridJS) {
            adicionarEventoMoura(this.gridJS.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_SitPedido.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_SitPedido.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_SitPedido.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
    };
    C_SitPedido.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_SitPedido.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.gridJS.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_SitPedido;
}(MouraPageCadastroAngular));
var c_SitPedido = new C_SitPedido();
//# sourceMappingURL=C_SitPedido.js.map