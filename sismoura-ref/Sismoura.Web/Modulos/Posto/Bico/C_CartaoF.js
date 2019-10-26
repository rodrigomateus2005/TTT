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
var C_CartaoF = /** @class */ (function (_super) {
    __extends(C_CartaoF, _super);
    function C_CartaoF() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_CartaoF.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_CartaoF.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.EntityTela.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        this.PreencherGrade();
    };
    C_CartaoF.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_CartaoF.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_CartaoF.prototype.PreencherGrade = function () {
        try {
            var parametros = {};
            this.Grid.PreencherGrid(this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros));
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CartaoF.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        this.RefreshAngular();
        return true;
    };
    C_CartaoF.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.PreencherGrade();
        this.RefreshAngular();
        return true;
    };
    C_CartaoF.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
    };
    return C_CartaoF;
}(MouraPageCadastroAngular));
var c_CartaoF = new C_CartaoF();
//# sourceMappingURL=C_CartaoF.js.map