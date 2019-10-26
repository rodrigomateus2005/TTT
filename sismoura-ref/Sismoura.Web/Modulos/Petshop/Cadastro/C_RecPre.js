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
var C_RecPre = /** @class */ (function (_super) {
    __extends(C_RecPre, _super);
    function C_RecPre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_RecPre.prototype, "Grid", {
        get: function () { return window['Grid_Object']; },
        enumerable: true,
        configurable: true
    });
    C_RecPre.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_RecPre.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_RecPre.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_RecPre.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
    };
    C_RecPre.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_RecPre.prototype.PreencherGrade = function () {
        try {
            var registros = this.ExecutarFuncaoServerSideSynch("GetCadastrados", {});
            this.Grid.PreencherGrid(registros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_RecPre;
}(MouraPageCadastroAngular));
var c_RecPre = new C_RecPre();
//# sourceMappingURL=C_RecPre.js.map