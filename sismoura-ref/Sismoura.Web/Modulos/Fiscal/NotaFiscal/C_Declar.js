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
var existente = false;
var C_Declar = /** @class */ (function (_super) {
    __extends(C_Declar, _super);
    function C_Declar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Declar.prototype, "grdItens", {
        get: function () {
            return window['grdProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtDestinatario", {
        get: function () {
            return window['txtDestinatario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "lblCpf", {
        get: function () {
            return window['lblCpf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtEndereco", {
        get: function () {
            return window['txtEndereco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtNumero", {
        get: function () {
            return window['txtNumero_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtComplemento", {
        get: function () {
            return window['txtComplemento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtBairro", {
        get: function () {
            return window['txtBairro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtCep", {
        get: function () {
            return window['txtCep_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "lblMunicipio", {
        get: function () {
            return window['lblMunicipio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "lblEstado", {
        get: function () {
            return window['lblEstado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "btnAdicionarProduto", {
        get: function () {
            return window['btnAdicionarProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "mdProduto", {
        get: function () {
            return window['mdProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "btnImportarOrcamento", {
        get: function () {
            return window['btnImportarOrcamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "btnImportarNFe", {
        get: function () {
            return window['btnImportarNFe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "mdImportarNFe", {
        get: function () {
            return window['mdImportarNFe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "mdOrcamento", {
        get: function () {
            return window['mdOrcamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "grdOrcamento", {
        get: function () {
            return window['grdOrcamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "chkConsiderar_Peso_Produto", {
        get: function () {
            return window['chkConsiderar_Peso_Produto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtPeso_Total", {
        get: function () {
            return window['txtPeso_Total_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtQtde", {
        get: function () {
            return window['txtQtde_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtValorUnitario", {
        get: function () {
            return window['txtValorUnitario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtSubTotal", {
        get: function () {
            return window['txtSubTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "Item", {
        get: function () {
            if (!this.GetScope()["Item"]) {
                this.GetScope()["Item"] = {};
            }
            return this.GetScope()["Item"];
        },
        set: function (value) {
            this.GetScope()["Item"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "ItemGrid", {
        get: function () {
            if (!this.GetScope()["ItemGrid"]) {
                this.GetScope()["ItemGrid"] = {};
            }
            return this.GetScope()["ItemGrid"];
        },
        set: function (value) {
            this.GetScope()["ItemGrid"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "btnOKProduto", {
        get: function () {
            return window['btnOKProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "btnMenuProduto", {
        get: function () {
            return window['btnMenuProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "ProdutosDeclaracao", {
        get: function () {
            return this.grdItens.DataSource;
        },
        set: function (value) {
            this.grdItens.PreencherGrid(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "cboEmpresaNFe", {
        //Importar NFe
        get: function () {
            return window['cboEmpresaNFe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "cboSituacaoNFe", {
        get: function () {
            return window['cboSituacaoNFe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtPeriodoNFe", {
        get: function () {
            return window['txtPeriodoNFe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtDestinatarioNFe", {
        get: function () {
            return window['txtDestinatarioNFe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtNF", {
        get: function () {
            return window['txtNF_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "btnLimparNFe", {
        get: function () {
            return window['btnLimparNFe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "btnGerarNFe", {
        get: function () {
            return window['btnGerarNFe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "btnOkImportarNFe", {
        get: function () {
            return window['btnOkImportarNFe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "grdNFe", {
        get: function () {
            return window['grdNFe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "NFeDeclaracao", {
        get: function () {
            return this.grdNFe.DataSource;
        },
        set: function (value) {
            this.grdNFe.PreencherGrid(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "btnImportarVendas", {
        //Importar Venda
        get: function () {
            return window['btnImportarVendas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "mdImportarVendas", {
        get: function () {
            return window['mdImportarVendas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "btnGerarVendas", {
        get: function () {
            return window['btnGerarVendas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtDataInicialVenda", {
        get: function () {
            return window['txtDataInicialVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtDataFinalVenda", {
        get: function () {
            return window['txtDataFinalVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "cboTipoRelacaoVenda", {
        get: function () {
            return window['cboTipoRelacaoVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtVendaInicial", {
        get: function () {
            return window['txtVendaInicial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtVendaFinal", {
        get: function () {
            return window['txtVendaFinal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "grdImportarVenda", {
        get: function () {
            return window['grdImportarVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "RelacaoVendas", {
        get: function () {
            return this.grdImportarVenda.DataSource;
        },
        set: function (value) {
            this.grdImportarVenda.PreencherGrid(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "btnOkImportarVendas", {
        get: function () {
            return window['btnOkImportarVendas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "btnGerarOrcamento", {
        //Importar Orcamento
        get: function () {
            return window['btnGerarOrcamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtCodOrcamento", {
        get: function () {
            return window['txtCodOrcamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtDataInicialOrcamento", {
        get: function () {
            return window['txtDataInicialOrcamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtDataFinalOrcamento", {
        get: function () {
            return window['txtDataFinalOrcamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "cboOrcamento", {
        get: function () {
            return window['cboOrcamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtClienteOrcamento", {
        get: function () {
            return window['txtClienteOrcamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "RelacaoOrcamento", {
        get: function () {
            return this.grdOrcamento.DataSource;
        },
        set: function (value) {
            this.grdOrcamento.PreencherGrid(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "btnImportarOS", {
        //Importar OS
        get: function () {
            return window['btnImportarOS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "mdOS", {
        get: function () {
            return window['mdOS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "grdOS", {
        get: function () {
            return window['grdOS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "btnGerarOS", {
        get: function () {
            return window['btnGerarOS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtCodOS", {
        get: function () {
            return window['txtCodOS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtDataInicialOS", {
        get: function () {
            return window['txtDataInicialOS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtDataFinalOS", {
        get: function () {
            return window['txtDataFinalOS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "cboSituacaoOS", {
        get: function () {
            return window['cboSituacaoOS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtClienteOS", {
        get: function () {
            return window['txtClienteOS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "RelacaoOS", {
        get: function () {
            return this.grdOS.DataSource;
        },
        set: function (value) {
            this.grdOS.PreencherGrid(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "btnImportarConsig", {
        //Importar consignações
        get: function () {
            return window['btnImportarConsig_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "mdConsig", {
        get: function () {
            return window['mdConsig_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "grdConsig", {
        get: function () {
            return window['grdConsig_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "btnGerarConsig", {
        get: function () {
            return window['btnGerarConsig_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtCodConsig", {
        get: function () {
            return window['txtCodConsig_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtDataInicialConsig", {
        get: function () {
            return window['txtDataInicialConsig_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtDataFinalConsig", {
        get: function () {
            return window['txtDataFinalConsig_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "cboTipoConsig", {
        get: function () {
            return window['cboTipoConsig_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "txtClienteConsig", {
        get: function () {
            return window['txtClienteOS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Declar.prototype, "RelacaoConsig", {
        get: function () {
            return this.grdConsig.DataSource;
        },
        set: function (value) {
            this.grdConsig.PreencherGrid(value);
        },
        enumerable: true,
        configurable: true
    });
    C_Declar.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.AntesGravar, this.OnAntesGravarDeclaracao, this);
        if (this.btnAdicionarProduto) {
            adicionarEventoMoura(this.btnAdicionarProduto.Click, this.OnClickBotaoAdicionarProduto, this);
        }
        if (this.chkConsiderar_Peso_Produto) {
            adicionarEventoMoura(this.chkConsiderar_Peso_Produto.CheckChanged, this.OnCheckConsiderar_Peso_ProdutoChange, this);
        }
        if (this.btnOKProduto) {
            adicionarEventoMoura(this.btnOKProduto.Click, this.OnClickOkBtnProduto, this);
        }
        if (this.btnMenuProduto) {
            adicionarEventoMoura(this.btnMenuProduto.Click, this.OnClickMenuProduto, this);
        }
        if (this.grdItens) {
            adicionarEventoMoura(this.grdItens.EditouItemGrade, this.OnEditouProduto, this);
        }
        //Importar NFe
        if (this.btnImportarNFe) {
            adicionarEventoMoura(this.btnImportarNFe.Click, this.OnClickBtnImportarNFe, this);
        }
        if (this.btnLimparNFe) {
            adicionarEventoMoura(this.btnLimparNFe.Click, this.OnClickLimparNFe, this);
        }
        if (this.btnGerarNFe) {
            adicionarEventoMoura(this.btnGerarNFe.Click, this.OnClickGerarNFe, this);
        }
        if (this.btnOkImportarNFe) {
            adicionarEventoMoura(this.btnOkImportarNFe.Click, this.OnClickImportarNFe, this);
        }
        //Importar Vendas
        if (this.btnImportarVendas) {
            adicionarEventoMoura(this.btnImportarVendas.Click, this.OnClickBtnImportarVendas, this);
        }
        if (this.btnGerarVendas) {
            adicionarEventoMoura(this.btnGerarVendas.Click, this.OnClickBotaoGerarVendas, this);
        }
        if (this.btnOkImportarVendas) {
            adicionarEventoMoura(this.btnOkImportarVendas.Click, this.OnClickImportarVendas, this);
        }
        //Importar Orcamento
        if (this.btnImportarOrcamento) {
            adicionarEventoMoura(this.btnImportarOrcamento.Click, this.OnClickBotaoImportOrcamento, this);
        }
        if (this.btnGerarOrcamento) {
            adicionarEventoMoura(this.btnGerarOrcamento.Click, this.OnClickBotaoGerarOrcamento, this);
        }
        if (this.grdOrcamento) {
            adicionarEventoMoura(this.grdOrcamento.SelecionouLinha, this.SelecionouOrcamento, this);
        }
        //Importar OS
        if (this.btnImportarOS) {
            adicionarEventoMoura(this.btnImportarOS.Click, this.OnClickBotaoImportarOs, this);
        }
        if (this.btnGerarOS) {
            adicionarEventoMoura(this.btnGerarOS.Click, this.OnClickBotaoGerarOS, this);
        }
        if (this.grdOS) {
            adicionarEventoMoura(this.grdOS.SelecionouLinha, this.SelecionouOS, this);
        }
        //Importar Consignação
        if (this.btnImportarConsig) {
            adicionarEventoMoura(this.btnImportarConsig.Click, this.OnClickBotaoImportarConsig, this);
        }
        if (this.btnGerarConsig) {
            adicionarEventoMoura(this.btnGerarConsig.Click, this.OnClickBotaoGerarConsig, this);
        }
        if (this.grdConsig) {
            adicionarEventoMoura(this.grdConsig.SelecionouLinha, this.SelecionouConsig, this);
        }
    };
    C_Declar.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        //Destinatario
        if (!this.GetScope().OnPesquisouDadosCliente) {
            this.GetScope().OnPesquisouDadosCliente = $.proxy(this.OnPesquisouDadosCliente, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Destinatario; }, this.GetScope().OnPesquisouDadosCliente);
        }
        //Produto
        if (!this.GetScope().OnPesquisouDadosProduto) {
            this.GetScope().OnPesquisouDadosProduto = $.proxy(this.OnPesquisouDadosProduto, this);
            var that = this;
            this.GetScope().$watch(function () { if (that.Item != null) {
                return that.Item.Produto;
            } }, this.GetScope().OnPesquisouDadosProduto);
        }
        if (!this.GetScope().OnCalcularSubTotal) {
            this.GetScope().OnCalcularSubTotal = $.proxy(this.CalcularSubTotal, this);
            var that = this;
            this.GetScope().$watch(function () { if (that.Item != null) {
                return that.Item.Qtde;
            } }, this.GetScope().OnCalcularSubTotal);
            this.GetScope().$watch(function () { if (that.Item != null) {
                return that.Item.Valor_Unitario;
            } }, this.GetScope().OnCalcularSubTotal);
        }
        this.txtPeso_Total.Enabled = false;
        this.PreencherGrade();
        this.PreencherVindoNotaFiscal();
    };
    C_Declar.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_Declar.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        return true;
    };
    C_Declar.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.LimparDestinatario(Entity);
        this.PreencherGrade();
    };
    C_Declar.prototype.Limpar = function () {
        _super.prototype.Limpar.call(this);
        this.EntityTela.Codigo = 0;
        this.EntityTela.Empresa = 0;
        this.EntityTela.Destinatario = 0;
        this.EntityTela.Cpf = "";
        this.EntityTela.Endereco = "";
        this.EntityTela.Numero = "";
        this.EntityTela.Complemento = "";
        this.EntityTela.Bairro = "";
        this.EntityTela.Cep = "";
        this.EntityTela.Municipio = "";
        this.EntityTela.Uf = "";
        this.EntityTela.Considerar_Peso_Produto = false;
        this.EntityTela.Peso_Total = 0.0;
        existente = false;
        this.EntityTela.DeclaracaoConteudoItem = [];
        this.ProdutosDeclaracao = [];
        this.RefreshAngular();
    };
    C_Declar.prototype.PreencherVindoNotaFiscal = function () {
        if (this.ParametrosTela.NF) {
            var parametros;
            parametros = {
                cod: this.ParametrosTela.NF
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetDadosNF", parametros);
            console.log(retorno);
            this.EntityTela.Empresa = retorno.Empresa;
            this.EntityTela.Destinatario = retorno.Codigo_Cliente;
            this.produtosNF(retorno.Codigo);
            this.RefreshAngular();
        }
    };
    C_Declar.prototype.PreencherGrade = function () {
        try {
            this.ProdutosDeclaracao = [];
            var parametros;
            var codigo = 0;
            if (this.EntityTela && this.EntityTela.Codigo) {
                codigo = this.EntityTela.Codigo;
            }
            if (codigo) {
                parametros = { Cod_Declaracao: codigo };
                var cad = this.ExecutarFuncaoServerSideSynch("GetItens", parametros);
                this.ProdutosDeclaracao = cad;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Declar.prototype.OntxtDestinatarioPesquisou = function (oldValue, newValue) {
        if (oldValue != newValue) {
            this.OnPesquisouDadosCliente();
        }
    };
    C_Declar.prototype.OnPesquisouDadosCliente = function () {
        if (this.txtDestinatario.Pesquisando && existente === false) {
            var parametros;
            var retorno;
            if (!this.EntityTela.Destinatario) {
                this.LimparDestinatario(this.EntityTela);
                return;
            }
            if (this.EntityTela.Destinatario) {
                this.BloquearCamposDestinatario(false);
            }
            parametros = {
                codCliente: this.EntityTela.Destinatario
            };
            retorno = this.ExecutarFuncaoServerSideSynch("GetDadosCliente", parametros);
            if (!retorno || retorno === null) {
                return;
            }
            if (!retorno.Cidade) {
                MostrarAlerta("Destinatário sem cidade informada em seu cadastro!");
                this.EntityTela.Destinatario = null;
                return false;
            }
            if (retorno) {
                this.EntityTela.Cpf = retorno.Cpf;
                this.EntityTela.Endereco = retorno.Endereco_Nome;
                this.EntityTela.Bairro = retorno.Bairro;
                this.EntityTela.Numero = retorno.Numero;
                this.EntityTela.Complemento = retorno.Complemento;
                this.EntityTela.Cep = retorno.Cep;
                this.EntityTela.Municipio = retorno.Cidade_D;
                this.EntityTela.Uf = retorno.Uf_D;
            }
            this.RefreshAngular();
            return false;
        }
        existente = false;
    };
    C_Declar.prototype.BloquearCamposDestinatario = function (flag) {
        this.txtEndereco.Enabled = !flag;
        this.txtNumero.Enabled = !flag;
        this.txtComplemento.Enabled = !flag;
        this.txtBairro.Enabled = !flag;
        this.txtCep.Enabled = !flag;
    };
    C_Declar.prototype.LimparDestinatario = function (entidade) {
        entidade.Destinatario = null;
        entidade.Cpf = "";
        entidade.Endereco = "";
        entidade.Bairro = "";
        entidade.Numero = "";
        entidade.Complemento = "";
        entidade.Cep = "";
        entidade.Municipio = "";
        entidade.Uf = "";
        this.BloquearCamposDestinatario(true);
    };
    C_Declar.prototype.OntxtDestinatarioLimpou = function () {
        this.lblCpf.LabelComponente.innerText = "";
        this.txtEndereco.Limpar();
        this.txtNumero.Limpar();
        this.txtComplemento.Limpar();
        this.txtBairro.Limpar();
        this.txtCep.Limpar();
        this.lblMunicipio.LabelComponente.innerText = "";
        this.lblEstado.LabelComponente.innerText = "";
        this.BloquearCamposDestinatario(false);
        this.txtDestinatario.Focus();
    };
    C_Declar.prototype.OnClickBotaoAdicionarProduto = function (s, e) {
        e.processOnServer = false;
        this.LimparProduto();
        if (this.mdProduto && this.mdProduto.ModalDialog) {
            this.mdProduto.ModalDialog.Show();
        }
        return false;
    };
    C_Declar.prototype.OnClickBtnImportarNFe = function (s, e) {
        e.processOnServer = false;
        this.LimparModalNFe();
        if (this.mdImportarNFe && this.mdImportarNFe.ModalDialog) {
            this.mdImportarNFe.ModalDialog.Show();
        }
        return false;
    };
    C_Declar.prototype.OnClickBtnImportarVendas = function (s, e) {
        e.processOnServer = false;
        this.LimparModalVenda();
        if (this.mdImportarVendas && this.mdImportarVendas.ModalDialog) {
            this.mdImportarVendas.ModalDialog.Show();
        }
        return false;
    };
    C_Declar.prototype.OnClickLimparNFe = function (s, e) {
        e.processOnServer = false;
        this.LimparModalNFe();
        return false;
    };
    C_Declar.prototype.LimparModalNFe = function () {
        this.cboEmpresaNFe.LimparSelecao();
        this.cboSituacaoNFe.SetSelectedIndex(0);
        this.txtPeriodoNFe.Iniciar();
        this.txtDestinatarioNFe.Limpar();
        this.txtNF.Limpar();
        this.NFeDeclaracao = [];
    };
    C_Declar.prototype.LimparModalVenda = function () {
        var data = new Date();
        this.txtDataInicialVenda.Date = data;
        this.txtDataFinalVenda.Date = data;
        this.cboTipoRelacaoVenda.SetSelectedIndex(0);
        this.txtVendaInicial.Limpar();
        this.txtVendaFinal.Limpar();
        this.RelacaoVendas = [];
    };
    C_Declar.prototype.LimparModalOrcamento = function () {
        this.txtCodOrcamento.Limpar();
        this.cboOrcamento.SetSelectedIndex(0);
        this.txtDataInicialOrcamento.Date = new Date();
        this.txtDataFinalOrcamento.Date = new Date();
        this.txtClienteOrcamento.Limpar();
        this.RelacaoOrcamento = [];
    };
    C_Declar.prototype.LimparModalOS = function () {
        this.txtCodOS.Limpar();
        this.cboSituacaoOS.SetSelectedIndex(0);
        this.txtDataInicialOS.Date = new Date();
        this.txtDataFinalOS.Date = new Date();
        this.txtClienteOS.Limpar();
        this.RelacaoOS = [];
    };
    C_Declar.prototype.LimparModalConsig = function () {
        this.txtCodConsig.Limpar();
        this.cboTipoConsig.SetSelectedIndex(0);
        this.txtDataInicialConsig.Date = new Date();
        this.txtDataFinalConsig.Date = new Date();
        this.txtClienteConsig.Limpar();
        this.RelacaoConsig = [];
    };
    C_Declar.prototype.OnClickGerarNFe = function (s, e) {
        e.processOnServer = false;
        var parametros;
        if (this.cboEmpresaNFe.GetValue() == 0) {
            MostrarAlerta("Empresa obrigatória!");
            return false;
        }
        if (!this.txtPeriodoNFe.textBoxCalendarioInicio.GetValue() || !this.txtPeriodoNFe.textBoxCalendarioFim.GetValue()) {
            MostrarAlerta("Período inválido. Preencha corretamente!");
            return false;
        }
        parametros = {
            dataInicial: this.txtPeriodoNFe.textBoxCalendarioInicio.GetValue(),
            dataFinal: this.txtPeriodoNFe.textBoxCalendarioFim.GetValue(),
            empresa: this.cboEmpresaNFe.GetValue(),
            situacao: (this.cboSituacaoNFe.GetValue() || 0),
            destinatario: (this.txtDestinatarioNFe.GetText() || 0),
            nf: (this.txtNF.GetText() || 0)
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGradeNFe", parametros);
        if (retorno.length <= 0) {
            MostrarAlerta("Nenhum registro encontrado!");
            this.NFeDeclaracao = [];
            return false;
        }
        this.NFeDeclaracao = retorno;
        this.RefreshAngular();
    };
    C_Declar.prototype.OnClickImportarNFe = function (s, e) {
        e.processOnServer = false;
        var retorno = this.grdNFe.GetSelectedRowsData;
        var produtos;
        var parametros;
        var lista = this.ProdutosDeclaracao;
        var empresa = this.EntityTela.Empresa;
        var destinatario = this.EntityTela.Destinatario;
        //Validar se as notas que estão sendo importadas são da mesma empresa e do mesmo destinatário
        for (var j = 0; j <= retorno.length - 1; j++) {
            if (!empresa) {
                empresa = retorno[j]['Codigo_Empresa'];
            }
            if (!destinatario && retorno[j]['CodigoPessoa']) {
                destinatario = retorno[j]['CodigoPessoa'];
            }
            if (empresa != retorno[j]['Codigo_Empresa'] ||
                (destinatario && retorno[j]['CodigoPessoa'] && destinatario != retorno[j]['CodigoPessoa'])) {
                MostrarAlerta("Apenas notas de mesma empresa e destinatário poderão ser importadas simultaneamente");
                return false;
            }
        }
        for (var i = 0; i <= retorno.length - 1; i++) {
            this.produtosNF(retorno[i]['CodigoNF']);
        }
        this.EntityTela.Empresa = (this.EntityTela.Empresa) ? this.EntityTela.Empresa : empresa;
        this.EntityTela.Destinatario = (this.EntityTela.Destinatario) ? this.EntityTela.Destinatario : destinatario;
        this.mdImportarNFe.ModalDialog.Hide();
        this.LimparModalNFe();
    };
    C_Declar.prototype.produtosNF = function (NF) {
        var produtos;
        var parametros;
        var lista = this.ProdutosDeclaracao;
        parametros = {
            NF: NF
        };
        produtos = this.ExecutarFuncaoServerSideSynch("GetDadosProdutoNFe", parametros);
        for (var x = 0; x <= produtos.length - 1; x++) {
            parametros = {
                codProduto: produtos[x]['Produto']
            };
            var produto = this.ExecutarFuncaoServerSideSynch("GetDadosProduto", parametros);
            this.ItemGrid = {};
            this.ItemGrid.Numero_Item = (lista) ? lista.Max("Numero_Item") + 1 : 1;
            this.ItemGrid.Produto = produtos[x]['Produto'];
            this.ItemGrid.Descricao = produto.Nome;
            this.ItemGrid.Peso_Item = produto.Peso_Produto;
            this.ItemGrid.Valor_Unitario = produtos[x]['Unitario'];
            this.ItemGrid.Total = produtos[x]['Total'];
            this.ItemGrid.Qtde = produtos[x]['Quantidade'];
            this.ItemGrid.Codigo_Fiscal_Nf = NF;
            lista.push(this.ItemGrid);
        }
        this.ProdutosDeclaracao = lista;
        this.CalculaPesoTotal([]);
        this.RefreshAngular();
    };
    C_Declar.prototype.OnClickBotaoGerarVendas = function (s, e) {
        e.processOnServer = false;
        var parametros;
        if (this.cboTipoRelacaoVenda.GetValue() == 0) {
            MostrarAlerta("Tipo de Relação obrigatória!");
            return false;
        }
        if (!this.txtDataInicialVenda.Date || !this.txtDataFinalVenda.Date) {
            MostrarAlerta("Período inválido. Preencha corretamente!");
            return false;
        }
        parametros = {
            empresa: this.EntityTela.Empresa,
            dataInicial: this.txtDataInicialVenda.Date,
            dataFinal: this.txtDataFinalVenda.Date,
            tipoRelacao: this.cboTipoRelacaoVenda.GetValue(),
            vendaInicial: this.txtVendaInicial.GetText().CNum(),
            vendaFinal: this.txtVendaFinal.GetText().CNum()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GerarVendas", parametros);
        if (retorno.length <= 0) {
            MostrarAlerta("Nenhum registro encontrado!");
            this.RelacaoVendas = [];
            return false;
        }
        this.RelacaoVendas = retorno;
        this.RefreshAngular();
    };
    C_Declar.prototype.OnClickImportarVendas = function (s, e) {
        e.processOnServer = false;
        var retorno = this.grdImportarVenda.GetSelectedRowsData;
        var parametros;
        var venda_item;
        var produtos;
        var lista = this.ProdutosDeclaracao;
        var empresa = this.EntityTela.Empresa;
        var destinatario = this.EntityTela.Destinatario;
        //Valida se está importando vendas da mesma empresa e do mesmo destinatário
        for (var j = 0; j <= retorno.length - 1; j++) {
            if (!empresa) {
                empresa = retorno[j]['Empresa'];
            }
            if (!destinatario && retorno[j]['Destinatario']) {
                destinatario = retorno[j]['Destinatario'];
            }
            if (empresa != retorno[j]['Empresa'] ||
                (destinatario && retorno[j]['Destinatario'] && destinatario != retorno[j]['Destinatario'])) {
                MostrarAlerta("Apenas vendas de mesma empresa e cliente poderão ser importadas simultaneamente");
                return false;
            }
        }
        for (var i = 0; i <= retorno.length - 1; i++) {
            parametros = {
                Venda: retorno[i]['Venda']
            };
            venda_item = this.ExecutarFuncaoServerSideSynch("GetDadosItensVenda", parametros);
            for (var x = 0; x <= venda_item.length - 1; x++) {
                parametros = {
                    codProduto: venda_item[x]['Produto']
                };
                var produto = this.ExecutarFuncaoServerSideSynch("GetDadosProduto", parametros);
                this.ItemGrid = {};
                this.ItemGrid.Numero_Item = (lista) ? lista.Max("Numero_Item") + 1 : 1;
                this.ItemGrid.Produto = venda_item[x]['Produto'];
                this.ItemGrid.Descricao = produto.Nome;
                this.ItemGrid.Peso_Item = produto.Peso_Produto;
                this.ItemGrid.Valor_Unitario = venda_item[x]['Valor_Unitario'];
                this.ItemGrid.Total = venda_item[x]['Valor_Total'];
                this.ItemGrid.Qtde = venda_item[x]['Quantidade'];
                this.ItemGrid.Codigo_Venda = retorno[i]['Venda'];
                lista.push(this.ItemGrid);
            }
        }
        this.EntityTela.Empresa = (this.EntityTela.Empresa) ? this.EntityTela.Empresa : empresa;
        this.EntityTela.Destinatario = (this.EntityTela.Destinatario) ? this.EntityTela.Destinatario : destinatario;
        this.ProdutosDeclaracao = lista;
        this.CalculaPesoTotal([]);
        this.LimparModalVenda();
        this.RefreshAngular();
        this.mdImportarVendas.ModalDialog.Hide();
    };
    C_Declar.prototype.OnClickBotaoImportOrcamento = function (s, e) {
        e.processOnServer = false;
        this.LimparModalOrcamento();
        if (this.mdOrcamento && this.mdOrcamento.ModalDialog) {
            this.mdOrcamento.ModalDialog.Show();
            this.grdOrcamento.AjustarWidth();
        }
        return false;
    };
    C_Declar.prototype.OnClickBotaoGerarOrcamento = function (s, e) {
        e.processOnServer = false;
        var retorno;
        var parametros;
        if (!this.txtDataInicialOrcamento.Date || !this.txtDataFinalOrcamento.Date) {
            MostrarAlerta("Período inválido. Preencha corretamente!");
            return false;
        }
        parametros = {
            empresa: this.EntityTela.Empresa,
            dataInicial: this.txtDataInicialOrcamento.Date,
            dataFinal: this.txtDataFinalOrcamento.Date,
            codOrcamento: this.txtCodOrcamento.GetText().CNum(),
            situacao: this.cboOrcamento.GetValue(),
            codCliente: this.txtClienteOrcamento.GetText().CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GerarOrcamentos", parametros);
        if (retorno.length <= 0) {
            MostrarAlerta("Nenhum registro encontrado.");
            this.RelacaoOrcamento = [];
            return false;
        }
        this.RelacaoOrcamento = retorno;
        return false;
    };
    C_Declar.prototype.SelecionouOrcamento = function (s, e) {
        var linha = e.data;
        if (linha) {
            if (this.ImportarOrcamento(linha) == false) {
                return;
            }
            this.txtDataInicialOrcamento.Date = new Date();
            this.txtDataFinalOrcamento.Date = new Date();
            this.txtCodOrcamento.SetText("");
            this.cboOrcamento.SetSelectedIndex(0);
            this.txtClienteOrcamento.SetText("");
        }
        return false;
    };
    C_Declar.prototype.ImportarOrcamento = function (dados) {
        var retorno = JSON.stringify(dados);
        var parametros;
        var lista = this.ProdutosDeclaracao;
        var empresa = this.EntityTela.Empresa;
        var destinatario = this.EntityTela.Destinatario;
        parametros = {
            strJson: retorno
        };
        var orcamentosImportados = this.ExecutarFuncaoServerSideSynch("RetornaOrcamentosImportadosJson", parametros);
        var Destinatario = orcamentosImportados.Cliente.CNum();
        if (!empresa) {
            empresa = orcamentosImportados.Empresa;
        }
        if (!destinatario && orcamentosImportados.Destinatario) {
            destinatario = orcamentosImportados.Destinatario;
        }
        if (empresa != orcamentosImportados.Empresa ||
            (destinatario && orcamentosImportados.Destinatario && destinatario != orcamentosImportados.Destinatario)) {
            MostrarAlerta("Apenas orçamentos de mesma empresa e cliente poderão ser importadas simultaneamente");
            return false;
        }
        parametros = {
            orcamento: orcamentosImportados.Orcamento.toString()
        };
        var listaProdutos = this.ExecutarFuncaoServerSideSynch("RetornarProdutosOrcamento", parametros);
        for (var i = 0; i <= listaProdutos.length - 1; i++) {
            listaProdutos[i].Numero_Item = (lista) ? lista.Max("Numero_Item") + 1 : 1;
            listaProdutos[i].Codigo_Orcamento = orcamentosImportados.Orcamento;
            lista.push(listaProdutos[i]);
        }
        this.ProdutosDeclaracao = lista;
        this.CalculaPesoTotal([]);
        this.EntityTela.Empresa = (this.EntityTela.Empresa) ? this.EntityTela.Empresa : empresa;
        this.EntityTela.Destinatario = (this.EntityTela.Destinatario) ? this.EntityTela.Destinatario : destinatario;
        this.RelacaoOrcamento = [];
        this.mdOrcamento.Hide();
        this.RefreshAngular();
        return true;
    };
    C_Declar.prototype.OnClickBotaoImportarOs = function (s, e) {
        e.processOnServer = false;
        this.LimparModalOS();
        if (this.mdOS && this.mdOS.ModalDialog) {
            this.mdOS.ModalDialog.Show();
            this.grdOS.AjustarWidth();
        }
        return false;
    };
    C_Declar.prototype.OnClickBotaoGerarOS = function (s, e) {
        e.processOnServer = false;
        var retorno;
        var parametros;
        if (!this.txtDataInicialOS.Date || !this.txtDataFinalOS.Date) {
            MostrarAlerta("Período inválido. Preencha corretamente!");
            return false;
        }
        parametros = {
            empresa: this.EntityTela.Empresa,
            dataInicial: this.txtDataInicialOS.Date,
            dataFinal: this.txtDataFinalOS.Date,
            codOS: this.txtCodOS.GetText().CNum(),
            situacao: this.cboSituacaoOS.GetValue(),
            codCliente: this.txtClienteOS.GetText().CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GerarOS", parametros);
        if (retorno.length <= 0) {
            MostrarAlerta("Nenhum registro encontrado.");
            this.RelacaoOS = [];
            return false;
        }
        this.RelacaoOS = retorno;
        return false;
    };
    C_Declar.prototype.SelecionouOS = function (s, e) {
        var linha = e.data;
        if (linha) {
            if (this.ImportarOS(linha) == false) {
                return;
            }
            this.txtDataInicialOS.Date = new Date();
            this.txtDataFinalOS.Date = new Date();
            this.txtCodOS.SetText("");
            this.cboSituacaoOS.SetSelectedIndex(0);
            this.txtClienteOS.SetText("");
        }
        return false;
    };
    C_Declar.prototype.ImportarOS = function (dados) {
        var retorno = JSON.stringify(dados);
        var parametros;
        var lista = this.ProdutosDeclaracao;
        var empresa = this.EntityTela.Empresa;
        var destinatario = this.EntityTela.Destinatario;
        parametros = {
            strJson: retorno
        };
        var osImportados = this.ExecutarFuncaoServerSideSynch("RetornaOSImportadosJson", parametros);
        var Destinatario = osImportados.Cliente.CNum();
        if (!empresa) {
            empresa = osImportados.Empresa;
        }
        if (!destinatario && osImportados.Destinatario) {
            destinatario = osImportados.Destinatario;
        }
        if (empresa != osImportados.Empresa ||
            (destinatario && osImportados.Destinatario && destinatario != osImportados.Destinatario)) {
            MostrarAlerta("Apenas orçamentos de mesma empresa e cliente poderão ser importadas simultaneamente");
            return false;
        }
        parametros = {
            OS: osImportados.Codigo_OS
        };
        var listaProdutos = this.ExecutarFuncaoServerSideSynch("RetornarProdutosOS", parametros);
        if (listaProdutos.length > 0) {
            for (var i = 0; i <= listaProdutos.length - 1; i++) {
                listaProdutos[i].Numero_Item = (lista) ? lista.Max("Numero_Item") + 1 : 1;
                listaProdutos[i].Codigo_OS = osImportados.Codigo_OS;
                lista.push(listaProdutos[i]);
            }
            this.ProdutosDeclaracao = lista;
            this.CalculaPesoTotal([]);
            this.EntityTela.Empresa = (this.EntityTela.Empresa) ? this.EntityTela.Empresa : empresa;
            this.EntityTela.Destinatario = (this.EntityTela.Destinatario) ? this.EntityTela.Destinatario : destinatario;
            this.RelacaoOS = [];
            this.mdOS.Hide();
            this.RefreshAngular();
        }
        else {
            MostrarAlerta("Para essa ordem de serviço não foi encontrado nenhum produto.");
            return false;
        }
        return true;
    };
    C_Declar.prototype.OnClickBotaoImportarConsig = function (s, e) {
        e.processOnServer = false;
        this.LimparModalConsig();
        if (this.mdConsig && this.mdConsig.ModalDialog) {
            this.mdConsig.ModalDialog.Show();
            this.grdConsig.AjustarWidth();
        }
        return false;
    };
    C_Declar.prototype.OnClickBotaoGerarConsig = function (s, e) {
        e.processOnServer = false;
        var retorno;
        var parametros;
        if (!this.txtDataInicialConsig.Date || !this.txtDataFinalConsig.Date) {
            MostrarAlerta("Período inválido. Preencha corretamente!");
            return false;
        }
        parametros = {
            dataInicial: this.txtDataInicialConsig.Date,
            dataFinal: this.txtDataFinalConsig.Date,
            codigo: this.txtCodConsig.GetText().CNum(),
            tipo: this.cboTipoConsig.GetValue(),
            codCliente: this.txtClienteConsig.GetText().CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GerarConsig", parametros);
        if (retorno.length <= 0) {
            MostrarAlerta("Nenhum registro encontrado.");
            this.RelacaoConsig = [];
            return false;
        }
        this.RelacaoConsig = retorno;
        return false;
    };
    C_Declar.prototype.SelecionouConsig = function (s, e) {
        var linha = e.data;
        if (linha) {
            if (this.ImportarConsig(linha) == false) {
                return;
            }
            this.txtDataInicialConsig.Date = new Date();
            this.txtDataFinalConsig.Date = new Date();
            this.txtCodConsig.SetText("");
            this.cboTipoConsig.SetSelectedIndex(0);
            this.txtClienteConsig.SetText("");
        }
        return false;
    };
    C_Declar.prototype.ImportarConsig = function (dados) {
        var retorno = JSON.stringify(dados);
        var parametros;
        var lista = this.ProdutosDeclaracao;
        var destinatario = this.EntityTela.Destinatario;
        parametros = {
            strJson: retorno
        };
        var consigImportados = this.ExecutarFuncaoServerSideSynch("RetornaConsigImportadosJson", parametros);
        if (!destinatario && consigImportados.Destinatario) {
            destinatario = consigImportados.Destinatario;
        }
        if (destinatario && consigImportados.Destinatario && destinatario != consigImportados.Destinatario) {
            MostrarAlerta("Apenas consignações de mesmo cliente poderão ser importadas simultaneamente");
            return false;
        }
        parametros = {
            codigo: consigImportados.Codigo_Consig
        };
        var listaProdutos = this.ExecutarFuncaoServerSideSynch("RetornarProdutosConsig", parametros);
        if (listaProdutos.length > 0) {
            for (var i = 0; i <= listaProdutos.length - 1; i++) {
                listaProdutos[i].Numero_Item = (lista) ? lista.Max("Numero_Item") + 1 : 1;
                listaProdutos[i].Codigo_Consig = consigImportados.Codigo_Consig;
                lista.push(listaProdutos[i]);
            }
            this.ProdutosDeclaracao = lista;
            this.CalculaPesoTotal([]);
            this.EntityTela.Destinatario = (this.EntityTela.Destinatario) ? this.EntityTela.Destinatario : destinatario;
            this.RelacaoConsig = [];
            this.mdConsig.Hide();
            this.RefreshAngular();
        }
        else {
            MostrarAlerta("Para essa consignação não foi encontrado nenhum produto.");
            return false;
        }
        return true;
    };
    C_Declar.prototype.OnDepoisBuscarExistente = function (Entidade) {
        existente = true;
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        this.BloquearCamposDestinatario(false);
        this.PreencherGrade();
    };
    C_Declar.prototype.OnCheckConsiderar_Peso_ProdutoChange = function () {
        if (!this.chkConsiderar_Peso_Produto.Checked) {
            this.txtPeso_Total.Enabled = true;
        }
        else {
            this.txtPeso_Total.Enabled = false;
            this.CalculaPesoTotal([]);
        }
    };
    C_Declar.prototype.CalcularSubTotal = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        var Item = this.Item;
        var Qtde = (Item.Qtde) ? Item.Qtde : 0;
        var Valor_Unitario = (Item.Valor_Unitario) ? Item.Valor_Unitario : 0;
        if (Qtde != 0 && Valor_Unitario != 0) {
            var SubTotal = Qtde * Valor_Unitario;
            this.Item.Total = SubTotal;
            this.txtSubTotal.SetText(SubTotal.Format(ValoresSismoura.CasasDecimaisValor).toString());
        }
        else {
            this.Item.Total = 0;
            this.txtSubTotal.SetText("0,000");
        }
    };
    C_Declar.prototype.OnPesquisouDadosProduto = function (s, e) {
        var parametros;
        var retorno;
        if (!this.Item.Produto || this.Item.Produto <= 0) {
            this.LimparProduto();
            return false;
        }
        parametros = {
            codProduto: this.Item.Produto,
            descricao: ""
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetDadosProduto", parametros);
        if (!retorno || retorno.Inativo) {
            MostrarAlerta("Produto não encontrado(a) ou inativo(a)");
            this.txtProduto.Focus();
            this.LimparProduto();
            return false;
        }
        //this.Item.Qtde = 1;
        this.Item.Qtde = 0;
        this.Item.Valor_Unitario = retorno.Preco_Produto;
        this.Item.Peso_Item = retorno.Peso_Produto;
        this.Item.Descricao = retorno.Nome;
        //this.txtQtde.SetText("1,000");
        this.txtValorUnitario.SetText(retorno.Preco_Produto.Format(ValoresSismoura.CasasDecimaisValor).toString());
        this.txtSubTotal.SetText(retorno.Preco_Produto.Format(ValoresSismoura.CasasDecimaisValor).toString());
    };
    C_Declar.prototype.LimparProduto = function () {
        this.Item = {};
        this.RefreshAngular();
    };
    C_Declar.prototype.OnClickOkBtnProduto = function (s, e) {
        e.processOnServer = false;
        var item = this.Item;
        var entidade = this.GetScope().Entity;
        if (item.Produto == null) {
            return;
        }
        if (item.Qtde <= 0) {
            MostrarMensagemCampoObrigatorio("O campo quantidade deve ser maior que zero!");
            return;
        }
        var lista = this.ProdutosDeclaracao;
        if (!item.Numero_Item) {
            item.Numero_Item = lista.Max("Numero_Item") + 1;
            lista.push(item);
        }
        else {
            lista.forEach(function (element, index) {
                if (element.Numero_Item === item.Numero_Item) {
                    lista[index] = item;
                    return;
                }
            });
        }
        this.ProdutosDeclaracao = lista;
        this.LimparProduto();
        this.CalculaPesoTotal([]);
    };
    C_Declar.prototype.OnClickMenuProduto = function (s, e) {
        e.processOnServer = false;
        this.mdProduto.ModalDialog.Hide();
    };
    C_Declar.prototype.OnEditouProduto = function (s, e) {
        this.CalculaPesoTotal(e);
    };
    C_Declar.prototype.CalculaPesoTotal = function (e) {
        var grdProdutos = this.ProdutosDeclaracao;
        var PesoTotal = 0;
        for (var i = 0; i <= grdProdutos.length - 1; i++) {
            var qtde = grdProdutos[i]['Qtde'];
            if ((i + 1) == e.key) {
                PesoTotal += (qtde * e.newData.Peso_Item);
            }
            else {
                PesoTotal += (qtde * grdProdutos[i]['Peso_Item']);
            }
        }
        this.EntityTela.Peso_Total = PesoTotal;
        this.RefreshAngular();
    };
    C_Declar.prototype.OnAntesGravarDeclaracao = function (s, e) {
        var produtos = "";
        var NF = "";
        var venda = "";
        var Orcamento = "";
        var OS = "";
        var Consig = "";
        produtos = JSON.stringify(this.ProdutosDeclaracao);
        e.ParametrosAdicionais.Parametros.push(this.CriarItemParametro("produtos", produtos));
        return true;
    };
    C_Declar.prototype.ImprimirDeclaracao = function () {
        try {
            if (!this.EntityTela || !this.EntityTela.Codigo) {
                MostrarAlerta("Informe uma declaração cadastrada");
                return;
            }
            var parametros = {
                codigo: this.EntityTela.Codigo,
                empresa: this.EntityTela.Empresa,
                tituloRelatorio: "Cadastro de declaração de conteúdo"
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PrepararImpressao", parametros);
            if (!String.IsNullOrWhiteSpace(retorno)) {
                MostrarAlerta(retorno);
            }
            else {
                AbrirReport("~/Report/Fixos/", "DeclaracaoConteudo.REPX");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_Declar;
}(MouraPageCadastroAngular));
var c_Declar = new C_Declar();
//# sourceMappingURL=C_Declar.js.map