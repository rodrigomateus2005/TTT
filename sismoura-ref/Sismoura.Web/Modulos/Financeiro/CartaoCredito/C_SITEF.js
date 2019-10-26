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
var C_SITEF = /** @class */ (function (_super) {
    __extends(C_SITEF, _super);
    function C_SITEF() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_SITEF.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_SITEF.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_SITEF.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
    };
    C_SITEF.prototype.PreencherGrade = function () {
        var parametros = {};
        try {
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.grid.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SITEF.prototype.OnSelecionouLinha = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_SITEF.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.Limpar();
        this.PreencherGrade();
        return true;
    };
    C_SITEF.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.PreencherGrade();
        return true;
    };
    return C_SITEF;
}(MouraPageCadastroAngular));
var c_SITEF = new C_SITEF();
//# sourceMappingURL=C_SITEF.js.map