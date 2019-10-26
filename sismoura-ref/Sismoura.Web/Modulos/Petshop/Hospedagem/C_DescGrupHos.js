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
var C_DescGrupHos = /** @class */ (function (_super) {
    __extends(C_DescGrupHos, _super);
    function C_DescGrupHos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_DescGrupHos.prototype, "Grid", {
        get: function () { return window['Grid_Object']; },
        enumerable: true,
        configurable: true
    });
    C_DescGrupHos.prototype.Init = function () {
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
    C_DescGrupHos.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().validarDesconto) {
            this.GetScope().validarDesconto = $.proxy(this.validarDesconto, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Desconto_Maximo; }, this.GetScope().validarDesconto);
        }
    };
    C_DescGrupHos.prototype.validarDesconto = function () {
        try {
            if (this.GetScope().Entity.Desconto_Maximo >= 100) {
                MostrarAlerta("O Desconto deve ser inferior a 100%.");
                this.GetScope().Entity.Desconto_Maximo = 0;
                //this.RefreshAngular();
                return;
            }
            if (this.GetScope().Entity.Desconto_Maximo < 0) {
                MostrarAlerta("O Desconto deve ser maior que 0.");
                this.GetScope().Entity.Desconto_Maximo = 0;
                //this.RefreshAngular();
                return;
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_DescGrupHos.prototype.OnGravouSucesso = function (s, e) {
        this.AtualizarGrid();
    };
    C_DescGrupHos.prototype.OnExcluiuSucesso = function (s, e) {
        this.AtualizarGrid();
    };
    C_DescGrupHos.prototype.AtualizarGrid = function () {
        try {
            var parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("AtualizarGrade", parametros);
            this.Grid.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_DescGrupHos.prototype.SelecionarRegistro = function (s, e) {
        this.PreencherEntidade(e.data.Codigo);
    };
    C_DescGrupHos.prototype.OnDepoisPesquisar = function (s, e) {
        try {
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_DescGrupHos.prototype.OnAntesGravar = function () {
        var entidade = this.GetScope().Entity;
        this.RefreshAngular();
        return _super.prototype.OnAntesGravar.call(this);
    };
    C_DescGrupHos.prototype.OnDepoisLimpar = function () {
        _super.prototype.OnDepoisLimpar.call(this, this.GetScope().Entity);
    };
    return C_DescGrupHos;
}(MouraPageCadastroAngular));
var c_DescGrupHos = new C_DescGrupHos();
//# sourceMappingURL=C_DescGrupHos.js.map