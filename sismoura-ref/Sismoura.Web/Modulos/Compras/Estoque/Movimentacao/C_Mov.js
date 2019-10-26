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
var C_Mov = /** @class */ (function (_super) {
    __extends(C_Mov, _super);
    function C_Mov() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Mov.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Mov.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_Mov.prototype.OnGravouSucesso = function (s, e) {
        var entidade = this.GetScope().Entity;
        //this.OnDepoisLimpar(this.GetScope().Entity);
        this.RefreshAngular();
    };
    C_Mov.prototype.OnExcluiuSucesso = function (s, e) {
        var entidade = this.GetScope().Entity;
        this.OnDepoisLimpar(this.GetScope().Entity);
    };
    C_Mov.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        return true;
    };
    C_Mov.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.GetCadastrados();
        this.OnDepoisLimpar(this.GetScope().Entity);
        return true;
    };
    C_Mov.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_Mov.prototype.OnDepoisLimpar = function (Entity) {
        this.GetCadastrados();
        this.RefreshAngular();
    };
    C_Mov.prototype.GetCadastrados = function () {
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
    C_Mov.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    return C_Mov;
}(MouraPageCadastroAngular));
var c_Mov = new C_Mov();
//# sourceMappingURL=C_Mov.js.map