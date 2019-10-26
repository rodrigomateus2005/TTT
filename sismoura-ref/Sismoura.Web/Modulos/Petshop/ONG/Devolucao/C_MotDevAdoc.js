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
var C_MotDevAdoc = /** @class */ (function (_super) {
    __extends(C_MotDevAdoc, _super);
    function C_MotDevAdoc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_MotDevAdoc.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_MotDevAdoc.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.SelecionarRegistro, this);
        }
        this.AtualizarGrid();
    };
    C_MotDevAdoc.prototype.OnGravouSucesso = function (s, e) {
        this.AtualizarGrid();
    };
    C_MotDevAdoc.prototype.OnExcluiuSucesso = function (s, e) {
        this.AtualizarGrid();
    };
    C_MotDevAdoc.prototype.AtualizarGrid = function () {
        try {
            var parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("AtualizarGrade", parametros);
            this.Grid.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_MotDevAdoc.prototype.SelecionarRegistro = function (s, e) {
        this.PreencherEntidade(e.data.Codigo);
    };
    C_MotDevAdoc.prototype.OnDepoisLimpar = function () {
        _super.prototype.OnDepoisLimpar.call(this, this.GetScope().Entity);
    };
    return C_MotDevAdoc;
}(MouraPageCadastroAngular));
var c_MotDevAdoc = new C_MotDevAdoc();
//# sourceMappingURL=C_MotDevAdoc.js.map