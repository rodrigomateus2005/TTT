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
var C_DocEx = /** @class */ (function (_super) {
    __extends(C_DocEx, _super);
    function C_DocEx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_DocEx.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DocEx.prototype, "htmlEditor", {
        get: function () {
            return window['htmlEditor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_DocEx.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_DocEx.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        this.GetScope().$applyAsync();
    };
    C_DocEx.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_DocEx.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.htmlEditor.Html = "";
        this.htmlEditor.Html = this.GetTags();
        this.PreencherGrade();
    };
    C_DocEx.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.htmlEditor.Html = Entity.Modelo_Documento;
    };
    C_DocEx.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var entity = this.EntityTela;
        entity.Modelo_Documento = this.htmlEditor.Html;
        return true;
    };
    C_DocEx.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_DocEx.prototype.PreencherGrade = function () {
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
    C_DocEx.prototype.GetTags = function () {
        var parametros;
        var tags;
        parametros = {};
        tags = this.ExecutarFuncaoServerSideSynch("PreencherTags", parametros);
        return tags;
    };
    return C_DocEx;
}(MouraPageCadastroAngular));
var c_DocEx = new C_DocEx();
//# sourceMappingURL=C_DocEx.js.map