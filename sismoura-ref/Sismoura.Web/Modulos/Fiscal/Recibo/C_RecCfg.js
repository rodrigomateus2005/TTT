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
var C_RecCfg = /** @class */ (function (_super) {
    __extends(C_RecCfg, _super);
    function C_RecCfg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_RecCfg.prototype, "Observ", {
        get: function () {
            var that = this.GetScope()["Observ"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Observ"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RecCfg.prototype, "Observs", {
        get: function () {
            return this.GetScope()["Observs"];
        },
        set: function (value) {
            this.GetScope()["Observs"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RecCfg.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RecCfg.prototype, "cboModelo", {
        get: function () {
            return window['cboModelo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RecCfg.prototype, "txtDescObs", {
        get: function () {
            return window['txtDescObs_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RecCfg.prototype, "txtObs", {
        get: function () {
            return window['txtObs_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_RecCfg.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.Validando, this.OnValidando, this);
        }
        if (this.cboModelo) {
            adicionarEventoMoura(this.cboModelo.SelectedItemChanged, this.OnSelectedItemChangedModelo, this);
        }
    };
    C_RecCfg.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.OnDepoisLimpar(this.EntityTela);
    };
    C_RecCfg.prototype.OnSelectedItemChangedModelo = function () {
        this.PreencherTela();
    };
    C_RecCfg.prototype.PreencherCombo = function () {
        this.cboModelo.ClearItems();
        this.cboModelo.AddItem("Modelo1", 1, "");
        this.cboModelo.AddItem("Modelo2", 2, "");
        this.cboModelo.AddItem("Modelo3", 3, "");
        return this.SelecionarItem();
    };
    C_RecCfg.prototype.SelecionarItem = function () {
        var parametros;
        parametros = {};
        var retorno = this.ExecutarFuncaoServerSideSynch("GetItemModelo", parametros);
        if (retorno) {
            return retorno;
        }
        else {
            return 0;
        }
    };
    C_RecCfg.prototype.OnValidando = function (s, e) {
        try {
            var x;
            var itens = this.grid.Grid.DataSource;
            var parametros;
            if (!itens) {
                itens = [];
            }
            for (x = 0; x < itens.length; x++) {
                if (itens[x].Descricao == e.item.Descricao) {
                    MostrarAlerta("O registro já foi inserido na grade");
                    e.cancelar = true;
                    return;
                }
            }
            e.item.Codigo_Modelo = this.EntityTela.Recibo_Impressao_Modelo;
            if (!e.item.Codigo_Modelo) {
                MostrarAlerta("Nenhum modelo selecionado!");
                e.cancelar = true;
                this.cboModelo.Focus();
                return;
            }
            if (!e.item.Descricao) {
                MostrarAlerta("Informe a descrição da observação!");
                e.cancelar = true;
                this.txtDescObs.Focus();
                return;
            }
            if (!e.item.Observacao) {
                MostrarAlerta("Informe a observação!");
                e.cancelar = true;
                this.txtObs.Focus();
                return;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_RecCfg.prototype.PreencherTela = function () {
        try {
            var parametros;
            parametros = {
                Modelo: this.cboModelo.GetValue()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherDadosTela", parametros);
            if (retorno) {
                this.SetEntity(retorno);
                this.PreencherGrade();
            }
            else {
                this.LimparEntidade(this.EntityTela);
                this.RefreshAngular();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_RecCfg.prototype.LimparEntidade = function (entidade) {
        entidade.Imprimirprodutos_Recibo = false;
        entidade.Imprimirvendedor_Recibo = false;
        entidade.ReciboObs = undefined;
        this.Observs = undefined;
        this.SetEntity(entidade);
    };
    C_RecCfg.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {
                Modelo: this.EntityTela.Recibo_Impressao_Modelo
            };
            var resultado = this.ExecutarFuncaoServerSideSynch("PreencherDadosGrid", parametros);
            if (resultado) {
                this.Observs = resultado.Grid;
                this.grid.Grid.PreencherGrid(resultado.Grid);
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_RecCfg.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (this.grid.Grid.DataSource.length != 0) {
            this.EntityTela.ReciboObs = this.Observs;
            return true;
        }
        else {
            MostrarAlerta("Adicione uma observação");
            return false;
        }
    };
    C_RecCfg.prototype.OnAntesDeletar = function () {
        _super.prototype.OnAntesDeletar.call(this);
        MostrarAlerta("Não é possivel excluir a configuração");
        return false;
    };
    C_RecCfg.prototype.OnAntesNovo = function () {
        _super.prototype.OnAntesNovo.call(this);
        MostrarAlerta("Não é possivel limpar a configuração");
        return false;
    };
    C_RecCfg.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.Observ = [];
        var item = this.PreencherCombo();
        if (item == 0) {
            this.LimparEntidade(Entity);
            this.cboModelo.Focus();
        }
        else {
            this.cboModelo.SetValue(item);
            this.PreencherTela();
        }
        this.RefreshAngular();
    };
    C_RecCfg.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherTela();
        return true;
    };
    return C_RecCfg;
}(MouraPageCadastroAngular));
var c_RecCfg = new C_RecCfg();
//# sourceMappingURL=C_RecCfg.js.map