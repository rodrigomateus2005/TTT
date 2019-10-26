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
var C_Sind = /** @class */ (function (_super) {
    __extends(C_Sind, _super);
    function C_Sind() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Sind.prototype, "GridSind", {
        get: function () {
            return window['GridSind_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Sind.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.GridSind) {
            adicionarEventoMoura(this.GridSind.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_Sind.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_Sind.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_Sind.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
    };
    C_Sind.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_Sind.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.GridSind.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_Sind;
}(MouraPageCadastroAngular));
var c_Sind = new C_Sind();
//# sourceMappingURL=C_Sind.js.map