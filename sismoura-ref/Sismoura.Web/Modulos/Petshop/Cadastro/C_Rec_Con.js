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
var C_Rec_Con = /** @class */ (function (_super) {
    __extends(C_Rec_Con, _super);
    function C_Rec_Con() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Rec_Con.prototype, "GridRec", {
        get: function () {
            return window['GridRec_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Rec_Con.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.GridRec) {
            adicionarEventoMoura(this.GridRec.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_Rec_Con.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_Rec_Con.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_Rec_Con.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
    };
    C_Rec_Con.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_Rec_Con.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetReceitasCadastradas", parametros);
            this.GridRec.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_Rec_Con;
}(MouraPageCadastroAngular));
var c_Rec_Con = new C_Rec_Con();
//# sourceMappingURL=C_Rec_Con.js.map