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
var C_JazDoc = /** @class */ (function (_super) {
    __extends(C_JazDoc, _super);
    function C_JazDoc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_JazDoc.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_JazDoc.prototype, "htmlEditor", {
        get: function () {
            return window['htmlEditor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_JazDoc.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_JazDoc.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        this.GetScope().$applyAsync();
    };
    C_JazDoc.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_JazDoc.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.htmlEditor.Html = "";
        this.htmlEditor.Html = this.GetTags();
        this.PreencherGrade();
        this.RefreshAngular();
    };
    C_JazDoc.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.htmlEditor.Html = Entity.Modelo_Documento;
    };
    C_JazDoc.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var entity = this.EntityTela;
        entity.Modelo_Documento = this.htmlEditor.Html;
        return true;
    };
    C_JazDoc.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_JazDoc.prototype.PreencherGrade = function () {
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
    C_JazDoc.prototype.GetTags = function () {
        var parametros;
        var tags;
        parametros = {};
        tags = this.ExecutarFuncaoServerSideSynch("PreencherTags", parametros);
        return tags;
    };
    return C_JazDoc;
}(MouraPageCadastroAngular));
var c_JazDoc = new C_JazDoc();
//# sourceMappingURL=C_JazDoc.js.map