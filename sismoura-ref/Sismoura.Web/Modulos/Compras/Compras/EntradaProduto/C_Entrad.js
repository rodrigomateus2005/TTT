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
var C_Entrad = /** @class */ (function (_super) {
    __extends(C_Entrad, _super);
    function C_Entrad() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.custo = [];
        _this.isPossuiFaturaXML = true;
        _this.jaEntrou = false;
        _this.respondeuContasPagar = false;
        _this.RETORNO_CAD_FORN = "XMLcadForn";
        _this.RETORNO_CAD_PROD = "XMLcadProd";
        _this._importacaoNFe = false;
        return _this;
    }
    Object.defineProperty(C_Entrad.prototype, "txtNCM", {
        get: function () {
            return window['txtNCM_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "mdNCM", {
        get: function () {
            return window['mdNCM_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "gdNcm", {
        get: function () {
            return window['gdNcm_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "isNCM", {
        get: function () {
            return this.GetScope()["isNCM"];
        },
        set: function (value) {
            this.GetScope()["isNCM"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "NCM", {
        get: function () {
            var that = this.GetScope()["NCM"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["NCM"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "NCMs", {
        get: function () {
            return this.GetScope()["NCMs"];
        },
        set: function (value) {
            this.GetScope()["NCMs"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "cboTipoImportacao", {
        get: function () {
            return window['cboTipoImportacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtChaveAcessoImportar", {
        get: function () {
            return window['txtChaveAcessoImportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "ValidacoesEntrada", {
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
    Object.defineProperty(C_Entrad.prototype, "dlgLote", {
        get: function () {
            return window['dlgLote_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "lstPedidos", {
        get: function () {
            return window['lstPedidos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "grdProduto", {
        get: function () {
            return window["grdProduto_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "tab", {
        get: function () {
            return window["tab_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "cboDeposito", {
        get: function () {
            return window['cboDeposito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "btnAdicionarProduto", {
        get: function () {
            return window["btnAdicionarProduto_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "btnAdicionarServico", {
        get: function () {
            return window["btnAdicionarServico_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "mdProdutos", {
        get: function () {
            return window["mdProdutos_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "mdServicos", {
        get: function () {
            return window["mdServicos_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "mdImportarXML", {
        get: function () {
            return window["mdImportarXML_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtProduto", {
        get: function () {
            return window["txtProduto_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtServico", {
        get: function () {
            return window["txtServico_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtNota", {
        get: function () {
            return window["txtNota_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "cboTipoNF", {
        get: function () {
            return window['cboTipoNF_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "chkEnviarIcmsSped", {
        get: function () {
            return window['chkEnviarIcmsSped_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtICMSServP", {
        get: function () {
            return window["txtICMSServP_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtICMSServR", {
        get: function () {
            return window["txtICMSServR_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtISSR", {
        get: function () {
            return window["txtISSR_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtCifFob", {
        get: function () {
            return window["txtCifFob_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "cboTipoServico", {
        get: function () {
            return window["cboTipoServico_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtAliquotaPISServico", {
        get: function () {
            return window["txtAliquotaPISServico_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtValorPISServico", {
        get: function () {
            return window["txtValorPISServico_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtSerie", {
        get: function () {
            return window["txtSerie_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtFornecedor", {
        get: function () {
            return window["txtFornecedor_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtFornecedorTransferencia", {
        get: function () {
            return window["txtFornecedorTransferencia_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "chkGerarTodos", {
        get: function () {
            return window["chkGerarTodos_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "lblSubTotal", {
        get: function () {
            return window["lblSubTotal_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "lblSubTotalDolar", {
        get: function () {
            return window["lblSubTotalDolar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtValorUnitDolar", {
        get: function () {
            return window["txtValorUnitDolar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtQuantidade", {
        get: function () {
            return window["txtQuantidade_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "hdnCalcularDolar", {
        get: function () {
            return $('#hdnCalcularDolar')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "hdnCotacaoDolar", {
        get: function () {
            return $('#hdnCotacaoDolar')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "lblLocalizacao", {
        get: function () {
            return window['lblLocalizacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "lblUnidade", {
        get: function () {
            return window['lblUnidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "lblEstoqueAtual", {
        get: function () {
            return window['lblEstoqueAtual_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtTotalProduto", {
        get: function () {
            return window["txtTotalProduto_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtV_Seguro", {
        get: function () {
            return window["txtV_Seguro_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtTotalServico", {
        get: function () {
            return window["txtTotalServico_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "cboTipoEntrada", {
        get: function () {
            return window["cboTipoEntrada_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "lblTotalNota", {
        get: function () {
            return window['lblTotalNota_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtSomaDescontoUnitario", {
        get: function () {
            return window['txtSomaDescontoUnitario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtValorSeguro", {
        get: function () {
            return window['txtValorSeguro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "lblValorRestanteRatear", {
        get: function () {
            return window['lblValorRestanteRatear_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "lblTotalServico", {
        get: function () {
            return window["lblTotalServico_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "cboCST", {
        get: function () {
            return window["cboCST_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "cboSTIPI", {
        get: function () {
            return window['cboSTIPI_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "cboSTCOFINS", {
        get: function () {
            return window['cboSTCOFINS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "cboTipoDias", {
        get: function () {
            return window["cboTipoDias_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtBaseIcmsStR", {
        get: function () {
            return window["txtBaseIcmsStR_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtICMS", {
        get: function () {
            return window['txtICMS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtBaseICMSR", {
        get: function () {
            return window['txtBaseICMSR_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtIcmsStP", {
        get: function () {
            return window["txtIcmsStP_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtIcmsStR", {
        get: function () {
            return window["txtIcmsStR_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtDiasVencimento", {
        get: function () {
            return window["txtDiasVencimento_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtNotaXml", {
        get: function () {
            return window['txtNotaXml_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtVencInicial", {
        get: function () {
            return window["txtVencInicial_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtDataEmissaoD", {
        get: function () {
            return window["txtDataEmissaoD_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "chkPrevisao", {
        get: function () {
            return window['chkPrevisao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtContaContabil", {
        get: function () {
            return window['txtContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtParcelas", {
        get: function () {
            return window['txtParcelas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "cboDocMercantil", {
        get: function () {
            return window['cboDocMercantil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "cboFormaPagamentoD", {
        get: function () {
            return window['cboFormaPagamentoD_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtFornecedorD", {
        get: function () {
            return window['txtFornecedorD_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtNDocBancario", {
        get: function () {
            return window['txtNDocBancario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "hdnEntradaDataEmissao", {
        get: function () {
            return $("#hdnEntradaDataEmissao")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "hdnNomeArquivo", {
        get: function () {
            return $("#hdnNomeArquivo")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "hdnConfigRateio", {
        get: function () {
            return $("#hdnConfigRateio")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "hdnDuplicata", {
        get: function () {
            return $("#hdnDuplicata")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "ConfiguracaoRateio", {
        get: function () {
            if (String.IsNullOrWhiteSpace(this.hdnConfigRateio.value)) {
                return {};
            }
            else {
                return JSON.parse(DecodeTextoJSON(this.hdnConfigRateio.value));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "hdnXmlCadastrado", {
        get: function () {
            return $("#hdnXmlCadastrado")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtDias", {
        get: function () {
            return window["txtDias_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtChaveNFE", {
        get: function () {
            return window["txtChaveNFE_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "cboTanque", {
        get: function () {
            return window["cboTanque_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "cboCombustivel", {
        get: function () {
            return window["cboCombustivel_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "hdnPossuiContasPagar", {
        get: function () {
            return $("#hdnPossuiContasPagar")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "lblCombustivelRestante", {
        get: function () {
            return window["lblCombustivelRestante_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "hdnCombustiveis", {
        get: function () {
            return $("#hdnCombustiveis")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "hdnRateioCombustiveis", {
        get: function () {
            return $("#hdnRateioCombustiveis")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtQtdTanque", {
        get: function () {
            return window['txtQtdTanque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "cboSTPis", {
        get: function () {
            return window['cboSTPis_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "cboSTPisServico", {
        get: function () {
            return window['cboSTPisServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "cboSTCofinsServico", {
        get: function () {
            return window['cboSTCofinsServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtBasePIS", {
        get: function () {
            return window['txtBasePIS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtAliquotaPIS", {
        get: function () {
            return window['txtAliquotaPIS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtValorPIS", {
        get: function () {
            return window['txtValorPIS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtBaseCOFINS", {
        get: function () {
            return window['txtBaseCOFINS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtAliquotaCOFINS", {
        get: function () {
            return window['txtAliquotaCOFINS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtTipoLancamentoContabil", {
        get: function () {
            return window['txtTipoLancamentoContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtTipoLancamentoContabil_hdnEmpresaContabil", {
        get: function () {
            return $("#txtTipoLancamentoContabil_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "cboCFOP", {
        get: function () {
            return window['cboCFOP_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtValorCOFINS", {
        get: function () {
            return window['txtValorCOFINS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtAliquotaCOFINSServico", {
        get: function () {
            return window['txtAliquotaCOFINSServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtValorCofinsServico", {
        get: function () {
            return window['txtValorCofinsServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtIPIP", {
        get: function () {
            return window['txtIPIP_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtIPIR", {
        get: function () {
            return window['txtIPIR_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "btnOKServico", {
        get: function () {
            return window['btnOKServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "btnOKMicrochip", {
        get: function () {
            return window['btnOKMicrochip_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "btnCancelar", {
        get: function () {
            return window['btnCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "btnOkFornecedor", {
        get: function () {
            return window['btnOkFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "btnCancelarFornecedor", {
        get: function () {
            return window['btnCancelarFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "btnFecharServico", {
        get: function () {
            return window['btnFecharServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "btnFecharProduto", {
        get: function () {
            return window['btnFecharProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "btnOKProduto", {
        get: function () {
            return window['btnOKProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "grdServico", {
        get: function () {
            return window['grdServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "grdMicrochip", {
        get: function () {
            return window['grdMicrochip_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "Produtos", {
        get: function () {
            if (!this.GetScope()["Produtos"]) {
                return [];
            }
            else {
                return this.GetScope()["Produtos"];
            }
        },
        set: function (value) {
            this.GetScope()["Produtos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "Produto", {
        get: function () {
            if (!this.GetScope()["Produto"]) {
                return null;
            }
            else {
                return this.GetScope()["Produto"];
            }
        },
        set: function (value) {
            this.GetScope()["Produto"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "Anilhas", {
        get: function () {
            if (!this.GetScope()["Anilhas"]) {
                return [];
            }
            else {
                return this.GetScope()["Anilhas"];
            }
        },
        set: function (value) {
            this.GetScope()["Anilhas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "Anilha", {
        get: function () {
            if (!this.GetScope()["Anilha"]) {
                return null;
            }
            else {
                return this.GetScope()["Anilha"];
            }
        },
        set: function (value) {
            this.GetScope()["Anilha"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "Servicos", {
        get: function () {
            if (!this.GetScope()["Servicos"]) {
                return [];
            }
            else {
                return this.GetScope()["Servicos"];
            }
        },
        set: function (value) {
            this.GetScope()["Servicos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "Servico", {
        get: function () {
            if (!this.GetScope()["Servico"]) {
                return null;
            }
            else {
                return this.GetScope()["Servico"];
            }
        },
        set: function (value) {
            this.GetScope()["Servico"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "ItensUnitarios", {
        get: function () {
            if (!this.GetScope()["ItensUnitarios"]) {
                return [];
            }
            else {
                return this.GetScope()["ItensUnitarios"];
            }
        },
        set: function (value) {
            this.GetScope()["ItensUnitarios"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "ItemUnitario", {
        get: function () {
            if (!this.GetScope()["ItemUnitario"]) {
                return null;
            }
            else {
                return this.GetScope()["ItemUnitario"];
            }
        },
        set: function (value) {
            this.GetScope()["ItemUnitario"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "Duplicata", {
        //get Duplicatas(): SiSMoura.Core.Entity.EntradaProdutoDuplicata[] {
        //    return this.grdDuplicata.Grid.DataSource;
        //}
        //set Duplicatas(value: SiSMoura.Core.Entity.EntradaProdutoDuplicata[]) {
        //    this.grdDuplicata.Grid.PreencherGrid(value);
        //}
        get: function () {
            if (!this.GetScope()['Duplicata']) {
                this.GetScope()['Duplicata'] = {};
            }
            return this.GetScope()['Duplicata'];
        },
        set: function (value) {
            this.GetScope()['Duplicata'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "Duplicatas", {
        get: function () {
            return this.GetScope()["Duplicatas"];
        },
        set: function (value) {
            this.GetScope()["Duplicatas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "NFeImportada", {
        get: function () {
            if (!this.GetScope()["NFeImportada"]) {
                return null;
            }
            else {
                return this.GetScope()["NFeImportada"];
            }
        },
        set: function (value) {
            this.GetScope()["NFeImportada"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "PathXMLImportado", {
        get: function () {
            if (!this.GetScope()["PathXMLImportado"]) {
                return "";
            }
            else {
                return this.GetScope()["PathXMLImportado"];
            }
        },
        set: function (value) {
            this.GetScope()["PathXMLImportado"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "ItemNFEAtual", {
        get: function () {
            if (!this.GetScope()["ItemNFEAtual"]) {
                return null;
            }
            else {
                return this.GetScope()["ItemNFEAtual"];
            }
        },
        set: function (value) {
            this.GetScope()["ItemNFEAtual"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "lblFornecedorXML", {
        get: function () {
            return window['lblFornecedorXML_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "grdDuplicata", {
        get: function () {
            return window['grdDuplicata_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "mdDuplicatas", {
        get: function () {
            return window['mdDuplicatas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "btnDuplicatas", {
        get: function () {
            return window['btnDuplicatas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "btnOkDuplicatas", {
        get: function () {
            return window['btnOkDuplicatas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "btnAdicionarCC", {
        get: function () {
            return window['btnAdicionarCC_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "grdRateioCC", {
        get: function () {
            return window['grdRateioCC_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "ListaRateioCC", {
        get: function () {
            return this.GetScope()["ListaRateioCC"];
        },
        set: function (value) {
            this.GetScope()["ListaRateioCC"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtValorCC", {
        get: function () {
            return window['txtValorCC_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtCentroCustoD", {
        get: function () {
            return window['txtCentroCustoD_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtCentroCusto", {
        get: function () {
            return window['txtCentroCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "btnCancelarDup", {
        get: function () {
            return window['btnCancelarDup_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "btnAlterarPrecos", {
        get: function () {
            return window['btnAlterarPrecos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "btnImportarXml", {
        get: function () {
            return window['btnImportarXml_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "btnCarregarXml", {
        get: function () {
            return window['btnCarregarXml_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "btnCadForn", {
        get: function () {
            return window['btnCadForn_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "grdItensArquivo", {
        get: function () {
            return window['grdItensArquivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtDataEmissaoXml", {
        get: function () {
            return window['txtDataEmissaoXml_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtDataEntradaXml", {
        get: function () {
            return window['txtDataEntradaXml_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "btnOkImportar", {
        get: function () {
            return window['btnOkImportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "mdVincularProduto", {
        get: function () {
            return window['mdVincularProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "btnVinculaProdutoOK", {
        get: function () {
            return window['btnVinculaProdutoOK_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "btnVinculaProdutoFechar", {
        get: function () {
            return window['btnVinculaProdutoFechar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtVincularProduto", {
        get: function () {
            return window['txtVincularProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "mdInconsistencia", {
        get: function () {
            return window['mdInconsistencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "grdInconsistencia", {
        get: function () {
            return window['grdInconsistencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "mdLotesVinculados", {
        get: function () {
            return window['mdLotesVinculados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "grdLotesVinculados", {
        get: function () {
            return window['grdLotesVinculados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "btnProcurarPendentes", {
        get: function () {
            return window['btnProcurarPendentes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "btnVisualizarLotes", {
        get: function () {
            return window['btnVisualizarLotes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "grdPendentes", {
        get: function () {
            return window['grdPendentes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "hdnCaminhoSessao", {
        get: function () {
            return window['hdnCaminhoSessao'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "tabNfes", {
        get: function () {
            return window['tabNfes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "mdCombustiveis", {
        get: function () {
            return window['mdCombustiveis_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "mdAnilha", {
        get: function () {
            return window['mdAnilha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "mdFornecedor", {
        get: function () {
            return window['mdFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "lblTotalProduto", {
        get: function () {
            return window['lblTotalProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "grdCombustiveis", {
        get: function () {
            return window['grdCombustiveis_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "ListaRateioCombustivel", {
        get: function () {
            return this.grdCombustiveis.DataSource;
        },
        set: function (value) {
            this.grdCombustiveis.PreencherGrid(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "Combustiveis", {
        get: function () {
            var lista = cloneArray(this.Produtos);
            var combustiveis = [];
            for (var x = 0; x <= lista.length - 1; x++) {
                if (lista[x].Combustivel) {
                    combustiveis.push(lista[x]);
                }
            }
            return combustiveis;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "itensPedido", {
        get: function () {
            if (!this._itensPedido) {
                this._itensPedido = [];
            }
            return this._itensPedido;
        },
        set: function (value) {
            this._itensPedido = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "mdPedidos", {
        get: function () {
            return window['mdPedidos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "lstImPedido", {
        get: function () {
            return window['lstImPedido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "grdPedido", {
        get: function () {
            return window['grdPedido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "ProdutosPedido", {
        get: function () {
            return this.grdPedido.DataSource;
        },
        set: function (value) {
            this.grdPedido.PreencherGrid(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "lblQtdeUtilizada", {
        get: function () {
            return window['lblQtdeUtilizada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "lblValorUtilizado", {
        get: function () {
            return window['lblValorUtilizado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "lblDescontoPedido", {
        get: function () {
            return window['lblDescontoPedido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "lblValorPedido", {
        get: function () {
            return window['lblValorPedido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "LotesInformados", {
        get: function () {
            if (!this.dlgLote.Informados) {
                return [];
            }
            else {
                return this.dlgLote.Informados;
            }
        },
        set: function (value) {
            this.dlgLote.Informados = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "fpXML", {
        get: function () {
            return window['fpXML_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "mdInfContaContabil", {
        get: function () {
            return window['mdInfContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtCCProduto", {
        get: function () {
            return window['txtCCProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "mdUnitarizar", {
        get: function () {
            return window['mdUnitarizar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "grdUnitarizar", {
        /*get txtProdutoUnitarizar(): MouraTextBoxProcura {
            return window['txtProdutoUnitarizar_Object'];
        }*/
        /*get txtQtdeUnitarizar(): MouraTextBox {
            return window['txtQtdeUnitarizar_Object'];
        }*/
        get: function () {
            return window['grdUnitarizar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "lblProdutoUnitarizar", {
        get: function () {
            return window['lblProdutoUnitarizar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "lblRestanteUnitarizar", {
        get: function () {
            return window['lblRestanteUnitarizar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "rdTipoRateio", {
        get: function () {
            return window['rdTipoRateio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "ListaUnitarizados", {
        get: function () {
            if (!this._listaUnitarizado) {
                this._listaUnitarizado = [];
            }
            return this._listaUnitarizado;
        },
        set: function (value) {
            this._listaUnitarizado = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "Rateio", {
        get: function () {
            if (!this.GetScope()['Rateio']) {
                this.GetScope()['Rateio'] = {};
            }
            return this.GetScope()['Rateio'];
        },
        set: function (value) {
            this.GetScope()['Rateio'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "mdAlterarContaContabil", {
        get: function () {
            return window['mdAlterarContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "mdAlterarContaCorrente", {
        get: function () {
            return window['mdAlterarContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtConta", {
        get: function () {
            return window['txtConta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "chkEstoque", {
        get: function () {
            return window['chkEstoque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "btnGerarRelacao", {
        // Atividade de Unitarização (TOTALLY - ANNUAL)
        get: function () {
            return window['btnGerarRelacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtGrupo", {
        get: function () {
            return window['txtGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtSubGrupo", {
        get: function () {
            return window['txtSubGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtLinha", {
        get: function () {
            return window['txtLinha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtMarca", {
        get: function () {
            return window['txtMarca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtReferencia", {
        get: function () {
            return window['txtReferencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtCor", {
        get: function () {
            return window['txtCor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtTamanho", {
        get: function () {
            return window['txtTamanho_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "mdConferirPedido", {
        //
        get: function () {
            return window['mdConferirPedido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "EntradaProdutoAjustes", {
        get: function () {
            return this.GetScope()["EntradaProdutoAjustes"];
        },
        set: function (value) {
            this.GetScope()["EntradaProdutoAjustes"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "cboDivergencias", {
        get: function () {
            return window['cboDivergencias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "grdConferenciaPedidos", {
        get: function () {
            return window['grdConferenciaPedidos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "btnOkConferencia", {
        get: function () {
            return window['btnOkConferencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "btnCancelarConferencia", {
        get: function () {
            return window['btnCancelarConferencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "lblOrigem", {
        get: function () {
            return window['lblOrigem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "lblMotivoDebitoCredito", {
        get: function () {
            return window['lblMotivoDebitoCredito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "grdDebitosCreditos", {
        get: function () {
            return window['grdDebitosCreditos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtCodigoAjuste", {
        get: function () {
            return window['txtCodigoAjuste_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtOrigem", {
        get: function () {
            return window['txtOrigem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtCST", {
        get: function () {
            return window['txtCST_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtAliquota", {
        get: function () {
            return window['txtAliquota_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtValorDebitoCredito", {
        get: function () {
            return window['txtValorDebitoCredito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtMotivoDebitoCredito", {
        get: function () {
            return window['txtMotivoDebitoCredito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "txtContaContabilFinanceira", {
        get: function () {
            return window['txtContaContabFinanceira_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "mdValoresDesag", {
        get: function () {
            return window['mdValoresDesag_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "grdSubDesag", {
        get: function () {
            return window['grdSubDesag_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "lblTotalQtd", {
        get: function () {
            return window['lblTotalQtd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "lblTotalPeso", {
        get: function () {
            return window['lblTotalPeso_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "lblTotalMedia", {
        get: function () {
            return window['lblTotalMedia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad.prototype, "lblTotalCusto", {
        get: function () {
            return window['lblTotalCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Entrad.prototype.Init = function () {
        _super.prototype.Init.call(this);
        this.AdicionarEventosPagina();
    };
    C_Entrad.prototype.OnClickGerarUnitarizar = function () {
        if (this.txtGrupo.GetText().CNum() == 0 &&
            this.txtSubGrupo.GetText().CNum() == 0 &&
            this.txtLinha.GetText().CNum() == 0 &&
            this.txtMarca.GetText().CNum() == 0 &&
            this.txtReferencia.GetText() == "" &&
            this.txtCor.GetText().CNum() == 0 &&
            this.txtTamanho.GetText() == "") {
            MostrarAlerta("Filtre melhor os resultados que serão apresentados na grade, desta forma a procura pelo produto correto será menor.");
            return;
        }
        try {
            var parametros = {
                grupo: this.txtGrupo.GetText().CNum(),
                subGrupo: this.txtSubGrupo.GetText().CNum(),
                linha: this.txtLinha.GetText().CNum(),
                marca: this.txtMarca.GetText().CNum(),
                referencia: this.txtReferencia.GetText(),
                cor: this.txtCor.GetText().CNum(),
                tamanho: this.txtTamanho.GetText()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGradeUnitarizarFiltros", parametros);
            this.ItensUnitarios = retorno;
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnAlterandoItem = function (s, e) {
        if (this.jaEntrou) {
            this.jaEntrou = false;
            e.cancelar = true;
            return;
        }
        this.jaEntrou = true;
        if (e.item.Quantidade < 0) {
            MostrarAlerta("Informe um valor válido.");
            e.cancelar = true;
            return;
        }
        var valorAtual = e.item.Quantidade;
        var valorAnterior = e.oldRowValue.Quantidade;
        var totalAdicionado = this.ItensUnitarios.Sum("Quantidade") - e.oldRowValue.Quantidade + e.item.Quantidade;
        if (totalAdicionado > this._quantidadeEntradaUnitarizar) {
            MostrarAlerta("A quantidade desse produto não pode ser maior do que a quantidade restante do produto a ser unitarizado!");
            e.cancelar = true;
            return;
        }
        //if (this.lblRestanteUnitarizar.Text.CNum() == 0 && valorAtual > valorAnterior) {
        //    MostrarAlerta("Não é possível adicionar mais produtos quando a quantidade restante é zero.");
        //    //e.item.Quantidade = e.oldRowValue.Quantidade;
        //    //return;
        //    e.cancelar = true;
        //}
        //if ((valorAtual - valorAnterior) + totalAdicionado > this._quantidadeEntradaUnitarizar) {
        //    MostrarAlerta("Digite um valor menor ou igual a quantidade total.");
        //    e.cancelar = true;
        //    //e.item.Quantidade = e.oldRowValue.Quantidade;
        //    //return;
        //}
    };
    C_Entrad.prototype.OnAlterouItem = function (s, e) {
        this.CalcularQtdeRestanteUnitarizar();
    };
    C_Entrad.prototype.OnFechouMdImportarXML = function () {
        this.dup = [];
    };
    C_Entrad.prototype.AdicionarEventosPagina = function () {
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.OnComboBoxEmpresaChange, this);
        }
        if (this.btnAdicionarProduto) {
            adicionarEventoMoura(this.btnAdicionarProduto.Click, this.OnClickBotaoAdicionarProduto, this);
        }
        if (this.btnAdicionarServico) {
            adicionarEventoMoura(this.btnAdicionarServico.Click, this.OnClickBotaoAdicionarServico, this);
        }
        if (this.txtNota) {
            adicionarEventoMoura(this.txtNota.TextChanged, this.OnTextBoxNotaChange, this);
        }
        if (this.txtSerie) {
            adicionarEventoMoura(this.txtSerie.TextChanged, this.OnTextBoxSerieChange, this);
        }
        if (this.txtFornecedor) {
            adicionarEventoMoura(this.txtFornecedor.Procurou, this.OnTextBoxFornecedorPesquisou, this);
        }
        if (this.txtDiasVencimento) {
            adicionarEventoMoura(this.txtDiasVencimento.TextChanged, this.OnTextBoxDiasVencimentoChange, this);
        }
        if (this.txtVencInicial) {
            adicionarEventoMoura(this.txtVencInicial.ValueChanged, this.OntextBoxVencInicialChange, this);
        }
        if (this.txtDataEmissaoD) {
            adicionarEventoMoura(this.txtDataEmissaoD.ValueChanged, this.OntextBoxVencInicialChange, this);
        }
        if (this.cboTipoDias && this.cboTipoDias.Combo) {
            adicionarEventoDevExpress(this.cboTipoDias.Combo.SelectedIndexChanged, this.OnComboTipoDiasSelectedIndexChanged, this);
        }
        if (this.cboTipoServico) {
            adicionarEventoDevExpress(this.cboTipoServico.Combo.SelectedIndexChanged, this.OnComboBoxTipoServicoChange, this);
        }
        if (this.cboDeposito && this.cboDeposito.Combo) {
            adicionarEventoDevExpress(this.cboDeposito.Combo.Init, this.OnIniciouComboDeposito, this);
        }
        if (this.cboCombustivel) {
            adicionarEventoDevExpress(this.cboCombustivel.SelectedIndexChanged, this.OnComboBoxCombustivelChange, this);
        }
        if (this.cboSTPisServico && this.cboSTPisServico.Combo) {
            adicionarEventoDevExpress(this.cboSTPisServico.Combo.SelectedIndexChanged, this.OncboSTPisServicoSelectedIndexChanged, this);
        }
        if (this.cboSTCofinsServico && this.cboSTCofinsServico.Combo) {
            adicionarEventoDevExpress(this.cboSTCofinsServico.Combo.SelectedIndexChanged, this.OncboSTCOFINSServicoSelectedIndexChanged, this);
        }
        if (this.txtServico) {
            adicionarEventoMoura(this.txtServico.Procurou, this.OnPesquisouDadosServico, this);
        }
        if (this.txtProduto) {
            adicionarEventoMoura(this.txtProduto.Procurou, this.OnPesquisouDadosProduto, this);
        }
        if (this.btnOKServico) {
            adicionarEventoMoura(this.btnOKServico.Click, this.OnClickbtnOKServico, this);
        }
        if (this.btnOKProduto) {
            adicionarEventoMoura(this.btnOKProduto.Click, this.OnClickbtnOKProduto, this);
        }
        if (this.btnOKMicrochip) {
            adicionarEventoMoura(this.btnOKMicrochip.Click, this.OnClicOkMicrochip, this);
        }
        if (this.btnCancelar) {
            adicionarEventoMoura(this.btnCancelar.Click, this.OnClicCancelarMicrochip, this);
        }
        if (this.btnOkFornecedor) {
            adicionarEventoMoura(this.btnOkFornecedor.Click, this.OnClicOkFornecedor, this);
        }
        if (this.btnCancelarFornecedor) {
            adicionarEventoMoura(this.btnCancelarFornecedor.Click, this.OnClicCancelarFornecedor, this);
        }
        if (this.btnFecharServico) {
            adicionarEventoMoura(this.btnFecharServico.Click, this.OnClickbtnFecharServico, this);
        }
        if (this.grdMicrochip) {
            adicionarEventoMoura(this.grdMicrochip.Validando, this.OnValidandoAdicionarAnilha, this);
        }
        if (this.grdServico) {
            adicionarEventoMoura(this.grdServico.Validando, this.OnValidandoAdicionarServico, this);
            adicionarEventoMoura(this.grdServico.ItemAdicionado, this.OnAdicionouServico, this);
            adicionarEventoMoura(this.grdServico.ItemAlterado, this.OnAdicionouServico, this);
            adicionarEventoMoura(this.grdServico.ItemExcluido, this.OnAdicionouServico, this);
            adicionarEventoMoura(this.grdServico.LimpandoItem, this.OnLimpouItemServico, this);
        }
        if (this.grdProduto) {
            adicionarEventoMoura(this.grdProduto.Validando, this.OnValidandoAlteracaoProduto, this);
            adicionarEventoMoura(this.grdProduto.ItemAdicionado, this.OnAdicionouProduto, this);
            adicionarEventoMoura(this.grdProduto.ItemAlterado, this.OnAdicionouProduto, this);
            adicionarEventoMoura(this.grdProduto.ItemExcluido, this.OnAdicionouProduto, this);
            adicionarEventoMoura(this.grdProduto.LimpandoItem, this.OnLimpouItemProduto, this);
            adicionarEventoMoura(this.grdProduto.Grid.CellPrepared, this.OnGerouLinhaProduto, this);
            adicionarEventoMoura(this.grdProduto.Grid.ClickBotaoLinha, this.OnClicouBotaoLinhaProduto, this);
        }
        if (this.grdConferenciaPedidos) {
            adicionarEventoMoura(this.grdConferenciaPedidos.CellPrepared, this.OnGerouLinhaConferencia, this);
        }
        if (this.grdItensArquivo) {
            adicionarEventoMoura(this.grdItensArquivo.CellPrepared, this.OnGerouLinhaProdutoNFE, this);
            adicionarEventoMoura(this.grdItensArquivo.ClickBotaoLinha, this.OnClicouBotaoLinhaProdutoNFe, this);
        }
        if (this.btnCancelarDup) {
            adicionarEventoMoura(this.btnCancelarDup.Click, this.OnClickFecharDuplicatas, this);
        }
        //if (this.btnDuplicatas && this.btnDuplicatas.Botao) {
        //    adicionarEventoDevExpress(this.btnDuplicatas.Botao.Click, this.OnClickDuplicatas, this);
        //}
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.OnClickBotaoGerarDuplicatas, this);
        }
        if (this.btnOkDuplicatas) {
            adicionarEventoMoura(this.btnOkDuplicatas.Click, this.OnClickOKDuplicatas, this);
        }
        //if (this.btnAdicionarCC && this.btnAdicionarCC.Botao) {
        //    adicionarEventoDevExpress(this.btnAdicionarCC.Botao.Click, this.OnClickBotaoAdicionarCC, this);
        //}
        if (this.grdDuplicata) {
            //adicionarEventoMoura(this.grdDuplicata.RowValidating, this.OnValidandoGradeDuplicatas, this);
            adicionarEventoMoura(this.grdDuplicata.Grid.CellPrepared, this.OnGerouLinhaDuplicata, this);
            adicionarEventoMoura(this.grdDuplicata.Validando, this.OnValidandoGradeDuplicatas, this);
            adicionarEventoMoura(this.grdDuplicata.Grid.ClickBotaoLinha, this.OnClickBotaoGrdDuplicata, this);
        }
        if (this.btnFecharProduto) {
            adicionarEventoMoura(this.btnFecharProduto.Click, this.OnClickBotaoFecharProduto, this);
        }
        if (this.btnAlterarPrecos) {
            adicionarEventoMoura(this.btnAlterarPrecos.Click, this.OnClickBotaoAbrirAtualizacaoPreco, this);
        }
        if (this.btnImportarXml) {
            adicionarEventoMoura(this.btnImportarXml.Click, this.OnClickBotaoImportarNFE, this);
        }
        if (this.btnCarregarXml) {
            adicionarEventoMoura(this.btnCarregarXml.Click, this.OnClickBotaoCarregarXML, this);
        }
        if (this.btnCadForn) {
            adicionarEventoMoura(this.btnCadForn.Click, this.OnClickBotaoCadForn, this);
        }
        if (this.dlgTelaModal) {
            adicionarEventoMoura(this.dlgTelaModal.Retornou, this.OnRetornouTelaModalCadastro, this);
        }
        if (this.btnOkImportar) {
            adicionarEventoMoura(this.btnOkImportar.Click, this.OnClickBotaoOkImportar, this);
        }
        if (this.btnVinculaProdutoFechar) {
            adicionarEventoMoura(this.btnVinculaProdutoFechar.Click, this.OnClickBotaoVinculaProdutoFechar, this);
        }
        if (this.btnVinculaProdutoOK) {
            adicionarEventoMoura(this.btnVinculaProdutoOK.Click, this.OnClickBotaoVinculaProdutoOK, this);
        }
        if (this.btnProcurarPendentes) {
            adicionarEventoMoura(this.btnProcurarPendentes.Click, this.OnClickBotaoProcuraPendentes, this);
        }
        if (this.grdPendentes) {
            adicionarEventoMoura(this.grdPendentes.SelecionouLinha, this.OnSelecionouLinhaGrdPendentes, this);
        }
        if (this.grdRateioCC) {
            adicionarEventoMoura(this.grdRateioCC.Grid.ExcluiuLinhaGrade, this.OnExcluiuItemRateio, this);
            adicionarEventoMoura(this.grdRateioCC.Grid.EditouItemGrade, this.OnValidandoItemRateio, this);
            adicionarEventoMoura(this.grdRateioCC.Validando, this.OnValidandoGradeRateio, this);
        }
        if (this.dlgLote) {
            adicionarEventoMoura(this.dlgLote.InformouLote, this.OnInformouLoteProduto, this);
        }
        if (this.btnVisualizarLotes) {
            adicionarEventoMoura(this.btnVisualizarLotes.Click, this.OnClickBotaoLotes, this);
        }
        if (this.grdCombustiveis) {
            adicionarEventoMoura(this.grdCombustiveis.ExcluiuLinhaGrade, this.OnExcluiuCombustivelGrade, this);
        }
        if (this.lstImPedido) {
            adicionarEventoMoura(this.lstImPedido.DoubleClick, this.OnDblClickListaPedidos, this);
        }
        if (this.grdPedido) {
            adicionarEventoMoura(this.grdPedido.EditouItemGrade, this.OnEditouItemGradePedido, this);
        }
        if (this.txtValorUnitDolar) {
            adicionarEventoMoura(this.txtValorUnitDolar.TextChanged, this.AlterouValorUnitarioDolar, this);
        }
        if (this.fpXML) {
            adicionarEventoMoura(this.fpXML.FileUploadComplete, this.OnFileUploadXMLCompleted, this);
        }
        if (this.grdUnitarizar) {
            adicionarEventoMoura(this.grdUnitarizar.Grid.ExcluiuLinhaGrade, this.OnExcluiuLinhaUnitarizar, this);
        }
        if (this.cboTipoEntrada) {
            adicionarEventoMoura(this.cboTipoEntrada.SelectedItemChanged, this.OnTipoEntradaMudou, this);
        }
        if (this.cboTipoImportacao) {
            adicionarEventoMoura(this.cboTipoImportacao.SelectedItemChanged, this.OnTipoImportacaoMudou, this);
        }
        if (this.chkEstoque) {
            adicionarEventoMoura(this.chkEstoque.CheckChanged, this.OnMudouChkEstoque, this);
        }
        if (this.txtDataEmissaoXml) {
            this.txtDataEmissaoXml.Disabled = true;
        }
        if (this.mdImportarXML) {
            adicionarEventoMoura(this.mdImportarXML.Fechou, this.OnFechouMdImportarXML, this);
        }
        if (this.txtCentroCustoD) {
            adicionarEventoMoura(this.txtCentroCustoD.Procurou, this.OnDepoisBuscarCentroCusto, this);
        }
        if (this.txtContaContabil) {
            adicionarEventoMoura(this.txtContaContabil.Procurou, this.OnPesquisandoContaContabil, this);
            this.txtContaContabil.LimparParametros();
            this.txtContaContabil.AddParametro("Sintetico", "N");
        }
        if (this.txtTipoLancamentoContabil) {
            adicionarEventoMoura(this.txtTipoLancamentoContabil.AntesAbrirProcura, this.OnAntesAbrirProcuraLancamentoContabil, this);
            adicionarEventoMoura(this.txtTipoLancamentoContabil.AbriuProcura, this.OnDepoisAbriuProcuraLancamentoContabil, this);
            adicionarEventoMoura(this.txtTipoLancamentoContabil.Pesquisando, this.OnPesquisandoContabil, this);
            adicionarEventoMoura(this.txtTipoLancamentoContabil.Procurou, this.OnDepoisBuscarTipoLancamentoContabil, this);
        }
        if (this.txtContaContabilFinanceira) {
            adicionarEventoMoura(this.txtContaContabilFinanceira.Procurou, this.OnPesquisandoContaContabilFinanceira, this);
            //adicionarEventoMoura(this.txtContaContabilFinanceira.PesquisandoContabil, this.OnPesquisandoContaContabilFinanceira,this)
            adicionarEventoMoura(this.txtContaContabilFinanceira.AbriuProcura, this.OnPesquisandoContaContabilFinanceira, this);
            adicionarEventoMoura(this.txtContaContabilFinanceira.AntesAbrirProcura, this.OnPesquisandoContaContabilFinanceira, this);
            adicionarEventoMoura(this.txtContaContabilFinanceira.Pesquisando, this.OnPesquisandoContaContabilFinanceira, this);
        }
        if (this.grdUnitarizar) {
            adicionarEventoMoura(this.grdUnitarizar.Validando, this.OnAlterandoItem, this);
            adicionarEventoMoura(this.grdUnitarizar.ItemAlterado, this.OnAlterouItem, this);
        }
        if (this.cboDivergencias && this.cboDivergencias.Combo) {
            adicionarEventoMoura(this.cboDivergencias.SelectedItemChanged, this.OnMudouComboDivergencias, this);
        }
        if (this.grdDebitosCreditos) {
            adicionarEventoMoura(this.grdDebitosCreditos.AdicionandoItem, this.OnAdicionandoDebitoCredito, this);
            adicionarEventoMoura(this.grdDebitosCreditos.AlterandoItem, this.OnAdicionandoDebitoCredito, this);
            adicionarEventoMoura(this.grdDebitosCreditos.Grid.SelecionouLinha, this.OnSelecionouLinhaDebitoCredito, this);
            adicionarEventoMoura(this.grdDebitosCreditos.LimpouItem, this.OnNovoDebitoCredito, this);
            adicionarEventoMoura(this.grdDebitosCreditos.ItemAdicionado, this.OnAdicionouDebitoCredito, this);
            adicionarEventoMoura(this.grdDebitosCreditos.ItemExcluido, this.OnExcluiuDebitoCredito, this);
        }
        if (this.grdSubDesag) {
            adicionarEventoMoura(this.grdSubDesag.RowValidating, this.OnEditouItemProduto, this);
        }
    };
    C_Entrad.prototype.OnAdicionouDebitoCredito = function () {
        this.CalcularTotalNota(this.EntityTela);
    };
    C_Entrad.prototype.OnExcluiuDebitoCredito = function () {
        this.CalcularTotalNota(this.EntityTela);
    };
    C_Entrad.prototype.OnMudouComboDivergencias = function () {
        var novaLista = [];
        if (this.cboDivergencias.GetValue() == "U") {
            for (var i = 0; i < this.itensPedido.length; i++) {
                if (this.itensPedido[i].PrecoDiferente) {
                    novaLista.push(this.itensPedido[i]);
                }
            }
            this.grdConferenciaPedidos.PreencherGrid(novaLista);
        }
        else if (this.cboDivergencias.GetValue() == "Q") {
            for (var i = 0; i < this.itensPedido.length; i++) {
                if (this.itensPedido[i].QuantidadeDiferente) {
                    novaLista.push(this.itensPedido[i]);
                }
            }
            this.grdConferenciaPedidos.PreencherGrid(novaLista);
        }
        else if (this.cboDivergencias.GetValue() == "P") {
            for (var i = 0; i < this.itensPedido.length; i++) {
                if (this.itensPedido[i].NaoExisteEntrada || this.itensPedido[i].NaoExistePedido) {
                    novaLista.push(this.itensPedido[i]);
                }
            }
            this.grdConferenciaPedidos.PreencherGrid(novaLista);
        }
        else {
            this.grdConferenciaPedidos.PreencherGrid(this.itensPedido);
        }
    };
    C_Entrad.prototype.OnClickBotaoGrdDuplicata = function (s, e) {
        //e.data.Parcela
        if (e.commandName = "alterar_conta_contabil") {
            this.txtConta.Limpar();
            this.mdAlterarContaContabil.Show();
            this.hdnDuplicata.value = e.rowIndex.toString();
        }
    };
    C_Entrad.prototype.OnClickOkConferencia = function () {
        this.mdConferirPedido.Hide();
        this.ImportarProdutos();
    };
    C_Entrad.prototype.OnClickCancelarConferencia = function () {
        this.mdConferirPedido.Hide();
    };
    C_Entrad.prototype.OnClickOkAlterarContaContabil = function () {
        this.Duplicatas[this.hdnDuplicata.value.CNum()].Codigo_Conta_Contabil = this.txtConta.GetText().CNum();
        this.Duplicatas[this.hdnDuplicata.value.CNum()].Descricao_Conta_Contabil = this.txtConta.GetResultado();
        this.mdAlterarContaContabil.Hide();
        this.RefreshAngular();
        this.grdDuplicata.Grid.Refresh();
    };
    C_Entrad.prototype.OnClickCancelarAlterarContaContabil = function () {
        this.mdAlterarContaContabil.Hide();
    };
    C_Entrad.prototype.OnTipoEntradaMudou = function (s, e) {
        var flag = false;
        if (this.cboTipoEntrada.GetText() == "Transferência") {
            flag = true;
        }
        this.grdProduto.Grid.ColunaVisible("Fornecedor", flag);
        this.grdProduto.Grid.ColunaVisible(this.grdProduto.Grid.GetColunaByName("botaoTemplate_informar_fornecedor"), flag);
    };
    C_Entrad.prototype.GetScope = function () {
        return _super.prototype.GetScope.call(this);
    };
    C_Entrad.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.Limpar();
        var parametros;
        parametros = {
            codUsuario: ValoresSismoura.UsuarioLogado
        };
        var isAutorizado = this.ExecutarFuncaoServerSideSynch("isGrupoAutorizadoXmlProduto", parametros);
        //this.AlteraHabilitou(isAutorizado);
        this.grdProduto.Grid.ColunaVisible("Fornecedor", false);
        this.grdProduto.Grid.ColunaVisible(this.grdProduto.Grid.GetColunaByName("botaoTemplate_informar_fornecedor"), false);
        if (this.grdProduto && this.grdProduto.Grid) {
            if (ValoresSismoura.ConfiguracoesRetaguarda.Entrada_Tipo_Ordenacao == "Inserção") {
                this.grdProduto.Grid.OrderBy("Codigo", "asc");
            }
            else if (ValoresSismoura.ConfiguracoesRetaguarda.Entrada_Tipo_Ordenacao == "Nome do Produto") {
                this.grdProduto.Grid.OrderBy("Descricao_Produto", "asc");
            }
            else if (ValoresSismoura.ConfiguracoesRetaguarda.Entrada_Tipo_Ordenacao == "Código do Produto") {
                this.grdProduto.Grid.OrderBy("Codigo_Produto", "asc");
            }
        }
        if (!this.GetScope().AlterouTipoNota) {
            this.GetScope().AlterouTipoNota = $.proxy(this.AlterouTipoNota, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Tipo_Nf; }, this.GetScope().AlterouTipoNota);
        }
        if (!this.GetScope().AlterouValorServico) {
            this.GetScope().AlterouValorServico = $.proxy(this.AlterouValorServico, this);
            this.GetScope().$watch(function (scope) { return scope.Servico.Valor_Unitario; }, this.GetScope().AlterouValorServico);
            this.GetScope().$watch(function (scope) { return scope.Servico.Quantidade; }, this.GetScope().AlterouValorServico);
        }
        if (!this.GetScope().AlterouPisServico) {
            this.GetScope().AlterouPisServico = $.proxy(this.AlterouPisServico, this);
            this.GetScope().$watch(function (scope) { return scope.Servico.Aliq_Pis; }, this.GetScope().AlterouPisServico);
        }
        if (!this.GetScope().AlterouCofinsServico) {
            this.GetScope().AlterouCofinsServico = $.proxy(this.AlterouCofinsServico, this);
            this.GetScope().$watch(function (scope) { return scope.Servico.Aliq_Cofins; }, this.GetScope().AlterouCofinsServico);
        }
        if (!this.GetScope().AlterouISSServico) {
            this.GetScope().AlterouISSServico = $.proxy(this.AlterouISSServico, this);
            this.GetScope().$watch(function (scope) { return scope.Servico.Iss_P; }, this.GetScope().AlterouISSServico);
        }
        if (!this.GetScope().AlterouDescontoVProduto) {
            this.GetScope().AlterouDescontoVProduto = $.proxy(this.AlterouDescontoVProduto, this);
            this.GetScope().$watch(function (scope) { return scope.Produto.Valor_Desconto; }, this.GetScope().AlterouDescontoVProduto);
        }
        if (!this.GetScope().AlterouDescontoPProduto) {
            this.GetScope().AlterouDescontoPProduto = $.proxy(this.AlterouDescontoPProduto, this);
            this.GetScope().$watch(function (scope) { return scope.Produto.Desconto_P; }, this.GetScope().AlterouDescontoPProduto);
        }
        if (!this.GetScope().AlterouEncargosProduto) {
            this.GetScope().AlterouEncargosProduto = $.proxy(this.AlterouEncargosProduto, this);
            this.GetScope().$watch(function (scope) { return scope.Produto.Encargos_Financeiros; }, this.GetScope().AlterouEncargosProduto);
        }
        if (!this.GetScope().mudouValorSeguro) {
            this.GetScope().mudouValorSeguro = $.proxy(this.mudouValorSeguro, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Valor_Seguro; }, this.GetScope().mudouValorSeguro);
        }
        if (!this.GetScope().AlterouValorUnitarioProduto) {
            this.GetScope().AlterouValorUnitarioProduto = $.proxy(this.AlterouValorUnitarioProduto, this);
            this.GetScope().$watch(function (scope) { return scope.Produto.Valor_Unitario; }, this.GetScope().AlterouValorUnitarioProduto);
        }
        if (!this.GetScope().AlterouQuantidadeProduto) {
            this.GetScope().AlterouQuantidadeProduto = $.proxy(this.AlterouQuantidadeProduto, this);
            this.GetScope().$watch(function (scope) { return scope.Produto.Quantidade; }, this.GetScope().AlterouQuantidadeProduto);
        }
        if (!this.GetScope().AlterouIPIProduto) {
            this.GetScope().AlterouIPIProduto = $.proxy(this.AlterouIPIProduto, this);
            this.GetScope().$watch(function (scope) { return scope.Produto.Aliquota_Ipi; }, this.GetScope().AlterouIPIProduto);
        }
        if (!this.GetScope().AlterouSTTIPIProduto) {
            this.GetScope().AlterouSTTIPIProduto = $.proxy(this.AlterouSTTIPIProduto, this);
            this.GetScope().$watch(function (scope) { return scope.Produto.St_Ipi; }, this.GetScope().AlterouSTTIPIProduto);
        }
        if (!this.GetScope().AlterouSTTPISProduto) {
            this.GetScope().AlterouSTTPISProduto = $.proxy(this.AlterouSTTPISProduto, this);
            this.GetScope().$watch(function (scope) { return scope.Produto.St_Pis; }, this.GetScope().AlterouSTTPISProduto);
        }
        if (!this.GetScope().AlterouSTTCofinsProduto) {
            this.GetScope().AlterouSTTCofinsProduto = $.proxy(this.AlterouSTTCofinsProduto, this);
            this.GetScope().$watch(function (scope) { return scope.Produto.St_Cofins; }, this.GetScope().AlterouSTTCofinsProduto);
        }
        if (!this.GetScope().AlterouCSTProduto) {
            this.GetScope().AlterouCSTProduto = $.proxy(this.AlterouCSTProduto, this);
            this.GetScope().$watch(function (scope) { return scope.Produto.Cst; }, this.GetScope().AlterouCSTProduto);
        }
        if (!this.GetScope().AlterouICMSProduto) {
            this.GetScope().AlterouICMSProduto = $.proxy(this.AlterouICMSProduto, this);
            this.GetScope().$watch(function (scope) { return scope.Produto.Valor_Base_Icms; }, this.GetScope().AlterouICMSProduto);
            this.GetScope().$watch(function (scope) { return scope.Produto.Aliquota_Icms; }, this.GetScope().AlterouICMSProduto);
        }
        if (!this.GetScope().AlterouPISProduto) {
            this.GetScope().AlterouPISProduto = $.proxy(this.AlterouPISProduto, this);
            this.GetScope().$watch(function (scope) { return scope.Produto.Base_Pis; }, this.GetScope().AlterouPISProduto);
            this.GetScope().$watch(function (scope) { return scope.Produto.Aliquota_Pis; }, this.GetScope().AlterouPISProduto);
        }
        if (!this.GetScope().AlterouIcmsSTProduto) {
            this.GetScope().AlterouIcmsSTProduto = $.proxy(this.AlterouIcmsSTProduto, this);
            this.GetScope().$watch(function (scope) { return scope.Produto.Base_Icms_St; }, this.GetScope().AlterouIcmsSTProduto);
        }
        if (!this.GetScope().AlterouCofinsProduto) {
            this.GetScope().AlterouCofinsProduto = $.proxy(this.AlterouCofinsProduto, this);
            this.GetScope().$watch(function (scope) { return scope.Produto.Base_Cofins; }, this.GetScope().AlterouCofinsProduto);
            this.GetScope().$watch(function (scope) { return scope.Produto.Aliquota_Cofins; }, this.GetScope().AlterouCofinsProduto);
        }
        if (!this.GetScope().AlterouModeloNota) {
            this.GetScope().AlterouModeloNota = $.proxy(this.AlterouModeloNota, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Modelo_Nota; }, this.GetScope().AlterouModeloNota);
        }
        if (!this.GetScope().AlterouDescontoNota) {
            this.GetScope().AlterouDescontoNota = $.proxy(this.AlterouDescontoNota, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Desconto; }, this.GetScope().AlterouDescontoNota);
        }
        if (!this.GetScope().OnPesquisandoContaContabil) {
            this.GetScope().OnPesquisandoContaContabil = $.proxy(this.OnPesquisandoContaContabil, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Conta_Contabil; }, this.GetScope().OnPesquisandoContaContabil);
        }
        if (!this.GetScope().OnAlterouAjusteOrigem) {
            this.GetScope().OnAlterouAjusteOrigem = $.proxy(this.OnAlterouAjusteOrigem, this);
            this.GetScope().$watch(function (scope) { return scope.EntradaProdutoAjuste.Origem; }, this.GetScope().OnAlterouAjusteOrigem);
        }
        if (!this.GetScope().OnAlterouAjusteMotivo) {
            this.GetScope().OnAlterouAjusteMotivo = $.proxy(this.OnAlterouAjusteMotivo, this);
            this.GetScope().$watch(function (scope) { return scope.EntradaProdutoAjuste.Motivo; }, this.GetScope().OnAlterouAjusteMotivo);
        }
        this.PreencherEmpresaContabil(ValoresSismoura.EmpresaPadraoUsuario);
        this.CarregarAbaDuplicatas();
        this.VerificaNCM();
    };
    C_Entrad.prototype.AlterouTipoNota = function (newValue, oldValue) {
        this.CorrigirCamposNf();
    };
    C_Entrad.prototype.AlterouValorServico = function (newValue, oldValue) {
        this.CalcularTotalServico(this.Servico);
    };
    C_Entrad.prototype.AlterouPisServico = function (newValue, oldValue) {
        this.CalcularPISServico(this.Servico);
    };
    C_Entrad.prototype.AlterouCofinsServico = function (newValue, oldValue) {
        this.CalcularCOFINSServico(this.Servico);
    };
    C_Entrad.prototype.AlterouISSServico = function (newValue, oldValue) {
        this.CalcularISSServico(this.Servico);
    };
    C_Entrad.prototype.AlterouDescontoPProduto = function (newValue, oldValue) {
        this.OnAlterouDescontoPProduto(this.Produto);
    };
    C_Entrad.prototype.AlterouDescontoVProduto = function (newValue, oldValue) {
        this.CalcularValorDescontoPorcentagemProduto(this.Produto);
        this.CalcularTotalProduto(this.Produto);
    };
    C_Entrad.prototype.AlterouEncargosProduto = function (newValue, oldValue) {
        this.CalcularTotalProduto(this.Produto);
    };
    C_Entrad.prototype.AlterouValorUnitarioProduto = function (newValue, oldValue) {
        this.CalcularValorDescontoProduto(this.Produto);
        this.CalcularValorDescontoPorcentagemProduto(this.Produto);
        this.CalcularTotalProduto(this.Produto);
        this.PreencherBaseImpostosProduto();
    };
    C_Entrad.prototype.AlterouQuantidadeProduto = function (newValue, oldValue) {
        this.CalcularValorDescontoProduto(this.Produto);
        this.CalcularValorDescontoPorcentagemProduto(this.Produto);
        this.CalcularTotalProduto(this.Produto);
        this.PreencherBaseImpostosProduto();
    };
    C_Entrad.prototype.AlterouIPIProduto = function (newValue, oldValue) {
        this.CalcularIPIPorcentagemProduto(this.Produto);
    };
    C_Entrad.prototype.AlterouSTTIPIProduto = function (newValue, oldValue) {
        this.OnAlterouSTTIPIProduto(this.Produto);
    };
    C_Entrad.prototype.AlterouSTTPISProduto = function (newValue, oldValue) {
        this.OnAlterouSTPisProduto(this.Produto);
    };
    C_Entrad.prototype.AlterouSTTCofinsProduto = function (newValue, oldValue) {
        this.OnAlterouSTCofinsProduto(this.Produto);
    };
    C_Entrad.prototype.AlterouCSTProduto = function (newValue, oldValue) {
        this.OnAlterouCSTProduto(this.Produto);
    };
    C_Entrad.prototype.AlterouICMSProduto = function (newValue, oldValue) {
        this.RecalcularValorIcms(this.Produto);
    };
    C_Entrad.prototype.AlterouPISProduto = function (newValue, oldValue) {
        this.RecalcularValorPisProduto(this.Produto);
    };
    C_Entrad.prototype.AlterouIcmsSTProduto = function (newValue, oldValue) {
        this.RecalcularValorIcmsStProduto(this.Produto);
    };
    C_Entrad.prototype.AlterouCofinsProduto = function (newValue, oldValue) {
        this.RecalcularValorCofinsProduto(this.Produto);
    };
    C_Entrad.prototype.AlteraHabilitou = function (flag) {
        this.cboTipoNF.Enabled = flag;
        this.txtNota.Enabled = flag;
        this.txtSerie.Enabled = flag;
        this.txtFornecedor.Enabled = flag;
        this.txtDataEmissaoD.Enabled = flag;
        this.cboEmpresa.Enabled = flag;
        this.txtChaveNFE.Enabled = flag;
        this.btnAdicionarProduto.Visible = flag;
        this.btnAdicionarServico.Visible = flag;
        this.tab.AlterarVisibleAba("AbaObservacao", flag);
        this.tab.AlterarVisibleAba("AbaTransportadora", flag);
        this.tab.AlterarVisibleAba("AbaInformacoes", flag);
        this.grdProduto.Grid.ColunaVisible(this.grdProduto.Grid.CampoID, flag);
        this.grdServico.Grid.ColunaVisible(this.grdServico.Grid.CampoID, flag);
    };
    C_Entrad.prototype.AlterouModeloNota = function (newValue, oldValue) {
        if (!this.EntityTela)
            return;
        if (CNum(this.EntityTela.Modelo_Nota) == 55 || CNum(this.EntityTela.Modelo_Nota) == 57) {
            this.txtChaveNFE.Textbox.readOnly = false;
        }
        else {
            this.EntityTela.Chave_Nfe = "";
            this.txtChaveNFE.Textbox.readOnly = true;
        }
        this.RefreshAngular();
    };
    C_Entrad.prototype.AlterouDescontoNota = function (newValue, oldValue) {
        this.CalcularTotalNota(this.EntityTela);
    };
    C_Entrad.prototype.OnComboTipoDiasSelectedIndexChanged = function () {
        if (this.cboTipoDias.GetValue() == "V" || this.txtVencInicial.Date == null) {
            this.txtDias.SetText("0");
        }
        else {
            this.txtDias.SetText(this.txtVencInicial.Date.getDate().toString());
        }
    };
    C_Entrad.prototype.OnTextBoxDiasVencimentoChange = function () {
        var dataResult;
        dataResult = new Date();
        dataResult.setDate(this.dataBase().getDate() + this.txtDiasVencimento.GetText().CNum());
        this.txtVencInicial.Date = dataResult;
    };
    C_Entrad.prototype.OntextBoxVencInicialChange = function () {
        var diff;
        if (this.txtVencInicial.Date != null) {
            diff = this.daysBetween(this.dataBase(), this.txtVencInicial.Date);
        }
        else {
            diff = 0;
        }
        this.txtDiasVencimento.Textbox.value = diff.toString();
    };
    C_Entrad.prototype.daysBetween = function (startDate, endDate) {
        // 24 * 60 * 60 * 1000;
        var millisecDia = 86400000;
        return Math.round((endDate - startDate) / millisecDia);
    };
    C_Entrad.prototype.dataBase = function () {
        var base;
        // 0 = Data atual
        // 1 = Data de emissão
        if (this.hdnEntradaDataEmissao.value.CNum() == 0 || this.txtDataEmissaoD.Date == null) {
            base = new Date();
        }
        else {
            base = this.txtDataEmissaoD.Date;
        }
        return new Date(base.getFullYear(), base.getMonth(), base.getDate());
    };
    C_Entrad.prototype.OnTextBoxNotaChange = function () {
        return this.ObterInformacoesNota();
    };
    C_Entrad.prototype.OnTextBoxSerieChange = function () {
        return this.ObterInformacoesNota();
    };
    C_Entrad.prototype.OnTextBoxFornecedorPesquisou = function () {
        return this.ObterInformacoesNota();
    };
    C_Entrad.prototype.ObterInformacoesNota = function () {
        try {
            var parametros;
            if (this.txtNota.GetText().CNum() == 0 || this.txtFornecedor.GetText().CNum() == 0)
                return;
            parametros = {
                numeroNota: this.txtNota.GetText().CNum(),
                serie: this.txtSerie.GetText(),
                codFornecedor: this.txtFornecedor.GetText().CNum()
            };
            var codigo = "" + this.ExecutarFuncaoServerSideSynch("ObterChaveNota", parametros);
            if (codigo.CNum() > 0) {
                this.PreencherEntidade(codigo);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnClickBotaoAdicionarServico = function (s, e) {
        e.processOnServer = false;
        if (this.mdServicos) {
            this.mdServicos.ModalDialog.Show();
            this.OnComboBoxTipoServicoChange();
            this.OncboSTPisServicoSelectedIndexChanged();
            this.OncboSTCOFINSServicoSelectedIndexChanged();
            if (this.txtServico) {
                this.txtServico.Focus();
            }
        }
        return false;
    };
    C_Entrad.prototype.OncboSTPisServicoSelectedIndexChanged = function () {
        var zero = 0;
        if (this.cboSTPisServico.GetValue() == "70" || this.cboSTPisServico.GetValue() == "71" || this.cboSTPisServico.GetValue() == "72" || this.cboSTPisServico.GetValue() == "73" || this.cboSTPisServico.GetValue() == "74" || this.cboSTPisServico.GetValue() == "75") {
            this.txtAliquotaPISServico.Textbox.readOnly = true;
            this.txtAliquotaPISServico.Textbox.value = zero.Format(this.txtAliquotaPIS.QuantidadeCasas);
            this.txtValorPISServico.Textbox.readOnly = true;
            this.txtValorPISServico.Textbox.value = zero.Format(this.txtValorPIS.QuantidadeCasas);
        }
        else {
            this.txtAliquotaPISServico.Textbox.readOnly = false;
            this.txtValorPISServico.Textbox.readOnly = false;
        }
    };
    C_Entrad.prototype.OncboSTCOFINSServicoSelectedIndexChanged = function () {
        var zero = 0;
        if (this.cboSTCofinsServico.GetValue() == "70" || this.cboSTCofinsServico.GetValue() == "71" || this.cboSTCofinsServico.GetValue() == "72" || this.cboSTCofinsServico.GetValue() == "73" || this.cboSTCofinsServico.GetValue() == "74" || this.cboSTCofinsServico.GetValue() == "75") {
            this.txtAliquotaCOFINSServico.Textbox.readOnly = true;
            this.txtAliquotaCOFINSServico.Textbox.value = zero.Format(this.txtAliquotaCOFINS.QuantidadeCasas);
            this.txtValorCofinsServico.Textbox.readOnly = true;
            this.txtValorCofinsServico.Textbox.value = zero.Format(this.txtValorCOFINS.QuantidadeCasas);
        }
        else {
            this.txtAliquotaCOFINSServico.Textbox.readOnly = false;
            this.txtValorCofinsServico.Textbox.readOnly = false;
        }
    };
    C_Entrad.prototype.OnComboBoxEmpresaChange = function () {
        this.AtualizarDeposito(this.EntityTela, this.cboEmpresa.GetValue(), true);
        if (this.txtTipoLancamentoContabil) {
            this.txtTipoLancamentoContabil.Limpar();
            this.txtTipoLancamentoContabil.LimparParametros();
            if (this.txtTipoLancamentoContabil.Visible) {
                this.txtTipoLancamentoContabil.AddParametro("TipoConfiguracaoContabil", "CM");
                this.txtTipoLancamentoContabil.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
            }
        }
        this.PreencherEmpresaContabil(this.cboContaCorrente.GetEmpresa());
        this.RefreshAngular();
        //var parametros: any = {
        //    codEmpresa: this.cboEmpresa.GetValue()
        //}
        //var dataSource = this.ExecutarFuncaoServerSideSynch("RetornaContaCorrenteEmpresa", parametros);
        //if (dataSource) {
        //    this.grdDuplicata.Grid.AlterarDataSourceColunaCombo("Conta_Corrente", dataSource);
        //}
        //this.grdDuplicata.Grid.Refresh();
        //this.RefreshAngular();
    };
    C_Entrad.prototype.PreencherEmpresaContabil = function (codEmpresa) {
        if (this.txtTipoLancamentoContabil_hdnEmpresaContabil != undefined) {
            this.txtTipoLancamentoContabil_hdnEmpresaContabil.value = codEmpresa;
        }
    };
    C_Entrad.prototype.OnIniciouComboDeposito = function () {
        if (!this.EntityTela) {
            return;
        }
        this.AtualizarDeposito(this.EntityTela, this.EntityTela.Empresa, true);
        this.RefreshAngular();
    };
    C_Entrad.prototype.AtualizarDeposito = function (Entity, codEmpresa, atualizarDeposito) {
        var parametros;
        var itens;
        if (!codEmpresa) {
            codEmpresa = 0;
        }
        parametros = {
            codEmpresa: codEmpresa,
            inativo: false
        };
        itens = this.ExecutarFuncaoServerSideSynch("PreencherComboDeposito", parametros);
        if (this.cboDeposito && this.cboDeposito.Combo) {
            this.cboDeposito.ClearItems();
            if (atualizarDeposito) {
                if (Entity) {
                    Entity.Deposito = null;
                }
            }
            var depositoAtual;
            for (var x = 0; x < itens.length; x++) {
                this.cboDeposito.Combo.AddItem(itens[x].Descricao, itens[x].Codigo, "");
                if (x == 0) {
                    depositoAtual = CNum(itens[x].Codigo);
                }
                if (itens[x].Codigo == ValoresSismoura.DepositoPadrao) {
                    depositoAtual = CNum(itens[x].Codigo);
                }
            }
            //if (itens.length == 1) { //se houver somente um deposito, seleciona
            if (atualizarDeposito) {
                if (Entity) {
                    Entity.Deposito = depositoAtual;
                    this.cboDeposito.SetValue(depositoAtual);
                }
            }
            //}            
        }
    };
    C_Entrad.prototype.OnPesquisouDadosServico = function (s, e) {
        try {
            var retorno;
            var valor = 0;
            var that = this;
            var entidadeServico = this.ObterDadosProduto(this.txtServico.GetText().CNum());
            if (entidadeServico) {
                if (entidadeServico.Servico_Pet) {
                    MsgBoxJS("O produto selecionado é um serviço do Petshop. Para dar entrada em um serviço,\r\ncadastre-o pelo módulo Compras > Estoque > Produto > Cad. de Produto e marque a opção 'Serviço'", MsgBoxOptions.OkOnly, MsgBoxIcon.Info, function (result) {
                        setTimeout(function () { that.txtServico.Focus(); }, 200);
                    }, null);
                    this.grdServico.Limpar();
                    return;
                }
                valor = entidadeServico.Preco_Custo;
            }
            this.Servico.Valor_Unitario = valor;
            this.CalcularTotalServico(this.Servico);
            this.CalcularISSServico(this.Servico);
            this.CalcularPISServico(this.Servico);
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnComboBoxTipoServicoChange = function () {
        if (this.cboTipoServico.GetValue() == 6) {
            this.txtICMSServP.Visible = true;
            this.txtICMSServR.Visible = true;
            this.txtCifFob.Visible = true;
            //this.txtISSP.Visible = true;
            //this.txtISSR.Visible = true;
        }
        else {
            this.txtICMSServP.Visible = false;
            this.txtICMSServR.Visible = false;
            this.txtCifFob.Visible = false;
            //this.txtISSP.Visible = false;
            //this.txtISSR.Visible = false;
        }
    };
    C_Entrad.prototype.CalcularTotalNota = function (EntityEntrada) {
        try {
            //Calcula o total de servicos
            var totalServicos = 0, totalProdutos = 0;
            var total = 0;
            var entity = EntityEntrada;
            if (!entity) {
                this.lblTotalNota.Text = (0).Format(2);
                this.txtTotalServico.SetText((0).Format(2));
                return;
            }
            this.RatearConfiguracoesEntrada();
            totalServicos = this.Servicos.Sum("Valor_Total");
            totalProdutos = this.Produtos.Sum("Valor_Bruto");
            this.txtTotalServico.SetText(totalServicos.Format(2));
            if (!entity.Despesas) {
                entity.Despesas = 0;
            }
            if (!entity.Valor_Frete) {
                entity.Valor_Frete = 0;
            }
            if (!entity.Valor_Ipi) {
                entity.Valor_Ipi = 0;
            }
            if (!entity.Valor_Subst) {
                entity.Valor_Subst = 0;
            }
            if (!entity.Desconto) {
                entity.Desconto = 0;
            }
            if (!entity.Valor_Seguro) {
                entity.Valor_Seguro = 0;
            }
            entity.Valor_Produtos = this.Produtos.Sum("Valor_Bruto");
            entity.Valor_Subst = this.Produtos.Sum("Icms_St_Un");
            entity.Valor_Ipi = this.Produtos.Sum("Valor_Ipi");
            entity.Valor_Nf_Dolar = this.Produtos.Sum("Valor_Unit_Dolar");
            entity.Valor_Ajuste = this.EntradaProdutoAjustes.length > 0 ? this.Produtos.Sum("Valor_Ajuste") : 0;
            this.txtSomaDescontoUnitario.SetText(this.Produtos.Sum("Valor_Desconto").Format(ValoresSismoura.CasasDecimaisValor));
            total = totalProdutos + entity.Despesas + entity.Valor_Ipi + entity.Valor_Subst - entity.Desconto - entity.Valor_Ajuste;
            if (entity.Frete_Incluso) {
                total += entity.Valor_Frete;
            }
            if (entity.Ulti_Vseguro) {
                total += entity.Valor_Seguro;
            }
            total += totalServicos;
            entity.Valor_Nota = total;
            this.lblTotalNota.Text = total.Format(2);
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.CorrigirCamposNf = function () {
        try {
            var entity = this.EntityTela;
            if (!entity) {
                return;
            }
            if (!entity.Tipo_Nf) {
                entity.Tipo_Nf = 0;
                this.grdProduto.Grid.ColunaVisible("Valor_Unit_Dolar", false);
                this.grdProduto.Grid.ColunaVisible("Valor_Total_Dolar", false);
            }
            if (entity.Tipo_Nf == 0) {
                this.grdProduto.Grid.ColunaVisible("Valor_Unit_Dolar", false);
                this.grdProduto.Grid.ColunaVisible("Valor_Total_Dolar", false);
            }
            //recibo
            if (entity.Tipo_Nf == 1) {
                if (!entity.Chave) { //so muda o numero da nota se ela ainda não estiver salva
                    entity.Nota_Fiscal = this.GeraNumeroRecibo();
                }
                entity.Cfop = "";
                this.cboCFOP.SetTextLabelControl("CFOP");
                this.cboCFOP.Enabled = false;
                this.cboCST.LimparSelecao();
                this.cboCST.Enabled = false;
                this.cboCST.SetTextLabelControl("CST");
                this.txtIcmsStR.ReadOnly = true;
                this.txtIcmsStP.ReadOnly = true;
                this.txtICMS.ReadOnly = true;
                this.cboSTIPI.Enabled = false;
                this.txtIPIP.ReadOnly = true;
                this.txtIPIR.ReadOnly = true;
                this.txtBaseICMSR.ReadOnly = true;
                this.cboSTCOFINS.LimparSelecao();
                this.cboSTCOFINS.Enabled = false;
                this.cboSTPis.LimparSelecao();
                this.cboSTPis.Enabled = false;
                this.txtBasePIS.ReadOnly = true;
                this.txtAliquotaPIS.ReadOnly = true;
                this.txtValorPIS.ReadOnly = true;
                this.txtBaseCOFINS.ReadOnly = true;
                this.txtValorCOFINS.ReadOnly = true;
                this.txtAliquotaCOFINS.ReadOnly = true;
                this.txtTipoLancamentoContabil.Visible = false;
                this.OnCalcularDolar();
            }
            else { //NF
                if (!entity.Chave) { //so muda o numero da nota se ela ainda não estiver salva
                    entity.Nota_Fiscal = "";
                }
                this.txtTipoLancamentoContabil.Visible = ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_Modulo_Contabil;
                this.cboCFOP.Enabled = true;
                this.cboCFOP.SetTextLabelControl("* CFOP");
                this.txtIcmsStR.ReadOnly = false;
                this.txtIcmsStP.ReadOnly = false;
                this.cboCST.Enabled = true;
                this.cboCST.SetTextLabelControl("* CST");
                this.cboSTIPI.Enabled = true;
                this.txtICMS.ReadOnly = false;
                this.txtIPIP.ReadOnly = false;
                this.txtIPIR.ReadOnly = false;
                this.txtBaseICMSR.ReadOnly = false;
                this.cboSTCOFINS.Enabled = true;
                this.cboSTPis.Enabled = true;
                this.txtBasePIS.ReadOnly = false;
                this.txtAliquotaPIS.ReadOnly = false;
                this.txtValorPIS.ReadOnly = false;
                this.txtBaseCOFINS.ReadOnly = false;
                this.txtValorCOFINS.ReadOnly = false;
                this.txtAliquotaCOFINS.ReadOnly = false;
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.GeraNumeroRecibo = function () {
        try {
            var parametros = {};
            return this.ExecutarFuncaoServerSideSynch("GeraNumeroRecibo", parametros);
        }
        catch (ex) {
            return "";
        }
    };
    C_Entrad.prototype.OnAntesDeletar = function () {
        if (!this.respondeuContasPagar) {
            if (this.hdnPossuiContasPagar.value == "1") {
                MsgBoxJS("Atenção! Existem contas a pagar relacionadas a essa entrada:<BR />" + this.hdnPossuiContasPagar.value + " Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.RespostaContasPagar, this));
                return false;
            }
        }
        else {
            this.respondeuContasPagar = false;
        }
        return _super.prototype.OnAntesDeletar.call(this);
    };
    C_Entrad.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        var dataServidor = this.DataServidor();
        this.LimparValidacoesGravar();
        Entity.Tipo_Nf = 0;
        Entity.Data_Emissao = dataServidor;
        Entity.Data_Entrada = dataServidor;
        if (ValoresSismoura.EmpresaPadraoUsuario) {
            Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        }
        else {
            Entity.Empresa = null;
        }
        if (this.cboDeposito && this.cboDeposito.Combo && this.cboDeposito.Combo.isInitialized) {
            this.AtualizarDeposito(Entity, Entity.Empresa, true);
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.Modelo_Nota.CNum() > 0) {
            Entity.Modelo_Nota = ValoresSismoura.ConfiguracoesRetaguarda.Modelo_Nota.CNum();
        }
        else {
            Entity.Modelo_Nota = 1;
        }
        this.txtNota.Disabled = false;
        this.txtFornecedor.Disabled = false;
        this.txtSerie.Disabled = false;
        this.cboTipoNF.Enabled = true;
        Entity.Tipo_Entrada = 0;
        Entity.Forma_Pagamento = 1;
        Entity.EntradaProdutoItens = [];
        Entity.EntradaServicos = [];
        Entity.EntradaProdutoItensTanque = [];
        Entity.ContasPagar = [];
        if (ValoresSismoura.ConfiguracoesRetaguarda.Entrada_Produto_Escriturar) {
            Entity.Sped_Enviar_Icms = false;
        }
        else {
            Entity.Sped_Enviar_Icms = true;
        }
        this.chkEnviarIcmsSped.Checked = (!Entity.Sped_Enviar_Icms);
        this.rdTipoRateio.SetValue("V");
        this.Produtos = [];
        this.Servicos = [];
        this.Duplicatas = [];
        this.itensPedido = [];
        this.ListaRateioCC = [];
        this.ListaRateioCombustivel = [];
        this.ListaUnitarizados = [];
        this.EntradaProdutoAjustes = [];
        this.GetScope().EntradaProdutoAjuste = {};
        this.BloquearCamposDebitoCredito(false);
        this.lstPedidos.RemoverTodosItens();
        this.LimparCamposImportarXML();
        this.PathXMLImportado = "";
        this.ItemNFEAtual = null;
        this.dlgLote.Limpar();
        this.grdServico.Limpar();
        this.grdProduto.Limpar();
        //this.grdDuplicata.PreencherGrid([]);
        this.OnComboBoxTipoServicoChange();
        this.respondeuContasPagar = false;
        this.idLinhaProdutoContaContabil = null;
        this.CorrigirCamposNf();
        this.CalcularTotalNota(Entity);
        this.CarregarAbaDuplicatas();
        this.AlterarVisibilidadeImportacao();
        this.txtChaveAcessoImportar.Limpar();
        if (ValoresSismoura.ConfiguracoesRetaguarda.Solicar_Fatura_XML) {
            this.isPossuiFaturaXML = false;
        }
        else {
            this.isPossuiFaturaXML = true;
        }
        this.itemClicado = {};
    };
    C_Entrad.prototype.LimparValidacoesGravar = function () {
        this.ValidacoesEntrada = {};
        this.ValidacoesEntrada.GravandoNota = false;
        this.ValidacoesEntrada.ValidouLotes = false;
        this.ValidacoesEntrada.ValidouCombustivel = false;
        this.ValidacoesEntrada.ValidouDuplicata = false;
        this.ValidacoesEntrada.ValidouEntradaDataAnterior = false;
    };
    C_Entrad.prototype.OnDepoisBuscarExistente = function (Entidade) {
        var _this = this;
        try {
            _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
            this.custo = [];
            var parametros = {
                chave: ("" + Entidade.Chave).CNum(),
            };
            this.LimparValidacoesGravar();
            Entidade.Data_Cadastro = ConvertToDate(Entidade.Data_Cadastro);
            Entidade.Data_Emissao = ConvertToDate(Entidade.Data_Emissao);
            Entidade.Data_Entrada = ConvertToDate(Entidade.Data_Entrada);
            var InformacoesAdicionais = this.ExecutarFuncaoServerSideSynch("GetInformacoesAdicionaisNota", parametros);
            this.Servicos = InformacoesAdicionais.Servicos;
            for (var x = 0; x <= this.Servicos.length - 1; x++) {
                this.Servicos[x].Descricao_Tipo_Servico = this.cboTipoServico.Combo.GetItem(this.Servicos[x].Tipo_Servico).text;
            }
            this.Produtos = InformacoesAdicionais.Produtos;
            for (var x_1 = 0; x_1 < this.Produtos.length; x_1++) {
                this.Produtos[x_1].MovEntradaDesag = Entidade.EntradaProdutoItens[x_1].MovEntradaDesag;
            }
            this.Duplicatas = InformacoesAdicionais.Duplicatas;
            this.ListaRateioCombustivel = InformacoesAdicionais.Combustiveis;
            if (Entidade.ContasPagar[0]) {
                var qtdeContasPagar = Entidade.ContasPagar.length;
                for (var x = 0; x <= qtdeContasPagar - 1; x++) {
                    for (var y = 0; y <= Entidade.ContasPagar[x].CentrosCusto.length - 1; y++) {
                        Entidade.ContasPagar[x].CentrosCusto[y].Valor *= qtdeContasPagar;
                    }
                }
                this.ListaRateioCC = Entidade.ContasPagar[0].CentrosCusto;
            }
            if (this.ListaRateioCC) {
                for (var i = 0; i < this.ListaRateioCC.length; i++) {
                    var parametros = {
                        codigo: this.ListaRateioCC[i].Centro_Custo
                    };
                    this.ListaRateioCC[i].Centro_Custo_Descricao = this.ExecutarFuncaoServerSideSynch("GetDescricaoCentroCusto", parametros);
                }
            }
            if (Entidade.ContasPagar[0]) {
                this.cboContaCorrente.SetContaCorrente(Entidade.ContasPagar[0].Conta_Corrente);
            }
            else {
                this.cboContaCorrente.AtualizarLabels();
            }
            var bkpDeposito = Entidade.Deposito;
            Entidade.Deposito = 0;
            this.AtualizarDeposito(Entidade, Entidade.Empresa, false);
            //O sistema precisa enviar o deposito novamente, pois a combo tem que ser preenchida
            setTimeout(function () {
                //Força a combo de deposito ser preenchida com o depósito. Algumas vezes a combo ficava em branco
                _this.EntityTela.Deposito = bkpDeposito;
                _this.RefreshAngular();
            }, 100);
            this.chkEnviarIcmsSped.Checked = (!Entidade.Sped_Enviar_Icms);
            this.txtNota.Disabled = true;
            this.txtFornecedor.Disabled = true;
            this.txtSerie.Disabled = true;
            this.cboTipoNF.Enabled = false;
            var ajustes = Entidade.EntradaProdutoAjustes;
            for (x = 0; x < ajustes.length; x++) {
                var textoOrigem = this.GetTextoOrigem(ajustes[x].Origem);
                var textoMotivo = this.GetTextoMotivo(ajustes[x].Motivo);
                ajustes[x].Origem_Descricao = ajustes[x].Origem + ((textoOrigem != "") ? "-" + textoOrigem : "");
                ajustes[x].Motivo_Descricao = ajustes[x].Motivo + ((textoMotivo != "") ? "-" + textoMotivo : "");
                if (this.txtCodigoAjuste.GetByIdProcura(ajustes[x].Cod_Ajuste.toString()) != null) {
                    ajustes[x].Cod_Ajuste_Descricao = ajustes[x].Cod_Ajuste + "-" + this.txtCodigoAjuste.GetByIdProcura(ajustes[x].Cod_Ajuste.toString());
                }
                else {
                    ajustes[x].Cod_Ajuste_Descricao = "";
                }
            }
            this.GetScope().EntradaProdutoAjuste = {};
            this.BloquearCamposDebitoCredito(false);
            this.EntradaProdutoAjustes = Entidade.EntradaProdutoAjustes;
            this.CalcularTotalNota(Entidade);
            this.CalcularValorRestanteRateio();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnAntesGravar = function () {
        var _this = this;
        try {
            _super.prototype.OnAntesGravar.call(this);
            this.ValidacoesEntrada.GravandoNota = true;
            var entity = this.EntityTela;
            this.CalcularTotalNota(entity);
            entity.Sped_Enviar_Icms = !this.chkEnviarIcmsSped.Checked;
            if (!this.ValidarAntesGravar(entity)) {
                return false;
            }
            entity.EntradaProdutoAjustes = this.EntradaProdutoAjustes;
            //Public Shared Function ValidacoesAntesGravar(entidadeSTR As String, listaProdutosSTR As String) As Dictionary(Of String, Object)
            var parametros = {
                entidadeSTR: JSON.stringify(entity),
                listaProdutosSTR: JSON.stringify(this.Produtos)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ValidacoesAntesGravar", parametros);
            if (retorno.ParcelasPagas) {
                MostrarAlerta("A entrada de produtos informada possui parcela(s) paga(s).");
                return;
            }
            if (retorno.EntradaDataAnterior && !this.ValidacoesEntrada.ValidouEntradaDataAnterior) {
                MsgBoxJS("A data de entrada informada é pelo menos um mês anterior a data gravada anteriormente. <br />Isso poderá influenciar no SPED. Deseja continuar ?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                    if (result.Resultado == MsgBoxResult.Yes) {
                        _this.ValidacoesEntrada.ValidouEntradaDataAnterior = true;
                        _this.ClicarGravar();
                    }
                }, null);
                return;
            }
            this.ValidacoesEntrada.ValidouEntradaDataAnterior = true;
            if (!String.IsNullOrWhiteSpace(retorno.CombustiveisLMC)) {
                MostrarAlerta("A entrada desta nota não poderá ser realizada pois existe um LMC emitido para o(s) combustíveis: <b>" + retorno.CombustiveisLMC + "</b> na Data de Entrada informada. " +
                    "E isso causaria futuros problemas em relatórios e emissão de documentos fiscais como SPED. Para que a entrada seja realizada, " +
                    "será necessário excluir os LMCs salvos para o(s) combustíveis até a Data de Entrada informada e depois será necessário refazê-los.");
                return;
            }
            this.CalcularValorRestanteRateio();
            //Não validar para notas de bonificação
            if (this.EntityTela.Tipo_Entrada != 3 && this.isPossuiFaturaXML) {
                if (ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_Centro_Custo && this.lblValorRestanteRatear.Text.CNum() > 0) {
                    MostrarAlerta("O valor distribuído pelos centros de custo está diferente do valor da conta.");
                    return;
                }
            }
            this.PreencherProdutosEntity(entity);
            this.PreencherServicosEntity(entity);
            this.PreencherContasPagarEntity(entity);
            this.PreencherRateioCentroCusto(entity);
            if (!this.ValidacoesEntrada.ValidouLotes) {
                var retornoLote = this.VerificaProdutosControlados(entity);
                if (!retornoLote) {
                    return false;
                }
                this.ValidacoesEntrada.ValidouLotes = true;
            }
            if (!this.ValidacoesEntrada.ValidouCombustivel) {
                var retornoCombustivel = this.VerificaCombustiveis(entity);
                if (!retornoCombustivel) {
                    return false;
                }
                this.ValidacoesEntrada.ValidouCombustivel = true;
            }
            if (!this.ValidacoesEntrada.ValidouDuplicata) {
                this.ValidacoesEntrada.ValidouDuplicata = true;
                if (entity.Tipo_Entrada != 3 && ValoresSismoura.ConfiguracoesRetaguarda.Abrir_Contas_Pagar) {
                    this.CarregarAbaDuplicatas();
                    //return false;
                }
            }
            this.PreencherCombustiveisEntity(entity);
            this.EntityTela.Nome_Fornecedor = this.txtFornecedor.GetResultado();
            this.EntityTela.Data_Cadastro = this.DataServidor();
            if (this.Produtos && this.Produtos.length > 0) {
                if (!this.EntityTela.Cfop) {
                    this.EntityTela.Cfop = this.Produtos[0].Cfop;
                }
                if (!ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_iMendes) {
                    if (ValoresSismoura.ConfiguracoesRetaguarda.Entrada_Produto_Alterar_NCM) {
                        if (!this.validarProdutoNCM()) {
                            return false;
                        }
                    }
                }
            }
            this.ValidacoesEntrada.GravandoNota = false;
            this.EntityTela.EntradaProdutoItens.forEach(function (item) {
            });
            return true;
        }
        catch (ex) {
            LogarException(ex);
            return false;
        }
    };
    C_Entrad.prototype.VerificaProdutosControlados = function (entity) {
        var produtos = [];
        for (var x = 0; x <= this.Produtos.length - 1; x++) {
            var item = this.Produtos[x];
            if (item.Pintar_Linha_Controlado) {
                var lote = {};
                lote.Produto = CNum(item.Codigo_Produto);
                lote.Contador = item.Contador;
                lote.Deposito_Codigo = CNum(entity.Deposito);
                lote.Deposito_Descricao = this.cboDeposito.GetText();
                if (CNum(item.Quantidade_Cx) > 0) {
                    lote.Quantidade = CNum(item.Quantidade) * CNum(item.Quantidade_Cx);
                }
                else {
                    lote.Quantidade = CNum(item.Quantidade);
                }
                produtos.push(lote);
            }
        }
        if (produtos.length > 0) {
            var listaLotes = this.LotesInformados;
            for (var x = 0; x <= listaLotes.length - 1; x++) {
                var itemLote = listaLotes[x];
                itemLote.Contador = produtos[x].Contador;
                itemLote.Fornecedor_Codigo = entity.Codigo_Fornecedor;
                itemLote.Fornecedor_Nome = this.txtFornecedor.GetResultado();
                itemLote.DataRecebimento = ConvertToDate(entity.Data_Entrada);
                itemLote.Deposito_Codigo = CNum(entity.Deposito);
                itemLote.Deposito_Descricao = this.cboDeposito.GetText();
            }
            this.LotesInformados = listaLotes;
            this.dlgLote.Mostrar(produtos, MouraModalLoteTipoJS.Entrada, this.LotesInformados, true, CNum(entity.Codigo_Fornecedor));
            return false;
        }
        else {
            return true;
        }
    };
    C_Entrad.prototype.OnInformouLoteProduto = function (s, e) {
        try {
            this.ValidacoesEntrada.ValidouLotes = true;
            var retorno = this.EntityTela;
            this.ClicarGravar();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnDepoisGravar = function () {
        try {
            _super.prototype.OnDepoisGravar.call(this);
            var Entidade = this.EntityTela;
            this.LimparValidacoesGravar();
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
            if (!String.IsNullOrWhiteSpace(retorno['MensagemMsgBox'])) {
                MsgBoxJS(retorno['MensagemMsgBox'], MsgBoxOptions.OkOnly, MsgBoxIcon.Info, null, null);
            }
            if (retorno['AbrirInconsistencia'] && retorno.DadosInconsistencia && retorno.DadosInconsistencia.length > 0) {
                this.mdInconsistencia.Show();
                this.grdInconsistencia.PreencherGrid(retorno.DadosInconsistencia);
            }
            if (retorno['AbrirAtualizarPrecos']) {
                var parametrosTela = [];
                parametrosTela.push("chave=" + CNum(this.EntityTela.Chave));
                parametrosTela.push("deposito=" + CNum(this.EntityTela.Deposito));
                parametrosTela.push("empresa=" + CNum(this.EntityTela.Empresa));
                abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.AtualizarPrecosEntrada), parametrosTela);
            }
            return true;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.ValidarAntesGravar = function (entity) {
        if (this.Produtos.length <= 0 && this.Servicos.length <= 0) {
            MostrarAlerta("Informe ao menos um produto ou serviço para entrada!");
            return false;
        }
        if (this.EntradaProdutoAjustes.FirstOrDefault("Cod_Ajuste", "") || this.EntradaProdutoAjustes.FirstOrDefault("Cod_Ajuste", "0")) {
            MostrarAlerta("O preenchimento do campo Código do Ajuste da aba Débitos e Créditos é obrigatório.");
            return false;
        }
        return true;
    };
    C_Entrad.prototype.PreencherServicosEntity = function (Entity) {
        Entity.EntradaServicos = [];
        for (var x = 0; x <= this.Servicos.length - 1; x++) {
            var serv = {};
            var item = this.Servicos[x];
            serv.Produto = item.Codigo_Servico;
            serv.Servico = item.Descricao_Servico;
            serv.Quantidade = item.Quantidade;
            serv.Valor_Unitario = item.Valor_Unitario;
            serv.Valor_Total = item.Valor_Total;
            serv.Perc_Iss = item.Iss_P;
            serv.Valor_Iss = item.Iss_V;
            serv.Cfop = item.Cfop;
            serv.Cif_Fob = item.Cif_Fob;
            serv.Porc_Icms = item.Icms_P;
            serv.Valor_Icms = item.Icms_V;
            serv.Pis_Valor = item.Pis_V;
            serv.Cofins_Valor = item.Cofins_V;
            serv.Tipo_Servico = item.Tipo_Servico;
            serv.Aliq_Pis = item.Aliq_Pis;
            serv.Aliq_Cofins = item.Aliq_Cofins;
            serv.St_Pisserv = item.St_Pisserv;
            serv.St_Cofinsserv = item.St_Cofinsserv;
            serv.Irrf_Valor = item.Irrf_Valor;
            serv.Csll_Valor = item.Csll_Valor;
            serv.Inss_Valor = item.Inss_Valor;
            Entity.EntradaServicos.push(serv);
        }
    };
    C_Entrad.prototype.PreencherProdutosEntity = function (Entity) {
        var listaBKP = cloneArray(Entity.EntradaProdutoItens);
        if (!listaBKP)
            listaBKP = [];
        Entity.EntradaProdutoItens = [];
        for (var x = 0; x <= this.Produtos.length - 1; x++) {
            var prod = null;
            var item = this.Produtos[x];
            if (CNum(item.Codigo) > 0) {
                prod = listaBKP.FirstOrDefault("Codigo", item.Codigo);
            }
            if (!prod) {
                prod = {};
            }
            prod.Codigo = item.Codigo;
            prod.Codigo_Produto = item.Codigo_Produto;
            prod.Codigo_Produto_Fornecedor = item.Codigo_Produto_Fornecedor;
            prod.Codigo_Fornecedor = Entity.Codigo_Fornecedor;
            prod.Codigo_Empresa = Entity.Empresa;
            prod.Codigo_Pedido = item.Codigo_Pedido_Compra;
            prod.Conta_Contabil = item.Conta_Contabil;
            prod.Quantidade = item.Quantidade;
            prod.Quantidade_Cx = item.Quantidade_Cx;
            prod.Valor_Unitario = item.Valor_Unitario;
            prod.Valor_Unit_Dolar = item.Valor_Unit_Dolar;
            prod.Desconto = item.Desconto_P;
            prod.Valor_Unitario = item.Valor_Unitario;
            prod.Valor_Total = item.Valor_Total;
            prod.Custo = item.Custo;
            prod.Valor_Custo_Calculado = item.Custo_Calculado;
            prod.Frete = item.Frete_Rateado;
            prod.Seguro = item.Seguro;
            prod.Ordem = x;
            prod.Encargos_Financeiros = item.Encargos_Financeiros;
            prod.Valor_Desconto = item.Valor_Desconto;
            prod.Data_Validade = item.Data_Validade;
            prod.Unidade = item.Codigo_Unidade;
            prod.Ncm = item.Ncm;
            prod.Cfop = item.Cfop;
            //ICMS
            prod.Cst = item.Cst;
            prod.Icms = item.Aliquota_Icms;
            prod.Base_Icms = item.Valor_Base_Icms;
            prod.Icms_Rs = item.Valor_Icms;
            prod.Diferenca_Icms = item.Diferenca_Icms;
            //ICMS ST
            prod.Icms_St = item.Icms_St_Un;
            prod.Base_Icms_St = item.Base_Icms_St;
            //IPI
            prod.St_Ipi = item.St_Ipi.CNum(); //Na tabela "Entrada_Produto_Itens" a coluna "St_Ipi" é do tipo Int.
            prod.Ipi = item.Aliquota_Ipi;
            prod.Valor_Ipi = item.Valor_Ipi;
            //PIS
            prod.St_Pis = item.St_Pis.CNum(); //Na tabela "Entrada_Produto_Itens" a coluna "St_Pis" é do tipo Int.
            prod.Aliquota_Pis = item.Aliquota_Pis;
            prod.Base_Pis = item.Base_Pis;
            prod.Valor_Pis = item.Valor_Pis;
            //COFINS
            prod.St_Cofins = item.St_Cofins.CNum(); //Na tabela "Entrada_Produto_Itens" a coluna "St_Cofins" é do tipo Int.
            prod.Aliquota_Cofins = item.Aliquota_Cofins;
            prod.Base_Cofins = item.Base_Cofins;
            prod.Valor_Cofins = item.Valor_Cofins;
            prod.Unitario_Conversao = item.Unitario_Conversao;
            prod.Qtde_Conversao = item.Qtde_Conversao;
            prod.Unidade_Conversao = item.Unidade_Conversao;
            prod.Etiquetas_Emitidas = 0;
            prod.Lotes = [];
            prod.ProdutoAnilhas = item.ProdutoAnilhas;
            prod.Fornecedor = item.Fornecedor;
            prod.Valor_Ajuste = item.Valor_Ajuste;
            prod.MovEntradaDesag = item.MovEntradaDesag;
            //Custo Sem Imposto
            var Custo_Sem_Imposto;
            var parametros = {
                codEmpresa: Entity.Empresa
            };
            var regimeTributario = this.ExecutarFuncaoServerSideSynch('getRegimeTributario', parametros);
            var outras_despesas = (Entity.Despesas / this.Produtos.length);
            var seguro = (Entity.Valor_Seguro / this.Produtos.length);
            Custo_Sem_Imposto = item.Valor_Unitario + item.Frete_Rateado + outras_despesas + seguro + item.Icms_St_Un + item.Valor_Ipi - item.Valor_Desconto;
            if (regimeTributario == 0) { //Lucro Presumido
                Custo_Sem_Imposto -= item.Valor_Icms;
            }
            else if (regimeTributario = 1) { //Lucro real
                Custo_Sem_Imposto += (-item.Valor_Pis - item.Valor_Cofins);
            }
            prod.Custo_Sem_Imposto = Custo_Sem_Imposto;
            Entity.EntradaProdutoItens.push(prod);
        }
        for (var x = 0; x <= Entity.EntradaProdutoItens.length - 1; x++) {
            var produto = Entity.EntradaProdutoItens[x];
            var listaLotes = this.LotesInformados.FindAll("Produto_Codigo", produto.Codigo_Produto);
            for (var i = 0; i <= listaLotes.length - 1; i++) {
                var itemLote = listaLotes[i];
                var itemControladado = {};
                itemControladado.Contador = itemLote.Contador;
                itemControladado.Produto = itemLote.Produto_Codigo;
                itemControladado.Lote = itemLote.Lote;
                itemControladado.Validade = itemLote.Validade;
                itemControladado.Quantidade = itemLote.Quantidade;
                itemControladado.Peso = CNum(itemLote.Peso);
                itemControladado.Data_Fabricacao = ConvertToDate(itemLote.DataFabricacao);
                itemControladado.Data_Recebimento = ConvertToDate(itemLote.DataRecebimento);
                itemControladado.informacoesAdicionais = {};
                itemControladado.informacoesAdicionais.DataFabricacao = ConvertToDate(itemLote.DataFabricacao);
                itemControladado.informacoesAdicionais.DataRecebimento = ConvertToDate(itemLote.DataRecebimento);
                itemControladado.informacoesAdicionais.Localizacao1 = CNum(itemLote.Localizacao1_Codigo);
                itemControladado.informacoesAdicionais.Localizacao2 = CNum(itemLote.Localizacao2_Codigo);
                itemControladado.informacoesAdicionais.Localizacao3 = CNum(itemLote.Localizacao3_Codigo);
                if (ValoresSismoura.ConfiguracoesRetaguarda.Confirmar_Controlado_Lote) {
                    itemControladado.Conferido = true;
                    itemControladado.Usuario_Conferiu = ValoresSismoura.UsuarioLogado;
                }
                if (!produto.Lotes) {
                    produto.Lotes = [];
                }
                produto.Lotes.push(itemControladado);
            }
        }
    };
    C_Entrad.prototype.PreencherRateioCentroCusto = function (Entity) {
        if (this.ListaRateioCC.length <= 0) {
            return;
        }
        Entity.Centros_Custo = [];
        for (var x = 0; x <= this.ListaRateioCC.length - 1; x++) {
            var cc = {};
            var item = this.ListaRateioCC[x];
            cc.Centro_Custo_Descricao = this.ListaRateioCC[x].Centro_Custo_Descricao;
            cc.Centro_Custo_Codigo = this.ListaRateioCC[x].Centro_Custo;
            cc.Valor = this.ListaRateioCC[x].Valor_R;
            Entity.Centros_Custo.push(cc);
        }
    };
    C_Entrad.prototype.PreencherContasPagarEntity = function (Entity) {
        if (this.IsEntradaContaPaga(Entity)) {
            //Se a entrada já tiver conta paga, não pode alterar as contas a pagar
            return;
        }
        var listaBKP = cloneArray(Entity.ContasPagar);
        if (!listaBKP) {
            listaBKP = [];
        }
        Entity.ContasPagar = [];
        var valorTotal = this.Duplicatas.Sum("Valor");
        for (var x = 0; x <= this.Duplicatas.length - 1; x++) {
            var contaPagar;
            var item = this.Duplicatas[x];
            contaPagar = listaBKP.FirstOrDefault("Codigo", item.Codigo_Parcela);
            if (!contaPagar) {
                contaPagar = {};
                contaPagar.Pago = false;
            }
            contaPagar.Codigo_Fornecedor = Entity.Codigo_Fornecedor;
            contaPagar.Doc_Merc = item.Doc_Merc;
            contaPagar.N_Doc_Merc = Entity.Nota_Fiscal;
            contaPagar.Parcela = item.Parcela;
            contaPagar.Doc_Bancario = item.Doc_Bancario;
            contaPagar.N_Doc_Bancario = item.N_Doc_Bancario;
            contaPagar.Data_Vencimento = ConvertToDate(item.Data_Vencimento);
            contaPagar.Valor = item.Valor;
            contaPagar.Conta_Contabil = item.Codigo_Conta_Contabil;
            contaPagar.Data_Emissao = ConvertToDate(item.Data_Emissao);
            contaPagar.Operador = ValoresSismoura.UsuarioLogado;
            contaPagar.Conta_Corrente = item.Conta_Corrente;
            contaPagar.Previsao = item.previsao;
            contaPagar.Codigo_Entrada = Entity.Chave;
            contaPagar.Conta_Dolar = item.Calculado_Dolar;
            contaPagar.Observacao = item.Observacao;
            contaPagar.GerarContabil = false;
            this.RatearCentroCusto(contaPagar, valorTotal);
            Entity.ContasPagar.push(contaPagar);
        }
    };
    C_Entrad.prototype.PreencherCombustiveisEntity = function (Entity) {
        Entity.EntradaProdutoItensTanque = [];
        for (var x = 0; x <= this.ListaRateioCombustivel.length - 1; x++) {
            var itemTanque = {};
            var item = this.ListaRateioCombustivel[x];
            itemTanque.Codigo = CNum(item.Codigo);
            itemTanque.Produto = CNum(item.Codigo_Produto);
            itemTanque.Tanque = CNum(item.Codigo_Tanque);
            itemTanque.Quantidade = CNum(item.Quantidade);
            Entity.EntradaProdutoItensTanque.push(itemTanque);
        }
    };
    C_Entrad.prototype.RatearCentroCusto = function (contaPagar, valorTotal) {
        if (!ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_Centro_Custo || this.ListaRateioCC.length <= 0) {
            return;
        }
        contaPagar.CentrosCusto = [];
        var rateio;
        var valorRateado = 0;
        for (var x = 0; x <= this.ListaRateioCC.length - 1; x++) {
            var item = this.ListaRateioCC[x];
            rateio = {};
            rateio.Centro_Custo = item.Centro_Custo;
            rateio.Valor = ((item.Valor / valorTotal) * contaPagar.Valor).Format(2).CNum();
            //rateio.Valor = item.Valor;   
            contaPagar.CentrosCusto.push(rateio);
        }
        //valorRateado = contaPagar.CentrosCusto.Sum("Valor");
        //if (valorRateado != contaPagar.Valor) {
        //    contaPagar.CentrosCusto[0].Valor += contaPagar.Valor - valorRateado;
        //}
    };
    C_Entrad.prototype.IsEntradaContaPaga = function (entity) {
        var retorno = false;
        if (entity && entity.ContasPagar) {
            var contaPaga;
            contaPaga = entity.ContasPagar.FirstOrDefault("Pago", true);
            if (contaPaga) {
                retorno = true;
            }
        }
        return retorno;
    };
    C_Entrad.prototype.RespostaContasPagar = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            this.respondeuContasPagar = true;
            this.ClicarExcluir();
        }
    };
    //#region Servico
    C_Entrad.prototype.OnClickbtnOKServico = function (s, e) {
        try {
            e.processOnServer = false;
            this.grdServico.AdicionarOuAlterarItemAtual();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnClickbtnFecharServico = function (s, e) {
        try {
            e.processOnServer = false;
            this.mdServicos.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnClicOkMicrochip = function (s, e) {
        try {
            e.processOnServer = false;
            if (this.Anilhas.length != this.lblTotalProduto.Text.CNum()) {
                MsgBoxJS("É necessário selecionar um Microchip/Anilha para cada animal(Produto)!", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(null, this));
                return;
            }
            if (this._importacaoNFe == true) {
                if (!this.ItemNFEAtual) {
                    MostrarAlerta("Nenhum item foi selecionado para vincular!");
                    return;
                }
                var lista = this.grdItensArquivo.DataSource;
                var item = lista.FirstOrDefault("Contador", this.ItemNFEAtual.Contador);
                if (item) {
                    item.ProdutoAnilhas = this.Anilhas;
                }
                this.grdItensArquivo.PreencherGrid(lista);
            }
            else {
                this.Produto.ProdutoAnilhas = this.Anilhas;
                this.grdProduto.AdicionarOuAlterarItemAtual();
            }
            this.mdAnilha.Hide();
            this._importacaoNFe = false;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnClicCancelarMicrochip = function (s, e) {
        try {
            e.processOnServer = false;
            this._importacaoNFe = false;
            this.mdAnilha.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnClicOkFornecedor = function (s, e) {
        try {
            e.processOnServer = false;
            if (this.txtFornecedorTransferencia.GetText().CNum() == 0) {
                MsgBoxJS("É necessário informar um fornecedor!", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(null, this));
                return;
            }
            var lista = this.Produtos;
            if (this.idLinhaProdutoContaContabil) {
                for (var x = 0; x <= lista.length - 1; x++) {
                    if (lista[x].Contador == this.idLinhaProdutoContaContabil || this.chkGerarTodos.Checked) {
                        if (!String.IsNullOrWhiteSpace(this.txtFornecedorTransferencia.GetText())) {
                            lista[x].Fornecedor = CNum(this.txtFornecedorTransferencia.GetText());
                        }
                    }
                }
            }
            this.Produtos = lista;
            this.grdProduto.AtualizarGrid();
            this.mdFornecedor.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnClicCancelarFornecedor = function (s, e) {
        try {
            e.processOnServer = false;
            this._importacaoNFe = false;
            this.mdFornecedor.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnValidandoAdicionarAnilha = function (s, e) {
        try {
            var item = e.item;
            if (!item || !item.Anilha || item.Anilha == null || item.Anilha == '') {
                MsgBoxJS("Informe a anilha!", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(null, this));
                e.cancelar = true;
                return;
            }
            var regraFind = $.grep(this.Anilhas, function (e) { return (e.Anilha == item.Anilha); });
            if (regraFind && regraFind.length > 0) {
                MsgBoxJS("Esta anilha já foi inserida!", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(null, this));
                e.cancelar = true;
                return;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnValidandoAdicionarServico = function (s, e) {
        try {
            var item = e.item;
            if (!item) {
                return;
            }
            if (!item.Codigo_Servico || item.Codigo_Servico <= 0) {
                MostrarAlerta("Informe o serviço");
                e.cancelar = true;
                return;
            }
            if (!item.Quantidade || item.Quantidade <= 0) {
                MostrarAlerta("Informe a quantidade");
                e.cancelar = true;
                return;
            }
            if (!item.Valor_Unitario || item.Valor_Unitario <= 0) {
                MostrarAlerta("Informe o valor unitário");
                e.cancelar = true;
                return;
            }
            var maiorContador;
            if (this.Servicos.length > 0) {
                maiorContador = Math.max.apply(Math, this.Servicos.map(function (o) { return o.Contador; })) + 1;
            }
            else {
                maiorContador = 1;
            }
            item.Contador = maiorContador;
            item.Valor_Total = (item.Quantidade * item.Valor_Unitario);
            item.Descricao_Servico = this.txtServico.GetResultado();
            item.Descricao_Tipo_Servico = this.cboTipoServico.GetText();
            e.item = item;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnAdicionouServico = function (s, e) {
        try {
            this.CalcularTotalNota(this.EntityTela);
            this.txtServico.Focus();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnLimpouItemServico = function (s, e) {
        try {
            var item = e.item;
            if (!item) {
                return;
            }
            item.Quantidade = 1;
            item.St_Pisserv = "70";
            item.St_Cofinsserv = "70";
            item.Tipo_Servico = 0;
            this.CalcularTotalServico(item);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.CalcularTotalServico = function (servico) {
        var v = 0;
        if (!servico) {
            this.lblTotalServico.Text = (0).Format(2);
            return;
        }
        if (!servico.Valor_Unitario) {
            servico.Valor_Unitario = 0;
        }
        if (!servico.Quantidade) {
            servico.Quantidade = 0;
        }
        v = servico.Valor_Unitario * servico.Quantidade;
        this.lblTotalServico.Text = v.Format(2);
    };
    C_Entrad.prototype.CalcularISSServico = function (servico) {
        var valor = 0;
        if (!servico) {
            return;
        }
        if (!servico.Iss_P) {
            servico.Iss_P = 0;
        }
        valor = ((servico.Iss_P * this.lblTotalServico.Text.CNum()) / 100);
        servico.Iss_V = valor;
        this.RefreshAngular();
    };
    C_Entrad.prototype.CalcularPISServico = function (servico) {
        var valor;
        if (!servico) {
            return;
        }
        if (!servico.Aliq_Pis) {
            servico.Aliq_Pis = 0;
        }
        valor = ((servico.Aliq_Pis * this.lblTotalServico.Text.CNum()) / 100);
        servico.Pis_V = valor;
        this.RefreshAngular();
    };
    C_Entrad.prototype.CalcularCOFINSServico = function (servico) {
        var valor;
        if (!servico) {
            return;
        }
        if (!servico.Aliq_Cofins) {
            servico.Aliq_Cofins = 0;
        }
        valor = ((servico.Aliq_Cofins * this.lblTotalServico.Text.CNum()) / 100);
        servico.Cofins_V = valor;
        this.RefreshAngular();
    };
    C_Entrad.prototype.mudouValorSeguro = function (newValue, oldValue) {
        this.RatearConfiguracoesEntrada();
    };
    C_Entrad.prototype.RatearConfiguracoesEntrada = function () {
        var lista;
        var operacao = "";
        var valorRateado = 0;
        if (this.Produtos.length <= 0) {
            return;
        }
        lista = cloneArray(this.Produtos);
        if (!String.IsNullOrWhiteSpace(this.ConfiguracaoRateio["DESPESAS"])) {
            valorRateado = CNum(this.EntityTela.Despesas) / lista.length;
            for (var x = 0; x <= lista.length - 1; x++) {
                lista[x].Encargos_Financeiros += valorRateado.Format(6).CNum();
            }
        }
        //''Não será rateado pela quantidade informada de produtos, mas sim pela QUANTIDADE DE REGISTROS da lista.
        if (!String.IsNullOrWhiteSpace(this.ConfiguracaoRateio["FRETE RATEADO POR QTDE DE PRODUTOS"])) {
            valorRateado = CNum(this.EntityTela.Valor_Frete) / lista.length;
            for (var x = 0; x <= lista.length - 1; x++) {
                lista[x].Frete_Rateado = valorRateado.Format(6).CNum();
            }
        }
        else if (!String.IsNullOrWhiteSpace(this.ConfiguracaoRateio["FRETE RATEADO"])) {
            var totalProdutos = lista.Sum("Valor_Total");
            for (var x = 0; x <= lista.length - 1; x++) {
                lista[x].Frete_Rateado = (((CNum(lista[x].Valor_Total)) / totalProdutos) * CNum(this.EntityTela.Valor_Frete).Format(6).CNum());
            }
        }
        if (!this.EntityTela.Chave) {
            this.custo = [];
        }
        if (this.EntityTela.Valor_Seguro) {
            if (!String.IsNullOrWhiteSpace(this.ConfiguracaoRateio["VALOR SEGURO"])) {
                var totalProd = lista.Sum("Valor_Total");
                if (this.ConfiguracaoRateio["VALOR SEGURO"] == "SOMAR") {
                    for (var x_2 = 0; x_2 < lista.length; x_2++) {
                        if (this.custo[x_2] == lista[x_2].Custo_Calculado || !(this.custo[x_2])) {
                            this.custo[x_2] = lista[x_2].Custo_Calculado;
                        }
                        lista[x_2].Seguro = ((lista[x_2].Valor_Total / totalProd) * this.EntityTela.Valor_Seguro).Format(3).CNum();
                        lista[x_2].Custo_Calculado = this.custo[x_2] + lista[x_2].Seguro;
                    }
                }
                else {
                    for (var x_3 = 0; x_3 < lista.length; x_3++) {
                        if (this.custo[x_3] == lista[x_3].Custo_Calculado || !(this.custo[x_3])) {
                            this.custo[x_3] = lista[x_3].Custo_Calculado;
                        }
                        lista[x_3].Seguro = ((lista[x_3].Valor_Total / totalProd) * this.EntityTela.Valor_Seguro).Format(3).CNum();
                        lista[x_3].Custo_Calculado = this.custo[x_3] - lista[x_3].Seguro;
                    }
                }
            }
        }
        this.Produtos = lista;
    };
    //#endregion
    // #region Duplicatas
    C_Entrad.prototype.OnClickFecharDuplicatas = function (s, e) {
        e.processOnServer = false;
        this.mdDuplicatas.Hide();
        //Se estiver gravando a nota, deve gravar o registro
        if (this.ValidacoesEntrada.GravandoNota) {
            this.ClicarGravar();
        }
    };
    //protected OnClickDuplicatas(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs) {
    //    try {
    //        e.processOnServer = false;
    //        this.CarregarAbaDuplicatas();
    //    } catch (ex) {
    //        LogarException(ex);
    //    }
    //}
    C_Entrad.prototype.CarregarAbaDuplicatas = function () {
        if (!this.EntityTela) {
            return;
        }
        var entity = this.EntityTela;
        this.CalcularTotalNota(entity);
        this.CalcularValorRestanteRateio();
        if (!entity.Data_Emissao) {
            entity.Data_Emissao = this.DataServidor();
        }
        this.cboContaCorrente.Preencher([ValoresSismoura.EmpresaPadraoUsuario], true);
        this.cboContaCorrente.Combo.SetSelectedIndex(0);
        //this.cboContaCorrente.Limpar();
        //this.txtFornecedorD.Procurar("" + entity.Codigo_Fornecedor);
        this.cboDocMercantil.LimparSelecao();
        this.txtNDocBancario.SetText("");
        this.txtParcelas.SetText("0");
        this.txtVencInicial.Date = null;
        this.txtContaContabil.Limpar();
        this.cboFormaPagamentoD.LimparSelecao();
        this.txtDias.SetText("0");
        this.cboTipoDias.SetValue("V");
        this.chkPrevisao.Checked = false;
        this.txtDiasVencimento.SetText("0");
        this.txtDataEmissaoD.Date = ConvertToDate(entity.Data_Emissao);
        if (this.Duplicatas.length > 0) {
            var item = this.Duplicatas[0];
            this.txtDataEmissaoD.Date = ConvertToDate(item.Data_Emissao);
            if (item.Doc_Merc) {
                this.cboDocMercantil.SetValue(item.Doc_Merc);
            }
            this.txtNDocBancario.SetText(item.N_Doc_Bancario);
            this.cboContaCorrente.SetContaCorrente(item.Conta_Corrente);
            this.txtVencInicial.Date = ConvertToDate(item.Data_Vencimento);
            this.OntextBoxVencInicialChange();
            if (item.Codigo_Conta_Contabil) {
                this.txtContaContabil.Procurar("" + item.Codigo_Conta_Contabil);
            }
            if (item.Doc_Bancario) {
                this.cboFormaPagamentoD.SetValue(item.Doc_Bancario);
            }
            this.txtParcelas.SetText("" + this.Duplicatas.length);
        }
        this.LimparCamposRateio();
        //this.mdDuplicatas.Show();
        this.grdDuplicata.Grid.Refresh();
        this.txtContaContabil.Focus();
    };
    C_Entrad.prototype.OnClickBotaoGerarDuplicatas = function (s, e) {
        try {
            e.processOnServer = false;
            if (this.IsEntradaContaPaga(this.EntityTela)) {
                MostrarAlerta("As contas não podem ser alteradas, pois já existem parcelas pagas");
                return;
            }
            if (this.txtContaContabil.GetText().CNum() <= 0) {
                this.txtContaContabil.Focus();
                return;
            }
            if (this.txtParcelas.GetText().CNum() <= 0) {
                this.txtParcelas.Focus();
                return;
            }
            if (this.cboDocMercantil.GetValue() < 0) {
                this.cboDocMercantil.Focus();
                return;
            }
            if (!this.txtVencInicial.Date || this.txtVencInicial.Date.getDate() < 0) {
                this.txtVencInicial.Focus();
                return;
            }
            var dataBase = null;
            var vencimentoBase = this.txtVencInicial.Date;
            var lista = [];
            var totalNota = this.lblTotalNota.Text.CNum();
            if (ValoresSismoura.ConfiguracoesRetaguarda.Entrada_Emissao) {
                dataBase = this.txtDataEmissaoD.Date;
            }
            else {
                dataBase = this.DataServidor();
            }
            var parcela;
            for (var i = 1; i <= this.txtParcelas.GetText().CNum(); i++) {
                parcela = {};
                parcela.Contador = i;
                parcela.Parcela = i;
                parcela.previsao = this.chkPrevisao.Checked;
                parcela.Pago = false;
                parcela.Valor = ((totalNota / this.txtParcelas.GetText().CNum())).Format(2).CNum();
                parcela.Codigo_Conta_Contabil = this.txtContaContabil.GetText().CNum();
                parcela.Descricao_Conta_Contabil = this.txtContaContabil.GetResultado();
                parcela.Descricao_Doc_Merc = this.cboDocMercantil.GetText();
                parcela.Conta_Corrente = this.cboContaCorrente.GetContaCorrente();
                parcela.Doc_Merc = this.cboDocMercantil.GetValue();
                parcela.Doc_Bancario = this.cboFormaPagamentoD.GetValue();
                parcela.Data_Emissao = dataBase;
                parcela.N_Doc_Bancario = this.txtNDocBancario.GetText();
                if (i == 1) {
                    parcela.Data_Vencimento = this.txtVencInicial.Date;
                }
                else {
                    if (this.cboTipoDias.GetValue() == "V") {
                        parcela.Data_Vencimento = vencimentoBase.addDays(this.txtDias.GetText().CNum());
                    }
                    else {
                        try {
                            var aux = vencimentoBase.addMonths(1);
                            parcela.Data_Vencimento = new Date(aux.getFullYear(), aux.getMonth(), this.txtDias.GetText().CNum());
                        }
                        catch (exx) {
                            parcela.Data_Vencimento = vencimentoBase.addMonths(1);
                        }
                    }
                }
                parcela.Dias = calcularDiferencaData(dataBase, parcela.Data_Vencimento, DiferencaData.Days);
                var tipoEntrada = (this.EntityTela.Tipo_Nf == 1 ? "Recibo" : "Nota");
                parcela.Observacao = "Conta Referente a " + tipoEntrada + " de Entrada: " + this.EntityTela.Nota_Fiscal;
                vencimentoBase = parcela.Data_Vencimento;
                lista.push(parcela);
            }
            var valorGerado = lista.Sum("Valor");
            if (lista.length > 0) {
                if (valorGerado != totalNota) {
                    lista[lista.length - 1].Valor += totalNota - valorGerado;
                }
                this.Duplicatas = lista;
            }
            this.CalcularValorRestanteRateio();
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnClickOKDuplicatas = function (s, e) {
        try {
            e.processOnServer = false;
            //this.mdDuplicatas.Hide();
            if (this.ValidacoesEntrada.GravandoNota) {
                this.ClicarGravar();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnValidandoGradeDuplicatas = function (s, e) {
        try {
            var fieldNameAlterado = "";
            //if (this.IsEntradaContaPaga(this.EntityTela)) {
            //    MostrarAlerta("As contas não podem ser alteradas, pois já existem parcelas pagas");
            //    e.cancelar = true;
            //    return;
            //}
            //if (!e.oldData || !e.newData) {
            //    return;
            //}
            //if (e.newData) {
            //    for (var prop in e.newData) {
            //        fieldNameAlterado = prop;
            //        break;
            //    }
            //}
            //var itemAlterado: SiSMoura.Core.Entity.EntradaProdutoDuplicata = e.newData;
            //var dataBase = ConvertToDate(e.oldData.Data_Emissao);
            //if (fieldNameAlterado == "Dias") {
            //    itemAlterado.Data_Vencimento = dataBase.addDays(itemAlterado.Dias);
            //} else if (fieldNameAlterado == "Data_Vencimento") {
            //    itemAlterado.Dias = calcularDiferencaData(dataBase, itemAlterado.Data_Vencimento, DiferencaData.Days);
            //}
            if (this.cboDocMercantil) {
                e.item.Descricao_Doc_Merc = this.cboDocMercantil.GetText();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnGerouLinhaDuplicata = function (s, e) {
        if (e.rowType == "data") {
            if (e.row.data['Pago']) {
                e.cellElement.css("color", "red");
            }
        }
    };
    C_Entrad.prototype.OnValidandoGradeRateio = function (s, e) {
        try {
            var centroCusto = e.item;
            if (this.Duplicatas.length <= 0) {
                MostrarAlerta("Gere as parcelas antes de realizar o rateamento por centro de custo");
                e.cancelar = true;
                return;
            }
            if (!e.item.Centro_Custo || e.item.Centro_Custo <= 0) {
                MostrarAlerta("Informe o centro de custo");
                e.cancelar = true;
                return;
            }
            if (!e.item.Valor || e.item.Valor <= 0) {
                MostrarAlerta("Informe o valor para o centro de custo");
                e.cancelar = true;
                return;
            }
            //-----               
            var valorRatear = 0;
            var lista = cloneArray(this.ListaRateioCC);
            var item = lista.FirstOrDefault("Centro_Custo", e.item.Centro_Custo);
            if (item) {
                MostrarAlerta("Este centro de custo já foi adicionado");
                e.cancelar = true;
                return;
            }
            var contador = this.ListaRateioCC.Max("Contador") + 1;
            e.item.Centro_Custo_Descricao = this.txtCentroCustoD.GetResultado();
            var vlrCentroCusto = this.txtValorCC.GetText().CNum();
            var valor = this.lblTotalNota.Text.CNum();
            var valorRestante = this.lblValorRestanteRatear.Text.CNum();
            var valorInformado = 0;
            if (this.rdTipoRateio.GetValue() == "P") {
                if (((valor * (vlrCentroCusto / 100)).Format(2).CNum().Format(2).CNum()) > (this.lblValorRestanteRatear.Text.CNum())) {
                    MostrarAlerta("O valor a ser adicionado não pode ser maior que o restante");
                    e.cancelar = true;
                    return;
                }
            }
            else {
                if (e.item.Valor > this.lblValorRestanteRatear.Text.CNum()) {
                    MostrarAlerta("O valor a ser adicionado não pode ser maior que o restante");
                    e.cancelar = true;
                    return;
                }
            }
            if (this.rdTipoRateio.GetValue() == "P") {
                e.item.Valor_P = centroCusto.Porcentagem = (((valor * vlrCentroCusto / 100).Format(2).CNum() * 100) / valor).Format(2).CNum();
                e.item.Valor_R = centroCusto.Valor = (valor * vlrCentroCusto / 100).Format(2).CNum();
                this.lblValorRestanteRatear.Text = (valorRestante - centroCusto.Valor).Format(2);
            }
            else {
                e.item.Valor_P = centroCusto.Porcentagem = ((vlrCentroCusto * 100) / valor).Format(2).CNum();
                e.item.Valor_R = centroCusto.Valor = vlrCentroCusto;
                this.lblValorRestanteRatear.Text = (valorRestante - centroCusto.Valor).Format(2);
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    //protected OnClickBotaoAdicionarCC(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs) {
    //    try {
    //        e.processOnServer = false;
    //        this.CalcularValorRestanteRateio();
    //        if (this.txtCentroCustoD.GetText().CNum() <= 0) {
    //            MostrarAlerta("Informe o centro de custo");
    //            return;
    //        }
    //        if (this.txtValorCC.GetText().CNum() <= 0) {
    //            MostrarAlerta("Informe o valor para o centro de custo");
    //            return;
    //        }
    //        if (this.Duplicatas.length <= 0) {
    //            MostrarAlerta("Gere as parcelas antes de realizar o rateamento por centro de custo");
    //            return;
    //        }
    //        if (this.txtValorCC.GetText().CNum() > this.lblValorRestanteRatear.Text.CNum()) {
    //            MostrarAlerta("O valor a ser adicionado não pode ser maior que o restante");
    //            return;
    //        }
    //        var valorRatear = 0;
    //        var lista = cloneArray(this.ListaRateioCC);
    //        var item = lista.FirstOrDefault("Centro_Custo_Codigo", this.txtCentroCustoD.GetText().CNum())
    //        if (item) {
    //            MostrarAlerta("Este centro de custo já foi adicionado");
    //            return;
    //        }
    //        var contador = lista.Max("Contador") + 1;
    //        var rateio = <SiSMoura.Core.Entity.CentroDeCustoRetorno>{};
    //        rateio.Centro_Custo_Codigo = this.txtCentroCustoD.GetText().CNum()
    //        rateio.Centro_Custo_Descricao = this.txtCentroCustoD.GetResultado();
    //        rateio.Centro_Custo = ""
    //        rateio.Valor = this.txtValorCC.GetText().CNum();
    //        rateio.Contador = contador;
    //        lista.push(rateio);
    //        this.ListaRateioCC = lista;
    //        this.CalcularValorRestanteRateio();
    //        this.LimparCamposRateio();
    //        this.txtCentroCustoD.Focus();
    //    } catch (ex) {
    //        LogarException(ex);
    //    }
    //}
    C_Entrad.prototype.LimparCamposRateio = function () {
        this.txtCentroCustoD.Limpar();
        this.txtValorCC.Limpar();
    };
    C_Entrad.prototype.CalcularValorRestanteRateio = function () {
        var totalNota = this.lblTotalNota.Text.CNum();
        var totalRateado = this.ListaRateioCC.Sum("Valor_R");
        var total = (totalNota - totalRateado) - this.txtValorCC.GetText().CNum();
        if (total < 0)
            total = 0;
        this.lblValorRestanteRatear.Text = (total).Format(2);
    };
    C_Entrad.prototype.OnExcluiuItemRateio = function (s, e) {
        this.CalcularValorRestanteRateio();
    };
    C_Entrad.prototype.OnValidandoItemRateio = function (s, e) {
        this.CalcularValorRestanteRateio();
    };
    // #endregion
    //#region Produtos
    C_Entrad.prototype.OnClickBotaoAdicionarProduto = function (s, e) {
        try {
            e.processOnServer = false;
            this.mdProdutos.ModalDialog.Show();
            this.grdProduto.Limpar();
            this.OnAlterouSTCofinsProduto(this.Produto);
            this.OnAlterouSTPisProduto(this.Produto);
            this.OnAlterouSTTIPIProduto(this.Produto);
            if (CNum(this.EntityTela.Tipo_Nf) == 0) {
                this.cboCFOP.LabelControl.innerText = "* CFOP";
                this.cboCST.LabelControl.innerText = "* CST";
                this.txtValorUnitDolar.Visible = false;
                this.lblSubTotalDolar.Visible = false;
            }
            else {
                this.txtValorUnitDolar.Visible = true;
                this.lblSubTotalDolar.Visible = true;
            }
            this.txtProduto.Focus();
            return false;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnClickBotaoFecharProduto = function (s, e) {
        try {
            e.processOnServer = false;
            this.mdProdutos.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnPesquisouDadosProduto = function (s, e) {
        try {
            var parametros;
            var valor = 0;
            var that = this;
            this.lblLocalizacao.Text = "";
            this.lblUnidade.Text = "";
            this.lblEstoqueAtual.Text = "";
            parametros = {
                codProduto: this.txtProduto.GetText().CNum(),
                tipoEntrada: CNum(this.EntityTela.Tipo_Entrada),
                codDeposito: CNum(this.EntityTela.Deposito),
                codEmpresa: CNum(this.EntityTela.Empresa)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ObterInformacoesProduto", parametros);
            if (retorno && retorno.Codigo_Produto) {
                if (!String.IsNullOrWhiteSpace(retorno.Mensagem_Alerta)) {
                    MostrarAlerta(retorno.Mensagem_Alerta);
                    setTimeout(function () {
                        that.txtProduto.Focus();
                        that.grdProduto.Limpar();
                    }, 200);
                    this;
                }
                this.lblLocalizacao.Text = retorno.Localizacao;
                this.lblUnidade.Text = retorno.Unidade;
                if (retorno.Quantiade_Estoque) {
                    this.lblEstoqueAtual.Text = (retorno.Quantiade_Estoque).Format(ValoresSismoura.CasasDecimaisEstoque);
                }
                else {
                    this.lblEstoqueAtual.Text = "";
                }
                this.Produto.Ncm = retorno.NCM;
                this.Produto.Quantidade_Cx = retorno.Quantidade_Caixa;
                this.Produto.Quantidade = 1;
                this.Produto.Valor_Unitario = retorno.Valor_Unitario;
                this.Produto.Animal_Silvestre = retorno.Animal_Silvestre;
                this.Produto.Conta_Contabil_Financeira = retorno.Conta_Contabil_Financeira;
                if (retorno.RegraImposto) {
                    var regra = retorno.RegraImposto;
                    this.Produto.Cfop = regra.CFOP;
                    this.Produto.Cst = regra.CST;
                    this.Produto.St_Cofins = regra.ST_COFINS;
                    this.Produto.St_Pis = regra.ST_PIS;
                    if (regra.Base_ICMS) {
                        this.Produto.Valor_Base_Icms = regra.Base_ICMS;
                    }
                    if (regra.Base_ICMS_ST) {
                        this.Produto.Base_Icms_St = regra.Base_ICMS_ST;
                    }
                    this.Produto.Base_Pis = regra.Base_PIS;
                    this.Produto.Aliquota_Pis = regra.Aliquota_PIS;
                    this.Produto.Base_Cofins = regra.Base_COFINS;
                    this.Produto.Aliquota_Cofins = regra.Aliquota_COFINS;
                }
            }
            else {
                setTimeout(function () {
                    that.grdProduto.Limpar();
                }, 200);
            }
            this.OnCalcularDolar();
            this.CalcularTotalProduto(this.Produto);
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnGerouLinhaConferencia = function (s, e) {
        if (e.rowType == "data") {
            if (e.row.data['NaoExistePedido']) {
                e.cellElement.css("color", "blue");
            }
            else if (e.row.data['NaoExisteEntrada']) {
                e.cellElement.css("color", "orange");
            }
        }
    };
    C_Entrad.prototype.OnGerouLinhaProduto = function (s, e) {
        if (e.rowType == "data") {
            if (e.row.data['Pintar_Linha_Controlado']) {
                e.cellElement.css("color", "blue");
            }
        }
        //Desabilitar o botão Desagregação da grid
        if (e.data) {
            if (e.column["caption"] == "Desagregação") {
                if (!this.VerificarDesagregacao(e.row.data['Codigo_Produto'])) {
                    e.cellElement.find("input").attr("disabled", "false");
                }
            }
        }
    };
    C_Entrad.prototype.OnClicouBotaoLinhaProduto = function (s, e) {
        var _this = this;
        if (e.commandName === "alterarCC") {
            var contaContabil = CNum(e.data['Conta_Contabil']);
            if (contaContabil) {
                this.txtCCProduto.Procurar("" + contaContabil);
            }
            else {
                this.txtCCProduto.Limpar();
            }
            this.idLinhaProdutoContaContabil = e.rowKey;
            this.mdInfContaContabil.Show();
            setTimeout(function () { _this.txtCCProduto.Focus(); }, 200);
        }
        else if (e.commandName === "informar_fornecedor") {
            this.idLinhaProdutoContaContabil = e.rowKey;
            this.AbrirFornecedor();
        }
        else if (e.commandName === "desagregacao") {
            var item = e.data;
            this.itemClicado = item;
            if (!this.CarregarDesagregacao(item)) {
                MostrarAlerta("Desagregação cadastrada com tipo inválido, acesse a tela Cadastro de Desagregação para corrigir esta situação", 20000);
                return;
            }
            this.mdValoresDesag.Show();
        }
    };
    C_Entrad.prototype.OnValidandoAlteracaoProduto = function (s, e) {
        try {
            var item = e.item;
            this.inseriuProduto = false;
            if (!item) {
                return;
            }
            if (item.St_Pis) {
                item.St_Pis_Int = CNum(item.St_Pis);
            }
            else {
                item.St_Pis_Int = null;
            }
            if (item.St_Cofins) {
                item.St_Cofins_Int = CNum(item.St_Cofins);
            }
            else {
                item.St_Cofins_Int = null;
            }
            var parametros = {
                itemSTR: JSON.stringify(item),
                fieldNameAlterado: e.fieldNameAlterado,
                codEmpresa: CNum(this.EntityTela.Empresa),
                codFornecedor: CNum(this.EntityTela.Codigo_Fornecedor),
                tipoNF: CNum(this.EntityTela.Tipo_Nf),
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ValidarAlteracaoProduto", parametros);
            if (!String.IsNullOrWhiteSpace(retorno.MensagemAlerta)) {
                MostrarAlerta(retorno.MensagemAlerta);
                if (!retorno.Dados) {
                    e.cancelar = true;
                    this.grdProduto.Grid.CancelChanges();
                    return;
                }
            }
            item = retorno.Dados;
            if (e.index < 0) {
                var produtoJaInserido = false;
                var prodInserido = this.Produtos.FirstOrDefault("Codigo_Produto", item.Codigo_Produto);
                if (prodInserido) {
                    produtoJaInserido = true;
                }
                var parametros = {
                    itemSTR: JSON.stringify(item),
                    produtoJaAdicionado: produtoJaInserido,
                    quantidadeItensNota: this.Produtos.length,
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("ValidarAdicionarProduto", parametros);
                if (!String.IsNullOrWhiteSpace(retorno.MensagemAlerta)) {
                    MostrarAlerta(retorno.MensagemAlerta);
                    e.cancelar = true;
                    this.grdProduto.Grid.CancelChanges();
                    return;
                }
                if (!String.IsNullOrWhiteSpace(retorno.MensagemInformacao)) {
                    MsgBoxJS(retorno.MensagemInformacao, MsgBoxOptions.OkOnly, MsgBoxIcon.Info, null, null);
                }
                item = retorno.Dados;
                if (!item.Contador) {
                    item.Contador = this.Produtos.Max("Contador") + 1; // Novo item
                }
            }
            this.inseriuProduto = true;
            e.item = item;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnAdicionouProduto = function (s, e) {
        try {
            this.CalcularTotalNota(this.EntityTela);
            this.txtProduto.Focus();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnLimpouItemProduto = function (s, e) {
        try {
            var item = e.item;
            if (!item) {
                return;
            }
            item.Contador = 0;
            item.Quantidade = 1;
            item.Quantidade_Cx = 1;
            item.Valor_Desconto = 0;
            item.Valor_Cofins = 0;
            item.Valor_Base_Icms = 0;
            item.Valor_Unitario = 0;
            item.St_Pis = "70";
            item.St_Cofins = "70";
            item.Valor_Ipi = 0;
            item.Aliquota_Ipi = 0;
            item.Valor_Icms = 0;
            item.Valor_Base_Icms = 0;
            item.Aliquota_Icms = 0;
            this.CalcularTotalProduto(item);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.CalcularTotalProduto = function (produto) {
        var v = 0;
        if (!produto) {
            this.txtTotalProduto.SetText((0).Format(2));
            return;
        }
        if (!produto.Valor_Unitario) {
            produto.Valor_Unitario = 0;
        }
        if (!produto.Valor_Unit_Dolar) {
            produto.Valor_Unit_Dolar = 0;
        }
        if (!produto.Quantidade) {
            produto.Quantidade = 0;
        }
        if (!produto.Valor_Desconto) {
            produto.Valor_Desconto = 0;
        }
        if (!produto.Encargos_Financeiros) {
            produto.Encargos_Financeiros = 0;
        }
        v = (produto.Quantidade * produto.Valor_Unitario) - produto.Valor_Desconto + produto.Encargos_Financeiros;
        this.txtTotalProduto.SetText(v.Format(this.txtTotalProduto.QuantidadeCasas));
        this.lblSubTotal.Text = (produto.Quantidade * produto.Valor_Unitario).Format(2);
        this.lblSubTotalDolar.Text = (produto.Quantidade * produto.Valor_Unit_Dolar).Format(2);
    };
    C_Entrad.prototype.OnCalcularDolar = function () {
        var entity = this.EntityTela;
        if (entity.Tipo_Nf == 1) {
            if (this.hdnCalcularDolar.value == "1" && this.txtValorUnitDolar && this.txtValorUnitDolar.Textbox) {
                this.grdProduto.Grid.ColunaVisible("Valor_Unit_Dolar", true);
                this.grdProduto.Grid.ColunaVisible("Valor_Total_Dolar", true);
                return this.CalcularDolar();
            }
        }
    };
    C_Entrad.prototype.AlterouValorUnitarioDolar = function () {
        this.Produto.Valor_Unitario = this.txtValorUnitDolar.GetText().CNum() * this.hdnCotacaoDolar.value.CNum();
        this.lblSubTotalDolar.Text = (this.Produto.Quantidade * this.txtValorUnitDolar.GetText().CNum()).Format(2);
    };
    C_Entrad.prototype.CalcularDolar = function () {
        var preco_dolar = 0;
        this.Produto.Valor_Unit_Dolar = 0;
        var parametros = {
            codProduto: this.txtProduto.GetText().CNum()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetProdutoByCodigo", parametros);
        if (retorno) {
            preco_dolar = retorno.Preco_Dolar;
        }
        if (preco_dolar > 0) {
            this.Produto.Valor_Unitario = preco_dolar * this.hdnCotacaoDolar.value.CNum();
            this.Produto.Valor_Unit_Dolar = preco_dolar;
        }
        this.lblSubTotalDolar.Text = (this.Produto.Quantidade * this.txtValorUnitDolar.GetText().CNum()).Format(2);
    };
    C_Entrad.prototype.OnAlterouDescontoPProduto = function (produto) {
        var n = 0;
        if (!produto.Desconto_P) {
            produto.Desconto_P = 0;
        }
        if (!produto.Valor_Desconto) {
            produto.Valor_Desconto = 0;
        }
        if (produto.Desconto_P >= 100) {
            MostrarAlerta("O desconto não pode ser maior ou igual a 100 %");
            produto.Desconto_P = 0;
            produto.Valor_Desconto = 0;
        }
        else {
            this.CalcularValorDescontoProduto(produto);
        }
        this.CalcularTotalProduto(produto);
        this.RefreshAngular();
    };
    C_Entrad.prototype.OnClickbtnOKProduto = function (s, e) {
        try {
            e.processOnServer = false;
            if (CNum(this.EntityTela.Tipo_Nf) == 0 && String.IsNullOrWhiteSpace(this.Produto.Cfop)) {
                MostrarAlerta("Preencha o campo corretamente: CFOP");
                return;
            }
            if (CNum(this.EntityTela.Tipo_Nf) == 0) {
                this.Produto.Valor_Unit_Dolar = 0;
                if (String.IsNullOrWhiteSpace(this.Produto.Cst)) {
                    MostrarAlerta("Preencha o campo corretamente: CST");
                    return;
                }
            }
            this.Produto.Conta_Contabil = this.txtContaContabilFinanceira.GetText().CNum();
            //this.Produto.Conta_Contabil_Descricao = this.txtContaContabilFinanceira.GetTextLabelControl();
            if (this.Produto.Animal_Silvestre == true) {
                if (this.inseriuProduto == true || this.lblTotalProduto.Text != this.Produto.Quantidade.Format(0)) {
                    this.lblTotalProduto.Text = this.Produto.Quantidade.Format(0);
                    this.Anilhas = [];
                    this._importacaoNFe = false;
                    this.mdAnilha.ModalDialog.Show();
                }
                else {
                    this._importacaoNFe = false;
                    this.grdProduto.AdicionarOuAlterarItemAtual();
                }
                this.GetScope().$apply();
            }
            else {
                this.grdProduto.AdicionarOuAlterarItemAtual();
            }
            this.EntityTela.Cfop = this.cboCFOP.GetValue();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.CalcularValorDescontoPorcentagemProduto = function (produto) {
        if (!produto.Desconto_P) {
            produto.Desconto_P = 0;
        }
        if (!produto.Valor_Desconto) {
            produto.Valor_Desconto = 0;
        }
        if (!produto.Valor_Unitario) {
            produto.Valor_Unitario = 0;
        }
        if (!produto.Quantidade) {
            produto.Quantidade = 0;
        }
        var porc = produto.Desconto_P;
        var desc = produto.Valor_Desconto;
        var valorProduto = (produto.Valor_Unitario * produto.Quantidade);
        if (porc == 0) {
            if (desc > 0) {
                porc = (100 * desc) / (valorProduto * (100 - porc) / 100);
            }
        }
        else {
            if (desc > 0) {
                porc = (desc * 100 / valorProduto);
            }
        }
        produto.Desconto_P = porc;
        this.RefreshAngular();
    };
    C_Entrad.prototype.CalcularValorDescontoProduto = function (produto) {
        var n = 0;
        if (!produto.Desconto_P) {
            produto.Desconto_P = 0;
        }
        if (!produto.Quantidade) {
            produto.Quantidade = 0;
        }
        if (!produto.Valor_Unitario) {
            produto.Valor_Unitario = 0;
        }
        n = (produto.Desconto_P / 100) * (produto.Valor_Unitario * produto.Quantidade);
        produto.Valor_Desconto = n;
        this.RefreshAngular();
    };
    C_Entrad.prototype.CalcularIPIPorcentagemProduto = function (produto) {
        var valorIpi = 0;
        if (!produto.Valor_Unitario) {
            produto.Valor_Unitario = 0;
        }
        if (!produto.Aliquota_Ipi) {
            produto.Aliquota_Ipi = 0;
        }
        if (!produto.Quantidade) {
            produto.Quantidade = 0;
        }
        valorIpi = (produto.Aliquota_Ipi / 100) * (produto.Valor_Unitario * produto.Quantidade);
        produto.Valor_Ipi = valorIpi;
        this.RefreshAngular();
    };
    C_Entrad.prototype.CalcularIPIValorProduto = function (produto) {
        var aliqIpi;
        var valorTotal;
        if (!produto.Valor_Unitario) {
            produto.Valor_Unitario = 0;
        }
        if (!produto.Valor_Ipi) {
            produto.Valor_Ipi = 0;
        }
        if (!produto.Quantidade) {
            produto.Quantidade = 0;
        }
        valorTotal = (produto.Valor_Unitario * produto.Quantidade);
        if (valorTotal > 0) {
            aliqIpi = (produto.Valor_Ipi * 100) / valorTotal;
        }
        else {
            aliqIpi = 0;
        }
        produto.Aliquota_Ipi = aliqIpi;
        this.RefreshAngular();
    };
    C_Entrad.prototype.OnAlterouSTTIPIProduto = function (produto) {
        var zero = 0;
        if (!produto.St_Ipi) {
            produto.St_Ipi = "";
        }
        if (produto.St_Ipi == "01" || produto.St_Ipi == "02" || produto.St_Ipi == "03" || produto.St_Ipi == "04" || produto.St_Ipi == "05") {
            produto.Aliquota_Ipi = 0;
            produto.Valor_Ipi = 0;
            this.txtIPIR.Textbox.readOnly = true;
            this.txtIPIP.Textbox.readOnly = true;
        }
        else {
            this.txtIPIP.Textbox.readOnly = false;
            this.txtIPIR.Textbox.readOnly = false;
        }
        this.RefreshAngular();
    };
    C_Entrad.prototype.OnAlterouSTPisProduto = function (produto) {
        var zero = 0;
        if (!produto.St_Pis) {
            produto.St_Pis = "";
        }
        if (produto.St_Pis == "70" || produto.St_Pis == "71" ||
            produto.St_Pis == "72" || produto.St_Pis == "73" ||
            produto.St_Pis == "74" || produto.St_Pis == "75") {
            produto.Base_Pis = 0;
            produto.Valor_Pis = 0;
            produto.Aliquota_Pis = 0;
            this.txtBasePIS.ReadOnly = true;
            this.txtAliquotaPIS.ReadOnly = true;
            this.txtValorPIS.ReadOnly = true;
        }
        else {
            this.txtBasePIS.ReadOnly = false;
            this.txtAliquotaPIS.ReadOnly = false;
            this.txtValorPIS.ReadOnly = false;
        }
        this.RefreshAngular();
    };
    C_Entrad.prototype.OnAlterouSTCofinsProduto = function (produto) {
        var zero = 0;
        if (!produto.St_Cofins) {
            produto.St_Cofins = "";
        }
        if (produto.St_Cofins == "70" || produto.St_Cofins == "71" ||
            produto.St_Cofins == "72" || produto.St_Cofins == "73" ||
            produto.St_Cofins == "74" || produto.St_Cofins == "75") {
            produto.Valor_Cofins = 0;
            produto.Base_Cofins = 0;
            produto.Aliquota_Cofins = 0;
            this.txtBaseCOFINS.Textbox.readOnly = true;
            this.txtAliquotaCOFINS.Textbox.readOnly = true;
            this.txtValorCOFINS.Textbox.readOnly = true;
        }
        else {
            this.txtBaseCOFINS.ReadOnly = false;
            this.txtAliquotaCOFINS.ReadOnly = false;
            this.txtValorCOFINS.ReadOnly = false;
        }
        this.RefreshAngular();
    };
    C_Entrad.prototype.OnAlterouCSTProduto = function (produto) {
        try {
            var parametros;
            var habilitarIcms;
            var habilitarIcmsSt;
            var zero;
            if (!produto.Cst) {
                produto.Cst = "";
            }
            zero = 0;
            parametros = {
                cst: produto.Cst
            };
            habilitarIcms = this.ExecutarFuncaoServerSideSynch("HabilitarCamposIcms", parametros);
            habilitarIcmsSt = this.ExecutarFuncaoServerSideSynch("HabilitarCamposIcmsSt", parametros);
            // ICMS
            if (habilitarIcms) {
                this.txtBaseICMSR.ReadOnly = false;
                this.txtICMS.ReadOnly = false;
            }
            else {
                produto.Aliquota_Icms = 0;
                produto.Valor_Base_Icms = 0;
                produto.Valor_Icms = 0;
                this.txtICMS.ReadOnly = true;
                this.txtBaseICMSR.ReadOnly = true;
            }
            //ICMS ST
            if (habilitarIcmsSt) {
                this.txtBaseIcmsStR.ReadOnly = false;
                this.txtIcmsStP.ReadOnly = false;
                this.txtIcmsStR.ReadOnly = false;
            }
            else {
                produto.Base_Icms_St = 0;
                produto.Icms_St_Un = 0;
                this.txtIcmsStP.Textbox.value = zero.Format(this.txtIcmsStP.QuantidadeCasas);
                this.txtIcmsStP.ReadOnly = true;
                this.txtIcmsStR.ReadOnly = true;
                this.txtBaseIcmsStR.ReadOnly = true;
            }
            this.AlterouQuantidadeProduto(null, null);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.RecalcularValorIcms = function (produto) {
        if (!produto.Valor_Base_Icms) {
            produto.Valor_Base_Icms = 0;
        }
        if (!produto.Aliquota_Icms) {
            produto.Aliquota_Icms = 0;
        }
        if (!produto.Valor_Icms) {
            produto.Valor_Icms = 0;
        }
        if (!produto.Valor_Base_Icms || !produto.Aliquota_Icms)
            return;
        var valorIcms;
        valorIcms = (produto.Aliquota_Icms / 100) * produto.Valor_Base_Icms;
        produto.Valor_Icms = valorIcms;
        this.RefreshAngular();
    };
    C_Entrad.prototype.RecalcularValorPisProduto = function (produto) {
        var valorPis = 0;
        if (!produto.Aliquota_Pis) {
            produto.Aliquota_Pis = 0;
        }
        if (!produto.Base_Pis) {
            produto.Base_Pis = 0;
        }
        valorPis = (produto.Aliquota_Pis / 100) * produto.Base_Pis;
        produto.Valor_Pis = valorPis;
        this.RefreshAngular();
    };
    C_Entrad.prototype.RecalcularValorIcmsStProduto = function (produto) {
        var valorSt = 0;
        if (!produto.Base_Icms_St) {
            produto.Base_Icms_St = 0;
        }
        valorSt = (this.txtIcmsStP.GetText().CNum() / 100) * produto.Base_Icms_St;
        produto.Icms_St_Un = valorSt;
        this.RefreshAngular();
    };
    C_Entrad.prototype.RecalcularValorCofinsProduto = function (produto) {
        var valorCofins = 0;
        if (!produto.Aliquota_Cofins) {
            produto.Aliquota_Cofins = 0;
        }
        if (!produto.Base_Cofins) {
            produto.Base_Cofins = 0;
        }
        valorCofins = (produto.Aliquota_Cofins / 100) * produto.Base_Cofins;
        produto.Valor_Cofins = valorCofins;
        this.RefreshAngular();
    };
    C_Entrad.prototype.PreencherBaseImpostosProduto = function () {
        if (!this.Produto) {
            return;
        }
        if (this.txtBaseICMSR && this.txtBaseICMSR.Textbox && this.txtBaseICMSR.Textbox.readOnly == false) {
            this.Produto.Valor_Base_Icms = CNum(this.txtTotalProduto.GetText());
        }
        else {
            this.Produto.Valor_Base_Icms = 0;
        }
        this.RecalcularValorIcms(this.Produto);
        if (this.txtBaseIcmsStR && this.txtBaseIcmsStR.Textbox && this.txtBaseIcmsStR.Textbox.readOnly == false) {
            this.Produto.Base_Icms_St = CNum(this.txtTotalProduto.GetText());
        }
        else {
            this.Produto.Base_Icms_St = 0;
        }
        this.RecalcularValorIcmsStProduto(this.Produto);
        if (this.txtBasePIS && this.txtBasePIS.Textbox && this.txtBasePIS.Textbox.readOnly == false) {
            this.Produto.Base_Pis = CNum(this.txtTotalProduto.GetText());
        }
        else {
            this.Produto.Base_Pis = 0;
        }
        this.RecalcularValorPisProduto(this.Produto);
        if (this.txtBaseCOFINS && this.txtBaseCOFINS.Textbox && this.txtBaseCOFINS.Textbox.readOnly == false) {
            this.Produto.Base_Cofins = CNum(this.txtTotalProduto.GetText());
        }
        else {
            this.Produto.Base_Cofins = 0;
        }
        this.RecalcularValorCofinsProduto(this.Produto);
    };
    //#endregion
    //#region "Importar XML Entrada"
    C_Entrad.prototype.OnClickBotaoImportarNFE = function (s, e) {
        try {
            e.processOnServer = false;
            if (!this.EntityTela)
                return;
            if (CNum(this.EntityTela.Chave) > 0) {
                MostrarAlerta("Não é possível importar um arquivo XML para uma nota já gravada");
                return;
            }
            if (ValoresSismoura.ConfiguracoesRetaguarda.Entrada_Produto_Bloquear_Des_Dif && CNum(this.EntityTela.Empresa) <= 0) {
                MostrarAlerta("Preencha corretamente o campo empresa");
                return;
            }
            if (!String.IsNullOrWhiteSpace(this.EntityTela.Nota_Fiscal)) {
                MostrarAlerta("Para importar a NFE o campo NF não deve ser preenchido");
                return;
            }
            if (CNum(this.EntityTela.Codigo_Fornecedor) > 0) {
                MostrarAlerta("Para importar a NFE o campo Fornecedor não deve ser preenchido");
                return;
            }
            this.EntityTela.Tipo_Nf = 0; //nota fiscal
            this.EntityTela.Modelo_Nota = 55; //nota fiscal eletronica        
            this.LimparDialogXML();
            this.grdPendentes.PreencherGrid([]);
            this.ListaUnitarizados = [];
            this.tabNfes.SetActiveTabIndex(1);
            this.mdImportarXML.Show();
            this.tabNfes.SetActiveTabIndex(0);
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.LimparDialogXML = function () {
        this.LimparCamposImportarXML();
        this.PathXMLImportado = "";
        this.fpXML.Limpar();
    };
    C_Entrad.prototype.OnClickBotaoCarregarXML = function (s, e) {
        try {
            e.processOnServer = false;
            if (this.cboTipoImportacao.GetValue() == "1") {
                this.CarregarXML(this.PathXMLImportado);
            }
            else {
                if (String.IsNullOrWhiteSpace(this.txtChaveAcessoImportar.GetText())) {
                    MostrarAlerta("Informe a chave de acesso para importar!");
                    return;
                }
                var parametros = {
                    chaveAcesso: this.txtChaveAcessoImportar.GetText(),
                    empresa: this.EntityTela.Empresa,
                    tela: ValoresSismoura.NomeTela,
                    codUsuario: ValoresSismoura.UsuarioLogado,
                    caminhoSessao: this.hdnCaminhoSessao.value
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("DownloadNFByChave", parametros);
                if (!String.IsNullOrWhiteSpace(retorno)) {
                    this.PathXMLImportado = retorno;
                    this.CarregarXML(this.PathXMLImportado);
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.LimparCamposImportarXML = function () {
        this.lblFornecedorXML.Text = "";
        $(this.lblFornecedorXML.LabelComponente).css("color", "black");
        this.NFeImportada = {};
        this.itensPedido = [];
        this.lstPedidos.RemoverTodosItens();
        this.grdItensArquivo.PreencherGrid([]);
        this.ListaUnitarizados = [];
        this.hdnNomeArquivo.value = "" + (new Date()).getTime();
    };
    C_Entrad.prototype.CarregarXML = function (fileName) {
        var _this = this;
        this.LimparCamposImportarXML();
        this.RefreshAngular();
        if (String.IsNullOrWhiteSpace(fileName)) {
            MostrarAlerta("Nenhum arquivo foi importado!");
            return;
        }
        var parametros = {
            nomeArquivo: fileName,
            codEmpresa: CNum(this.EntityTela.Empresa)
        };
        abrirEspera("");
        this.ExecutarFuncaoServerSideAsynch("CarregarArquivoXml", parametros, function (d) {
            try {
                var retorno = GetRetornoAJAX(d);
                fecharEspera();
                if (!retorno) {
                    MostrarAlerta("Ocorreu um erro ao obter os dados da nota fiscal");
                    return;
                }
                if (!String.IsNullOrWhiteSpace(retorno.Mensagem_Alerta)) {
                    MostrarAlerta(retorno.Mensagem_Alerta);
                    if (retorno.Chave_Entrada && retorno.Chave_Entrada > 0) {
                        _this.mdImportarXML.Hide();
                        setTimeout(function () {
                            _this.PreencherEntidade("" + retorno.Chave_Entrada);
                        }, 100);
                    }
                    return;
                }
                _this.NFeImportada = retorno;
                _this.lblFornecedorXML.Text = retorno.Fornecedor_Razao_Social;
                if (!retorno.Fornecedor_Codigo) {
                    MostrarAlerta("O fornecedor não está cadastrado!");
                    $(_this.lblFornecedorXML.LabelComponente).css("color", "red");
                }
                else {
                    _this.grdItensArquivo.PreencherGrid(retorno.Produtos);
                    _this.EntityTela.Conteudo_Arquivo_Xml = retorno.Nota_Conteudo_XML;
                    _this.VerificarAtivarProdutosEntrada(retorno.Produtos);
                }
                if (retorno.Duplicatas) {
                    _this.dup = retorno.Duplicatas;
                }
                else {
                    _this.dup = [];
                }
                if (retorno.Pedidos) {
                    for (var i = 0; i < retorno.Pedidos.length; i++) {
                        _this.lstPedidos.AdicionarItem(retorno.Pedidos[i].toString(), retorno.Pedidos[i]);
                    }
                }
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
    C_Entrad.prototype.OnFileUploadXMLCompleted = function (s, e) {
        try {
            this.custo = [];
            if (this.fpXML && this.fpXML.File) {
                this.PathXMLImportado = this.fpXML.PathSalvarArquivo + this.fpXML.File.name;
                this.CarregarXML(this.PathXMLImportado);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnClickBotaoCadForn = function (s, e) {
        try {
            e.processOnServer = false;
            if (!this.NFeImportada || !this.NFeImportada.Carregado) {
                MostrarAlerta("Ainda não foi importada uma NFe");
                return;
            }
            var parametros = [];
            if (CNum(this.NFeImportada.Fornecedor_Codigo) > 0) {
                parametros.push("codigo=" + CNum(this.NFeImportada.Fornecedor_Codigo));
            }
            else {
                parametros.push("cnpj=" + this.FormataValorURL(this.NFeImportada.Fornecedor_CNPJ));
                parametros.push("razao=" + this.FormataValorURL(this.NFeImportada.Fornecedor_Razao_Social));
                parametros.push("fantasia=" + this.FormataValorURL(this.NFeImportada.Fornecedor_Fantasia));
                parametros.push("logradouro=" + this.FormataValorURL(this.NFeImportada.Fornecedor_Logradouro));
                parametros.push("numero=" + this.FormataValorURL(this.NFeImportada.Fornecedor_Numero_Endereco));
                parametros.push("bairro=" + this.FormataValorURL(this.NFeImportada.Fornecedor_Bairro));
                parametros.push("cep=" + this.FormataValorURL(this.NFeImportada.Fornecedor_CEP));
                parametros.push("cidadeibge=" + this.FormataValorURL(this.NFeImportada.Fornecedor_Cidade_IBGE));
                parametros.push("ie=" + this.FormataValorURL(this.NFeImportada.Fornecedor_IE));
                parametros.push("tipo=" + this.FormataValorURL(this.NFeImportada.Fornecedor_Tipo));
            }
            this.dlgTelaModal.AbrirTelaModal(formataURLRelativa(URLTela.CadastroDeFornecedor), parametros, this.RETORNO_CAD_FORN);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.FormataValorURL = function (valor) {
        if (valor == null || valor == undefined) {
            return "";
        }
        else {
            return valor;
        }
    };
    C_Entrad.prototype.OnRetornouTelaModalCadastro = function (s, e) {
        try {
            if (e.IDComponenteProcura == this.RETORNO_CAD_FORN) {
                this.CarregarXML(this.PathXMLImportado);
            }
            else if (e.IDComponenteProcura == this.RETORNO_CAD_PROD) {
                this.CarregarXML(this.PathXMLImportado);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnGerouLinhaProdutoNFE = function (s, e) {
        if (e.rowType == "data") {
            var item = e.row.data;
            var codigo = CNum(item.Codigo_Produto);
            if (codigo <= 0) {
                e.cellElement.css("color", "red");
            }
            if (item.PossuiVariosVinculos) {
                e.cellElement.css("color", "blue");
            }
            var itemUnitarizado = this.ListaUnitarizados.FirstOrDefault("IdLinhaGrade", item.Contador);
            if (itemUnitarizado) {
                e.cellElement.css("color", "green");
            }
        }
    };
    C_Entrad.prototype.OnClicouBotaoLinhaProdutoNFe = function (s, e) {
        var _this = this;
        try {
            if (!e.data) {
                return;
            }
            var item = e.data;
            if (e.commandName == "cadastrar_produto") {
                var parametros = [];
                if (CNum(item.Codigo_Produto) > 0) {
                    parametros.push("codigo=" + CNum(item.Codigo_Produto));
                }
                else {
                    parametros.push("nome=" + this.FormataValorURL(item.Descricao_Produto_Fornecedor));
                    parametros.push("custo=" + CNum(item.Valor_Unitario).Format(5));
                    parametros.push("unidade=" + this.FormataValorURL(item.Unidade));
                    parametros.push("ncm=" + this.FormataValorURL(item.NCM));
                    parametros.push("qtdecx=" + CNum(item.Qtde_Caixa).Format(5));
                    parametros.push("codbarras=" + this.FormataValorURL(item.Codigo_Barras));
                    parametros.push("codprodutofornecedor=" + this.FormataValorURL(item.Codigo_Produto_Fornecedor));
                    parametros.push("codigofornecedor=" + this.FormataValorURL(item.Codigo_Fornecedor));
                }
                this.dlgTelaModal.AbrirTelaModal(formataURLRelativa(URLTela.CadastroDeProduto), parametros, this.RETORNO_CAD_PROD);
            }
            else if (e.commandName == "selecionar_produto") {
                if (CNum(item.Codigo_Produto) > 0) {
                    MsgBoxJS("Já existe um produto informado para este registro da NFE. Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                        if (result.Resultado == MsgBoxResult.Yes) {
                            _this.AbrirModalVincular(item);
                        }
                    }, null);
                }
                else {
                    this.AbrirModalVincular(item);
                }
            }
            else if (e.commandName == "unitarizar_produto") {
                this.AbrirModalUnitarizar(item.Contador, CNum(item.Quantidade), item);
            }
            else if (e.commandName == "informar_anilha") {
                this.AbrirModalAnilhas(item);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.AbrirModalAnilhas = function (itemXML) {
        try {
            this._importacaoNFe = true;
            this.ItemNFEAtual = itemXML;
            if (!this.ItemNFEAtual) {
                MostrarAlerta("Nenhum item foi selecionado para vincular!");
                return;
            }
            var parametros = {
                codProduto: itemXML.Codigo_Produto
            };
            var AbrirModalAnilha = this.ExecutarFuncaoServerSideSynch("AbrirModalAnilha", parametros);
            if (!AbrirModalAnilha || AbrirModalAnilha == false) {
                MostrarAlerta("Só é possível informar microchip/anilhas para produtos marcados como animais silvestres!");
                return;
            }
            if (itemXML.ProdutoAnilhas) {
                this.Anilhas = itemXML.ProdutoAnilhas;
            }
            else {
                this.Anilhas = [];
                this.grdMicrochip.Limpar();
            }
            this.grdMicrochip.AtualizarGrid;
            this.GetScope().$apply();
            this.lblTotalProduto.Text = itemXML.Quantidade.Format(0);
            this.mdAnilha.ModalDialog.Show();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.AbrirFornecedor = function () {
        try {
            this.mdFornecedor.ModalDialog.Show();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.AbrirModalVincular = function (item) {
        this.ItemNFEAtual = item;
        this.mdVincularProduto.Show();
        this.txtVincularProduto.Focus();
    };
    C_Entrad.prototype.OnClickBotaoVinculaProdutoFechar = function (s, e) {
        e.processOnServer = false;
        this.mdVincularProduto.Hide();
    };
    C_Entrad.prototype.OnClickBotaoVinculaProdutoOK = function (s, e) {
        var _this = this;
        try {
            e.processOnServer = false;
            if (!this.ItemNFEAtual) {
                MostrarAlerta("Nenhum item foi selecionado para vincular!");
                return;
            }
            if (this.txtVincularProduto.GetText().CNum() <= 0) {
                MostrarAlerta("Informe o produto que deseja vincular!");
                return;
            }
            MsgBoxJS("Ao selecionar este produto ele será automaticamente vinculado ao fornecedor da nota para ser utilizado em futuras entradas de produto. Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.Yes) {
                    var parametros = {
                        codigoProdutoFornecedor: _this.ItemNFEAtual.Codigo_Produto_Fornecedor,
                        codProdutoVincular: _this.txtVincularProduto.GetText().CNum(),
                        codFornecedorVincular: _this.ItemNFEAtual.Codigo_Fornecedor,
                        codEmpresaVincular: _this.EntityTela.Empresa,
                        nomeTela: ValoresSismoura.NomeTela,
                        codUsuario: ValoresSismoura.UsuarioLogado
                    };
                    var retorno = _this.ExecutarFuncaoServerSideSynch("VincularProdutoFornecedor", parametros);
                    if (!String.IsNullOrWhiteSpace(retorno)) {
                        MostrarAlerta(retorno);
                    }
                    else {
                        var lista = _this.grdItensArquivo.DataSource;
                        var item = lista.FirstOrDefault("Contador", _this.ItemNFEAtual.Contador);
                        if (item) {
                            item.Codigo_Produto = _this.txtVincularProduto.GetText().CNum();
                            item.Descricao_Produto = _this.txtVincularProduto.GetResultado();
                            if (item.PossuiVariosVinculos) {
                                parametros = {
                                    codProSistema: item.Codigo_Produto,
                                    codFornecedor: _this.ItemNFEAtual.Codigo_Fornecedor
                                };
                                var qtde = _this.ExecutarFuncaoServerSideSynch("RetornaQtdeCaixa", parametros);
                                if (qtde <= 0) {
                                    qtde = 1;
                                }
                                item.Qtde_Caixa = qtde;
                            }
                        }
                        _this.grdItensArquivo.PreencherGrid(lista);
                        _this.mdVincularProduto.Hide();
                    }
                }
            }, null);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnClickBotaoProcuraPendentes = function (s, e) {
        try {
            e.processOnServer = false;
            var parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("GetDFE", parametros);
            this.grdPendentes.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnSelecionouLinhaGrdPendentes = function (s, e) {
        try {
            var item = e.data;
            var parametros = {
                chaveAcesso: ("" + item.Chave_Acesso),
                hdnCaminhoSessao: this.hdnCaminhoSessao.value
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("SelecionarDFE", parametros);
            if (!String.IsNullOrWhiteSpace(retorno)) {
                this.PathXMLImportado = retorno;
                this.tabNfes.SetActiveTabIndex(1);
                this.CarregarXML(this.PathXMLImportado);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.ConferirPedidos = function () {
        var encontrouInconsistencia = false;
        for (var i = 0; i < this.NFeImportada.Produtos.length; i++) {
            var item;
            item = this.NFeImportada.Produtos[i];
            var itemPedido = this.itensPedido.FirstOrDefault("Produto_Pedido", item.Codigo_Produto);
            if (!itemPedido) {
                var addItemPedido = {};
                addItemPedido.Codigo_Pedido = 0;
                addItemPedido.Descricao_Produto_NFe = item.Descricao_Produto_Fornecedor;
                addItemPedido.Numero_NFe = this.NFeImportada.Nota_Numero;
                addItemPedido.Produto_NFe = item.Codigo_Produto;
                addItemPedido.Produto_Preco_NFe = item.Valor_Unitario;
                addItemPedido.Produto_Quantidade_NFe = item.Quantidade;
                addItemPedido.NaoExistePedido = true;
                encontrouInconsistencia = true;
                this.NFeImportada.Produtos[i].Codigo_Pedido = item.Codigo_Pedido;
                this.itensPedido.push(addItemPedido);
            }
            else {
                itemPedido.Descricao_Produto_NFe = item.Descricao_Produto_Fornecedor;
                itemPedido.Numero_NFe = this.NFeImportada.Nota_Numero;
                itemPedido.Produto_NFe = item.Codigo_Produto;
                itemPedido.Produto_Preco_NFe = item.Valor_Unitario;
                itemPedido.Produto_Quantidade_NFe = item.Quantidade;
                itemPedido.NaoExistePedido = false;
                itemPedido.NaoExisteEntrada = false;
                if ((itemPedido.Produto_Preco_NFe != itemPedido.Produto_Preco_Pedido) && (itemPedido.Produto_Quantidade_NFe != itemPedido.Produto_Quantidade_Pedido)) {
                    itemPedido.PrecoDiferente = true;
                    itemPedido.QuantidadeDiferente = true;
                    encontrouInconsistencia = true;
                }
                else if ((itemPedido.Produto_Preco_NFe != itemPedido.Produto_Preco_Pedido)) {
                    itemPedido.PrecoDiferente = true;
                    encontrouInconsistencia = true;
                }
                else if ((itemPedido.Produto_Quantidade_NFe != itemPedido.Produto_Quantidade_Pedido)) {
                    itemPedido.QuantidadeDiferente = true;
                    encontrouInconsistencia = true;
                }
            }
        }
        var novaLista = [];
        for (var i = 0; i < this.itensPedido.length; i++) {
            var itemPedido;
            itemPedido = this.itensPedido[i];
            if (itemPedido.NaoExisteEntrada || itemPedido.NaoExistePedido || itemPedido.PrecoDiferente || itemPedido.QuantidadeDiferente) {
                novaLista.push(itemPedido);
            }
        }
        this.itensPedido = novaLista;
        return encontrouInconsistencia;
    };
    C_Entrad.prototype.ImportarProdutos = function () {
        try {
            this.EntradaProdutoAjustes = [];
            for (var x = 0; x <= this.NFeImportada.Produtos.length - 1; x++) {
                var itemOriginal = this.NFeImportada.Produtos[x];
                var itemUnitarizar = this.ListaUnitarizados.FirstOrDefault("IdLinhaGrade", itemOriginal.Contador);
                if (!itemUnitarizar) {
                    if (CNum(itemOriginal.Codigo_Produto) <= 0) {
                        MostrarAlerta("Alguns produtos da nota não foram vinculados com produtos do sistema");
                        return;
                    }
                    if (String.IsNullOrWhiteSpace(itemOriginal.CST)) {
                        MostrarAlerta("Existem produtos sem CST informado. Verifique se o XML importado é válido");
                        return;
                    }
                }
                var parametros = {
                    codProduto: itemOriginal.Codigo_Produto
                };
                var AbrirModalAnilha = this.ExecutarFuncaoServerSideSynch("AbrirModalAnilha", parametros);
                if (AbrirModalAnilha && AbrirModalAnilha == true) {
                    if (!itemOriginal.ProdutoAnilhas || itemOriginal.ProdutoAnilhas.length == 0) {
                        MostrarAlerta("Existem animais silvestres sem anilhas informadas");
                        return;
                    }
                }
            }
            this.Produtos = [];
            this.Servicos = [];
            this.Duplicatas = [];
            if (this.dup && this.dup.length > 0) {
                this.isPossuiFaturaXML = true;
                var cont = 0;
                for (var x = 0; x < this.dup.length; x++) {
                    cont += 1;
                    this.Duplicatas[x] = this.dup[x];
                    this.Duplicatas[x].Contador = cont;
                }
                this.dup = [];
            }
            else {
                if (ValoresSismoura.ConfiguracoesRetaguarda.Solicar_Fatura_XML) {
                    this.isPossuiFaturaXML = false;
                }
                else {
                    this.isPossuiFaturaXML = true;
                }
            }
            var entity = this.EntityTela;
            entity.Nota_Fiscal = this.NFeImportada.Nota_Numero;
            entity.Serie = this.NFeImportada.Nota_Serie;
            entity.Codigo_Fornecedor = this.NFeImportada.Fornecedor_Codigo;
            entity.Data_Emissao = ConvertToDate(this.NFeImportada.Nota_Data_Emissao);
            entity.Data_Entrada = ConvertToDate(this.NFeImportada.Nota_Data_Entrada);
            entity.Empresa = this.NFeImportada.Empresa_Codigo;
            this.AtualizarDeposito(entity, entity.Empresa, true);
            entity.Chave_Nfe = this.NFeImportada.Nota_Chave_Acesso;
            entity.Desconto = this.NFeImportada.Nota_Valor_Desconto;
            entity.Base_Icms = this.NFeImportada.Nota_Base_ICMS;
            entity.Valor_Frete = this.NFeImportada.Nota_Valor_Frete;
            entity.Despesas = this.NFeImportada.Nota_Outras_Despesas;
            entity.Valor_Icms = this.NFeImportada.Nota_Valor_ICMS;
            entity.Valor_Subst = this.NFeImportada.Nota_Valor_ICMS_ST;
            entity.Valor_Ipi = this.NFeImportada.Nota_Valor_IPI;
            entity.Valor_Seguro = this.NFeImportada.Nota_Valor_Seguro;
            if (CNum(entity.Valor_Frete) > 0) {
                entity.Frete_Incluso = true;
            }
            if (CNum(entity.Valor_Seguro) > 0) {
                entity.Ulti_Vseguro = false;
            }
            entity.Observacao = this.NFeImportada.Nota_Informacoes_Adicionais;
            entity.Peso_Bruto = this.NFeImportada.Nota_Peso_Bruto;
            entity.Peso_Liq = this.NFeImportada.Nota_Peso_Liquido;
            var ListaLotesNfe = [];
            for (var x = 0; x <= this.NFeImportada.Produtos.length - 1; x++) {
                var itemOriginal = this.NFeImportada.Produtos[x];
                var itemUnitarizar = this.ListaUnitarizados.FirstOrDefault("IdLinhaGrade", itemOriginal.Contador);
                if (!itemUnitarizar) {
                    this.AdicionarProdutoXMLNaEntrada(itemOriginal, false, entity.Codigo_Fornecedor, ConvertToDate(entity.Data_Entrada), CNum(entity.Deposito), ListaLotesNfe);
                }
                else {
                    if (!itemOriginal.Quantidade) {
                        itemOriginal.Quantidade = 1;
                    }
                    for (var i = 0; i <= itemUnitarizar.Produtos.length - 1; i++) {
                        var itemAdd = cloneObject(itemOriginal);
                        var produtoUnitarizado = itemUnitarizar.Produtos[i];
                        itemAdd.Codigo_Produto = produtoUnitarizado.Codigo_Produto;
                        itemAdd.Descricao_Produto = produtoUnitarizado.Descricao_Produto;
                        itemAdd.Quantidade = CNum(produtoUnitarizado.Quantidade);
                        if (itemAdd.Quantidade <= 0) {
                            itemAdd.Quantidade = 1;
                        }
                        itemAdd.Valor_Unitario = CNum(itemAdd.Valor_Total) / CNum(itemOriginal.Quantidade);
                        itemAdd.Codigo_Barras = "";
                        itemAdd.Valor_Desconto = (CNum(itemAdd.Valor_Desconto) / CNum(itemOriginal.Quantidade)) * itemAdd.Quantidade;
                        itemAdd.Valor_Total = itemAdd.Valor_Unitario * itemAdd.Quantidade;
                        itemAdd.Base_ICMS = (CNum(itemAdd.Base_ICMS) / CNum(itemOriginal.Quantidade)) * itemAdd.Quantidade;
                        itemAdd.Valor_ICMS = CNum(itemAdd.Base_ICMS) * (CNum(itemAdd.Aliquota_ICMS) / 100);
                        itemAdd.Base_ICMS_ST = (CNum(itemAdd.Base_ICMS_ST) / CNum(itemOriginal.Quantidade)) * itemAdd.Quantidade;
                        if (CNum(itemAdd.Base_ICMS_ST) * (CNum(itemAdd.Aliquota_ICMS_ST) / 100) > CNum(itemAdd.Valor_ICMS)) {
                            itemAdd.Valor_ICMS_ST = (CNum(itemAdd.Base_ICMS_ST) * (CNum(itemAdd.Aliquota_ICMS_ST) / 100)) - CNum(itemAdd.Valor_ICMS);
                        }
                        else {
                            itemAdd.Valor_ICMS_ST = 0;
                        }
                        itemAdd.Base_IPI = (CNum(itemAdd.Base_IPI) / CNum(itemOriginal.Quantidade)) * itemAdd.Quantidade;
                        itemAdd.Valor_IPI = CNum(itemAdd.Base_IPI) * (CNum(itemAdd.Aliquota_IPI) / 100);
                        itemAdd.Base_PIS = (CNum(itemAdd.Base_PIS) / CNum(itemOriginal.Quantidade)) * itemAdd.Quantidade;
                        itemAdd.Valor_PIS = CNum(itemAdd.Base_PIS) * (CNum(itemAdd.Aliquota_PIS) / 100);
                        itemAdd.Base_COFINS = (CNum(itemAdd.Base_COFINS) / CNum(itemOriginal.Quantidade)) * itemAdd.Quantidade;
                        itemAdd.Valor_COFINS = CNum(itemAdd.Base_COFINS) * (CNum(itemAdd.Aliquota_COFINS) / 100);
                        itemAdd.Valor_Frete = (CNum(itemAdd.Valor_Frete) / CNum(itemOriginal.Quantidade)) * itemAdd.Quantidade;
                        itemAdd.Valor_Outros = (CNum(itemAdd.Valor_Outros) / CNum(itemOriginal.Quantidade)) * itemAdd.Quantidade;
                        itemAdd.Valor_Ajuste = itemOriginal.Valor_Ajuste;
                        this.AdicionarProdutoXMLNaEntrada(itemAdd, false, entity.Codigo_Fornecedor, ConvertToDate(entity.Data_Entrada), CNum(entity.Deposito), ListaLotesNfe);
                    }
                }
            }
            var CSTDiferimento = [
                "20",
                "30",
                "40",
                "70",
                "90",
                "101"
            ];
            var tabelaAjuste = this.EntradaProdutoAjustes;
            var novaTabelaAjuste = [];
            for (x = 0; x < CSTDiferimento.length; x++) {
                var total = tabelaAjuste.FindAll("Cst", CSTDiferimento[x]).Sum("Valor");
                if (total > 0) {
                    var ajuste;
                    ajuste = tabelaAjuste.FirstOrDefault("Cst", CSTDiferimento[x]);
                    if (ajuste) {
                        var textoOrigem = this.GetTextoOrigem(ajuste.Origem);
                        var textoMotivo = this.GetTextoMotivo(ajuste.Motivo);
                        ajuste.Origem_Descricao = ajuste.Origem + ((textoOrigem != "") ? "-" + textoOrigem : "");
                        ajuste.Motivo_Descricao = ajuste.Motivo + ((textoMotivo != "") ? "-" + textoMotivo : "");
                        ajuste.Cod_Ajuste_Descricao = "";
                        ajuste.IsXML = true;
                        ajuste.Valor = total;
                        novaTabelaAjuste.push(ajuste);
                    }
                }
            }
            ;
            this.EntradaProdutoAjustes = [];
            this.EntradaProdutoAjustes = novaTabelaAjuste;
            this.LotesInformados = ListaLotesNfe;
            this.CalcularTotalNota(entity);
            this.CarregarAbaDuplicatas();
            this.RefreshAngular();
            this.mdImportarXML.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnClickBotaoOkImportar = function (s, e) {
        var _this = this;
        try {
            e.processOnServer = false;
            if (!this.NFeImportada || !this.NFeImportada.Produtos || this.NFeImportada.Produtos.length <= 0) {
                MostrarAlerta("Não existem produtos a serem importados");
                return;
            }
            if (CNum(this.NFeImportada.Fornecedor_Codigo) <= 0) {
                MostrarAlerta("O fornecedor da nota fiscal de entrada ainda não foi cadastrado");
                return;
            }
            var pedidos = this.lstPedidos.SelectedValues;
            if (pedidos && pedidos.length > 0) {
                var parametros;
                parametros = {
                    Pedidos: pedidos
                };
                this.itensPedido = this.ExecutarFuncaoServerSideSynch("RetornaProdutosConferenciaPedidos", parametros);
                if (this.ConferirPedidos()) {
                    MsgBoxJS("Existem divergências entre a nota fiscal importada e o(s) pedido(s) de compra selecionado(s). Deseja visualizá-las?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (resultado) {
                        if (resultado.Resultado == MsgBoxResult.Yes) {
                            _this.grdConferenciaPedidos.PreencherGrid(_this.itensPedido);
                            _this.mdConferirPedido.ModalDialog.Show();
                        }
                        else {
                            _this.ImportarProdutos();
                        }
                    });
                }
                else {
                    MsgBoxJS("Não existem divergências entre o(s) pedido(s) de compra selecionado(s) e a NF-e importada!", MsgBoxOptions.OkOnly, MsgBoxIcon.Info);
                    this.ImportarProdutos();
                }
            }
            else {
                this.ImportarProdutos();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.AdicionarProdutoXMLNaEntrada = function (item, isUnitarizado, codFornecedor, dataEntrada, codDeposito, ListaLotesNfe) {
        this.grdProduto.Limpar();
        var prod = this.Produto;
        if (!prod) {
            prod = {};
        }
        prod.Contador = item.Contador;
        prod.Codigo_Produto_Fornecedor = item.Codigo_Produto_Fornecedor;
        prod.Codigo_Produto = item.Codigo_Produto;
        prod.Descricao_Produto = item.Descricao_Produto;
        prod.Quantidade = item.Quantidade;
        prod.Quantidade_Cx = (CNum(item.Qtde_Caixa) == 0 ? 1 : item.Qtde_Caixa);
        prod.Valor_Unitario = item.Valor_Unitario;
        if (item.Codigo_Barras && item.Codigo_Barras.length == 14) {
            var param = {
                codProduto: prod.Codigo_Produto,
                codBarras: item.Codigo_Barras,
                qtdeCaixa: prod.Quantidade_Cx,
                usuario: ValoresSismoura.UsuarioLogado,
                nomeTela: ValoresSismoura.NomeTela
            };
            this.ExecutarFuncaoServerSideSynch("AtualizaDun14", param);
        }
        if (CNum(item.Valor_Total) > 0) {
            prod.Desconto_P = CNum(item.Valor_Desconto) * 100 / CNum(item.Valor_Total);
        }
        prod.Aliquota_Icms = item.Aliquota_ICMS;
        prod.Aliquota_Ipi = item.Aliquota_IPI;
        prod.Valor_Ipi = item.Valor_IPI;
        prod.St_Ipi = item.ST_IPI;
        prod.Custo = item.Preco_Custo;
        prod.Referencia = item.Referencia;
        prod.Preco_Venda = item.Preco_Venda;
        prod.Frete_Rateado = item.Valor_Frete;
        prod.Cfop = item.CFOP;
        prod.Cst = item.CST;
        prod.Descricao_Cor = item.Descricao_Cor;
        prod.Tamanho = item.Tamanho;
        prod.Valor_Base_Icms = item.Base_ICMS;
        prod.Valor_Icms = item.Valor_ICMS;
        prod.Encargos_Financeiros = item.Valor_Outros;
        prod.Valor_Desconto = item.Valor_Desconto;
        prod.Icms_St_Un = item.Valor_ICMS_ST;
        prod.Data_Validade = item.Data_Validade;
        prod.Base_Icms_St = item.Base_ICMS_ST;
        prod.St_Pis = item.ST_PIS;
        prod.Aliquota_Pis = item.Aliquota_PIS;
        prod.Base_Pis = item.Base_PIS;
        prod.Valor_Pis = item.Valor_PIS;
        prod.St_Cofins = item.ST_COFINS;
        prod.Aliquota_Cofins = item.Aliquota_COFINS;
        prod.Base_Cofins = item.Base_COFINS;
        prod.Valor_Cofins = item.Valor_COFINS;
        prod.Descricao_Unidade = item.Unidade;
        prod.Ncm = item.NCM;
        prod.ProdutoAnilhas = item.ProdutoAnilhas;
        prod.Codigo_Pedido_Compra = item.Codigo_Pedido;
        prod.Valor_Ajuste = item.Valor_Ajuste;
        var parametros = {
            codProduto: CNum(prod.Codigo_Produto),
            tipoEntrada: CNum(this.EntityTela.Tipo_Entrada),
            codDeposito: CNum(this.EntityTela.Deposito),
            codEmpresa: CNum(this.EntityTela.Empresa)
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("ObterInformacoesProduto", parametros);
        prod.Conta_Contabil = retorno.Conta_Contabil_Financeira;
        if (!isUnitarizado && !String.IsNullOrWhiteSpace(item.Lote)) {
            var lote = {};
            lote.Lote = item.Lote;
            lote.Produto_Codigo = item.Codigo_Produto;
            lote.Produto_Descricao = item.Descricao_Produto;
            lote.Quantidade = item.Lote_Quantidade;
            lote.Fornecedor_Codigo = codFornecedor;
            lote.Fornecedor_Nome = "";
            lote.DataFabricacao = ConvertToDate(item.Data_Fabricacao);
            lote.Validade = ConvertToDate(item.Data_Validade);
            lote.DataRecebimento = dataEntrada;
            lote.Deposito_Codigo = codDeposito;
            lote.Deposito_Descricao = "";
            ListaLotesNfe.push(lote);
        }
        prod.Pintar_Linha_Controlado = item.Controlado;
        this.Produto = prod;
        this.grdProduto.AdicionarOuAlterarItemAtual();
        if (this.inseriuProduto && item.EntradaProdutoAjuste) {
            this.EntradaProdutoAjustes.push(item.EntradaProdutoAjuste);
        }
    };
    C_Entrad.prototype.OnClickBotaoLotes = function (s, e) {
        try {
            e.processOnServer = false;
            if (CNum(this.EntityTela.Chave) <= 0) {
                MostrarAlerta("Informe um registro cadastrado");
                return;
            }
            var parametros = {
                chaveEntrada: CNum(this.EntityTela.Chave)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrdLotesVinculados", parametros);
            this.grdLotesVinculados.PreencherGrid(retorno);
            this.mdLotesVinculados.Show();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.AbrirModalUnitarizar = function (idLinhaGrade, quantidadeEntrada, itemXML) {
        try {
            this.LimparCamposUnitarizar();
            this._quantidadeEntradaUnitarizar = quantidadeEntrada;
            var itemUnitarizado = this.ListaUnitarizados.FirstOrDefault("IdLinhaGrade", idLinhaGrade);
            if (!itemUnitarizado) {
                itemUnitarizado = {};
                itemUnitarizado.IdLinhaGrade = idLinhaGrade;
                itemUnitarizado.Produtos = [];
            }
            if (!itemUnitarizado.Produtos) {
                itemUnitarizado.Produtos = [];
            }
            this._itemUnitarizar = itemUnitarizado;
            this.lblProdutoUnitarizar.Text = itemXML.Codigo_Produto_Fornecedor + " - " + itemXML.Descricao_Produto_Fornecedor;
            this.mdUnitarizar.Show();
            this.grdUnitarizar.Grid.PreencherGrid(itemUnitarizado.Produtos);
            this.CalcularQtdeRestanteUnitarizar();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    /*protected OnClickAddUnitarizar() {
        try {
            this.CalcularQtdeRestanteUnitarizar();

            if (this.txtProdutoUnitarizar.GetText().CNum() <= 0) {
                MostrarAlerta("Informe o produto");
                return;
            }

            if (this.txtQtdeUnitarizar.GetText().CNum() <= 0) {
                MostrarAlerta("Informe a quantidade");
                return;
            }

            if (this.txtQtdeUnitarizar.GetText().CNum() > this.lblRestanteUnitarizar.Text.CNum()) {
                MostrarAlerta("A quantidade a adicionar não pode ser maior que a restante");
                return;
            }

            //var prod = this.grdUnitarizar.Grid.DataSource.FirstOrDefault("Codigo_Produto", this.txtProdutoUnitarizar.GetText().CNum());

            if (prod) {
                MsgBoxJS(
                    "Este produto já foi adicionado e a sua quantidade será substituída. Deseja continuar?",
                    MsgBoxOptions.YesNo,
                    MsgBoxIcon.Question,
                    (result: MsgBoxResultEventArgs) => {
                        if (result.Resultado == MsgBoxResult.Yes) {
                            this.AdicionarProdutoUnitarizar();
                        }
                    },
                    null
                )
            } else {
                this.AdicionarProdutoUnitarizar();
            }
        } catch (ex) {
            LogarException(ex);
        }
    }*/
    /*protected AdicionarProdutoUnitarizar() {
        var item: ProdutoUnitarizadoItem;
        var lista = this.grdUnitarizar.Grid.DataSource;

        item = lista.FirstOrDefault("Codigo_Produto", this.txtProdutoUnitarizar.GetText().CNum());

        if (!item) {
            item = <any>{};

            lista.push(item);
        }

        item.Codigo_Produto = this.txtProdutoUnitarizar.GetText().CNum();
        item.Descricao_Produto = this.txtProdutoUnitarizar.GetResultado();
        item.Quantidade = this.txtQtdeUnitarizar.GetText().CNum();

        this.grdUnitarizar.Grid.PreencherGrid(lista);

        this.LimparCamposUnitarizar();
        this.txtProdutoUnitarizar.Focus();

        this.CalcularQtdeRestanteUnitarizar();
    }*/
    C_Entrad.prototype.LimparCamposUnitarizar = function () {
        this.txtGrupo.Limpar();
        this.txtSubGrupo.Limpar();
        this.txtLinha.Limpar();
        this.txtMarca.Limpar();
        this.txtReferencia.Limpar();
        this.txtCor.Limpar();
        this.txtTamanho.Limpar();
        //this.grdUnitarizar.Grid.PreencherGrid(null);
        //this.ItensUnitarios = [];
    };
    C_Entrad.prototype.CalcularQtdeRestanteUnitarizar = function () {
        var totalRestante = this.grdUnitarizar.Grid.DataSource.Sum("Quantidade"); //this.ItensUnitarios.Sum("Quantidade");
        var totalEntrada = this._quantidadeEntradaUnitarizar;
        this.lblRestanteUnitarizar.Text = (totalEntrada - totalRestante).Format(ValoresSismoura.CasasDecimaisEstoque);
    };
    C_Entrad.prototype.OnClickOkUnitarizar = function () {
        try {
            this.CalcularQtdeRestanteUnitarizar();
            if (this.grdUnitarizar.Grid.DataSource.length <= 0) {
                MostrarAlerta("Informe os produtos que serão unitarizados.");
                return;
            }
            if (this.lblRestanteUnitarizar.Text.CNum() > 0) {
                MostrarAlerta("Ainda existe quantidade a ser unitarizada.");
                return;
            }
            if (!this._itemUnitarizar) {
                MostrarAlerta("Item a ser unitarizado não foi informado.");
                return;
            }
            var lista = this.ListaUnitarizados;
            var itemUnitarizar = this.ListaUnitarizados.FirstOrDefault("IdLinhaGrade", this._itemUnitarizar.IdLinhaGrade);
            if (!itemUnitarizar) {
                itemUnitarizar = this._itemUnitarizar;
                lista.push(itemUnitarizar);
            }
            itemUnitarizar.Produtos = this.grdUnitarizar.Grid.DataSource.filter(function (e) { return e.Quantidade > 0; }); // Atividade 1021585
            this.ListaUnitarizados = lista;
            this.mdUnitarizar.Hide();
            // Utilizado para pintar a linha do produto unitarizado de verde
            this.grdItensArquivo.Refresh();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnClickCancelarUnitarizar = function () {
        var _this = this;
        try {
            MsgBoxJS("Todas as alterações serão perdidas. Deseja mesmo sair?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (e) {
                if (e.Resultado == MsgBoxResult.Yes) {
                    _this.mdUnitarizar.Hide();
                }
            }, null);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnExcluiuLinhaUnitarizar = function (s, e) {
        this.CalcularQtdeRestanteUnitarizar();
    };
    //'Private Sub btnOkImportar_Click(sender As Object, e As EventArgs) Handles btnOkImportar.Click
    //'    Try
    //'        Dim lista As List(Of EntradaProdutoItensRetorno) = ListaProdutos
    //'        Dim prod As EntradaProdutoItensRetorno
    //'        Dim lote As ItemMovimentacaoLote = Nothing
    //'        'If lista Is Nothing Then
    //'        lista = New List(Of EntradaProdutoItensRetorno)
    //'        'End If
    //'        If ListaLotesNfe Is Nothing Then
    //'            ListaLotesNfe = New List(Of ItemMovimentacaoLote)
    //'        End If
    //'        'Conteudo Xml
    //'        txtCarregarXml.Text = hdnCarregarXml.Value
    //'        hdnNfeImportada.Value = txtChaveAcessoXml.Text
    //'End Sub
    //#endregion
    //#region Distribuição de combustíveis
    C_Entrad.prototype.OnComboBoxCombustivelChange = function () {
        if (!this.cboTanque || !this.cboCombustivel)
            return;
        var parametros;
        var itens;
        var valorRestante;
        parametros = {
            codCombustivel: this.cboCombustivel.GetValue(),
            codEmpresa: CNum(this.EntityTela.Empresa)
        };
        itens = this.ExecutarFuncaoServerSideSynch("PreencherComboTanque", parametros);
        this.cboTanque.ClearItems();
        for (var x = 0; x < itens.length; x++) {
            this.cboTanque.AddItem(itens[x].Descricao, itens[x].Codigo, "");
        }
        if (this.cboTanque.GetItemCount() == 1) {
            this.cboTanque.SetSelectedIndex(0);
        }
        else {
            this.cboTanque.SetText("");
        }
        this.CalculaTotalCombustivelRestante();
    };
    C_Entrad.prototype.VerificaCombustiveis = function (entity) {
        var abrirModal = false;
        this.cboCombustivel.ClearItems();
        var combustiveis = cloneArray(this.Combustiveis);
        for (var x = 0; x <= combustiveis.length - 1; x++) {
            var item = combustiveis[x];
            this.cboCombustivel.AddItem(item.Descricao_Produto, item.Codigo_Produto, "");
            abrirModal = true;
        }
        if (abrirModal) {
            this.CalculaTotalCombustivelRestante();
            this.mdCombustiveis.Show();
            this.cboCombustivel.Focus();
            false;
        }
        else {
            return true;
        }
    };
    C_Entrad.prototype.OnClickFecharCombustivel = function () {
        MostrarAlerta("Para gravar a nota é necessário fazer a distribuição dos combustíveis!");
        this.mdCombustiveis.Hide();
    };
    C_Entrad.prototype.OnClickOKCombustivel = function () {
        try {
            if (this.ListaRateioCombustivel.length <= 0) {
                MostrarAlerta("É necessário distribuir os combustíveis");
                return;
            }
            for (var x = 0; x <= this.ListaRateioCombustivel.length - 1; x++) {
                var item = this.Combustiveis.FirstOrDefault("Codigo_Produto", this.ListaRateioCombustivel[x].Codigo_Produto);
                if (!item) {
                    MostrarAlerta("Existem registros na grade que foram removidos da entrade de produto");
                    return;
                }
            }
            var codCombustivel = 0;
            for (var x = 0; x <= this.Combustiveis.length - 1; x++) {
                codCombustivel = this.Combustiveis[x].Codigo_Produto;
                var disponivel = this.Combustiveis.FindAll("Codigo_Produto", codCombustivel).Sum("Quantidade");
                var adicionado = this.ListaRateioCombustivel.FindAll("Codigo_Produto", codCombustivel).Sum("Quantidade");
                if (disponivel != adicionado) {
                    MostrarAlerta("A quantidade distribuída do combustível " + this.Combustiveis[x].Descricao_Produto + " é diferente da quantidade disponível");
                    return;
                }
            }
            this.mdCombustiveis.Hide();
            this.ValidacoesEntrada.ValidouCombustivel = true;
            this.ClicarGravar();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnClickAdicionarCombustivel = function () {
        try {
            this.CalculaTotalCombustivelRestante();
            if (this.lblCombustivelRestante.Text.CNum() <= 0) {
                MostrarAlerta("Não existe quantidade restante a ser adicionada");
                return;
            }
            if (CNum(this.cboCombustivel.GetValue()) <= 0) {
                MostrarAlerta("Preencha corretamente o campo Combustível");
                return;
            }
            if (CNum(this.cboTanque.GetValue()) <= 0) {
                MostrarAlerta("Preencha corretamente o campo Tanque");
                return;
            }
            if (CNum(this.txtQtdTanque.GetText()) <= 0) {
                MostrarAlerta("Preencha corretamente o campo Quantidade");
                return;
            }
            if (CNum(this.txtQtdTanque.GetText()) > this.lblCombustivelRestante.Text.CNum()) {
                MostrarAlerta("A quantidade informada é maior do que a quantidade disponível");
                return;
            }
            var lista = this.ListaRateioCombustivel;
            var contador = lista.Max("Contador") + 1;
            var itemTanque = {};
            itemTanque.Contador = contador;
            itemTanque.Codigo_Produto = CNum(this.cboCombustivel.GetValue());
            itemTanque.Descricao_Produto = this.cboCombustivel.GetText();
            itemTanque.Codigo_Tanque = CNum(this.cboTanque.GetValue());
            itemTanque.Descricao_Tanque = this.cboTanque.GetText();
            itemTanque.Quantidade = this.txtQtdTanque.GetText().CNum();
            lista.push(itemTanque);
            this.ListaRateioCombustivel = lista;
            this.CalculaTotalCombustivelRestante();
            this.LimpaCamposCombustivel();
            this.cboCombustivel.Focus();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.CalculaTotalCombustivelRestante = function () {
        var disponivel = 0;
        var adicionado = 0;
        var restante = 0;
        var codCombustivel = CNum(this.cboCombustivel.GetValue());
        disponivel = this.Combustiveis.FindAll("Codigo_Produto", codCombustivel).Sum("Quantidade");
        adicionado = this.ListaRateioCombustivel.FindAll("Codigo_Produto", codCombustivel).Sum("Quantidade");
        restante = disponivel - adicionado;
        if (restante < 0) {
            restante = 0;
        }
        this.lblCombustivelRestante.Text = (restante).Format(ValoresSismoura.CasasDecimaisEstoque);
    };
    C_Entrad.prototype.LimpaCamposCombustivel = function () {
        this.txtQtdTanque.SetText((0).Format(this.txtQtdTanque.QuantidadeCasas));
    };
    C_Entrad.prototype.OnExcluiuCombustivelGrade = function (s, e) {
        this.CalculaTotalCombustivelRestante();
    };
    //#endregion
    //#region "Importar Pedido de compra"
    C_Entrad.prototype.OnClickFecharPedidos = function () {
        this.ProdutosPedido = [];
        this.mdPedidos.Hide();
    };
    C_Entrad.prototype.OnClickBotaoPedidos = function () {
        try {
            var Entity = this.EntityTela;
            if (!Entity)
                return;
            if (CNum(Entity.Nota_Fiscal) <= 0) {
                MostrarAlerta("Informe o número da nota");
                return;
            }
            if (CNum(Entity.Codigo_Fornecedor) <= 0) {
                MostrarAlerta("Informe o fornecedor");
                return;
            }
            if (CNum(Entity.Chave) > 0) {
                MostrarAlerta("Não é possível informar um pedido para uma nota já gravada");
                return;
            }
            var parametros = {
                codFornecedor: CNum(this.EntityTela.Codigo_Fornecedor),
                codEmpresa: CNum(this.EntityTela.Empresa)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetPedidosFornecedor", parametros);
            this.lstImPedido.RemoverTodosItens();
            for (var x = 0; x <= retorno.length - 1; x++) {
                var item = retorno[x];
                var texto = Right("000000" + item.Codigo, 6) + " - ";
                if (ConvertToDate(item.Data_Emissao)) {
                    texto += ConvertToDate(item.Data_Emissao).FormataData();
                }
                this.lstImPedido.AdicionarItem(texto, item.Codigo);
            }
            this.ProdutosPedido = [];
            this.CalcularTotaisPedidos();
            this.mdPedidos.Show();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnDblClickListaPedidos = function (s, e) {
        try {
            //Public Shared Function GetProdutosPedido(codPedido As Long) As List(Of EntradaPedidoRetorno)
            var parametros = {
                codPedido: CNum(e.Value)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetProdutosPedido", parametros);
            this.ProdutosPedido = retorno;
            this.CalcularTotaisPedidos();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnEditouItemGradePedido = function (s, e) {
        this.CalcularTotaisPedidos();
    };
    C_Entrad.prototype.CalcularTotaisPedidos = function () {
        var qtdeUtilizada = 0, desconto = 0, valorUtilizar = 0;
        var qtdePedido = 0, descontoPedido = 0;
        for (var x = 0; x <= this.ProdutosPedido.length - 1; x++) {
            var item = this.ProdutosPedido[x];
            qtdeUtilizada += CNum(item.Quantidade_Utilizar);
            qtdePedido += CNum(item.Quantidade);
            descontoPedido = CNum(item.Desconto_Dinheiro_Pedido);
            desconto = CNum(item.Quantidade_Utilizar) * CNum(item.Desconto_V);
            if (CNum(item.Quantidade_Utilizar) > 0) {
                valorUtilizar = (valorUtilizar + (CNum(item.Valor_Unitario) * CNum(item.Quantidade_Utilizar)) - desconto);
            }
        }
        var desconto = 0, valorTotal = 0;
        if (qtdePedido > 0) {
            desconto = (descontoPedido / qtdePedido) * qtdeUtilizada;
        }
        valorTotal = valorUtilizar - desconto;
        this.lblDescontoPedido.Text = desconto.Format(ValoresSismoura.CasasDecimaisValor);
        this.lblQtdeUtilizada.Text = qtdeUtilizada.Format(ValoresSismoura.CasasDecimaisEstoque);
        this.lblValorUtilizado.Text = valorUtilizar.Format(ValoresSismoura.CasasDecimaisValor);
        this.lblValorPedido.Text = valorTotal.Format(ValoresSismoura.CasasDecimaisValor);
    };
    C_Entrad.prototype.OnClickPedidoCompleto = function () {
        try {
            var lista = this.ProdutosPedido;
            for (var x = 0; x <= lista.length - 1; x++) {
                lista[x].Quantidade_Utilizar = lista[x].Quantidade_Restante;
            }
            this.ProdutosPedido = lista;
            this.CalcularTotaisPedidos();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnClickOKPedido = function () {
        try {
            var lista = this.ProdutosPedido;
            if (lista.length <= 0) {
                MostrarAlerta("Nenhum pedido foi informado!");
                return;
            }
            var encontrou = false;
            for (var x = 0; x <= lista.length - 1; x++) {
                var item = lista[x];
                if (CNum(item.Quantidade_Utilizar) > 0) {
                    encontrou = true;
                    if (this.EntityTela.Tipo_Nf == 0 && String.IsNullOrWhiteSpace(item.CFOP)) {
                        MostrarAlerta("Existem produtos sem CFOP informado!");
                        return;
                    }
                    if (this.EntityTela.Tipo_Nf == 0 && String.IsNullOrWhiteSpace(item.CST)) {
                        MostrarAlerta("Existem produtos sem CST informado!");
                        return;
                    }
                }
            }
            if (!encontrou) {
                MostrarAlerta("Informe a quantidade que será adicionada à entrada de produto!");
                return;
            }
            for (var x = 0; x <= lista.length - 1; x++) {
                var item = lista[x];
                if (CNum(item.Quantidade_Utilizar) > 0) {
                    var prod = this.Produto;
                    if (!prod) {
                        prod = {};
                    }
                    prod.Codigo_Produto = item.Codigo;
                    prod.Descricao_Produto = item.Produto;
                    prod.Quantidade = CNum(item.Quantidade_Utilizar);
                    prod.Quantidade_Cx = 1;
                    prod.Valor_Unitario = item.Valor_Unitario;
                    prod.Desconto_P = CNum(item.Desconto_P);
                    prod.Referencia = item.Referencia;
                    prod.Cfop = item.CFOP;
                    prod.Descricao_Cor = item.Cor;
                    prod.Tamanho = item.Tamanho;
                    prod.Valor_Desconto = item.Desconto_V;
                    prod.Codigo_Pedido_Compra = item.Codigo_Pedido;
                    prod.Cst = item.CST;
                    this.Produto = prod;
                    this.grdProduto.AdicionarOuAlterarItemAtual();
                }
            }
            this.mdPedidos.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    //#endregion
    C_Entrad.prototype.OnClickFecharInconsistencia = function () {
        this.mdInconsistencia.Hide();
    };
    C_Entrad.prototype.OnClickBotaoAbrirAtualizacaoPreco = function (s, e) {
        try {
            e.processOnServer = false;
            if (!this.EntityTela)
                return;
            if (!this.EntityTela.Chave) {
                MostrarAlerta("Informe uma entrada cadastrada");
                return;
            }
            var parametros = [];
            parametros.push("chave=" + CNum(this.EntityTela.Chave));
            parametros.push("deposito=" + CNum(this.EntityTela.Deposito));
            parametros.push("empresa=" + CNum(this.EntityTela.Empresa));
            abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.AtualizarPrecosEntrada), parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnAntesAbrirProcuraLancamentoContabil = function (s, e) {
        this.txtTipoLancamentoContabil.AddParametro("TipoConfiguracaoContabil", "CM");
        this.txtTipoLancamentoContabil.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
    };
    C_Entrad.prototype.OnDepoisAbriuProcuraLancamentoContabil = function (s, e) {
        this.txtTipoLancamentoContabil.AddParametro("TipoConfiguracaoContabil", "CM");
        this.txtTipoLancamentoContabil.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
    };
    C_Entrad.prototype.OnPesquisandoContabil = function (s, e) {
        this.txtTipoLancamentoContabil.AddParametro("TipoConfiguracaoContabil", "CM");
        this.txtTipoLancamentoContabil.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
        if (this.txtTipoLancamentoContabil.GetText() != "") {
            var contemReduzido;
            var parametros = {
                CodLancamento: this.txtTipoLancamentoContabil.GetText().CNum(),
                codEmpresa: this.cboEmpresa.GetValue()
            };
            var validaExistenciaReduzido = this.ExecutarFuncaoServerSideSynch("ValidarConfLancamento", parametros);
            if (!validaExistenciaReduzido) {
                MostrarAlerta("Tipo de Lançamento Contábil sem Código Reduzido parametrizado. Acesse a tela 'Configuração de Lançamento Contábil' e grave novamente o lançamento para que seja gerado o Reduzido.", 20000);
                this.GetScope().Entity.Configuracao_Lancamento = null;
            }
        }
    };
    C_Entrad.prototype.OnDepoisBuscarTipoLancamentoContabil = function () {
        this.txtTipoLancamentoContabil.LimparParametros();
        this.txtTipoLancamentoContabil.AddParametro("TipoConfiguracaoContabil", "CM");
        this.txtTipoLancamentoContabil.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
        if (this.txtTipoLancamentoContabil.GetText() != "") {
            var contemReduzido;
            var parametros = {
                CodLancamento: this.txtTipoLancamentoContabil.GetText().CNum(),
                codEmpresa: this.cboEmpresa.GetValue()
            };
            var validaExistenciaReduzido = this.ExecutarFuncaoServerSideSynch("ValidarConfLancamento", parametros);
            if (!validaExistenciaReduzido) {
                MostrarAlerta("Tipo de Lançamento Contábil sem Código Reduzido parametrizado. Acesse a tela 'Configuração de Lançamento Contábil' e grave novamente o lançamento para que seja gerado o Reduzido.", 20000);
                this.GetScope().Entity.Configuracao_Lancamento = null;
            }
        }
    };
    C_Entrad.prototype.VerificarAtivarProdutosEntrada = function (produtos) {
        var _this = this;
        try {
            var listaControlado = [];
            for (var x = 0; x <= produtos.length - 1; x++) {
                if (produtos[x].Inativo) {
                    listaControlado.push(produtos[x].Codigo_Produto);
                }
            }
            if (listaControlado.length > 0) {
                var msg = "ATENÇÃO: Os seguintes produtos deste XML estão marcados como INATIVOS no Cadastro de Produto: " + listaControlado.join(", ") + ".";
                msg += "\r\nNão será possível prosseguir com a Importação caso estes itens não sejam Ativados. Deseja Ativar todos agora e continuar?";
                MsgBoxJS(msg, MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                    if (result.Resultado == MsgBoxResult.Yes) {
                        //Public Shared Function AtivarProdutos(listaProdutos As Long()) As String
                        var parametros = {
                            listaProdutos: listaControlado
                        };
                        var retorno = _this.ExecutarFuncaoServerSideSynch("AtivarProdutos", parametros);
                    }
                    else {
                        _this.LimparDialogXML();
                        _this.RefreshAngular();
                    }
                }, null);
            }
        }
        catch (ex) {
            LogarException(ex);
            throw ex;
        }
    };
    C_Entrad.prototype.OnClickCancelarCCProduto = function () {
        this.mdInfContaContabil.Hide();
    };
    C_Entrad.prototype.OnClickOkProduto = function () {
        var lista = this.Produtos;
        if (this.idLinhaProdutoContaContabil) {
            for (var x = 0; x <= lista.length - 1; x++) {
                if (lista[x].Contador == this.idLinhaProdutoContaContabil) {
                    if (!String.IsNullOrWhiteSpace(this.txtCCProduto.GetText())) {
                        lista[x].Conta_Contabil = CNum(this.txtCCProduto.GetText());
                        lista[x].Conta_Contabil_Descricao = this.txtCCProduto.GetResultado();
                    }
                    else {
                        lista[x].Conta_Contabil = null;
                        lista[x].Conta_Contabil_Descricao = null;
                    }
                    break;
                }
            }
        }
        this.Produtos = lista;
        this.grdProduto.AtualizarGrid();
        this.mdInfContaContabil.Hide();
    };
    C_Entrad.prototype.OnDepoisBuscarCentroCusto = function () {
        if (this.txtCentroCustoD.GetText() != "") {
            var parametros;
            parametros = {
                codCentroCusto: this.txtCentroCustoD.GetText().CNum(),
                codEmpresa: this.cboContaCorrente.GetEmpresa()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificarEmpresas", parametros);
            if (!retorno) {
                MostrarAlerta("Centro de Custo informado não está vinculada a empresa da conta corrente, utilizar a tela Cadastro de Centro de Custo para corrigir esta situação");
                this.txtCentroCustoD.Limpar();
                this.txtCentroCustoD.Focus();
                return;
            }
        }
    };
    C_Entrad.prototype.OnPesquisandoContaContabilFinanceira = function (s, e) {
        this.txtContaContabilFinanceira.AddParametro("Empresa", this.cboEmpresa.GetValue().toString());
    };
    C_Entrad.prototype.OnPesquisandoContaContabil = function (s, e) {
        try {
            if (!this.EntityTela.Conta_Contabil) {
                return;
            }
            var parametros = {
                codContaContabil: this.EntityTela.Conta_Contabil
            };
            //this.txtContaContabil.Engine = 'Sismoura.Web.View.Conta_ContabilProcura'
            var isContaSintetica = this.ExecutarFuncaoServerSideSynch("isContaSintetica", parametros);
            if (isContaSintetica) {
                MostrarAlerta("Você não pode usar uma Conta Sintética!");
                this.EntityTela.Conta_Contabil = 0;
                this.txtContaContabil.Focus();
                return;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnTipoImportacaoMudou = function (s, e) {
        this.AlterarVisibilidadeImportacao();
    };
    C_Entrad.prototype.AlterarVisibilidadeImportacao = function () {
        if (this.cboTipoImportacao.GetValue() == "1") {
            this.txtChaveAcessoImportar.Visible = false;
            document.getElementById("fpXML").style.visibility = "visible";
        }
        else {
            this.txtChaveAcessoImportar.Visible = true;
            document.getElementById("fpXML").style.visibility = "hidden";
        }
    };
    C_Entrad.prototype.OnMudouChkEstoque = function () {
        var entidade = this.EntityTela;
        var parametros = {
            nota: entidade.Nota_Fiscal,
            serie: CNum(entidade.Serie),
            codFornecedor: CNum(entidade.Codigo_Fornecedor)
        };
        var alterarEstoque = this.ExecutarFuncaoServerSideSynch("RetornarAlterarEstoque", parametros);
        if (alterarEstoque == "S" || alterarEstoque == "N") {
            MostrarAlerta("Para movimentar o estoque a nota deverá ser excluída do sistema e inserí-la novamente!");
            entidade.Nao_Alterar_Estoque = (alterarEstoque == "S") ? true : false;
            this.GetScope().Entity = entidade;
            this.chkEstoque.Checked = entidade.Nao_Alterar_Estoque;
            this.RefreshAngular();
        }
        else {
            entidade.Nao_Alterar_Estoque = this.chkEstoque.Checked;
        }
    };
    C_Entrad.prototype.OnAlterouAjusteOrigem = function (value) {
        if (!value) {
            value = 0;
            this.GetScope().EntradaProdutoAjuste.Origem = 0;
        }
        this.lblOrigem.Text = this.GetTextoOrigem(value);
    };
    C_Entrad.prototype.GetTextoOrigem = function (value) {
        switch (value) {
            case 0:
                return "Nacional";
            case 1:
                return "Estrangeira - Importação Direta";
            case 2:
                return "Estrangeira – Adquirida no Mercado Interno";
            default:
                return "";
        }
    };
    C_Entrad.prototype.OnAlterouAjusteMotivo = function (value) {
        if (!value) {
            value = 0;
            this.GetScope().EntradaProdutoAjuste.Motivo = 0;
        }
        this.lblMotivoDebitoCredito.Text = this.GetTextoMotivo(value);
    };
    C_Entrad.prototype.GetTextoMotivo = function (value) {
        switch (value) {
            case 1:
                return "Táxi";
            case 3:
                return "Produtor Agropecuário";
            case 4:
                return "Frotista/Locadora";
            case 5:
                return "Diplomático/Consular";
            case 6:
                return "Utilitários e Motocicletas da Amazônia Ocidental e Áreas de Livre Comércio";
            case 7:
                return "SUFRAMA";
            case 8:
                return "Venda a Órgão Público";
            case 9:
                return "Outros (NT 2016/002)";
            case 10:
                return "Deficiente Condutor (Convênio ICMS 38/12)";
            case 11:
                return "Deficiente Não Condutor (Convênio ICMS 38/12)";
            case 12:
                return "Órgão de fomento e desenvolvimento agropecuário";
            case 101:
                return "Crédito proveniente de empresa optante pelo Simples Nacional";
            default:
                return "";
        }
    };
    C_Entrad.prototype.OnAdicionandoDebitoCredito = function (s, e) {
        var textoOrigem = this.GetTextoOrigem(e.item.Origem);
        var textoMotivo = this.GetTextoMotivo(e.item.Motivo);
        e.item.Origem_Descricao = e.item.Origem + ((textoOrigem != "") ? "-" + textoOrigem : "");
        e.item.Motivo_Descricao = e.item.Motivo + ((textoMotivo != "") ? "-" + textoMotivo : "");
        e.item.Cod_Ajuste_Descricao = e.item.Cod_Ajuste + "-" + this.txtCodigoAjuste.LabelResultado.textContent;
        if (!e.item.IsXML) {
            e.item.IsXML = false;
        }
        this.BloquearCamposDebitoCredito(false);
    };
    C_Entrad.prototype.OnSelecionouLinhaDebitoCredito = function (s, e) {
        this.BloquearCamposDebitoCredito(e.data.IsXML);
    };
    C_Entrad.prototype.OnNovoDebitoCredito = function () {
        this.BloquearCamposDebitoCredito(false);
    };
    C_Entrad.prototype.BloquearCamposDebitoCredito = function (flag) {
        this.txtOrigem.Enabled = !flag;
        this.txtCST.Enabled = !flag;
        this.txtAliquota.Enabled = !flag;
        this.txtValorDebitoCredito.Enabled = !flag;
        this.txtMotivoDebitoCredito.Enabled = !flag;
    };
    C_Entrad.prototype.OnClickAtualizarNCM = function () {
        this.AltualizarNCM();
        this.mdNCM.Hide();
    };
    C_Entrad.prototype.OnClickFecharNCM = function () {
        this.mdNCM.Hide();
        this.gdNcm.Grid.deselectAll;
        this.isNCM = false;
        this.ExecutarGravar();
    };
    C_Entrad.prototype.PrepararCodigo = function (grid) {
        var ProdutosCodigos = "";
        for (var x = 0; x < grid.length; x++) {
            ProdutosCodigos = ProdutosCodigos + grid[x].Codigo_Produto + ",";
        }
        ProdutosCodigos = ProdutosCodigos.substring(0, ProdutosCodigos.length - 1);
        return ProdutosCodigos;
    };
    C_Entrad.prototype.validarProdutoNCM = function () {
        try {
            if (!this.isNCM) {
                var parametros;
                this.NCMs = [];
                parametros = {
                    codigos: this.PrepararCodigo(this.Produtos)
                };
                var entidadeProduto = this.ExecutarFuncaoServerSideSynch("ObterProdutos", parametros);
                for (var x = 0; x < entidadeProduto.length - 1; x++) {
                    var item = this.Produtos.FirstOrDefault('Codigo_Produto', entidadeProduto[x].Codigo);
                    if (item && item.Ncm != entidadeProduto[x].Ncm) {
                        this.NCM.Codigo_Produto = item.Codigo_Produto;
                        this.NCM.Descricao = item.Descricao_Produto;
                        this.NCM.Anterior = entidadeProduto[x].Ncm;
                        this.NCM.Atual = item.Ncm;
                        this.NCMs.push(this.NCM);
                    }
                }
                if (this.NCMs.length > 0) {
                    MsgBoxJS("Atenção! O NCM dos Produtos estão divergentes do informado no Cadastro de Produto." + " Deseja atualizar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.RespostaAtualizarNCM, this));
                    return false;
                }
            }
            return true;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.RespostaAtualizarNCM = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            this.mdNCM.Show();
            this.isNCM = true;
            this.RefreshAngular();
        }
        else {
            this.isNCM = true;
            this.ExecutarGravar();
            this.isNCM = false;
        }
    };
    C_Entrad.prototype.ExecutarGravar = function () {
        this.ClicarGravar();
    };
    C_Entrad.prototype.AltualizarNCM = function () {
        var selecionados;
        var Lista;
        var ProdutoItem;
        ProdutoItem = {};
        Lista = [];
        selecionados = this.gdNcm.Grid.GetSelectedRowsData;
        if (selecionados.length > 0) {
            for (var x = 0; x < selecionados.length; x++) {
                ProdutoItem.Codigo = selecionados[x].Codigo_Produto;
                ProdutoItem.Ncm = selecionados[x].Atual;
                Lista.push(ProdutoItem);
            }
            var parametros = {
                lista: JSON.stringify(Lista),
                Tela: ValoresSismoura.NomeTela,
                codigoUsuario: ValoresSismoura.UsuarioLogado
            };
            var atualizarNCM = this.ExecutarFuncaoServerSideSynch("AtualizarNCMProduto", parametros);
            this.gdNcm.Grid.deselectAll;
            this.RefreshAngular();
        }
        else {
            MostrarMensagem("Não há itens selecionados a serem alterados");
        }
        this.ExecutarGravar();
    };
    C_Entrad.prototype.VerificaNCM = function () {
        this.txtNCM.Visible = ValoresSismoura.ConfiguracoesRetaguarda.Entrada_Produto_Alterar_NCM;
    };
    C_Entrad.prototype.OnCancelarDesagClick = function () {
        this.mdValoresDesag.Hide();
    };
    C_Entrad.prototype.OnClickConcluirDesag = function () {
        if (this.OnVerificarSomaQuantidade(this.itemClicado)) {
            var index = this.Produtos.indexOf(this.itemClicado);
            if (index >= 0) {
                this.Produtos[index].MovEntradaDesag = this.grdSubDesag.DataSource;
                this.RefreshAngular();
            }
            this.itemClicado = {};
            this.mdValoresDesag.Hide();
        }
    };
    C_Entrad.prototype.VerificarDesagregacao = function (Codigo_Produto) {
        var retorno;
        var parametros = {
            codProduto: Codigo_Produto
        };
        retorno = this.ExecutarFuncaoServerSideSynch("VerificaRegistroDesagregados", parametros);
        if (retorno) {
            return retorno;
        }
    };
    C_Entrad.prototype.CarregarDesagregacao = function (item) {
        try {
            var retorno;
            var verificacao = false;
            retorno = this.VerificarDesagregacao(item.Codigo_Produto);
            if (retorno && retorno.Realizar_Desagregacao.CNum() == 1 /* EntradaProduto */) {
                if (item.MovEntradaDesag && item.MovEntradaDesag.length > 0) {
                    for (var x = 0; x < item.MovEntradaDesag.length; x++) {
                        var produto = this.ObterDadosProduto(item.MovEntradaDesag[x].Subproduto);
                        if (produto) {
                            item.MovEntradaDesag[x].Descricao_Produto = produto.Nome;
                        }
                        if (item.MovEntradaDesag[x].Percentual_Peso_Ajustado == 0) {
                            item.MovEntradaDesag[x].Percentual_Peso_Ajustado = null;
                            item.MovEntradaDesag[x].Media_Ponderada = null;
                            item.MovEntradaDesag[x].Custo_Total = null;
                            item.MovEntradaDesag[x].Custo_Unitario = null;
                        }
                    }
                    this.grdSubDesag.PreencherGrid(item.MovEntradaDesag);
                    this.lblTotalQtd.Text = item.MovEntradaDesag.Sum("Quantidade").Format(4);
                    this.lblTotalPeso.Text = item.MovEntradaDesag.Sum("Percentual_Peso_Ajustado").Format(2);
                    this.lblTotalMedia.Text = item.MovEntradaDesag.Sum("Media_Ponderada").Format(2);
                    this.lblTotalCusto.Text = item.MovEntradaDesag.Sum("Custo_Total").Format(2);
                    verificacao = true;
                }
                else {
                    verificacao = this.CalcularSubprodutos(item);
                }
            }
            return verificacao;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.CalcularSubprodutos = function (item) {
        try {
            var parametros = {
                codProduto: item.Codigo_Produto,
                quantidade: item.Quantidade,
                precoCusto: item.Valor_Bruto
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetCalcularSubProdutosProduto", parametros);
            if (retorno && retorno.length > 0) {
                this.grdSubDesag.PreencherGrid(retorno);
                this.lblTotalQtd.Text = retorno.Sum("Quantidade").Format(4);
                this.lblTotalPeso.Text = retorno.Sum("Percentual_Peso_Ajustado").Format(2);
                this.lblTotalMedia.Text = retorno.Sum("Media_Ponderada").Format(2);
                this.lblTotalCusto.Text = retorno.Sum("Custo_Total").Format(2);
            }
            else {
                return false;
            }
            return true;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Entrad.prototype.OnEditouItemProduto = function (s, e) {
        this.lblTotalQtd.Text = ((this.lblTotalQtd.Text.CNum() - e.oldData.Quantidade) + e.newData.Quantidade).Format(4);
        e.key.Custo_Unitario = e.key.Custo_Total / e.newData.Quantidade;
        this.grdSubDesag.Refresh();
    };
    C_Entrad.prototype.OnVerificarSomaQuantidade = function (produto) {
        if (this.lblTotalQtd.Text.CNum() != produto.Quantidade) {
            MostrarAlerta("A soma da Quantidade da grade deve ser igual a Quantidade informada na tela");
            return false;
        }
        return true;
    };
    return C_Entrad;
}(MouraPageCadastroAngular));
var c_Entrad = new C_Entrad();
//# sourceMappingURL=C_Entrad.js.map