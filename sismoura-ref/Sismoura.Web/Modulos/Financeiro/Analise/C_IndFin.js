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
var C_IndFin = /** @class */ (function (_super) {
    __extends(C_IndFin, _super);
    function C_IndFin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_IndFin.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_IndFin.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_IndFin.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_IndFin.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.SelecionouLinha, this);
        }
    };
    C_IndFin.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Codigo = 0;
        Entity.Descricao = "";
        Entity.Valor = 0;
        this.PreencherGrade();
        this.RefreshAngular();
    };
    C_IndFin.prototype.PreencherGrade = function () {
        var parametros;
        try {
            parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.grid.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_IndFin.prototype.SelecionouLinha = function (s, e) {
        this.PreencherEntidade(e.data.Codigo);
        this.RefreshAngular();
    };
    C_IndFin.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        this.RefreshAngular();
        return true;
    };
    C_IndFin.prototype.OnDepoisClickNovo = function () {
        _super.prototype.OnDepoisClickNovo.call(this);
        return true;
    };
    C_IndFin.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_IndFin.prototype.OnDepoisBuscarExistente = function (entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, entity);
    };
    return C_IndFin;
}(MouraPageCadastroAngular));
var c_IndFin = new C_IndFin();
//# sourceMappingURL=C_IndFin.js.map