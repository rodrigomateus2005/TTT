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
var C_Onu = /** @class */ (function (_super) {
    __extends(C_Onu, _super);
    function C_Onu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Onu.prototype, "GridCadastroOnu", {
        get: function () {
            return window['GridCadastroOnu_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Onu.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.GridCadastroOnu) {
            adicionarEventoMoura(this.GridCadastroOnu.SelecionouLinha, this.OnSelecionouLinha, this);
        }
    };
    C_Onu.prototype.OnSelecionouLinha = function (e, s) {
        this.PreencherEntidade("" + s.rowKey);
    };
    C_Onu.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_Onu.prototype.OnDepoisLimpar = function (entity) {
        _super.prototype.OnDepoisLimpar.call(this, entity);
        this.PreencherGrade();
    };
    C_Onu.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.GridCadastroOnu.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_Onu;
}(MouraPageCadastroAngular));
var c_Onu = new C_Onu();
//# sourceMappingURL=C_Onu.js.map