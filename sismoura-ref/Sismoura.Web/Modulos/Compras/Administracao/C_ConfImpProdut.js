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
var C_ConfImpProdut = /** @class */ (function (_super) {
    __extends(C_ConfImpProdut, _super);
    function C_ConfImpProdut() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ConfImpProdut.prototype, "Item", {
        get: function () {
            var that = this.GetScope()["Item"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Item"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfImpProdut.prototype, "Itens", {
        get: function () {
            return this.GetScope()["Itens"];
        },
        set: function (value) {
            this.GetScope()["Itens"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfImpProdut.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfImpProdut.prototype, "txtColuna", {
        get: function () {
            return window['txtColuna_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfImpProdut.prototype, "txtCampo", {
        get: function () {
            return window['txtCampo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ConfImpProdut.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.ExcluindoItem, this.OnClickExcluirCampos, this);
            adicionarEventoMoura(this.Grid.Validando, this.OnContador, this);
        }
    };
    C_ConfImpProdut.prototype.OnContador = function (s, e) {
        if (!this.txtCampo.GetResultado()) {
            e.cancelar = true;
            MostrarAlerta('Preencha o campo corretamente: Campo');
            return;
        }
        if (!this.Item.Coluna || this.Item.Coluna <= 0) {
            e.cancelar = true;
            MostrarAlerta('Preencha o campo corretamente: Coluna');
            return;
        }
        if (e.index < 0) {
            e.item.Contador = this.Itens.Max("Contador") + 1;
        }
        e.item.Nome_Campo = this.txtCampo.GetResultado();
    };
    C_ConfImpProdut.prototype.PreencherGrade = function () {
        var parametros;
        try {
            this.Itens = [];
            parametros = {};
            abrirEspera("");
            this.Itens = this.ExecutarFuncaoServerSideSynch("GetByTelaItens", parametros);
            if (this.Itens) {
                this.EntityTela.Itens = this.Itens;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        finally {
            fecharEspera();
            this.RefreshAngular();
        }
    };
    C_ConfImpProdut.prototype.OnSelecionouItem = function (s, e) {
        this.Item.txtCampo.Procurar(e.item.Nome_Campo);
        this.Item.Cod_Campo = e.item.Descricao;
        this.RefreshAngular();
    };
    C_ConfImpProdut.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.Itens = [];
        this.Grid.Limpar();
    };
    C_ConfImpProdut.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (this.Itens) {
            this.EntityTela.Itens = this.Itens;
        }
        return true;
    };
    C_ConfImpProdut.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        try {
            if (Entidade) {
                this.Itens = Entidade.Itens;
                for (var x = 0; x < this.Itens.length; x++) {
                    this.Itens[x].Contador = x + 1;
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConfImpProdut.prototype.OnClickExcluirCampos = function (s, e) {
        var lista = [];
        for (var x = 0; x < this.Itens.length; x++) {
            if (this.Itens.length == 1) {
                this.Itens = [];
            }
            else {
                if (this.Itens[x] != e.item) {
                    lista.push(this.Itens[x]);
                }
            }
        }
        this.Itens = [];
        this.Itens = lista;
    };
    return C_ConfImpProdut;
}(MouraPageCadastroAngular));
var c_ConfImpProdut = new C_ConfImpProdut();
//# sourceMappingURL=C_ConfImpProdut.js.map