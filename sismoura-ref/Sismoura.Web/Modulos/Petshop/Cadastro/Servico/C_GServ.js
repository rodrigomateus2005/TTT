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
var C_GServ = /** @class */ (function (_super) {
    __extends(C_GServ, _super);
    function C_GServ() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_GServ.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_GServ.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_GServ.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        //this.OnDepoisLimpar();
        this.GetCadastrados();
    };
    C_GServ.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_GServ.prototype.GetCadastrados = function () {
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
    C_GServ.prototype.OnDepoisLimpar = function (Entity) {
        Entity.Codigo = 0;
        Entity.Descricao = "";
        Entity.Dose = false;
        Entity.Grupo = 0;
        Entity.Grupo_Convenio = false;
        Entity.Produto = false;
        this.GetScope().$applyAsync();
    };
    C_GServ.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.GetCadastrados();
        this.Grid.Refresh();
        return true;
    };
    return C_GServ;
}(MouraPageCadastroAngular));
var c_GServ = new C_GServ();
//# sourceMappingURL=C_GServ.js.map