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
var C_CMRePe = /** @class */ (function (_super) {
    __extends(C_CMRePe, _super);
    function C_CMRePe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_CMRePe.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_CMRePe.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_CMRePe.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_CMRePe.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.PreencherGrade();
    };
    C_CMRePe.prototype.OnAntesGravar = function () {
        if (_super.prototype.OnAntesGravar.call(this)) {
            return true;
        }
    };
    C_CMRePe.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_CMRePe.prototype.OnDepoisBuscarExistente = function (Entidade) {
    };
    C_CMRePe.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_CMRePe.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            for (var i = 0; i < cad.length; i++) {
                cad[i].Descricao = replaceAll(cad[i].Descricao, " ", " ");
            }
            this.Grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_CMRePe;
}(MouraPageCadastroAngular));
var c_CMRePe = new C_CMRePe();
//# sourceMappingURL=C_CMRePe.js.map