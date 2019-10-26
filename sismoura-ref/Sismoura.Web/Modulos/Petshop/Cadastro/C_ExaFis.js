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
var C_ExaFis = /** @class */ (function (_super) {
    __extends(C_ExaFis, _super);
    function C_ExaFis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ExaFis.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ExaFis.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ExaFis.prototype.Init = function () {
        _super.prototype.Init.call(this);
        //adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        //adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_ExaFis.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.GetCadastrados();
        return true;
    };
    C_ExaFis.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_ExaFis.prototype.OnDepoisLimpar = function (Entity) {
        this.GetCadastrados();
        this.GetScope().$applyAsync();
    };
    C_ExaFis.prototype.GetCadastrados = function () {
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
    return C_ExaFis;
}(MouraPageCadastroAngular));
var c_ExaFis = new C_ExaFis();
//# sourceMappingURL=C_ExaFis.js.map