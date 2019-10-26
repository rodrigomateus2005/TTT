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
var C_CatDocWiki = /** @class */ (function (_super) {
    __extends(C_CatDocWiki, _super);
    function C_CatDocWiki() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_CatDocWiki.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_CatDocWiki.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnGridSelecionouLinha, this);
        }
    };
    C_CatDocWiki.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_CatDocWiki.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CatDocWiki.prototype.OnGridSelecionouLinha = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_CatDocWiki.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.PreencherGrade();
        return true;
    };
    C_CatDocWiki.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_CatDocWiki.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        return true;
    };
    return C_CatDocWiki;
}(MouraPageCadastroAngular));
var c_CatDocWiki = new C_CatDocWiki();
//# sourceMappingURL=C_CatDocWiki.js.map