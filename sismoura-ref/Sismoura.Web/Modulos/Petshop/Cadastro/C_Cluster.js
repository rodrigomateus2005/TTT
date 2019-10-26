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
var C_Cluster = /** @class */ (function (_super) {
    __extends(C_Cluster, _super);
    function C_Cluster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Cluster.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Cluster.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_Cluster.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_Cluster.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_Cluster.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
    };
    C_Cluster.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_Cluster.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cadastrados = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Grid.PreencherGrid(cadastrados);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_Cluster;
}(MouraPageCadastroAngular));
var c_Cluster = new C_Cluster();
//# sourceMappingURL=C_Cluster.js.map