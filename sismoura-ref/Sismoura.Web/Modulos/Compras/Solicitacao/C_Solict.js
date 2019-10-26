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
var C_Solict = /** @class */ (function (_super) {
    __extends(C_Solict, _super);
    function C_Solict() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Solict.prototype, "Produto", {
        get: function () {
            var that = this.GetScope()["Produto"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Produto"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Solict.prototype, "Produtos", {
        get: function () {
            return this.GetScope()["Produtos"];
        },
        set: function (value) {
            this.GetScope()["Produtos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Solict.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Solict.prototype, "txtCodigoProduto", {
        get: function () {
            return window['txtCodigoProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Solict.prototype, "txtQtde", {
        get: function () {
            return window['txtQtde_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Solict.prototype, "btnReplicar", {
        get: function () {
            return window['btnReplicar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Solict.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Solict.prototype, "txtDescricaoProduto", {
        get: function () {
            return window['txtDescricaoProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Solict.prototype, "cboUnidadeMedia", {
        get: function () {
            return window['cboUnidadeMedia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Solict.prototype, "txtSolcitante", {
        get: function () {
            return window['txtSolicitante_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Solict.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.Validando, this.OnValidando, this);
            adicionarEventoMoura(this.grid.LimpouItem, this.LimparProduto, this);
            adicionarEventoMoura(this.grid.SelecionandoItem, this.OnSelecionouItem, this);
        }
        if (this.btnReplicar) {
            adicionarEventoMoura(this.btnReplicar.Click, this.OnClickReplicar, this);
        }
        //if (this.txtCodigoProduto){
        //    adicionarEventoMoura(this.txtCodigoProduto.Procurou, this.OnProdutoPesquisou, this);
        //}
    };
    C_Solict.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().OnProdutoPesquisou) {
            var that = this;
            this.GetScope().OnProdutoPesquisou = $.proxy(this.OnProdutoPesquisou, this);
            this.GetScope().$watch(function (scope) { return that.Produto.Codigo_Produto; }, this.GetScope().OnProdutoPesquisou);
        }
        if (!this.GetScope().MudouDescricaoProduto) {
            var that = this;
            this.GetScope().MudouDescricaoProduto = $.proxy(this.MudouDescricaoProduto, this);
            this.GetScope().$watch(function (scope) { return that.Produto.Descricao_Produto; }, this.GetScope().MudouDescricaoProduto);
        }
    };
    C_Solict.prototype.OnSelecionouItem = function (s, e) {
        this.txtCodigoProduto.Procurar(e.item.Codigo_Produto);
        this.Produto.Descricao_Produto = e.item.Descricao_Produto;
        this.RefreshAngular();
    };
    C_Solict.prototype.MudouDescricaoProduto = function () {
        if (this.EntityTela.Codigo > 0 && !String.IsNullOrWhiteSpace(this.Produto.Descricao)) {
            var parametros = {
                codProduto: this.Produto.Codigo_Produto,
                descProduto: this.Produto.Descricao_Produto
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("MudouDescricaoProduto", parametros);
            if (retorno) {
                this.txtCodigoProduto.SetText("");
            }
        }
    };
    C_Solict.prototype.OnClickReplicar = function (s, e) {
        e.processOnServer = false;
        if (this.EntityTela.Codigo <= 0) {
            MostrarAlerta("Insira uma Solicitação para replicar");
            this.txtCodigo.Focus();
            return;
        }
        var parametros = {
            codigo: this.EntityTela.Codigo,
            codUsuario: ValoresSismoura.UsuarioLogado,
            nomeTela: ValoresSismoura.NomeTela
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("ReplicarSolicitacao", parametros);
        if (retorno.NovaSolicitacao) {
            MsgBoxJS("Deseja visualizar a solicitação realizada?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRepostaReplicar, this), retorno.NovaSolicitacao);
        }
    };
    C_Solict.prototype.OnRepostaReplicar = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            this.txtCodigo.Procurar("" + result.Argument);
        }
    };
    C_Solict.prototype.LimparProduto = function () {
        this.Produto.Codigo_Produto = 0;
        this.Produto.Descricao_Produto = "";
        this.Produto.Quantidade = 0;
        this.Produto.Unidade = -1;
        this.RefreshAngular();
    };
    C_Solict.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.LimparProduto();
        var parametros;
        parametros = {
            codigo: Entity.Codigo
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetSolicitacao", parametros);
        this.Produtos = retorno;
        this.RefreshAngular();
    };
    C_Solict.prototype.OnProdutoPesquisou = function () {
        var produto;
        if (!this.Produto.Codigo_Produto) {
            return;
        }
        var parametros = {
            codProduto: this.Produto.Codigo_Produto
        };
        if (this.txtSolcitante.SomenteAtivos) {
            var inativo = this.ExecutarFuncaoServerSideSynch("GetInativo", parametros);
            if (inativo) {
                this.Produto.Descricao_Produto = "";
                this.Produto.Quantidade = 0;
                this.Produto.Unidade = -1;
                this.RefreshAngular();
                return;
            }
        }
        produto = this.ExecutarFuncaoServerSideSynch("GetInformacoesProduto", parametros);
        if (produto) {
            this.Produto.Descricao_Produto = produto.Nome;
            this.Produto.Unidade = produto.Unidade;
        }
        else {
            this.Produto.Descricao_Produto = "";
            this.Produto.Unidade = "";
        }
    };
    C_Solict.prototype.OnValidando = function (s, e) {
        var produto;
        if (e.item.Codigo_Produto <= 0 && e.item.Descricao_Produto == "") {
            MostrarAlerta("Preencha corretamente o campo: Produto");
            e.cancelar = true;
            this.txtCodigoProduto.Focus();
            return;
        }
        if (e.item.Quantidade <= 0) {
            MostrarAlerta("Preencha corretamente o campo: Quantidade");
            e.cancelar = true;
            this.txtQtde.Focus();
            return;
        }
        if (!e.item.Unidade) {
            MostrarAlerta("Preencha corretamente o campo: Unidade Medida");
            e.cancelar = true;
            this.txtQtde.Focus();
            return;
        }
        if (e.item.Codigo_Produto > 0) {
            var parametros = {
                codProduto: e.item.Codigo_Produto,
                quantidade: e.item.Quantidade
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificarUnidade", parametros);
            if (retorno.Mensagem) {
                MostrarAlerta(retorno.Mensagem);
                e.cancelar = true;
                this.txtQtde.Focus();
                return;
            }
            var parametros = {
                codProduto: this.Produto.Codigo_Produto
            };
            produto = this.ExecutarFuncaoServerSideSynch("GetInformacoesProduto", parametros);
            if (this.Produto.Descricao_Produto != produto.Nome) {
                e.item.Codigo_Produto = undefined;
            }
        }
    };
    C_Solict.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Codigo = 0;
        Entity.Observacao = "";
        Entity.Status = "";
        Entity.Data = this.DataServidor();
        Entity.Solicitante = 0;
        this.Produto.Codigo_Produto = 0;
        this.Produto.Descricao_Produto = "";
        this.Produto.Quantidade = 0;
        this.Produtos = [];
    };
    C_Solict.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (this.Produtos) {
            var itens_solicitacao = [];
            var item;
            for (var x = 0; x < this.Produtos.length; x++) {
                item = {};
                item.Produto = this.Produtos[x].Codigo_Produto;
                item.Produto_Nome = this.Produtos[x].Descricao_Produto;
                item.Unidade = this.Produtos[x].Unidade;
                item.Qtde = this.Produtos[x].Quantidade;
                itens_solicitacao.push(item);
            }
            this.EntityTela.Solicitacao_Itens = itens_solicitacao;
        }
        return true;
    };
    return C_Solict;
}(MouraPageCadastroAngular));
var c_Solict = new C_Solict();
//# sourceMappingURL=C_Solict.js.map