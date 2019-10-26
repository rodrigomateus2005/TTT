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
var C_MotInd = /** @class */ (function (_super) {
    __extends(C_MotInd, _super);
    function C_MotInd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_MotInd.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_MotInd.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_MotInd.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        return true;
    };
    C_MotInd.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.GetCadastrados();
        return true;
    };
    C_MotInd.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_MotInd.prototype.OnDepoisLimpar = function (Entity) {
        this.GetCadastrados();
        this.RefreshAngular();
    };
    C_MotInd.prototype.GetCadastrados = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_MotInd.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    return C_MotInd;
}(MouraPageCadastroAngular));
var c_MotInd = new C_MotInd();
//# sourceMappingURL=C_MotInd.js.map