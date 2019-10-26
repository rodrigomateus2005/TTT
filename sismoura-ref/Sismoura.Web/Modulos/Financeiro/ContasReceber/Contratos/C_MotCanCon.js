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
var C_MotCanCon = /** @class */ (function (_super) {
    __extends(C_MotCanCon, _super);
    function C_MotCanCon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_MotCanCon.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_MotCanCon.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_MotCanCon.prototype.OnGravouSucesso = function (s, e) {
        var entidade = this.GetScope().Entity;
        //this.OnDepoisLimpar(this.GetScope().Entity);
        this.RefreshAngular();
    };
    C_MotCanCon.prototype.OnExcluiuSucesso = function (s, e) {
        var entidade = this.GetScope().Entity;
        this.OnDepoisLimpar(this.GetScope().Entity);
    };
    C_MotCanCon.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        return true;
    };
    C_MotCanCon.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.GetCadastrados();
        this.OnDepoisLimpar(this.GetScope().Entity);
        return true;
    };
    C_MotCanCon.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_MotCanCon.prototype.OnDepoisLimpar = function (Entity) {
        this.GetCadastrados();
        this.RefreshAngular();
    };
    C_MotCanCon.prototype.GetCadastrados = function () {
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
    C_MotCanCon.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    return C_MotCanCon;
}(MouraPageCadastroAngular));
var c_MotCanCon = new C_MotCanCon();
//# sourceMappingURL=C_MotCanCon.js.map