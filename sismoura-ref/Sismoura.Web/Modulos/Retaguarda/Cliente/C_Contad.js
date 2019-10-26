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
var C_Contad = /** @class */ (function (_super) {
    __extends(C_Contad, _super);
    function C_Contad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Contad.prototype, "GridContad", {
        get: function () {
            return window['GridContad_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Contad.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.GridContad) {
            adicionarEventoMoura(this.GridContad.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_Contad.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_Contad.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_Contad.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
    };
    C_Contad.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_Contad.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.GridContad.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_Contad;
}(MouraPageCadastroAngular));
var c_Contad = new C_Contad();
//# sourceMappingURL=C_Contad.js.map