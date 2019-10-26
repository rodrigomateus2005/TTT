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
var C_Racas = /** @class */ (function (_super) {
    __extends(C_Racas, _super);
    function C_Racas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Racas.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Racas.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_Racas.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    //protected AtualizarGrid() {
    //    if (this.Grid) {
    //        this.Grid.PerformCallback('atualizar');
    //    }
    //}
    //protected SelecionarRegistro(s: any, e: MouraGridViewSelecionouEventArgs) {
    //    this.PreencherEntidade(e.CodigoSelecionado);
    //}
    C_Racas.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_Racas.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
    };
    C_Racas.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_Racas.prototype.PreencherGrade = function () {
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
    return C_Racas;
}(MouraPageCadastroAngular));
var c_Racas = new C_Racas();
//# sourceMappingURL=C_Racas.js.map