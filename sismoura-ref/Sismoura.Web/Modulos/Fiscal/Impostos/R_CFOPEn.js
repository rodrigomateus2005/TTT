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
var R_CFOPEn = /** @class */ (function (_super) {
    __extends(R_CFOPEn, _super);
    function R_CFOPEn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_CFOPEn.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_CFOPEn.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    R_CFOPEn.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.GetCadastrados();
        return true;
    };
    R_CFOPEn.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    R_CFOPEn.prototype.GetCadastrados = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCfopEntradaProduto", parametros);
            this.Grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_CFOPEn.prototype.OnDepoisLimpar = function (Entity) {
        this.RefreshAngular();
        this.GetCadastrados();
    };
    R_CFOPEn.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.GetCadastrados();
    };
    return R_CFOPEn;
}(MouraPageCadastroAngular));
var r_CFOPEn = new R_CFOPEn();
//# sourceMappingURL=R_CFOPEn.js.map