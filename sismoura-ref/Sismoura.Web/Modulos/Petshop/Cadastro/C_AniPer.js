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
var C_AniPer = /** @class */ (function (_super) {
    __extends(C_AniPer, _super);
    function C_AniPer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_AniPer.prototype, "GridAniPer", {
        get: function () {
            return window['GridAniPer_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_AniPer.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.GridAniPer) {
            adicionarEventoMoura(this.GridAniPer.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_AniPer.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_AniPer.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_AniPer.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
    };
    C_AniPer.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_AniPer.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetTemperamentosCadastrados", parametros);
            this.GridAniPer.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_AniPer;
}(MouraPageCadastroAngular));
var c_AniPer = new C_AniPer();
//# sourceMappingURL=C_AniPer.js.map