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
var C_Freque = /** @class */ (function (_super) {
    __extends(C_Freque, _super);
    function C_Freque() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Freque.prototype, "GridFreque", {
        get: function () {
            return window['GridFreque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Freque.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.GridFreque) {
            adicionarEventoMoura(this.GridFreque.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_Freque.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_Freque.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_Freque.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
    };
    C_Freque.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_Freque.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.GridFreque.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_Freque;
}(MouraPageCadastroAngular));
var c_Freque = new C_Freque();
//# sourceMappingURL=C_Freque.js.map