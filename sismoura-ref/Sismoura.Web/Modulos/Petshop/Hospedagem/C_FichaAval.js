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
var C_FichaAval = /** @class */ (function (_super) {
    __extends(C_FichaAval, _super);
    function C_FichaAval() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_FichaAval.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FichaAval.prototype, "grdItens", {
        get: function () {
            return window['grdItens_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FichaAval.prototype, "Itens", {
        get: function () {
            return this.GetScope()["Itens"];
        },
        set: function (value) {
            this.GetScope()["Itens"] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_FichaAval.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
        if (this.grdItens) {
            adicionarEventoMoura(this.grdItens.AdicionandoItem, this.OnAntesAdicionarItem, this);
        }
    };
    C_FichaAval.prototype.OnAntesAdicionarItem = function (s, e) {
        try {
            if (String.IsNullOrWhiteSpace(e.item["Descricao"])) {
                e.cancelar = true;
                MostrarAlerta("Informe o Item do checklist.");
                return;
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_FichaAval.prototype.OnGravouSucesso = function (s, e) {
        var entidade = this.GetScope().Entity;
    };
    C_FichaAval.prototype.OnExcluiuSucesso = function (s, e) {
        var entidade = this.GetScope().Entity;
    };
    C_FichaAval.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var entidade = this.GetScope().Entity;
        this.PreencherItem(entidade);
        if (!entidade.Itens || entidade.Itens.length == 0) {
            MostrarAlerta("Informe os itens do checklist");
            return false;
        }
        return true;
    };
    C_FichaAval.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.GetCadastrados();
        this.BuscarItemCadastrado(this.EntityTela.Codigo);
        return true;
    };
    C_FichaAval.prototype.OnGridSelecionouItem = function (s, e) {
        var codigo = e.data.Codigo;
        this.PreencherEntidade(codigo);
        this.BuscarItemCadastrado(codigo);
    };
    C_FichaAval.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        this.BuscarItemCadastrado(Entidade.Codigo);
    };
    C_FichaAval.prototype.BuscarItemCadastrado = function (codigo) {
        var parametros = {
            codigo: codigo
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetItensCadastrados", parametros);
        this.Itens = retorno;
        this.grdItens.Grid.PreencherGrid(retorno);
    };
    C_FichaAval.prototype.OnDepoisLimpar = function (Entity) {
        this.GetCadastrados();
        this.RefreshAngular();
        this.Itens = [];
    };
    C_FichaAval.prototype.PreencherItem = function (entidade) {
        var itens = this.Itens;
        var itensExistentes = entidade.Itens;
        entidade.Itens = [];
        for (var x = 0; x < itens.length; x++) {
            var novoItem = {};
            var itemGrid = void 0;
            if (!itensExistentes)
                itensExistentes = [];
            for (var y = 0; y < itensExistentes.length; y++) {
                if (itensExistentes[y].Codigo == itens[x].Codigo) {
                    itemGrid = itensExistentes[y];
                    y = itensExistentes.length;
                }
            }
            itemGrid = itens[x];
            novoItem.Codigo = itemGrid.Codigo;
            novoItem.Descricao = itemGrid.Descricao;
            entidade.Itens.push(novoItem);
        }
    };
    C_FichaAval.prototype.CarregarItens = function (codigo) {
        try {
            var parametros;
            parametros = {
                codigo: codigo
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetItensCadastrados", parametros);
            this.grdItens.Grid.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_FichaAval.prototype.GetCadastrados = function () {
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
    C_FichaAval.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.OnDepoisLimpar(this.GetScope().Entity);
    };
    return C_FichaAval;
}(MouraPageCadastroAngular));
var c_FichaAval = new C_FichaAval();
//# sourceMappingURL=C_FichaAval.js.map