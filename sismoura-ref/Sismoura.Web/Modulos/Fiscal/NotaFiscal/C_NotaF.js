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
var Enum_Pagamentos_NF = {
    DinheiroNF: 1,
    ChequeNF: 2,
    CartaoCreditoNF: 3,
    CartaoDebitoNF: 4,
    CreditoLojaNF: 5,
    ValeAlimentacaoNF: 10,
    ValeRefeicaoNF: 11,
    ValePresenteNF: 12,
    ValeCombustivelNF: 13,
    DuplicataMercantilNF: 14,
    BoletoNF: 15,
    SemPagamentoNF: 90,
    OutrosNF: 99,
};
var motivosDesoneracao = {
    //'1': 'Táxi',
    '3': 'Produtor Agropecuário',
    '4': 'Frotista/Locadora',
    '5': 'Diplomático/Consular',
    '6': 'Utilitários e Motocicletas da Amazônia Ocidental e Áreas de Livre Comércio',
    '7': 'SUFRAMA',
    '8': 'Venda a Órgão Público',
    '9': 'Outros (NT 2016/002)',
    '10': 'Deficiente Condutor (Convênio ICMS 38/12)',
    '11': 'Deficiente Não Condutor (Convênio ICMS 38/12)',
    '12': 'Órgão de fomento e desenvolvimento agropecuário'
};
var C_NotaF = /** @class */ (function (_super) {
    __extends(C_NotaF, _super);
    function C_NotaF() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ICMSSTCalculado = false;
        _this.preencheuAnilha = false;
        return _this;
    }
    Object.defineProperty(C_NotaF.prototype, "grdItens", {
        get: function () {
            return window['grdProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtTipoLancamentoContabil_hdnEmpresaContabil", {
        get: function () {
            return $("#txtTipoLancamentoContabil_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "grdItensArquivo", {
        get: function () {
            return window['grdItensArquivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "cboCST", {
        get: function () {
            return window['cboCST_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "grdImportVenda", {
        get: function () {
            return window['grdImportVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "grdOrcamento", {
        get: function () {
            return window['grdOrcamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "grdEventosNFe", {
        get: function () {
            return window['grdEventosNFe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "tabProduto", {
        get: function () {
            return window['tabProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "ValidacoesEntrada", {
        get: function () {
            if (!this.GetScope()["ValidacoesEntrada"]) {
                return null;
            }
            else {
                return this.GetScope()["ValidacoesEntrada"];
            }
        },
        set: function (value) {
            this.GetScope()["ValidacoesEntrada"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "grdItensServico", {
        get: function () {
            return window['grdServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "grdNFRef", {
        get: function () {
            return window['grdNFRef_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnAdicionarProduto", {
        get: function () {
            return window['btnAdicionarProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnAdicionarServico", {
        get: function () {
            return window['btnAdicionarServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnImportarVendas", {
        get: function () {
            return window['btnImportarVendas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnImportarOrcamento", {
        get: function () {
            return window['btnImportarOrcamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnGerenciarNFe", {
        get: function () {
            return window['btnGerenciarNFe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnAdicionarNF", {
        get: function () {
            return window['btnAdicionarNF_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnMais", {
        get: function () {
            return window['btnMais_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnMenos", {
        get: function () {
            return window['btnMenos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnConfirmaEvento", {
        get: function () {
            return window['btnConfirmaEvento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnTransmitir", {
        get: function () {
            return window['btnTransmitir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnGerarXml", {
        get: function () {
            return window['btnGerarXml_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnAssinar", {
        get: function () {
            return window['btnAssinar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnConsultar", {
        get: function () {
            return window['btnConsultar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "mdProdutos", {
        get: function () {
            return window['mdProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "mdCobranca", {
        get: function () {
            return window['mdCobranca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "mdServicos", {
        get: function () {
            return window['mdServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "mdNFRef", {
        get: function () {
            return window['mdNFRef_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnOKNFRef", {
        get: function () {
            return window['btnOKNFRef_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnOKProduto", {
        get: function () {
            return window['btnOKProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnOKServico", {
        get: function () {
            return window['btnOKServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnOkImportVenda", {
        get: function () {
            return window['btnOkImportVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtDataInicialV", {
        get: function () {
            return window['txtDataInicialV_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtDataInicialO", {
        get: function () {
            return window['txtDataInicialO_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnAdicionarReceber", {
        get: function () {
            return window['btnAdicionarReceber_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtDataFinalV", {
        get: function () {
            return window['txtDataFinalV_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtDataFinalO", {
        get: function () {
            return window['txtDataFinalO_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtFormulario", {
        get: function () {
            return window['txtFormulario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "cboTipoRelacao", {
        get: function () {
            return window['cboTipoRelacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "cboCFOPNatureza", {
        get: function () {
            return window['cboCFOPNatureza_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtVendaInicial", {
        get: function () {
            return window['txtVendaInicial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtVendaFinal", {
        get: function () {
            return window['txtVendaFinal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtDadosAnilha", {
        get: function () {
            return window['txtDadosAnilha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "mdImportVenda", {
        get: function () {
            return window['mdImportVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "mdOrcamento", {
        get: function () {
            return window['mdOrcamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "mdTransmitirNFe", {
        get: function () {
            return window['mdTransmitirNFe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "mdDadosAdicionais", {
        get: function () {
            return window['mdDadosAdicionais_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "mdEventosNFe", {
        get: function () {
            return window['mdEventosNFe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtServico", {
        get: function () {
            return window['txtServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtValorTotalXml", {
        get: function () {
            return window['txtValorTotalXml_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtCodOrcamento", {
        get: function () {
            return window['txtCodOrcamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtSiscomexNota", {
        get: function () {
            return window['txtSiscomexNota_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtNotaXml", {
        get: function () {
            return window['txtNotaXml_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtChaveAcessoRef", {
        get: function () {
            return window['txtChaveAcessoRef_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnGerarOrcamento", {
        get: function () {
            return window['btnGerarOrcamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnAddDadosContribuinte", {
        get: function () {
            return window['btnAddDadosContribuinte_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnEventos", {
        get: function () {
            return window['btnEventos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnDanfe", {
        get: function () {
            return window['btnDanfe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnDeclararConteudo", {
        get: function () {
            return window['btnDeclararConteudo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtJustificativaEvento", {
        get: function () {
            return window['txtJustificativaEvento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "hdnCodigo", {
        get: function () {
            return $('#hdnCodigo')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "hdnSeriePadrao", {
        get: function () {
            return $('#hdnSeriePadrao')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "hdnEmpresa", {
        get: function () {
            return $('#hdnEmpresa')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "hdnCaminhoXML", {
        get: function () {
            return $('#hdnCaminhoXML')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "hdnProdutosNfe", {
        get: function () {
            return $('#hdnProdutosNfe')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "hdnQuantidadeTransp", {
        get: function () {
            return $('#hdnQuantidadeTransp')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "hdnPesoBrutoXml", {
        get: function () {
            return $('#hdnPesoBrutoXml')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "hdnPesoLiquidoXml", {
        get: function () {
            return $('#hdnPesoLiquidoXml')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "hdnValorProdutosXml", {
        get: function () {
            return $('#hdnValorProdutosXml')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "hdnEspecieTransp", {
        get: function () {
            return $('#hdnEspecieTransp')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "hdnGrupoFiscal", {
        get: function () {
            return $('#hdnGrupoFiscal')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "cboTipoEvento", {
        get: function () {
            return window['cboTipoEvento_comboBox'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "cbpEventoNFe", {
        get: function () {
            return window['cbpEventoNFe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "lblGrupoFiscal", {
        get: function () {
            return window['lblGrupoFiscal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "cboEstoque", {
        get: function () {
            return window['cboEstoque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtTipoLancamentoContabil", {
        get: function () {
            return window['txtTipoLancamentoContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "RelacaoVendas", {
        get: function () {
            return this.grdImportVenda.DataSource;
        },
        set: function (value) {
            this.grdImportVenda.PreencherGrid(value);
            if (value && value.length > 0) { //Lucas Viesi em 23/01/19 (solicitado por Leandro)
                this.cboEstoque.SetSelectedIndex(0);
                this.cboEstoque.Enabled = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "EventosNFe", {
        get: function () {
            return this.grdEventosNFe.DataSource;
        },
        set: function (value) {
            this.grdEventosNFe.PreencherGrid(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "RelacaoOrcamentos", {
        get: function () {
            return this.grdOrcamento.DataSource;
        },
        set: function (value) {
            this.grdOrcamento.PreencherGrid(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "ChavesReferenciadas", {
        get: function () {
            return this.grdNFRef.DataSource;
        },
        set: function (value) {
            this.grdNFRef.PreencherGrid(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "ProdutosNota", {
        get: function () {
            return this.grdItens.DataSource;
        },
        set: function (value) {
            this.grdItens.PreencherGrid(value);
            if (value && value.length > 0) { //Lucas Viesi em 23/01/19 (solicitado por Leandro)
                this.txtDestinatario.Disabled = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "ProdutoAnilhas", {
        get: function () {
            if (!this.GetScope()["ProdutoAnilhas"]) {
                return null;
            }
            else {
                return this.GetScope()["ProdutoAnilhas"];
            }
        },
        set: function (value) {
            this.GetScope()["ProdutoAnilhas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "ServicosCompra", {
        get: function () {
            if (!this.GetScope()["ServicosCompra"]) {
                return null;
            }
            else {
                return this.GetScope()["ServicosCompra"];
            }
        },
        set: function (value) {
            this.GetScope()["ServicosCompra"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "ProdutosCompra", {
        get: function () {
            if (!this.GetScope()["ProdutosCompra"]) {
                return null;
            }
            else {
                return this.GetScope()["ProdutosCompra"];
            }
        },
        set: function (value) {
            this.GetScope()["ProdutosCompra"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "FornecedorCompra", {
        get: function () {
            if (!this.GetScope()["FornecedorCompra"]) {
                return null;
            }
            else {
                return this.GetScope()["FornecedorCompra"];
            }
        },
        set: function (value) {
            this.GetScope()["FornecedorCompra"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "ServicosNota", {
        get: function () {
            return this.grdItensServico.DataSource;
        },
        set: function (value) {
            this.grdItensServico.PreencherGrid(value);
            if (value && value.length > 0) { //Lucas Viesi em 23/01/19 (solicitado por Leandro)
                this.txtDestinatario.Disabled = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "ContasGeradas", {
        get: function () {
            return this.grdContasGeradas.DataSource;
        },
        set: function (value) {
            this.grdContasGeradas.PreencherGrid(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtParcela", {
        get: function () {
            return window['txtParcela_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtDiasVencimento", {
        get: function () {
            return window['txtDiasVencimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtVencimentoInicial", {
        get: function () {
            return window['txtVencimentoInicial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "cboDiasFixo", {
        get: function () {
            return window['cboDiasFixo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnGerarReceber", {
        get: function () {
            return window['btnGerarReceber_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "cboDocumentoMercantilReceber", {
        get: function () {
            return window['cboDocumentoMercantilReceber_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtContaContabil", {
        get: function () {
            return window['txtContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnOkReceber", {
        get: function () {
            return window['btnOkReceber_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "grdContasGeradas", {
        get: function () {
            return window['grdContasGeradas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "grdContaReceber", {
        get: function () {
            return window['grdContaReceber_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "mdImportarXML", {
        get: function () {
            return window['mdImportarXML_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnOkImportar", {
        get: function () {
            return window['btnOkImportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "fUploadXml", {
        get: function () {
            return window['fUploadXml_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "lblFUNRURAL", {
        get: function () {
            return window['lblFUNRURAL_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "mdAnilha", {
        get: function () {
            return window['mdAnilha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtBuscaMicrochip", {
        get: function () {
            return window['txtBuscaMicrochip_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnBuscar", {
        get: function () {
            return window['btnBuscar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "grdMicrochip", {
        get: function () {
            return window['grdMicrochip_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "lblTotalProduto", {
        get: function () {
            return window['lblTotalProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "chkSomarIPIDevolvido", {
        get: function () {
            return window['chkSomarIPIDevolvido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "lblTotalMicrochip", {
        get: function () {
            return window['lblTotalMicrochip_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnCancelar", {
        get: function () {
            return window['btnCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnOKMicrochip", {
        get: function () {
            return window['btnOKMicrochip_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtDestinatario", {
        get: function () {
            return window['txtDestinatario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtCnpj", {
        get: function () {
            return window['txtCnpj_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtIE", {
        get: function () {
            return window['txtIE_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtEndereco", {
        get: function () {
            return window['txtEndereco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtNumero", {
        get: function () {
            return window['txtNumero_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtComplemento", {
        get: function () {
            return window['txtComplemento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtBairro", {
        get: function () {
            return window['txtBairro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtCep", {
        get: function () {
            return window['txtCep_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "lblMunicipio", {
        get: function () {
            return window['lblMunicipio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtTelefone", {
        get: function () {
            return window['txtTelefone_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "lblEstado", {
        get: function () {
            return window['lblEstado_Object'];
            ;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "Servico", {
        get: function () {
            if (!this.GetScope()["Servico"]) {
                this.GetScope()["Servico"] = {};
            }
            return this.GetScope()["Servico"];
        },
        set: function (value) {
            this.GetScope()["Servico"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "Item", {
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
    Object.defineProperty(C_NotaF.prototype, "NFe", {
        get: function () {
            if (!this.GetScope()["NFe"]) {
                this.GetScope()["NFe"] = {};
            }
            return this.GetScope()["NFe"];
        },
        set: function (value) {
            this.GetScope()["NFe"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "RetNFe", {
        get: function () {
            if (!this.GetScope()["RetNFe"]) {
                this.GetScope()["RetNFe"] = {};
            }
            return this.GetScope()["RetNFe"];
        },
        set: function (value) {
            this.GetScope()["RetNFe"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtPercIPIDev", {
        get: function () {
            return window['txtPercIPIDev_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtValorIPIDev", {
        get: function () {
            return window['txtValorIPIDev_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "cboOrcamento", {
        get: function () {
            return window['cboOrcamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtClienteOrcamento", {
        get: function () {
            return window['txtClienteOrcamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtBaseIcmsStR", {
        get: function () {
            return window['txtBaseIcmsStR_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtIVA", {
        get: function () {
            return window['txtIVA_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "agpP8", {
        get: function () {
            return window['agpP8_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtAliqFCP", {
        get: function () {
            return window['txtAliqFCP_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtValorICMSST", {
        get: function () {
            return window['txtValorICMSST_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtAliqIcmsST", {
        get: function () {
            return window['txtAliqIcmsST_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "cboModalidadeBaseICMSST", {
        get: function () {
            return window['cboModalidadeBaseICMSST_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "lblICMSST", {
        get: function () {
            return window['lblICMSST_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "enviarEmail", {
        get: function () {
            return window['enviarEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "mdImportarCompra", {
        get: function () {
            return window['mdImportarCompra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnImportarCompra", {
        get: function () {
            return window['btnImportarCompra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "lblRazaoSocialCompra", {
        get: function () {
            return window['lblRazaoSocialCompra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "lblCnpjCompra", {
        get: function () {
            return window['lblCnpjCompra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "lblChaveAcessoCompra", {
        get: function () {
            return window['lblChaveAcessoCompra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "lblQtdeProdCompra", {
        get: function () {
            return window['lblQtdeProdCompra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "lblTotalProdutosCompra", {
        get: function () {
            return window['lblTotalProdutosCompra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "lblTotalNFCompra", {
        get: function () {
            return window['lblTotalNFCompra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnConfirmarCompra", {
        get: function () {
            return window['btnConfirmarCompra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "btnCancelarCompra", {
        get: function () {
            return window['btnCancelarCompra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtCodEntrada", {
        get: function () {
            return window['txtCodEntrada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "cboFinalidadeCompra", {
        get: function () {
            return window['cboFinalidadeCompra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "cboFinalidade", {
        get: function () {
            return window['cboFinalidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "cboSerie", {
        get: function () {
            return window['cboSerie_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "cboTipoDocumento", {
        get: function () {
            return window['cboTipoDocumento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtQuantidade", {
        get: function () {
            return window['txtQuantidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "CobCrediario", {
        get: function () {
            return this.GetScope()["CobCrediario"];
        },
        set: function (value) {
            this.GetScope()["CobCrediario"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "CobCrediarios", {
        get: function () {
            return this.GetScope()["CobCrediarios"];
        },
        set: function (value) {
            this.GetScope()["CobCrediarios"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "CobCheque", {
        get: function () {
            return this.GetScope()["CobCheque"];
        },
        set: function (value) {
            this.GetScope()["CobCheque"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "CobCheques", {
        get: function () {
            return this.GetScope()["CobCheques"];
        },
        set: function (value) {
            this.GetScope()["CobCheques"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "CobCartao", {
        get: function () {
            return this.GetScope()["CobCartao"];
        },
        set: function (value) {
            this.GetScope()["CobCartao"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "CobCartoes", {
        get: function () {
            return this.GetScope()["CobCartoes"];
        },
        set: function (value) {
            this.GetScope()["CobCartoes"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "CobDinheiro", {
        get: function () {
            return this.GetScope()["CobDinheiro"];
        },
        set: function (value) {
            this.GetScope()["CobDinheiro"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "CobDinheiros", {
        get: function () {
            if (!this.GetScope()["CobDinheiros"]) {
                return [];
            }
            else {
                return this.GetScope()["CobDinheiros"];
            }
        },
        set: function (value) {
            this.GetScope()["CobDinheiros"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "CobOutro", {
        get: function () {
            return this.GetScope()["CobOutro"];
        },
        set: function (value) {
            this.GetScope()["CobOutro"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "CobOutros", {
        get: function () {
            return this.GetScope()["CobOutros"];
        },
        set: function (value) {
            this.GetScope()["CobOutros"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtCobCheCliente", {
        get: function () {
            return window["txtCobCheCliente_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "lstOptCobCheTipo", {
        get: function () {
            return window["lstOptCobCheTipo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtCobCheCpf", {
        get: function () {
            return window["txtCobCheCpf_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "grdCobCrediario", {
        get: function () {
            return window["grdCobCrediario_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "grdCobCheque", {
        get: function () {
            return window["grdCobCheque_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "grdCobCartao", {
        get: function () {
            return window["grdCobCartao_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "grdCobDinheiro", {
        get: function () {
            return window["grdCobDinheiro_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "grdCobOutros", {
        get: function () {
            return window["grdCobOutros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtCobCredParcela", {
        get: function () {
            return window["txtCobCredParcela_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtCobCredDataVencimento", {
        get: function () {
            return window["txtCobCredDataVencimento_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtCobCredValorCrediario", {
        get: function () {
            return window["txtCobCredValorCrediario_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "cboCobCredContaCorrente", {
        get: function () {
            return window["cboCobCredContaCorrente_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "cboCobCredFormaPagamento", {
        get: function () {
            return window["cboCobCredFormaPagamento_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "lblCobTotal", {
        get: function () {
            return window["lblCobTotal_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "lblCobRestante", {
        get: function () {
            return window["lblCobRestante_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "lblCobTroco", {
        get: function () {
            return window["lblCobTroco_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "cboCobCarCartao", {
        get: function () {
            return window["cboCobCarCartao_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "cboCobOutMeioPagamento", {
        get: function () {
            return window["cboCobOutMeioPagamento_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "cboCobOutIndFormaPag", {
        get: function () {
            return window["cboCobOutIndFormaPag_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "cboCobCredDocBancario", {
        get: function () {
            return window["cboCobCredDocBancario_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtDataEmissao", {
        get: function () {
            return window['txtDataEmissao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "cboCobCredDocMercantil", {
        get: function () {
            return window['cboCobCredDocMercantil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtCobCredContaContabil", {
        get: function () {
            return window['txtCobCredContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "lblCobCredMsgContasReceber", {
        get: function () {
            return window['lblCobCredMsgContasReceber_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "qtdVendasImportadas", {
        get: function () {
            return this._qtdVendasImportadas;
        },
        set: function (value) {
            this._qtdVendasImportadas = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "cboTipoAtendimento", {
        get: function () {
            return window['cboTipoAtendimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtValorICmsDeson", {
        get: function () {
            return window['txtValorICmsDeson_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "cboMotivoDeson", {
        get: function () {
            return window['cboMotivoDeson_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "txtDadosAdFisco", {
        get: function () {
            return window['txtDadosAdFisco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_NotaF.prototype, "cboConsumidorFinal", {
        get: function () {
            return window['cboConsumidorFinal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_NotaF.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.AntesGravar, this.OnAntesGravarNota, this);
        adicionarEventoMoura(this.GravouSucesso, this.OnDepoisGravarNota, this);
        if (this.btnAdicionarProduto) {
            adicionarEventoMoura(this.btnAdicionarProduto.Click, this.OnClickBotaoAdicionarProduto, this);
        }
        if (this.btnAdicionarServico) {
            adicionarEventoMoura(this.btnAdicionarServico.Click, this.OnClickBotaoAdicionarServico, this);
        }
        if (this.btnAdicionarNF) {
            adicionarEventoMoura(this.btnAdicionarNF.Click, this.OnClickBotaoAdicionarNF, this);
        }
        if (this.btnImportarVendas) {
            adicionarEventoMoura(this.btnImportarVendas.Click, this.OnClickBotaoImportVenda, this);
        }
        if (this.btnImportarOrcamento) {
            adicionarEventoMoura(this.btnImportarOrcamento.Click, this.OnClickBotaoImportOrcamento, this);
        }
        if (this.btnGerenciarNFe) {
            adicionarEventoMoura(this.btnGerenciarNFe.Click, this.OnClickBotaoGerenciarNFe, this);
        }
        if (this.btnGerarReceber) {
            adicionarEventoMoura(this.btnGerarReceber.Click, this.OnClickGerarReceber, this);
        }
        if (this.btnBuscar) {
            adicionarEventoMoura(this.btnBuscar.Click, this.OnClickBotaoBuscar, this);
        }
        if (this.grdItens) {
            adicionarEventoMoura(this.grdItens.ExcluiuLinhaGrade, this.OnExcluiuProdutoGrade, this);
            adicionarEventoMoura(this.grdItens.SelecionouLinha, this.OnSelecionouLinha, this);
        }
        if (this.grdItensServico) {
            adicionarEventoMoura(this.grdItensServico.ExcluiuLinhaGrade, this.OnExcluiuProdutoGrade, this);
        }
        if (this.grdEventosNFe) {
            adicionarEventoMoura(this.grdEventosNFe.ClickBotaoImprimir, this.OnImprimirCartaCorrecao, this);
        }
        if (this.btnAddDadosContribuinte) {
            adicionarEventoMoura(this.btnAddDadosContribuinte.Click, this.OnClickBotaoAddDadosAdicionais, this);
        }
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.OnClickBotaoGerar, this);
        }
        if (this.btnGerarOrcamento) {
            adicionarEventoMoura(this.btnGerarOrcamento.Click, this.OnClickBotaoGerarOrcamento, this);
        }
        if (this.btnImportarCompra) {
            adicionarEventoMoura(this.btnImportarCompra.Click, this.OnClickAbrirModalCompra, this);
        }
        if (this.btnConfirmaEvento) {
            adicionarEventoMoura(this.btnConfirmaEvento.Click, this.OnClickBotaoConfirmarEvento, this);
        }
        if (this.btnTransmitir) {
            adicionarEventoMoura(this.btnTransmitir.Click, this.OnClickBotaoEnviarXML, this);
        }
        if (this.btnGerarXml) {
            adicionarEventoMoura(this.btnGerarXml.Click, this.OnClickBotaoGerarXML, this);
        }
        if (this.btnAssinar) {
            adicionarEventoMoura(this.btnAssinar.Click, this.OnClickBotaoAssinarXML, this);
        }
        if (this.btnConsultar) {
            adicionarEventoMoura(this.btnConsultar.Click, this.OnClickBotaoConsultar, this);
        }
        if (this.btnEventos) {
            adicionarEventoMoura(this.btnEventos.Click, this.OnClickBotaoEventosNFe, this);
        }
        if (this.btnOkImportVenda) {
            adicionarEventoMoura(this.btnOkImportVenda.Click, this.OnClickBotaoOkVenda, this);
        }
        if (this.btnDeclararConteudo) {
            adicionarEventoMoura(this.btnDeclararConteudo.Click, this.abrirDeclaracaoConteudo, this);
        }
        if (this.btnOkImportVenda) {
            adicionarEventoMoura(this.btnOkImportVenda.Click, this.OnClickBotaoOkVenda, this);
        }
        if (this.grdOrcamento) {
            adicionarEventoMoura(this.grdOrcamento.SelecionouLinha, this.SelecionouOrcamento, this);
        }
        if (this.btnOKNFRef) {
            adicionarEventoMoura(this.btnOKNFRef.Click, this.OnClickOkBtnRef, this);
        }
        if (this.btnOKProduto) {
            adicionarEventoMoura(this.btnOKProduto.Click, this.OnClickOkBtnProd, this);
        }
        if (this.btnCancelar) {
            adicionarEventoMoura(this.btnCancelar.Click, this.OnClickOkBtnCancelarAnilha, this);
        }
        if (this.btnOKMicrochip) {
            adicionarEventoMoura(this.btnOKMicrochip.Click, this.OnClickOkBtnSelecionarAnilha, this);
        }
        if (this.btnOKServico) {
            adicionarEventoMoura(this.btnOKServico.Click, this.OnClickOkBtnServico, this);
        }
        if (this.btnAdicionarReceber) {
            adicionarEventoMoura(this.btnAdicionarReceber.Click, this.OnClickBotaoAdicionarParcelas, this);
        }
        if (this.btnOkReceber) {
            adicionarEventoMoura(this.btnOkReceber.Click, this.OnClicouBotaoOkReceber, this);
        }
        if (this.btnDanfe) {
            adicionarEventoMoura(this.btnDanfe.Click, this.OnClickBtnDanfe, this);
        }
        if (this.grdMicrochip) {
            adicionarEventoMoura(this.grdMicrochip.SelecionouLinha, this.selecionaAnilha, this);
        }
        if (this.btnOkImportar) {
            adicionarEventoMoura(this.btnOkImportar.Click, this.OnClickBotaoOkImportar, this);
        }
        if (this.fUploadXml) {
            adicionarEventoMoura(this.fUploadXml.FileUploadComplete, this.OnFileUploadXMLComplete, this);
        }
        if (this.grdItensArquivo) {
            adicionarEventoMoura(this.grdItensArquivo.EditouItemGrade, this.OnGravouProdutoGrade, this);
        }
        if (this.txtChaveAcessoRef) {
            adicionarEventoMoura(this.txtChaveAcessoRef.LostFocus, this.OnChangetxtChaveAcessoRef, this);
        }
        if (this.txtBaseIcmsStR) {
            adicionarEventoJQuery(this.txtBaseIcmsStR.Textbox, "blur", this.CalcularValorICMSST, this);
        }
        if (this.txtAliqIcmsST) {
            adicionarEventoJQuery(this.txtAliqIcmsST.Textbox, "blur", this.CalcularValorICMSST, this);
        }
        if (this.txtIVA) {
            adicionarEventoJQuery(this.txtIVA.Textbox, "blur", this.OnTextBoxIVAChange, this);
        }
        if (this.txtPercIPIDev) {
            adicionarEventoJQuery(this.txtPercIPIDev.Textbox, "blur", this.OntxtPercIPIDevChange, this);
        }
        if (this.txtValorIPIDev) {
            adicionarEventoJQuery(this.txtValorIPIDev.Textbox, "blur", this.OntxtValorIPIDevChange, this);
        }
        if (this.txtValorIPIDev) {
            adicionarEventoJQuery(this.txtValorIPIDev.Textbox, "blur", this.CalcularValorTotalProduto, this);
        }
        if (this.btnConfirmarCompra) {
            adicionarEventoMoura(this.btnConfirmarCompra.Click, this.OnClickBotaoConfirmarCompra, this);
        }
        if (this.btnCancelarCompra) {
            adicionarEventoMoura(this.btnCancelarCompra.Click, this.OnClickBotaoCancelarCompra, this);
        }
        if (this.txtCodEntrada) {
            adicionarEventoMoura(this.txtCodEntrada.Procurou, this.OnCodEntradaProcurou, this);
        }
        //if (this.cboEmpresa) {
        //    adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.OnCboEmpresaChange, this);
        //}
        //if (this.cboSerie) {
        //    adicionarEventoMoura(this.cboSerie.SelectedItemChanged, this.OnCboSerieChange, this);
        //}
        //if (this.cboTipoDocumento) {
        //    adicionarEventoMoura(this.cboTipoDocumento.SelectedItemChanged, this.OncboTipoDocumentoChange, this);
        //}
        //if (this.cboFinalidade) {
        //    adicionarEventoMoura(this.cboFinalidade.SelectedItemChanged, this.OncboFinalidadeChange, this);
        //}
        //if (this.txtDestinatario) {
        //    adicionarEventoMoura(this.txtDestinatario.Procurou, this.OntxtDestinatarioPesquisou, this);
        //    adicionarEventoMoura(this.txtDestinatario.Limpou, this.OntxtDestinatarioLimpou, this);
        //}
        if (this.lstOptCobCheTipo) {
            adicionarEventoMoura(this.lstOptCobCheTipo.SelectionChanged, this.OnMudouCobCPF, this);
        }
        if (this.chkSomarIPIDevolvido) {
            adicionarEventoMoura(this.chkSomarIPIDevolvido.CheckChanged, this.OnCheckIPIDevolvidoChange, this);
        }
        //cobrança
        if (this.grdCobCrediario) {
            adicionarEventoMoura(this.grdCobCrediario.Validando, this.AddCobCrediario, this);
            adicionarEventoMoura(this.grdCobCrediario.LimpouItem, this.ItemCobrancaAdicionado, this);
            adicionarEventoMoura(this.grdCobCrediario.ItemExcluido, this.CalcularTotaisCobranca, this);
        }
        if (this.grdCobCheque) {
            adicionarEventoMoura(this.grdCobCheque.Validando, this.AddCobCheque, this);
            adicionarEventoMoura(this.grdCobCheque.LimpouItem, this.ItemCobrancaAdicionado, this);
            adicionarEventoMoura(this.grdCobCheque.ItemExcluido, this.CalcularTotaisCobranca, this);
        }
        if (this.grdCobCartao) {
            adicionarEventoMoura(this.grdCobCartao.LimpouItem, this.ItemCobrancaAdicionado, this);
            adicionarEventoMoura(this.grdCobCartao.Validando, this.AddCobCartao, this);
            adicionarEventoMoura(this.grdCobCartao.ItemExcluido, this.CalcularTotaisCobranca, this);
        }
        if (this.grdCobDinheiro) {
            adicionarEventoMoura(this.grdCobDinheiro.LimpouItem, this.ItemCobrancaAdicionado, this);
            adicionarEventoMoura(this.grdCobDinheiro.Validando, this.AddCobDinheiro, this);
            adicionarEventoMoura(this.grdCobDinheiro.ItemExcluido, this.CalcularTotaisCobranca, this);
        }
        if (this.grdCobOutros) {
            adicionarEventoMoura(this.grdCobOutros.LimpouItem, this.ItemCobrancaAdicionado, this);
            adicionarEventoMoura(this.grdCobOutros.Validando, this.AddCobOutros, this);
            adicionarEventoMoura(this.grdCobOutros.ItemExcluido, this.CalcularTotaisCobranca, this);
        }
        if (this.txtCobCredParcela) {
            adicionarEventoJQuery(this.txtCobCredParcela.Textbox, "blur", this.OnMudoutxtCobCredParcela, this);
        }
        if (this.txtCobCredDataVencimento) {
            adicionarEventoMoura(this.txtCobCredDataVencimento.ValueChanged, this.OnVencimentoParcelaChange, this);
        }
    };
    C_NotaF.prototype.OnCheckIPIDevolvidoChange = function () {
        this.CalcularValorTotalProduto();
    };
    C_NotaF.prototype.OnCodEntradaProcurou = function () {
        var _this = this;
        if (this.txtCodEntrada.GetText().CNum() == 0) {
            return;
        }
        var parametros = {
            codChave: this.txtCodEntrada.GetText().CNum()
        };
        abrirEspera("Aguarde, carregando os dados da nota fiscal");
        this.ExecutarFuncaoServerSideAsynch("GetInformacoesEntrada", parametros, function (d) {
            try {
                var retorno = GetRetornoAJAX(d);
                fecharEspera();
                if (!retorno) {
                    MostrarAlerta("Ocorreu um erro ao obter os dados da nota fiscal");
                    return;
                }
                _this.lblChaveAcessoCompra.Text = retorno.ChaveAcesso;
                _this.lblQtdeProdCompra.Text = retorno.QuantidadeItens;
                _this.lblCnpjCompra.Text = retorno.Fornecedor.CPF;
                _this.lblRazaoSocialCompra.Text = retorno.Fornecedor.Nome;
                _this.lblTotalProdutosCompra.Text = retorno.TotalProdutos;
                _this.lblTotalNFCompra.Text = retorno.TotalNota;
                _this.ProdutosCompra = retorno.Produtos;
                _this.ServicosCompra = retorno.Servicos;
                _this.FornecedorCompra = retorno.Fornecedor;
                _this.RefreshAngular();
            }
            catch (ex) {
                fecharEspera();
                LogarException(ex);
            }
        }, function (erro) {
            fecharEspera();
            LogarException(erro);
        }, this);
    };
    C_NotaF.prototype.OnClickBotaoCancelarCompra = function (s, e) {
        e.processOnServer = false;
        this.mdImportarCompra.Hide();
    };
    C_NotaF.prototype.OnClickBotaoConfirmarCompra = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        if (this.ProdutosCompra || this.ServicosCompra) {
            MsgBoxJS("Deseja importar os dados da nota de compra selecionada?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.Yes) {
                    _this.EntityTela.Tipo_Nf = _this.cboFinalidadeCompra.GetValue();
                    var finalidade = 0;
                    if (_this.cboFinalidadeCompra.GetValue() == "T") {
                        finalidade = 5;
                    }
                    else if (_this.cboFinalidadeCompra.GetValue() == "C") {
                        finalidade = 2;
                    }
                    else if (_this.cboFinalidadeCompra.GetValue() == "A") {
                        finalidade = 3;
                    }
                    else if (_this.cboFinalidadeCompra.GetValue() == "D") {
                        finalidade = 4;
                    }
                    else {
                        finalidade = 1;
                    }
                    var parametros = {
                        produtos: _this.ProdutosCompra,
                        chave: _this.txtCodEntrada.GetText().CNum(),
                        empresa: _this.EntityTela.Empresa,
                        ufDestino: _this.EntityTela.Uf,
                        finalidade: finalidade
                    };
                    abrirEspera("Aguarde, importando os produtos para a nota fiscal");
                    _this.ExecutarFuncaoServerSideAsynch("ImportarProdutosCompra", parametros, function (d) {
                        try {
                            var retorno = GetRetornoAJAX(d);
                            fecharEspera();
                            if (!retorno) {
                                MostrarAlerta("Ocorreu um erro ao obter os dados da nota fiscal");
                                return;
                            }
                            _this.ProdutosNota = retorno;
                            _this.PreencherMotivoDesoneracao();
                            _this.CalcularTotalNota();
                            _this.RefreshAngular();
                        }
                        catch (ex) {
                            fecharEspera();
                            LogarException(ex);
                        }
                    }, function (erro) {
                        fecharEspera();
                        LogarException(erro);
                    }, _this);
                    _this.GetScope().$applyAsync();
                    _this.mdImportarCompra.Hide();
                }
                else {
                    return;
                }
            }, this);
        }
        else {
            MostrarMensagem("Informe a nota de compra na qual deseja importar!");
            return;
        }
    };
    C_NotaF.prototype.PreencherEmpresaContabil = function (codEmpresa) {
        if (this.txtTipoLancamentoContabil_hdnEmpresaContabil != undefined) {
            this.txtTipoLancamentoContabil_hdnEmpresaContabil.value = codEmpresa;
        }
    };
    C_NotaF.prototype.preencherInfAdicionais = function () {
        var parametros;
        parametros = {
            Empresa: this.hdnEmpresa.value.CNum()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("PreencherDecretoEmpresa", parametros);
        return retorno;
    };
    C_NotaF.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.EntityTela.Dados_Adicionais_Nfe = this.preencherInfAdicionais();
        if (!this.GetScope().onMudouComboEmpresa) {
            this.GetScope().onMudouComboEmpresa = $.proxy(this.onMudouComboEmpresa, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Empresa; }, this.GetScope().onMudouComboEmpresa);
        }
        if (!this.GetScope().OnDigitouFormulario) {
            this.GetScope().OnDigitouFormulario = $.proxy(this.OnDigitouFormulario, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Formulario; }, this.GetScope().OnDigitouFormulario);
        }
        if (!this.GetScope().OnMudouComboSerie) { //*
            this.GetScope().OnMudouComboSerie = $.proxy(this.OnMudouComboSerie, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Serie; }, this.GetScope().OnMudouComboSerie);
        }
        //Dados da NF-e
        if (!this.GetScope().OnMudouTipoDocumento) { //*
            this.GetScope().OnMudouTipoDocumento = $.proxy(this.OnMudouTipoDocumento, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.E_S; }, this.GetScope().OnMudouTipoDocumento);
        }
        if (!this.GetScope().OnComboBoxFinalidadeChange) { //*
            this.GetScope().OnComboBoxFinalidadeChange = $.proxy(this.OnComboBoxFinalidadeChange, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.E_S; }, this.GetScope().OnComboBoxFinalidadeChange);
            this.GetScope().$watch(function (scope) { return scope.Entity.Tipo_Nota; }, this.GetScope().OnComboBoxFinalidadeChange);
        }
        if (!this.GetScope().OnMudouCFOP) {
            this.GetScope().OnMudouCFOP = $.proxy(this.OnMudouCFOP, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Cfop; }, this.GetScope().OnMudouCFOP);
        }
        //Destinatario
        if (!this.GetScope().OnPesquisouDadosCliente) {
            this.GetScope().OnPesquisouDadosCliente = $.proxy(this.OnPesquisouDadosCliente, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Codigo_Cliente; }, this.GetScope().OnPesquisouDadosCliente);
        }
        //Produto
        if (!this.GetScope().OnPesquisouDadosProduto) {
            this.GetScope().OnPesquisouDadosProduto = $.proxy(this.OnPesquisouDadosProduto, this);
            this.GetScope().$watch(function (scope) { return scope.Item.Codigo_Produto; }, this.GetScope().OnPesquisouDadosProduto);
        }
        if (!this.GetScope().OnCalcularSubTotal) {
            this.GetScope().OnCalcularSubTotal = $.proxy(this.CalcularSubTotal, this);
            this.GetScope().$watch(function (scope) { return scope.Item.Quantidade; }, this.GetScope().OnCalcularSubTotal);
            this.GetScope().$watch(function (scope) { return scope.Item.Valor_Unitario; }, this.GetScope().OnCalcularSubTotal);
        }
        if (!this.GetScope().OnTextBoxDescontoPChange) {
            this.GetScope().OnTextBoxDescontoPChange = $.proxy(this.OnTextBoxDescontoPChange, this);
            this.GetScope().$watch(function (scope) { return scope.Item.Valor_Desconto_Porcentagem; }, this.GetScope().OnTextBoxDescontoPChange);
        }
        if (!this.GetScope().OnTextBoxDescontoRChange) {
            this.GetScope().OnTextBoxDescontoRChange = $.proxy(this.OnTextBoxDescontoRChange, this);
            this.GetScope().$watch(function (scope) { return scope.Item.Valor_Desconto; }, this.GetScope().OnTextBoxDescontoRChange);
        }
        if (!this.GetScope().OnCalcularValorTotalProduto) {
            this.GetScope().OnCalcularValorTotalProduto = $.proxy(this.OnCalcularValorTotalProduto, this);
            this.GetScope().$watch(function (scope) { return scope.Item.Valor_Outros; }, this.GetScope().OnCalcularValorTotalProduto);
        }
        if (!this.GetScope().OnMudouCST) {
            this.GetScope().OnMudouCST = $.proxy(this.OnMudouCST, this);
            this.GetScope().$watch(function (scope) { return scope.Item.Cst; }, this.GetScope().OnMudouCST);
        }
        //ABA ICMS
        if (!this.GetScope().OnCalcularValorICMS) {
            this.GetScope().OnCalcularValorICMS = $.proxy(this.CalcularValorICMS, this);
            this.GetScope().$watch(function (scope) { return scope.Item.Base_Icms; }, this.GetScope().OnCalcularValorICMS);
            this.GetScope().$watch(function (scope) { return scope.Item.Aliquota_ICMS; }, this.GetScope().OnCalcularValorICMS);
        }
        if (!this.GetScope().OnMudouValorIcmsDeson) {
            this.GetScope().OnMudouValorIcmsDeson = $.proxy(this.OnMudouValorIcmsDeson, this);
            this.GetScope().$watch(function (scope) { return scope.Item.Vlr_ICMS_Desonerado; }, this.GetScope().OnMudouValorIcmsDeson);
        }
        //ABA IPI
        if (!this.GetScope().OnCalcularValorIPI) {
            this.GetScope().OnCalcularValorIPI = $.proxy(this.CalcularValorIPI, this);
            this.GetScope().$watch(function (scope) { return scope.Item.Aliquota_IPI; }, this.GetScope().OnCalcularValorIPI);
            this.GetScope().$watch(function (scope) { return scope.Item.Base_IPI; }, this.GetScope().OnCalcularValorIPI);
        }
        //ABA PIS/COFINS
        if (!this.GetScope().OnCalcularValorPIS) {
            this.GetScope().OnCalcularValorPIS = $.proxy(this.CalcularValorPIS, this);
            this.GetScope().$watch(function (scope) { return scope.Item.Base_Pis; }, this.GetScope().OnCalcularValorPIS);
            this.GetScope().$watch(function (scope) { return scope.Item.Aliquota_Pis; }, this.GetScope().OnCalcularValorPIS);
        }
        if (!this.GetScope().OnCalcularValorCOFINS) {
            this.GetScope().OnCalcularValorCOFINS = $.proxy(this.CalcularValorCOFINS, this);
            this.GetScope().$watch(function (scope) { return scope.Item.Base_Cofins; }, this.GetScope().OnCalcularValorCOFINS);
            this.GetScope().$watch(function (scope) { return scope.Item.Aliquota_Cofins; }, this.GetScope().OnCalcularValorCOFINS);
        }
        // FCP
        if (!this.GetScope().OnCalcularValorFCP) {
            this.GetScope().OnCalcularValorFCP = $.proxy(this.CalcularValorFCP, this);
            this.GetScope().$watch(function (scope) { return scope.Item.Valor_FCP; }, this.GetScope().OnCalcularValorFCP);
            this.GetScope().$watch(function (scope) { return scope.Item.Aliquota_FCP; }, this.GetScope().OnCalcularValorFCP);
        }
        //Totais
        if (!this.GetScope().OnCalcularTotalNota) {
            this.GetScope().OnCalcularTotalNota = $.proxy(this.CalcularTotalNota, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Seguro; }, this.GetScope().OnCalcularTotalNota);
            this.GetScope().$watch(function (scope) { return scope.Entity.Frete; }, this.GetScope().OnCalcularTotalNota);
        }
        //Servico
        if (!this.GetScope().OnPesquisouDadosServico) {
            this.GetScope().OnPesquisouDadosServico = $.proxy(this.OnPesquisouDadosServico, this);
            this.GetScope().$watch(function (scope) { return scope.Servico.Codigo_Produto; }, this.GetScope().OnPesquisouDadosServico);
        }
        if (!this.GetScope().OnCalcularSubTotalServico) {
            this.GetScope().OnCalcularSubTotalServico = $.proxy(this.CalcularSubTotalServico, this);
            this.GetScope().$watch(function (scope) { return scope.Servico.Quantidade; }, this.GetScope().OnCalcularSubTotalServico);
            this.GetScope().$watch(function (scope) { return scope.Servico.Valor_Unitario; }, this.GetScope().OnCalcularSubTotalServico);
        }
        if (!this.GetScope().OnTextBoxDescontoPServicoChange) {
            this.GetScope().OnTextBoxDescontoPServicoChange = $.proxy(this.OnTextBoxDescontoPServicoChange, this);
            this.GetScope().$watch(function (scope) { return scope.Servico.Valor_Desconto_Porcentagem; }, this.GetScope().OnTextBoxDescontoPServicoChange);
        }
        if (!this.GetScope().OnCalcularValorDescontoPorcentagemServico) {
            this.GetScope().OnCalcularValorDescontoPorcentagemServico = $.proxy(this.CalcularValorDescontoPorcentagemServico, this);
            this.GetScope().$watch(function (scope) { return scope.Servico.Valor_Desconto; }, this.GetScope().OnCalcularValorDescontoPorcentagemServico);
        }
        if (!this.GetScope().OnCalcularValorTotalServico) {
            this.GetScope().OnCalcularValorTotalServico = $.proxy(this.OnCalcularValorTotalServico, this);
            this.GetScope().$watch(function (scope) { return scope.Servico.Valor_Desconto; }, this.GetScope().OnCalcularValorTotalServico);
            this.GetScope().$watch(function (scope) { return scope.Servico.Valor_Outros; }, this.GetScope().OnCalcularValorTotalServico);
        }
        //Aba ISSQN SERVICO
        if (!this.GetScope().OnCalcularValorISSQN) {
            this.GetScope().OnCalcularValorISSQN = $.proxy(this.CalcularValorISSQN, this);
            this.GetScope().$watch(function (scope) { return scope.Servico.Base_ISSQN; }, this.GetScope().OnCalcularValorISSQN);
            this.GetScope().$watch(function (scope) { return scope.Servico.Aliquota_ISSQN; }, this.GetScope().OnCalcularValorISSQN);
        }
        //Aba PIS/CONFINS SERVICO
        if (!this.GetScope().OnCalcularValorPISServico) {
            this.GetScope().OnCalcularValorPISServico = $.proxy(this.CalcularValorPISServico, this);
            this.GetScope().$watch(function (scope) { return scope.Servico.Aliquota_Pis; }, this.GetScope().OnCalcularValorPISServico);
            this.GetScope().$watch(function (scope) { return scope.Servico.Base_Pis; }, this.GetScope().OnCalcularValorPISServico);
        }
        if (!this.GetScope().OnCalcularValorCOFINSServico) {
            this.GetScope().OnCalcularValorCOFINSServico = $.proxy(this.CalcularValorCOFINSServico, this);
            this.GetScope().$watch(function (scope) { return scope.Servico.Aliquota_Cofins; }, this.GetScope().OnCalcularValorCOFINSServico);
            this.GetScope().$watch(function (scope) { return scope.Servico.Base_Cofins; }, this.GetScope().OnCalcularValorCOFINSServico);
        }
        //Transportadora
        if (!this.GetScope().OnMudouTranpostadora) {
            this.GetScope().OnMudouTranpostadora = $.proxy(this.OnMudouTranpostadora, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Codigo_Transportadora; }, this.GetScope().OnMudouTranpostadora);
        }
        //Cobrança
        if (!this.GetScope().OnMudoucboCobCredFormaPagamento) {
            this.GetScope().OnMudoucboCobCredFormaPagamento = $.proxy(this.OnMudoucboCobCredFormaPagamento, this);
            var that = this;
            this.GetScope().$watch(function () { if (that.CobCrediario != null) {
                return that.CobCrediario.Forma_Pagamento;
            } }, this.GetScope().OnMudoucboCobCredFormaPagamento);
        }
        this.lstOptCobCheTipo.SetValue("F");
        this.MudouTipo("F");
        this.lblFUNRURAL.Visible = false;
        this.PreencherEmpresaContabil(ValoresSismoura.EmpresaPadraoUsuario);
        var parametros = {};
        var configFiscal = this.ExecutarFuncaoServerSideSynch("GetConfigFiscal", parametros);
        this.lblCobCredMsgContasReceber.Visible = configFiscal.Gerar_Receber_Fiscal;
        this.PreencherComboICMSDesonerado("");
        this.AdicionarParametroLancamentoContabil();
        //scope.Item.Cst
    };
    C_NotaF.prototype.OnFileUploadXMLComplete = function (s, e) {
        var arquivo = e.callbackData;
        var parametros;
        parametros = {
            arquivo: arquivo
        };
        var retorno;
        retorno = this.ExecutarFuncaoServerSideSynch("CarregarArquivoXml", parametros);
        //MostrarAlerta(retorno.Produtos.length.toString());
        if (retorno.Produtos.length > 0) {
            this.hdnPesoLiquidoXml.value = retorno.PesoLiquidoXml.toString();
            this.hdnPesoBrutoXml.value = retorno.PesoBrutoXml.toString();
            this.hdnQuantidadeTransp.value = retorno.QuantidadeTransp;
            this.hdnEspecieTransp.value = retorno.EspecieTransp;
            this.hdnValorProdutosXml.value = retorno.ValorProdutosXml.toString();
            this.txtNotaXml.SetText(retorno.Formulario.toString());
            this.txtValorTotalXml.SetText(retorno.ValorTotalXml.toString());
            this.grdItensArquivo.PreencherGrid(retorno.Produtos);
        }
        else {
            MostrarAlerta("O XML deve ser de importação!");
            return;
        }
    };
    C_NotaF.prototype.OnGravouProdutoGrade = function (s, e) {
        var item = e.item;
        var parametros;
        parametros = {
            item: item,
            empresa: this.hdnEmpresa.value.CNum(),
            pesoLiquido: this.hdnPesoLiquidoXml.value,
            Siscomex: this.txtSiscomexNota.GetText().CNum(),
            ValorProdutos: this.hdnValorProdutosXml.value
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("PreparaItem", parametros);
        this.grdItensArquivo.DataSource[e.index] = retorno;
        this.grdItensArquivo.PreencherGrid(this.grdItensArquivo.DataSource);
    };
    C_NotaF.prototype.selecionaAnilha = function () {
        var linha = this.grdMicrochip.GetSelectedRowsData;
        if (linha) {
            this.lblTotalMicrochip.Text = linha.length.toString();
        }
    };
    C_NotaF.prototype.onMudouComboEmpresa = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        this.hdnEmpresa.value = this.EntityTela.Empresa.toString();
        this.OnDepoisLimpar(this.GetScope().Entity);
        this.PreencherComboCST();
        this.AdicionarParametroLancamentoContabil();
        this.PreencherEmpresaContabil(this.EntityTela.Empresa);
        this.EntityTela.Dados_Adicionais_Nfe = this.preencherInfAdicionais();
        this.SerieCPFValido();
    };
    C_NotaF.prototype.AdicionarParametroLancamentoContabil = function () {
        if (this.txtTipoLancamentoContabil.Visible == true) {
            this.txtTipoLancamentoContabil.Limpar();
            this.txtTipoLancamentoContabil.LimparParametros();
            if (this.EntityTela.E_S == "S") {
                this.txtTipoLancamentoContabil.AddParametro("TipoConfiguracaoContabil", "NS");
            }
            else {
                this.txtTipoLancamentoContabil.AddParametro("TipoConfiguracaoContabil", "CM");
            }
            this.txtTipoLancamentoContabil.AddParametro("codEmpresa", "" + this.EntityTela.Empresa);
        }
    };
    C_NotaF.prototype.PreencherComboCST = function () {
        var parametros;
        if (this.cboCST && this.cboCST.Combo) {
            this.cboCST.ClearItems();
            parametros = {
                codEmpresa: this.EntityTela.Empresa
            };
            var itens = this.ExecutarFuncaoServerSideSynch("GetCST", parametros);
            for (var x = 0; x < itens.length; x++) {
                this.cboCST.Combo.AddItem(itens[x].Codigo, itens[x].Codigo, "");
            }
        }
    };
    C_NotaF.prototype.OnMudouComboSerie = function (oldValue, newValue) {
        if (oldValue == newValue) {
            return;
        }
        if (this.cboSerie.SelectedItemChanged) {
            this.hdnSeriePadrao.value = this.GetScope().Entity.Serie.toString();
            this.OnDepoisLimpar(this.GetScope().Entity);
        }
        this.SerieCPFValido();
    };
    C_NotaF.prototype.OnClicouBotaoOkReceber = function (s, e) {
        e.processOnServer = false;
        if (String.IsNullOrWhiteSpace(this.cboDocumentoMercantilReceber.GetText())) {
            return;
        }
        if (String.IsNullOrWhiteSpace(this.txtContaContabil.GetText())) {
            return;
        }
        if (this.cboContaCorrente.Combo.GetText() == "") {
            return;
        }
        var x;
        var contas = this.ContasGeradas;
        var lista = [];
        var ref = {};
        for (x = 0; x < contas.length; ++x) {
            ref = {};
            ref.Conta_Contabil = this.txtContaContabil.GetText().CNum();
            ref.Conta_Corrente = this.cboContaCorrente.Combo.GetValue().CNum();
            ref.Documento_Mercantil = this.cboDocumentoMercantilReceber.GetValue();
            ref.Numero_Documento = contas[x].Numero_Documento;
            ref.Origem = "NF";
            ref.Parcela = contas[x].Parcela;
            ref.Valor = contas[x].Valor;
            ref.Vencimento = contas[x].Vencimento;
            lista.push(ref);
        }
        this.txtParcela.Limpar();
        this.txtDiasVencimento.Limpar();
        this.txtContaContabil.Limpar();
        this.mdCobranca.Hide();
        return false;
    };
    C_NotaF.prototype.OnClickBtnDanfe = function (s, e) {
        e.processOnServer = false;
        if (!this.NFe.Situacao || this.NFe.Situacao.toUpperCase() == "") {
            MostrarAlerta("Gere o XML para visualizar a Danfe!");
            return;
        }
        var parametros = {
            Codigo: this.hdnCodigo.value.CNum()
        };
        this.ExecutarFuncaoServerSideAsynch('GerarDownload', parametros, function (d) {
            var retorno = JSON.parse(d).d;
            fecharEspera();
            if (retorno.Erro) {
                MostrarAlerta(retorno.Erro);
                return;
            }
            if (retorno.NomeArquivo) {
                AbrirReport('~/Report/Fixos/', 'Danfe.REPX');
            }
        }, function (e) {
            LogarException(e);
        }, this);
    };
    // DANFE VIA API - SUBSTITUIDA POR IMPLEMENTAÇÃO
    //protected OnClickBtnDanfe(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void {
    //    e.processOnServer = false;
    //    if (!this.NFe.Situacao || this.NFe.Situacao.toUpperCase() == "") {
    //        MostrarAlerta("Gere o XML para visualizar a Danfe!");
    //        return;
    //    }
    //    let parametros: any = {
    //        Codigo: this.hdnCodigo.value.CNum()
    //    };
    //    abrirEspera();
    //    this.ExecutarFuncaoServerSideAsynch('GerarDownload', parametros, (d) => {
    //        const retorno: any = JSON.parse(d).d;
    //        fecharEspera();
    //        if (retorno.Erro) {
    //            MostrarAlerta(retorno.Erro);
    //            return;
    //        }
    //        if (retorno.NomeArquivo) {
    //            abrirTelaNovaAbaParametros(formataURLRelativa('XMLNFe/Danfe/' + retorno.NomeArquivo), []);
    //        }
    //    }, (e) => {
    //        LogarException(e);
    //    }, this);
    //}
    C_NotaF.prototype.OnAntesGravar = function () {
        try {
            _super.prototype.OnAntesGravar.call(this);
            if (!this.SerieCPFValido()) {
                return false;
            }
            if (!this.validarFatura()) {
                return false;
            }
            if (!this.validarImpostosProdutos()) {
                return false;
            }
            return true;
        }
        catch (ex) {
            LogarException(ex);
            return false;
        }
    };
    C_NotaF.prototype.OnAntesGravarNota = function (s, e) {
        var produtos = "";
        var servicos = "";
        var troco;
        var pagamentos = [];
        var nfChavesReferenciadas = "";
        var parametros;
        parametros = {
            ListaProdutos: JSON.stringify(this.ProdutosNota)
        };
        if (this.cboConsumidorFinal.GetValue() === "S") {
            this.GetScope().Entity.Mensagem_Ibpt = this.ExecutarFuncaoServerSideSynch("PreencherIBPTDadosAdicionais", parametros);
        }
        var Ibpt;
        if (this.EntityTela.Mensagem_Ibpt) {
            Ibpt = this.EntityTela.Mensagem_Ibpt;
        }
        else {
            Ibpt = "";
        }
        parametros = {
            arrayProdutos: JSON.stringify(this.ProdutosNota),
            empresa: this.hdnEmpresa.value.CNum(),
            UfDestino: this.EntityTela.Uf,
            Ibpt: Ibpt,
            VICMSDesonerado: (this.EntityTela.Valor_ICMS_Desonerado || 0),
            consumidorFinal: this.cboConsumidorFinal.GetValue()
        };
        this.GetScope().Entity.Dados_Adicionais_Fisco_Nfe = this.ExecutarFuncaoServerSideSynch("PreencherDadosAdicionaisFisco", parametros);
        troco = this.lblCobTroco.Text.CNum();
        produtos = JSON.stringify(this.ProdutosNota);
        servicos = JSON.stringify(this.ServicosNota);
        nfChavesReferenciadas = JSON.stringify(this.ChavesReferenciadas);
        for (var x = 0; x < this.CobDinheiros.length; x++) {
            this.CobDinheiros[x].Parcela = (x + 1).toString();
            this.CobDinheiros[x].Linha = (x + 1);
            this.CobDinheiros[x].Troco = troco;
            pagamentos.push(this.CobDinheiros[x]);
        }
        for (var x = 0; x < this.CobCartoes.length; x++) {
            this.CobCartoes[x].Parcela = (x + 1).toString();
            this.CobCartoes[x].Linha = (x + 1);
            this.CobCartoes[x].Troco = troco;
            pagamentos.push(this.CobCartoes[x]);
        }
        for (var x = 0; x < this.CobCheques.length; x++) {
            this.CobCheques[x].Parcela = (x + 1).toString();
            this.CobCheques[x].Linha = (x + 1);
            this.CobCheques[x].Troco = troco;
            pagamentos.push(this.CobCheques[x]);
        }
        for (var x = 0; x < this.CobCrediarios.length; x++) {
            this.CobCrediarios[x].Linha = (x + 1);
            this.CobCrediarios[x].Troco = troco;
            pagamentos.push(this.CobCrediarios[x]);
        }
        for (var x = 0; x < this.CobOutros.length; x++) {
            this.CobOutros[x].Parcela = x.toString();
            this.CobOutros[x].Linha = (x + 1);
            this.CobOutros[x].Troco = troco;
            pagamentos.push(this.CobOutros[x]);
        }
        e.Entity.FiscalNFPagamentos = pagamentos;
        e.ParametrosAdicionais.Parametros.push(this.CriarItemParametro("produtos", produtos));
        e.ParametrosAdicionais.Parametros.push(this.CriarItemParametro("servicos", servicos));
        e.ParametrosAdicionais.Parametros.push(this.CriarItemParametro("nfChavesReferenciadas", nfChavesReferenciadas));
        e.Entity.Modelo = 55;
        this.GerarContasReceber();
        return true;
    };
    C_NotaF.prototype.OnDepoisGravarNota = function (s, e) {
        if (e.IsRegistroNovo == true) {
            this.hdnCodigo.value = this.GetScope().Entity.Codigo.toString();
        }
        try {
            _super.prototype.OnDepoisGravar.call(this);
            var Entidade = this.EntityTela;
            var parametros = {
                entidadeSTR: JSON.stringify(Entidade),
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificacoesDepoisGravar", parametros);
            if (!String.IsNullOrWhiteSpace(retorno['MensagemAlerta'])) {
                MostrarAlerta(retorno['MensagemAlerta']);
            }
            if (!String.IsNullOrWhiteSpace(retorno['MensagemInformacao'])) {
                MostrarMensagem(retorno['MensagemInformacao']);
            }
            this.preencherDadosAnilha(Entidade);
            return true;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_NotaF.prototype.OnMudouTipoDocumento = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        if (this.GetScope().Entity.E_S == "S") {
            this.GetScope().Entity.Estoque = 1;
        }
        else {
            this.GetScope().Entity.Estoque = 2;
        }
        this.AdicionarParametroLancamentoContabil();
    };
    C_NotaF.prototype.OnMudouCFOP = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        var parametros;
        if (this.GetScope().Entity.Cfop != undefined) {
            var cfop = this.GetScope().Entity.Cfop;
            parametros = {
                idCfop: cfop
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("RetornaNaturezaOperacao", parametros);
            if (!String.IsNullOrWhiteSpace(retorno)) {
                var entidade = this.GetScope().Entity;
                entidade.Natureza_Operacao_Nfe = retorno;
                this.SetEntity(entidade);
                this.cboCFOPNatureza.SetValue(this.EntityTela.Cfop);
            }
            else {
                this.EntityTela.Natureza_Operacao_Nfe = '';
            }
        }
        this.RefreshAngular();
    };
    C_NotaF.prototype.OnDigitouFormulario = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        this.OnMudouIdentificacao();
        return false;
    };
    C_NotaF.prototype.OnMudouIdentificacao = function () {
        var _this = this;
        if (!this.EntityTela.Formulario || this.EntityTela.Formulario == 0) {
            return;
        }
        if (this.EntityTela.Formulario == this.valorAnteriorFormulario) {
            return;
        }
        var retorno;
        var parametros;
        var empresa = this.EntityTela.Empresa;
        var serie = this.EntityTela.Serie;
        var formulario = this.EntityTela.Formulario;
        var chavesReferenciadas = this.EntityTela.Nf_Referenciada;
        var permitirAlterarSequencia = false;
        //var permitirAlterarSequencia = this.ExecutarFuncaoServerSideSynch("ObterConfigAlterarSequencia", parametros);
        var codigoGerado = this.EntityTela.Formulario;
        this.valorAnteriorFormulario = this.EntityTela.Formulario;
        parametros = {
            codigo: formulario,
            empresa: empresa,
            serie: serie
        };
        abrirEspera("Aguarde, carregando os dados da nota.");
        this.ExecutarFuncaoServerSideAsynch("ObterFormulario", parametros, function (d) {
            try {
                var retorno = GetRetornoAJAX(d);
                if (!retorno) {
                    if (!permitirAlterarSequencia) {
                        if (retorno == null) {
                            if (formulario != codigoGerado) {
                                if (formulario == 0) {
                                    MostrarAlerta("Informe um valor de nota válido!");
                                }
                                else {
                                    MostrarAlerta("Nota Fiscal não cadastrada!");
                                }
                            }
                            _this.OnDepoisLimpar(_this.GetScope().Entity);
                            _this.ClicarNovo();
                        }
                    }
                    else {
                        if (formulario > codigoGerado) {
                            MsgBoxJS("O Código da última nota é " + codigoGerado + ", o código que está inserindo não está na sequência, deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(_this.RespostaSequencia, _this));
                        }
                        else {
                            _this.EntityTela.Empresa = empresa;
                            _this.EntityTela.Serie = serie;
                            _this.EntityTela.Formulario = formulario;
                            _this.RefreshAngular();
                        }
                    }
                    fecharEspera();
                }
                else {
                    _this.txtTipoLancamentoContabil.Obrigatorio = false;
                    _this.ProdutosNota = retorno.ProdutosRetorno;
                    _this.PreencherMotivoDesoneracao();
                    _this.ServicosNota = retorno.ServicosRetorno;
                    var retornoPag = retorno.FiscalNFPagamentos;
                    _this.LimparCobranca();
                    _this.PreencherCobranca(retornoPag);
                    _this.ChavesReferenciadas = retorno.ChavesReferenciadas;
                    _this.hdnCodigo.value = retorno.Codigo.toString();
                    if (retorno.Cpf_Cgc.length >= 18) {
                        _this.MudouTipo("J");
                    }
                    else {
                        _this.MudouTipo("F");
                    }
                    _this.GetScope().Entity = retorno;
                    _this.CalcularTotalNota();
                    _this.NFe = retorno.NFe[0];
                    _this.RefreshAngular();
                    parametros = {
                        CodigoNF: retorno.Codigo
                    };
                    _this.ExecutarFuncaoServerSideAsynch("PreencherClasseEventosNFe", parametros, function (d) {
                        try {
                            _this.EventosNFe = GetRetornoAJAX(d);
                            fecharEspera();
                            _this.RefreshAngular();
                        }
                        catch (ex) {
                            fecharEspera();
                            LogarException(ex);
                        }
                    }, function (erro) {
                        fecharEspera();
                        LogarExceptionAjax(erro);
                    }, _this);
                }
            }
            catch (ex) {
                fecharEspera();
                LogarException(ex);
            }
        }, function (erro) {
            fecharEspera();
            LogarException(erro);
        }, this);
    };
    C_NotaF.prototype.RespostaSequencia = function (result) {
        if (result.Resultado == MsgBoxResult.No) {
            this.retornaNumeracao();
        }
        else {
            var novaNF = this.GetScope().Entity;
            var serie = novaNF.Serie;
            var empresa = novaNF.Empresa;
            novaNF = {};
            novaNF.Serie = serie;
            novaNF.Empresa = empresa;
            novaNF.Formulario = this.EntityTela.Formulario;
            this.GetScope().$applyAsync();
        }
    };
    C_NotaF.prototype.retornaNumeracao = function () {
        var novaNF = this.GetScope().Entity;
        var serie = novaNF.Serie;
        var empresa = novaNF.Empresa;
        var parametros;
        parametros = {
            empresa: empresa,
            serie: serie
        };
        novaNF.Formulario = this.ExecutarFuncaoServerSideSynch("PreencherNumeroNota", parametros);
        this.GetScope().Entity.Formulario = novaNF.Formulario;
    };
    C_NotaF.prototype.OnClickBotaoOkVenda = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        if (this.grdImportVenda.GetSelectedRowsData.length <= 0) {
            MostrarAlerta("Selecione uma venda!");
            return;
        }
        var retorno = JSON.stringify(this.grdImportVenda.GetSelectedRowsData);
        var parametros;
        var totalDesconto = 0;
        var Venda;
        parametros = {
            strJson: retorno
        };
        var vendasImportadas = this.ExecutarFuncaoServerSideSynch("RetornaVendasImportadasJson", parametros);
        var x = 0;
        var codVendas = "";
        var parametros;
        if (!this.GetScope().Entity.FiscalNFVendas) {
            this.GetScope().Entity.FiscalNFVendas = [];
        }
        if (vendasImportadas.length >= 0) {
            var fiscalNfVenda;
            var fiscalNfVendas = [];
            for (x = 0; x < vendasImportadas.length; ++x) {
                codVendas = codVendas + vendasImportadas[x].ID.toString() + ",";
                totalDesconto += vendasImportadas[x].Valor_Desconto;
                fiscalNfVenda = {};
                parametros = {
                    CodVenda: vendasImportadas[x].ID
                };
                Venda = this.ExecutarFuncaoServerSideSynch("GetValoresVenda", parametros);
                fiscalNfVenda.VendaEntity = Venda;
                fiscalNfVendas.push(fiscalNfVenda);
            }
            this.GetScope().Entity.FiscalNFVendas = fiscalNfVendas;
            codVendas = codVendas.toString().substring(0, codVendas.length - 1);
            this.GetScope().Entity.VendasImportadas = codVendas;
        }
        parametros = {
            codEmpresa: this.GetScope().Entity.Empresa
        };
        var ufEmpresa = this.ExecutarFuncaoServerSideSynch("RetornaUFempresa", parametros);
        var estadoCliente = "";
        if (this.cboTipoAtendimento.GetValue() == 1) { //Se for Operação Presencial: UF Destino = UF Origem (Atv. 1153004)
            estadoCliente = ufEmpresa;
        }
        else {
            if (this.GetScope().Entity.Uf) {
                estadoCliente = this.GetScope().Entity.Uf;
            }
        }
        var finalidade = 0;
        if (this.cboFinalidade.GetValue() == "T") {
            finalidade = 5;
        }
        else if (this.cboFinalidade.GetValue() == "C") {
            finalidade = 2;
        }
        else if (this.cboFinalidade.GetValue() == "A") {
            finalidade = 3;
        }
        else if (this.cboFinalidade.GetValue() == "D") {
            finalidade = 4;
        }
        else {
            finalidade = 1;
        }
        parametros = {
            vendas: codVendas,
            tipoDocumento: this.GetScope().Entity.E_S.toString(),
            empresa: this.GetScope().Entity.Empresa,
            estadoCliente: estadoCliente,
            finalidade: finalidade,
            cfopPrincipal: this.GetScope().Entity.Cfop,
            cliente: this.GetScope().Entity.Codigo_Cliente
        };
        //var listaProdutos: SiSMoura.Core.Entity.FiscalNFProdutoRetorno[] = this.ExecutarFuncaoServerSideSynch("RetornarProdutosVenda", parametros);
        //var listaServicos: SiSMoura.Core.Entity.FiscalNFServicoRetorno[] = this.ExecutarFuncaoServerSideSynch("RetornarServicosVenda", parametros);
        abrirEspera("Aguarde, carregando os dados da vendas importadas...");
        this.ExecutarFuncaoServerSideAsynch("RetornarProdutosVenda", parametros, function (d) {
            try {
                fecharEspera();
                _this.ProdutosNota = GetRetornoAJAX(d);
                _this.PreencherMotivoDesoneracao();
                _this.qtdVendasImportadas = vendasImportadas.length;
                if (_this.EntityTela.E_S == 'S') {
                    if (_this.EntityTela.Uf == ufEmpresa) {
                        _this.GetScope().Entity.Cfop = "5.929";
                    }
                    else {
                        _this.GetScope().Entity.Cfop = "6.929";
                    }
                }
                _this.GetScope().Entity.Estoque = 0;
                var ratearDesc = 0;
                for (var x = 0; x < _this.GetScope().Entity.FiscalNFVendas.length; x++) {
                    ratearDesc += _this.GetScope().Entity.FiscalNFVendas[x].VendaEntity.Desconto;
                    if (_this.GetScope().Entity.FiscalNFVendas[x].VendaEntity.Valor_Troca) {
                        ratearDesc += _this.GetScope().Entity.FiscalNFVendas[x].VendaEntity.Valor_Troca;
                    }
                }
                _this.RatearValorNosProdutos(ratearDesc, true);
                _this.CalcularTotalNota();
                _this.InserirDadosAdicionais(codVendas);
                _this.RelacaoVendas = [];
                _this.mdImportVenda.Hide();
                if (ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_Modulo_Contabil) {
                    _this.txtTipoLancamentoContabil.Obrigatorio = false;
                    _this.txtTipoLancamentoContabil.Limpar();
                }
                _this.RefreshAngular();
            }
            catch (ex) {
                fecharEspera();
                LogarException(ex);
            }
        }, function (erro) {
            fecharEspera();
            LogarExceptionAjax(erro);
        }, this);
        if (vendasImportadas.length == 1
            && (this.EntityTela.Cfop !== '5.929' && this.EntityTela.Cfop !== '6.929')) {
            if (this.cboFinalidade.GetValue() !== 'D') {
                var ContasReceber;
                var lista = [];
                var pag;
                var cheques = [];
                for (x = 0; x < this.GetScope().Entity.FiscalNFVendas.length; ++x) {
                    Venda = this.GetScope().Entity.FiscalNFVendas[x].VendaEntity;
                    parametros = {
                        CodVenda: Venda.Codigo
                    };
                    ContasReceber = this.ExecutarFuncaoServerSideSynch("GetContasRecerByVenda", parametros);
                    if (Venda.Valor_Dinheiro > 0) {
                        pag = {};
                        pag.Valor = Venda.Valor_Dinheiro;
                        pag.Cod_Forma_Pagamento_XML = Enum_Pagamentos_NF.DinheiroNF;
                        pag.Vencimento = new Date;
                        pag.Cod_Ind_Pagamento_XML = 0;
                        this.PreencherPagamento(pag, Venda);
                        lista.push(pag);
                    }
                    if (Venda.Valor_Cheque_Vista > 0) {
                        cheques = this.ExecutarFuncaoServerSideSynch("GetChequesVenda", parametros);
                        for (var x = 0; x < cheques.length; x++) {
                            pag = {};
                            pag.Valor = Venda.Valor_Cheque_Vista;
                            pag.Cod_Forma_Pagamento_XML = Enum_Pagamentos_NF.ChequeNF;
                            if (Venda.Data == cheques[x].Vencimento) {
                                pag.Cod_Ind_Pagamento_XML = 0;
                            }
                            else {
                                pag.Cod_Ind_Pagamento_XML = 1;
                            }
                            this.PreencherPagamento(pag, Venda);
                            pag.Agencia = cheques[x].Agencia.CNum();
                            pag.Banco = cheques[x].Banco;
                            pag.Cheque = cheques[x].Cheque;
                            pag.Cliente = cheques[x].Cliente;
                            pag.Conta_Corrente = cheques[x].Conta;
                            pag.Cpf = cheques[x].Cpf;
                            pag.Endereco_Titular = cheques[x].Endereco_Cliente;
                            pag.Fone_Titular = cheques[x].Fone_Cliente;
                            pag.Nome_Titular = cheques[x].Nome_Cliente;
                            pag.Parcela = x.toString();
                            pag.Tipo = cheques[x].Pessoa;
                            pag.Vencimento = cheques[x].Vencimento;
                            lista.push(pag);
                        }
                    }
                    if (Venda.Valor_Cartao_Credito > 0 || Venda.Valor_Cartao_Debito > 0) {
                        var retornoCard;
                        for (var x = 0; x < Venda.Cartoes.length; x++) {
                            var parametros = {
                                CodCartao: Venda.Cartoes[x].Cartao
                            };
                            retornoCard = this.ExecutarFuncaoServerSideSynch("GetByCodCartao", parametros);
                            pag = {};
                            if (retornoCard.Tipo == "C") {
                                pag.Cod_Forma_Pagamento_XML = Enum_Pagamentos_NF.CartaoCreditoNF;
                                pag.Forma_Pagamento = Venda.Cartoes[x].Cartao;
                                pag.Valor = Venda.Cartoes[x].Valor;
                            }
                            else {
                                pag.Cod_Forma_Pagamento_XML = Enum_Pagamentos_NF.CartaoDebitoNF;
                                pag.Forma_Pagamento = Venda.Cartoes[x].Cartao;
                                pag.Valor = Venda.Cartoes[x].Valor;
                            }
                            //pag.Vencimento = Venda.Data;
                            pag.Vencimento = Venda.Cartoes[x].Vencimento;
                            if (retornoCard.Cartao_Dias) {
                                if (retornoCard.Cartao_Dias[0].Porcentagem == 100) {
                                    pag.Cod_Ind_Pagamento_XML = 0;
                                }
                                else {
                                    pag.Cod_Ind_Pagamento_XML = 1;
                                }
                            }
                            this.PreencherPagamento(pag, Venda);
                            lista.push(pag);
                        }
                    }
                    if (Venda.Valor_Ticket > 0) {
                        pag = {};
                        pag.Valor = Venda.Valor_Ticket;
                        pag.Cod_Forma_Pagamento_XML = Enum_Pagamentos_NF.OutrosNF;
                        pag.Vencimento = Venda.Data;
                        this.PreencherPagamento(pag, Venda);
                        lista.push(pag);
                    }
                    if (Venda.Valor_Cliente > 0) {
                        for (var x = 0; x < Venda.VendaPagamentos.length; x++) {
                            pag = {};
                            pag.Valor = Venda.VendaPagamentos[x].Valor;
                            pag.Doc_Bancario = Venda.VendaPagamentos[x].Documento_Bancario;
                            pag.Documento_Mercantil = Venda.VendaPagamentos[x].Documento_Mercantil;
                            pag.Cod_Forma_Pagamento_XML = Enum_Pagamentos_NF.CreditoLojaNF;
                            pag.Parcela = (x + 1).toString();
                            pag.Vencimento = Venda.VendaPagamentos[x].Data_Vencimento;
                            pag.Conta_Corrente = Venda.VendaPagamentos[x].Conta_Corrente.toString();
                            this.PreencherPagamento(pag, Venda);
                            lista.push(pag);
                        }
                    }
                    if (ContasReceber && ContasReceber.length > 0) {
                        if (ContasReceber[0].Baixa) {
                            MostrarAlerta("Esta venda já possui contas pagas. Não será possível adicioná-la à esta NF!");
                            return false;
                        }
                        if (ContasReceber[0].Boleto) {
                            MostrarAlerta("Já foi emitido boleto da parcela desta venda! Não será possível adicioná-la a esta NF!");
                            return false;
                        }
                    }
                }
                //limpando as cobranças anteriores ca
                this.CobCrediarios = [];
                this.CobCheques = [];
                this.CobDinheiros = [];
                this.CobOutros = [];
                this.CobCartoes = [];
                this.PreencherCobranca(lista);
            }
        }
        return false;
    };
    C_NotaF.prototype.PreencherPagamento = function (pag, Venda) {
        pag.Cliente = Venda.Cliente;
        pag.Documento = Venda.Codigo.toString();
        pag.Nf = Venda.Fiscal_Nf.Codigo;
        this.PreencherDescricaoPagamentos(pag);
    };
    C_NotaF.prototype.SelecionouOrcamento = function (s, e) {
        var _this = this;
        var linha = e.data;
        if (linha) {
            if (this.ImportarOrcamento(linha) == false) {
                return;
            }
            if (linha.Nota_Fiscal > 0) {
                MsgBoxJS("Já foi emitida uma Nota para este orçamento. Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                    if (result.Resultado == MsgBoxResult.No) {
                        _this.OnDepoisLimpar(_this.EntityTela);
                        return;
                    }
                }, this);
            }
            this.txtDataInicialO.Date = new Date();
            this.txtDataFinalO.Date = new Date();
            this.txtCodOrcamento.SetText("");
            this.cboOrcamento.SetSelectedIndex(0);
            this.txtClienteOrcamento.SetText("");
        }
        return false;
    };
    C_NotaF.prototype.RespostaProduto = function (result) {
        this.Item = {};
        return;
    };
    C_NotaF.prototype.ImportarOrcamento = function (dados) {
        var retorno = JSON.stringify(dados);
        var parametros;
        parametros = {
            strJson: retorno
        };
        var orcamentosImportados = this.ExecutarFuncaoServerSideSynch("RetornaOrcamentosImportadosJson", parametros);
        var x = 0;
        var codVendas = "";
        if (orcamentosImportados) {
            codVendas = codVendas + orcamentosImportados.ID.toString() + ",";
            codVendas = codVendas.toString().substring(0, codVendas.length - 1);
            this.GetScope().Entity.Codigo_Cliente = orcamentosImportados.CodCliente;
        }
        var estadoCliente = "";
        var cliente;
        parametros = {
            codCliente: this.GetScope().Entity.Codigo_Cliente
        };
        cliente = this.ExecutarFuncaoServerSideSynch("GetDadosCliente", parametros);
        if (!cliente) {
            MostrarAlerta("Cliente não encontrado!");
            this.txtDataInicialO.Date = new Date();
            this.txtDataFinalO.Date = new Date();
            this.RelacaoOrcamentos = [];
            this.mdOrcamento.Hide();
            this.OnDepoisLimpar(this.EntityTela);
            return;
        }
        var finalidade = 0;
        if (this.cboFinalidade.GetValue() == "T") {
            finalidade = 5;
        }
        else if (this.cboFinalidade.GetValue() == "C") {
            finalidade = 2;
        }
        else if (this.cboFinalidade.GetValue() == "A") {
            finalidade = 3;
        }
        else if (this.cboFinalidade.GetValue() == "D") {
            finalidade = 4;
        }
        else {
            finalidade = 1;
        }
        parametros = {
            vendas: codVendas,
            tipoDocumento: this.GetScope().Entity.E_S.toString(),
            empresa: this.GetScope().Entity.Empresa,
            estadoCliente: cliente.Uf_D,
            finalidade: finalidade
        };
        try {
            var listaProdutos = this.ExecutarFuncaoServerSideSynch("RetornarProdutosOrcamento", parametros);
            this.GetScope().Entity.Estoque = 0;
            this.ProdutosNota = listaProdutos;
            this.PreencherMotivoDesoneracao();
            this.CalcularTotalNota();
            this.EntityTela.Cfop = listaProdutos[0].Cfop;
        }
        catch (ex) {
            LogarException(ex);
            return false;
        }
        this.RelacaoOrcamentos = [];
        this.mdOrcamento.Hide();
        return true;
    };
    C_NotaF.prototype.OnClickBotaoGerar = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        if (this.NFe != null && this.NFe.Situacao != null) {
            if (this.NFe.Situacao.toUpperCase() == "AUTORIZADA" || this.NFe.Situacao.toUpperCase() == "CANCELADA") {
                MostrarAlerta("Essa nota não pode ser alterada pois já esta com a situação " + this.NFe.Situacao.toUpperCase());
                return;
            }
        }
        var parametros;
        parametros = {
            empresa: this.GetScope().Entity.Empresa,
            dataInicial: this.txtDataInicialV.Date,
            dataFinal: this.txtDataFinalV.Date,
            tipoRelacao: this.cboTipoRelacao.GetValue(),
            vendaInicial: this.txtVendaInicial.GetText().CNum(),
            vendaFinal: this.txtVendaFinal.GetText().CNum(),
            codDestinario: CNum(this.EntityTela.Codigo_Cliente)
        };
        abrirEspera("Aguarde, gerando a relação de vendas...");
        this.ExecutarFuncaoServerSideAsynch("GerarVendas", parametros, function (d) {
            var retorno = GetRetornoAJAX(d);
            _this.RelacaoVendas = retorno;
            setTimeout(function () {
                fecharEspera();
            }, 200);
        }, function (erro) {
            fecharEspera();
            LogarExceptionAjax(erro);
        }, this);
        return false;
    };
    C_NotaF.prototype.OnClickBotaoMais = function () {
        this.EntityTela.Formulario += 1;
        this.GetScope().$applyAsync();
        return false;
    };
    C_NotaF.prototype.OnClickBotaoMenos = function () {
        var numOld;
        var num;
        numOld = this.GetScope().Entity.Formulario;
        num = this.GetScope().Entity.Formulario - 1;
        if (num == 0) {
            num = 1;
        }
        this.GetScope().Entity.Formulario = num;
        this.GetScope().$applyAsync();
        this.OnMudouCFOP(numOld, num);
        return false;
    };
    C_NotaF.prototype.OnClickAbrirModalCompra = function (s, e) {
        e.processOnServer = false;
        if (this.NFe != null && this.NFe.Situacao != null) {
            if (this.NFe.Situacao.toUpperCase() == "AUTORIZADA" || this.NFe.Situacao.toUpperCase() == "CANCELADA") {
                MostrarAlerta("Essa nota não pode ser alterada pois já esta com a situação " + this.NFe.Situacao.toUpperCase());
                return;
            }
        }
        if (this.EntityTela.Codigo_Cliente == 0 || !this.EntityTela.Codigo_Cliente) {
            MostrarAlerta("Informe o cliente da nota para utilizar essa função!");
            return;
        }
        if (this.EntityTela.Tipo_Nota == "V" || this.EntityTela.Tipo_Nota == "T" || this.EntityTela.Tipo_Nota == "D") {
            this.cboFinalidadeCompra.SetValue(this.EntityTela.Tipo_Nota);
        }
        this.mdImportarCompra.Show();
        return false;
    };
    C_NotaF.prototype.OnClickBotaoGerarOrcamento = function (s, e) {
        e.processOnServer = false;
        if (this.NFe != null && this.NFe.Situacao != null) {
            if (this.NFe.Situacao.toUpperCase() == "AUTORIZADA" || this.NFe.Situacao.toUpperCase() == "CANCELADA") {
                MostrarAlerta("Essa nota não pode ser alterada pois já esta com a situação " + this.NFe.Situacao.toUpperCase());
                return;
            }
        }
        var retorno;
        var parametros;
        parametros = {
            empresa: this.GetScope().Entity.Empresa,
            dataInicial: this.txtDataInicialO.Date,
            dataFinal: this.txtDataFinalO.Date,
            codOrcamento: this.txtCodOrcamento.GetText().CNum(),
            situacao: this.cboOrcamento.GetValue(),
            codCliente: this.txtClienteOrcamento.GetText().CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GerarOrcamentos", parametros);
        this.RelacaoOrcamentos = retorno;
        return false;
    };
    C_NotaF.prototype.OnClickBotaoAdicionarProduto = function (s, e) {
        e.processOnServer = false;
        //Comentei as linhas abaixo pois o IVA pode ser informado em qualquer situação.
        //A nota pode ser lançada manualmente, então não devemos bloquear os campos dessa maneira.
        //Qualquer dúvida conversar com Leandro Mendes ou Miqueias.
        //if (this.EntityTela.Tipo_Nota == "D") {
        //    this.txtIVA.Enabled = true;
        //} else {
        //    this.txtIVA.Enabled = false;
        //}
        if (!this.EntityTela.Codigo_Cliente) {
            MostrarAlerta("Informe o Destinatário da Nota Fiscal!");
            return false;
        }
        if (this.mdProdutos && this.mdProdutos.ModalDialog) {
            this.mdProdutos.ModalDialog.Show();
            this.txtProduto.Disabled = false;
            this.LimparProduto();
            if (this.txtProduto && this.txtProduto.Textbox) {
                this.txtProduto.Focus();
            }
        }
        return false;
    };
    C_NotaF.prototype.OnClickBotaoAdicionarNF = function (s, e) {
        e.processOnServer = false;
        if (this.NFe != null && this.NFe.Situacao != null) {
            if (this.NFe.Situacao.toUpperCase() == "AUTORIZADA" || this.NFe.Situacao.toUpperCase() == "CANCELADA") {
                MostrarAlerta("Essa nota não pode ser alterada pois já esta com a situação " + this.NFe.Situacao.toUpperCase());
                return;
            }
        }
        if (this.mdNFRef && this.mdNFRef.ModalDialog) {
            this.mdNFRef.ModalDialog.Show();
        }
        return false;
    };
    C_NotaF.prototype.OnClickBotaoImportVenda = function (s, e) {
        e.processOnServer = false;
        var ex = [];
        if (this.NFe != null && this.NFe.Situacao != null) {
            if (this.NFe.Situacao.toUpperCase() == "AUTORIZADA" || this.NFe.Situacao.toUpperCase() == "CANCELADA") {
                MostrarAlerta("Essa nota não pode ser alterada pois já esta com a situação " + this.NFe.Situacao.toUpperCase());
                return;
            }
        }
        if (!this.EntityTela.Codigo_Cliente) { //Lucas Viesi em 23/01/19 (solicitado por Leandro)
            ex.push("Informe o Destinatário antes de importar vendas! <br/>");
        }
        //Necessário informar o CFOP antes pois pode existir regra de imposto por CFOP
        if (!this.EntityTela.Cfop) {
            ex.push("Informe a Natureza da Operação antes de importar vendas! <br/>");
        }
        if (ex.length > 0) {
            MostrarAlerta(ex.join(''));
            return;
        }
        if (this.mdImportVenda && this.mdImportVenda.ModalDialog) {
            this.mdImportVenda.ModalDialog.Show();
        }
        return false;
    };
    C_NotaF.prototype.OnClickBotaoBuscar = function (s, e) {
        e.processOnServer = false;
        this.preencherAnilhas();
    };
    C_NotaF.prototype.OnClickBotaoGerenciarNFe = function (s, e) {
        e.processOnServer = false;
        var parametros;
        parametros = {
            codigo: this.EntityTela.Formulario,
            empresa: this.EntityTela.Empresa,
            serie: this.EntityTela.Serie
        };
        retorno = this.ExecutarFuncaoServerSideSynch("ObterFormulario", parametros);
        if (retorno == null) {
            MostrarAlerta("Para acessar as opções de gerenciamento de NF-e é necessário que a Nota Fiscal esteja gravada!");
            return;
        }
        if (this.mdTransmitirNFe && this.mdTransmitirNFe.ModalDialog) {
            this.mdTransmitirNFe.ModalDialog.Show();
            var retorno;
            var entity = this.GetScope().Entity;
            parametros = {
                codigoNf: entity.Codigo
            };
            retorno = this.ExecutarFuncaoServerSideSynch("RetornaSituacao", parametros);
            var arrRetorno = retorno.split("|");
            if (arrRetorno[0].toString() != "Erro") {
                var EntidadeRetorno = this.RetNFe;
                EntidadeRetorno.SituacaoAtual = arrRetorno[0].toString();
                EntidadeRetorno.MensagemRetorno = arrRetorno[1].toString();
                this.RetNFe = EntidadeRetorno;
                this.RefreshAngular();
            }
        }
        return false;
    };
    C_NotaF.prototype.OnClickBotaoImportOrcamento = function (s, e) {
        e.processOnServer = false;
        if (this.NFe != null && this.NFe.Situacao != null) {
            if (this.NFe.Situacao.toUpperCase() == "AUTORIZADA" || this.NFe.Situacao.toUpperCase() == "CANCELADA") {
                MostrarAlerta("Essa nota não pode ser alterada pois já esta com a situação " + this.NFe.Situacao.toUpperCase());
                return;
            }
        }
        if (!this.EntityTela.Codigo_Cliente) { //Lucas Viesi em 23/01/19 (solicitado por Leandro)
            MostrarAlerta("Informe o Destinatário antes de importar orçamentos!");
            return;
        }
        if (this.mdOrcamento && this.mdOrcamento.ModalDialog) {
            this.mdOrcamento.ModalDialog.Show();
            this.grdOrcamento.AjustarWidth();
        }
        return false;
    };
    C_NotaF.prototype.OnClickBotaoAdicionarParcelas = function (s, e) {
        e.processOnServer = false;
        var parametros;
        if (this.mdCobranca && this.mdCobranca.ModalDialog) {
            this.mdCobranca.ModalDialog.Show();
        }
        this.lblFUNRURAL.Visible = false;
        if (this.ExecutarFuncaoServerSideSynch("EstabelecimentoFazenda", parametros) == true) {
            parametros = {
                Empresa: this.GetScope().Entity.Empresa,
                TotalFatura: this.GetScope().Entity.Total_Nf,
                Total: false
            };
            this.lblFUNRURAL.Visible = true;
            this.lblFUNRURAL.Text = ("Descontado R$ " + this.ExecutarFuncaoServerSideSynch("RetornaTotalFUNRURAL", parametros) + " do Valor da Nota, referente ao FUNRURAL");
            this.lblFUNRURAL.Text = this.lblFUNRURAL.Text.replace(".", ",");
            parametros = {
                Empresa: this.GetScope().Entity.Empresa,
                TotalFatura: this.GetScope().Entity.Total_Nf,
                Total: true
            };
            this.EntityTela.Total_Nf = this.ExecutarFuncaoServerSideSynch("RetornaTotalFUNRURAL", parametros);
        }
        return false;
    };
    C_NotaF.prototype.OnClickBotaoEventosNFe = function (s, e) {
        e.processOnServer = false;
        if (this.mdEventosNFe && this.mdEventosNFe.ModalDialog) {
            this.mdEventosNFe.ModalDialog.Show();
        }
        return false;
    };
    C_NotaF.prototype.OnClickBotaoAddDadosAdicionais = function (s, e) {
        e.processOnServer = false;
        if (this.mdDadosAdicionais && this.mdDadosAdicionais.ModalDialog) {
            this.mdDadosAdicionais.ModalDialog.Show();
        }
        return false;
    };
    C_NotaF.prototype.OnTextBoxDescontoPChange = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        if (!this.Item.Codigo_Produto) {
            return false;
        }
        this.CalcularValorDescontoReais();
        this.CalcularValorTotalProduto();
    };
    C_NotaF.prototype.OnTextBoxDescontoPServicoChange = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        if (!this.Servico.Codigo_Produto) {
            return false;
        }
        this.CalcularValorDescontoReaisServico();
        this.CalcularValorTotalServico();
    };
    C_NotaF.prototype.OnTextBoxDescontoRChange = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        if (!this.Item.Codigo_Produto) {
            return false;
        }
        this.CalcularValorDescontoPorcentagem();
        this.CalcularValorTotalProduto();
    };
    C_NotaF.prototype.OnTextBoxIVAChange = function () {
        this.CalcularBaseICMSST();
        this.CalcularValorICMSST();
    };
    C_NotaF.prototype.OntxtPercIPIDevChange = function () {
        this.Item.Valor_IPI_Devolvido = (this.Item.Valor_Total * (this.Item.Percentual_IPI_Devolvido / 100));
        this.RefreshAngular();
        this.CalcularValorICMSST();
    };
    C_NotaF.prototype.OntxtValorIPIDevChange = function () {
        this.Item.Percentual_IPI_Devolvido = ((this.Item.Valor_IPI_Devolvido * 100) / this.Item.Valor_Total).Format(ValoresSismoura.CasasDecimaisValor).CNum();
        this.RefreshAngular();
        this.CalcularValorICMSST();
    };
    C_NotaF.prototype.CalcularValorPIS = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        var entidade = this.Item;
        entidade.Valor_Pis = (entidade.Base_Pis * (entidade.Aliquota_Pis / 100)) || 0;
        this.Item = entidade;
    };
    C_NotaF.prototype.CalcularValorCOFINS = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        var entidade = this.Item;
        entidade.Valor_Cofins = (entidade.Base_Cofins * (entidade.Aliquota_Cofins / 100)) || 0;
        this.Item = entidade;
    };
    C_NotaF.prototype.CalcularValorPISServico = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        var entidade = this.Servico;
        entidade.Valor_Pis = (entidade.Base_Pis * (entidade.Aliquota_Pis / 100)) || 0;
        this.Servico = entidade;
    };
    C_NotaF.prototype.CalcularValorCOFINSServico = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        var entidade = this.Servico;
        entidade.Valor_Cofins = (entidade.Base_Cofins * (entidade.Aliquota_Cofins / 100)) || 0;
        this.Servico = entidade;
    };
    C_NotaF.prototype.CalcularValorFCP = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        var entidade = this.Item;
        entidade.Valor_FCP = (entidade.Base_Icms * (entidade.Aliquota_FCP / 100)) || 0;
        this.Item = entidade;
    };
    C_NotaF.prototype.CalcularValorIPI = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        var entidade = this.Item;
        entidade.Valor_Ipi = (entidade.Base_IPI * (entidade.Aliquota_IPI / 100)) || 0;
        this.Item = entidade;
    };
    C_NotaF.prototype.CalcularValorISSQN = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        var entidade = this.Servico;
        entidade.Valor_ISSQN = (entidade.Base_ISSQN * (entidade.Aliquota_ISSQN / 100)) || 0;
        this.Servico = entidade;
    };
    C_NotaF.prototype.CalcularBaseICMSST = function () {
        var entidade = this.Item;
        if (!this.permiteIcmsSt(entidade)) {
            return;
        }
        entidade.Base_Icms_ST = (entidade.Valor_Total + (entidade.Valor_Total * (entidade.IVA / 100))) || 0;
        this.Item = entidade;
    };
    C_NotaF.prototype.permiteIcmsSt = function (entidade) {
        if (!String.IsNullOrWhiteSpace(entidade.Cst)) {
            var cst = entidade.Cst.substring(1);
            var permiteST = false;
            switch (cst) {
                case "10":
                case "30":
                case "70":
                case "90":
                case "201":
                case "202":
                case "900":
                    permiteST = true;
                    break;
                default:
                    permiteST = false;
                    break;
            }
            return permiteST;
        }
    };
    C_NotaF.prototype.CalcularValorICMSST = function () {
        var entidade = this.Item;
        var total_produto, tmpbase, aux, retorno;
        var auxValorSt, auxBase, auxIva, valor_retirar, base_ICMS_Por;
        var parametros;
        var preco_Medio;
        preco_Medio = 0;
        //Comentei as linhas abaixo pois o IVA pode ser informado em qualquer situação.
        //A nota pode ser lançada manualmente, então não devemos bloquear os campos dessa maneira.
        //Qualquer dúvida conversar com Leandro Mendes ou Miqueias.
        //if (this.GetScope().Entity.Tipo_Nota == "D") {
        //    return;
        //}
        if (!this.permiteIcmsSt(entidade)) {
            return;
        }
        var RatearDescontoST = this.ExecutarFuncaoServerSideSynch("RatearDescontoST", parametros);
        base_ICMS_Por = ((entidade.Base_Icms * 100) / entidade.Valor_Unitario);
        if (entidade.Modalidade_Base_ICMS_ST == 4) {
            //usar essa temp base faz com que a base de icms st fique aumentando cada vez que 
            //perde o foco, pois a variavel vai somando e não deveria fazer isso.
            //var tmpbase = entidade.Base_Icms_ST;
            total_produto = entidade.Valor_Total + entidade.Valor_Ipi;
            if (entidade.Valor_IPI_Devolvido) {
                if (entidade.Valor_IPI_Devolvido > 0) {
                    total_produto += entidade.Valor_IPI_Devolvido;
                }
            }
            if (!RatearDescontoST) {
                total_produto = total_produto - entidade.Valor_Desconto;
            }
            //ICMS + IPI + IVA
            if (entidade.Porcentagem_Base_ICMS_ST && entidade.Porcentagem_Base_ICMS_ST > 0) {
                auxBase = ((total_produto * entidade.Porcentagem_Base_ICMS_ST) / 100).Format(3).CNum();
            }
            else {
                auxBase = total_produto;
            }
            auxIva = ((auxBase * entidade.IVA) / 100).Format(3).CNum();
            auxValorSt = (auxBase + auxIva).Format(3).CNum();
            entidade.Base_Icms_ST = auxValorSt.Format(2).CNum();
            aux = ((auxValorSt * entidade.Aliquota_ICMS_ST) / 100).Format(3).CNum();
            //Diferença entre ICMS com IVA - ICMS Normal
            if (entidade.IVA == 0 && base_ICMS_Por > 0 && entidade.Aliquota_ICMS > 0) {
                aux = ((total_produto * tmpbase) / 100).Format(3).CNum();
                aux = ((aux * entidade.Aliquota_ICMS_ST) / 100).Format(3).CNum();
            }
            else if (entidade.IVA > 0 && auxIva > 0 && (entidade.Valor_Icms == 0 || !entidade.Valor_Icms)) {
                aux = ((auxIva * entidade.Aliquota_ICMS_ST) / 100).Format(3).CNum();
            }
            else {
                if (RatearDescontoST) {
                    aux = aux - entidade.Valor_Total * (entidade.Aliquota_ICMS * base_ICMS_Por / 10000).Format(3).CNum();
                }
                else {
                    valor_retirar = (entidade.Valor_Total - entidade.Valor_Desconto) * (entidade.Aliquota_ICMS * base_ICMS_Por / 10000).Format(3).CNum();
                    if (!(valor_retirar > aux)) {
                        aux = aux - valor_retirar;
                    }
                }
            }
            if (aux < 0) {
                aux = 0;
            }
            entidade.Valor_Icms_ST = aux; //Base sub
        }
        else if (entidade.Modalidade_Base_ICMS_ST == 5) {
            total_produto = entidade.Valor_Total + entidade.Valor_Ipi;
            if (!RatearDescontoST) {
                total_produto = total_produto - entidade.Valor_Desconto;
            }
            tmpbase = entidade.Base_Icms_ST;
            entidade.Base_Icms_ST = ((total_produto - (tmpbase)) / 100).Format(2).CNum();
            entidade.Valor_Icms = ((entidade.Aliquota_ICMS_ST / 100) * total_produto).Format(2).CNum();
            aux = ((entidade.Aliquota_ICMS_ST / 100) * (preco_Medio * entidade.Quantidade)).Format(2).CNum();
            aux = (aux - entidade.Valor_Icms).Format(2).CNum();
            entidade.Base_Icms_ST = preco_Medio * entidade.Quantidade;
            if (aux < 0) {
                aux = 0;
            }
            entidade.Valor_Icms_ST = aux;
        }
        else {
            entidade.Base_Icms_ST = 0;
        }
        this.Item = entidade;
    };
    C_NotaF.prototype.CalcularValorICMS = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        var entidade = this.Item;
        entidade.Valor_Icms = (entidade.Base_Icms * (entidade.Aliquota_ICMS / 100)) || 0;
        this.Item = entidade;
    };
    C_NotaF.prototype.CalcularSubTotalServico = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        var entidade = this.Servico;
        entidade.Valor_SubTotal = (entidade.Quantidade * entidade.Valor_Unitario) || 0;
        this.Servico = entidade;
        this.CalcularValorDescontoReaisServico();
        this.CalcularValorTotalServico();
    };
    C_NotaF.prototype.CalcularSubTotal = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        var entidade = this.Item;
        entidade.Valor_SubTotal = (entidade.Quantidade * entidade.Valor_Unitario) || 0;
        this.Item = entidade;
        this.CalcularValorDescontoReais();
        this.CalcularValorTotalProduto();
    };
    C_NotaF.prototype.CalcularValorDescontoPorcentagem = function () {
        var entidade = this.Item;
        if (entidade.Valor_Desconto >= entidade.Valor_SubTotal && entidade.Valor_Desconto > 0) {
            MostrarAlerta("O desconto não pode ser maior ou igual ao valor do produto!");
            entidade.Valor_Desconto = 0;
            return;
        }
        entidade.Valor_Desconto_Porcentagem = (entidade.Valor_Desconto * 100) / entidade.Valor_SubTotal;
        this.Item = entidade;
    };
    C_NotaF.prototype.CalcularValorDescontoPorcentagemServico = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        var entidade = this.Servico;
        if (entidade.Valor_Desconto >= entidade.Valor_SubTotal && entidade.Valor_Desconto > 0) {
            MostrarAlerta("O desconto não pode ser maior ou igual ao valor do serviço!");
            entidade.Valor_Desconto = 0;
            return;
        }
        entidade.Valor_Desconto_Porcentagem = ((entidade.Valor_Desconto * 100) / entidade.Valor_SubTotal) || 0;
        this.Servico = entidade;
    };
    C_NotaF.prototype.CalcularValorDescontoReais = function () {
        var entidade = this.Item;
        entidade.Valor_Desconto = ((entidade.Valor_Desconto_Porcentagem / 100) * entidade.Valor_SubTotal) || 0;
        this.Item = entidade;
    };
    C_NotaF.prototype.CalcularValorDescontoReaisServico = function () {
        var entidade = this.Servico;
        entidade.Valor_Desconto = ((entidade.Valor_Desconto_Porcentagem / 100) * entidade.Valor_SubTotal) || 0;
        this.Servico = entidade;
    };
    C_NotaF.prototype.CalcularTotalNota = function () {
        if ((!this.ProdutosNota || this.ProdutosNota.length == 0) && (!this.ServicosNota || this.ServicosNota.length == 0)) {
            this.EntityTela.Qtde = 0;
            this.EntityTela.Peso_Bruto = 0;
            this.EntityTela.Peso_Liquido = 0;
            return;
        }
        var produtos = this.ProdutosNota;
        var servicos = this.ServicosNota;
        var totalProdutos = 0;
        var totalBaseICMS = 0;
        var totalICMS = 0;
        var totalBaseICMSST = 0;
        var totalICMSSubst = 0;
        var totalIPI = 0;
        var totalDesconto = 0;
        var totalOutrasDespesas = 0;
        var totalICMSDesonerado = 0;
        var totalISSQN = 0;
        var totalServicos = 0;
        var TotalNota = 0;
        var totalSeguro = 0;
        var totalFrete = 0;
        var totalIPIDevolvido = 0;
        var qtdeProdutos = 0;
        //A rotina abaixo realiza o calculo do IBPT e também do crédito do simples nacioanal
        //=================================================================================================================================================
        var parametros;
        parametros = {
            arrayProdutos: JSON.stringify(this.ProdutosNota),
            empresa: this.hdnEmpresa.value.CNum()
        };
        var listaProdutos = this.ExecutarFuncaoServerSideSynch("AtualizarInformacoesProdutos", parametros);
        this.ProdutosNota = listaProdutos;
        this.PreencherMotivoDesoneracao();
        //=================================================================================================================================================
        if (this.EntityTela.Seguro && this.EntityTela.Seguro > 0) {
            totalSeguro = this.EntityTela.Seguro;
        }
        if (this.EntityTela.Frete && this.EntityTela.Frete > 0) {
            totalFrete = this.EntityTela.Frete;
        }
        var x;
        var y;
        this.EntityTela.Peso_Bruto = 0;
        this.EntityTela.Peso_Liquido = 0;
        for (x = 0; x < produtos.length; ++x) {
            totalProdutos += produtos[x].Valor_Total = produtos[x].Valor_Total || 0;
            totalBaseICMS += produtos[x].Base_Icms = produtos[x].Base_Icms || 0;
            totalICMS += produtos[x].Valor_Icms = produtos[x].Valor_Icms || 0;
            totalBaseICMSST += produtos[x].Base_Icms_ST = produtos[x].Base_Icms_ST || 0;
            totalICMSSubst += produtos[x].Valor_Icms_ST = produtos[x].Valor_Icms_ST || 0;
            totalIPI += produtos[x].Valor_Ipi = produtos[x].Valor_Ipi || 0;
            totalDesconto += produtos[x].Valor_Desconto = produtos[x].Valor_Desconto || 0;
            totalOutrasDespesas += produtos[x].Valor_Outros = produtos[x].Valor_Outros || 0;
            totalICMSDesonerado += produtos[x].Vlr_ICMS_Desonerado = produtos[x].Vlr_ICMS_Desonerado || 0;
            totalIPIDevolvido += produtos[x].Valor_IPI_Devolvido = produtos[x].Valor_IPI_Devolvido || 0;
            qtdeProdutos += produtos[x].Quantidade = produtos[x].Quantidade || 0;
        }
        //A rotina abaixo retorna do Peso Bruto e Peso Líquido dos produtos da nota            
        parametros = {
            listaProdutos: JSON.stringify(this.ProdutosNota),
            codNF: this.EntityTela.Codigo
        };
        var peso = this.ExecutarFuncaoServerSideSynch("RetornaPesoProdutoNota", parametros);
        if (peso) {
            if (peso.length > 0) {
                this.EntityTela.Peso_Bruto += peso[0];
            }
            if (peso.length > 1) {
                this.EntityTela.Peso_Liquido += peso[1];
            }
        }
        for (y = 0; y < servicos.length; ++y) {
            totalServicos += servicos[y].Valor_Total = servicos[y].Valor_Total || 0;
            totalISSQN += servicos[y].Valor_ISSQN = servicos[y].Valor_ISSQN || 0;
            totalDesconto += servicos[y].Valor_Desconto = servicos[y].Valor_Desconto || 0;
            totalOutrasDespesas += servicos[y].Valor_Outros = servicos[y].Valor_Outros || 0;
        }
        this.EntityTela.Total_Produtos = totalProdutos;
        this.EntityTela.Valor_Total_Servicos = totalServicos;
        this.EntityTela.Base_icms = totalBaseICMS;
        this.EntityTela.Valor_icms = totalICMS;
        this.EntityTela.Base_Subst = totalBaseICMSST;
        this.EntityTela.Valor_Subst = totalICMSSubst;
        this.EntityTela.Ipi = totalIPI;
        this.EntityTela.Valor_Desconto = totalDesconto;
        this.EntityTela.Outras_Despesas = totalOutrasDespesas;
        this.EntityTela.Valor_ICMS_Desonerado = totalICMSDesonerado;
        this.EntityTela.Valor_Iss = totalISSQN;
        this.EntityTela.Total_IPI_Devolvido = totalIPIDevolvido;
        this.EntityTela.Qtde = qtdeProdutos;
        //Lucas Viesi 14/02/19
        TotalNota = totalProdutos + totalServicos + totalSeguro + totalOutrasDespesas + totalIPI + totalICMSSubst + totalFrete + totalIPIDevolvido - totalDesconto - totalICMSDesonerado;
        this.EntityTela.Total_Nf = TotalNota.Format(2).CNum();
        this.RefreshAngular();
        this.InserirDadosAdicionais("");
        this.CalcularTotaisCobranca();
    };
    C_NotaF.prototype.InserirDadosAdicionais = function (codVendas) {
        if (!this.ProdutosNota || this.ProdutosNota.length == 0) {
            return;
        }
        var ufDestino = "";
        if (this.EntityTela.Uf) {
            ufDestino = this.EntityTela.Uf;
        }
        var cfop = "";
        if (this.EntityTela.Cfop) {
            cfop = this.GetScope().Entity.Cfop;
        }
        var parametros;
        var Ibpt;
        if (this.EntityTela.Mensagem_Ibpt) {
            Ibpt = this.EntityTela.Mensagem_Ibpt;
        }
        else {
            Ibpt = "";
        }
        parametros = {
            arrayProdutos: JSON.stringify(this.ProdutosNota),
            empresa: this.hdnEmpresa.value.CNum(),
            UfDestino: ufDestino,
            Ibpt: Ibpt,
            VICMSDesonerado: (this.EntityTela.Valor_ICMS_Desonerado || 0),
            consumidorFinal: this.cboConsumidorFinal.GetValue()
        };
        this.GetScope().Entity.Dados_Adicionais_Fisco_Nfe = this.ExecutarFuncaoServerSideSynch("PreencherDadosAdicionaisFisco", parametros);
        if (this.EntityTela.FiscalNFVendas && String.IsNullOrWhiteSpace(codVendas)) {
            this.EntityTela.FiscalNFVendas.forEach(function (v) {
                if (!String.IsNullOrWhiteSpace(codVendas)) {
                    codVendas += ",";
                }
                codVendas += v.Venda;
            });
        }
        parametros = {
            Cfop: cfop,
            Empresa: this.hdnEmpresa.value.CNum(),
            TotalProdutos: this.GetScope().Entity.Total_Produtos,
            TotalIPIDevolvido: this.GetScope().Entity.Total_IPI_Devolvido,
            produtos: this.ProdutosNota,
            vendas: codVendas
        };
        this.GetScope().Entity.Dados_Adicionais_Nfe = this.ExecutarFuncaoServerSideSynch("PreencherDadosAdicionaisContribuinte", parametros);
        this.GetScope().Entity.Dados_Adicionais_Nfe += "" + this.AdicionarDadosAdicionaisEntrega() + this.preencherInfAdicionais();
        this.RefreshAngular();
    };
    C_NotaF.prototype.CalcularValorTotalProduto = function () {
        var entidade = this.Item;
        var regraImposto;
        var valorIPIDevolvido = 0;
        entidade.Valor_Total = ((entidade.Valor_SubTotal + entidade.Valor_Outros - entidade.Valor_Desconto)) || 0;
        if (entidade.Valor_IPI_Devolvido
            && entidade.Valor_IPI_Devolvido != 0
            && this.chkSomarIPIDevolvido.Checked) {
            valorIPIDevolvido = entidade.Valor_IPI_Devolvido;
        }
        entidade.Base_Icms = entidade.Valor_Total + valorIPIDevolvido;
        entidade.Valor_FCP = entidade.Base_Icms * (entidade.Aliquota_FCP / 100) || 0;
        if (entidade.Base_IPI > 0) {
            entidade.Base_IPI = entidade.Valor_Total;
            entidade.Valor_Ipi = entidade.Base_IPI * (entidade.Aliquota_IPI / 100);
        }
        if (entidade.Base_Pis > 0) {
            entidade.Base_Pis = entidade.Valor_Total;
            entidade.Valor_Pis = entidade.Base_Pis * (entidade.Aliquota_Pis / 100);
        }
        if (entidade.Base_Cofins > 0) {
            entidade.Base_Cofins = entidade.Valor_Total;
            entidade.Valor_Cofins = entidade.Base_Cofins * (entidade.Aliquota_Cofins / 100);
        }
        this.Item = entidade;
        this.GetScope().$applyAsync();
        this.CalcularBaseICMSST();
        this.CalcularValorICMSST();
    };
    C_NotaF.prototype.CalcularValorTotalServico = function () {
        var entidade = this.Servico;
        entidade.Valor_Total = (entidade.Valor_SubTotal + entidade.Valor_Outros - entidade.Valor_Desconto) || 0;
        if (entidade.Base_Pis > 0) {
            entidade.Base_Pis = entidade.Valor_Total;
            entidade.Valor_Pis = entidade.Base_Pis * (entidade.Aliquota_Pis / 100);
        }
        if (entidade.Base_Cofins > 0) {
            entidade.Base_Cofins = entidade.Valor_Total;
            entidade.Valor_Cofins = entidade.Base_Cofins * (entidade.Aliquota_Cofins / 100);
        }
        if (entidade.Base_ISSQN > 0) {
            entidade.Base_ISSQN = entidade.Valor_Total;
            entidade.Valor_ISSQN = entidade.Base_ISSQN * (entidade.Aliquota_ISSQN / 100);
        }
        this.Servico = entidade;
        this.GetScope().$applyAsync();
    };
    C_NotaF.prototype.OnClickBotaoAdicionarServico = function (s, e) {
        e.processOnServer = false;
        if (!this.EntityTela.Codigo_Cliente) {
            MostrarAlerta("Informe o Destinatário da Nota Fiscal!");
            return false;
        }
        if (this.mdServicos && this.mdServicos.ModalDialog) {
            this.mdServicos.ModalDialog.Show();
            this.Servico = {};
            if (this.txtServico && this.txtServico.Textbox) {
                this.txtServico.Focus();
            }
        }
        return false;
    };
    C_NotaF.prototype.OnComboBoxFinalidadeChange = function (oldValue, newValue) {
        if ((oldValue === newValue) && (this.cboFinalidade.GetValue() != newValue)) {
            return;
        }
        var parametros;
        var entidade = this.GetScope().Entity;
        //if (oldValue != newValue){
        this.txtTipoLancamentoContabil.Limpar();
        if (this.cboCFOPNatureza && this.cboCFOPNatureza.Combo) {
            this.cboCFOPNatureza.ClearItems();
            this.EntityTela.Natureza_Operacao_Nfe = '';
            parametros = {
                finalidade: this.EntityTela.Tipo_Nota,
                tipo: entidade.E_S
            };
            var itens = this.ExecutarFuncaoServerSideSynch("GetCFOPbyFinalidade", parametros);
            if (itens) {
                for (var x = 0; x < itens.length; x++) {
                    this.cboCFOPNatureza.Combo.AddItem(itens[x].Codigo, itens[x].Codigo, "");
                }
            }
        }
        if (entidade.Tipo_Nota == "D") {
            this.tabProduto.AlterarVisibleAba("AbaIPIDevolvido", true);
        }
        else {
            this.tabProduto.AlterarVisibleAba("AbaIPIDevolvido", false);
        }
    };
    C_NotaF.prototype.OnClickBotaoConfirmarEvento = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        var parametros;
        var retorno;
        if (this.txtJustificativaEvento.GetText() == "") {
            MostrarAlerta("Informe a Justificativa!");
            return;
        }
        parametros = {
            codigoNf: this.GetScope().Entity.Codigo,
            xJust: this.txtJustificativaEvento.GetText(),
            Evento: this.cboTipoEvento.GetValue(),
            codEmpresa: this.GetScope().Entity.Empresa
        };
        abrirEspera("Aguarde, enviando o evento para a Sefaz...");
        this.ExecutarFuncaoServerSideAsynch("EnviarEventoNFe", parametros, function (d) {
            try {
                var retorno = GetRetornoAJAX(d);
                var arrRetorno = retorno.split("|");
                MsgBoxJS(arrRetorno[1], MsgBoxOptions.OkOnly, MsgBoxIcon.Info, $.proxy(_this.carregarEventosNFe, _this));
                if (_this.cboTipoEvento.GetValue() == "Can" && arrRetorno[0].toString().toLowerCase() == "sucesso") {
                    _this.MovimentarEstoqueProdutos(true);
                    _this.RetNFe.SituacaoAtual = "CANCELADA";
                    _this.NFe.Situacao = "CANCELADA";
                    _this.RetNFe.MensagemRetorno = "Evento registrado e vinculado a NF-e";
                }
                _this.txtJustificativaEvento.Textbox.value = "";
                _this.RefreshAngular();
                fecharEspera();
            }
            catch (ex) {
                fecharEspera();
                LogarException(ex);
            }
        }, function (erro) {
            fecharEspera();
            LogarException(erro);
        }, this);
        return false;
    };
    C_NotaF.prototype.OnDepoisBuscarExistente = function (Entidade) {
        this.preencherDadosAnilha(Entidade);
    };
    C_NotaF.prototype.preencherDadosAnilha = function (Entidade) {
        var retorno;
        if (this.txtDadosAnilha) {
            var parametros = {
                entidade: JSON.stringify(Entidade)
            };
            retorno = this.ExecutarFuncaoServerSideSynch("getAnilhas", parametros);
            if (retorno) {
                this.txtDadosAnilha.SetText(retorno);
            }
        }
    };
    C_NotaF.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        var parametros;
        var retorno;
        var serie;
        //Entity = <SiSMoura.Core.Entity.Fiscal_Nf>{};
        if (!Entity.Empresa) {
            Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        }
        if (this.hdnSeriePadrao.value.CNum() > 0) {
            serie = this.hdnSeriePadrao.value.CNum();
        }
        else {
            serie = Entity.Serie;
        }
        parametros = {
            empresa: Entity.Empresa,
            serie: serie
        };
        retorno = this.ExecutarFuncaoServerSideSynch("PreencherNumeroNota", parametros);
        if (!retorno || retorno == 0) {
            retorno = 1;
        }
        Entity.Formulario = retorno;
        Entity.Serie = serie;
        Entity.Data_Emissao = new Date();
        Entity.Hora_Emissao = new Date();
        Entity.Data_Es = new Date();
        Entity.Hora_Saida = new Date();
        Entity.E_S = "S";
        Entity.Tipo_Nota = "V";
        Entity.Consumidor_Final = "N";
        Entity.Tipo_Operacao = 0;
        Entity.Conta = 9;
        Entity.Estoque = 1;
        Entity.Fatura_NFe = "A VISTA";
        Entity.Peso_Bruto = 0;
        Entity.Peso_Liquido = 0;
        this.txtDadosAnilha.SetText("");
        if (ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_Modulo_Contabil) {
            this.txtTipoLancamentoContabil.Obrigatorio = true;
        }
        parametros = {
            empresa: this.hdnEmpresa.value.CNum()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("VerificaNaturezaOperacaoPadrao", parametros);
        if (retorno && String.IsNullOrWhiteSpace(retorno) == false) {
            Entity.Cfop = retorno;
            parametros = {
                idCfop: retorno
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("RetornaNaturezaOperacao", parametros);
            Entity.Natureza_Operacao_Nfe = retorno;
        }
        parametros = {
            empresa: this.hdnEmpresa.value.CNum()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("PreencherComboDeposito", parametros);
        if (retorno && String.IsNullOrWhiteSpace(retorno) == false) {
            Entity.Deposito = retorno;
        }
        var data = new Date();
        this.txtDataInicialV.Date = data;
        this.txtDataInicialO.Date = data;
        this.txtDataFinalV.Date = data;
        this.txtDataFinalO.Date = data;
        this.txtVencimentoInicial.Date = data;
        this.txtCodOrcamento.SetText("");
        this.cboOrcamento.SetSelectedIndex(0);
        this.txtClienteOrcamento.SetText("");
        this.txtSiscomexNota.SetText("");
        this.txtValorTotalXml.SetText("");
        this.txtNotaXml.SetText("");
        this.txtVendaInicial.SetText("");
        this.txtVendaFinal.SetText("");
        this.grdItensArquivo.PreencherGrid([]);
        this.RetNFe = {};
        this.RelacaoOrcamentos = [];
        this.RelacaoVendas = [];
        this.ProdutosNota = [];
        this.ServicosNota = [];
        this.ChavesReferenciadas = [];
        this.txtChaveAcessoRef.SetText("");
        this.Item = {};
        this.NFe = {};
        this.EventosNFe = [];
        this.NFe.Situacao = "";
        this.LimparCobranca();
        this.qtdVendasImportadas = 0;
        this.cboFinalidadeCompra.LimparSelecao();
        this.lblChaveAcessoCompra.Text = "";
        this.lblCnpjCompra.Text = "";
        this.lblQtdeProdCompra.Text = "";
        this.lblRazaoSocialCompra.Text = "";
        this.lblTotalProdutosCompra.Text = "";
        this.lblTotalNFCompra.Text = "";
        this.txtCodEntrada.Limpar();
        this.valorAnteriorFormulario = Entity.Formulario;
        this.GetScope().$applyAsync();
        this.txtDestinatario.Disabled = false;
        this.cboEstoque.Enabled = true;
        this.cboCFOPNatureza.LimparSelecao();
        this.LimparCliente(Entity);
        Entity.Natureza_Operacao_Nfe = '';
        Entity.Dados_Adicionais_Fisco_Nfe = "";
        Entity.Dados_Adicionais_Manuais = "";
        this.RefreshAngular();
    };
    C_NotaF.prototype.OnClickGerarReceber = function (s, e) {
        e.processOnServer = false;
        if (this.txtParcela.GetText().CNum() > 60) {
            MostrarAlerta("O número máximo de parcelas possíveis para gerar é 60!");
            return;
        }
        if (!this.txtVencimentoInicial.IsValido()) {
            return;
        }
        if (this.txtParcela.GetText().CNum() == 0) {
            return;
        }
        if (this.txtDiasVencimento.GetText().CNum() == 0 && this.txtParcela.GetText().CNum() > 1) {
            MostrarAlerta("Informe no mínimo o dia 1");
            return;
        }
        if (this.cboDiasFixo.GetValue() == "1" && this.txtDiasVencimento.GetText().CNum() > 31) {
            MostrarAlerta("Informe um número menor ou igual a 31");
            return;
        }
        var ref = {};
        var lista = [];
        var x;
        var vencimentoAtual;
        var soma = 0;
        var dif = 0;
        for (x = 1; x <= this.txtParcela.GetText().CNum(); ++x) {
            ref = {};
            ref.Numero_Documento = this.EntityTela.Formulario.toString();
            ref.Parcela = x;
            ref.Valor = (this.EntityTela.Total_Nf / this.txtParcela.GetText().CNum()).Format(2).CNum();
            soma += ref.Valor.Format(2).CNum();
            if (x == this.txtParcela.GetText().CNum()) {
                dif = (soma - this.EntityTela.Total_Nf).Format(2).CNum();
                if (dif < 0) {
                    ref.Valor = (ref.Valor + (-dif)).Format(2).CNum();
                }
                if (dif > 0) {
                    ref.Valor = (ref.Valor - dif).Format(2).CNum();
                }
            }
            if (this.cboDiasFixo.GetValue() == "0") {
                if (x == 1) {
                    ref.Vencimento = this.txtVencimentoInicial.Date;
                    vencimentoAtual = ref.Vencimento;
                }
                else {
                    ref.Vencimento = new Date();
                    ref.Vencimento = ref.Vencimento.DateAdd(vencimentoAtual, 'd', this.txtDiasVencimento.GetText().CNum());
                    vencimentoAtual = ref.Vencimento;
                }
            }
            else {
                if (x == 1) {
                    ref.Vencimento = this.txtVencimentoInicial.Date;
                    ref.Vencimento.setDate(this.txtDiasVencimento.GetText().CNum());
                    vencimentoAtual = ref.Vencimento;
                }
                else {
                    ref.Vencimento = new Date();
                    ref.Vencimento = ref.Vencimento.DateAdd(vencimentoAtual, 'm', 1);
                    ref.Vencimento.setDate(this.txtDiasVencimento.GetText().CNum());
                    vencimentoAtual = ref.Vencimento;
                }
            }
            lista.push(ref);
        }
        this.ContasGeradas = lista;
        return false;
    };
    C_NotaF.prototype.OnClickBotaoGerarXML = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        var parametros;
        var retorno;
        var entity = this.GetScope().Entity;
        if (!this.validarImpostosProdutos)
            return false;
        if (this.NFe != null && this.NFe.Situacao != null) {
            if (this.NFe.Situacao.toUpperCase() == "AUTORIZADA") {
                MostrarAlerta("NF-e já foi autorizada");
                return false;
            }
        }
        parametros = {
            codigoNf: entity.Codigo,
            caminhoXML: this.hdnCaminhoXML.value,
            codEmpresa: entity.Empresa
        };
        abrirEspera("Aguarde, gerando o XML da Nota Fiscal...");
        this.ExecutarFuncaoServerSideAsynch("GerarNFe", parametros, function (d) {
            try {
                var retorno = GetRetornoAJAX(d);
                var arrRetorno = retorno.split("|");
                var EntidadeRetorno = _this.RetNFe;
                if (arrRetorno[0].toString() == "Erro") {
                    fecharEspera();
                    MsgBoxJS(arrRetorno[1].toString(), MsgBoxOptions.OkOnly, MsgBoxIcon.Info, $.proxy(null, _this));
                    EntidadeRetorno.MensagemRetorno = arrRetorno[1].toString();
                    _this.RefreshAngular();
                }
                else {
                    fecharEspera();
                    EntidadeRetorno.SituacaoAtual = "Cadastrada";
                    _this.NFe.Situacao = "Cadastrada";
                    EntidadeRetorno.MensagemRetorno = arrRetorno[1].toString();
                    _this.RefreshAngular();
                }
                _this.RetNFe = EntidadeRetorno;
                _this.GetScope().$apply();
            }
            catch (ex) {
                fecharEspera();
                LogarException(ex);
            }
        }, function (erro) {
            fecharEspera();
            LogarException(erro);
        }, this);
        return false;
    };
    C_NotaF.prototype.OnClickBotaoAssinarXML = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        var parametros;
        var retorno;
        var entity = this.GetScope().Entity;
        if (this.NFe != null && this.NFe.Situacao != null) {
            if (this.NFe.Situacao.toUpperCase() == "AUTORIZADA") {
                MostrarAlerta("NF-e já foi autorizada");
                return false;
            }
        }
        parametros = {
            codigoNf: entity.Codigo,
            codEmpresa: entity.Empresa
        };
        abrirEspera("Aguarde, assinando o XML da Nota Fiscal...");
        this.ExecutarFuncaoServerSideAsynch("AssinarNFe", parametros, function (d) {
            try {
                var retorno = GetRetornoAJAX(d);
                var arrRetorno = retorno.split("|");
                var EntidadeRetorno = _this.RetNFe;
                if (arrRetorno[0].toString() == "Erro") {
                    fecharEspera();
                    MsgBoxJS(arrRetorno[1].toString(), MsgBoxOptions.OkOnly, MsgBoxIcon.Info, $.proxy(null, _this));
                    EntidadeRetorno.MensagemRetorno = arrRetorno[1].toString();
                    _this.RefreshAngular();
                }
                else {
                    fecharEspera();
                    EntidadeRetorno.SituacaoAtual = "Assinada";
                    _this.NFe.Situacao = "Assinada";
                    EntidadeRetorno.MensagemRetorno = arrRetorno[1].toString();
                    EntidadeRetorno.CodCertificado = arrRetorno[2];
                    _this.RefreshAngular();
                }
                _this.RetNFe = EntidadeRetorno;
                _this.GetScope().$apply();
            }
            catch (ex) {
                fecharEspera();
                LogarException(ex);
            }
        }, function (erro) {
            fecharEspera();
            LogarException(erro);
        }, this);
        return false;
    };
    C_NotaF.prototype.OnClickBotaoEnviarXML = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        var parametros;
        var retorno;
        var entity = this.GetScope().Entity;
        if (this.NFe != null && this.NFe.Situacao != null) {
            if (this.NFe.Situacao.toUpperCase() == "AUTORIZADA") {
                MostrarAlerta("NF-e já foi autorizada");
                return false;
            }
        }
        var EntidadeRetorno = this.RetNFe;
        if (EntidadeRetorno.MensagemRetorno == null) {
            EntidadeRetorno.CodCertificado = "0";
        }
        parametros = {
            codigoNf: entity.Codigo,
            codEmpresa: entity.Empresa,
            codCertificado: EntidadeRetorno.CodCertificado
        };
        abrirEspera("Aguarde, enviando a NF-e para a Sefaz...");
        this.ExecutarFuncaoServerSideAsynch("EnviarNFe", parametros, function (d) {
            try {
                var retorno = GetRetornoAJAX(d);
                var arrRetorno = retorno.split("|");
                if (arrRetorno[0].toString() == "Erro") {
                    fecharEspera();
                    MsgBoxJS(arrRetorno[1].toString(), MsgBoxOptions.OkOnly, MsgBoxIcon.Info, $.proxy(null, _this));
                    EntidadeRetorno.MensagemRetorno = arrRetorno[1].toString();
                    _this.RefreshAngular();
                }
                else {
                    EntidadeRetorno.SituacaoAtual = "Transmitida";
                    _this.NFe.Situacao = "Transmitida";
                    EntidadeRetorno.MensagemRetorno = arrRetorno[1].toString();
                    parametros = {
                        codigoNf: entity.Codigo,
                        codEmpresa: entity.Empresa,
                        codCertificado: EntidadeRetorno.CodCertificado,
                        caminhoXML: _this.hdnCaminhoXML.value
                    };
                    retorno = _this.ExecutarFuncaoServerSideSynch("ConsultarNFeProtocolo", parametros);
                    var arrRetorno = retorno.split("|");
                    if (arrRetorno[0].toString() == "Erro") {
                        fecharEspera();
                        EntidadeRetorno.SituacaoAtual = "Rejeitada";
                        _this.NFe.Situacao = "Rejeitada";
                        EntidadeRetorno.MensagemRetorno = arrRetorno[1].toString();
                        MsgBoxJS(arrRetorno[1].toString(), MsgBoxOptions.OkOnly, MsgBoxIcon.Info, $.proxy(null, _this));
                    }
                    else {
                        EntidadeRetorno.SituacaoAtual = "Autorizada";
                        _this.NFe.Situacao = "Autorizada";
                        EntidadeRetorno.MensagemRetorno = arrRetorno[1].toString();
                        _this.MovimentarEstoqueProdutos(false);
                        parametros = {
                            CodigoNF: entity.Codigo
                        };
                        var nfe = _this.ExecutarFuncaoServerSideSynch("GetNFeByNF", parametros);
                        _this.NFe = nfe[0];
                        _this.GetScope().Entity.NFe = nfe;
                        _this.EventosNFe = _this.ExecutarFuncaoServerSideSynch("PreencherClasseEventosNFe", parametros);
                        fecharEspera();
                        MsgBoxJS(arrRetorno[1].toString(), MsgBoxOptions.OkOnly, MsgBoxIcon.Info, $.proxy(null, _this));
                    }
                }
                _this.RetNFe = EntidadeRetorno;
                _this.GetScope().$apply();
            }
            catch (ex) {
                fecharEspera();
                LogarException(ex);
            }
        }, function (erro) {
            fecharEspera();
            LogarException(erro);
        }, this);
        return false;
    };
    C_NotaF.prototype.MovimentarEstoqueProdutos = function (cancelamento) {
        var parametros;
        var deposito;
        var estoque;
        var isSaida;
        var entidade = this.GetScope().Entity;
        estoque = this.EntityTela.Estoque;
        if (estoque != 0 && entidade.Codigo > 0) {
            if (estoque == 1) { // "Remover"
                if (cancelamento) {
                    isSaida = false;
                }
                else {
                    isSaida = true;
                }
            }
            else {
                if (cancelamento) {
                    isSaida = true;
                }
                else {
                    isSaida = false;
                }
            }
            if (!this.EntityTela.Deposito) {
                deposito = 1;
            }
            else {
                deposito = this.EntityTela.Deposito;
            }
            parametros = {
                ListaProdutos: JSON.stringify(this.ProdutosNota),
                Deposito: deposito,
                isSaida: isSaida,
                formulario: "NF: " + this.EntityTela.Formulario
            };
            this.ExecutarFuncaoServerSideSynch("MovimentarEstoqueProdutos", parametros);
        }
    };
    C_NotaF.prototype.OnExcluiuProdutoGrade = function (s, e) {
        this.CalcularTotalNota();
        if (this.ProdutosNota.length < 1 && this.ServicosNota.length < 1) { //Lucas Viesi em 23/01/19 (solicitado por Leandro)
            this.txtDestinatario.Disabled = false;
            this.cboEstoque.Enabled = true;
        }
    };
    C_NotaF.prototype.OnImprimirCartaCorrecao = function (s, e) {
        if (e.commandName == "imprimir") {
            var param = {
                protocoloEvento: JSON.stringify(e.data["Protocolo"])
            };
            this.ExecutarFuncaoServerSideSynch("ImprimirCartaCorrecao", param);
            var urlTela = "ReportView.aspx?relatorio=~/Report/Fixos/CartaCorrecaoNFe.REPX";
            abrirTelaNovaAbaParametros(formataURLRelativa(urlTela), []);
            //__doPostBack(this.grdEventosNFe.ID, "ImprimirCCE|" + JSON.stringify(e.data));
        }
    };
    C_NotaF.prototype.OnClickBotaoConsultar = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        var parametros;
        var retorno;
        parametros = {
            codigoNf: this.hdnCodigo.value,
            codEmpresa: this.hdnEmpresa.value
        };
        abrirEspera("Aguarde, consultando a NF-e na Sefaz...");
        this.ExecutarFuncaoServerSideAsynch("ConsultaNFChave", parametros, function (d) {
            try {
                var retorno = GetRetornoAJAX(d);
                var arrRetorno = retorno.split("|");
                if (arrRetorno[0].toString() == "Erro") {
                    if ((arrRetorno[1].toString() != "Nenhum certificado foi configurado para esta empresa!") && (arrRetorno[1].toString() != "Rejeição: Consumo Indevido A consulta será liberada em 60 minutos!")) {
                        _this.RetNFe.SituacaoAtual = "Rejeitada";
                        _this.NFe.Situacao = "Rejeitada";
                    }
                    _this.RetNFe.MensagemRetorno = arrRetorno[1].toString();
                }
                else {
                    if ((arrRetorno[1].toString() == "Evento registrado e vinculado a NF-e") || (arrRetorno[1].toString() == "Cancelamento de NF-e homologado")) {
                        _this.RetNFe.SituacaoAtual = "Cancelada";
                        _this.NFe.Situacao = "Cancelada";
                        _this.RetNFe.MensagemRetorno = arrRetorno[1].toString();
                    }
                    else {
                        _this.RetNFe.SituacaoAtual = "Autorizada";
                        _this.NFe.Situacao = "Autorizada";
                        _this.RetNFe.MensagemRetorno = arrRetorno[1].toString();
                    }
                }
                fecharEspera();
                MsgBoxJS(arrRetorno[1].toString(), MsgBoxOptions.OkOnly, MsgBoxIcon.Info, $.proxy(null, _this));
                _this.RefreshAngular();
            }
            catch (ex) {
                fecharEspera();
                LogarException(ex);
            }
        }, function (erro) {
            fecharEspera();
            LogarException(erro);
        }, this);
        return false;
    };
    C_NotaF.prototype.carregarEventosNFe = function (e) {
        var parametros;
        parametros = {
            CodigoNF: this.GetScope().Entity.Codigo
        };
        this.EventosNFe = this.ExecutarFuncaoServerSideSynch("PreencherClasseEventosNFe", parametros);
    };
    C_NotaF.prototype.OnClickOkBtnRef = function (s, e) {
        e.processOnServer = false;
        if (String.IsNullOrWhiteSpace(this.txtChaveAcessoRef.GetText())) {
            MostrarAlerta("Informe a chave de acesso!");
            return;
        }
        if (this.txtChaveAcessoRef.GetText().length != 44) {
            MostrarAlerta("A chave de acesso deve possuir 44 dígitos!");
            return;
        }
        var ref = {};
        var lista = this.ChavesReferenciadas;
        ref.Chave_Acesso = this.txtChaveAcessoRef.GetText();
        ref.Item = this.ChavesReferenciadas.length + 1;
        ref.Venda = 0;
        lista.push(ref);
        this.ChavesReferenciadas = lista;
        this.mdNFRef.Hide();
        this.txtChaveAcessoRef.Limpar();
    };
    C_NotaF.prototype.OnClickOkBtnSelecionarAnilha = function (s, e) {
        e.processOnServer = false;
        var selecionados = this.grdMicrochip.GetSelectedRowsData;
        if (selecionados.length == 0) {
            MsgBoxJS("Selecione ao menos um(a) microchip/anilha!", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(null, this));
            return;
        }
        if (this.lblTotalMicrochip.Text.CNum() != this.lblTotalProduto.Text.CNum()) {
            MsgBoxJS("É necessário selecionar um Microchip/Anilha para cada animal(Produto)!", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(null, this));
            return;
        }
        this.ProdutoAnilhas = [];
        for (var x = 0; x < selecionados.length; x++) {
            this.ProdutoAnilhas.push(selecionados[x]);
        }
        this.preencheuAnilha = true;
        this.txtBuscaMicrochip.Limpar();
        this.grdMicrochip.PreencherGrid(null);
        this.mdAnilha.ModalDialog.Hide();
        this.OnClickOkBtnProd(s, e);
    };
    C_NotaF.prototype.OnClickOkBtnCancelarAnilha = function (s, e) {
        e.processOnServer = false;
        this.mdAnilha.ModalDialog.Hide();
    };
    C_NotaF.prototype.OnClickOkBtnProd = function (s, e) {
        e.processOnServer = false;
        var item = this.Item;
        var entidade = this.GetScope().Entity;
        if (item.Codigo_Produto == null) {
            return;
        }
        if (item.Quantidade && item.Quantidade <= 0) {
            MostrarMensagemCampoObrigatorio("O campo quantidade deve ser maior que zero!");
            return;
        }
        if (item.Percentual_IPI_Devolvido) {
            if (item.Percentual_IPI_Devolvido.valueOf() > 100) {
                MsgBoxJS("Valor máximo do percentual do item devolvido é 100%, no caso de devolução total da mercadoria!", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(null, this), null, "IPI Devolvido");
                return;
            }
        }
        if (item.Valor_IPI_Devolvido) {
            if (item.Percentual_IPI_Devolvido.valueOf() <= 0) {
                MsgBoxJS("O percentual do item devolvido não pode ser zero quando o valor IPI devolvido estiver preenchido!", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(null, this), null, "IPI Devolvido");
                return;
            }
        }
        if (entidade.E_S && entidade.E_S == "S") {
            if (item.St_Pis) {
                if (item.St_Pis.toString().CNum() >= 50 && item.St_Pis.toString().CNum() != 99) {
                    MsgBoxJS("A combo Tipo de Documento esta marcada como Saída, e o ST de PIS informado para o produto é do tipo de Entrada. <br /><br />Informe um ST de PIS no intervalo de 01 a 49, pois são referentes a Saída!", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(null, this));
                    return;
                }
            }
            else {
                return;
            }
            if (item.St_Cofins) {
                if (item.St_Cofins.toString().CNum() >= 50 && item.St_Cofins.toString().CNum() != 99) {
                    MsgBoxJS("A combo Tipo de Documento esta marcada como Saída, e o ST de COFINS informado para o produto é do tipo de Entrada. <br /><br />Informe um ST de COFINS no intervalo de 01 a 49, pois são referentes a Saída!", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(null, this));
                    return;
                }
            }
            else {
                return;
            }
            if (item.St_Ipi) {
                if (item.St_Ipi.toString().CNum() < 50) {
                    MsgBoxJS("A combo Tipo de Documento esta marcada como Saída, e o ST de IPI informado para o produto é do tipo de Entrada. <br /><br />Informe um ST de IPI no intervalo de 50 a 99, pois são referentes a Saída!", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(null, this));
                    return;
                }
            }
            if (item.Cfop) {
                if (item.Cfop.substring(1, 1).toString() == "1" || item.Cfop.substring(1, 1).toString() == "2" || item.Cfop.substring(1, 1).toString() == "3") {
                    MsgBoxJS("A combo Tipo de Documento esta marcada como Saída, porém o CFOP informado para o produto é do tipo de Entrada. <br /><br />Informe um CFOP inciado com os dígitos 5, 6 ou 7, pois são referentes a Saída! !", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(null, this));
                    return;
                }
            }
            else {
                return;
            }
            if (!item.Cst) {
                return;
            }
            var parametros = {
                codProduto: item.Codigo_Produto
            };
            var retorno;
            retorno = this.ExecutarFuncaoServerSideSynch("GetDadosProduto", parametros);
            if (retorno.Animal_Silvestre && this.preencheuAnilha == false) {
                this.preencherAnilhas();
                if (this.preencheuAnilha == false) {
                    return;
                }
                else {
                    this.preencheuAnilha = true;
                }
            }
        }
        else {
            if (item.St_Pis) {
                if (item.St_Pis.toString().CNum() < 50) {
                    MsgBoxJS("A combo Tipo de Documento esta marcada como Entrada, e o ST de PIS informado para o produto é do tipo de Saída. <br /><br />Informe um ST de PIS no intervalo de 50 a 99, pois são referentes a Entrada!", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(null, this));
                    return;
                }
            }
            if (item.St_Cofins.toString().CNum() < 50) {
                MsgBoxJS("A combo Tipo de Documento esta marcada como Entrada, e o ST de COFINS informado para o produto é do tipo de Saída. <br /><br />Informe um ST de COFINS no intervalo de 50 a 99, pois são referentes a Entrada!", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(null, this));
                return;
            }
            if (item.St_Ipi) {
                if (item.St_Ipi.toString().CNum() >= 50) {
                    MsgBoxJS("A combo Tipo de Documento esta marcada como Entrada, e o ST de IPI informado para o produto é do tipo de Saída. <br /><br />Informe um ST de IPI no intervalo de 00 a 49, pois são referentes a Entrada!", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(null, this));
                    return;
                }
            }
            if (item.Cfop.substring(1, 1).toString() == "5" || item.Cfop.substring(1, 1).toString() == "6" || item.Cfop.substring(1, 1).toString() == "7") {
                MsgBoxJS("A combo Tipo de Documento esta marcada como Entrada, porém o CFOP informado para o produto é do tipo de Saída. <br /><br />Informe um CFOP inciado com os dígitos 1, 2 ou 3, pois são referentes a Entrada! !", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(null, this));
                return;
            }
            if (!item.Cst) {
                return;
            }
        }
        if (item.Vlr_ICMS_Desonerado > 0 && (item.Motivo_Desoneracao_ICMS == undefined || item.Motivo_Desoneracao_ICMS == 0)) {
            return;
        }
        parametros = {
            empresa: entidade.Empresa
        };
        if (this.ExecutarFuncaoServerSideSynch("GetRegraSimples", parametros) == 2) {
            item.Base_Icms = 0;
            item.Valor_Icms = 0;
            item.Valor_FCP = 0;
            item.Valor_FCP_ST = 0;
            switch (item.Cst) {
                case "101":
                case "900":
                case "100":
                    break;
                default:
                    item.Aliquota_ICMS = 0;
                    break;
            }
        }
        var lista = this.ProdutosNota;
        if (!item.Item) {
            item.Item = lista.Max("Item") + 1;
            lista.push(item);
        }
        else {
            lista.forEach(function (element, index) {
                if (element.Item === item.Item) {
                    lista[index] = item;
                    return;
                }
            });
        }
        item.ProdutoAnilhas = this.ProdutoAnilhas;
        this.preencheuAnilha = false;
        this.ProdutosNota = lista;
        this.PreencherMotivoDesoneracao();
        this.CalcularTotalNota();
        this.LimparProduto();
        this.txtProduto.Disabled = false;
    };
    C_NotaF.prototype.preencherAnilhas = function () {
        var parametros = {
            codProduto: this.Item.Codigo_Produto,
            descricao: this.txtBuscaMicrochip.GetText()
        };
        var listaAnilhas = this.ExecutarFuncaoServerSideSynch("GetListaAnilhas", parametros);
        if (listaAnilhas && (listaAnilhas.length > 0 || this.txtBuscaMicrochip.GetText() != '')) {
            if (this.ProdutoAnilhas == null || this.ProdutoAnilhas.length == 0) {
                this.lblTotalProduto.Text = this.Item.Quantidade.toString().FormatNumber(0);
                this.mdAnilha.ModalDialog.Show();
                var listaAdicionada = [];
                if (listaAnilhas) {
                    for (var x = 0; x < this.ProdutosNota.length; x++) {
                        for (var y = 0; y < this.ProdutosNota[x].ProdutoAnilhas.length; y++) {
                            listaAdicionada.push(this.ProdutosNota[x].ProdutoAnilhas[y]);
                        }
                    }
                    var novaLista = [];
                    for (var x = 0; x < listaAnilhas.length; x++) {
                        var adicionar = true;
                        for (var y = 0; y < listaAdicionada.length; y++) {
                            if (listaAnilhas[x].CodAnilha == listaAdicionada[y].CodAnilha) {
                                adicionar = false;
                            }
                        }
                        if (adicionar == true) {
                            novaLista.push(listaAnilhas[x]);
                        }
                    }
                    this.grdMicrochip.PreencherGrid(novaLista);
                    this.grdMicrochip.LimparSelecao();
                    this.GetScope().$apply();
                }
            }
        }
        else {
            this.preencheuAnilha = true;
        }
    };
    C_NotaF.prototype.OnClickOkBtnServico = function (s, e) {
        e.processOnServer = false;
        var item = this.Servico;
        var entidade = this.GetScope().Entity;
        if (item.Codigo_Produto == null) {
            return;
        }
        if (item.Quantidade && item.Quantidade <= 0) {
            MostrarMensagemCampoObrigatorio("O campo quantidade deve ser maior que zero!");
            return;
        }
        if (entidade.E_S && entidade.E_S == "S") {
            if (item.St_Pis) {
                if (item.St_Pis.toString().CNum() >= 50) {
                    MsgBoxJS("A combo Tipo de Documento esta marcada como Saída, e o ST de PIS informado para o produto é do tipo de Entrada. <br /><br />Informe um ST de PIS no intervalo de 01 a 49, pois são referentes a Saída!", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(null, this));
                    return;
                }
            }
            if (item.St_Cofins) {
                if (item.St_Cofins.toString().CNum() >= 50) {
                    MsgBoxJS("A combo Tipo de Documento esta marcada como Saída, e o ST de COFINS informado para o produto é do tipo de Entrada. <br /><br />Informe um ST de COFINS no intervalo de 01 a 49, pois são referentes a Saída!", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(null, this));
                    return;
                }
            }
            if (item.Cfop) {
                if (item.Cfop.substring(1, 1).toString() == "1" || item.Cfop.substring(1, 1).toString() == "2" || item.Cfop.substring(1, 1).toString() == "3") {
                    MsgBoxJS("A combo Tipo de Documento esta marcada como Saída, porém o CFOP informado para o produto é do tipo de Entrada. <br /><br />Informe um CFOP inciado com os dígitos 5, 6 ou 7, pois são referentes a Saída! !", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(null, this));
                    return;
                }
            }
            else {
                return;
            }
        }
        else {
            if (item.St_Pis) {
                if (item.St_Pis.toString().CNum() < 50) {
                    MsgBoxJS("A combo Tipo de Documento esta marcada como Entrada, e o ST de PIS informado para o produto é do tipo de Saída. <br /><br />Informe um ST de PIS no intervalo de 50 a 99, pois são referentes a Entrada!", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(null, this));
                    return;
                }
            }
            if (item.St_Cofins) {
                if (item.St_Cofins.toString().CNum() < 50) {
                    MsgBoxJS("A combo Tipo de Documento esta marcada como Entrada, e o ST de COFINS informado para o produto é do tipo de Saída. <br /><br />Informe um ST de COFINS no intervalo de 50 a 99, pois são referentes a Entrada!", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(null, this));
                    return;
                }
            }
            if (item.Cfop.substring(1, 1).toString() == "5" || item.Cfop.substring(1, 1).toString() == "6" || item.Cfop.substring(1, 1).toString() == "7") {
                MsgBoxJS("A combo Tipo de Documento esta marcada como Entrada, porém o CFOP informado para o produto é do tipo de Saída. <br /><br />Informe um CFOP inciado com os dígitos 1, 2 ou 3, pois são referentes a Entrada! !", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(null, this));
                return;
            }
        }
        var lista = this.ServicosNota;
        item.Item = lista.length + 1;
        lista.push(item);
        this.ServicosNota = lista;
        this.CalcularTotalNota();
        this.Servico = {};
        this.LimparProduto();
    };
    C_NotaF.prototype.OnPesquisouDadosServico = function (s, e) {
        var parametros;
        var retorno;
        var entidade = this.Servico;
        if (!entidade.Codigo_Produto || entidade.Codigo_Produto <= 0) {
            this.Servico = {};
            return false;
        }
        parametros = {
            codProduto: entidade.Codigo_Produto
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetDadosServico", parametros);
        if (!retorno || retorno.Servico == false) {
            return false;
        }
        var regraImposto;
        var regimeTributacao;
        entidade.Quantidade = 1;
        entidade.Valor_Desconto = 0;
        entidade.Valor_Desconto_Porcentagem = 0;
        entidade.Valor_Outros = 0;
        if (retorno) {
            entidade.Codigo_Produto = retorno.Codigo;
            entidade.Descricao_Produto = retorno.Nome;
            entidade.Valor_Unitario = retorno.Preco_Produto;
            entidade.Valor_SubTotal = retorno.Preco_Produto;
            entidade.Valor_Total = retorno.Preco_Produto;
            parametros = {
                codProduto: entidade.Codigo_Produto,
                codEmpresa: this.hdnEmpresa.value.CNum(),
                codCliente: this.EntityTela.Codigo_Cliente,
                grupoFiscal: 0,
                cfop: this.EntityTela.Cfop
            };
            regraImposto = this.ExecutarFuncaoServerSideSynch("GetRegraImpostoProduto", parametros);
            parametros = {
                codEmpresa: this.hdnEmpresa.value
            };
            regimeTributacao = this.ExecutarFuncaoServerSideSynch("VerificaRegimeEmpresa", parametros);
            if (regraImposto) {
                if (regraImposto.Cfop_Servico) {
                    entidade.Cfop = regraImposto.Cfop_Servico;
                }
                else {
                    entidade.Cfop = regraImposto.Cfop;
                }
                if (this.EntityTela.E_S == "S") {
                    entidade.St_Cofins = completaComZero(regraImposto.St_Cofins.toString(), 2, true);
                    entidade.Base_Cofins = retorno.Preco_Produto * (regraImposto.Base_Cofins / 100);
                    if (regraImposto.Tipo_Calculo_Cofins.toUpperCase() == "P") {
                        entidade.Aliquota_Cofins = regraImposto.Aliquota_Cofins_P;
                    }
                    else {
                        entidade.Aliquota_Cofins = regraImposto.Aliquota_Cofins_R;
                    }
                    if (entidade.Aliquota_Cofins.toString().CNum() > 0) {
                        entidade.Valor_Cofins = entidade.Base_Cofins * (entidade.Aliquota_Cofins / 100);
                    }
                    entidade.St_Pis = completaComZero(regraImposto.St_Pis.toString(), 2, true);
                    entidade.Base_Pis = retorno.Preco_Produto * (regraImposto.Base_Pis / 100);
                    if (regraImposto.Tipo_Calculo_Pis.toUpperCase() == "P") {
                        entidade.Aliquota_Pis = regraImposto.Aliquota_Pis_P = regraImposto.Aliquota_Pis_P || 0;
                    }
                    else {
                        entidade.Aliquota_Pis = regraImposto.Aliquota_Pis_R = regraImposto.Aliquota_Pis_R || 0;
                    }
                    if (entidade.Aliquota_Pis.toString().CNum() > 0) {
                        entidade.Valor_Pis = entidade.Base_Pis * (entidade.Aliquota_Pis / 100);
                    }
                }
                else {
                    entidade.Cfop = regraImposto.Cfop_Entrada;
                    entidade.St_Cofins = completaComZero(regraImposto.St_Cofins_Entrada.toString(), 2, true);
                    entidade.Base_Cofins = retorno.Preco_Produto * (regraImposto.Base_Cofins_Entrada / 100);
                    entidade.Aliquota_Cofins = regraImposto.Aliquota_Cofins_Entrada;
                    if (entidade.Aliquota_Cofins.toString().CNum() > 0) {
                        entidade.Valor_Cofins = entidade.Base_Cofins * (entidade.Aliquota_Cofins / 100);
                    }
                    entidade.St_Pis = completaComZero(regraImposto.St_Pis_Entrada.toString(), 2, true);
                    entidade.Base_Pis = retorno.Preco_Produto * (regraImposto.Base_Pis_Entrada / 100);
                    entidade.Aliquota_Pis = regraImposto.Aliquota_Pis_Entrada;
                    if (entidade.Aliquota_Pis.toString().CNum() > 0) {
                        entidade.Valor_Pis = entidade.Base_Pis * (entidade.Aliquota_Pis / 100);
                    }
                }
                entidade.Base_ISSQN = retorno.Preco_Produto;
                entidade.Aliquota_ISSQN = regraImposto.Aliquota_Issqn;
                entidade.Valor_ISSQN = entidade.Base_ISSQN * (entidade.Aliquota_ISSQN / 100);
                entidade.Exigibilidade_ISS = regraImposto.Exigibilidade_Iss;
                entidade.Lista_Servico = regraImposto.Cod_Servico_Iss;
                entidade.Incentivo_Fiscal = regraImposto.Incentivo_Fiscal_Iss;
            }
        }
        else {
            entidade.Descricao_Produto = "";
            entidade.Valor_Unitario = 0;
            entidade.Valor_Total = 0;
            entidade.Cfop = "";
        }
        this.Servico = entidade;
        return false;
    };
    C_NotaF.prototype.LimparProduto = function () {
        this.ProdutoAnilhas = [];
        this.Item = {};
        this.RefreshAngular();
    };
    C_NotaF.prototype.OnPesquisouDadosProduto = function (s, e) {
        var parametros;
        var retorno;
        if (!this.Item.Codigo_Produto || this.Item.Codigo_Produto <= 0) {
            this.LimparProduto();
            return false;
        }
        if (this.Item.Item && this.Item.Item > 0) {
            return false;
        }
        parametros = {
            codProduto: this.Item.Codigo_Produto,
            descricao: ""
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetDadosProduto", parametros);
        if (!retorno || retorno.Servico == true) {
            MostrarAlerta("Produto não encontrado(a) ou inativo(a)");
            this.txtProduto.Focus();
            this.LimparProduto();
            return false;
        }
        if (retorno.Tipo_Produto == 5) {
            MostrarAlerta("Produto informado é do tipo Consumo Interno! Para que o mesmo possa ser vendido, acesse o cadastro de produto – aba Informações e altere o tipo do produto.");
            this.txtProduto.Focus();
            this.LimparProduto();
            return false;
        }
        if (retorno.Animal_Silvestre) {
            var listaAnilhas = this.ExecutarFuncaoServerSideSynch("GetListaAnilhas", parametros);
            if (!listaAnilhas || listaAnilhas.length == 0) {
                MsgBoxJS("O produto informado está marcado como Animal Silvestre, porém não possui anilhas.<br />Não será possível vender esse produto", MsgBoxOptions.OkOnly, MsgBoxIcon.Info, $.proxy(this.RespostaProduto, this));
            }
            else {
                this.PreencherProduto();
            }
        }
        else {
            this.PreencherProduto();
        }
    };
    C_NotaF.prototype.PreencherProduto = function () {
        var entidadeProduto = this.Item;
        var entidade = this.EntityTela;
        var regraImposto;
        var regimeTributacao;
        var parametros;
        var retorno;
        if (!entidadeProduto || entidadeProduto.Codigo_Produto <= 0) {
            this.LimparProduto();
            return false;
        }
        parametros = {
            codProduto: entidadeProduto.Codigo_Produto
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetDadosProduto", parametros);
        entidadeProduto.Quantidade = 1;
        entidadeProduto.Valor_Desconto = 0;
        entidadeProduto.Valor_Desconto_Porcentagem = 0;
        entidadeProduto.Valor_Outros = 0;
        entidadeProduto.Vlr_ICMS_Desonerado = 0;
        entidadeProduto.Aliquota_IPI = 0;
        entidadeProduto.Valor_IPI_Devolvido = 0;
        entidadeProduto.Percentual_IPI_Devolvido = 0;
        if (retorno) {
            entidadeProduto.Codigo_Produto = retorno.Codigo;
            entidadeProduto.Descricao_Produto = retorno.Nome;
            entidadeProduto.Valor_Unitario = retorno.Preco_Produto;
            entidadeProduto.Valor_SubTotal = retorno.Preco_Produto;
            entidadeProduto.Valor_Total = retorno.Preco_Produto;
            entidadeProduto.Unidade = retorno.Unidade;
            var parametros = {
                codProduto: entidadeProduto.Codigo_Produto
            };
            this.chkSomarIPIDevolvido.Checked = this.ExecutarFuncaoServerSideSynch("GetIPIDevolvido", parametros);
            if (entidade.Tipo_Nota == "V") {
                if (entidade.Cfop != "5.929" && entidade.Cfop != "6.929") {
                    if (retorno.Sped_Cfop_Cupom_Fiscal) {
                        entidadeProduto.Cfop = retorno.Sped_Cfop_Cupom_Fiscal;
                    }
                    else {
                        entidadeProduto.Cfop = entidade.Cfop;
                    }
                }
                else {
                    entidadeProduto.Cfop = entidade.Cfop;
                }
            }
            else {
                entidadeProduto.Cfop = entidade.Cfop;
            }
            var parametros = {
                cfop: entidadeProduto.Cfop
            };
            var cfop = this.ExecutarFuncaoServerSideSynch("RetornarEntidadeCFOP", parametros);
            if (cfop) {
                if (cfop.Tipo_Preco_Produto == 'C') {
                    entidadeProduto.Valor_Unitario = retorno.Preco_Custo;
                    entidadeProduto.Valor_SubTotal = retorno.Preco_Custo;
                    entidadeProduto.Valor_Total = retorno.Preco_Custo;
                }
                else if (cfop.Tipo_Preco_Produto == 'M') {
                    var parametros = {
                        codProduto: retorno.Codigo,
                        deposito: this.EntityTela.Deposito
                    };
                    var valorCustoMedio = this.ExecutarFuncaoServerSideSynch("RetornaValorCustoMedio", parametros);
                    if (valorCustoMedio > 0) {
                        entidadeProduto.Valor_Unitario = valorCustoMedio;
                        entidadeProduto.Valor_SubTotal = valorCustoMedio;
                        entidadeProduto.Valor_Total = valorCustoMedio;
                    }
                }
            }
            entidadeProduto.CEST = retorno.Codigo_CEST;
            entidadeProduto.Ncm = retorno.Ncm;
            entidadeProduto.Codigo_Beneficio_Fiscal = retorno.Codigo_Beneficio_Fiscal;
            var finalidade = 0;
            if (this.cboFinalidade.GetValue() == "T") {
                finalidade = 5;
            }
            else if (this.cboFinalidade.GetValue() == "C") {
                finalidade = 2;
            }
            else if (this.cboFinalidade.GetValue() == "A") {
                finalidade = 3;
            }
            else if (this.cboFinalidade.GetValue() == "D") {
                finalidade = 4;
            }
            else {
                finalidade = 1;
            }
            parametros = {
                codProduto: entidadeProduto.Codigo_Produto,
                codEmpresa: this.hdnEmpresa.value.CNum(),
                codCliente: this.EntityTela.Codigo_Cliente,
                grupoFiscal: 0,
                cfop: entidade.Cfop,
                finalidade: finalidade
            };
            regraImposto = this.ExecutarFuncaoServerSideSynch("GetRegraImpostoProduto", parametros);
            parametros = {
                codEmpresa: this.hdnEmpresa.value
            };
            regimeTributacao = this.ExecutarFuncaoServerSideSynch("VerificaRegimeEmpresa", parametros);
            if (regraImposto) {
                if (this.EntityTela.E_S == "S") {
                    if (String.IsNullOrWhiteSpace(entidadeProduto.Cfop)) {
                        entidadeProduto.Cfop = regraImposto.Cfop;
                    }
                    if (regimeTributacao == 2) {
                        entidadeProduto.Cst = regraImposto.Csosn;
                    }
                    else {
                        entidadeProduto.Cst = regraImposto.Cst;
                    }
                    if (regraImposto.St_Cofins) {
                        entidadeProduto.St_Cofins = completaComZero(regraImposto.St_Cofins.toString(), 2, true);
                    }
                    entidadeProduto.Base_Cofins = retorno.Preco_Produto * (regraImposto.Base_Cofins / 100);
                    if (regraImposto.Tipo_Calculo_Cofins.toUpperCase() == "P") {
                        if (regraImposto.Aliquota_Cofins_P) {
                            entidadeProduto.Aliquota_Cofins = regraImposto.Aliquota_Cofins_P;
                        }
                        else {
                            entidadeProduto.Aliquota_Cofins = 0;
                        }
                    }
                    else {
                        if (regraImposto.Aliquota_Cofins_R) {
                            entidadeProduto.Aliquota_Cofins = regraImposto.Aliquota_Cofins_R;
                        }
                        else {
                            entidadeProduto.Aliquota_Cofins = 0;
                        }
                    }
                    if (entidadeProduto.Aliquota_Cofins.toString().CNum() > 0) {
                        entidadeProduto.Valor_Cofins = entidadeProduto.Base_Cofins * (entidadeProduto.Aliquota_Cofins / 100);
                    }
                    entidadeProduto.St_Pis = completaComZero(regraImposto.St_Pis.toString(), 2, true);
                    entidadeProduto.Base_Pis = retorno.Preco_Produto * (regraImposto.Base_Pis / 100);
                    if (regraImposto.Tipo_Calculo_Pis.toUpperCase() == "P") {
                        if (regraImposto.Aliquota_Pis_P) {
                            entidadeProduto.Aliquota_Pis = regraImposto.Aliquota_Pis_P;
                        }
                        else {
                            entidadeProduto.Aliquota_Pis = 0;
                        }
                    }
                    else {
                        if (regraImposto.Aliquota_Pis_R) {
                            entidadeProduto.Aliquota_Pis = regraImposto.Aliquota_Pis_R;
                        }
                        else {
                            entidadeProduto.Aliquota_Pis = 0;
                        }
                    }
                    if (entidadeProduto.Aliquota_Pis.toString().CNum() > 0) {
                        entidadeProduto.Valor_Pis = entidadeProduto.Base_Pis * (entidadeProduto.Aliquota_Pis / 100);
                    }
                    if (regraImposto.St_Ipi_Saida.CNum() >= 50) {
                        entidadeProduto.St_Ipi = completaComZero(regraImposto.St_Ipi_Saida, 2, true);
                    }
                    if (regraImposto.Aliquota_Ipi_Saida == null
                        || regraImposto.Aliquota_Ipi_Saida == undefined) {
                        regraImposto.Aliquota_Ipi_Saida = 0;
                    }
                    entidadeProduto.Aliquota_IPI = regraImposto.Aliquota_Ipi_Saida;
                    if (regraImposto.Aliquota_Ipi == null
                        || regraImposto.Aliquota_Ipi == undefined) {
                        regraImposto.Aliquota_Ipi = 0;
                    }
                    if (regraImposto.Aliquota_Ipi_Saida.toString().CNum() > 0) {
                        entidadeProduto.Base_IPI = retorno.Preco_Produto;
                    }
                    else {
                        entidadeProduto.Base_IPI = 0;
                    }
                    entidadeProduto.Valor_Ipi = entidadeProduto.Base_IPI * (entidadeProduto.Aliquota_IPI / 100);
                }
                else {
                    entidadeProduto.Cfop = regraImposto.Cfop_Entrada;
                    if (regimeTributacao == 2) {
                        entidadeProduto.Cst = regraImposto.Csosn_Entrada;
                    }
                    else {
                        entidadeProduto.Cst = regraImposto.Cst_Entrada;
                    }
                    entidadeProduto.St_Cofins = completaComZero(regraImposto.St_Cofins_Entrada.toString(), 2, true);
                    entidadeProduto.Base_Cofins = retorno.Preco_Produto * (regraImposto.Base_Cofins_Entrada / 100);
                    entidadeProduto.Aliquota_Cofins = regraImposto.Aliquota_Cofins_Entrada;
                    if (entidadeProduto.Aliquota_Cofins.toString().CNum() > 0) {
                        entidadeProduto.Valor_Cofins = entidadeProduto.Base_Cofins * (entidadeProduto.Aliquota_Cofins / 100);
                    }
                    entidadeProduto.St_Pis = completaComZero(regraImposto.St_Pis_Entrada.toString(), 2, true);
                    entidadeProduto.Base_Pis = retorno.Preco_Produto * (regraImposto.Base_Pis_Entrada / 100);
                    entidadeProduto.Aliquota_Pis = regraImposto.Aliquota_Pis_Entrada;
                    if (entidadeProduto.Aliquota_Pis.toString().CNum() > 0) {
                        entidadeProduto.Valor_Pis = entidadeProduto.Base_Pis * (entidadeProduto.Aliquota_Pis / 100);
                    }
                    entidadeProduto.St_Ipi = completaComZero(regraImposto.St_Ipi.toString(), 2, true);
                    entidadeProduto.Aliquota_IPI = regraImposto.Aliquota_Ipi;
                    if (entidadeProduto.Aliquota_IPI.toString().CNum() > 0) {
                        entidadeProduto.Base_IPI = retorno.Preco_Produto;
                    }
                    else {
                        entidadeProduto.Base_IPI = 0;
                    }
                    entidadeProduto.Valor_Ipi = entidadeProduto.Base_IPI * (entidadeProduto.Aliquota_IPI / 100);
                }
                entidadeProduto.Base_Icms = (retorno.Preco_Produto * (regraImposto.Base_Icms / 100));
                entidadeProduto.Aliquota_ICMS = regraImposto.Aliquota_Icms;
                entidadeProduto.Base_Icms_ST = (retorno.Preco_Produto * (regraImposto.Base_Icms_St / 100));
                entidadeProduto.Aliquota_ICMS_ST = regraImposto.Aliquota_Icms_St;
                entidadeProduto.Porcentagem_Base_ICMS_ST = regraImposto.Base_Icms_St;
                if (regraImposto.Calcular_St_Iva || regraImposto.Iva > 0) {
                    entidadeProduto.IVA = regraImposto.Iva;
                    if (regraImposto.Iva > 0) {
                        entidadeProduto.Base_Icms_ST += (entidadeProduto.Base_Icms_ST * (regraImposto.Iva / 100));
                    }
                }
                else {
                    entidadeProduto.IVA = 0;
                }
                entidadeProduto.Valor_Icms_ST = entidadeProduto.Base_Icms_ST * (entidadeProduto.Aliquota_ICMS_ST / 100);
                if (entidadeProduto.Valor_Icms > 0) {
                    entidadeProduto.Valor_Icms_ST -= entidadeProduto.Valor_Icms;
                    if (entidadeProduto.Valor_Icms_ST <= 0) {
                        entidadeProduto.Valor_Icms_ST = 0;
                    }
                }
                entidadeProduto.Cod_enquadramento_IPI = regraImposto.Codigo_Enquadramento_Ipi;
                entidadeProduto.Modalidade_Base_ICMS_ST = regraImposto.Modalidade_St;
                entidadeProduto.Aliquota_FCP = regraImposto.Aliquota_FCP || 0;
                entidadeProduto.Valor_FCP = entidadeProduto.Base_Icms * (regraImposto.Aliquota_FCP / 100);
            }
        }
        else {
            entidadeProduto.Descricao_Produto = "";
            entidadeProduto.Valor_Unitario = 0;
            entidadeProduto.Valor_Total = 0;
            entidadeProduto.Unidade = "";
            entidadeProduto.Cfop = "";
            entidadeProduto.CEST = "";
            entidadeProduto.Ncm = "";
        }
        this.GetScope().$applyAsync();
        this.CalcularValorICMSST();
        this.Item = entidadeProduto;
        return false;
    };
    C_NotaF.prototype.OnPesquisouDadosCliente = function () {
        if (this.txtDestinatario.Pesquisando) {
            var parametros;
            var retorno;
            if (!this.EntityTela.Codigo_Cliente) {
                this.LimparCliente(this.EntityTela);
                return;
            }
            if (this.EntityTela.Codigo_Cliente) {
                this.BloquearCamposDestinatario(false);
            }
            parametros = {
                codCliente: this.EntityTela.Codigo_Cliente
            };
            retorno = this.ExecutarFuncaoServerSideSynch("GetDadosCliente", parametros);
            if (!retorno || retorno === null) {
                return;
            }
            if (!retorno.Cidade) {
                MostrarAlerta("Destinatário sem cidade informada em seu cadastro!");
                this.EntityTela.Codigo_Cliente = null;
                return false;
            }
            if (retorno) {
                this.MudouTipo(retorno.Tipo);
                this.EntityTela.Cpf_Cgc = retorno.Cpf;
                this.EntityTela.Ie = retorno.Rg;
                this.EntityTela.Endereco = retorno.Endereco_Nome;
                this.EntityTela.Bairro = retorno.Bairro;
                this.EntityTela.Endereco_Numero = retorno.Numero;
                this.EntityTela.Endereco_Complemento = retorno.Complemento;
                this.EntityTela.Cep = retorno.Cep;
                this.EntityTela.Municipio = retorno.Cidade_D;
                this.EntityTela.Fone_Ddd = retorno.Ddd1;
                this.EntityTela.Fone_Numero = retorno.Fone_Numero;
                this.EntityTela.Uf = retorno.Uf_D;
                this.EntityTela.Consumidor_Final = (retorno.Consumidor_Final) ? 'S' : 'N';
                this.lblGrupoFiscal.Text = retorno.Grupo_Fiscal.toString();
                this.CobCheque.Cliente = this.EntityTela.Codigo_Cliente;
            }
            this.RefreshAngular();
            return false;
        }
    };
    C_NotaF.prototype.BloquearCamposDestinatario = function (flag) {
        this.txtCnpj.Enabled = !flag;
        this.txtIE.Enabled = !flag;
        this.txtEndereco.Enabled = !flag;
        this.txtNumero.Enabled = !flag;
        this.txtComplemento.Enabled = !flag;
        this.txtBairro.Enabled = !flag;
        this.txtCep.Enabled = !flag;
        this.txtTelefone.Enabled = !flag;
    };
    C_NotaF.prototype.MudouTipo = function (tipo) {
        if (tipo == "J") {
            this.txtCnpj.IsCPF = false;
            this.txtIE.SetTextLabelControl("IE");
            this.txtIE.Obrigatorio = true;
        }
        else {
            this.txtCnpj.IsCPF = true;
            this.txtIE.SetTextLabelControl("RG");
        }
    };
    C_NotaF.prototype.LimparCliente = function (entidade) {
        entidade.Codigo_Cliente = null;
        entidade.Cpf_Cgc = "";
        entidade.Ie = "";
        entidade.Endereco = "";
        entidade.Bairro = "";
        entidade.Endereco_Numero = "";
        entidade.Endereco_Complemento = "";
        entidade.Cep = "";
        entidade.Municipio = "";
        entidade.Fone = "";
        entidade.Fone_Ddd = "";
        entidade.Fone_Numero = "";
        entidade.Uf = "";
        this.lblGrupoFiscal.Text = "";
        this.BloquearCamposDestinatario(true);
        this.MudouTipo("F");
    };
    C_NotaF.prototype.OnChangetxtChaveAcessoRef = function () {
        if (this.txtChaveAcessoRef.GetText().CNum() == 0) {
            this.txtChaveAcessoRef.SetText(this.txtChaveAcessoRef.GetText().replace(/\D/g, ''));
        }
    };
    C_NotaF.prototype.OnClickBotaoOkImportar = function (s, e) {
        e.processOnServer = false;
        var parametros;
        parametros = { listaProdutosImportados: this.grdItensArquivo.DataSource };
        var listaProdutos = this.ExecutarFuncaoServerSideSynch("RetornaImportacao", parametros);
        this.ProdutosNota = listaProdutos;
        this.PreencherMotivoDesoneracao();
        var entidade = this.GetScope().Entity;
        entidade.Cfop = this.ProdutosNota[0].Cfop;
        entidade.E_S = "E";
        entidade.Peso_Liquido = this.hdnPesoLiquidoXml.value.CNum();
        entidade.Peso_Bruto = this.hdnPesoBrutoXml.value.CNum();
        entidade.Qtde_Transp = this.hdnQuantidadeTransp.value.CNum();
        entidade.Especie = this.hdnEspecieTransp.value;
        this.SetEntity(entidade);
        this.CalcularTotalNota();
        this.mdImportarXML.Hide();
        return false;
    };
    C_NotaF.prototype.OnMudouTranpostadora = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        var codTransportadora = this.EntityTela.Codigo_Transportadora;
        var transportadora;
        if (!codTransportadora) {
            return;
        }
        var parametros = {
            codCliente: codTransportadora
        };
        transportadora = this.ExecutarFuncaoServerSideSynch("GetDadosCliente", parametros);
        if (transportadora) {
            if (!transportadora.Cidade) {
                MostrarAlerta("Transportadora sem cidade informada em seu cadastro!");
                codTransportadora = null;
            }
            if (!transportadora.Cpf) {
                MostrarAlerta("Transportadora sem um CNPJ em seu cadastro!");
                codTransportadora = null;
            }
            this.EntityTela.Codigo_Transportadora = codTransportadora;
        }
    };
    C_NotaF.prototype.OnClickEnviarEmail = function () {
        try {
            if (!this.enviarEmail) {
                return;
            }
            if (!this.NFe.Situacao || this.NFe.Situacao.toUpperCase() == "") {
                MostrarAlerta("Gere o XML para enviar o e-mail da NF-e!");
                return;
            }
            if (!this.EntityTela.Codigo_Cliente) {
                MostrarAlerta("Informe um cliente cadastrado para enviar o e-mail");
                return;
            }
            var param = {
                codCliente: this.EntityTela.Codigo_Cliente
            };
            var email = this.ExecutarFuncaoServerSideSynch("GetEmailCliente", param);
            if (String.IsNullOrWhiteSpace(email)) {
                MostrarAlerta("O cliente não possui email cadastrado");
                return;
            }
            var arrEmail = [];
            for (var x = 0; x < email.split(";").length; x++) {
                arrEmail.push(email.split(";")[x]);
            }
            var param = {
                chaveAcesso: "" + this.EntityTela.NFe[0].Chave_Acesso,
                formulario: "" + this.EntityTela.Formulario,
                codigoNF: "" + this.EntityTela.Codigo
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("RetornarInformacoesEmail", param);
            if (!String.IsNullOrWhiteSpace(retorno)) {
                var arrRetorno = retorno.split("|");
                var assunto = "";
                var corpoEmail = "";
                if (!String.IsNullOrWhiteSpace(arrRetorno[0])) {
                    assunto = arrRetorno[0];
                }
                if (!String.IsNullOrWhiteSpace(arrRetorno[1])) {
                    corpoEmail = arrRetorno[1];
                }
                var arrAnexo = [];
                if (!String.IsNullOrWhiteSpace(arrRetorno[2])) {
                    arrAnexo.push(arrRetorno[2]);
                }
                if (!String.IsNullOrWhiteSpace(arrRetorno[3])) {
                    arrAnexo.push(arrRetorno[3]);
                }
                this.enviarEmail.MostrarClient(arrEmail, arrAnexo, assunto, corpoEmail);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_NotaF.prototype.OnMudouCST = function (CST) {
        if (!CST) {
            return;
        }
        var CSTSub = CST.substring(1, CST.length);
        var UFSaida = this.EntityTela.Uf;
        this.MostrarICMS(false);
        this.MostrarICMSST(false);
        //================================================================
        //                       Regras de ICMS
        //================================================================
        switch (CSTSub) {
            //Possui ICMS mas não permite redução
            case "00":
            case "10":
                this.MostrarICMS(true);
                break;
            //Possui ICMS e permite redução
            case "20":
            case "51":
            case "70":
            case "90":
            case "201":
            case "900":
                this.MostrarICMS(true);
                break;
            case "40":
                //Para Zona Franca de Manaus - AM, AP, AC, RR, RO
                switch (UFSaida) {
                    case "AM":
                    case "AP":
                    case "AC":
                    case "RR":
                    case "RO":
                        this.MostrarICMS(true);
                        break;
                }
            default:
        }
        //================================================================
        //                     Regras de ICMS ST
        //================================================================
        switch (CSTSub) {
            case "10":
            case "30":
            case "70":
            case "90":
            case "201":
            case "202":
            case "203":
            case "900":
                this.MostrarICMSST(true);
        }
        this.PreencherComboICMSDesonerado(CST);
    };
    C_NotaF.prototype.MostrarICMSST = function (flag) {
        this.agpP8.Visible = flag;
        this.txtValorICMSST.Visible = flag;
        this.lblICMSST.Visible = flag;
        this.cboModalidadeBaseICMSST.Visible = flag;
    };
    C_NotaF.prototype.MostrarICMS = function (flag) {
        this.txtAliqFCP.Visible = flag;
    };
    //protected OnCboEmpresaChange() {
    //    this.onMudouComboEmpresa();
    //}
    //protected OnCboSerieChange() {
    //    this.OnMudouComboSerie();
    //}
    //protected OncboTipoDocumentoChange() {
    //    this.OnMudouTipoDocumento();
    //}
    //protected OncboFinalidadeChange() {
    //    this.OnComboBoxFinalidadeChange();
    //}
    //protected OntxtDestinatarioPesquisou() {
    //    this.OnPesquisouDadosCliente();
    //}
    //protected OnDadosProduto(oldValue, newValue) {
    //    if (oldValue === newValue){
    //        return;
    //    }
    //    //this.OnPesquisouDadosProduto();
    //}
    //protected MudouCST(oldValue, newValue) {
    //    if (oldValue === newValue) {
    //        return;
    //    }
    //    this.OnMudouCST(newValue);
    //}
    C_NotaF.prototype.OnCalcularValorTotalProduto = function (oldValue, newValue) {
        if (oldValue != newValue) {
            this.CalcularValorTotalProduto();
        }
    };
    C_NotaF.prototype.OnCalcularValorTotalServico = function (oldValue, newValue) {
        if (oldValue != newValue) {
            this.CalcularValorTotalServico();
        }
    };
    C_NotaF.prototype.OntxtDestinatarioPesquisou = function (oldValue, newValue) {
        if (oldValue != newValue) {
            this.OnPesquisouDadosCliente();
        }
    };
    C_NotaF.prototype.OntxtDestinatarioLimpou = function () {
        this.txtCnpj.Limpar();
        this.txtIE.Limpar();
        this.txtEndereco.Limpar();
        this.txtNumero.Limpar();
        this.txtComplemento.Limpar();
        this.txtBairro.Limpar();
        this.txtCep.Limpar();
        this.lblMunicipio.LabelComponente.innerText = "";
        this.txtTelefone.TextBoxDDD.value = "";
        this.txtTelefone.TextBoxTelefone.value = "";
        this.lblEstado.LabelComponente.innerText = "";
        this.lblGrupoFiscal.LabelComponente.innerText = "0";
        this.BloquearCamposDestinatario(false);
        this.txtDestinatario.Focus();
    };
    C_NotaF.prototype.OnCobCheClienteProcurou = function () {
        var entidade;
        entidade = this.CobCheque;
        if (!entidade.Cliente) {
            entidade.Nome_Titular = "";
            entidade.Tipo = "F";
            this.txtCobCheCpf.IsCPF = true;
            entidade.Cpf = "";
            entidade.DDD_Titular = "";
            entidade.Fone_Titular = "";
            entidade.Endereco_Titular = "";
            return;
        }
        var parametros = {
            codCliente: entidade.Cliente
        };
        var retorno;
        retorno = this.ExecutarFuncaoServerSideSynch("GetDadosCliente", parametros);
        if (retorno) {
            entidade.Nome_Titular = retorno.Nome;
            entidade.Tipo = retorno.Tipo;
            this.txtCobCheCpf.IsCPF = (retorno.Tipo == "F") ? true : false;
            entidade.Cpf = retorno.Cpf;
            entidade.DDD_Titular = retorno.Ddd1;
            entidade.Fone_Titular = retorno.Fone_Numero;
            entidade.Endereco_Titular = retorno.Endereco;
        }
    };
    C_NotaF.prototype.OnMudouCobCPF = function () {
        this.txtCobCheCpf.IsCPF = (this.lstOptCobCheTipo.GetValue() == "F") ? true : false;
    };
    C_NotaF.prototype.OnMudouCobCredForma_Pagamento = function () {
        var flag;
        flag = (this.CobCrediario.Forma_Pagamento == 0) ? true : false;
        this.txtCobCredParcela.Enabled = flag;
        this.txtCobCredDataVencimento.Enabled = flag;
        this.txtCobCredValorCrediario.Enabled = flag;
    };
    C_NotaF.prototype.OnMudoutxtCobCredParcela = function () {
        var ultimaParcela = this.CobCrediarios.length;
        var parcela;
        if (this.CobCrediario.Parcela) {
            parcela = this.CobCrediario.Parcela.CNum();
        }
        if (ultimaParcela == 0) {
            parcela = 1;
        }
        if (parcela > (ultimaParcela + 1)) {
            parcela = ultimaParcela + 1;
        }
        this.CobCrediario.Parcela = parcela.toString();
        this.txtCobCredParcela.SetText(parcela.toString());
        this.RefreshAngular;
    };
    C_NotaF.prototype.GerarCobCrediario = function () {
        var retorno;
        var ref = {};
        var soma = 0;
        var dif = 0;
        var valor;
        var data = new Date();
        var parcela;
        this.CobCrediarios = [];
        this.CalcularTotaisCobranca();
        valor = this.lblCobRestante.Text.CNum();
        if (this.cboCobCredFormaPagamento.GetValue() == 0 || valor == 0) {
            this.CobCrediarios = [];
            return false;
        }
        var parametros = {
            Codigo: this.cboCobCredFormaPagamento.GetValue()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetFormaPagamento", parametros);
        if (!retorno || !retorno.Forma_Pagamento_DiasEntity) {
            return false;
        }
        this.CobCrediarios = [];
        parcela = retorno.Forma_Pagamento_DiasEntity.length;
        for (var x = 0; x < parcela; ++x) {
            ref = {};
            data = new Date();
            ref.Documento = this.EntityTela.Formulario.toString();
            ref.Parcela = x + 1;
            ref.Conta_Corrente = this.cboCobCredContaCorrente.GetContaCorrente();
            ref.Conta_Corrente_Texto = this.cboCobCredContaCorrente.GetContaCorrenteText();
            ref.Cod_Forma_Pagamento_XML = Enum_Pagamentos_NF.CreditoLojaNF;
            ref.Cod_Ind_Pagamento_XML = 1;
            ref.Doc_Bancario = this.cboCobCredDocBancario.GetValue();
            ref.Conta_Contabil = this.txtCobCredContaContabil.GetText();
            ref.Documento_Mercantil = this.cboCobCredDocMercantil.GetValue();
            ref.Descricao_Doc_Bancario = this.cboCobCredDocBancario.GetText();
            ref.Descricao_Conta_Contabil = this.txtCobCredContaContabil.LabelResultado.innerText;
            ref.Descricao_Doc_Mercantil = this.cboCobCredDocMercantil.GetText();
            ref.Valor = (valor / parcela).Format(2).CNum();
            soma += ref.Valor.Format(2).CNum();
            data = data.addDays(retorno.Forma_Pagamento_DiasEntity[x].Dias);
            ref.Vencimento = data;
            this.CobCrediarios.push(ref);
        }
        dif = (soma - valor).Format(2).CNum();
        if (dif < 0) {
            this.CobCrediarios[0].Valor = (this.CobCrediarios[0].Valor + (-dif)).Format(2).CNum();
        }
        if (dif > 0) {
            this.CobCrediarios[0].Valor = (this.CobCrediarios[0].Valor - dif).Format(2).CNum();
        }
        this.RefreshAngular;
    };
    C_NotaF.prototype.CalcularTotaisCobranca = function () {
        var totalCob = 0;
        var troco = 0;
        var entidade;
        if (this.qtdVendasImportadas > 1) {
            //limpando as cobranças, pois foi importado mais de uma venda.
            this.CobCrediarios = [];
            this.CobCheques = [];
            this.CobDinheiros = [];
            this.CobOutros = [];
            this.CobCartoes = [];
        }
        for (var x = 0; x < 5; x++) {
            entidade = [];
            switch (x) {
                case 0:
                    entidade = this.CobCrediarios;
                    break;
                case 1:
                    entidade = this.CobCheques;
                    break;
                case 2:
                    entidade = this.CobDinheiros;
                    break;
                case 3:
                    entidade = this.CobOutros;
                    break;
                case 4:
                    entidade = this.CobCartoes;
                    break;
            }
            for (var y = 0; y < entidade.length; y++) {
                totalCob += entidade[y].Valor;
            }
        }
        this.lblCobTotal.Text = (totalCob || 0).Format(2).toString();
        this.lblCobRestante.Text = ((this.EntityTela.Total_Nf - totalCob) || 0).Format(2).toString();
        troco = ((totalCob - this.EntityTela.Total_Nf) || 0).Format(2).CNum();
        this.lblCobTroco.Text = ((totalCob > 0) ? troco.Format(2).toString() : "0,00");
    };
    C_NotaF.prototype.AddPadroesCobranca = function (s, e) {
        if (!e.item.Vencimento) {
            e.item.Vencimento = new Date().FormataData();
        }
        e.item.Documento = this.EntityTela.Formulario;
    };
    C_NotaF.prototype.AddCobCrediario = function (s, e) {
        if (e.item.Forma_Pagamento == "0") {
            var entidade = e.item;
            var itens = this.CobCrediarios;
            e.item.Conta_Corrente_Texto = this.cboCobCredContaCorrente.GetContaCorrenteText();
            e.item.Cod_Forma_Pagamento_XML = Enum_Pagamentos_NF.CreditoLojaNF;
            if (e.item.Vencimento == (new Date)) {
                e.item.Cod_Ind_Pagamento_XML = 0;
            }
            else {
                e.item.Cod_Ind_Pagamento_XML = 1;
            }
            e.item.Descricao_Doc_Bancario = this.cboCobCredDocBancario.GetText();
            e.item.Descricao_Conta_Contabil = this.txtCobCredContaContabil.LabelResultado.innerText;
            e.item.Descricao_Doc_Mercantil = this.cboCobCredDocMercantil.GetText();
            e.item.Doc_Bancario = this.cboCobCredDocBancario.GetValue();
            e.item.Conta_Contabil = this.txtCobCredContaContabil.GetText();
            e.item.Documento_Mercantil = this.cboCobCredDocMercantil.GetValue();
            for (var x = 0; x < itens.length; x++) {
                if (itens[x].Parcela == entidade.Parcela) {
                    itens[x] = e.item;
                    this.CobCrediario = {};
                    this.CalcularTotaisCobranca();
                    this.CarregarCobranca();
                    this.RefreshAngular();
                    e.cancelar = true;
                    return false;
                }
            }
        }
        else {
            this.GerarCobCrediario();
            e.cancelar = true;
        }
        this.CalcularTotaisCobranca();
        this.CarregarCobranca();
        return false;
    };
    C_NotaF.prototype.AddCobCheque = function (s, e) {
        this.CobCheque.Tipo = "F";
        this.txtCobCheCpf.IsCPF = true;
        this.AddPadroesCobranca(s, e);
        e.item.Cod_Forma_Pagamento_XML = Enum_Pagamentos_NF.ChequeNF;
        if (e.item.Vencimento == (new Date)) {
            e.item.Cod_Ind_Pagamento_XML = 0;
        }
        else {
            e.item.Cod_Ind_Pagamento_XML = 1;
        }
        e.item.Documento = this.EntityTela.Formulario;
    };
    C_NotaF.prototype.AddCobCartao = function (s, e) {
        var retorno;
        this.AddPadroesCobranca(s, e);
        var parametros = {
            CodCartao: e.item.Forma_Pagamento
        };
        e.item.Descricao_Cod_Forma_Pagamento_XML = this.cboCobCarCartao.GetText();
        retorno = this.ExecutarFuncaoServerSideSynch("GetByCodCartao", parametros);
        if (retorno.Tipo == "C") {
            e.item.Cod_Forma_Pagamento_XML = Enum_Pagamentos_NF.CartaoCreditoNF;
        }
        else {
            e.item.Cod_Forma_Pagamento_XML = Enum_Pagamentos_NF.CartaoDebitoNF;
        }
        if (retorno.Cartao_Dias) {
            if (retorno.Cartao_Dias.length > 0) {
                if (retorno.Cartao_Dias[0].Porcentagem == 100) {
                    e.item.Cod_Ind_Pagamento_XML = 0;
                }
                else {
                    e.item.Cod_Ind_Pagamento_XML = 1;
                }
            }
        }
    };
    C_NotaF.prototype.AddCobDinheiro = function (s, e) {
        this.AddPadroesCobranca(s, e);
        e.item.Cod_Forma_Pagamento_XML = Enum_Pagamentos_NF.DinheiroNF;
        e.item.Cod_Ind_Pagamento_XML = 0;
    };
    C_NotaF.prototype.AddCobOutros = function (s, e) {
        this.AddPadroesCobranca(s, e);
        e.item.Cod_Ind_Pagamento_XML = 1;
        e.item.Descricao_Cod_Forma_Pagamento_XML = this.cboCobOutMeioPagamento.GetText();
        e.item.Descricao_Cod_Ind_Pagamento_XML = this.cboCobOutIndFormaPag.GetText();
        e.item.Vencimento = (new Date);
    };
    C_NotaF.prototype.LimparCobranca = function () {
        this.CobCartao = {};
        this.CobCartoes = [];
        this.CobCheque = {};
        this.CobCheques = [];
        this.CobCrediario = {};
        this.CobCrediarios = [];
        this.CobDinheiro = {};
        this.CobDinheiros = [];
        this.CobOutro = {};
        this.CobOutros = [];
        this.CobCrediario.Vencimento = (new Date);
        this.CobCrediario.Doc_Bancario = 0;
        this.lblCobTotal.Text = "0,00";
        this.lblCobRestante.Text = "0,00";
        this.lblCobTroco.Text = "0,00";
        this.CarregarCobranca();
    };
    C_NotaF.prototype.CarregarCobranca = function () {
        var parametros = {};
        var ContaCorrente = this.ExecutarFuncaoServerSideSynch("GetCCPadrao", parametros);
        this.cboCobCredContaCorrente.SetContaCorrente(ContaCorrente.ID);
        this.CobCrediario.Forma_Pagamento = 0;
        this.CobCrediario.Doc_Bancario = 0;
        this.CobCrediario.Conta_Corrente = ContaCorrente.ID;
        this.cboCobCredContaCorrente.Limpar();
        this.CobCheque.Vencimento = (new Date);
        if (this.EntityTela && this.EntityTela.Codigo_Cliente) {
            this.CobCheque.Cliente = this.EntityTela.Codigo_Cliente;
        }
        this.CobCartao.Forma_Pagamento = 1;
        this.CobOutro.Cod_Forma_Pagamento_XML = 10;
        this.CobOutro.Cod_Ind_Pagamento_XML = 1;
        this.RefreshAngular();
    };
    C_NotaF.prototype.ItemCobrancaAdicionado = function () {
        this.CalcularTotaisCobranca();
        this.CarregarCobranca();
        this.RefreshAngular();
    };
    C_NotaF.prototype.OnMudoucboCobCredFormaPagamento = function () {
        this.MudarObrigatorioCobCrediario((this.CobCrediario.Forma_Pagamento == 0) ? true : false);
    };
    C_NotaF.prototype.MudarObrigatorioCobCrediario = function (flag) {
        this.txtCobCredParcela.Obrigatorio = flag;
        this.txtCobCredDataVencimento.Obrigatorio = flag;
        this.txtCobCredValorCrediario.Obrigatorio = flag;
        this.txtCobCredParcela.Enabled = flag;
        this.txtCobCredDataVencimento.Enabled = flag;
        this.txtCobCredValorCrediario.Enabled = flag;
    };
    C_NotaF.prototype.PreencherCobranca = function (Pagamento) {
        for (var x = 0; x < Pagamento.length; x++) {
            if (Pagamento[x].Conta_Corrente && Pagamento[x].Conta_Corrente != 0) {
                var parametros = {
                    codigo: Pagamento[x].Conta_Corrente
                };
                Pagamento[x].Conta_Corrente_Texto = this.ExecutarFuncaoServerSideSynch("GetContaCorrenteDescricao", parametros);
            }
            if (Pagamento[x].Doc_Bancario && Pagamento[x].Doc_Bancario != 0) {
                var parametros = {
                    codigo: Pagamento[x].Doc_Bancario
                };
                Pagamento[x].Descricao_Doc_Bancario = this.ExecutarFuncaoServerSideSynch("GetDocBancarioDescricao", parametros);
            }
            else {
                Pagamento[x].Descricao_Doc_Bancario = "Nenhum";
            }
            if (Pagamento[x].Cod_Ind_Pagamento_XML && Pagamento[x].Cod_Ind_Pagamento_XML == 0) {
                Pagamento[x].Descricao_Cod_Ind_Pagamento_XML = "Pagamento à Vista";
            }
            else {
                Pagamento[x].Descricao_Cod_Ind_Pagamento_XML = "Pagamento à Prazo";
            }
            if (Pagamento[x].Conta_Contabil && Pagamento[x].Conta_Contabil != 0) {
                var parametros = {
                    codigo: Pagamento[x].Conta_Contabil
                };
                Pagamento[x].Descricao_Conta_Contabil = this.ExecutarFuncaoServerSideSynch("GetContaContabil", parametros);
            }
            if (Pagamento[x].Documento_Mercantil || Pagamento[x].Documento_Mercantil == 0) {
                var parametros = {
                    codigo: Pagamento[x].Documento_Mercantil
                };
                if (Pagamento[x].Documento_Mercantil != 0) {
                    Pagamento[x].Descricao_Doc_Mercantil = this.ExecutarFuncaoServerSideSynch("GetDocMercantil", parametros);
                }
                else {
                    Pagamento[x].Descricao_Doc_Mercantil = "--Todos--";
                }
            }
            switch (Pagamento[x].Cod_Forma_Pagamento_XML) {
                case Enum_Pagamentos_NF.CartaoCreditoNF:
                    Pagamento[x].Descricao_Cod_Forma_Pagamento_XML = "Cartão de Crédito";
                    this.CobCartoes.push(Pagamento[x]);
                    break;
                case Enum_Pagamentos_NF.CartaoDebitoNF:
                    Pagamento[x].Descricao_Cod_Forma_Pagamento_XML = "Cartão de Débito";
                    this.CobCartoes.push(Pagamento[x]);
                    break;
                case Enum_Pagamentos_NF.ChequeNF:
                    this.CobCheques.push(Pagamento[x]);
                    break;
                case Enum_Pagamentos_NF.CreditoLojaNF:
                    this.CobCrediarios.push(Pagamento[x]);
                    break;
                case Enum_Pagamentos_NF.DinheiroNF:
                    this.CobDinheiros.push(Pagamento[x]);
                    break;
                case Enum_Pagamentos_NF.BoletoNF:
                    Pagamento[x].Descricao_Cod_Forma_Pagamento_XML = "Boleto Bancário";
                    this.CobOutros.push(Pagamento[x]);
                    break;
                case Enum_Pagamentos_NF.ValeAlimentacaoNF:
                    Pagamento[x].Descricao_Cod_Forma_Pagamento_XML = "Vale Alimentação";
                    this.CobOutros.push(Pagamento[x]);
                    break;
                case Enum_Pagamentos_NF.ValeCombustivelNF:
                    Pagamento[x].Descricao_Cod_Forma_Pagamento_XML = "Vale Combustível";
                    this.CobOutros.push(Pagamento[x]);
                    break;
                case Enum_Pagamentos_NF.ValePresenteNF:
                    Pagamento[x].Descricao_Cod_Forma_Pagamento_XML = "Vale Presente";
                    this.CobOutros.push(Pagamento[x]);
                    break;
                case Enum_Pagamentos_NF.ValeRefeicaoNF:
                    Pagamento[x].Descricao_Cod_Forma_Pagamento_XML = "Vale Refeição";
                    this.CobOutros.push(Pagamento[x]);
                    break;
                case Enum_Pagamentos_NF.DuplicataMercantilNF:
                case Enum_Pagamentos_NF.SemPagamentoNF:
                case Enum_Pagamentos_NF.OutrosNF:
                    Pagamento[x].Descricao_Cod_Forma_Pagamento_XML = "Outros";
                    this.CobOutros.push(Pagamento[x]);
                    break;
            }
        }
    };
    C_NotaF.prototype.ConverterDocMercToFormaPag = function (Doc_Merc, Venda, Pagamento) {
        switch (Doc_Merc) {
            case 1: //BOLETO
                Pagamento.Cod_Forma_Pagamento_XML = Enum_Pagamentos_NF.BoletoNF;
                Pagamento.Descricao_Cod_Forma_Pagamento_XML = "Boleto Bancário";
                break;
            case 2: //NOTA FISCAL
                Pagamento.Cod_Forma_Pagamento_XML = Enum_Pagamentos_NF.OutrosNF;
                Pagamento.Descricao_Cod_Forma_Pagamento_XML = "Outros";
                break;
            case 3: //DUPLICATA
                Pagamento.Cod_Forma_Pagamento_XML = Enum_Pagamentos_NF.DuplicataMercantilNF;
                Pagamento.Descricao_Cod_Forma_Pagamento_XML = "Duplicata Mercantil";
                break;
            case 4: //RECIBO
                Pagamento.Cod_Forma_Pagamento_XML = Enum_Pagamentos_NF.OutrosNF;
                Pagamento.Descricao_Cod_Forma_Pagamento_XML = "Outros";
                break;
            case 5: //OUTROS
                Pagamento.Cod_Forma_Pagamento_XML = Enum_Pagamentos_NF.OutrosNF;
                Pagamento.Descricao_Cod_Forma_Pagamento_XML = "Outros";
                break;
            case 6: //CHEQUE
                Pagamento.Cod_Forma_Pagamento_XML = Enum_Pagamentos_NF.ChequeNF;
                Pagamento.Descricao_Cod_Forma_Pagamento_XML = "Cheque";
                break;
            case 7: //DINHEIRO
                Pagamento.Cod_Forma_Pagamento_XML = Enum_Pagamentos_NF.DinheiroNF;
                Pagamento.Descricao_Cod_Forma_Pagamento_XML = "Dinheiro";
                break;
            case 8: //CARTÃO
                var parametros = {
                    CodVenda: Venda
                };
                var tipo = this.ExecutarFuncaoServerSideSynch("GetTipoCartao", parametros);
                if (tipo == "C") {
                    Pagamento.Cod_Forma_Pagamento_XML = Enum_Pagamentos_NF.CartaoCreditoNF;
                    Pagamento.Descricao_Cod_Forma_Pagamento_XML = "Crédito";
                }
                else {
                    Pagamento.Cod_Forma_Pagamento_XML = Enum_Pagamentos_NF.CartaoDebitoNF;
                    Pagamento.Descricao_Cod_Forma_Pagamento_XML = "Débito";
                }
                break;
            default:
                Pagamento.Cod_Forma_Pagamento_XML = Enum_Pagamentos_NF.OutrosNF;
                Pagamento.Descricao_Cod_Forma_Pagamento_XML = "Outros";
                break;
        }
    };
    C_NotaF.prototype.OnVencimentoParcelaChange = function () {
        try {
            var dataEmissaoNF = this.txtDataEmissao.Date;
            var dataVencimentoParcela = this.txtCobCredDataVencimento.Date;
            if ((dataVencimentoParcela != null || dataVencimentoParcela != undefined) && (dataEmissaoNF != null || dataEmissaoNF != undefined)) {
                if (dataEmissaoNF.FormataData() > dataVencimentoParcela.FormataData()) {
                    MostrarAlerta("A data de vencimento da parcela não pode ser menor do que a data de emissão da Nota Fiscal!");
                    this.txtCobCredDataVencimento.Focus();
                    this.txtCobCredDataVencimento.Date = null;
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_NotaF.prototype.PreencherDescricaoPagamentos = function (pag) {
        switch (pag.Cod_Forma_Pagamento_XML) {
            case Enum_Pagamentos_NF.CartaoCreditoNF:
                pag.Descricao_Cod_Forma_Pagamento_XML = "Cartão de Crédito";
                break;
            case Enum_Pagamentos_NF.CartaoDebitoNF:
                pag.Descricao_Cod_Forma_Pagamento_XML = "Cartão de Débito";
                break;
            case Enum_Pagamentos_NF.ChequeNF:
                pag.Descricao_Cod_Forma_Pagamento_XML = "Cheque";
                break;
            case Enum_Pagamentos_NF.CreditoLojaNF:
                pag.Descricao_Cod_Forma_Pagamento_XML = "Crédito Loja";
                break;
            case Enum_Pagamentos_NF.DinheiroNF:
                pag.Descricao_Cod_Forma_Pagamento_XML = "Dinheiro";
                break;
            case Enum_Pagamentos_NF.BoletoNF:
                pag.Descricao_Cod_Forma_Pagamento_XML = "Boleto Bancário";
                break;
            case Enum_Pagamentos_NF.ValeAlimentacaoNF:
                pag.Descricao_Cod_Forma_Pagamento_XML = "Vale Alimentação";
                break;
            case Enum_Pagamentos_NF.ValeCombustivelNF:
                pag.Descricao_Cod_Forma_Pagamento_XML = "Vale Combustível";
                break;
            case Enum_Pagamentos_NF.ValePresenteNF:
                pag.Descricao_Cod_Forma_Pagamento_XML = "Vale Presente";
                break;
            case Enum_Pagamentos_NF.ValeRefeicaoNF:
                pag.Descricao_Cod_Forma_Pagamento_XML = "Vale Refeição";
                break;
            case Enum_Pagamentos_NF.DuplicataMercantilNF:
                pag.Descricao_Cod_Forma_Pagamento_XML = "Duplicata Mercantil";
                break;
            case Enum_Pagamentos_NF.SemPagamentoNF:
                pag.Descricao_Cod_Forma_Pagamento_XML = "Sem Pagamento";
                break;
            case Enum_Pagamentos_NF.OutrosNF:
                pag.Descricao_Cod_Forma_Pagamento_XML = "Outros";
                break;
        }
    };
    C_NotaF.prototype.GerarContasReceber = function () {
        var _this = this;
        var entidade = this.GetScope().Entity;
        var contasReceber;
        var parametros = {};
        var configFiscal = this.ExecutarFuncaoServerSideSynch("GetConfigFiscal", parametros);
        if (configFiscal.Gerar_Receber_Fiscal == false) {
            return;
        }
        if (this.CobCrediarios.length == 0) {
            MostrarAlerta("Atenção! A Forma de Pagamento crediário não foi informada na NF. Nenhuma Conta a Receber será gerada!");
            return;
        }
        if (entidade.Tipo_Nota == "N") {
            var cliente;
            parametros = {
                id: entidade.Codigo_Cliente
            };
            cliente = this.ExecutarFuncaoServerSideSynch("GetCliente", parametros);
            if (!cliente) {
                MostrarAlerta("Não será possível gerar contas a receber pois esta nota é referente a uma devolução e o fornecedor não está cadastrado como Cliente!");
                return;
            }
            if (!entidade.Codigo_Cliente || entidade.Codigo_Cliente == 0) {
                MostrarAlerta("Não será possível gerar contas a receber pois esta nota não foi emitida para um cliente cadastrado!");
                return;
            }
            parametros = {
                codigo: entidade.Codigo
            };
            contasReceber = this.ExecutarFuncaoServerSideSynch("GetContasReceberByNF", parametros);
            var msg = "";
            for (var x = 0; x <= contasReceber.length; x++) {
                if (contasReceber && contasReceber[x].Baixa == true) {
                    msg = msg + "Cód: " + contasReceber[x].Codigo + " Venc: " + contasReceber[x].Data_Vencimento + " Venc: " + contasReceber[x].Data_Baixa + "[\br]";
                }
            }
            if (msg != "") {
                MostrarAlerta("Não será possível alterar as Contas a Receber pois já existem parcelas baixadas referentes à esta nota: " + msg);
                return;
            }
        }
        if (contasReceber && contasReceber[x].Boleto != "") {
            MostrarAlerta("Não será possível alterar as Contas a Receber pois existem boletos emitidos referentes à esta nota!");
            return;
        }
        if (contasReceber) {
            MsgBoxJS("Atenção. Já foram geradas Contas a Receber para o pagamento em Crediário desta Nota Fiscal. Deseja atualizá-los?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.Yes) {
                    _this.SalvarContasReceber(configFiscal);
                    return;
                }
            }, this);
            if (entidade.VendasImportadas != "") {
                parametros = {
                    vendas: entidade.VendasImportadas,
                    NF: entidade.Formulario
                };
                this.ExecutarFuncaoServerSideSynch("DeletarContasReceber", parametros);
            }
        }
        else {
            MsgBoxJS("Deseja realmente gerar Contas a Receber para o pagamento em Crediário informado nesta Nota Fiscal?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.Yes) {
                    _this.SalvarContasReceber(configFiscal);
                    return;
                }
            }, this);
        }
    };
    C_NotaF.prototype.SalvarContasReceber = function (configFiscal) {
        var entidade = this.GetScope().Entity;
        var parametros = {};
        var docPadrao = configFiscal.Doc_Merc_Padrao;
        var Conta_Corrente_Padrao = configFiscal.Conta_Corrente_Padrao;
        parametros = {
            vendas: "",
            NF: entidade.Formulario
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("DeletarContasReceber", parametros);
        var nContasReceber;
        var nContasReceberLista = [];
        var cred;
        for (var x = 0; x < this.CobCrediarios.length; x++) {
            cred = this.CobCrediarios[x];
            nContasReceber = {};
            nContasReceber.Codigo_Cliente = entidade.Codigo_Cliente;
            nContasReceber.Parcela = (x + 1);
            nContasReceber.Data_Vencimento = cred.Vencimento;
            nContasReceber.Baixa = false;
            nContasReceber.Valor = cred.Valor;
            nContasReceber.Observacao = "Referente à Nota Fiscal: " + entidade.Formulario;
            nContasReceber.Doc_Bancario = cred.Doc_Bancario;
            nContasReceber.Operador = ValoresSismoura.UsuarioLogado;
            if (cred.Conta_Contabil && cred.Conta_Contabil > 0) {
                nContasReceber.Conta_Contabil = cred.Conta_Contabil;
            }
            else {
                nContasReceber.Conta_Contabil = 1;
            }
            if (cred.Conta_Corrente && cred.Conta_Corrente != "0") {
                nContasReceber.Conta_Corrente = cred.Conta_Corrente;
            }
            else {
                if (Conta_Corrente_Padrao != "") {
                    nContasReceber.Conta_Corrente = Conta_Corrente_Padrao;
                }
                else {
                    nContasReceber.Conta_Corrente = null;
                }
            }
            if (cred.Documento_Mercantil && cred.Documento_Mercantil > 0) {
                nContasReceber.Doc_Merc = cred.Documento_Mercantil;
            }
            else {
                if (docPadrao > 0) {
                    nContasReceber.Doc_Merc = docPadrao;
                }
                else {
                    nContasReceber.Doc_Merc = 2; //Nota Fiscal
                }
            }
            nContasReceber.N_Doc_Merc = entidade.Formulario.toString();
            nContasReceber.Impagavel = false;
            nContasReceber.Previsao = false;
            nContasReceber.Nota_Fiscal = entidade.Codigo;
            if (this.txtCodOrcamento && this.txtCodOrcamento.GetText() != "0") {
                nContasReceber.Numero_Orcamento = this.txtCodOrcamento.GetText().CNum();
            }
            else {
                nContasReceber.Numero_Orcamento = null;
            }
            nContasReceber.Numero_Documento = entidade.Venda;
            var CC;
            parametros = {
                codigo: cred.Conta_Corrente
            };
            CC = this.ExecutarFuncaoServerSideSynch("GetContaCorrente", parametros);
            if (CC.Cod_Empresa) {
                nContasReceber.Empresa = CC.Cod_Empresa;
            }
            nContasReceber.Data_Emissao = new Date();
            nContasReceberLista.push(nContasReceber);
        }
        parametros = {
            CR: nContasReceberLista
        };
        this.ExecutarFuncaoServerSideSynch("GravarContasReceber", parametros);
        MostrarMensagem("Contas a Receber cadastradas com sucesso!");
    };
    C_NotaF.prototype.RatearValorNosProdutos = function (ratear, desconto) {
        var produto;
        var porc, valor_desc_prod, porc_desc_prod, desc_total;
        desc_total = 0;
        var parametros = {};
        var config = this.ExecutarFuncaoServerSideSynch("GetConfigFiscal", parametros);
        for (var x = 0; x < this.ProdutosNota.length; x++) {
            produto = this.ProdutosNota[x];
            porc = ((produto.Valor_Total * 100) / this.ProdutosNota.Sum("Valor_Total")) || 0;
            valor_desc_prod = (ratear * (porc / 100)).Format(2).CNum();
            porc_desc_prod = (valor_desc_prod * 100) / produto.Valor_Total;
            if (desconto) {
                if (config.Embutir_Desconto) {
                    produto.Valor_Total -= valor_desc_prod.Format(2).CNum();
                    produto.Valor_Unitario = produto.Valor_Total / produto.Quantidade;
                }
                else {
                    produto.Valor_Desconto = valor_desc_prod.Format(2).CNum();
                    produto.Valor_Desconto_Porcentagem = porc_desc_prod.Format(2).CNum();
                }
                if (produto.Base_Icms > 0) {
                    produto.Base_Icms -= valor_desc_prod.Format(2).CNum();
                    produto.Valor_Icms = produto.Base_Icms * (produto.Aliquota_ICMS / 100);
                    produto.Valor_FCP = produto.Base_Icms * (produto.Aliquota_FCP / 100) || 0;
                }
                if (produto.Base_Pis > 0) {
                    produto.Base_Pis -= valor_desc_prod.Format(2).CNum();
                    produto.Valor_Pis = produto.Base_Pis * (produto.Aliquota_Pis / 100);
                }
                if (produto.Base_Cofins > 0) {
                    produto.Base_Cofins -= valor_desc_prod.Format(2).CNum();
                    produto.Valor_Cofins = produto.Base_Cofins * (produto.Aliquota_Cofins / 100);
                }
                if (produto.Base_IPI > 0) {
                    produto.Base_IPI -= valor_desc_prod.Format(2).CNum();
                    produto.Valor_Ipi = produto.Base_IPI * (produto.Aliquota_IPI / 100);
                }
                desc_total = (desc_total + valor_desc_prod).Format(2).CNum();
            }
            else {
                //Implementear acrescimo
            }
            this.ProdutosNota[x] = produto;
        }
        if (desc_total != ratear && this.ProdutosNota.length > 0) {
            var aux = ratear - desc_total;
            if (desconto) {
                if (config.Embutir_Desconto) {
                    this.ProdutosNota[this.ProdutosNota.length - 1].Valor_Total -= aux;
                    this.ProdutosNota[this.ProdutosNota.length - 1].Valor_Unitario -= (aux / this.ProdutosNota[this.ProdutosNota.length - 1].Quantidade);
                }
                else {
                    this.ProdutosNota[this.ProdutosNota.length - 1].Valor_Desconto += aux;
                    this.ProdutosNota[this.ProdutosNota.length - 1].Valor_Desconto_Porcentagem = (aux * 100) / this.ProdutosNota[this.ProdutosNota.length - 1].Valor_Total;
                }
                if (this.ProdutosNota[this.ProdutosNota.length - 1].Base_Icms > 0) {
                    this.ProdutosNota[this.ProdutosNota.length - 1].Base_Icms -= aux;
                    this.ProdutosNota[this.ProdutosNota.length - 1].Valor_Icms = this.ProdutosNota[this.ProdutosNota.length - 1].Base_Icms * (this.ProdutosNota[this.ProdutosNota.length - 1].Aliquota_ICMS / 100);
                    this.ProdutosNota[this.ProdutosNota.length - 1].Valor_FCP = this.ProdutosNota[this.ProdutosNota.length - 1].Base_Icms * (this.ProdutosNota[this.ProdutosNota.length - 1].Aliquota_FCP / 100) || 0;
                }
                if (this.ProdutosNota[this.ProdutosNota.length - 1].Base_Pis > 0) {
                    this.ProdutosNota[this.ProdutosNota.length - 1].Base_Pis -= valor_desc_prod.Format(2).CNum();
                    this.ProdutosNota[this.ProdutosNota.length - 1].Valor_Pis = this.ProdutosNota[this.ProdutosNota.length - 1].Base_Pis * (this.ProdutosNota[this.ProdutosNota.length - 1].Aliquota_Pis / 100);
                }
                if (this.ProdutosNota[this.ProdutosNota.length - 1].Base_Cofins > 0) {
                    this.ProdutosNota[this.ProdutosNota.length - 1].Base_Cofins -= valor_desc_prod.Format(2).CNum();
                    this.ProdutosNota[this.ProdutosNota.length - 1].Valor_Cofins = this.ProdutosNota[this.ProdutosNota.length - 1].Base_Cofins * (this.ProdutosNota[this.ProdutosNota.length - 1].Aliquota_Cofins / 100);
                }
                if (this.ProdutosNota[this.ProdutosNota.length - 1].Base_IPI > 0) {
                    this.ProdutosNota[this.ProdutosNota.length - 1].Base_IPI -= valor_desc_prod.Format(2).CNum();
                    this.ProdutosNota[this.ProdutosNota.length - 1].Valor_Ipi = this.ProdutosNota[this.ProdutosNota.length - 1].Base_IPI * (this.ProdutosNota[this.ProdutosNota.length - 1].Aliquota_IPI / 100);
                }
                this.OnTextBoxDescontoPChange;
            }
            else {
                //Implementear acrescimo
            }
        }
    };
    C_NotaF.prototype.SerieCPFValido = function () {
        var tipo;
        var serie;
        var parametros = {
            codEmpresa: this.EntityTela.Empresa
        };
        tipo = this.ExecutarFuncaoServerSideSynch("GetTipoEmpresa", parametros);
        if (tipo === "F") {
            parametros = {
                serie: this.EntityTela.Serie
            };
            serie = this.ExecutarFuncaoServerSideSynch("GetSerieNFPEmpresa", parametros);
            if (serie !== undefined) {
                if (serie < 920 || serie > 969) {
                    MostrarAlerta("Para emitente Pessoa Física a série da NF-e deve estar entre 920 e 969!");
                    return false;
                }
            }
        }
        return true;
    };
    C_NotaF.prototype.PreencherMotivoDesoneracao = function () {
        this.ProdutosNota.forEach(function (produto) {
            produto.Motivo_Desoneracao_ICMS_Descricao = motivosDesoneracao[produto.Motivo_Desoneracao_ICMS] || '';
        });
        if (!this.cboMotivoDeson.Visible) {
            this.Item.Motivo_Desoneracao_ICMS = 0;
            this.Item.Motivo_Desoneracao_ICMS_Descricao = "";
            this.Item.Vlr_ICMS_Desonerado = 0;
        }
    };
    C_NotaF.prototype.PreencherComboMotivoDesonDinamicamente = function (chavesDesoneracao) {
        var _this = this;
        chavesDesoneracao.forEach(function (chaveDesoneracao) {
            _this.cboMotivoDeson.Combo.AddItem(motivosDesoneracao[chaveDesoneracao], chaveDesoneracao, null);
        });
    };
    C_NotaF.prototype.PreencherComboICMSDesonerado = function (CST) {
        if (!CST) {
            return;
        }
        this.cboMotivoDeson.ClearItems();
        this.cboMotivoDeson.Visible = true;
        this.txtValorICmsDeson.Visible = true;
        switch (CST) {
            case "020":
            case "070":
            case "090":
                this.PreencherComboMotivoDesonDinamicamente(['3', '9', '12']);
                break;
            case "030":
                this.PreencherComboMotivoDesonDinamicamente(['6', '7', '9']);
                break;
            case "040":
            case "041":
            case "050":
                this.PreencherComboMotivoDesonDinamicamente(['1', '3', '4', '5', '6', '7', '8', '9', '10', '11']);
                break;
            default:
                //MostrarAlerta("CST não é compatível com o motivo da Desoneração."); Retirado a pedido do Leandro Mendes
                this.cboMotivoDeson.ClearItems();
                this.cboMotivoDeson.Visible = false;
                this.txtValorICmsDeson.Visible = false;
                this.Item.Motivo_Desoneracao_ICMS = 0;
                this.Item.Motivo_Desoneracao_ICMS_Descricao = "";
                this.Item.Vlr_ICMS_Desonerado = 0;
                break;
        }
        ;
    };
    C_NotaF.prototype.OnMudouValorIcmsDeson = function () {
        if (this.Item.Vlr_ICMS_Desonerado > 0) {
            this.cboMotivoDeson.Obrigatorio = true;
            this.cboMotivoDeson.ComponenteValidacao = "btnOKProduto";
        }
        else {
            this.cboMotivoDeson.Obrigatorio = false;
            this.cboMotivoDeson.ComponenteValidacao = "";
        }
    };
    C_NotaF.prototype.AdicionarDadosAdicionaisEntrega = function () {
        if (!this.EntityTela.FiscalNFVendas) {
            return "";
        }
        var parametros = {};
        var configFiscal = this.ExecutarFuncaoServerSideSynch("GetConfigFiscal", parametros);
        var somenteCodigosVenda = this.EntityTela.FiscalNFVendas.map(function (venda) { return venda.Venda; });
        if (somenteCodigosVenda[0] === undefined) {
            somenteCodigosVenda = this.EntityTela.FiscalNFVendas.map(function (venda) { return venda.VendaEntity.Codigo; });
        }
        var codigosVendaUnico = somenteCodigosVenda.filter(function (item, index, array) {
            return array.indexOf(item) === index;
        });
        if (!codigosVendaUnico || codigosVendaUnico.length != 1 || !configFiscal.Imp_End_Entrega_NFe) {
            return "";
        }
        var enderecos;
        parametros = {
            vendas: codigosVendaUnico[0]
        };
        var dados = "";
        enderecos = this.ExecutarFuncaoServerSideSynch("GetEnderecosEntrega", parametros);
        enderecos.forEach(function (end) {
            dados += "Endereço de Entrega: ";
            if (end.Endereco) {
                dados += end.Endereco;
            }
            if (end.Numero) {
                dados += ", " + end.Numero;
            }
            if (end.Bairro) {
                dados += " - " + end.Bairro;
            }
            if (end.Nome_Cidade) {
                dados += " - " + end.Nome_Cidade;
            }
            if (end.Cep) {
                dados += " - CEP: " + end.Cep;
            }
            dados += " | ";
        });
        if (dados) {
            dados = dados.substring(0, dados.length - 3);
        }
        return dados;
    };
    C_NotaF.prototype.OnSelecionouLinha = function (s, e) {
        if (this.mdProdutos && this.mdProdutos.ModalDialog) {
            var data = JSON.parse(JSON.stringify(e.data));
            this.mdProdutos.ModalDialog.Show();
            this.LimparProduto();
            this.txtProduto.Disabled = true;
            this.Item = data;
        }
    };
    C_NotaF.prototype.abrirDeclaracaoConteudo = function (s, e) {
        e.processOnServer = false;
        var entity = this.EntityTela;
        if (entity.Codigo > 0) {
            var parametrosTela = [];
            parametrosTela.push("NF=" + CNum(this.EntityTela.Codigo));
            abrirTelaNovaAbaParametros(formataURLRelativa("/Modulos/Fiscal/NotaFiscal/C_Declar.aspx"), parametrosTela);
        }
        else {
            MostrarAlerta("Selecione ao menos uma Nota Fiscal");
        }
    };
    C_NotaF.prototype.validarImpostosProdutos = function () {
        for (var _i = 0, _a = this.grdItens.DataSource; _i < _a.length; _i++) {
            var produto = _a[_i];
            if (produto.Cfop === null
                || produto.Cst === null
                || produto.St_Pis === null || produto.St_Pis === "0"
                || produto.St_Cofins === null || produto.St_Cofins === "0") {
                MostrarAlerta("O produto " + produto.Item + " - " + produto.Descricao_Produto + " est\u00E1 com regras de imposto inconsistentes. Clique no item e informe os campos obrigat\u00F3rios.");
                return false;
            }
        }
        return true;
    };
    C_NotaF.prototype.validarFatura = function () {
        var diferencaTotalPago = this.EntityTela.Total_Nf - (CNum(this.lblCobTotal.Text));
        if (diferencaTotalPago > 0.00000001) {
            MostrarAlerta('Os valores informados na fatura estão menores do que os valores informados na nota fiscal.');
            return false;
        }
        if (diferencaTotalPago < -0.00000001) {
            MostrarAlerta('Os valores informados na fatura estão maiores do que os valores informados na nota fiscal.');
            return false;
        }
        return true;
    };
    return C_NotaF;
}(MouraPageCadastroAngular));
var c_NotaF = new C_NotaF();
//# sourceMappingURL=C_NotaF.js.map