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
var C_CheLoc = /** @class */ (function (_super) {
    __extends(C_CheLoc, _super);
    function C_CheLoc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_CheLoc.prototype, "GridCheLoc", {
        get: function () {
            return window['GridCheLoc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_CheLoc.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.GridCheLoc) {
            adicionarEventoMoura(this.GridCheLoc.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_CheLoc.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        this.GetScope().$applyAsync();
    };
    C_CheLoc.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_CheLoc.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
    };
    C_CheLoc.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_CheLoc.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.GridCheLoc.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_CheLoc;
}(MouraPageCadastroAngular));
var c_CheLoc = new C_CheLoc();
//# sourceMappingURL=C_CheLoc.js.map