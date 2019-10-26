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
var C_BaiaAdoc = /** @class */ (function (_super) {
    __extends(C_BaiaAdoc, _super);
    function C_BaiaAdoc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_BaiaAdoc.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_BaiaAdoc.prototype.Init = function () {
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
    C_BaiaAdoc.prototype.OnGravouSucesso = function (s, e) {
        this.AtualizarGrid();
    };
    C_BaiaAdoc.prototype.OnExcluiuSucesso = function (s, e) {
        this.AtualizarGrid();
    };
    C_BaiaAdoc.prototype.AtualizarGrid = function () {
        try {
            var parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("AtualizarGrade", parametros);
            this.Grid.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_BaiaAdoc.prototype.SelecionarRegistro = function (s, e) {
        this.PreencherEntidade(e.data.Codigo);
    };
    C_BaiaAdoc.prototype.OnDepoisPesquisar = function (s, e) {
        try {
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_BaiaAdoc.prototype.OnAntesGravar = function () {
        var entidade = this.GetScope().Entity;
        this.RefreshAngular();
        var parametros = {
            codEmpresa: entidade.Empresa
        };
        var baiaExistenteEmpresa = this.ExecutarFuncaoServerSideSynch("GetByEmpresa", parametros);
        if (baiaExistenteEmpresa && baiaExistenteEmpresa.Codigo != entidade.Codigo) {
            MostrarAlerta('Já existe um cadastro de baia para a empresa selecionada');
            return false;
        }
        return _super.prototype.OnAntesGravar.call(this);
    };
    C_BaiaAdoc.prototype.OnDepoisLimpar = function () {
        _super.prototype.OnDepoisLimpar.call(this, this.GetScope().Entity);
    };
    return C_BaiaAdoc;
}(MouraPageCadastroAngular));
var c_BaiaAdoc = new C_BaiaAdoc();
//# sourceMappingURL=C_BaiaAdoc.js.map