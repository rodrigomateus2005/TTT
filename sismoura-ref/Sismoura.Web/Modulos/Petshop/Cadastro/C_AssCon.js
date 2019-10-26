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
var C_AssCon = /** @class */ (function (_super) {
    __extends(C_AssCon, _super);
    function C_AssCon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_AssCon.prototype, "GridAssCon", {
        get: function () {
            return window['GridAssCon_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_AssCon.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.GridAssCon) {
            adicionarEventoMoura(this.GridAssCon.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_AssCon.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_AssCon.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_AssCon.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
    };
    C_AssCon.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_AssCon.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetAssuntosCadastrados", parametros);
            this.GridAssCon.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_AssCon;
}(MouraPageCadastroAngular));
var c_AssCon = new C_AssCon();
//# sourceMappingURL=C_AssCon.js.map