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
var C_DocWiki = /** @class */ (function (_super) {
    __extends(C_DocWiki, _super);
    function C_DocWiki() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_DocWiki.prototype, "accHtmlEditor", {
        get: function () {
            return window['accHtmlEditor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DocWiki.prototype, "htmlConteudo", {
        get: function () {
            return window['htmlConteudo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DocWiki.prototype, "lstCategorias", {
        get: function () {
            return window['lstCategorias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_DocWiki.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    C_DocWiki.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    C_DocWiki.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.EntityTela.Conteudo = this.htmlConteudo.Html;
        this.AntesGravarListaCategoria(this.EntityTela);
        return true;
    };
    C_DocWiki.prototype.AntesGravarListaCategoria = function (entidade) {
        if (this.lstCategorias) {
            if (!entidade.Categorias) {
                entidade.Categorias = [];
            }
            var valores = this.lstCategorias.GetValues();
            //Verifica as categorias que não estão na lista a ser salva
            for (var x = 0; x <= valores.length - 1; x++) {
                var categorias = this.ProcurCategorias(valores[x].CNum(), entidade.Categorias);
                if (!categorias) {
                    categorias = {};
                    categorias.Codigo = 0;
                    categorias.Categoria = valores[x].CNum();
                    entidade.Categorias.push(categorias);
                }
            }
            //Remove da lista as Categorias que foram desmarcadas
            var count = 0;
            while (count <= entidade.Categorias.length - 1) {
                var temp = entidade.Categorias[count];
                var index = valores.indexOf("" + temp.Categoria);
                //Caso a empresa não esteja selecionada na lista, deve removê-la 
                if (index < 0) {
                    entidade.Categorias.splice(count, 1);
                    count -= 1;
                }
                count += 1;
            }
        }
        this.GetScope().Entity = entidade;
    };
    C_DocWiki.prototype.ProcurCategorias = function (codCategoria, lista) {
        var retorno = null;
        if (!lista) {
            lista = [];
        }
        for (var x = 0; x <= lista.length - 1; x++) {
            if (lista[x].Categoria == codCategoria) {
                retorno = lista[x];
                break;
            }
        }
        return retorno;
    };
    C_DocWiki.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.htmlConteudo.Html = "";
        this.lstCategorias.LimparSelecao();
        return true;
    };
    C_DocWiki.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        if (!Entity.Categorias) {
            Entity.Categorias = [];
        }
        if (this.lstCategorias) {
            var selecionar = [];
            for (var x = 0; x <= Entity.Categorias.length - 1; x++) {
                selecionar.push("" + Entity.Categorias[x].Categoria);
            }
            this.lstCategorias.LimparSelecao();
            this.lstCategorias.SetValues(selecionar);
        }
        if (Entity) {
            this.htmlConteudo.Html = Entity.Conteudo;
        }
        this.RefreshAngular();
    };
    C_DocWiki.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        return true;
    };
    return C_DocWiki;
}(MouraPageCadastroAngular));
var c_DocWiki = new C_DocWiki();
//# sourceMappingURL=C_DocWiki.js.map