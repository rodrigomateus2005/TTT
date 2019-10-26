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
var C_SetorEmpresa = /** @class */ (function (_super) {
    __extends(C_SetorEmpresa, _super);
    function C_SetorEmpresa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_SetorEmpresa.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_SetorEmpresa.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_SetorEmpresa.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_SetorEmpresa.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_SetorEmpresa.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
    };
    C_SetorEmpresa.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_SetorEmpresa.prototype.PreencherGrade = function () {
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
    return C_SetorEmpresa;
}(MouraPageCadastroAngular));
var c_SetorEmpresa = new C_SetorEmpresa();
//# sourceMappingURL=C_SetorEmpresa.js.map