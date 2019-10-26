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
var R_DocWiki = /** @class */ (function (_super) {
    __extends(R_DocWiki, _super);
    function R_DocWiki() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_DocWiki.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_DocWiki.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_DocWiki.prototype, "lstCategorias", {
        get: function () {
            return window['lstCategorias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_DocWiki.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_DocWiki.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid)
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnGridDocWikiClickBotaoLinha, this);
    };
    R_DocWiki.prototype.OnGridDocWikiClickBotaoLinha = function (s, e) {
        try {
            if (CNum(e.rowKey) > 0) {
                var parametros;
                parametros = {
                    codDocumento: e.rowKey
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("GetDocumento", parametros);
                this.ImprimirDocumentoWord({}, retorno.Documento, "N");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_DocWiki.prototype.PreencherGrade = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                categorias: this.lstCategorias.SelectedValues.toString(),
                titulo: this.Filtro.Titulo,
                conteudo: this.Filtro.Conteudo
            };
            this.AccordionFiltros.SetExpanded(false);
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.grid.PreencherGrid(retorno);
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    R_DocWiki.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.lstCategorias.LimparSelecao();
        this.Filtro.Titulo = "";
        this.Filtro.Conteudo = "";
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    return R_DocWiki;
}(MouraPageRelacaoAngular));
var r_DocWiki = new R_DocWiki();
//# sourceMappingURL=R_DocWiki.js.map