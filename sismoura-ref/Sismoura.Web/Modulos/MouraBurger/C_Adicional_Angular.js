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
var C_Adicional_Angular = /** @class */ (function (_super) {
    __extends(C_Adicional_Angular, _super);
    function C_Adicional_Angular() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Adicional_Angular.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Adicional_Angular.prototype, "hndCodigo", {
        get: function () {
            return $('#hndCodigo')[0];
        },
        enumerable: true,
        configurable: true
    });
    C_Adicional_Angular.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
    };
    C_Adicional_Angular.prototype.OnSelecionouLinha = function (e, s) {
        this.PreencherEntidade("" + s.rowKey);
        this.hndCodigo.value = "" + s.rowKey;
    };
    C_Adicional_Angular.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().MudouProduto) {
            this.GetScope().MudouProduto = $.proxy(this.MudouProduto, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Produto; }, this.GetScope().MudouProduto);
        }
        this.PreencherGrade();
    };
    C_Adicional_Angular.prototype.MudouProduto = function () {
        var prod;
        var parametros = {
            codProduto: CNum(this.EntityTela.Produto)
        };
        prod = this.ExecutarFuncaoServerSideSynch("GetByProduto", parametros);
        if (prod) {
            this.SetEntity(prod);
        }
        this.RefreshAngular();
    };
    C_Adicional_Angular.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        this.hndCodigo.value = "" + this.EntityTela.Id;
        return true;
    };
    C_Adicional_Angular.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.PreencherGrade();
        this.hndCodigo.value = "";
        Entity.Exibir_Grupo_Correspondente = true;
    };
    C_Adicional_Angular.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetAdicionais", parametros);
            this.Grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_Adicional_Angular;
}(MouraPageCadastroAngular));
var c_Adicional_Angular = new C_Adicional_Angular();
//# sourceMappingURL=C_Adicional_Angular.js.map