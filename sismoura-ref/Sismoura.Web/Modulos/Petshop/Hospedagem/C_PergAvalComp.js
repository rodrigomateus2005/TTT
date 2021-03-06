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
var C_PergAvalComp = /** @class */ (function (_super) {
    __extends(C_PergAvalComp, _super);
    function C_PergAvalComp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_PergAvalComp.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_PergAvalComp.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.AntesGravar, this.OnAntesGravar, this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        adicionarEventoMoura(this.DepoisPesquisar, this.OnDepoisPesquisar, this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.SelecionarRegistro, this);
        }
        this.AtualizarGrid();
    };
    C_PergAvalComp.prototype.OnGravouSucesso = function (s, e) {
        this.AtualizarGrid();
    };
    C_PergAvalComp.prototype.OnExcluiuSucesso = function (s, e) {
        this.AtualizarGrid();
    };
    C_PergAvalComp.prototype.AtualizarGrid = function () {
        try {
            var parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("AtualizarGrade", parametros);
            this.Grid.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PergAvalComp.prototype.SelecionarRegistro = function (s, e) {
        this.PreencherEntidade(e.data.Codigo);
    };
    C_PergAvalComp.prototype.OnDepoisPesquisar = function (s, e) {
        try {
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_PergAvalComp.prototype.OnAntesGravar = function () {
        var entidade = this.GetScope().Entity;
        this.RefreshAngular();
        return _super.prototype.OnAntesGravar.call(this);
    };
    C_PergAvalComp.prototype.OnDepoisLimpar = function () {
        _super.prototype.OnDepoisLimpar.call(this, this.GetScope().Entity);
    };
    return C_PergAvalComp;
}(MouraPageCadastroAngular));
var c_PergAvalComp = new C_PergAvalComp();
//# sourceMappingURL=C_PergAvalComp.js.map