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
var C_TipAci = /** @class */ (function (_super) {
    __extends(C_TipAci, _super);
    function C_TipAci() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_TipAci.prototype, "Grid", {
        get: function () { return window['Grid_Object']; },
        enumerable: true,
        configurable: true
    });
    C_TipAci.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid)
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
    };
    C_TipAci.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_TipAci.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_TipAci.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
    };
    C_TipAci.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_TipAci.prototype.PreencherGrade = function () {
        try {
            var parametros = {};
            var registros = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Grid.PreencherGrid(registros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_TipAci;
}(MouraPageCadastroAngular));
var c_TipAci = new C_TipAci();
//# sourceMappingURL=C_TipAci.js.map