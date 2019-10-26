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
var C_TipoM = /** @class */ (function (_super) {
    __extends(C_TipoM, _super);
    function C_TipoM() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_TipoM.prototype, "GridJS", {
        get: function () {
            return window['GridJS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_TipoM.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.GridJS) {
            adicionarEventoMoura(this.GridJS.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_TipoM.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_TipoM.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_TipoM.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
    };
    C_TipoM.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_TipoM.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.GridJS.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_TipoM;
}(MouraPageCadastroAngular));
var c_TipoM = new C_TipoM();
//# sourceMappingURL=C_TipoM.js.map