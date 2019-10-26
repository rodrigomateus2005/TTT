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
var C_OrRFID = /** @class */ (function (_super) {
    __extends(C_OrRFID, _super);
    function C_OrRFID() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_OrRFID.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrRFID.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrRFID.prototype, "Dados", {
        get: function () {
            return this.GetScope()["Dados"];
        },
        set: function (value) {
            this.GetScope()["Dados"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrRFID.prototype, "codigo", {
        set: function (value) {
            this.codigo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrRFID.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrRFID.prototype, "lblRazaoSocial", {
        get: function () {
            return window['lblRazaoSocial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrRFID.prototype, "lblCNPJ", {
        get: function () {
            return window['lblCNPJ_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrRFID.prototype, "lblContato", {
        get: function () {
            return window['lblContato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrRFID.prototype, "lblTelefone", {
        get: function () {
            return window['lblTelefone_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrRFID.prototype, "lblEmail", {
        get: function () {
            return window['lblEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrRFID.prototype, "lblCidade", {
        get: function () {
            return window['lblCidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrRFID.prototype, "lblDataCadastro", {
        get: function () {
            return window['lblDataCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrRFID.prototype, "txtProdutoObs", {
        get: function () {
            return window['txtProdutoObs_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrRFID.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrRFID.prototype, "txtQtde", {
        get: function () {
            return window['txtQtde_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrRFID.prototype, "txtDetalhesProjeto", {
        get: function () {
            return window['txtDetalhesProjeto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrRFID.prototype, "txtObservacao", {
        get: function () {
            return window['txtObservacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrRFID.prototype, "txtObsCliente", {
        get: function () {
            return window['txtObsCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_OrRFID.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.txtCliente.Procurou, this.OntxtClienteProcurou, this);
        adicionarEventoMoura(this.grd.Validando, this.OnValidandoItem, this);
    };
    C_OrRFID.prototype.OnDepoisBuscarExistente = function (entity) {
        _super.prototype.OnDepoisBuscarExistente;
        var qtde = entity.Produto.length;
        this.Dados = [];
        for (var x = 0; x < qtde; x++) {
            var d = {};
            d.codProduto = entity.Produto[x].Produto;
            d.ObsInformada = entity.Produto[x].Obs_Informada;
            d.Qtde = entity.Produto[x].Qtde;
            var parametro = {
                codigo: d.codProduto
            };
            var produto;
            produto = this.ExecutarFuncaoServerSideSynch("Produto", parametro);
            if (produto) {
                d.ObsProduto = produto.Observacao;
                d.Produto = produto.Nome;
            }
            this.Dados.push(d);
        }
        this.grd.Grid.PreencherGrid(this.Dados);
        this.GetScope().$applyAsync();
    };
    C_OrRFID.prototype.OnDepoisLimpar = function () {
        _super.prototype.OnDepoisLimpar;
        this.lblRazaoSocial.Text = "";
        this.lblCNPJ.Text = "";
        this.lblContato.Text = "";
        this.lblTelefone.Text = "";
        this.lblEmail.Text = "";
        this.lblCidade.Text = "";
        this.lblDataCadastro.Text = "";
        this.Dados = null;
        this.grd.Limpar;
        this.GetScope().$applyAsync();
        return true;
    };
    C_OrRFID.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var entidade = this.GetScope().Entity;
        if (!entidade.Data_Cadastro) {
            entidade.Data_Cadastro = new Date;
        }
        this.PreencherProdutos(entidade);
        return true;
    };
    C_OrRFID.prototype.PreencherProdutos = function (entidade) {
        entidade.Produto = [];
        var produtos = this.Dados;
        for (var x = 0; x < produtos.length; x++) {
            var Produto = {};
            Produto.Obs_Informada = produtos[x].ObsInformada;
            Produto.Produto = produtos[x].codProduto;
            Produto.Qtde = produtos[x].Qtde;
            entidade.Produto.push(Produto);
        }
    };
    C_OrRFID.prototype.OnValidandoItem = function (s, e) {
        e.item.Produto = this.txtProduto.LabelResultado.innerText;
        var parametro = {
            codigo: e.item.codProduto
        };
        var produto;
        produto = this.ExecutarFuncaoServerSideSynch("Produto", parametro);
        if (produto) {
            e.item.ObsProduto = produto.Observacao;
        }
    };
    C_OrRFID.prototype.OnExcluindoItem = function (s, e) {
        //var produto: SiSMoura.Core.Entity.Produto ;
        //this.PreencherRomaneios(entidade);
        //this.GetScope().$applyAsync();
    };
    C_OrRFID.prototype.OntxtClienteProcurou = function () {
        this.OnDepoisLimpar();
        var parametros = {
            codigo: this.txtCliente.GetText().CNum()
        };
        var cliente;
        cliente = this.ExecutarFuncaoServerSideSynch("Cliente", parametros);
        if (cliente) {
            this.lblRazaoSocial.Text = cliente.Razao_Social;
            this.lblCNPJ.Text = cliente.Cgc;
            this.lblContato.Text = cliente.Contato;
            var qtde = cliente.Lista_Telefones.length;
            for (var x = 0; x < qtde; x++) {
                if (this.lblTelefone.Text == "") {
                    this.lblTelefone.Text = cliente.Lista_Telefones[x].Telefone;
                }
                else {
                    this.lblTelefone.Text += "/" + cliente.Lista_Telefones[x].Telefone;
                }
            }
            this.lblEmail.Text = cliente.Email;
            var parametro = {
                codigo: cliente.Cidade
            };
            var cidade;
            cidade = this.ExecutarFuncaoServerSideSynch("Cidade", parametro);
            if (cidade) {
                this.lblCidade.Text = cidade.Cidade;
            }
            this.lblDataCadastro.Text = cliente.Data_Cadastro.FormataData().toString();
        }
        this.GetScope().$applyAsync();
    };
    return C_OrRFID;
}(MouraPageCadastroAngular));
var c_OrRFID = new C_OrRFID();
//# sourceMappingURL=C_OrRFID.js.map