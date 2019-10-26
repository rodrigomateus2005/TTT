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
var C_PartesManeq = /** @class */ (function (_super) {
    __extends(C_PartesManeq, _super);
    function C_PartesManeq() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_PartesManeq.prototype, "grdRegistros", {
        get: function () {
            return window['grdRegistros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_PartesManeq.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grdRegistros) {
            adicionarEventoMoura(this.grdRegistros.SelecionouLinha, this.OnGridSelecionouLinha, this);
        }
    };
    C_PartesManeq.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.OnDepoisLimpar(this.EntityTela);
    };
    C_PartesManeq.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_PartesManeq.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.PreencherGrade();
        return true;
    };
    C_PartesManeq.prototype.OnGridSelecionouLinha = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_PartesManeq.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.grdRegistros.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_PartesManeq;
}(MouraPageCadastroAngular));
var c_PartesManeq = new C_PartesManeq();
//# sourceMappingURL=C_PartesManeq.js.map