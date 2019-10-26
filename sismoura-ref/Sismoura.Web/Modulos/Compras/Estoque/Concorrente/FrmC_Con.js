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
var FrmC_Con = /** @class */ (function (_super) {
    __extends(FrmC_Con, _super);
    function FrmC_Con() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FrmC_Con.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmC_Con.prototype, "Concorrente_Produto", {
        get: function () {
            var that = this.GetScope()["Concorrente_Produto"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Concorrente_Produto"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmC_Con.prototype, "Concorrente_Produtos", {
        get: function () {
            return this.GetScope()["Concorrente_Produtos"];
        },
        set: function (value) {
            this.GetScope()["Concorrente_Produtos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmC_Con.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    FrmC_Con.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.Validando, this.OnValidando, this);
            adicionarEventoMoura(this.Grid.LimpouItem, this.OnLimpouProduto, this);
            adicionarEventoMoura(this.Grid.SelecionandoItem, this.OnSelecionouItem, this);
        }
    };
    FrmC_Con.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    FrmC_Con.prototype.OnSelecionouLinha = function (s, e) {
        this.Grid.Selecionar(e.index);
    };
    FrmC_Con.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        if (this.EntityTela.Codigo != null || this.EntityTela.Codigo != undefined) {
            var codConcorrente = this.EntityTela.Codigo;
            var parametros;
            parametros = {
                codConcorrente: codConcorrente
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ObterConcorrentes", parametros);
            this.Concorrente_Produtos = retorno;
            this.RefreshAngular();
        }
    };
    FrmC_Con.prototype.OnDepoisLimpar = function (Entity) {
        this.Concorrente_Produtos = [];
        this.Grid.Limpar();
        this.RefreshAngular();
    };
    FrmC_Con.prototype.OnLimpouProduto = function (s, e) {
        this.Concorrente_Produto.Data = this.DataServidor();
        this.Concorrente_Produto.Preco = (0).Format(2).CNum();
        this.RefreshAngular();
    };
    FrmC_Con.prototype.OnValidando = function (s, e) {
        if (e.index < 0) {
            e.item.DescricaoProduto = this.txtProduto.GetResultado();
        }
        if (this.Concorrente_Produto.Produto <= 0) {
            MostrarAlerta("Informe um Produto");
            e.cancelar = true;
            return;
        }
        if (this.Concorrente_Produto.Preco <= 0) {
            MostrarAlerta("Informe o preço do concorrente");
            e.cancelar = true;
            return;
        }
        if (this.Concorrente_Produto.Data == null || this.Concorrente_Produto.Data == undefined) {
            MostrarAlerta("Informe uma data válida!");
            e.cancelar = true;
            return;
        }
        if (this.Concorrente_Produtos.length > 0) {
            for (var x = 0; x < this.Concorrente_Produtos.length; x++) {
                if (this.Concorrente_Produtos[x].Produto == this.Concorrente_Produto.Produto) {
                    MsgBoxJS("Esse produto ja foi adicionado e seu preço será substituído. Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRespondeuMensagemExistente, this), x);
                    e.cancelar = true;
                    return;
                }
            }
        }
    };
    FrmC_Con.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.EntityTela.Concorrente_Produtos = this.Concorrente_Produtos;
        return true;
    };
    FrmC_Con.prototype.OnRespondeuMensagemExistente = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            this.Concorrente_Produtos[result.Argument].Preco = this.Concorrente_Produto.Preco;
            this.Concorrente_Produtos[result.Argument].Data = this.Concorrente_Produto.Data;
            this.Grid.Grid.Refresh();
            this.RefreshAngular();
        }
    };
    FrmC_Con.prototype.OnSelecionouItem = function (s, e) {
        this.Concorrente_Produto.Produto = e.item.Produto;
        this.Concorrente_Produto.Preco = e.item.Preco;
        this.Concorrente_Produto.Data = e.item.Data;
    };
    return FrmC_Con;
}(MouraPageCadastroAngular));
var frmC_Con = new FrmC_Con();
//# sourceMappingURL=FrmC_Con.js.map