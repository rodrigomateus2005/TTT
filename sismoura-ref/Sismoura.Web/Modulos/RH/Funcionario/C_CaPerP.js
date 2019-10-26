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
var C_CaPerP = /** @class */ (function (_super) {
    __extends(C_CaPerP, _super);
    function C_CaPerP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_CaPerP.prototype, "GridItens", {
        get: function () {
            return window['GridItens_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CaPerP.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CaPerP.prototype, "cboTipo", {
        get: function () {
            return window['cboTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CaPerP.prototype, "txtItemDescricao", {
        get: function () {
            return window['txtItemDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CaPerP.prototype, "Itens", {
        get: function () {
            return this.GetScope()["Itens"];
        },
        set: function (value) {
            this.GetScope()["Itens"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CaPerP.prototype, "Item", {
        get: function () {
            return this.GetScope()["Item"];
        },
        set: function (value) {
            this.GetScope()["Item"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CaPerP.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_CaPerP.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.GridItens) {
            adicionarEventoMoura(this.GridItens.Validando, this.OnValidandoItem, this);
        }
    };
    C_CaPerP.prototype.MudouTipo = function (newValue, oldValue) {
        this.tab.AlterarVisibleAba("abaItens", this.EntityTela.Tipo == 1);
    };
    C_CaPerP.prototype.OnDepoisLimpar = function () {
        _super.prototype.OnDepoisLimpar;
        this.Itens = [];
        this.Item = {};
        this.GetScope().$applyAsync();
    };
    C_CaPerP.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        this.PreencherItensGrade(Entidade);
    };
    C_CaPerP.prototype.OnValidandoItem = function (s, e) {
        if (e.item.Descricao == null) {
            MostrarAlerta("Informe a descrição!");
            e.cancelar = true;
            this.txtItemDescricao.Focus();
            return;
        }
        var codigo;
        codigo = 0;
        if (this.Itens.length >= 0) {
            var values = [];
            if (this.Itens.length != 0) {
                for (var x = 0; x < this.Itens.length; x++) {
                    values[x] = this.Itens[x].Item;
                }
            }
            if (values.length > 0) {
                codigo = Math.max.apply(Math, values);
            }
            if (e.item.Item == 0 || e.item.Item == undefined || e.item.Item == null) {
                e.item.Item = codigo + 1;
            }
        }
        this.GetScope().$applyAsync();
    };
    C_CaPerP.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().MudouTipo) {
            this.GetScope().MudouTipo = $.proxy(this.MudouTipo, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Tipo; }, this.GetScope().MudouTipo);
        }
    };
    C_CaPerP.prototype.PreencherGrade = function () {
        var parametros;
        try {
            parametros = {};
            this.GridItens.AtualizarGrid();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CaPerP.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var entidade = this.GetScope().Entity;
        var novoItem;
        entidade.Tipo_Campo = this.cboTipo.GetText();
        entidade.Campos_Item = [];
        for (var y = 0; y < this.Itens.length; y++) {
            novoItem = {};
            novoItem.Codigo = this.Itens[y].Codigo;
            novoItem.Campo = this.Itens[y].Campo;
            novoItem.Descricao = this.Itens[y].Descricao;
            novoItem.Item = this.Itens[y].Item;
            entidade.Campos_Item.push(novoItem);
        }
        return true;
    };
    C_CaPerP.prototype.OnGravouSucesso = function (s, e) {
        var entidade = this.GetScope().Entity;
        this.PreencherItensGrade(entidade);
    };
    C_CaPerP.prototype.PreencherItensGrade = function (Entidade) {
        this.Itens = Entidade.Campos_Item;
        this.GetScope().$applyAsync();
    };
    C_CaPerP.prototype.OnExcluiuSucesso = function (s, e) {
        var entidade = this.GetScope().Entity;
    };
    return C_CaPerP;
}(MouraPageCadastroAngular));
var c_CaPerP = new C_CaPerP();
//# sourceMappingURL=C_CaPerP.js.map