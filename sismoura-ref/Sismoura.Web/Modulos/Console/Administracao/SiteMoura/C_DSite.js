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
var C_DSite = /** @class */ (function (_super) {
    __extends(C_DSite, _super);
    function C_DSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_DSite.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_DSite.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_DSite.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
    };
    C_DSite.prototype.Limpar = function () {
        _super.prototype.Limpar.call(this);
        this.EntityTela.Codigo = 0;
        this.EntityTela.Descricao = "";
        this.EntityTela.Topico = 0;
        this.EntityTela.Url = "";
        this.RefreshAngular();
    };
    C_DSite.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_DSite.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_DSite.prototype.PreencherGrade = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {};
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.grid.PreencherGrid(retorno);
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    C_DSite.prototype.OnSelecionouLinha = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    return C_DSite;
}(MouraPageCadastroAngular));
var c_DSite = new C_DSite();
//# sourceMappingURL=C_DSite.js.map