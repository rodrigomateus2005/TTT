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
var C_MotBlo = /** @class */ (function (_super) {
    __extends(C_MotBlo, _super);
    function C_MotBlo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_MotBlo.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_MotBlo.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
    };
    C_MotBlo.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_MotBlo.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
        Entity.Tipo = 'Bloqueio';
        this.RefreshAngular();
    };
    C_MotBlo.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_MotBlo.prototype.PreencherGrade = function () {
        try {
            var parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch('GetMotivoBloqueioDesbloqueio', parametros);
            this.Grid.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_MotBlo.prototype.OnSelecionouLinha = function (s, e) {
        this.PreencherEntidade(e.data.Codigo);
    };
    return C_MotBlo;
}(MouraPageCadastroAngular));
var c_MotBlo = new C_MotBlo();
//# sourceMappingURL=C_MotBlo.js.map