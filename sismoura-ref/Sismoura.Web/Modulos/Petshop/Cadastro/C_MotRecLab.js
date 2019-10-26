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
var C_MotRecLab = /** @class */ (function (_super) {
    __extends(C_MotRecLab, _super);
    function C_MotRecLab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_MotRecLab.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_MotRecLab.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_MotRecLab.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        return true;
    };
    C_MotRecLab.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.GetCadastrados();
        return true;
    };
    C_MotRecLab.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_MotRecLab.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.GetCadastrados();
        this.RefreshAngular();
    };
    C_MotRecLab.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
    };
    C_MotRecLab.prototype.GetCadastrados = function () {
        try {
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", {});
            this.Grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_MotRecLab.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.OnDepoisLimpar(this.GetScope().Entity);
    };
    return C_MotRecLab;
}(MouraPageCadastroAngular));
var c_MotRecLab = new C_MotRecLab();
//# sourceMappingURL=C_MotRecLab.js.map