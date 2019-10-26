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
var C_Escrit = /** @class */ (function (_super) {
    __extends(C_Escrit, _super);
    function C_Escrit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Escrit.prototype, "GridEscrit", {
        get: function () {
            return window['GridEscrit_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Escrit.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.GridEscrit) {
            adicionarEventoMoura(this.GridEscrit.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_Escrit.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_Escrit.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_Escrit.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
    };
    C_Escrit.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_Escrit.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.GridEscrit.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_Escrit;
}(MouraPageCadastroAngular));
var c_Escrit = new C_Escrit();
//# sourceMappingURL=C_Escrit.js.map