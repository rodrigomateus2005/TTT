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
var C_ImOrAt = /** @class */ (function (_super) {
    __extends(C_ImOrAt, _super);
    function C_ImOrAt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ImOrAt.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImOrAt.prototype, "htmlEditor", {
        get: function () {
            return window['htmlEditor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImOrAt.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ImOrAt.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_ImOrAt.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        this.GetScope().$applyAsync();
    };
    C_ImOrAt.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (this.lstEmpresa) {
            if (!ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
                this.lstEmpresa.Visible = false;
            }
        }
        this.PreencherGrade();
    };
    C_ImOrAt.prototype.PreencherEmpresa = function () {
        var empresas;
        if (this.lstEmpresa) {
            empresas = this.lstEmpresa.GetValues();
        }
        this.EntityTela.Empresas = [];
        for (var x = 0; x <= empresas.length - 1; x++) {
            var empresa;
            empresa = {};
            empresa.Empresa = empresas[x].CNum();
            this.EntityTela.Empresas.push(empresa);
        }
    };
    C_ImOrAt.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.lstEmpresa.LimparSelecao();
        this.htmlEditor.Html = "";
        this.htmlEditor.Html = this.GetTags();
        this.PreencherGrade();
    };
    C_ImOrAt.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        if (this.lstEmpresa) {
            var selecionar = [];
            for (var x = 0; x <= Entity.Empresas.length - 1; x++) {
                selecionar.push("" + Entity.Empresas[x].Empresa);
            }
            this.lstEmpresa.LimparSelecao();
            this.lstEmpresa.SetValues(selecionar);
        }
        this.htmlEditor.Html = Entity.Modelo_Documento;
    };
    C_ImOrAt.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var entity = this.EntityTela;
        entity.Modelo_Documento = this.htmlEditor.Html;
        this.PreencherEmpresa();
        return true;
    };
    C_ImOrAt.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_ImOrAt.prototype.PreencherGrade = function () {
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
    C_ImOrAt.prototype.GetTags = function () {
        var parametros;
        var tags;
        parametros = {};
        tags = this.ExecutarFuncaoServerSideSynch("PreencherTags", parametros);
        return tags;
    };
    return C_ImOrAt;
}(MouraPageCadastroAngular));
var c_ImOrAt = new C_ImOrAt();
//# sourceMappingURL=C_ImOrAt.js.map