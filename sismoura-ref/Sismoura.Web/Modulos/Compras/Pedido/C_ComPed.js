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
var C_ComPed = /** @class */ (function (_super) {
    __extends(C_ComPed, _super);
    function C_ComPed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ComPed.prototype, "hdnAprovado", {
        get: function () {
            return $('#hdnAprovado')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "lblUltimoPedido", {
        get: function () {
            return window['lblUltimoPedido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "lblDuplicataMsg", {
        get: function () {
            return window['lblDuplicataMsg_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "lblEstoqueAtual", {
        get: function () {
            return window['lblEstoqueAtual_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "lblProduto", {
        get: function () {
            return window['lblProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "lblTotalFinal", {
        get: function () {
            return window['lblTotalFinal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "cboDeposito", {
        get: function () {
            return window['cboDeposito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "cboSituacaoPedido", {
        get: function () {
            return window['cboSituacaoPedido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "btnCancelarDup", {
        get: function () {
            return window['btnCancelarDup_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "btnOkDuplicatas", {
        get: function () {
            return window['btnOkDuplicatas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtFornecedorD", {
        get: function () {
            return window['txtFornecedorD_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtDataEmissaoD", {
        get: function () {
            return window['txtDataEmissaoD_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtParcelas", {
        get: function () {
            return window['txtParcelas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtDescricaoProduto", {
        get: function () {
            return window['txtDescricaoProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtDias", {
        get: function () {
            return window['txtDias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "cboTipoDias", {
        get: function () {
            return window['cboTipoDias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtVencInicial", {
        get: function () {
            return window['txtVencInicial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtContaContabil", {
        get: function () {
            return window['txtContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "cboFormaPagamentoD", {
        get: function () {
            return window['cboFormaPagamentoD_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "cboDocMercantil", {
        get: function () {
            return window['cboDocMercantil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtNDocBancario", {
        get: function () {
            return window['txtNDocBancario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "Parcelas", {
        get: function () {
            return this.GetScope()["Parcelas"];
        },
        set: function (value) {
            this.GetScope()["Parcelas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "hdnPedido", {
        get: function () {
            return $('#hdnPedido')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "hdnFinalizado", {
        get: function () {
            return $('#hdnFinalizado')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "hdnFormaPagamento", {
        get: function () {
            return $('#hdnFormaPagamento')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "hdnProdutoSelecionado", {
        get: function () {
            return $('#hdnProdutoSelecionado')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtCotacao", {
        get: function () {
            return window['txtCotacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtFornecedor", {
        get: function () {
            return window['txtFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtEmail", {
        get: function () {
            return window['txtEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtFornecedorE", {
        get: function () {
            return window['txtFornecedorE_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "lblUltCompra", {
        get: function () {
            return window['lblUltCompra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtQuantidade", {
        get: function () {
            return window['txtQuantidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtPrecoCusto", {
        get: function () {
            return window['txtPrecoCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtDescontoUnitario", {
        get: function () {
            return window['txtDescontoUnitario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtDescontoUnitarioPorc", {
        get: function () {
            return window['txtDescontoUnitarioPorc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtICMS", {
        get: function () {
            return window['txtICMS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtIPIPorc", {
        get: function () {
            return window['txtIPIPorc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtIPI", {
        get: function () {
            return window['txtIPI_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "hdnEmpresa", {
        get: function () {
            return $('#hdnEmpresa')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "grdProdutos", {
        get: function () {
            return window['grdProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "grdParcelas", {
        get: function () {
            return window['grdParcelas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "Produtos", {
        get: function () {
            return this.GetScope()['Produtos'];
        },
        set: function (value) {
            this.GetScope()['Produtos'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "Produto", {
        get: function () {
            return this.GetScope()['Produto'];
        },
        set: function (value) {
            this.GetScope()['Produto'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtDescontoR", {
        get: function () {
            return window['txtDescontoR_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtDescontoPorc", {
        get: function () {
            return window['txtDescontoPorc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtDescontoPorc_2", {
        get: function () {
            return window['txtDescontoPorc_2_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtDescontoPorc_3", {
        get: function () {
            return window['txtDescontoPorc_3_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "btnDuplicatas", {
        get: function () {
            return window['btnDuplicatas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "btnFinalizarEntrega", {
        get: function () {
            return window['btnFinalizarEntrega_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "btnExportarArquivo", {
        get: function () {
            return window['btnExportarArquivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "btnAprovar", {
        get: function () {
            return window['btnAprovar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "btnEnviarEmail", {
        get: function () {
            return window['btnEnviarEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "btnImportarSolicitacao", {
        get: function () {
            return window[' btnImportarSolicitacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "btnPlanejamentoCompra", {
        get: function () {
            return window['btnPlanejamentoCompra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "hdnURLPlanejamento", {
        get: function () {
            return $('#hdnURLPlanejamento')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "btnImprimir", {
        get: function () {
            return window['btnImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "btnEstoque", {
        get: function () {
            return window['btnEstoque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "mdEstoque", {
        get: function () {
            return window['mdEstoque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "mdDuplicatas", {
        get: function () {
            return window['mdDuplicatas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "mdImportarSolicitacao", {
        get: function () {
            return window['mdImportarSolicitacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "grdDepositoEstoque", {
        get: function () {
            return window['grdDepositoEstoque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "btnImprimirApenasNChegaram", {
        get: function () {
            return window['btnImprimirApenasNChegaram_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "mdImprimirApenasNChegaram", {
        get: function () {
            return window['mdImprimirApenasNChegaram_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "grdImprimirApenasNChegaram", {
        get: function () {
            return window['grdImprimirApenasNChegaram_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "btnHistoricoProduto", {
        get: function () {
            return window['btnHistoricoProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "mdHistoricoProduto", {
        get: function () {
            return window['mdHistoricoProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "grdHistoricoDoProduto", {
        get: function () {
            return window['grdHistoricoDoProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "lstTipoHistorico", {
        get: function () {
            return window['lstTipoHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "chkPedidosAprovados", {
        get: function () {
            return window['chkPedidosAprovados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "chkPedidosVinculadosEntradaProduto", {
        get: function () {
            return window['chkPedidosVinculadosEntradaProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "lblHistoricoProduto", {
        get: function () {
            return window['lblHistoricoProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtValorFrete", {
        get: function () {
            return window['txtValorFrete_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "cboFormaPagamento", {
        get: function () {
            return window["cboFormaPagamento_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "lblNotasJaChegaram", {
        get: function () {
            return window['lblNotasJaChegaram_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "btnImportarProdutos", {
        get: function () {
            return window['btnImportarProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "mdImpProdCompra", {
        // Modal para importar produtos
        get: function () {
            return window['mdImpProdCompra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "cboDepositoImp", {
        get: function () {
            return window['cboDepositoImp_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtFornecedorImp", {
        get: function () {
            return window['txtFornecedorImp_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtGrupoImp", {
        get: function () {
            return window['txtGrupoImp_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtSubGrupoImp", {
        get: function () {
            return window['txtSubGrupoImp_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtReferenciaImp", {
        get: function () {
            return window['txtReferenciaImp_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtLinhaImp", {
        get: function () {
            return window['txtLinhaImp_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtCorImp", {
        get: function () {
            return window['txtCorImp_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "txtMarcaImp", {
        get: function () {
            return window['txtMarcaImp_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "btnGerarImp", {
        get: function () {
            return window['btnGerarImp_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "grdImportarProdutos", {
        get: function () {
            return window['grdImportarProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "btnConcluirImp", {
        get: function () {
            return window['btnConcluirImp_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "ImpProd", {
        get: function () {
            if (!this.GetScope()["ImpProd"]) {
                return null;
            }
            else {
                return this.GetScope()["ImpProd"];
            }
        },
        set: function (value) {
            this.GetScope()["ImpProd"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComPed.prototype, "ImpProds", {
        get: function () {
            if (!this.GetScope()["ImpProds"]) {
                return [];
            }
            else {
                return this.GetScope()["ImpProds"];
            }
        },
        set: function (value) {
            this.GetScope()["ImpProds"] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_ComPed.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.cboDeposito) {
            adicionarEventoDevExpress(this.cboDeposito.Combo.SelectedIndexChanged, this.OnComboBoxDepositoChange, this);
        }
        if (this.cboFormaPagamento) {
            adicionarEventoDevExpress(this.cboFormaPagamento.Combo.SelectedIndexChanged, this.OnComboBoxFormaPagamentoChange, this);
        }
        if (this.txtContaContabil) {
            adicionarEventoMoura(this.txtContaContabil.Procurou, this.OnPesquisouContaContabil, this);
            this.txtContaContabil.LimparParametros();
            this.txtContaContabil.AddParametro("Sintetico", "N");
        }
        if (this.txtProduto) {
            adicionarEventoMoura(this.txtProduto.Procurou, this.OnPesquisouDadosProduto, this);
            this.txtProduto.LimparParametros();
            //this.txtProduto.AddParametro("Inativo_Empresa", "S");
            //if (this.EntityTela && this.EntityTela.Empresa_Destino) {
            //    this.txtProduto.AddParametro("Codigo_Empresa", this.EntityTela.Empresa_Destino.toString());
            //}
            if (this.cboDeposito) {
                if (this.cboDeposito.GetValue() != null) {
                    this.txtProduto.AddParametro("Codigo_Deposito", this.cboDeposito.GetValue().toString());
                }
            }
            if (this.txtFornecedor) {
                this.txtProduto.AddParametro("Codigo_Fornecedor", this.txtFornecedor.GetText().toString());
            }
            adicionarEventoMoura(this.txtProduto.TextChanged, this.OntxtProdutoChange, this);
        }
        if (this.txtFornecedor) {
            adicionarEventoMoura(this.txtFornecedor.Procurou, this.OnPesquisouFornecedor, this);
        }
        if (this.txtFornecedorE) {
            adicionarEventoMoura(this.txtFornecedorE.Procurou, this.OnPesquisouFornecedorE, this);
        }
        if (this.txtCotacao) {
            adicionarEventoMoura(this.txtCotacao.Procurou, this.OnPesquisouCotacao, this);
        }
        if (this.grdProdutos) {
            adicionarEventoMoura(this.grdProdutos.SetouItem, this.OnSetouItemProduto, this);
            adicionarEventoMoura(this.grdProdutos.LimpouItem, this.OnLimpouItemProduto, this);
            adicionarEventoMoura(this.grdProdutos.ItemAdicionado, this.OnAdiciouItemProduto, this);
            adicionarEventoMoura(this.grdProdutos.AdicionandoItem, this.OnAdicionandoItemProduto, this);
            adicionarEventoMoura(this.grdProdutos.Validando, this.OnValidandoItemProduto, this);
            adicionarEventoMoura(this.grdProdutos.ExcluindoItem, this.OnExcluindoItemProduto, this);
            adicionarEventoMoura(this.grdProdutos.SelecionandoItem, this.OnGrdProdutosSelecionouItem, this);
            adicionarEventoMoura(this.grdProdutos.AlterandoItem, this.OnGrdProdutosSelecionouItem, this);
            adicionarEventoMoura(this.grdProdutos.ItemExcluido, this.onItemGridExcluiuSucesso, this);
        }
        if (this.grdParcelas) {
            adicionarEventoMoura(this.grdParcelas.EditouItemGrade, this.OnDepoisEditarItem, this);
        }
        //if (this.txtPrecoCusto) {
        //    adicionarEventoMoura(this.txtPrecoCusto.TextChanged, this.OnTxtPrecoCustoChange, this);
        //}
        //if (this.txtDescontoUnitario) {
        //    adicionarEventoMoura(this.txtDescontoUnitario.TextChanged, this.OnTxtDescontoUnitarioChange, this);
        //}
        //if (this.txtDescontoUnitarioPorc && this.txtDescontoUnitario) {
        //    adicionarEventoMoura(this.txtDescontoUnitarioPorc.TextChanged, this.OnTxtDescontoUnitarioPorcChange, this);
        //}
        //if (this.txtIPI) {
        //    adicionarEventoMoura(this.txtIPI.TextChanged, this.OnTxtIPIChange, this);
        //}
        //if (this.txtIPIPorc && this.txtIPI) {
        //    adicionarEventoMoura(this.txtIPIPorc.TextChanged, this.OnTxtIPIPorcChange, this);
        //}
        if (this.txtDescontoR) {
            adicionarEventoMoura(this.txtDescontoR.TextChanged, this.OnTxtDescontoRChange, this);
        }
        if (this.txtDescontoPorc) {
            adicionarEventoMoura(this.txtDescontoPorc.TextChanged, this.OnTxtDescontoPorcChange, this);
        }
        if (this.btnImprimir) {
            adicionarEventoMoura(this.btnImprimir.Click, this.OnClickImprimir, this);
        }
        if (this.btnExportarArquivo) {
            adicionarEventoMoura(this.btnExportarArquivo.Click, this.OnClickExportar, this);
        }
        if (this.btnPlanejamentoCompra) {
            adicionarEventoMoura(this.btnPlanejamentoCompra.Click, this.OnClickPlanejamentoEstoque, this);
        }
        if (this.btnFinalizarEntrega) {
            adicionarEventoMoura(this.btnFinalizarEntrega.Click, this.OnClickFinalizar, this);
        }
        if (this.btnAprovar) {
            adicionarEventoMoura(this.btnAprovar.Click, this.OnClickAprovar, this);
        }
        if (this.btnImportarSolicitacao) {
            adicionarEventoMoura(this.btnImportarSolicitacao.Click, this.OnClickImportarSolicitacao, this);
        }
        if (this.btnImprimir) {
            adicionarEventoMoura(this.btnImprimir.Click, this.OnClickImprimir, this);
        }
        if (this.btnEstoque) {
            adicionarEventoMoura(this.btnEstoque.Click, this.OnClickEstoque, this);
        }
        if (this.btnDuplicatas) {
            adicionarEventoMoura(this.btnDuplicatas.Click, this.OnClickDuplicata, this);
        }
        if (this.btnCancelarDup) {
            adicionarEventoMoura(this.btnCancelarDup.Click, this.OnClickCancelarDuplicata, this);
        }
        if (this.btnOkDuplicatas) {
            adicionarEventoMoura(this.btnOkDuplicatas.Click, this.OnClickOKDuplicata, this);
        }
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.OnClickGerarDuplicata, this);
        }
        if (this.btnImprimirApenasNChegaram) {
            adicionarEventoMoura(this.btnImprimirApenasNChegaram.Click, this.OnClickImprimirApenasNChegaram, this);
        }
        if (this.btnHistoricoProduto) {
            adicionarEventoMoura(this.btnHistoricoProduto.Click, this.OnClickHistoricoProduto, this);
        }
        if (this.lstTipoHistorico) {
            adicionarEventoMoura(this.lstTipoHistorico.SelectionChanged, this.OnlstTipoHistoricoChange, this);
        }
        if (this.chkPedidosAprovados) {
            adicionarEventoMoura(this.chkPedidosAprovados.CheckChanged, this.OnCheckPedidosAprovadosChange, this);
        }
        if (this.chkPedidosVinculadosEntradaProduto) {
            adicionarEventoMoura(this.chkPedidosVinculadosEntradaProduto.CheckChanged, this.OnCheckPedidosVinculadosChange, this);
        }
        if (this.txtValorFrete) {
            adicionarEventoMoura(this.txtValorFrete.TextChanged, this.OnTxtValorFreteChange, this);
        }
        if (this.ParametrosTela.codigo) {
            setTimeout($.proxy(function () { this.OnAtualizouID(this.ParametrosTela.codigo.CNum(), 0, this.GetScope()); }, this), 1000);
        }
        if (this.cboTipoDias) {
            adicionarEventoDevExpress(this.cboTipoDias.Combo.SelectedIndexChanged, this.OnComboBoxFormaPagamentoChange, this);
            adicionarEventoDevExpress(this.cboTipoDias.Combo.SelectedIndexChanged, this.OnComboBoxTipoDiasChange, this);
        }
        if (this.btnImportarProdutos) {
            adicionarEventoMoura(this.btnImportarProdutos.Click, this.OnClicouImportarProdutos, this);
        }
        if (this.btnGerarImp) {
            adicionarEventoMoura(this.btnGerarImp.Click, this.OnClicouGerarImportarProdutos, this);
        }
        if (this.btnConcluirImp) {
            adicionarEventoMoura(this.btnConcluirImp.Click, this.OnClicouConcluirImportarProdutos, this);
        }
        if (this.grdImportarProdutos) {
            adicionarEventoMoura(this.grdImportarProdutos.Validando, this.OnValidandoGrdImportar, this);
        }
        if (this.mdImpProdCompra) {
            adicionarEventoMoura(this.mdImpProdCompra.Fechou, this.OnFechouMdImportar, this);
        }
    };
    C_ComPed.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().OnTxtDescontoUnitarioChange) {
            this.GetScope().OnTxtDescontoUnitarioChange = $.proxy(this.OnTxtDescontoUnitarioChange, this);
            var tela = this;
            this.GetScope().$watch(function (scope) {
                if (tela.GetScope()["Produto"] && tela.GetScope()["Produto"].Desconto_Unitario != undefined) {
                    return tela.GetScope()["Produto"].Desconto_Unitario;
                }
            }, this.GetScope().OnTxtDescontoUnitarioChange);
        }
        if (!this.GetScope().OnTxtDescontoUnitarioPorcChange) {
            this.GetScope().OnTxtDescontoUnitarioPorcChange = $.proxy(this.OnTxtDescontoUnitarioPorcChange, this);
            var tela = this;
            this.GetScope().$watch(function (scope) {
                if (tela.GetScope()["Produto"] && tela.GetScope()["Produto"].Desconto_Unitario_Porcentagem != undefined) {
                    return tela.GetScope()["Produto"].Desconto_Unitario_Porcentagem;
                }
            }, this.GetScope().OnTxtDescontoUnitarioPorcChange);
        }
        if (!this.GetScope().OnTxtPrecoCustoChange) {
            this.GetScope().OnTxtPrecoCustoChange = $.proxy(this.OnTxtPrecoCustoChange, this);
            var tela = this;
            this.GetScope().$watch(function (scope) {
                if (tela.GetScope()["Produto"] && tela.GetScope()["Produto"].Preco_Custo != undefined) {
                    return tela.GetScope()["Produto"].Preco_Custo;
                }
            }, this.GetScope().OnTxtPrecoCustoChange);
        }
        if (!this.GetScope().OnTxtIPIChange) {
            this.GetScope().OnTxtIPIChange = $.proxy(this.OnTxtIPIChange, this);
            var tela = this;
            this.GetScope().$watch(function (scope) {
                if (tela.GetScope()["Produto"] && tela.GetScope()["Produto"].Ipi != undefined) {
                    return tela.GetScope()["Produto"].Ipi;
                }
            }, this.GetScope().OnTxtIPIChange);
        }
        if (!this.GetScope().OnTxtIPIPorcChange) {
            this.GetScope().OnTxtIPIPorcChange = $.proxy(this.OnTxtIPIPorcChange, this);
            var tela = this;
            this.GetScope().$watch(function (scope) {
                if (tela.GetScope()["Produto"] && tela.GetScope()["Produto"].Ipi_Porcentagem != undefined) {
                    return tela.GetScope()["Produto"].Ipi_Porcentagem;
                }
            }, this.GetScope().OnTxtIPIPorcChange);
        }
        if (!this.GetScope().onMudouComboEmpresa) {
            this.GetScope().onMudouComboEmpresa = $.proxy(this.OnComboBoxEmpresaChange, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Empresa_Destino; }, this.GetScope().onMudouComboEmpresa);
        }
        if (this.txtProduto) {
            this.alterarBotaoEstoque(this.txtProduto.GetText().CNum() == 0);
        }
        setTimeout($.proxy(function () { _this.PreencherComboFormaPagamento(_this.EntityTela); }, this), 500);
        this.LimparCamposHistoricoProduto();
        var parametros;
        this.alterarBotaoEmail(this.ExecutarFuncaoServerSideSynch("Pedido_Compra_PDF", parametros));
    };
    C_ComPed.prototype.OnGravouSucesso = function (s, e) {
        this.AtualizarUltimoPedido();
    };
    C_ComPed.prototype.OnExcluiuSucesso = function (s, e) {
    };
    C_ComPed.prototype.SelecionarRegistro = function (s, e) {
        this.PreencherEntidade(e.CodigoSelecionado);
    };
    C_ComPed.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Empresa_Destino = ValoresSismoura.EmpresaPadraoUsuario;
        //this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        Entity.Desconto_Dinheiro = 0.0;
        Entity.Desconto_Porcentagem = 0.0;
        Entity.Desconto_Porcentagem2 = 0.0;
        Entity.Desconto_Porcentagem3 = 0.0;
        Entity.Valor_Frete = 0.0;
        Entity.Situacao = 1;
        Entity.Total_Comdesconto = 0.0;
        Entity.Data_Emissao = new Date();
        Entity.Nome_Solicitante = "";
        Entity.Fornecedor = 0;
        this.alterarBotaoImprimirApenasNChegaram(true);
        this.alterarBotaoFinalizarEntrega(true);
        this.alterarBotaoAprovar(true);
        this.verificadoAutorizacaoAprovar = false;
        this.hdnAprovado.value = "N";
        this.finalizado = false;
        this.txtDescontoR.SetText("0");
        this.lblTotalFinal.Text = "";
        this.hdnPedido.value = "";
        this.hdnFinalizado.value = "";
        this.hdnFormaPagamento.value = "";
        this.hdnProdutoSelecionado.value = "";
        Entity.Produtos = [];
        this.Produtos = [];
        this.grdProdutos.Limpar();
        /*if (this.txtFornecedor) {
            this.txtFornecedor.LimparParametros();
            this.txtFornecedor.AddParametro("Codigo_Empresa", Entity.Empresa_Destino.toString());
        }*/
        if (this.txtProduto) {
            this.txtProduto.LimparParametros();
            //this.txtProduto.AddParametro("Inativo_Empresa", "S");
            //if (this.EntityTela && this.EntityTela.Empresa_Destino) {
            //    this.txtProduto.AddParametro("Codigo_Empresa", this.EntityTela.Empresa_Destino.toString());
            //}
            if (this.cboDeposito) {
                if (this.cboDeposito.GetValue() != null) {
                    this.txtProduto.AddParametro("Codigo_Deposito", this.cboDeposito.GetValue().toString());
                }
            }
        }
        this.AtualizarDataUltimaCompra(Entity.Fornecedor);
        setTimeout($.proxy(function () { this.PreencherComboFormaPagamento(Entity); }, this), 500);
        setTimeout($.proxy(function () { this.OnComboBoxEmpresaChange(); }, this), 2000);
        setTimeout($.proxy(function () { this.IniciarCamposProduto(); }, this), 2000);
    };
    C_ComPed.prototype.IniciarCamposProduto = function () {
        this.Produto = {};
        this.Produto.Quantidade = 1;
        this.Produto.Deposito = this.cboDeposito.GetValue();
        this.Produto.Deposito_Descricao = this.cboDeposito.GetText();
        this.GetScope().$applyAsync();
    };
    C_ComPed.prototype.PreencherComboFormaPagamento = function (entidade) {
        var itens;
        var parametros;
        itens = this.ExecutarFuncaoServerSideSynch("GetFormasPagamento", parametros);
        if (this.cboFormaPagamento && this.cboFormaPagamento.Combo) {
            this.cboFormaPagamento.ClearItems();
            for (var x = 0; x < itens.length; x++) {
                this.cboFormaPagamento.Combo.AddItem(itens[x].Descricao, itens[x].Codigo, "");
            }
            if (this.cboFormaPagamento.Combo.GetItemCount() >= 1) {
                this.cboFormaPagamento.Combo.SetSelectedIndex(0);
                entidade.Forma_Pagamento = this.cboFormaPagamento.GetValue();
            }
            else {
                this.cboFormaPagamento.Combo.SetSelectedIndex(0);
                entidade.Forma_Pagamento = 0;
            }
        }
        this.GetScope().$applyAsync();
    };
    C_ComPed.prototype.OnAntesSetEntidade = function (eventArg) {
        _super.prototype.OnAntesSetEntidade.call(this, eventArg);
        if (eventArg.Entidade.Codigo == undefined || eventArg.Entidade.Codigo == null || eventArg.Entidade.Codigo <= 0) {
            this.alterarBotaoImprimirApenasNChegaram(true);
            this.alterarBotaoFinalizarEntrega(true);
            this.alterarBotaoAprovar(true);
        }
        else {
            this.alterarBotaoImprimirApenasNChegaram(false);
            this.alterarBotaoFinalizarEntrega(false);
            this.alterarBotaoAprovar(false);
        }
        if (eventArg.Entidade.Total_Comdesconto == undefined || eventArg.Entidade.Total_Comdesconto == null) {
            eventArg.Entidade.Total_Comdesconto = 0;
        }
        if (eventArg.Entidade.Data_Aprovacao == undefined || eventArg.Entidade.Data_Aprovacao == null) {
            this.hdnAprovado.value = "N";
        }
        else {
            this.hdnAprovado.value = "S";
        }
        if (eventArg.Entidade.Finalizado) {
            this.finalizado = true;
        }
        else {
            this.finalizado = false;
        }
        this.Produto = {};
        this.Produto.Quantidade = 1;
        this.ValidarBotaoValidar();
        this.ValidarBotaoFinalizar();
        this.AtualizarUltimoPedido();
        setTimeout($.proxy(function () { this.OnComboBoxEmpresaChange(); }, this), 1000);
    };
    C_ComPed.prototype.alterarBotaoEmail = function (visible) {
        this.btnEnviarEmail.Visible = true;
    };
    C_ComPed.prototype.alterarBotaoImprimirApenasNChegaram = function (visible) {
        if (visible) {
            $("#" + this.btnImprimirApenasNChegaram.ID).attr("disabled", "true");
        }
        else {
            $("#" + this.btnImprimirApenasNChegaram.ID).removeAttr("disabled");
        }
    };
    C_ComPed.prototype.alterarBotaoFinalizarEntrega = function (visible) {
        if (visible) {
            $("#" + this.btnFinalizarEntrega.ID).attr("disabled", "true");
        }
        else {
            $("#" + this.btnFinalizarEntrega.ID).removeAttr("disabled");
        }
    };
    C_ComPed.prototype.alterarBotaoAprovar = function (visible) {
        if (visible) {
            $("#" + this.btnAprovar.ID).attr("disabled", "true");
        }
        else {
            $("#" + this.btnAprovar.ID).removeAttr("disabled");
        }
    };
    C_ComPed.prototype.alterarBotaoEstoque = function (visible) {
        if (visible) {
            $("#" + this.btnEstoque.ID).attr("disabled", "true");
        }
        else {
            $("#" + this.btnEstoque.ID).removeAttr("disabled");
        }
    };
    C_ComPed.prototype.alterarBotaoOkDuplicata = function (visible) {
        if (visible) {
            //$("#" + this.btnOkDuplicatas.ID).attr("disabled", "true");
            this.btnOkDuplicatas.Visible = false;
            this.lblDuplicataMsg.Text = "Não é possível gerar duplicatas quando o pedido está aprovado!";
        }
        else {
            //$("#" + this.btnOkDuplicatas.ID).removeAttr("disabled");
            this.lblDuplicataMsg.Text = "";
            this.btnOkDuplicatas.Visible = true;
        }
    };
    C_ComPed.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        var itens;
        if (!Entidade.Produtos) {
            Entidade.Produtos = [];
        }
        var parametros = {
            codPedido: Entidade.Codigo,
            codEmpresa: Entidade.Empresa_Destino
        };
        if (Entidade.Data_Aprovacao != null) {
            this.hdnAprovado.value = "S";
        }
        var Produtos = this.ExecutarFuncaoServerSideSynch("GetProdutosPedido", parametros);
        if (Entidade.Situacao == null || Entidade.Situacao == 0) {
            this.cboSituacaoPedido.Combo.SetSelectedIndex(0);
            Entidade.Situacao = this.cboSituacaoPedido.Combo.GetValue();
        }
        this.AtualizarDataUltimaCompra(Entidade.Fornecedor);
        this.Produtos = Produtos;
        this.totalizarProdutos(Entidade);
    };
    C_ComPed.prototype.OnComboBoxEmpresaChange = function () {
        this.AtualizarDeposito();
        this.AtualizarEstoqueAtual();
        if (this.txtFornecedor) {
            this.txtFornecedor.LimparParametros();
            //if (this.EntityTela.Empresa_Destino) {
            //    this.txtFornecedor.AddParametro("Codigo_Empresa", this.EntityTela.Empresa_Destino.toString());
            //}
        }
        if (this.txtProduto) {
            this.txtProduto.LimparParametros();
            //this.txtProduto.AddParametro("Inativo_Empresa", "S");
            //if (this.EntityTela.Empresa_Destino) {
            //    this.txtProduto.AddParametro("Codigo_Empresa", this.EntityTela.Empresa_Destino.toString());
            //}
            if (this.cboDeposito) {
                if (this.cboDeposito.GetValue() != null) {
                    this.txtProduto.AddParametro("Codigo_Deposito", this.cboDeposito.GetValue().toString());
                }
                this.cboDeposito.SetSelectedIndex(0);
            }
            if (this.txtFornecedor) {
                this.txtProduto.AddParametro("Codigo_Fornecedor", this.txtFornecedor.GetText().toString());
            }
        }
        this.Produto = {};
        this.ValidarProdutoInativoEmpresa();
        this.ValidarFornocedorEmpresa();
    };
    C_ComPed.prototype.OnComboBoxDepositoChange = function () {
        if (this.txtProduto) {
            this.txtProduto.LimparParametros();
            //this.txtProduto.AddParametro("Inativo_Empresa", "S");
            //if (this.EntityTela.Empresa_Destino) {
            //    this.txtProduto.AddParametro("Codigo_Empresa", this.EntityTela.Empresa_Destino.toString());
            //}
            if (this.cboDeposito) {
                if (this.cboDeposito.GetValue() != null) {
                    this.txtProduto.AddParametro("Codigo_Deposito", this.cboDeposito.GetValue().toString());
                }
            }
            if (this.txtFornecedor) {
                this.txtProduto.AddParametro("Codigo_Fornecedor", this.txtFornecedor.GetText().toString());
            }
        }
        this.AtualizarEstoqueAtual();
    };
    C_ComPed.prototype.OnComboBoxFormaPagamentoChange = function () {
        this.totalizarProdutos();
    };
    C_ComPed.prototype.OnComboBoxTipoDiasChange = function () {
        if (this.cboTipoDias) {
            if (this.cboTipoDias.GetValue() == "V") {
                if (this.txtDias) {
                    this.txtDias.SetText("");
                    this.txtDias.SetTextLabelControl("Dias");
                }
            }
            else {
                if (this.txtDias && this.txtVencInicial) {
                    this.txtDias.SetText(this.txtVencInicial.Date.getDate().toString());
                    this.txtDias.SetTextLabelControl("Dia");
                    //this.txtDias.SetText(this.txtVencInicial.TextBoxCalendario.GetDate().getMonth());
                }
            }
        }
    };
    C_ComPed.prototype.AtualizarDeposito = function () {
        var entidadeProduto = this.Produto;
        var parametros;
        parametros = {
            codEmpresa: this.EntityTela.Empresa_Destino
        };
        this.itens = this.ExecutarFuncaoServerSideSynch("PreencherComboDeposito", parametros);
        if (entidadeProduto == null || entidadeProduto == undefined) {
            entidadeProduto = {};
        }
        if (this.cboDeposito && this.cboDeposito.Combo) {
            this.cboDeposito.ClearItems();
            for (var x = 0; x < this.itens.length; x++) {
                this.cboDeposito.Combo.AddItem(this.itens[x].Descricao, this.itens[x].Codigo, "");
            }
        }
        this.cboDeposito.SetSelectedIndex(0);
        this.cboDeposito.SetValue(0);
        this.Produto.Deposito = 0;
        this.GetScope().$applyAsync();
    };
    C_ComPed.prototype.AtualizarEstoqueAtual = function () {
        var retorno;
        var parametros;
        var codDepositoAux;
        if (String.IsNullOrWhiteSpace(this.cboDeposito.GetValue())) {
            codDepositoAux = 0;
        }
        else {
            codDepositoAux = this.cboDeposito.GetValue();
        }
        parametros = {
            codDeposito: codDepositoAux,
            codProduto: this.txtProduto.GetText().CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetEstoqueAtual", parametros);
        if (this.lblEstoqueAtual) {
            this.lblEstoqueAtual.Text = retorno;
        }
    };
    C_ComPed.prototype.AtualizarUltimoPedido = function () {
        var retorno;
        var parametros;
        retorno = this.ExecutarFuncaoServerSideSynch("GetUltimoPedido", parametros);
        if (this.lblUltimoPedido) {
            this.lblUltimoPedido.Text = retorno;
        }
    };
    C_ComPed.prototype.OnPesquisouCotacao = function (s, e) {
        //Verifico se essa pesquisa veio da procura do pedido.
        if (this.txtCodigo.GetText().CNum() > 0) {
            return;
        }
        var entidade = this.GetScope().Entity;
        var parametros;
        if (this.txtCotacao.GetText().CNum() > 0) {
            parametros = {
                codCotacao: this.txtCotacao.GetText().CNum()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetInformacoesAdicionaisCotacao", parametros);
            if (retorno) {
                entidade.Fornecedor = retorno.Cotacao.Fornecedor;
                entidade.Condicao = retorno.Cotacao.Condicao;
                if (retorno.Cotacao.Data) {
                    entidade.Data_Entrega = retorno.Cotacao.Data;
                    entidade.Data_Emissao = retorno.Cotacao.Data;
                }
                else {
                    entidade.Data_Entrega = new Date();
                    entidade.Data_Emissao = new Date();
                }
                this.Produtos = retorno.Produtos;
            }
            this.totalizarProdutos();
            this.GetScope().$applyAsync();
        }
    };
    C_ComPed.prototype.ValidarProdutoInativoEmpresa = function () {
        var inativoProduto;
        var parametros;
        if (this.txtProduto.GetText().CNum() <= 0) {
            return;
        }
        parametros = {
            codProduto: this.txtProduto.GetText().CNum(),
            codEmpresa: this.EntityTela.Empresa_Destino
        };
        inativoProduto = this.ExecutarFuncaoServerSideSynch("isProdutoInativoEmpresa", parametros);
        if (inativoProduto) {
            this.txtProduto.Limpar();
            this.txtProduto.LimparParametros();
            //this.txtProduto.AddParametro("Inativo_Empresa", "S");
            //this.txtProduto.AddParametro("Codigo_Empresa", this.EntityTela.Empresa_Destino.toString());
            if (this.cboDeposito) {
                if (this.cboDeposito.GetValue() != null) {
                    this.txtProduto.AddParametro("Codigo_Deposito", this.cboDeposito.GetValue().toString());
                }
            }
            this.txtProduto.AddParametro("Codigo_Fornecedor", this.txtFornecedor.GetText().toString());
            MostrarAlerta("Este produto está inativo para a empresa selecionada!");
            this.txtProduto.Focus();
            return;
        }
    };
    C_ComPed.prototype.ValidarProdutoFornecedor = function () {
        var produtoVinculado;
        var parametros;
        if (this.txtProduto.GetText().CNum() <= 0) {
            return;
        }
        parametros = {
            codProduto: this.txtProduto.GetText().CNum(),
            codEmpresa: this.EntityTela.Empresa_Destino.toString(),
            codFornecedor: this.txtFornecedor.GetText().CNum()
        };
        produtoVinculado = this.ExecutarFuncaoServerSideSynch("isProdutoVinculadoFornecedor", parametros);
        if (!produtoVinculado) {
            this.txtProduto.Limpar();
            this.txtProduto.LimparParametros();
            //this.txtProduto.AddParametro("Inativo_Empresa", "S");
            //this.txtProduto.AddParametro("Codigo_Empresa", this.EntityTela.Empresa_Destino.toString());
            if (this.cboDeposito) {
                if (this.cboDeposito.GetValue() != null) {
                    this.txtProduto.AddParametro("Codigo_Deposito", this.cboDeposito.GetValue().toString());
                }
            }
            this.txtProduto.AddParametro("Codigo_Fornecedor", this.txtFornecedor.GetText().toString());
            MostrarAlerta("Esse produto não possui vinculo com o fornecedor informado!");
            this.txtProduto.Focus();
            return;
        }
    };
    C_ComPed.prototype.OnPesquisouContaContabil = function (s, e) {
        var parametros;
        var isContaSintetica;
        parametros = {
            codContaContabil: this.txtContaContabil.GetText().CNum()
        };
        isContaSintetica = this.ExecutarFuncaoServerSideSynch("isContaSintetica", parametros);
        if (isContaSintetica) {
            MostrarAlerta("Você não pode usar uma Conta Sintética!");
            this.txtContaContabil.Limpar();
            this.txtContaContabil.Focus();
            return;
        }
    };
    C_ComPed.prototype.OnPesquisouDadosProduto = function (s, e) {
        var entidade = this.GetScope().Entity;
        var parametros;
        var retorno;
        var codFornecedor;
        codFornecedor = 0;
        this.alterarBotaoEstoque(this.txtProduto.GetText().CNum() == 0);
        this.ValidarProdutoInativoEmpresa();
        this.ValidarProdutoFornecedor();
        if (entidade.Fornecedor != null && entidade.Fornecedor != undefined) {
            codFornecedor = entidade.Fornecedor;
        }
        parametros = {
            codProduto: this.txtProduto.GetText().CNum(),
            codEmpresa: entidade.Empresa_Destino,
            codFornecedor: codFornecedor
        };
        var entidadeProduto = this.Produto; //(<any>this.GetScope()).Produto;
        //retorno = this.ExecutarFuncaoServerSideSynch("GetValorProdPedComp", parametros);
        //if (retorno) {
        //    entidadeProduto.Preco_Custo = retorno;
        //}
        retorno = this.ExecutarFuncaoServerSideSynch("GetMultiplo", parametros);
        if (retorno != null && retorno != undefined) {
            entidadeProduto.Multiplo = retorno;
        }
        this.AtualizarEstoqueAtual();
        this.Produto = entidadeProduto;
        if (this.Produtos) {
            if (parametros.codProduto != 0 && this.hdnProdutoSelecionado.value != "1") {
                var dadosProduto = this.ExecutarFuncaoServerSideSynch("GetDadosProduto", parametros);
                this.Produto.Quantidade = 1;
                this.Produto.Preco_Custo = dadosProduto.Preco_Custo;
                this.Produto.Desconto_Unitario = dadosProduto.Desconto_Unitario;
                this.Produto.Desconto_Unitario_Porcentagem = dadosProduto.Desconto_Unitario_Porcentagem;
                this.Produto.ICMS = dadosProduto.ICMS;
                this.Produto.Ipi = dadosProduto.Ipi;
                this.Produto.Ipi_Porcentagem = dadosProduto.Ipi_Porcentagem;
                this.Produto.Produto_Descricao = dadosProduto.Nome;
            }
        }
        this.Produto = this.Produto;
        this.GetScope().$applyAsync();
        if (entidadeProduto.Produto_Codigo == null) {
            entidadeProduto.Preco_Custo = 0.0;
            entidadeProduto.Desconto_Unitario = 0.0;
            entidadeProduto.Desconto_Unitario_Porcentagem = 0.0;
            entidadeProduto.ICMS = 0.0;
            entidadeProduto.Ipi = 0.0;
            entidadeProduto.Ipi_Porcentagem = 0.0;
            entidadeProduto.Quantidade = 0;
        }
        //this.OnTxtDescontoUnitarioChange();
    };
    C_ComPed.prototype.ValidarFornocedorEmpresa = function () {
        var parametros;
        var retorno;
        var entidade = this.GetScope().Entity;
        if (this.txtFornecedor.GetText().CNum() <= 0) {
            return;
        }
        parametros = {
            codFornecedor: this.txtFornecedor.GetText().CNum(),
            codEmpresa: entidade.Empresa_Destino
        };
        retorno = this.ExecutarFuncaoServerSideSynch("isFornecedorPertenceEmpresa", parametros);
        if (!retorno) {
            this.txtFornecedor.Limpar();
            this.txtFornecedor.LimparParametros();
            MostrarAlerta("Este fornecedor não pertece a empresa selecionada!");
            this.txtFornecedor.Focus();
            return;
        }
    };
    C_ComPed.prototype.OnPesquisouFornecedorE = function (s, e) {
        var parametros = {
            codFornecedor: this.txtFornecedorE.GetText().CNum()
        };
        this.txtEmail.SetText(this.ExecutarFuncaoServerSideSynch("emailFornecedor", parametros));
    };
    C_ComPed.prototype.OnPesquisouFornecedor = function (s, e) {
        var entidade = this.GetScope().Entity;
        var retorno;
        var codFormaPagamento;
        var parametros;
        var pertence;
        parametros = {
            codFornecedor: this.txtFornecedor.GetText().CNum()
        };
        var inativo = this.ExecutarFuncaoServerSideSynch("FornecedorInativo", parametros);
        if (inativo) {
            MostrarAlerta("Este Fornecedor está marcado como Inativo na tela Cadastro de Fornecedor");
            this.txtFornecedor.Limpar();
            this.txtFornecedor.Focus();
            return;
        }
        if (this.txtFornecedor.GetText().CNum() <= 0) {
            this.PreencherComboFormaPagamento(entidade);
            return;
        }
        this.AtualizarDataUltimaCompra(entidade.Fornecedor);
        this.ValidarFornocedorEmpresa();
        if (this.txtCodigo.GetText().CNum() > 0) {
            return;
        }
        this.ValidarProdutoFornecedor();
        //var itens: any[];
        this.EntityTela.Forma_Pagamento = this.ExecutarFuncaoServerSideSynch("GetFormaPagamentoByFornecedor", parametros);
        //if (this.cboFormaPagamento && this.cboFormaPagamento.Combo) {
        //    if (itens.length == 0) {
        //        this.cboFormaPagamento.Combo.SetSelectedIndex(-1);
        //    }
        //    else {
        //    }
        //    //this.cboFormaPagamento.ClearItems();
        //    //for (var x = 0; x < itens.length; x++) {
        //    //    this.cboFormaPagamento.Combo.AddItem(itens[x].Descricao, itens[x].Codigo, "");
        //    //}
        //    //if (this.cboFormaPagamento.Combo.GetItemCount() >= 1) {
        //    //    this.cboFormaPagamento.Combo.SetSelectedIndex(0);
        //    //    entidade.Forma_Pagamento = this.cboFormaPagamento.GetValue();
        //    //} else {
        //    //    this.cboFormaPagamento.Combo.SetSelectedIndex(0);
        //    //    entidade.Forma_Pagamento = 0;
        //    //}
        //}
        this.GetScope().$applyAsync();
        if (this.txtProduto) {
            this.txtProduto.AddParametro("Codigo_Fornecedor", this.txtFornecedor.GetText());
        }
        this.totalizarProdutos();
    };
    C_ComPed.prototype.AtualizarDataUltimaCompra = function (codFornecedor) {
        var parametros;
        parametros = {
            codFornecedor: codFornecedor
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetUltCompraByFornecedor", parametros);
        if (retorno == null) {
            this.lblUltCompra.Text = "";
        }
        else {
            this.lblUltCompra.Text = retorno.FormataData();
        }
    };
    C_ComPed.prototype.OnTxtIPIPorcChange = function () {
        var valorIpi;
        if (!this.EntityTela)
            return;
        if (this.EntityTela.Desconto_Porcentagem == null)
            this.EntityTela.Desconto_Porcentagem = 0;
        if (this.Produto.Preco_Custo == null)
            this.Produto.Preco_Custo = 0;
        if (this.Produto.Desconto_Unitario == null)
            this.Produto.Desconto_Unitario = 0;
        if (this.Produto.Ipi_Porcentagem == null)
            this.Produto.Ipi_Porcentagem = 0;
        valorIpi = ((this.Produto.Preco_Custo * (100 - this.EntityTela.Desconto_Porcentagem) / 100) - this.Produto.Desconto_Unitario) * (this.Produto.Ipi_Porcentagem / 100);
        this.Produto.Ipi = valorIpi;
        if (isNaN(this.Produto.Ipi))
            this.Produto.Ipi = 0;
        this.GetScope().$applyAsync();
    };
    C_ComPed.prototype.OnTxtIPIChange = function () {
        if (!this.EntityTela)
            return;
        var aliqIpi;
        var valorTotal;
        if (this.EntityTela.Desconto_Porcentagem == null)
            this.EntityTela.Desconto_Porcentagem = 0;
        if (this.Produto.Ipi == null)
            this.Produto.Ipi = 0;
        if (this.Produto.Preco_Custo == null)
            this.Produto.Preco_Custo = 0;
        if (this.Produto.Desconto_Unitario == null)
            this.Produto.Desconto_Unitario = 0;
        aliqIpi = (100 * this.Produto.Ipi) / ((this.Produto.Preco_Custo * ((100 - this.EntityTela.Desconto_Porcentagem) / 100)) - this.Produto.Desconto_Unitario);
        this.Produto.Ipi_Porcentagem = aliqIpi;
        if (isNaN(this.Produto.Ipi_Porcentagem))
            this.Produto.Ipi_Porcentagem = 0;
        this.GetScope().$applyAsync();
    };
    C_ComPed.prototype.OnTxtPrecoCustoChange = function () {
        this.OnTxtDescontoUnitarioChange();
        this.OnTxtDescontoUnitarioPorcChange();
        this.OnTxtIPIChange();
        this.OnTxtIPIPorcChange();
    };
    C_ComPed.prototype.OnTxtDescontoUnitarioChange = function () {
        this.OnTxtIPIChange();
        this.OnTxtIPIPorcChange();
        if (this.Produto.Desconto_Unitario == null)
            this.Produto.Desconto_Unitario = 0;
        if (this.Produto.Desconto_Unitario_Porcentagem == null)
            this.Produto.Desconto_Unitario_Porcentagem = 0;
        if (this.Produto.Preco_Custo == null)
            this.Produto.Preco_Custo = 0;
        if (this.Produto.Desconto_Unitario_Porcentagem_2 == null)
            this.Produto.Desconto_Unitario_Porcentagem_2 = 0;
        if (this.Produto.Desconto_Unitario_Porcentagem_3 == null)
            this.Produto.Desconto_Unitario_Porcentagem_3 = 0;
        if (this.Produto.Desconto_Unitario >= this.Produto.Preco_Custo && this.Produto.Desconto_Unitario > 0) {
            MostrarAlerta("O Valor do desconto unitário não pode ser maior ou igual ao Preço de Custo do produto!");
            //this.txtDescontoUnitario.SetText("0");
            //this.txtDescontoUnitarioPorc.SetText("0")
            this.Produto.Desconto_Unitario = 0;
            this.Produto.Desconto_Unitario_Porcentagem = 0;
            return;
        }
        if (this.Produto.Desconto_Unitario_Porcentagem_2 == 0 && this.Produto.Desconto_Unitario_Porcentagem_3 == 0) {
            if (this.Produto.Desconto_Unitario_Porcentagem == 0) {
                if (this.Produto.Desconto_Unitario > 0) {
                    this.Produto.Desconto_Unitario_Porcentagem = (100 * this.Produto.Desconto_Unitario) / (this.Produto.Preco_Custo * (100 - this.Produto.Desconto_Unitario_Porcentagem) / 100);
                }
            }
            else {
                if (this.Produto.Desconto_Unitario > 0) {
                    this.Produto.Desconto_Unitario_Porcentagem = (this.Produto.Desconto_Unitario * 100 / this.Produto.Preco_Custo);
                }
            }
        }
        this.GetScope().$applyAsync();
    };
    C_ComPed.prototype.OnTxtDescontoUnitarioPorcChange = function () {
        this.OnTxtIPIChange();
        this.OnTxtIPIPorcChange();
        if (this.Produto.Desconto_Unitario == null)
            this.Produto.Desconto_Unitario = 0;
        if (this.Produto.Desconto_Unitario_Porcentagem == null)
            this.Produto.Desconto_Unitario_Porcentagem = 0;
        if (this.Produto.Preco_Custo == null)
            this.Produto.Preco_Custo = 0;
        if (this.Produto.Desconto_Unitario_Porcentagem_2 == null)
            this.Produto.Desconto_Unitario_Porcentagem_2 = 0;
        if (this.Produto.Desconto_Unitario_Porcentagem_3 == null)
            this.Produto.Desconto_Unitario_Porcentagem_3 = 0;
        var ValorAnt;
        var ValorDesc;
        ValorAnt = 0;
        ValorDesc = this.Produto.Preco_Custo;
        if (this.Produto.Desconto_Unitario_Porcentagem > 99.99) {
            MostrarAlerta("Desc. Unitário % não pode ser maior do que 99,9");
            this.Produto.Desconto_Unitario = 0;
            this.Produto.Desconto_Unitario_Porcentagem = 0;
            return;
        }
        this.Produto.Desconto_Unitario = ((this.Produto.Desconto_Unitario_Porcentagem / 100) * ValorDesc + ValorAnt);
        ValorAnt = this.Produto.Desconto_Unitario;
        ValorDesc = this.Produto.Preco_Custo - this.Produto.Desconto_Unitario;
        this.Produto.Desconto_Unitario = ((this.Produto.Desconto_Unitario_Porcentagem_2 / 100) * ValorDesc + ValorAnt);
        ValorAnt = this.Produto.Desconto_Unitario;
        ValorDesc = this.Produto.Preco_Custo - this.Produto.Desconto_Unitario;
        this.Produto.Desconto_Unitario = ((this.Produto.Desconto_Unitario_Porcentagem_3 / 100) * ValorDesc + ValorAnt);
        this.GetScope().$applyAsync();
    };
    C_ComPed.prototype.OnTxtDescontoRChange = function () {
        var entidade = this.GetScope().Entity;
        entidade.Desconto_Dinheiro = this.txtDescontoR.GetText().CNum();
        entidade.Desconto_Porcentagem = this.txtDescontoPorc.GetText().CNum();
        entidade.Desconto_Porcentagem2 = this.txtDescontoPorc_2.GetText().CNum();
        entidade.Desconto_Porcentagem3 = this.txtDescontoPorc_3.GetText().CNum();
        if (entidade.Desconto_Dinheiro >= this.GetTotal()) {
            MostrarAlerta("O valor do desconto não pode ser maior ou igual o valor total do pedido!");
            this.txtDescontoR.SetText("");
            entidade.Desconto_Dinheiro = 0;
            this.txtDescontoPorc.SetText("");
            entidade.Desconto_Porcentagem = 0;
            this.txtDescontoR.Focus();
            this.totalizarProdutos();
            return;
        }
        if (entidade.Desconto_Porcentagem2 == 0 && entidade.Desconto_Porcentagem3 == 0) {
            if (entidade.Desconto_Porcentagem == 0) {
                if (entidade.Desconto_Dinheiro >= 0) {
                    entidade.Desconto_Porcentagem = (100 * entidade.Desconto_Dinheiro) / (this.GetTotal() * (100 - entidade.Desconto_Porcentagem) / 100);
                }
            }
            else {
                if (entidade.Desconto_Dinheiro >= 0) {
                    entidade.Desconto_Porcentagem = (entidade.Desconto_Dinheiro * 100 / this.GetTotal());
                }
            }
        }
        this.totalizarProdutos();
        this.GetScope().$applyAsync();
    };
    C_ComPed.prototype.OnTxtDescontoPorcChange = function () {
        var entidade = this.GetScope().Entity;
        var ValorAnt;
        var ValorDesc;
        entidade.Desconto_Dinheiro = this.txtDescontoR.GetText().CNum();
        entidade.Desconto_Porcentagem = this.txtDescontoPorc.GetText().CNum();
        entidade.Desconto_Porcentagem2 = this.txtDescontoPorc_2.GetText().CNum();
        entidade.Desconto_Porcentagem3 = this.txtDescontoPorc_3.GetText().CNum();
        ValorAnt = 0;
        ValorDesc = this.GetTotal();
        if (entidade.Desconto_Porcentagem >= 100) {
            MostrarAlerta("O valor do desconto não pode ser maior ou igual o valor total do pedido!");
            this.txtDescontoR.SetText("");
            entidade.Desconto_Dinheiro = 0;
            this.txtDescontoPorc.SetText("");
            entidade.Desconto_Porcentagem = 0;
            this.txtDescontoPorc.Focus();
            this.totalizarProdutos();
            return;
        }
        //if (entidade.Desconto_Porcentagem2 == 0 && entidade.Desconto_Porcentagem3 == 0) {
        //    if (entidade.Desconto_Dinheiro == 0) {
        //        if (entidade.Desconto_Porcentagem >= 0) {
        //            entidade.Desconto_Dinheiro = (100 * entidade.Desconto_Porcentagem) / (this.GetTotal() * (100 - entidade.Desconto_Dinheiro) / 100);
        //        }
        //    } else {
        //        if (entidade.Desconto_Porcentagem >= 0) {
        //            entidade.Desconto_Dinheiro = (entidade.Desconto_Porcentagem * 100 / this.GetTotal());
        //        }
        //    }
        //}
        if (entidade.Desconto_Porcentagem2 == 0 && entidade.Desconto_Porcentagem3 == 0) {
            if (entidade.Desconto_Dinheiro == 0) {
                if (entidade.Desconto_Porcentagem >= 0) {
                    entidade.Desconto_Dinheiro = (100 * entidade.Desconto_Dinheiro) / (this.GetTotal() * (100 - entidade.Desconto_Porcentagem) / 100);
                }
            }
            else {
                if (entidade.Desconto_Porcentagem >= 0) {
                    entidade.Desconto_Dinheiro = (entidade.Desconto_Dinheiro * 100 / this.GetTotal());
                }
            }
        }
        entidade.Desconto_Dinheiro = ((entidade.Desconto_Porcentagem / 100) * ValorDesc + ValorAnt);
        ValorAnt = entidade.Desconto_Dinheiro;
        ValorDesc = this.GetTotal() - entidade.Desconto_Dinheiro;
        entidade.Desconto_Dinheiro = ((entidade.Desconto_Porcentagem2 / 100) * ValorDesc + ValorAnt);
        ValorAnt = entidade.Desconto_Dinheiro;
        ValorDesc = this.GetTotal() - entidade.Desconto_Dinheiro;
        entidade.Desconto_Dinheiro = ((entidade.Desconto_Porcentagem3 / 100) * ValorDesc + ValorAnt);
        this.totalizarProdutos();
        this.GetScope().$applyAsync();
        //var entidade: SiSMoura.Core.Entity.Pedido_Compra = this.GetScope().Entity;
        //var ValorAnt: number;
        //var ValorDesc: number;
        //entidade.Desconto_Dinheiro = this.txtDescontoR.GetText().CNum();
        //entidade.Desconto_Porcentagem = this.txtDescontoPorc.GetText().CNum();
        //entidade.Desconto_Porcentagem2 = this.txtDescontoPorc_2.GetText().CNum();
        //entidade.Desconto_Porcentagem3 = this.txtDescontoPorc_3.GetText().CNum();
        //ValorAnt = 0;
        //ValorDesc = this.GetTotal();
        //if (entidade.Desconto_Porcentagem > 100) {
        //    MostrarAlerta("O valor do desconto em porcentagem, não pode ultrapassar de 100%.");
        //    this.txtDescontoR.SetText("");
        //    this.txtDescontoPorc.SetText("");
        //    return;
        //}
        //if (entidade.Desconto_Porcentagem = 0) {
        //    this.txtDescontoR.SetText("");
        //    this.txtDescontoPorc.SetText("");
        //    return;
        //}
        //if (entidade.Desconto_Porcentagem2 == 0 && entidade.Desconto_Porcentagem3 == 0) {
        //    if (entidade.Desconto_Dinheiro == 0) {
        //        if (entidade.Desconto_Porcentagem >= 0) {
        //            entidade.Desconto_Dinheiro = (100 * entidade.Desconto_Dinheiro) / (this.GetTotal() * (100 - entidade.Desconto_Porcentagem) / 100);
        //        }
        //    } else {
        //        if (entidade.Desconto_Porcentagem >= 0) {
        //            entidade.Desconto_Dinheiro = (entidade.Desconto_Dinheiro * 100 / this.GetTotal());
        //        }
        //    }
        //}
        //entidade.Desconto_Dinheiro = ((entidade.Desconto_Porcentagem / 100) * ValorDesc + ValorAnt);
        //ValorAnt = entidade.Desconto_Dinheiro;
        //ValorDesc = this.GetTotal() - entidade.Desconto_Dinheiro;
        //entidade.Desconto_Dinheiro = ((entidade.Desconto_Porcentagem2 / 100) * ValorDesc + ValorAnt);
        //ValorAnt = entidade.Desconto_Dinheiro;
        //ValorDesc = this.GetTotal() - entidade.Desconto_Dinheiro;
        //entidade.Desconto_Dinheiro = ((entidade.Desconto_Porcentagem3 / 100) * ValorDesc + ValorAnt);
        //this.totalizarProdutos();
        //this.GetScope().$applyAsync();
    };
    C_ComPed.prototype.OnTxtValorFreteChange = function () {
        if (this.txtValorFrete != undefined) {
            this.GetScope().Entity.Valor_Frete = this.txtValorFrete.GetText().CNum();
        }
        this.totalizarProdutos();
    };
    C_ComPed.prototype.OnSetouItemProduto = function (s, e) {
        e.item.Contador = 1;
        //e.item.Quantidade = 1;
        //e.item.Deposito = this.cboDeposito.GetValue();
        //e.item.Deposito_Descricao = this.cboDeposito.GetText();
        this.GetScope().$applyAsync();
        if (this.GetScope().Entity) {
            this.AtualizaTotal();
            this.totalizarProdutos();
        }
    };
    C_ComPed.prototype.OnLimpouItemProduto = function (s, e) {
        e.item.Quantidade = 1;
        e.item.Preco_Custo = 0.0;
        e.item.Desconto_Unitario = 0.0;
        e.item.Desconto_Unitario_Porcentagem = 0.0;
        e.item.Desconto_Unitario_Porcentagem_2 = 0.0;
        e.item.Desconto_Unitario_Porcentagem_3 = 0.0;
        e.item.Ipi = 0.0;
        e.item.Ipi_Porcentagem = 0.0;
        e.item.ICMS = 0.0;
        e.item.Deposito = this.cboDeposito.GetValue();
        e.item.Deposito_Descricao = this.cboDeposito.GetText();
        this.GetScope().$applyAsync();
    };
    C_ComPed.prototype.OnValidandoItemProduto = function (s, e) {
        var entidade = this.GetScope().Entity;
        var parametros;
        var entidadeProduto;
        var produtoFornecedores;
        entidadeProduto = e.item;
        if (entidade.Fornecedor <= 0) {
            MostrarAlerta("Informe o Fornecedor!");
            e.cancelar = true;
            return;
        }
        if (String.IsNullOrWhiteSpace(entidadeProduto.Produto_Descricao)) {
            MostrarAlerta("Preencha corretamente o campo produto!");
            e.cancelar = true;
            return;
        }
        if (this.txtProduto.GetText().CNum() <= 0 && String.IsNullOrWhiteSpace(entidadeProduto.Produto_Descricao)) {
            MostrarAlerta("Preencha corretamente o campo produto!");
            e.cancelar = true;
            return;
        }
        if (this.txtQuantidade.GetText().CNum() <= 0) {
            MostrarAlerta("Preencha corretamente o campo quantidade!");
            e.cancelar = true;
            return;
        }
        //let deposito = entidadeProduto.Deposito;
        if (this.cboDeposito.GetValue() <= 0) {
            MostrarAlerta("Por favor, informe o depósito do produto para o pedido.");
            e.cancelar = true;
            return;
        }
        if (this.txtPrecoCusto.GetText().CNum() <= 0) {
            MostrarAlerta("Informe o valor do produto!");
            e.cancelar = true;
            return;
        }
        if (this.Produtos.length <= 0) {
            entidadeProduto.Contador = 1;
        }
        else {
            entidadeProduto.Contador = this.Produtos.length + 1;
        }
        if (this.hdnProdutoSelecionado.value != "1") {
            parametros = {
                codProduto: this.txtProduto.GetText().CNum(),
                codFornecedor: this.txtFornecedor.GetText().CNum()
            };
            var InformacoesAdicionais = this.ExecutarFuncaoServerSideSynch("GetInformacoesAdicionaisProduto", parametros);
            entidadeProduto.Produto_Descricao = entidadeProduto.Produto_Descricao;
            entidadeProduto.Deposito = this.cboDeposito.GetValue();
            entidadeProduto.Deposito_Descricao = this.cboDeposito.GetText();
            //entidadeProduto.Quantidade = this.txtQuantidade.GetText().CNum();
            entidadeProduto.Preco_Custo = this.txtPrecoCusto.GetText().CNum();
            entidadeProduto.Desconto_Unitario = this.txtDescontoUnitario.GetText().CNum();
            entidadeProduto.Desconto_Unitario_Porcentagem_2 = this.txtDescontoPorc_2.GetText().CNum();
            entidadeProduto.Desconto_Unitario_Porcentagem_3 = this.txtDescontoPorc_3.GetText().CNum();
            entidadeProduto.ICMS = this.txtICMS.GetText().CNum();
            if (InformacoesAdicionais.Produto) {
                entidadeProduto.Referencia = InformacoesAdicionais.Produto.Referencia;
                entidadeProduto.Estoque_Atual = this.lblEstoqueAtual.Text.CNum();
                entidadeProduto.Estoque_Minimo = InformacoesAdicionais.Produto.Estoque_Minimo;
                if (InformacoesAdicionais.Produto.MarcaEntity)
                    entidadeProduto.Marca = InformacoesAdicionais.Produto.MarcaEntity.Nome;
                entidadeProduto.Observacao = InformacoesAdicionais.Produto.Observacao;
                entidadeProduto.Unidade = InformacoesAdicionais.Produto.Unidade;
                entidadeProduto.Total = entidadeProduto.Quantidade * (entidadeProduto.Preco_Custo - entidadeProduto.Desconto_Unitario);
                //Produto_Fornecedor (Multiplo)
                if (InformacoesAdicionais.Produto.Fornecedores) {
                    produtoFornecedores = InformacoesAdicionais.Produto.Fornecedores;
                    if (produtoFornecedores && produtoFornecedores.length > 0) {
                        for (var x = 0; x < produtoFornecedores.length; x++) {
                            if (produtoFornecedores[x].Fornecedor === entidade.Fornecedor && produtoFornecedores[x].Empresa === entidade.Empresa_Destino) {
                                entidadeProduto.Multiplo = produtoFornecedores[x].Entr_Prod_Converter_Valor;
                            }
                        }
                    }
                }
                if (InformacoesAdicionais.Produto.Peso_Produto)
                    entidadeProduto.Peso_Produto = InformacoesAdicionais.Produto.Peso_Produto;
                if (InformacoesAdicionais.Produto.ModeloEntity)
                    entidadeProduto.Modelo = InformacoesAdicionais.Produto.ModeloEntity.Descricao;
                if (InformacoesAdicionais.Produto.CorEntity)
                    entidadeProduto.Cor = InformacoesAdicionais.Produto.CorEntity.Nome;
                if (InformacoesAdicionais.Produto.Tamanho)
                    entidadeProduto.Tamanho = InformacoesAdicionais.Produto.Tamanho;
                entidadeProduto.Valor_Unitario_Final = (entidadeProduto.Preco_Custo - entidadeProduto.Desconto_Unitario + entidadeProduto.ICMS + entidadeProduto.Ipi) * entidadeProduto.Quantidade;
                entidadeProduto.Codigo_Produto_Fornecedor = InformacoesAdicionais.Codigo_Produto_Fornecedor;
                if (InformacoesAdicionais.Produto.Codigo_Barra)
                    entidadeProduto.Codigo_Barra = InformacoesAdicionais.Produto.Codigo_Barra;
            }
            if (this.Produtos && this.Produtos.length > 0) {
                for (var x = 0; x < this.Produtos.length; x++) {
                    if (this.Produtos[x].Produto_Codigo > 0 && this.Produtos[x].Produto_Codigo === entidadeProduto.Produto_Codigo) {
                        this.Produtos.splice(x, 1);
                    }
                }
            }
        }
        this.hdnProdutoSelecionado.value = "";
        this.GetScope().$applyAsync();
    };
    C_ComPed.prototype.OnExcluindoItemProduto = function (s, e) {
        this.totalizarProdutos();
    };
    C_ComPed.prototype.onItemGridExcluiuSucesso = function (s, e) {
        this.totalizarProdutos();
    };
    C_ComPed.prototype.OnAdiciouItemProduto = function (s, e) {
        this.OnTxtDescontoRChange();
        this.totalizarProdutos();
    };
    C_ComPed.prototype.OnAdicionandoItemProduto = function (s, e) {
        //if (this.cboDeposito.GetText() == "") {
        //    MostrarAlerta("Selecione um depósito!");
        //    e.cancelar = true
        //} else {
        var retorno = this.totalizarProdutos();
        if (!retorno) {
            MostrarAlerta("A Quantidade x Valor Unitário ou o Total na tabela, não podem ultrapassar o valor de R$999.999.999.999,00!");
            e.cancelar = true;
        }
        //}
    };
    C_ComPed.prototype.totalizarProdutos = function (entidade) {
        if (!entidade) {
            entidade = this.GetScope().Entity;
        }
        var formaPagamento;
        var total;
        var parametros;
        total = 0;
        var retorno;
        retorno = 0;
        this.lblTotalFinal.Text = "";
        if (this.txtPrecoCusto.GetText().CNum() * this.txtQuantidade.GetText().CNum() >= 999999999999) {
            return false;
        }
        if (this.Produtos) {
            if (this.Produtos.length > 0) {
                for (var x = 0; x < this.Produtos.length; x++) {
                    var entidadeProduto = this.Produtos[x];
                    total += entidadeProduto.Valor_Unitario_Final;
                }
            }
        }
        if (total > 999999999999) {
            return false;
        }
        retorno = ((total - CNum(entidade.Desconto_Dinheiro) + CNum(entidade.Valor_Frete)));
        var codforpgto = 0;
        if (entidade.Forma_Pagamento) {
            codforpgto = entidade.Forma_Pagamento;
        }
        parametros = {
            codFormaPagamento: codforpgto
        };
        formaPagamento = this.ExecutarFuncaoServerSideSynch("GetFormaPagamento", parametros);
        if (formaPagamento) {
            switch (formaPagamento.Tipo) {
                case 1:
                    retorno = (retorno + (formaPagamento.Valor * retorno / 100));
                    break;
                case 3:
                    retorno = (retorno + (formaPagamento.Valor * retorno / 100));
                    break;
                case 2:
                    retorno = (retorno - (formaPagamento.Valor * retorno / 100));
                    break;
            }
        }
        this.lblTotalFinal.Text = (retorno).Format(ValoresSismoura.CasasDecimaisValor);
        this.GetScope().$applyAsync();
        return true;
    };
    C_ComPed.prototype.GetTotal = function () {
        var total;
        total = 0;
        if (this.Produtos) {
            if (this.Produtos.length > 0) {
                for (var x = 0; x < this.Produtos.length; x++) {
                    var entidade = this.Produtos[x];
                    //------------------------------------------
                    //Atividade: 1148659
                    //------------------------------------------
                    total += entidade.Valor_Unitario_Final;
                    //total += entidade.Total;
                    //------------------------------------------
                }
            }
        }
        return total;
    };
    C_ComPed.prototype.GetDescontoUnitarioTotal = function () {
        var total;
        total = 0;
        if (this.Produtos) {
            if (this.Produtos.length > 0) {
                for (var x = 0; x < this.Produtos.length; x++) {
                    var entidade = this.Produtos[x];
                    total += entidade.Desconto_Unitario * entidade.Quantidade;
                }
            }
        }
        return total;
    };
    C_ComPed.prototype.GetIPITotal = function () {
        var total;
        total = 0;
        if (this.Produtos) {
            if (this.Produtos.length > 0) {
                for (var x = 0; x < this.Produtos.length; x++) {
                    var entidade = this.Produtos[x];
                    total += entidade.Ipi * entidade.Quantidade;
                }
            }
        }
        return total;
    };
    C_ComPed.prototype.GetICMSTotal = function () {
        var total;
        total = 0;
        if (this.Produtos) {
            if (this.Produtos.length > 0) {
                for (var x = 0; x < this.Produtos.length; x++) {
                    var entidade = this.Produtos[x];
                    total += entidade.ICMS * entidade.Quantidade;
                }
            }
        }
        return total;
    };
    C_ComPed.prototype.OnClickFinalizar = function (s, e) {
        var entidade = this.GetScope().Entity;
        if (entidade.Codigo <= 0) {
            MostrarAlerta("Informe o pedido");
            return;
        }
        if (entidade.Data_Aprovacao == undefined || entidade.Data_Aprovacao == null) {
            MostrarAlerta("Pedido ainda não foi aprovado!");
            return;
        }
        var tipo = "";
        if (!this.finalizado) {
            tipo = "finalizar a entrega";
        }
        else {
            tipo = "estornar a entrega";
        }
        MsgBoxJS("Deseja realmente " + tipo + " este pedido?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRepostaFinalizarPedido, this));
    };
    C_ComPed.prototype.OnClickAprovar = function (s, e) {
        e.processOnServer = false;
        this.Aprovar();
    };
    C_ComPed.prototype.Aprovar = function () {
        var entidade = this.GetScope().Entity;
        if (entidade.Codigo <= 0 && this.hdnAprovado.value == "S") {
            MostrarAlerta("Informe o pedido");
            return;
        }
        if (entidade.Finalizado && this.hdnAprovado.value == "S") {
            MostrarAlerta("Pedido já finalizado, por favor, estornar a entrega.");
            return;
        }
        MsgBoxJS("Deseja realmente " + this.btnAprovar.Text.toString() + " este pedido?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRepostaAprovarPedido, this));
    };
    C_ComPed.prototype.OnRepostaAprovarPedido = function (result) {
        var entidade = this.GetScope().Entity;
        var Mudar_Status_Pedido_Compra;
        var OperacaoPedidoCompra;
        var situacao;
        if (result.Resultado == MsgBoxResult.No) {
            this.ValidarBotaoValidar();
            this.ValidarBotaoFinalizar();
            return;
        }
        var parametros;
        parametros = {
            codigoPedido: CNum(entidade.Codigo)
        };
        //Para verificar se é uma aprovação no ClicarGravar.
        this.hdnPedido.value = "1";
        if (this.hdnAprovado.value == "N") {
            Mudar_Status_Pedido_Compra = this.ExecutarFuncaoServerSideSynch("PedCompra_Status_Aprovado", parametros);
            this.dlgFuncaoAdm.Verificar("solsenpe", ValoresSismoura.UsuarioLogado, true, this.VerificarAutorizacaoAprovar, this);
            if (!this.verificadoAutorizacaoAprovar) {
                return;
            }
            if (Mudar_Status_Pedido_Compra) {
                if (this.cboSituacaoPedido) {
                    this.cboSituacaoPedido.SetValue("APROVADO");
                    entidade.Situacao = this.cboSituacaoPedido.GetValue().CNum();
                }
            }
            situacao = this.ExecutarFuncaoServerSideSynch("GetSituacaoMudarAoAprovar", parametros);
            if (situacao) {
                if (this.cboSituacaoPedido) {
                    this.cboSituacaoPedido.SetValue(situacao.Codigo);
                    entidade.Situacao = this.cboSituacaoPedido.GetValue().CNum();
                }
            }
            entidade.Data_Aprovacao = new Date();
            entidade.Usuario_Aprovou = ValoresSismoura.UsuarioLogado;
            parametros = {
                codSituacao: this.GetScope().Entity.Situacao,
                codTipoSituacao: 3
            };
            if (this.cboSituacaoPedido) {
                if (this.cboSituacaoPedido.Combo.GetItemCount() > 0) {
                    OperacaoPedidoCompra = this.ExecutarFuncaoServerSideSynch("RetornaOperacaoPedidoCompra", parametros);
                    if (OperacaoPedidoCompra) {
                        parametros = {
                            codPedido: this.GetScope().Entity.Codigo,
                            usuarioLogado: ValoresSismoura.UsuarioLogado,
                            nomeTela: ValoresSismoura.NomeTela
                        };
                        this.ExecutarFuncaoServerSideSynch("VoltarContasPagar", parametros);
                        parametros = {
                            produtos: this.Produtos,
                            usuarioLogado: ValoresSismoura.UsuarioLogado,
                            nomeTela: ValoresSismoura.NomeTela,
                            tipo: "Somar"
                        };
                        this.ExecutarFuncaoServerSideSynch("AtualizarEstoque", parametros);
                    }
                }
            }
        }
        else {
            this.dlgFuncaoAdm.Verificar("solsenpe", ValoresSismoura.UsuarioLogado, true, this.VerificarAutorizacaoAprovar, this);
            if (!this.verificadoAutorizacaoAprovar) {
                return;
            }
            parametros = {
                codSituacao: this.GetScope().Entity.Situacao,
                codTipoSituacao: 3
            };
            if (this.cboSituacaoPedido) {
                if (this.cboSituacaoPedido.Combo.GetItemCount() > 0) {
                    OperacaoPedidoCompra = this.ExecutarFuncaoServerSideSynch("RetornaOperacaoPedidoCompra", parametros);
                    if (OperacaoPedidoCompra) {
                        parametros = {
                            codPedido: this.GetScope().Entity.Codigo,
                            usuarioLogado: ValoresSismoura.UsuarioLogado,
                            nomeTela: ValoresSismoura.NomeTela
                        };
                        this.ExecutarFuncaoServerSideSynch("VoltarContasPagar", parametros);
                        parametros = {
                            produtos: this.Produtos,
                            usuarioLogado: ValoresSismoura.UsuarioLogado,
                            nomeTela: ValoresSismoura.NomeTela,
                            tipo: "Subtrair"
                        };
                        this.ExecutarFuncaoServerSideSynch("AtualizarEstoque", parametros);
                    }
                }
            }
            entidade.Data_Aprovacao = undefined;
            entidade.Usuario_Desaprovou = ValoresSismoura.UsuarioLogado;
        }
        this.GetScope().$applyAsync();
        this.ClicarGravar();
    };
    C_ComPed.prototype.OnRepostaFinalizarPedido = function (result) {
        var entidade = this.GetScope().Entity;
        this.hdnFinalizado.value = "1";
        if (result.Resultado == MsgBoxResult.No) {
            this.ValidarEstadoBotoes();
            return;
        }
        if (!this.finalizado) {
            entidade.Finalizado = true;
        }
        else {
            entidade.Finalizado = false;
        }
        this.GetScope().$applyAsync();
        this.ClicarGravar();
    };
    C_ComPed.prototype.ValidarBotaoValidar = function () {
        if (this.btnAprovar) {
            if (this.hdnAprovado.value == "N") {
                this.btnAprovar.Text = "Aprovar";
            }
            else {
                this.btnAprovar.Text = "Desaprovar";
            }
        }
    };
    C_ComPed.prototype.ValidarEstadoBotoes = function () {
        this.ValidarBotaoValidar();
        this.ValidarBotaoFinalizar();
    };
    C_ComPed.prototype.ValidarBotaoFinalizar = function () {
        if (!this.finalizado) {
            this.btnFinalizarEntrega.Text = "Finalizar Entrega";
        }
        else {
            this.btnFinalizarEntrega.Text = "Estornar Entrega";
        }
    };
    C_ComPed.prototype.VerificarAutorizacaoAprovar = function (retorno) {
        if (retorno.Autorizado) {
            this.verificadoAutorizacaoAprovar = true;
        }
        else {
            this.verificadoAutorizacaoAprovar = false;
        }
    };
    C_ComPed.prototype.OnClickImprimir = function (s, e) {
        var entidade = this.GetScope().Entity;
        var parametros;
        if (entidade.Codigo <= 0) {
            e.processOnServer = false;
            MostrarAlerta("Informe o pedido");
            return;
        }
        //parametros = {
        //    codPedido: entidade.Codigo,
        //    codUsuario: ValoresSismoura.UsuarioLogado,
        //    nomeTela: ValoresSismoura.NomeTela
        //}
        //this.ExecutarFuncaoServerSideSynch("ImprimirPedido", parametros);
        setTimeout($.proxy(function () { this.ValidarEstadoBotoes(); }, this), 5000);
    };
    C_ComPed.prototype.OnClickExportar = function (s, e) {
        if (this.GetScope().Entity.Codigo <= 0) {
            MostrarAlerta("Informe o pedido");
            e.processOnServer = false;
            return;
        }
    };
    C_ComPed.prototype.OnClickPlanejamentoEstoque = function (s, e) {
        e.processOnServer = false;
        var url = this.hdnURLPlanejamento.value;
        abrirTelaNovaAbaCodigo(url, "0");
    };
    C_ComPed.prototype.OnClickImportarSolicitacao = function (s, e) {
        e.processOnServer = false;
        this.mdImportarSolicitacao.Show();
    };
    C_ComPed.prototype.OnClickEstoque = function (s, e) {
        e.processOnServer = false;
        if (this.txtProduto.GetText().CNum() == 0) {
            MostrarAlerta("Insira um produto para ver seu estoque!");
            this.txtProduto.Focus();
            return;
        }
        var parametros;
        var estoqueDepositoProdutos;
        var codDeposito = 0;
        if (this.txtProduto.GetText().CNum() < 0) {
            return;
        }
        if (this.cboDeposito.GetValue() != null && this.cboDeposito.GetValue() != undefined) {
            codDeposito = this.cboDeposito.GetValue();
        }
        parametros = {
            codProduto: this.txtProduto.GetText().CNum(),
            codEmpresa: this.EntityTela.Empresa_Destino,
            codDeposito: codDeposito
        };
        this.lblProduto.Text = this.txtDescricaoProduto.GetText();
        estoqueDepositoProdutos = this.ExecutarFuncaoServerSideSynch("RetornarEstoqueDepositoProduto", parametros);
        if (estoqueDepositoProdutos) {
            this.grdDepositoEstoque.PreencherGrid(estoqueDepositoProdutos);
        }
        this.mdEstoque.Show();
    };
    C_ComPed.prototype.OnClickCancelarDuplicata = function (s, e) {
        e.processOnServer = false;
        this.mdDuplicatas.Hide();
    };
    C_ComPed.prototype.OnClickOKDuplicata = function (s, e) {
        try {
            e.processOnServer = false;
            var parametros;
            var codDocMerc = 0;
            var codPagamento = 0;
            if (this.txtContaContabil.GetText().CNum() == 0) {
                MostrarAlerta("Preencha corretamente o campo: " + this.txtContaContabil.GetTextLabelControl());
                this.txtContaContabil.Limpar();
                this.txtContaContabil.Focus();
                return;
            }
            if (this.cboContaCorrente.GetContaCorrente().CNum() == 0) {
                MostrarAlerta("Preencha corretamente o campo: " + this.cboContaCorrente.GetTextLabelControl());
                this.cboContaCorrente.Limpar();
                this.cboContaCorrente.Combo.Focus();
                return;
            }
            if (this.cboDocMercantil.GetValue()) {
                codDocMerc = this.cboDocMercantil.GetValue().CNum();
            }
            if (this.cboFormaPagamentoD.GetValue()) {
                codPagamento = this.cboFormaPagamentoD.GetValue().CNum();
            }
            parametros = {
                parcelas: this.Parcelas,
                Tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado,
                codPedido: this.txtCodigo.GetText().CNum(),
                codFornecedor: this.txtFornecedorD.GetText().CNum(),
                codDocMerc: codDocMerc,
                nDocMerc: this.txtNDocBancario.GetText(),
                codPagamento: codPagamento,
                codContaContabil: this.txtContaContabil.GetText().CNum(),
                dataEmissao: this.txtDataEmissaoD.Date.FormataData(),
                codContaCorrente: this.cboContaCorrente.GetContaCorrente()
            };
            var parcelas = this.ExecutarFuncaoServerSideSynch("GerarPagamentoPedido", parametros);
            this.mdDuplicatas.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ComPed.prototype.OnClickGerarDuplicata = function (s, e) {
        e.processOnServer = false;
        var pedidoCompra = this.GetScope().Entity;
        var parametros;
        if (this.txtParcelas.GetText().CNum() > 60) {
            MostrarAlerta("O número máximo de parcelas possíveis para gerar é 60!");
            this.txtParcelas.Focus();
            return;
        }
        else if (this.txtParcelas.GetText().CNum() == 0) {
            MostrarAlerta("Número mínimo de parcelas: 1!");
            this.txtParcelas.Focus();
            return;
        }
        if (this.txtDias.GetText().CNum() == 0 && this.txtParcelas.GetText().CNum() > 1) {
            MostrarAlerta("Informe no mínimo o dia 1");
            this.txtDias.Focus();
            return;
        }
        if (this.cboTipoDias.GetValue() == "F") {
            if (this.txtDias.GetText().CNum() > 31) {
                MostrarAlerta("Informe um número menor ou igual a 31");
                this.txtDias.Focus();
                return;
            }
        }
        if (this.txtVencInicial.Date == null && this.txtVencInicial.Date == undefined) {
            MostrarAlerta("Informe o vencimento inicial para gerar as parcelas!");
            this.txtVencInicial.Focus();
            return;
        }
        parametros = {
            codPedido: pedidoCompra.Codigo,
            nParcelas: this.txtParcelas.GetText().CNum(),
            nDias: this.txtDias.GetText().CNum(),
            valorTotal: pedidoCompra.Total_Comdesconto,
            dataEmissao: this.txtDataEmissaoD.Date,
            vencInicial: this.txtVencInicial.Date,
            tipoDias: this.cboTipoDias.GetValue()
        };
        var parcelas = this.ExecutarFuncaoServerSideSynch("GerarDuplicatas", parametros);
        this.Parcelas = parcelas;
        this.grdParcelas.PreencherGrid(parcelas);
        this.grdParcelas.Refresh();
        this.GetScope().$applyAsync();
    };
    C_ComPed.prototype.OnClickDuplicata = function (s, e) {
        e.processOnServer = false;
        var parametros;
        var pedidoCompra = this.GetScope().Entity;
        var duplicata;
        if (pedidoCompra.Codigo <= 0) {
            MostrarAlerta("Informe um registro cadastrado");
            return;
        }
        if (pedidoCompra.Fornecedor > 0) {
            this.txtFornecedorD.Procurar(pedidoCompra.Fornecedor.toString());
        }
        if (this.txtParcelas) {
            this.txtParcelas.SetText("1");
        }
        parametros = {
            codPedido: pedidoCompra.Codigo
        };
        duplicata = this.ExecutarFuncaoServerSideSynch("CarregarDuplicata", parametros);
        if (duplicata) {
            if (this.txtContaContabil) {
                this.txtContaContabil.Procurar(duplicata.Conta_Contabil.toString());
            }
            if (this.cboFormaPagamentoD) {
                this.cboFormaPagamentoD.SetValue(duplicata.Doc_Bancario.toString());
            }
            if (this.cboContaCorrente) {
                this.cboContaCorrente.Combo.SetValue(duplicata.Conta_Corrente);
            }
            if (this.txtDataEmissaoD) {
                this.txtDataEmissaoD.Date = duplicata.Data_Emissao.FormataData().ToDate();
            }
            if (this.cboDocMercantil) {
                this.cboDocMercantil.SetValue(duplicata.Doc_Merc.toString());
            }
            if (this.txtNDocBancario) {
                this.txtNDocBancario.SetText(duplicata.N_Doc_Bancario);
            }
        }
        else {
            if (pedidoCompra.Data_Emissao) {
                this.txtDataEmissaoD.Date = pedidoCompra.Data_Emissao.FormataData().ToDate();
            }
        }
        var parcelas = this.ExecutarFuncaoServerSideSynch("GetPedidoCompraPagamentoItensByPedido", parametros);
        this.Parcelas = parcelas;
        this.grdParcelas.PreencherGrid(parcelas);
        this.grdParcelas.Refresh();
        this.GetScope().$applyAsync();
        if (this.hdnAprovado.value == "S") {
            this.alterarBotaoOkDuplicata(true);
        }
        else {
            this.alterarBotaoOkDuplicata(false);
        }
        this.mdDuplicatas.Show();
    };
    C_ComPed.prototype.OnDepoisEditarItem = function (s, e) {
        if (e.propriedade == "Dias") {
            e.item.Data_Vencimento = this.txtDataEmissaoD.Date.addDays(e.item.Dias);
        }
        if (e.propriedade == "Data_Vencimento") {
            var diff = e.item.Data_Vencimento.getTime() - this.txtDataEmissaoD.Date.getTime();
            var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
            e.item.Dias = diffDays;
        }
        this.grdParcelas.Refresh();
        this.GetScope().$applyAsync();
    };
    C_ComPed.prototype.OnClickImprimirApenasNChegaram = function (s, e) {
        e.processOnServer = false;
        var parametros;
        var produtosQueNaoChegaram;
        var notasQueJaChegaram;
        if (this.txtCodigo.GetText().CNum() <= 0) {
            return;
        }
        parametros = {
            codPedido: this.txtCodigo.GetText().CNum()
        };
        produtosQueNaoChegaram = this.ExecutarFuncaoServerSideSynch("RetornaProdutoNaoChegaram", parametros);
        if (produtosQueNaoChegaram) {
            this.grdImprimirApenasNChegaram.PreencherGrid(produtosQueNaoChegaram);
        }
        notasQueJaChegaram = this.ExecutarFuncaoServerSideSynch("RetornaNotasJaChegaram", parametros);
        if (!String.IsNullOrWhiteSpace(notasQueJaChegaram)) {
            this.lblNotasJaChegaram.Text = notasQueJaChegaram;
        }
        this.mdImprimirApenasNChegaram.Show();
    };
    C_ComPed.prototype.OnClickHistoricoProduto = function (s, e) {
        e.processOnServer = false;
        if (this.txtProduto.GetText().CNum() > 0) {
            this.LimparCamposHistoricoProduto();
            this.PreencherHistoricoProduto();
            this.mdHistoricoProduto.Show();
        }
    };
    C_ComPed.prototype.OnlstTipoHistoricoChange = function () {
        this.lstTipoHistorico.SetEnabledByIndex(this.txtFornecedor.GetText().CNum() == 0, 1);
        if (this.lstTipoHistorico.GetValue() == "P") {
            this.lblHistoricoProduto.SetTextLabelControl("Produto");
            this.lblHistoricoProduto.Text = this.txtDescricaoProduto.GetText();
        }
        else {
            this.lblHistoricoProduto.SetTextLabelControl("Fornecedor");
            this.lblHistoricoProduto.Text = this.txtFornecedor.GetResultado();
        }
        this.PreencherHistoricoProduto();
    };
    C_ComPed.prototype.OnCheckPedidosAprovadosChange = function () {
        this.PreencherHistoricoProduto();
    };
    C_ComPed.prototype.OnCheckPedidosVinculadosChange = function () {
        this.PreencherHistoricoProduto();
    };
    C_ComPed.prototype.LimparCamposHistoricoProduto = function () {
        this.lblHistoricoProduto.Text = "";
        this.lstTipoHistorico.SetValue("P");
        this.chkPedidosAprovados.Checked = false;
        this.chkPedidosVinculadosEntradaProduto.Checked = false;
        this.grdHistoricoDoProduto.PreencherGrid([]);
    };
    C_ComPed.prototype.PreencherHistoricoProduto = function () {
        var parametros;
        var produtos;
        var fornecedor = 0;
        if (this.lstTipoHistorico.GetValue() == "F") {
            fornecedor = this.txtFornecedor.GetText().CNum();
        }
        parametros = {
            codProduto: this.txtProduto.GetText().CNum(),
            codFornecedor: fornecedor,
            aprovados: this.chkPedidosAprovados.Checked,
            vinculadosEntrada: this.chkPedidosVinculadosEntradaProduto.Checked
        };
        produtos = this.ExecutarFuncaoServerSideSynch("RetornaHistoricoProdutos", parametros);
        this.grdHistoricoDoProduto.PreencherGrid(produtos);
    };
    C_ComPed.prototype.OnGrdProdutosSelecionouItem = function (s, e) {
        this.hdnProdutoSelecionado.value = "1";
        this.Produto = e.item;
        this.GetScope().$applyAsync();
    };
    C_ComPed.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var entidade = this.GetScope().Entity;
        var situacao;
        situacao = this.ExecutarFuncaoServerSideSynch("GetSituacao", { codSituacao: CNum(entidade.Situacao) });
        if (situacao) {
            if (situacao.Auto_Aprovar) {
                this.Aprovar();
                return false;
            }
        }
        if (this.hdnPedido.value.CNum() == 1) {
            //Apenas para verificar se é uma aprovação ou GravarAlterar
        }
        else if (this.hdnFinalizado.value.CNum() == 1) {
            //Apenas para verificar se é uma finalização do pedido.
        }
        else if (entidade.Data_Aprovacao != null) {
            MostrarAlerta("Pedido não pode ser alterado, pois o mesmo ja foi aprovado!");
            return false;
        }
        entidade.Total_Comdesconto = this.lblTotalFinal.Text.CNum();
        this.PreencherProdutos(entidade);
        return true;
    };
    C_ComPed.prototype.PreencherProdutos = function (entidade) {
        var produtos = this.Produtos;
        var produtosExistentes = entidade.Produtos;
        entidade.Produtos = [];
        for (var x = 0; x < produtos.length; x++) {
            var novoProduto = {};
            var produtoGrid;
            for (var y = 0; y < produtosExistentes.length; y++) {
                if (produtosExistentes[y].Codigo == produtos[x].Codigo) {
                    novoProduto = produtosExistentes[y];
                    y = produtosExistentes.length;
                }
            }
            produtoGrid = produtos[x];
            novoProduto.Codigo = produtoGrid.Codigo;
            novoProduto.Pedido = produtoGrid.Pedido_Codigo;
            novoProduto.Produto = produtoGrid.Produto_Codigo;
            novoProduto.Qtde = produtoGrid.Quantidade;
            novoProduto.Valor = produtoGrid.Preco_Custo;
            novoProduto.Produto_Nome = produtoGrid.Produto_Descricao;
            novoProduto.Observacao = produtoGrid.Observacao;
            novoProduto.Ipi = produtoGrid.Ipi;
            novoProduto.Icms_St = produtoGrid.ICMS;
            novoProduto.Ipi_Porcentagem = produtoGrid.Ipi_Porcentagem;
            novoProduto.Desconto_V = produtoGrid.Desconto_Unitario;
            novoProduto.Desconto_P = produtoGrid.Desconto_Unitario_Porcentagem;
            novoProduto.Deposito = produtoGrid.Deposito;
            if (produtoGrid.Codigo_Produto_Fornecedor)
                novoProduto.Codigo_Produto_Fornecedor = produtoGrid.Codigo_Produto_Fornecedor.toString();
            novoProduto.Desconto_P2 = produtoGrid.Desconto_Unitario_Porcentagem_2;
            novoProduto.Desconto_P3 = produtoGrid.Desconto_Unitario_Porcentagem_3;
            novoProduto.Campo_Personalizado = produtoGrid.Campo_Personalizado;
            if (novoProduto.Deposito <= 0) {
                MostrarAlerta("Produto: " + novoProduto.Produto_Nome + " não foi escolhido o depósito!");
                return false;
            }
            entidade.Produtos.push(novoProduto);
        }
    };
    C_ComPed.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.hdnPedido.value = "";
        this.hdnFinalizado.value = "";
        return true;
    };
    C_ComPed.prototype.OnAntesDeletar = function () {
        _super.prototype.OnAntesDeletar.call(this);
        if (this.hdnAprovado.value == "S") {
            MostrarAlerta("Pedido já foi aprovado, o mesmo não pode ser excluído!");
            return false;
        }
        return true;
    };
    C_ComPed.prototype.RetornaNotasJaChegaram = function () {
        var parametros;
        var notasJaChegaram;
        parametros = {
            codPedido: this.txtCodigo.GetText().CNum()
        };
        notasJaChegaram = this.ExecutarFuncaoServerSideSynch("RetornaNotasJaChegaram", parametros);
        return notasJaChegaram;
    };
    C_ComPed.prototype.AtualizaTotal = function () {
        if (this.Produtos) {
            if (this.Produtos.length > 0) {
                for (var x = 0; x < this.Produtos.length; x++) {
                    this.Produtos[x].Total = this.Produtos[x].Preco_Custo * this.Produtos[x].Quantidade;
                    this.Produtos[x].Valor_Unitario_Final = (this.Produtos[x].Preco_Custo - this.Produtos[x].Desconto_Unitario + this.Produtos[x].ICMS + this.Produtos[x].Ipi) * this.Produtos[x].Quantidade;
                }
            }
        }
    };
    C_ComPed.prototype.OntxtProdutoChange = function () {
        this.hdnProdutoSelecionado.value = "";
    };
    C_ComPed.prototype.LimparModalImportarProdutos = function () {
        // Depósito
        var parametros = {
            codEmpresa: this.EntityTela.Empresa_Destino
        };
        this.itens = this.ExecutarFuncaoServerSideSynch("PreencherComboDeposito", parametros);
        if (this.cboDepositoImp && this.cboDepositoImp.Combo) {
            this.cboDepositoImp.ClearItems();
            for (var x = 0; x < this.itens.length; x++) {
                this.cboDepositoImp.Combo.AddItem(this.itens[x].Descricao, this.itens[x].Codigo, "");
            }
        }
        this.cboDepositoImp.SetSelectedIndex(0);
        this.cboDepositoImp.SetValue(0);
        this.txtFornecedorImp.Limpar();
        this.txtGrupoImp.Limpar();
        this.txtSubGrupoImp.Limpar();
        this.txtReferenciaImp.SetText("");
        this.txtLinhaImp.Limpar();
        this.txtCorImp.Limpar();
        this.txtMarcaImp.Limpar();
        //this.grdImportarProdutos.Grid.PreencherGrid(null);
        this.grdImportarProdutos.Grid.Grid.clearSelection();
    };
    C_ComPed.prototype.OnClicouImportarProdutos = function (s, e) {
        e.processOnServer = false;
        if (CNum(this.txtFornecedor.GetText()) <= 0) {
            MostrarAlerta("Informe o Fornecedor!");
            return;
        }
        this.LimparModalImportarProdutos();
        this.mdImpProdCompra.Show();
        this.ImpProds = [];
        this.RefreshAngular();
    };
    C_ComPed.prototype.OnFechouMdImportar = function (e) {
        this.LimparModalImportarProdutos();
    };
    C_ComPed.prototype.OnClicouGerarImportarProdutos = function (s, e) {
        e.processOnServer = false;
        if (this.cboDepositoImp.GetSelectedIndex() == 0) {
            MostrarAlerta("Selecione um depósito!");
            return;
        }
        var parametros = {
            Fornecedor: CNum(this.txtFornecedorImp.GetText()),
            Grupo: CNum(this.txtGrupoImp.GetText()),
            SubGrupo: CNum(this.txtSubGrupoImp.GetText()),
            Linha: CNum(this.txtLinhaImp.GetText()),
            Marca: CNum(this.txtMarcaImp.GetText()),
            Referencia: this.txtReferenciaImp.GetText().trim(),
            Cor: CNum(this.txtCorImp.GetText()),
            Deposito: CNum(this.cboDepositoImp.GetValue())
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetProdutosImportacao", parametros);
        this.grdImportarProdutos.Grid.PreencherGrid([]);
        //this.grdImportarProdutos.Grid.DataSource = [];
        this.grdImportarProdutos.Grid.Grid.clearSelection();
        this.ImpProds = retorno;
        this.RefreshAngular();
    };
    C_ComPed.prototype.OnClicouConcluirImportarProdutos = function (s, e) {
        e.processOnServer = false;
        var entidade = this.GetScope().Entity;
        var lista = this.grdImportarProdutos.Grid.GetSelectedRowsData.filter(function (e) { return e.Quantidade > 0; });
        if (lista.length <= 0) {
            MostrarAlerta("Selecione ao menos um produto com a quantidade maior que zero!");
            return;
        }
        if ((lista.Sum("Preco_Custo") * lista.Sum("Quantidade")) + (this.Produtos.Sum("Preco_Custo") * this.Produtos.Sum("Quantidade")) >= 999999999999) {
            MostrarAlerta("A Quantidade x Valor Unitário ou o Total nas duas tabelas, não podem ultrapassar o valor de R$999.999.999.999,00!");
            return;
        }
        // Fazer um por um os produtos igual ao OnValidandoItemProduto
        for (var i = 0; i < lista.length; i++) {
            var entidadeProduto;
            var produtoFornecedores;
            entidadeProduto = lista[i];
            if (this.Produtos.length <= 0) {
                entidadeProduto.Contador = 1;
            }
            else {
                entidadeProduto.Contador = this.Produtos.length + 1;
            }
            var parametros = {
                codProduto: lista[i].Produto_Codigo,
                codFornecedor: this.txtFornecedor.GetText().CNum()
            };
            var InformacoesAdicionais = this.ExecutarFuncaoServerSideSynch("GetInformacoesAdicionaisProduto", parametros);
            entidadeProduto.Codigo = CNum(lista[i].Codigo_Produto);
            entidadeProduto.Produto_Descricao = entidadeProduto.Produto_Descricao;
            entidadeProduto.Deposito = CNum(this.cboDepositoImp.GetValue());
            entidadeProduto.Deposito_Descricao = this.cboDepositoImp.GetText();
            entidadeProduto.Quantidade = CNum(lista[i].Quantidade);
            entidadeProduto.Preco_Custo = CNum(lista[i].Preco_Custo);
            entidadeProduto.Desconto_Unitario = CNum(lista[i].Desconto_Unitario);
            entidadeProduto.Desconto_Unitario_Porcentagem_2 = null;
            entidadeProduto.Desconto_Unitario_Porcentagem_3 = null;
            entidadeProduto.ICMS = CNum(lista[i].ICMS);
            if (InformacoesAdicionais.Produto) {
                entidadeProduto.Referencia = InformacoesAdicionais.Produto.Referencia;
                entidadeProduto.Estoque_Atual = CNum(lista[i].Estoque_Atual);
                entidadeProduto.Estoque_Minimo = InformacoesAdicionais.Produto.Estoque_Minimo;
                if (InformacoesAdicionais.Produto.MarcaEntity)
                    entidadeProduto.Marca = InformacoesAdicionais.Produto.MarcaEntity.Nome;
                entidadeProduto.Observacao = InformacoesAdicionais.Produto.Observacao;
                entidadeProduto.Unidade = InformacoesAdicionais.Produto.Unidade;
                entidadeProduto.Total = entidadeProduto.Quantidade * (entidadeProduto.Preco_Custo - entidadeProduto.Desconto_Unitario);
                entidadeProduto.Multiplo = 0; // Seta 0 (sem múltiplo) caso ele não entre no if
                //Produto_Fornecedor (Multiplo)
                if (InformacoesAdicionais.Produto.Fornecedores) {
                    produtoFornecedores = InformacoesAdicionais.Produto.Fornecedores;
                    if (produtoFornecedores && produtoFornecedores.length > 0) {
                        for (var x = 0; x < produtoFornecedores.length; x++) {
                            if (produtoFornecedores[x].Fornecedor === entidade.Fornecedor && produtoFornecedores[x].Empresa === entidade.Empresa_Destino) {
                                entidadeProduto.Multiplo = produtoFornecedores[x].Entr_Prod_Converter_Valor;
                            }
                        }
                    }
                }
                if (InformacoesAdicionais.Produto.Peso_Produto)
                    entidadeProduto.Peso_Produto = InformacoesAdicionais.Produto.Peso_Produto;
                if (InformacoesAdicionais.Produto.ModeloEntity)
                    entidadeProduto.Modelo = InformacoesAdicionais.Produto.ModeloEntity.Descricao;
                if (InformacoesAdicionais.Produto.CorEntity)
                    entidadeProduto.Cor = InformacoesAdicionais.Produto.CorEntity.Nome;
                if (InformacoesAdicionais.Produto.Tamanho)
                    entidadeProduto.Tamanho = InformacoesAdicionais.Produto.Tamanho;
                entidadeProduto.Valor_Unitario_Final = (entidadeProduto.Preco_Custo - entidadeProduto.Desconto_Unitario + entidadeProduto.ICMS + entidadeProduto.Ipi) * entidadeProduto.Quantidade;
                entidadeProduto.Codigo_Produto_Fornecedor = InformacoesAdicionais.Codigo_Produto_Fornecedor;
                if (InformacoesAdicionais.Produto.Codigo_Barra)
                    entidadeProduto.Codigo_Barra = InformacoesAdicionais.Produto.Codigo_Barra;
            }
            if (this.Produtos && this.Produtos.length > 0) {
                for (var x = 0; x < this.Produtos.length; x++) {
                    if (this.Produtos[x].Produto_Codigo > 0 && this.Produtos[x].Produto_Codigo === entidadeProduto.Produto_Codigo) {
                        this.Produtos.splice(x, 1); // Tira da lista caso já houver para colocar novamente
                    }
                }
            }
            this.Produtos.push(entidadeProduto);
        }
        this.RefreshAngular();
        this.mdImpProdCompra.Hide();
        this.totalizarProdutos();
    };
    C_ComPed.prototype.OnValidandoGrdImportar = function (s, e) {
        try {
            var entity = e.item;
            var entityOld = cloneObject(e.oldRowValue);
            if (CNum(entity.Preco_Custo) < 0 ||
                CNum(entity.Quantidade) < 0 ||
                CNum(entity.Desconto_Unitario) < 0 ||
                CNum(entity.Desconto_Unitario_Porcentagem) < 0 ||
                CNum(entity.Ipi_Porcentagem) < 0 ||
                CNum(entity.Ipi) < 0 ||
                CNum(entity.ICMS) < 0) {
                e.cancelar = true;
                return;
            }
            // Change do IPI
            // %
            if (CNum(entity.Ipi_Porcentagem) != CNum(entityOld.Ipi_Porcentagem)) {
                this.OnIPIPorcImportarChange(entity);
            }
            // R$
            if (CNum(entity.Ipi) != CNum(entityOld.Ipi)) {
                this.OnIPIRealImportarChange(entity);
            }
            // Change dos descontos
            // %
            if (CNum(entity.Desconto_Unitario_Porcentagem) != CNum(entityOld.Desconto_Unitario_Porcentagem)) {
                this.OnDescPorcImportarChange(entity);
            }
            // R$
            if (CNum(entity.Desconto_Unitario) != CNum(entityOld.Desconto_Unitario)) {
                this.OnDescRealImportarChange(entity);
            }
            // Change do preço de custo
            if (CNum(entity.Preco_Custo) != CNum(entityOld.Preco_Custo)) {
                this.OnDescPorcImportarChange(entity);
                this.OnDescRealImportarChange(entity);
                this.OnIPIPorcImportarChange(entity);
                this.OnIPIRealImportarChange(entity);
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_ComPed.prototype.OnDescPorcImportarChange = function (entity) {
        this.OnIPIPorcImportarChange(entity);
        this.OnIPIRealImportarChange(entity);
        if (CNum(entity.Desconto_Unitario_Porcentagem) > 99.9) {
            MostrarAlerta("Desc. Unitário % não pode ser maior do que 99,9");
            entity.Desconto_Unitario_Porcentagem = 0;
            entity.Desconto_Unitario = 0;
            return;
        }
        entity.Desconto_Unitario = (entity.Desconto_Unitario_Porcentagem / 100) * entity.Preco_Custo;
    };
    C_ComPed.prototype.OnDescRealImportarChange = function (entity) {
        this.OnIPIPorcImportarChange(entity);
        this.OnIPIRealImportarChange(entity);
        if (CNum(entity.Desconto_Unitario) >= CNum(entity.Preco_Custo) && CNum(entity.Desconto_Unitario) > 0) {
            MostrarAlerta("O Valor do desconto unitário não pode ser maior ou igual ao Preço de Custo do produto!");
            entity.Desconto_Unitario_Porcentagem = 0;
            entity.Desconto_Unitario = 0;
            return;
        }
        if (CNum(entity.Desconto_Unitario_Porcentagem) == 0) {
            if (CNum(entity.Desconto_Unitario) > 0) {
                entity.Desconto_Unitario_Porcentagem = (100 * entity.Desconto_Unitario) / (entity.Preco_Custo * (100 - entity.Desconto_Unitario_Porcentagem) / 100);
            }
        }
        else {
            if (CNum(entity.Desconto_Unitario) > 0) {
                entity.Desconto_Unitario_Porcentagem = (entity.Desconto_Unitario * 100 / entity.Preco_Custo);
            }
        }
    };
    C_ComPed.prototype.OnIPIPorcImportarChange = function (entity) {
        var valorIpi = 0;
        valorIpi = ((entity.Preco_Custo * (100 - entity.Desconto_Unitario_Porcentagem) / 100) - entity.Desconto_Unitario) * (entity.Ipi_Porcentagem / 100);
        entity.Ipi = valorIpi;
        if (isNaN(entity.Ipi))
            entity.Ipi = 0;
    };
    C_ComPed.prototype.OnIPIRealImportarChange = function (entity) {
        var aliqIpi = 0;
        aliqIpi = (100 * entity.Ipi) / ((entity.Preco_Custo * ((100 - entity.Desconto_Unitario_Porcentagem) / 100)) - entity.Desconto_Unitario);
        entity.Ipi_Porcentagem = aliqIpi;
        if (isNaN(entity.Ipi_Porcentagem))
            entity.Ipi_Porcentagem = 0;
    };
    return C_ComPed;
}(MouraPageCadastroAngular));
var c_ComPed = new C_ComPed();
//# sourceMappingURL=C_ComPed.js.map