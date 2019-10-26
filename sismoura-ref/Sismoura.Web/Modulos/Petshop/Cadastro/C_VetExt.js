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
var C_VetExt = /** @class */ (function (_super) {
    __extends(C_VetExt, _super);
    function C_VetExt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_VetExt.prototype, "Grid", {
        get: function () {
            return window['GridJS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_VetExt.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid)
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
    };
    C_VetExt.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_VetExt.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_VetExt.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
    };
    C_VetExt.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_VetExt.prototype.PreencherGrade = function () {
        try {
            var parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetProfissionaisCadastro", parametros);
            this.Grid.PreencherGrid(cad);
            this.Grid.Refresh();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_VetExt;
}(MouraPageCadastroAngular));
var c_VetExt = new C_VetExt();
//# sourceMappingURL=C_VetExt.js.map