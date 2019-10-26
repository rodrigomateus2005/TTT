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
var C_TipCor = /** @class */ (function (_super) {
    __extends(C_TipCor, _super);
    function C_TipCor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_TipCor.prototype, "Grid", {
        get: function () { return window['Grid_Object']; },
        enumerable: true,
        configurable: true
    });
    C_TipCor.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid)
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
    };
    C_TipCor.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_TipCor.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_TipCor.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
    };
    C_TipCor.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_TipCor.prototype.PreencherGrade = function () {
        try {
            var registros = this.ExecutarFuncaoServerSideSynch("GetCadastrados", {});
            this.Grid.PreencherGrid(registros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_TipCor;
}(MouraPageCadastroAngular));
var c_TipCor = new C_TipCor();
//# sourceMappingURL=C_TipCor.js.map