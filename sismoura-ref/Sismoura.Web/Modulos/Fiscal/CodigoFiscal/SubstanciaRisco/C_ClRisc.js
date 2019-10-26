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
var C_ClRisc = /** @class */ (function (_super) {
    __extends(C_ClRisc, _super);
    function C_ClRisc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ClRisc.prototype, "GridClasseRisco", {
        get: function () {
            return window['GridClasseRisco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ClRisc.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.GridClasseRisco) {
            adicionarEventoMoura(this.GridClasseRisco.SelecionouLinha, this.OnSelecionouLinha, this);
        }
    };
    C_ClRisc.prototype.OnSelecionouLinha = function (e, s) {
        this.PreencherEntidade("" + s.rowKey);
    };
    C_ClRisc.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_ClRisc.prototype.OnDepoisLimpar = function (entity) {
        _super.prototype.OnDepoisLimpar.call(this, entity);
        this.PreencherGrade();
    };
    C_ClRisc.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.GridClasseRisco.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_ClRisc;
}(MouraPageCadastroAngular));
var c_ClRisc = new C_ClRisc();
//# sourceMappingURL=C_ClRisc.js.map