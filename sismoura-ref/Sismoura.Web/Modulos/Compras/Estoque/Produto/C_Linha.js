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
var C_Linha = /** @class */ (function (_super) {
    __extends(C_Linha, _super);
    function C_Linha() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Linha.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Linha.prototype, "cboTipoLinha", {
        get: function () {
            return window['cboTipoLinha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Linha.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_Linha.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_Linha.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.cboTipoLinha.SetValue(0);
        this.PreencherGrade();
    };
    C_Linha.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
    };
    C_Linha.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_Linha.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_Linha;
}(MouraPageCadastroAngular));
var c_Linha = new C_Linha();
//# sourceMappingURL=C_Linha.js.map