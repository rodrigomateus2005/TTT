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
var C_Produt = /** @class */ (function (_super) {
    __extends(C_Produt, _super);
    function C_Produt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PATH_DOCUMENTOS = "~/Documentos/Produtos/";
        return _this;
    }
    Object.defineProperty(C_Produt.prototype, "Duns14", {
        get: function () {
            if (!this.GetScope()["Duns14"]) {
                return [];
            }
            else {
                return this.GetScope()["Duns14"];
            }
        },
        set: function (value) {
            this.GetScope()["Duns14"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "Dun14", {
        get: function () {
            if (!this.GetScope()["Dun14"]) {
                return {};
            }
            else {
                return this.GetScope()["Dun14"];
            }
        },
        set: function (value) {
            this.GetScope()["Dun14"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "Fornecedores", {
        get: function () {
            if (!this.GetScope()["Fornecedores"]) {
                return [];
            }
            else {
                return this.GetScope()["Fornecedores"];
            }
        },
        set: function (value) {
            this.GetScope()["Fornecedores"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "Fornecedor", {
        get: function () {
            if (!this.GetScope()["Fornecedor"]) {
                return {};
            }
            else {
                return this.GetScope()["Fornecedor"];
            }
        },
        set: function (value) {
            this.GetScope()["Fornecedor"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "Fracionados", {
        get: function () {
            if (!this.GetScope()["Fracionados"]) {
                this.GetScope()["Fracionados"] = [];
            }
            return this.GetScope()["Fracionados"];
        },
        set: function (value) {
            this.GetScope()["Fracionados"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "Similares", {
        get: function () {
            return this.GridProdutosSimilares.DataSource;
        },
        set: function (value) {
            this.GridProdutosSimilares.PreencherGrid(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "optPagamento", {
        get: function () {
            return window['optPagamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "cboTaxa_IVA", {
        get: function () {
            return window['cboTaxa_IVA_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "cboMotivoIsencao", {
        get: function () {
            return window['cboMotivoIsencao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "agpIVA", {
        get: function () {
            return window['agpIVA_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtCodigoBarras", {
        get: function () {
            return window['txtCodigoBarras_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "lblProdutoEcommerce", {
        get: function () {
            return window['lblProdutoEcommerce_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "cboEmpresaFornecedor", {
        get: function () {
            return window['cboEmpresaFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "fotosProduto", {
        get: function () {
            return window['fotosProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "PathFotos", {
        get: function () {
            return "~/Fotos/Produtos/";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "chkProdutoBalanca", {
        get: function () {
            return window['chkProdutoBalanca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "chkSelfService", {
        get: function () {
            return window['chkSelfService_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "chkProdutoImportado", {
        get: function () {
            return window['chkProdutoImportado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "GridFornecedor", {
        get: function () {
            return window['GridFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtPrecoCusto", {
        get: function () {
            return window['txtPrecoCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "lblCustoSemImposto", {
        get: function () {
            return window['lblCustoSemImposto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "lblCustoEntrada", {
        get: function () {
            return window['lblCustoEntrada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "lblDataCadastro", {
        get: function () {
            return window['lblDataCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "lblDataAlteracao", {
        get: function () {
            return window['lblDataAlteracao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtMarkup_P", {
        get: function () {
            return window['txtMarkup_P_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtPrecoVenda", {
        get: function () {
            return window['txtPrecoVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtQtdEmbalagem", {
        get: function () {
            return window['txtQtdEmbalagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtFatorCusto", {
        get: function () {
            return window['txtFatorCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtPrecoPorcentagem", {
        get: function () {
            return window['txtPrecoPorcentagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "CampoAtualizar", {
        get: function () {
            if (!this.GetScope()["CampoAtualizar"]) {
                return "";
            }
            else {
                return JSON.parse(JSON.stringify(this.GetScope()["CampoAtualizar"]));
            }
        },
        set: function (value) {
            this.GetScope()["CampoAtualizar"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "ConfiguracoesGravarProduto", {
        get: function () {
            if (!this.GetScope()["ConfiguracoesGravarProduto"]) {
                return {};
            }
            else {
                return this.GetScope()["ConfiguracoesGravarProduto"];
            }
        },
        set: function (value) {
            this.GetScope()["ConfiguracoesGravarProduto"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "mdFarmarcia", {
        get: function () {
            return window['mdFarmarcia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "cboLaboratorio", {
        get: function () {
            return window['cboLaboratorio_comboBox'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "mdManipulacao", {
        get: function () {
            return window['mdManipulacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtDiluicao", {
        get: function () {
            return window['txtDiluicao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "CotacaoDolar", {
        get: function () {
            if (!this.GetScope()["CotacaoDolar"]) {
                this.GetScope()["CotacaoDolar"] = 0;
            }
            return CNum(JSON.parse(JSON.stringify(this.GetScope()["CotacaoDolar"])));
        },
        set: function (value) {
            this.GetScope()["CotacaoDolar"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtPrecoDolar", {
        get: function () {
            return window['txtPrecoDolar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtMargemReal", {
        get: function () {
            return window['txtMargemReal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "mdImportarDados", {
        get: function () {
            return window['mdImportarDados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtProdutoImportar", {
        get: function () {
            return window['txtProdutoImportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtFornecedor", {
        get: function () {
            return window['txtFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "mdInfExtraBalanca", {
        get: function () {
            return window['mdInfExtraBalanca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnOkInfExtra", {
        get: function () {
            return window['btnOkInfExtra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnInfBalanca", {
        get: function () {
            return window['btnInfBalanca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtInfExtra1", {
        get: function () {
            return window['txtInfExtra1_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtInfExtra2", {
        get: function () {
            return window['txtInfExtra2_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtInfExtra3", {
        get: function () {
            return window['txtInfExtra3_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtInfExtra4", {
        get: function () {
            return window['txtInfExtra4_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtInfExtra5", {
        get: function () {
            return window['txtInfExtra5_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtProdutoSimilar", {
        get: function () {
            return window['txtProdutoSimilar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "chkA1", {
        get: function () {
            return window['chkA1_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "chkA2", {
        get: function () {
            return window['chkA2_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "chkA3", {
        get: function () {
            return window['chkA3_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "chkB1", {
        get: function () {
            return window['chkB1_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "chkB2", {
        get: function () {
            return window['chkB2_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "chkC1", {
        get: function () {
            return window['chkC1_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "chkC2", {
        get: function () {
            return window['chkC2_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "chkC3", {
        get: function () {
            return window['chkC3_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "chkC4", {
        get: function () {
            return window['chkC4_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "chkC5", {
        get: function () {
            return window['chkC5_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "chkBMPO", {
        get: function () {
            return window['chkBMPO_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "chkBSPO", {
        get: function () {
            return window['chkBSPO_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnMaisInformacoes", {
        get: function () {
            return window['btnMaisInformacoes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnMicrochip_Anilhas", {
        get: function () {
            return window['btnMicrochip_Anilhas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "chkAnimal_Silvestre", {
        get: function () {
            return window['chkAnimal_Silvestre_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnOKMicrochip", {
        get: function () {
            return window['btnOKMicrochip_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnHistoricoPreco", {
        get: function () {
            return window['btnHistoricoPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnConsultarTributacao", {
        get: function () {
            return window['btnConsultarTributacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnGerarHistoricoPreco", {
        get: function () {
            return window['btnGerarHistoricoPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "cboHistoricoTipo", {
        get: function () {
            return window['cboHistoricoTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "cboHistoricoCampoAlterado", {
        get: function () {
            return window['cboHistoricoCampoAlterado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "optTipoProdutoCombo", {
        get: function () {
            return window['optTipoProdutoCombo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "mdProdutoCombo", {
        get: function () {
            return window['mdProdutoCombo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtProdutoCombo", {
        get: function () {
            return window['txtProdutoCombo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtGrupoCombo", {
        get: function () {
            return window['txtGrupoCombo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtSubgrupoCombo", {
        get: function () {
            return window['txtSubgrupoCombo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtQtdeParticipanteDecimal", {
        get: function () {
            return window['txtQtdeParticipanteDecimal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtQtdeParticipanteInteiro", {
        get: function () {
            return window['txtQtdeParticipanteInteiro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtValorCombo", {
        get: function () {
            return window['txtValorCombo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtOrdemCombo", {
        get: function () {
            return window['txtOrdemCombo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "grdGerarProdutoCombo", {
        get: function () {
            return window['grdGerarProdutoCombo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnProdutoCombo", {
        get: function () {
            return window['btnProdutoCombo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "Produto_Combo", {
        get: function () {
            if (!this.GetScope()["Produto_Combo"]) {
                this.GetScope()["Produto_Combo"] = [];
            }
            return this.GetScope()["Produto_Combo"];
        },
        set: function (value) {
            this.GetScope()["Produto_Combo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "Produto_Combo_Item", {
        get: function () {
            if (!this.GetScope()["Produto_Combo_Item"]) {
                this.GetScope()["Produto_Combo_Item"] = {};
            }
            return this.GetScope()["Produto_Combo_Item"];
        },
        set: function (value) {
            this.GetScope()["Produto_Combo_Item"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "mdIntegracao", {
        get: function () {
            return window['mdIntegracao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "GridIntegracao", {
        get: function () {
            return window['GridIntegracao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnAtualizar", {
        get: function () {
            return window['btnAtualizar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnNaoEncontrados", {
        get: function () {
            return window['btnNaoEncontrados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "mdHistoricoPreco", {
        get: function () {
            return window['mdHistoricoPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtPeriodoHistoricoPreco", {
        get: function () {
            return window['txtPeriodoHistoricoPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "grdHistoricoPreco", {
        get: function () {
            return window['grdHistoricoPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnInativos", {
        get: function () {
            return window['btnInativos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "mdInativosEmpresa", {
        get: function () {
            return window['mdInativosEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "grdEstoqueMinMax", {
        get: function () {
            return window['grdEstoqueMinMax_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "grdInativosporEmpresas", {
        get: function () {
            return window['grdInativosporEmpresas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "lblProduto", {
        get: function () {
            return window['lblProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtQtdeCaixaFarmacia", {
        get: function () {
            return window['txtQtdeCaixaFarmacia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtPack", {
        get: function () {
            return window['txtPack_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtValorMaxAprovadoMS", {
        get: function () {
            return window['txtValorMaxAprovadoMS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtValorUnitarioCaixa", {
        get: function () {
            return window['txtValorUnitarioCaixa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "chkFarmaciaPopular", {
        get: function () {
            return window['chkFarmaciaPopular_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "chkGratuidade", {
        get: function () {
            return window['chkGratuidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtTabelaPreco", {
        get: function () {
            return window['txtTabelaPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "GridPrecos", {
        get: function () {
            return window['GridPrecos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "GridRegraImposto", {
        get: function () {
            return window['GridRegraImposto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "DepositoEstoques", {
        get: function () {
            return this.GridEstoque.DataSource;
        },
        set: function (value) {
            this.GridEstoque.PreencherGrid(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "DepositosEstoquesLimpo", {
        get: function () {
            if (!this.GetScope()["DepositosEstoquesLimpo"]) {
                this.GetScope()["DepositosEstoquesLimpo"] = [];
            }
            return JSON.parse(JSON.stringify(this.GetScope()["DepositosEstoquesLimpo"]));
        },
        set: function (value) {
            this.GetScope()["DepositosEstoquesLimpo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "chkPermitirUtilizarOrcamento", {
        get: function () {
            return window['chkPermitirUtilizarOrcamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnOKInativo", {
        get: function () {
            return window['btnOKInativo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "RegrasLimpo", {
        get: function () {
            if (!this.GetScope()["RegrasLimpo"]) {
                this.GetScope()["RegrasLimpo"] = [];
            }
            return JSON.parse(JSON.stringify(this.GetScope()["RegrasLimpo"]));
        },
        set: function (value) {
            this.GetScope()["RegrasLimpo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "EmpresasLimpo", {
        get: function () {
            if (!this.GetScope()["EmpresasLimpo"]) {
                this.GetScope()["EmpresasLimpo"] = [];
            }
            return JSON.parse(JSON.stringify(this.GetScope()["EmpresasLimpo"]));
        },
        set: function (value) {
            this.GetScope()["EmpresasLimpo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "EstoqueEmpresaLimpo", {
        get: function () {
            if (!this.GetScope()["EstoqueEmpresaLimpo"]) {
                this.GetScope()["EstoqueEmpresaLimpo"] = [];
            }
            return JSON.parse(JSON.stringify(this.GetScope()["EstoqueEmpresaLimpo"]));
        },
        set: function (value) {
            this.GetScope()["EstoqueEmpresaLimpo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "EstoqueMinEmpresas", {
        get: function () {
            return this.grdEstoqueMinMax.DataSource;
        },
        set: function (value) {
            this.grdEstoqueMinMax.PreencherGrid(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "ListaPrecosLimpo", {
        get: function () {
            if (!this.GetScope()["ListaPrecosLimpo"]) {
                this.GetScope()["ListaPrecosLimpo"] = [];
            }
            return JSON.parse(JSON.stringify(this.GetScope()["ListaPrecosLimpo"]));
        },
        set: function (value) {
            this.GetScope()["ListaPrecosLimpo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "ListaPrecos", {
        get: function () {
            if (!this.GetScope()["ListaPrecos"]) {
                return [];
            }
            else {
                return this.GetScope()["ListaPrecos"];
            }
        },
        set: function (value) {
            this.GetScope()["ListaPrecos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "RegrasImposto", {
        get: function () {
            return this.GridRegraImposto.DataSource;
        },
        set: function (value) {
            this.GridRegraImposto.PreencherGrid(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "GridProdutosSimilares", {
        get: function () {
            return window['GridProdutosSimilares_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "GridEstoque", {
        get: function () {
            return window['GridEstoque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnProdutosSimilares", {
        get: function () {
            return window['btnProdutosSimilares_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "mdSimilares", {
        get: function () {
            return window['mdSimilares_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnOkSimilares", {
        get: function () {
            return window['btnOkSimilares_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnAdicionarSimilar", {
        get: function () {
            return window['btnAdicionarSimilar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnImportarDados", {
        get: function () {
            return window['btnImportarDados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnImportarProduto", {
        get: function () {
            return window['btnImportarProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnCancelarImportar", {
        get: function () {
            return window['btnCancelarImportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "lstCodigoBarras", {
        get: function () {
            return window['lstCodigoBarras_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnRemoverCodBarras", {
        get: function () {
            return window['btnRemoverCodBarras_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnAdicionarCodBarras", {
        get: function () {
            return window['btnAdicionarCodBarras_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnFracionado", {
        get: function () {
            return window['btnFracionado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "grdFracionado", {
        get: function () {
            return window['grdFracionado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "chkFracionado", {
        get: function () {
            return window['chkFracionado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "chkVenderSemEstoque", {
        get: function () {
            return window['chkVenderSemEstoque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtCodigoBarrasAdicionar", {
        get: function () {
            return window['txtCodigoBarrasAdicionar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "grdRegraCFOP", {
        get: function () {
            return window['grdRegraCFOP_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "grdRegraFinalidade", {
        get: function () {
            return window['grdRegraFinalidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "cboEmpresaRegraCFOP", {
        get: function () {
            return window['cboEmpresaRegraCFOP_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "cboEmpresaRegraFinalidade", {
        get: function () {
            return window['cboEmpresaRegraFinalidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "cboRegraImpostoCFOP", {
        get: function () {
            return window['cboRegraImpostoCFOP_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "cboFinalidade", {
        get: function () {
            return window['cboFinalidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "cboRegraImpostoFinalidade", {
        get: function () {
            return window['cboRegraImpostoFinalidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "RegrasCFOP", {
        get: function () {
            if (!this.GetScope()["RegrasCFOP"]) {
                return [];
            }
            else {
                return this.GetScope()["RegrasCFOP"];
            }
        },
        set: function (value) {
            this.GetScope()["RegrasCFOP"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "RegrasFinalidade", {
        get: function () {
            if (!this.GetScope()["RegrasFinalidade"]) {
                return [];
            }
            else {
                return this.GetScope()["RegrasFinalidade"];
            }
        },
        set: function (value) {
            this.GetScope()["RegrasFinalidade"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "mdCest", {
        get: function () {
            return window['mdCest_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "gridCest", {
        get: function () {
            return window['gridCest_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "gridDun14", {
        get: function () {
            return window['gridDun14_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtMarca", {
        get: function () {
            return window['txtMarca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtNCM", {
        get: function () {
            return window['txtNCM_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "lblNcmCest", {
        get: function () {
            return window['lblNcmCest_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "lblInfFoto", {
        get: function () {
            return window['lblInfFoto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnDrogaria", {
        get: function () {
            return window['btnDrogaria_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnOkFarmacia", {
        get: function () {
            return window['btnOkFarmacia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "TabFarmacia", {
        get: function () {
            return window['TabFarmacia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "abaFracionados", {
        get: function () {
            return window['abaFracionados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "lblCustoABC", {
        get: function () {
            return window['lblCustoABC_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "lblValorVendaABC", {
        get: function () {
            return window['lblValorVendaABC_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "lblNomeABC", {
        get: function () {
            return window['lblNomeABC_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnManipulacao", {
        get: function () {
            return window['btnManipulacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnOkManipulacao", {
        get: function () {
            return window['btnOkManipulacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnAdicionarSinonimo", {
        get: function () {
            return window['btnAdicionarSinonimo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtSinonimo", {
        get: function () {
            return window['txtSinonimo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "gridSinonimo", {
        get: function () {
            return window['gridSinonimo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "tabManipulacao", {
        get: function () {
            return window['tabManipulacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "Tab", {
        get: function () {
            return window['Tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "grdMicrochip", {
        get: function () {
            return window['grdMicrochip_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "gridExcipiente", {
        get: function () {
            return window['gridExcipiente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtExcipiente", {
        get: function () {
            return window['txtExcipiente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtMicrochip", {
        get: function () {
            return window['txtMicrochip_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "cboPrioridade", {
        get: function () {
            return window['cboPrioridade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "Anilhas", {
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
    Object.defineProperty(C_Produt.prototype, "Excipientes", {
        get: function () {
            if (!this.GetScope()["Excipientes"]) {
                return [];
            }
            else {
                return this.GetScope()["Excipientes"];
            }
        },
        set: function (value) {
            this.GetScope()["Excipientes"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "mdAnexo", {
        get: function () {
            return window['mdAnexo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "mdAnilha", {
        get: function () {
            return window['mdAnilha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnDocumentos", {
        get: function () {
            return window['btnDocumentos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtContaContabil", {
        get: function () {
            return window['txtContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "lblIMendes1", {
        get: function () {
            return window['lblIMendes1_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "lblIMendes2", {
        get: function () {
            return window['lblIMendes2_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "mdCadastroGrade", {
        get: function () {
            return window['mdCadastroGrade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "grdMdGrade", {
        get: function () {
            return window['grdMdGrade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "txtMdGradeCor", {
        get: function () {
            return window['txtMdGradeCor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "cboMdGrade", {
        get: function () {
            return window['cboMdGrade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnGerarGrade", {
        get: function () {
            return window['btnGerarGrade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnMdGradeGravar", {
        get: function () {
            return window['btnMdGradeGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "btnMdGradeFechar", {
        get: function () {
            return window['btnMdGradeFechar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "Grade", {
        get: function () {
            if (!this.GetScope()["Grade"]) {
                this.GetScope()["Grade"] = {};
            }
            return this.GetScope()["Grade"];
        },
        set: function (value) {
            this.GetScope()["Grade"] = {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "ProdutosGrade", {
        get: function () {
            if (!this.GetScope()["ProdutosGrade"]) {
                this.GetScope()["ProdutosGrade"] = [];
            }
            return this.GetScope()["ProdutosGrade"];
        },
        set: function (value) {
            this.GetScope()["ProdutosGrade"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "cboCFOP", {
        get: function () {
            return window['cboCFOP_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "AbaNFAdicionais", {
        get: function () {
            return window['AbaNFAdicionais_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "AbaNFImpostos", {
        get: function () {
            return window['AbaNFImpostos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "agpNFImpostos", {
        get: function () {
            return window['agpNFImpostos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "divNFImpostos", {
        get: function () {
            return window['divNFImpostos'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "divNFAdicionais", {
        get: function () {
            return window['divNFAdicionais'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "cboUnidadeProduto", {
        get: function () {
            return window['cboUnidadeProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt.prototype, "chkListaPrecos", {
        get: function () {
            return window['chkListaPrecos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Produt.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtMarkup_P) {
            adicionarEventoMoura(this.txtMarkup_P.TextChanged, this.OnTextBoxMarkupChange, this);
        }
        if (this.txtPrecoCusto) {
            adicionarEventoMoura(this.txtPrecoCusto.TextChanged, this.OnTextBoxPrecoCustoChange, this);
        }
        if (this.cboTaxa_IVA) {
            adicionarEventoMoura(this.cboTaxa_IVA.SelectedItemChanged, this.AtualizarValoresProduto, this);
        }
        if (this.txtCodigoBarras) {
            adicionarEventoMoura(this.txtCodigoBarras.TextChanged, this.OnTextBoxCodigoBarrasChange, this);
        }
        if (this.txtPrecoVenda) {
            adicionarEventoMoura(this.txtPrecoVenda.TextChanged, this.OnTextBoxPrecoVendaChange, this);
        }
        if (this.txtPrecoDolar) {
            adicionarEventoMoura(this.txtPrecoDolar.TextChanged, this.OnTextBoxPrecoDolarChange, this);
        }
        if (this.chkA1 && this.chkA1.Check && this.chkA2 && this.chkA2.Check && this.chkA3 && this.chkA3.Check &&
            this.chkB1 && this.chkB1.Check && this.chkB2 && this.chkB2.Check && this.chkC1 && this.chkC1.Check &&
            this.chkC2 && this.chkC2.Check && this.chkC3 && this.chkC3.Check && this.chkC4 && this.chkC4.Check &&
            this.chkC5 && this.chkC5.Check) {
            adicionarEventoMoura(this.chkA1.CheckChanged, this.OnChkA1CheckChange, this);
            adicionarEventoMoura(this.chkA2.CheckChanged, this.OnChkA2CheckChange, this);
            adicionarEventoMoura(this.chkA3.CheckChanged, this.OnChkA3CheckChange, this);
            adicionarEventoMoura(this.chkB1.CheckChanged, this.OnChkB1CheckChange, this);
            adicionarEventoMoura(this.chkB2.CheckChanged, this.OnChkB2CheckChange, this);
            adicionarEventoMoura(this.chkC1.CheckChanged, this.OnChkC1CheckChange, this);
            adicionarEventoMoura(this.chkC2.CheckChanged, this.OnChkC2CheckChange, this);
            adicionarEventoMoura(this.chkC3.CheckChanged, this.OnChkC3CheckChange, this);
            adicionarEventoMoura(this.chkC4.CheckChanged, this.OnChkC4CheckChange, this);
            adicionarEventoMoura(this.chkC5.CheckChanged, this.OnChkC5CheckChange, this);
        }
        if (this.GridFornecedor) {
            adicionarEventoMoura(this.GridFornecedor.ItemAdicionado, this.OnAdicionouFornecedor, this);
            adicionarEventoMoura(this.GridFornecedor.Validando, this.OnValidandoAdicionarFornecedor, this);
            adicionarEventoMoura(this.GridFornecedor.LimpandoItem, this.OnLimpouItemFornecedor, this);
        }
        if (this.gridDun14) {
            adicionarEventoMoura(this.gridDun14.Validando, this.OnValidandoAdicionarDun14, this);
        }
        if (this.grdRegraCFOP) {
            adicionarEventoMoura(this.grdRegraCFOP.ItemAdicionado, this.OnAdicionouRegraCFOP, this);
            adicionarEventoMoura(this.grdRegraCFOP.Validando, this.OnValidandoAdicionarRegraCFOP, this);
            adicionarEventoMoura(this.grdRegraCFOP.LimpandoItem, this.OnLimpouItemRegraCFOP, this);
        }
        if (this.grdRegraFinalidade) {
            adicionarEventoMoura(this.grdRegraFinalidade.ItemAdicionado, this.OnAdicionouRegraFinalidade, this);
            adicionarEventoMoura(this.grdRegraFinalidade.Validando, this.OnValidandoAdicionarRegraFinalidade, this);
            adicionarEventoMoura(this.grdRegraFinalidade.LimpandoItem, this.OnLimpouItemRegraFinalidade, this);
        }
        if (this.gridExcipiente) {
            adicionarEventoMoura(this.gridExcipiente.ItemAdicionado, this.OnAdicionouExcipiente, this);
            adicionarEventoMoura(this.gridExcipiente.Validando, this.OnValidandoAdicionarExcipiente, this);
        }
        if (this.grdMicrochip) {
            adicionarEventoMoura(this.grdMicrochip.ItemAdicionado, this.OnAdicionouAnilha, this);
            adicionarEventoMoura(this.grdMicrochip.Validando, this.OnValidandoAdicionarAnilha, this);
        }
        if (this.txtFornecedor) {
            adicionarEventoMoura(this.txtFornecedor.Procurou, this.OnPesquisouFornecedor, this);
        }
        if (this.txtContaContabil) {
            adicionarEventoMoura(this.txtContaContabil.Procurou, this.OnPesquisouContaContabil, this);
        }
        if (this.cboEmpresaFornecedor) {
            adicionarEventoMoura(this.cboEmpresaFornecedor.SelectedItemChanged, this.OnComboBoxEmpresaFornecedorChange, this);
        }
        if (this.mdImportarDados && this.mdImportarDados.ModalDialog) {
            adicionarEventoDevExpress(this.mdImportarDados.ModalDialog.EndCallback, this.OnEndCallBackModalImportarDados, this);
        }
        if (this.btnMaisInformacoes) {
            adicionarEventoMoura(this.btnMaisInformacoes.Click, this.abrirConsultaPrecos, this);
        }
        if (this.btnMicrochip_Anilhas) {
            adicionarEventoMoura(this.btnMicrochip_Anilhas.Click, this.abrirAnilhas, this);
        }
        if (this.btnOKMicrochip) {
            adicionarEventoMoura(this.btnOKMicrochip.Click, this.gravarAnilhas, this);
        }
        if (this.btnFracionado) {
            adicionarEventoMoura(this.btnFracionado.Click, this.abrirConfigFracionado, this);
        }
        if (this.grdFracionado) {
            adicionarEventoMoura(this.grdFracionado.SelecionouItem, this.OnSelecionouLinhaGrade, this);
        }
        if (this.btnInativos) {
            adicionarEventoMoura(this.btnInativos.Click, this.OnClickInativosPorEmpresa, this);
        }
        if (this.btnHistoricoPreco) {
            adicionarEventoMoura(this.btnHistoricoPreco.Click, this.OnClickHistoricoPreco, this);
        }
        if (this.btnConsultarTributacao) {
            adicionarEventoMoura(this.btnConsultarTributacao.Click, this.OnClickbtnConsultarTributacao, this);
        }
        if (this.btnProdutoCombo) {
            adicionarEventoMoura(this.btnProdutoCombo.Click, this.OnClickProdutoCombo, this);
        }
        if (this.btnAtualizar) {
            adicionarEventoMoura(this.btnAtualizar.Click, this.OnClickAtualizar, this);
        }
        if (this.btnNaoEncontrados) {
            adicionarEventoMoura(this.btnNaoEncontrados.Click, this.OnClickNaoEncontrados, this);
        }
        if (this.GridIntegracao) {
            adicionarEventoMoura(this.GridIntegracao.CellPrepared, this.OnGridIntegracaoCellPrepared, this);
        }
        if (this.btnGerarHistoricoPreco) {
            adicionarEventoMoura(this.btnGerarHistoricoPreco.Click, this.OnClickGerarHistorico, this);
        }
        if (this.chkFarmaciaPopular) {
            adicionarEventoMoura(this.chkFarmaciaPopular.CheckChanged, this.CorrigirCamposFarmaciaPopular, this);
        }
        if (this.chkGratuidade) {
            adicionarEventoMoura(this.chkGratuidade.CheckChanged, this.CorrigirCamposGratuidade, this);
        }
        if (this.chkFracionado) {
            adicionarEventoMoura(this.chkFracionado.CheckChanged, this.OnAtivouFracionados, this);
        }
        if (this.txtQtdeCaixaFarmacia) {
            adicionarEventoMoura(this.txtQtdeCaixaFarmacia.TextChanged, this.OnTextBoxQtdeCaixaFarmaciaChange, this);
        }
        if (this.txtValorMaxAprovadoMS) {
            adicionarEventoMoura(this.txtValorMaxAprovadoMS.TextChanged, this.OnTextBoxValorMaxAprovadoMS, this);
        }
        if (this.txtTabelaPreco) {
            adicionarEventoMoura(this.txtTabelaPreco.TextChanged, this.OnTextBoxTabelaPrecoChange, this);
        }
        if (this.btnOKInativo) {
            adicionarEventoMoura(this.btnOKInativo.Click, this.OnClickBotaoOKInativo, this);
        }
        if (this.btnInfBalanca) {
            adicionarEventoMoura(this.btnInfBalanca.Click, this.OnClickBotaoExtraBalanca, this);
        }
        if (this.btnOkInfExtra) {
            adicionarEventoMoura(this.btnOkInfExtra.Click, this.OnClickOKInfExtraBalanca, this);
        }
        if (this.btnProdutosSimilares) {
            adicionarEventoMoura(this.btnProdutosSimilares.Click, this.OnClickBotaoSimilares, this);
        }
        if (this.btnOkSimilares) {
            adicionarEventoMoura(this.btnOkSimilares.Click, this.OnClickOKSimilares, this);
        }
        if (this.btnAdicionarSimilar) {
            adicionarEventoMoura(this.btnAdicionarSimilar.Click, this.OnClickAdicionarSimilar, this);
        }
        if (this.btnImportarDados) {
            adicionarEventoMoura(this.btnImportarDados.Click, this.OnClickBotaoImportarDados, this);
        }
        if (this.btnCancelarImportar) {
            adicionarEventoMoura(this.btnCancelarImportar.Click, this.OnClickBotaoCancelarImportarDados, this);
        }
        if (this.btnImportarProduto) {
            adicionarEventoMoura(this.btnImportarProduto.Click, this.OnClickBotaoImportarProduto, this);
        }
        if (this.btnAdicionarCodBarras) {
            adicionarEventoMoura(this.btnAdicionarCodBarras.Click, this.OnClickBotaoAdicionarCodigoBarra, this);
        }
        if (this.btnRemoverCodBarras) {
            adicionarEventoMoura(this.btnRemoverCodBarras.Click, this.OnClickBotaoRemoverCodigoBarra, this);
        }
        if (this.txtNCM) {
            adicionarEventoMoura(this.txtNCM.TextChanged, this.OnAlterouNCM, this);
        }
        if (this.gridCest) {
            adicionarEventoMoura(this.gridCest.SelecionouLinha, this.OnSelecionouCEST, this);
        }
        if (this.GridPrecos) {
            adicionarEventoMoura(this.GridPrecos.Validando, this.OnAlterouProdutoPreco, this);
        }
        if (this.btnDrogaria) {
            adicionarEventoMoura(this.btnDrogaria.Click, this.OnClickBotaoDrogaria, this);
        }
        if (this.btnOkFarmacia) {
            adicionarEventoMoura(this.btnOkFarmacia.Click, this.OnClickOKModalDrogaria, this);
        }
        if (this.btnManipulacao) {
            adicionarEventoMoura(this.btnManipulacao.Click, this.OnClickBotaoManipulacao, this);
        }
        if (this.btnOkManipulacao) {
            adicionarEventoMoura(this.btnOkManipulacao.Click, this.OnClickOKModalManipulacao, this);
        }
        if (this.btnAdicionarSinonimo) {
            adicionarEventoMoura(this.btnAdicionarSinonimo.Click, this.OnClickAdicionarSinonimo, this);
        }
        if (this.btnDocumentos) {
            adicionarEventoMoura(this.btnDocumentos.Click, this.OnClickDocumentos, this);
        }
        if (this.chkProdutoBalanca) {
            adicionarEventoMoura(this.chkProdutoBalanca.CheckChanged, this.OnchkProdutoBalancaChange, this);
        }
        if (this.GridEstoque) {
            adicionarEventoMoura(this.GridEstoque.RowValidating, this.OnRowValidatingGridEstoque, this);
        }
        if (this.chkAnimal_Silvestre)
            adicionarEventoMoura(this.chkAnimal_Silvestre.CheckChanged, this.OnchkAnimal_SilvestreCheckChanged, this);
        if (this.GridRegraImposto) {
            adicionarEventoMoura(this.GridRegraImposto.RowValidating, this.OnEditouRegraImposto, this);
        }
        //adicionarEventoJQuery(document, "DevExpressEndCallback", this.OnGlobalEndCallback, this);
        //if (this.ParametrosTela.codigo) {
        //    setTimeout($.proxy(function () { this.OnAtualizouID(this.ParametrosTela.codigo.CNum(), 0, this.GetScope()) }, this), 1000);
        //}
        if (this.btnGerarGrade) {
            adicionarEventoMoura(this.btnGerarGrade.Click, this.OnClicouGerarGrade, this);
        }
        if (this.btnMdGradeGravar) {
            adicionarEventoMoura(this.btnMdGradeGravar.Click, this.OnClicouGravarGrade, this);
        }
        if (this.btnMdGradeFechar) {
            adicionarEventoMoura(this.btnMdGradeFechar.Click, this.OnClicouFecharGrade, this);
        }
        if (this.optTipoProdutoCombo) {
            adicionarEventoMoura(this.optTipoProdutoCombo.SelectionChanged, this.AlternarCamposSetarProduto, this);
        }
        if (this.grdGerarProdutoCombo) {
            adicionarEventoMoura(this.grdGerarProdutoCombo.AdicionandoItem, this.ValidarProdutoCombo, this);
            adicionarEventoMoura(this.grdGerarProdutoCombo.LimpouItem, this.LimpouItemProdutoCombo, this);
        }
        if (this.txtProdutoCombo) {
            adicionarEventoMoura(this.txtProdutoCombo.Procurou, this.ProcuraProduto, this);
            adicionarEventoMoura(this.txtProdutoCombo.AntesAbrirProcura, this.OnAntesBuscaProdutoCombo, this);
            adicionarEventoMoura(this.txtProdutoCombo.AbriuProcura, this.OnBuscaProdutoCombo, this);
        }
        if (this.txtQtdeParticipanteDecimal) {
            adicionarEventoMoura(this.txtQtdeParticipanteDecimal.TextChanged, this.ValidaValorDecimal, this);
        }
        if (this.txtValorCombo) {
            adicionarEventoMoura(this.txtValorCombo.TextChanged, this.ValidaValorDecimal, this);
        }
        if (this.txtQtdeParticipanteInteiro) {
            adicionarEventoMoura(this.txtQtdeParticipanteInteiro.TextChanged, this.ValidaValorInteiro, this);
        }
        if (this.txtOrdemCombo) {
            adicionarEventoMoura(this.txtOrdemCombo.TextChanged, this.ValidaValorInteiro, this);
        }
        if (this.chkListaPrecos) {
            adicionarEventoMoura(this.chkListaPrecos.CheckChanged, this.OnCheckListaPreco, this);
        }
    };
    C_Produt.prototype.OnCheckListaPreco = function () {
        if (this.chkListaPrecos.Checked) {
            this.AtualizarValorVenda();
        }
        else {
            this.LimparGradeListaPrecos();
        }
    };
    C_Produt.prototype.OnEditouRegraImposto = function (s, e) {
        if (ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_iMendes) {
            //e.errorText = "O sistema está com a integração do iMendes habilitada! Não será permitido alterar as regras de imposto do sistema."
            if (e.newData.Codigo_Tipo_Regra && e.newData.Codigo_Tipo_Regra != null) {
                var parametros = {
                    codTipo: e.newData.Codigo_Tipo_Regra
                };
                if (this.ExecutarFuncaoServerSideSynch('IsIMendes', parametros)) {
                    e.errorText = "Não é possível selecionar uma regra iMendes manualmente.";
                    e.isValid = false;
                    return;
                }
            }
        }
    };
    C_Produt.prototype.OnchkAnimal_SilvestreCheckChanged = function () {
        if (this.chkAnimal_Silvestre.Checked) {
            this.btnMicrochip_Anilhas.Visible = true;
        }
        else {
            this.btnMicrochip_Anilhas.Visible = false;
            if (this.Anilhas && this.Anilhas.length > 0) {
                MsgBoxJS("O produto possui anilhas, as mesmas serão excluidas</br>Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.RespostaAnimalSilvestre, this));
            }
        }
    };
    C_Produt.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        var parametros;
        this.InitListas();
        this.Limpar();
        this.AtualizarFotosProduto(this.EntityTela);
        this.validarFracionados();
        if (this.Tab) {
            var visivel;
            if (ValoresSismoura.Sistema_Pais == 607 /* Portugal */) {
                visivel = true;
                this.cboCFOP.Obrigatorio = false;
            }
            else {
                visivel = false;
                this.cboMotivoIsencao.Obrigatorio = visivel;
                this.cboMotivoIsencao.Visible = visivel;
            }
            this.Tab.AlterarVisibleAba("abaTributacao", visivel);
            this.Tab.AlterarVisibleAba("AbaNFAdicionais", !visivel);
            this.Tab.AlterarVisibleAba("AbaNFImpostos", !visivel);
            this.cboTaxa_IVA.Visible = visivel;
            this.cboTaxa_IVA.Obrigatorio = visivel;
            this.optPagamento.Obrigatorio = visivel;
            this.agpIVA.Visible = visivel;
            this.btnMicrochip_Anilhas.Visible = false;
            if (ValoresSismoura.ConfiguracoesRetaguarda.EstabelecimentoEnum == 3 /* PetShop */) {
                this.chkAnimal_Silvestre.Visible = true;
            }
            else {
                this.chkAnimal_Silvestre.Visible = false;
            }
        }
        if (!ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_iMendes) {
            if (this.btnConsultarTributacao) {
                this.btnConsultarTributacao.Visible = false;
            }
            //this.cboCFOP.Obrigatorio = true;
        }
        else {
            this.txtCodigoBarras.Obrigatorio = true;
            this.lblIMendes1.Visible = true;
            this.lblIMendes2.Visible = true;
        }
        //Campo que será atualizado: preço de venda ou margem (%)
        if (!String.IsNullOrWhiteSpace(ValoresSismoura.ConfiguracoesRetaguarda.Produto_Atualizar_Entrada)) {
            this.CampoAtualizar = ValoresSismoura.ConfiguracoesRetaguarda.Produto_Atualizar_Entrada.substring(0, 1).toUpperCase();
        }
        else {
            this.CampoAtualizar = "V";
        }
        var MarcaPadrao = this.ExecutarFuncaoServerSideSynch("GetMarcaPadrao", parametros);
        this.txtMarca.Procurar(MarcaPadrao);
        if (!this.GetScope().AlterouControlado) {
            this.GetScope().AlterouControlado = $.proxy(this.AlterouControlado, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Controlado; }, this.GetScope().AlterouControlado);
        }
        if (!this.GetScope().AlterouUnidade) {
            this.GetScope().AlterouUnidade = $.proxy(this.AlterouUnidade, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Unidade; }, this.GetScope().AlterouUnidade);
        }
        if (!this.GetScope().AlterouIVA) {
            this.GetScope().AlterouIVA = $.proxy(this.AlterouIVA, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Porcentagem_IVA; }, this.GetScope().AlterouIVA);
        }
        setTimeout(function () {
            if (CNum(_this.ParametrosTela.Codigo) > 0 || CNum(_this.ParametrosTela.codigo) > 0) {
                return;
            }
            if (!String.IsNullOrWhiteSpace(_this.ParametrosTela.nome)) {
                _this.EntityTela.Nome = _this.ParametrosTela.nome;
            }
            if (!String.IsNullOrWhiteSpace(_this.ParametrosTela.custo)) {
                _this.EntityTela.Preco_Custo = CNum(_this.ParametrosTela.custo);
            }
            if (!String.IsNullOrWhiteSpace(_this.ParametrosTela.unidade)) {
                _this.EntityTela.Unidade = _this.ParametrosTela.unidade;
            }
            if (!String.IsNullOrWhiteSpace(_this.ParametrosTela.ncm)) {
                _this.EntityTela.Ncm = _this.ParametrosTela.ncm;
            }
            if (!String.IsNullOrWhiteSpace(_this.ParametrosTela.qtdecx)) {
                _this.EntityTela.Quantidade = CNum(_this.ParametrosTela.qtdecx);
            }
            if (!String.IsNullOrWhiteSpace(_this.ParametrosTela.codbarras)) {
                _this.EntityTela.Codigo_Barra = _this.ParametrosTela.codbarras;
            }
            if (_this.ParametrosTela.codprodutofornecedor && _this.ParametrosTela.codigofornecedor) {
                _this.Fornecedor.Codigo_Fornecedor = CNum(_this.ParametrosTela.codigofornecedor);
                _this.Fornecedor.Codigo_Produto_Fornecedor = "" + _this.ParametrosTela.codprodutofornecedor;
                //this.GetScope().Entity.Empresa = this.ParametrosTela.codEmpresa.CNum();                               
                _this.GridFornecedor.AdicionarOuAlterarItemAtual();
            }
            _this.RefreshAngular();
        }, 700);
        this.txtQtdeParticipanteDecimal.Visible = false;
        this.txtQtdeParticipanteInteiro.Visible = true;
    };
    C_Produt.prototype.OnAtivouFracionados = function () {
        this.validarFracionados();
    };
    C_Produt.prototype.validarFracionados = function () {
        if (this.chkFracionado.Checked && this.EntityTela.Codigo > 0) {
            this.btnFracionado.Visible = true;
            this.Tab.AlterarVisibleAba("abaFracionados", true);
        }
        else {
            this.btnFracionado.Visible = false;
            this.Tab.AlterarVisibleAba("abaFracionados", false);
        }
    };
    C_Produt.prototype.abrirConfigFracionado = function (s, e) {
        var entity = this.EntityTela;
        if (entity.Codigo > 0) {
            var parametrosTela = [];
            parametrosTela.push("codigo=" + CNum(this.EntityTela.Codigo));
            parametrosTela.push("empresa=" + CNum(ValoresSismoura.EmpresaPadraoUsuario));
            abrirTelaNovaAbaParametros(formataURLRelativa("/Modulos/Compras/Estoque/Produto/C_ProdFra.aspx"), parametrosTela);
            e.processOnServer = false;
        }
        else {
            e.processOnServer = false;
            MostrarAlerta("Selecione ao menos um produto para visualizar o Fracionamento");
        }
    };
    //protected OnGlobalEndCallback() {
    //    var entity = this.EntityTela;
    //    //Utilizado desta forma, pois ao concluir o callback do componente, ele perdia o enable false
    //    if (!entity || !entity.Codigo || entity.Codigo <= 0) {
    //        this.fotosProduto.SetEnabled(false);
    //    }
    //}
    C_Produt.prototype.OnDepoisLimpar = function (Entity) {
        try {
            _super.prototype.OnDepoisLimpar.call(this, Entity);
            Entity.Iat = "A";
            Entity.Data_Vigencia = new Date();
            Entity.Tipo_Comissao = "P";
            Entity.Custo_Sem_Imposto = 0;
            Entity.Custo_Entrada = 0;
            Entity.AuxIsGerarCodBarras = false;
            Entity.Tipo_Produto = 1; //revenda
            Entity.Enviar_Pedidos_Moura = true;
            if (ValoresSismoura.Sistema_Pais == 607 /* Portugal */) {
                this.cboTaxa_IVA.Enabled = true;
                this.txtDescricao.Enabled = true;
                this.cboUnidadeProduto.Enabled = true;
                this.cboMotivoIsencao.Enabled = true;
            }
            if (!String.IsNullOrWhiteSpace(ValoresSismoura.ConfiguracoesRetaguarda.Taxa_Tributaria_Padrao) && ValoresSismoura.ConfiguracoesRetaguarda.Taxa_Tributaria_Padrao != "#Nenhuma") {
                Entity.Taxa_Tributaria = ("" + ValoresSismoura.ConfiguracoesRetaguarda.Taxa_Tributaria_Padrao).CNum();
            }
            if (!String.IsNullOrWhiteSpace(ValoresSismoura.ConfiguracoesRetaguarda.Unidade_Padrao) && ValoresSismoura.ConfiguracoesRetaguarda.Unidade_Padrao != "#Nenhuma") {
                Entity.Unidade = ValoresSismoura.ConfiguracoesRetaguarda.Unidade_Padrao;
            }
            this.HabilitaRegraImposto(false);
            Entity.Fornecedores = [];
            Entity.Similares = [];
            Entity.Estoques = [];
            Entity.Inativo_Empresas = [];
            Entity.Codigos_Barras = [];
            Entity.RegrasImposto = [];
            Entity.Regras_Imposto_CFOP = [];
            Entity.Regras_Imposto_Finalidade = [];
            Entity.Sinonimos = [];
            Entity.Excipientes = [];
            Entity.Anilhas = [];
            Entity.EstoqueProduto = [];
            Entity.Lista_Produto_Barra_Dun14 = [];
            Entity.Produto_Combo = [];
            this.Produto_Combo = [];
            this.Fornecedores = [];
            this.GridFornecedor.Limpar();
            this.RegrasCFOP = [];
            this.grdRegraCFOP.Limpar();
            this.RegrasFinalidade = [];
            this.Duns14 = [];
            if (this.grdRegraFinalidade) {
                this.grdRegraFinalidade.Limpar();
            }
            this.Similares = [];
            this.Excipientes = [];
            this.Anilhas = [];
            this.criarEntidadePersonalizados(Entity);
            this.LimparGradeInativos();
            this.LimparGradeEstoqueMinMax();
            this.LimparGradeRegraImposto();
            this.LimparGradeListaPrecos();
            this.LimparGradeEstoques();
            this.AtualizarGridSinonimos();
            this.ConfiguracoesGravarProduto = {};
            this.ConfiguracoesGravarProduto.PerguntouCodigoBarra = false;
            this.lblProdutoEcommerce.Visible = false;
            this.AtualizarListaCodigosBarra(Entity);
            this.AtualizarFotosProduto(Entity);
            this.AlterarColunaEditavelEstoque();
            this.lblDataCadastro.Text = "";
            this.lblDataAlteracao.Text = "";
            this.lblCustoEntrada.Text = (0).Format(ValoresSismoura.CasasDecimaisValor);
            this.lblCustoSemImposto.Text = (0).Format(ValoresSismoura.CasasDecimaisValor);
            if (this.txtCodigoBarrasAdicionar) {
                this.txtCodigoBarrasAdicionar.Limpar();
            }
            this.txtMargemReal.Limpar();
            this.lblCustoABC.Text = "";
            this.lblValorVendaABC.Text = "";
            this.lblNomeABC.Text = "";
            this.LimparInfExtraBalanca();
            this.chkProdutoBalanca.Checked = false;
            Entity.Balanca = 0;
            this.VerificaHabilitarBotaoBalanca(Entity);
            this.chkSelfService.Checked = false;
            this.chkFracionado.Checked = false;
            this.chkVenderSemEstoque.Checked = false;
            this.chkProdutoImportado.Checked = false;
            this.chkFracionado.Checked = false;
            this.txtSinonimo.Limpar();
            this.btnMicrochip_Anilhas.Visible = false;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.AtualizarFotosProduto = function (Entity) {
        if (Entity && Entity.Codigo && Entity.Codigo > 0) {
            this.fotosProduto.SetEnabled(true);
            this.fotosProduto.Pasta = this.PathFotos + ("" + Entity.Codigo);
            this.fotosProduto.Atualizar();
            this.lblInfFoto.Visible = false;
        }
        else {
            this.fotosProduto.Limpar();
            this.fotosProduto.Pasta = "";
            this.fotosProduto.SetEnabled(false);
            this.lblInfFoto.Visible = true;
        }
    };
    C_Produt.prototype.OnAntesBuscarExistente = function () {
        _super.prototype.OnAntesBuscarExistente.call(this);
    };
    C_Produt.prototype.OnDepoisBuscarExistente = function (Entidade) {
        var _this = this;
        try {
            _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
            debugger;
            var tela = this;
            var parametros;
            if (Entidade.Servico_Pet) {
                MostrarAlerta("Este serviço do Pet Shop não pode ser alterado no Cadastro de Produto");
                setTimeout(function () {
                    tela.Limpar();
                    tela.txtCodigo.Focus();
                }, 500);
                return;
            }
            if (Entidade.Controlado && ("" + Entidade.Codigo).CNum() > 0) {
                parametros = {
                    codProduto: ("" + Entidade.Codigo).CNum()
                };
                var msg = this.ExecutarFuncaoServerSideSynch("Verifica_Produto_Lote", parametros);
                if (!String.IsNullOrWhiteSpace(msg)) {
                    MsgBoxJS(msg, MsgBoxOptions.OkOnly, MsgBoxIcon.Info);
                }
            }
            if (Entidade.Carregado) {
                this.lblProdutoEcommerce.Visible = true;
            }
            else {
                this.lblProdutoEcommerce.Visible = false;
            }
            if (Entidade.Balanca) {
                this.chkProdutoBalanca.Checked = true;
            }
            else {
                this.chkProdutoBalanca.Checked = false;
            }
            if (Entidade.Self_Service) {
                this.chkSelfService.Checked = true;
            }
            else {
                this.chkSelfService.Checked = false;
            }
            if (Entidade.Produto_Importado) {
                this.chkProdutoImportado.Checked = true;
            }
            else {
                this.chkProdutoImportado.Checked = false;
            }
            if (Entidade.Fracionado) {
                this.chkFracionado.Checked = true;
                this.btnFracionado.Visible = true;
                this.Tab.AlterarVisibleAba("abaFracionados", true);
                this.PreencherGradeFracionados(Entidade);
            }
            else {
                this.chkFracionado.Checked = false;
                this.btnFracionado.Visible = false;
                this.Tab.AlterarVisibleAba("abaFracionados", false);
            }
            if (!Entidade.Estoque_Minimo_Dias) {
                Entidade.Estoque_Minimo_Dias = null;
            }
            if (!Entidade.Estoque_Maximo_Dias) {
                Entidade.Estoque_Maximo_Dias = null;
            }
            if (Entidade.Utilizar_Orcamento) {
                this.chkPermitirUtilizarOrcamento.Checked = true;
            }
            else {
                this.chkPermitirUtilizarOrcamento.Checked = false;
            }
            this.VerificaHabilitarBotaoBalanca(Entidade);
            var pCusto = 0, pProduto = 0, pUnidade = "", pPeso = 0;
            if (Entidade.Preco_Custo) {
                pCusto = Entidade.Preco_Custo;
            }
            if (Entidade.Preco_Produto) {
                pProduto = Entidade.Preco_Produto;
            }
            if (Entidade.Unidade) {
                pUnidade = Entidade.Unidade;
            }
            if (Entidade.Peso_Produto) {
                pPeso = Entidade.Peso_Produto;
            }
            parametros = {
                codProduto: ("" + Entidade.Codigo).CNum(),
                precoCusto: pCusto,
                precoProduto: pProduto,
                unidadeProduto: pUnidade,
                pesoProduto: pPeso,
            };
            var InformacoesAdicionais = this.ExecutarFuncaoServerSideSynch("GetInformacoesAdicionaisProduto", parametros);
            this.Fornecedores = InformacoesAdicionais.Fornecedores;
            this.Similares = InformacoesAdicionais.Similares;
            this.RegrasCFOP = InformacoesAdicionais.RegrasCFOP;
            this.RegrasFinalidade = InformacoesAdicionais.RegrasFinalidade;
            this.Excipientes = InformacoesAdicionais.Excipientes;
            this.Anilhas = InformacoesAdicionais.Anilhas;
            this.DepositoEstoques = InformacoesAdicionais.Estoques;
            Entidade.Margem = InformacoesAdicionais.Margem;
            this.txtMargemReal.SetText(InformacoesAdicionais.MargemReal.Format(this.txtMargemReal.QuantidadeCasas));
            if (Entidade.Data_Cadastro) {
                this.lblDataCadastro.Text = Entidade.Data_Cadastro.toString().ToDate().FormataData();
            }
            if (Entidade.Data_Alteracao) {
                this.lblDataAlteracao.Text = Entidade.Data_Alteracao.toString().ToDate().FormataData();
            }
            if (Entidade.Custo_Sem_Imposto) {
                this.lblCustoSemImposto.Text = Entidade.Custo_Sem_Imposto.Format(ValoresSismoura.CasasDecimaisValor);
            }
            else {
                this.lblCustoSemImposto.Text = (0).Format(ValoresSismoura.CasasDecimaisValor);
            }
            if (Entidade.Custo_Entrada) {
                this.lblCustoEntrada.Text = Entidade.Custo_Entrada.Format(ValoresSismoura.CasasDecimaisValor);
            }
            else {
                this.lblCustoEntrada.Text = (0).Format(ValoresSismoura.CasasDecimaisValor);
            }
            if (Entidade.Preco_Custo_Abcfarma) {
                this.lblCustoABC.Text = Entidade.Preco_Custo_Abcfarma.Format(2);
            }
            else {
                this.lblCustoABC.Text = (0).Format(2);
            }
            if (Entidade.Preco_Venda_Abcfarma) {
                this.lblValorVendaABC.Text = Entidade.Preco_Venda_Abcfarma.Format(2);
            }
            else {
                this.lblValorVendaABC.Text = (0).Format(2);
            }
            if (!String.IsNullOrWhiteSpace(Entidade.Nome_Abcfarma)) {
                this.lblNomeABC.Text = Entidade.Codigo_Externo + ' - ' + Entidade.Nome_Abcfarma;
            }
            else {
                this.lblNomeABC.Text = "";
            }
            this.Duns14 = Entidade.Lista_Produto_Barra_Dun14;
            setTimeout(function () { _this.OnTextBoxValorMaxAprovadoMS(); }, 1000);
            this.AtualizarGridSinonimos();
            if (this.txtCodigoBarrasAdicionar) {
                this.txtCodigoBarrasAdicionar.Limpar();
            }
            this.AtualizarListaCodigosBarra(Entidade);
            this.PreencherGradeInativos(Entidade);
            this.PreencherGradeEstoqueMinEmpresa(Entidade);
            this.PreencherGradeRegraImposto(Entidade);
            this.PreencherGradeListaPrecos(Entidade);
            this.PreencherCampoInformacoesExtraBalanca(Entidade);
            this.AlterarColunaEditavelEstoque();
            this.criarEntidadePersonalizados(Entidade);
            this.AtualizarFotosProduto(Entidade);
            if (Entidade.Animal_Silvestre) {
                this.btnMicrochip_Anilhas.Visible = true;
            }
            else {
                this.btnMicrochip_Anilhas.Visible = false;
            }
            if (ValoresSismoura.Sistema_Pais == 607 /* Portugal */) {
                this.cboTaxa_IVA.Enabled = false;
                this.txtDescricao.Enabled = false;
                this.cboUnidadeProduto.Enabled = false;
                this.cboMotivoIsencao.Enabled = false;
            }
            if (Entidade.Produto_Combo) {
                this.Produto_Combo = Entidade.Produto_Combo;
                this.RefreshAngular;
            }
        }
        catch (ex) {
            LogarException(ex);
            this.Limpar();
        }
    };
    //protected OnAntesDeletar(): boolean {
    //    super.OnAntesDeletar();
    //    if (ValoresSismoura.ConfiguracoesRetaguarda.utilizar_modulo_franquia) {
    //        MsgBoxJS("Este produto não poderá ser excluído, pois está sendo utilizado em franquia. O mesmo só poderá ser inativado. Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question,
    //            (result: MsgBoxResultEventArgs) => {
    //                if (result.Resultado == MsgBoxResult.Yes) {
    //                    this.EntityTela.Inativo = true;
    //                    var lista: SiSMoura.Core.Entity.ProdutoInativoRetorno[] = this.grdInativosporEmpresas.DataSource;
    //                    if (!lista) {
    //                        lista = [];
    //                    }
    //                    var produtoInativo: SiSMoura.Core.Entity.ProdutoInativoRetorno = <SiSMoura.Core.Entity.ProdutoInativoRetorno>{};
    //                    produtoInativo.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
    //                    produtoInativo.Contador = lista.Max("Contador") + 1;
    //                    produtoInativo.Inativo = true;
    //                    if (!lista.filter(f => f.Empresa == ValoresSismoura.EmpresaPadraoUsuario)){
    //                        lista.push(produtoInativo);
    //                    }
    //                    this.grdInativosporEmpresas.PreencherGrid(lista);
    //                    this.ExecutarGravar();
    //                }
    //            });
    //        return false;
    //    }
    //    return true;
    //}
    C_Produt.prototype.OnAntesGravar = function () {
        var _this = this;
        try {
            _super.prototype.OnAntesGravar.call(this);
            var produto = this.GetScope().Entity;
            //fixo no codigo ¯\_(ツ)_/¯ 
            produto.Status = "1";
            if (this.chkProdutoBalanca.Checked) {
                produto.Balanca = 1;
            }
            else {
                produto.Balanca = 0;
            }
            if (this.chkSelfService.Checked) {
                produto.Self_Service = 1;
            }
            else {
                produto.Self_Service = 0;
            }
            if (this.chkFracionado.Checked) {
                produto.Fracionado = true;
            }
            else {
                produto.Fracionado = false;
            }
            if (this.chkProdutoImportado.Checked) {
                produto.Produto_Importado = 1;
            }
            else {
                produto.Produto_Importado = 0;
            }
            if (this.chkPermitirUtilizarOrcamento.Checked) {
                produto.Utilizar_Orcamento = true;
            }
            else {
                produto.Utilizar_Orcamento = false;
            }
            if (!produto.Estoque_Minimo_Dias || produto.Estoque_Minimo_Dias <= 0) {
                produto.Estoque_Minimo_Dias = null;
            }
            if (!produto.Estoque_Maximo_Dias || produto.Estoque_Maximo_Dias <= 0) {
                produto.Estoque_Maximo_Dias = null;
            }
            if (!produto.Produto_Internet || produto.Produto_Internet <= 0) {
                produto.Produto_Internet = null;
            }
            this.PreencherFornecedoresEntity(produto);
            this.PreencherListaInativos(produto);
            this.PreencherListaEstoqueMinEmpresa(produto);
            this.PreencherListaSimilares(produto);
            this.PreencherListaExcipientes(produto);
            this.PreencherListaAnilhas(produto);
            this.PreencherListaRegraImposto(produto);
            this.PreencherRegrasCFOPEntity(produto);
            this.PreencherListaProdutPreco(produto);
            this.PreencherListaEstoque(produto);
            this.PreencherEntidadeInfExtraBalanca(produto);
            produto.Regras_Imposto_Finalidade = this.RegrasFinalidade;
            produto.Lista_Produto_Barra_Dun14 = this.Duns14;
            this.criarEntidadePersonalizados(produto);
            if (this.EntityTela.Tipo_Produto == 15) {
                this.EntityTela.Produto_Combo = this.Produto_Combo;
            }
            if (!this.ValidarAntesGravar(produto)) {
                return false;
            }
            if (CNum(this.EntityTela.Codigo) == 0) {
                if (ValoresSismoura.ConfiguracoesRetaguarda.Usar_Cadastro_Grade && ValoresSismoura.ConfiguracoesRetaguarda.Continuar_Cadastro_Produto) {
                    MsgBoxJS("Continuar incluindo produtos da mesma grade (mesma referência) alterando somente a cor e o tamanho?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (d) {
                        if (d.Resultado == MsgBoxResult.Yes) {
                            _this.AbrirModalGrade();
                        }
                    });
                }
            }
            return true;
        }
        catch (ex) {
            LogarException(ex);
            return false;
        }
    };
    C_Produt.prototype.ValidarAntesGravar = function (produto) {
        try {
            var retornoAntesGravar;
            var parametros;
            parametros = {
                Entidade: JSON.stringify(produto),
                strListaRegrasImposto: JSON.stringify(this.RegrasImposto),
            };
            retornoAntesGravar = this.ExecutarFuncaoServerSideSynch("ValidarAntesGravar", parametros);
            if (!String.IsNullOrWhiteSpace(retornoAntesGravar)) {
                MostrarAlerta(retornoAntesGravar);
                return false;
            }
            var tela = this;
            if (produto.Tipo_Produto == 15) { //Produto Combo
                var unit_combo = produto.Produto_Combo.Sum("Valor_Unitario");
                if (unit_combo != produto.Preco_Produto) {
                    MostrarAlerta("A soma do valor dos produtos do combo deve ser igual ao informado no Preco da venda");
                    return false;
                }
            }
            if (!produto.AuxIsGerarCodBarras) {
                if ((!this.chkProdutoBalanca.Check) || (!produto.Balanca) || ValoresSismoura.ConfiguracoesRetaguarda.Gerar_Barra_Balanca) {
                    if (ValoresSismoura.ConfiguracoesRetaguarda.Gerar_Codigo_Barras && String.IsNullOrWhiteSpace(produto.Codigo_Barra)) {
                        if (!this.ConfiguracoesGravarProduto.PerguntouCodigoBarra) {
                            MsgBoxJS("O produto não possui código de barras.Deseja que o sistema gere?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (e) {
                                tela.ConfiguracoesGravarProduto.PerguntouCodigoBarra = true;
                                produto.AuxIsGerarCodBarras = (e.Resultado == MsgBoxResult.Yes ? true : false);
                                tela.ExecutarGravar();
                            }, null);
                            return false;
                        }
                        else {
                            this.ConfiguracoesGravarProduto.PerguntouCodigoBarra = false;
                        }
                    }
                }
            }
            return true;
        }
        catch (ex) {
            LogarException(ex);
            return false;
        }
    };
    C_Produt.prototype.ExecutarGravar = function () {
        this.ClicarGravar();
    };
    C_Produt.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.EntityTela.AuxIsGerarCodBarras = false;
        this.ConfiguracoesGravarProduto.PerguntouCodigoBarra = false;
        this.PreencherGradeListaPrecos(this.EntityTela);
        this.AtualizarFotosProduto(this.EntityTela);
        if (ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_iMendes) {
            var parametros_1;
            var isIMendes = void 0;
            var regra = this.EntityTela.RegrasImposto.FirstOrDefault('Empresa', ValoresSismoura.EmpresaPadraoUsuario);
            if (regra) {
                parametros_1 = {
                    codTipo: regra.Tipo_Regra_Imposto
                };
                isIMendes = this.ExecutarFuncaoServerSideSynch('IsIMendes', parametros_1);
            }
            if (!isIMendes) {
                parametros_1 = {
                    codProduto: this.EntityTela.Codigo
                };
                var retorno = this.ExecutarFuncaoServerSideSynch('IsProdutoIMendes', parametros_1);
                if (!retorno) {
                    this.ConsultaIMendes();
                }
            }
            else {
                this.HabilitaRegraImposto(isIMendes);
            }
        }
        if (this.EntityTela.Codigo) {
            var parametros = {
                CodigoProduto: this.EntityTela.Codigo
            };
            this.Duns14 = this.ExecutarFuncaoServerSideSynch("PreencherDun14", parametros);
        }
        return true;
    };
    C_Produt.prototype.PreencherFornecedoresEntity = function (Entity) {
        Entity.Fornecedores = [];
        for (var x = 0; x <= this.Fornecedores.length - 1; x++) {
            var pf = {};
            var item = this.Fornecedores[x];
            pf.Codigo = item.Codigo;
            pf.Codigo_Produto_Fornecedor = item.Codigo_Produto_Fornecedor;
            pf.Data_Carga = new Date();
            pf.Empresa = item.Codigo_Empresa;
            pf.Entr_Prod_Converter_Calculo = item.Calculo;
            pf.Entr_Prod_Converter_Unidade = item.Unidade_Calculo;
            pf.Entr_Prod_Converter_Valor = item.Valor_Calculo;
            pf.Fornecedor = item.Codigo_Fornecedor;
            pf.Ressuprimento = item.Ressuprimento;
            Entity.Fornecedores.push(pf);
        }
    };
    C_Produt.prototype.PreencherRegrasCFOPEntity = function (Entity) {
        Entity.Regras_Imposto_CFOP = [];
        for (var x = 0; x <= this.RegrasCFOP.length - 1; x++) {
            var pf = {};
            var item = this.RegrasCFOP[x];
            pf.Cfop = item.CFOP;
            pf.Codigo = item.Codigo;
            pf.Data_Carga = new Date();
            pf.Empresa = item.Codigo_Empresa;
            pf.Produto = this.txtCodigo.GetText().CNum();
            pf.Tipo_Regra_Imposto = item.Tipo_Regra_Imposto;
            Entity.Regras_Imposto_CFOP.push(pf);
        }
    };
    C_Produt.prototype.abrirAnilhas = function (s, e) {
        e.processOnServer = false;
        this.grdMicrochip.AtualizarGrid();
        this.mdAnilha.ModalDialog.Show();
        this.RefreshAngular();
        return false;
    };
    C_Produt.prototype.gravarAnilhas = function (s, e) {
        e.processOnServer = false;
        this.mdAnilha.ModalDialog.Hide();
    };
    C_Produt.prototype.abrirConsultaPrecos = function (s, e) {
        e.processOnServer = false;
        if (this.txtCodigo && this.txtCodigo.Textbox) {
            var url = formataURLRelativa(URLTela.ConsultarPreco);
            var codigo = this.txtCodigo.GetText();
            if (!codigo || codigo == '') {
                MostrarAlerta('Informe um produto já cadastrado');
            }
            else {
                abrirTelaNovaAbaCodigo(url, codigo);
            }
        }
        return false;
    };
    C_Produt.prototype.OnClickHistoricoPreco = function (s, e) {
        e.processOnServer = false;
        this.txtPeriodoHistoricoPreco.Iniciar();
        this.cboHistoricoTipo.SetValue(0);
        this.cboHistoricoCampoAlterado.SetValue(0);
        this.mdHistoricoPreco.Show();
    };
    C_Produt.prototype.OnClickProdutoCombo = function (s, e) {
        e.processOnServer = false;
        //if (this.txtCodigo.GetText().CNum() <= 0) {
        //    MostrarAlerta("Informe um produto!");
        //}else
        if (this.EntityTela.Tipo_Produto == 15) {
            this.optTipoProdutoCombo.SetValue("P");
            this.txtGrupoCombo.Visible = false;
            this.txtSubgrupoCombo.Visible = false;
            this.mdProdutoCombo.Show();
            this.grdGerarProdutoCombo.Grid.Refresh();
            this.RefreshAngular();
        }
        else {
            MostrarAlerta("Informe um produto do tipo combo!");
        }
    };
    C_Produt.prototype.OnClickbtnConsultarTributacao = function (s, e) {
        e.processOnServer = false;
        if (this.EntityTela.Codigo && this.EntityTela.Codigo_Barra && this.EntityTela.Nome) {
            this.ConsultaIMendes();
        }
        else {
            if (!this.EntityTela.Codigo) {
                MostrarAlerta('Informe um produto já cadastrado para consultar  a tributação fiscal!');
            }
            else {
                if (!this.EntityTela.Nome && !this.EntityTela.Codigo_Barra) {
                    MostrarAlerta('É necessário preencher o Código de Barras e a Descrição para consultar a tributação fiscal!');
                }
                else {
                    if (!this.EntityTela.Nome) {
                        MostrarAlerta('É necessário preencher a Descrição!');
                    }
                    if (!this.EntityTela.Codigo_Barra) {
                        MostrarAlerta('É necessário preencher o Código de Barras!');
                    }
                }
            }
            return;
        }
    };
    C_Produt.prototype.OnClickAtualizar = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            abrirEspera("");
            var parametros = {
                retorno: this.retorno,
                produtos: this.produtos,
                codEmpresa: ValoresSismoura.EmpresaPadraoUsuario,
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            //var retorno = this.ExecutarFuncaoServerSideSynch("AtualizarRegra", parametros);
            this.ExecutarFuncaoServerSideAsynch("AtualizarRegra", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (retorno) {
                        MostrarMensagem("A regras do produto foram alteradas com sucesso");
                        _this.mdIntegracao.Hide();
                        _this.HabilitaRegraImposto(true);
                        _this.PreencherComboRegraImposto();
                    }
                    else {
                        MostrarAlerta("Não foi possivel alterar as regras do produto");
                    }
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarExceptionAjax(erro);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.OnClickNaoEncontrados = function (s, e) {
        e.processOnServer = false;
        var parametros = [];
        parametros.push("codEmpresa=" + ValoresSismoura.EmpresaPadraoUsuario);
        abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.ProdutosNLocalizadosiMendes), parametros);
    };
    C_Produt.prototype.PreencherRetornos = function (r) {
        this.retorno = r;
        for (var x = 0; x < this.retorno.length; x++) {
            this.retorno[x].cabecalho.dthr = this.retorno[x].cabecalho.dthr.ToDate();
            this.retorno[x].cabecalho.prodPend_datainicio = this.retorno[x].cabecalho.prodPend_datainicio.ToDate();
        }
        for (var x = 0; x < this.retorno.length; x++) {
            for (var y = 0; y < this.retorno[x].produto.length; y++) {
                this.retorno[x].produto[y].dtRev = this.retorno[x].produto[y].dtRev.ToDate();
            }
        }
        this.retorno = this.retorno;
    };
    C_Produt.prototype.PreencherProdutos = function (p) {
        this.produtos = p;
        //this.retorno.cabecalho.dthr = this.retorno.cabecalho.dthr.ToDate();
        //this.retorno.cabecalho.prodPend_datainicio = this.retorno.cabecalho.prodPend_datainicio.ToDate();
        //for (var x = 0; x < this.retorno.produto.length; x++) {
        //    this.retorno.produto[x].dtRev = this.retorno.produto[x].dtRev.ToDate()
        //}
        this.produtos = this.produtos;
    };
    C_Produt.prototype.OnGridIntegracaoCellPrepared = function (s, e) {
        try {
            if (e.rowType == "data" && e.data != null) {
                if (e.data.encontrou) {
                    e.cellElement.css("color", "#0c58d3");
                }
                else {
                    e.cellElement.css("color", "#d20c0c");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.OnClickGerarHistorico = function (s, e) {
        try {
            e.processOnServer = false;
            var parametros;
            var Historico;
            if (this.txtCodigo.GetText().CNum() <= 0) {
                return;
            }
            parametros = {
                codProduto: this.txtCodigo.GetText().CNum(),
                dataInicio: this.txtPeriodoHistoricoPreco.textBoxCalendarioInicio.GetDate(),
                dataFim: this.txtPeriodoHistoricoPreco.textBoxCalendarioFim.GetDate(),
                tipoRegistro: this.cboHistoricoTipo.GetValue().CNum(),
                campoAlterado: this.cboHistoricoCampoAlterado.GetValue().CNum()
            };
            Historico = this.ExecutarFuncaoServerSideSynch("PreencherGradeHistorico", parametros);
            if (Historico) {
                this.grdHistoricoPreco.PreencherGrid(Historico);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.OnClickInativosPorEmpresa = function (s, e) {
        try {
            debugger;
            e.processOnServer = false;
            var parametros;
            var empresas;
            this.lblProduto.Text = this.txtDescricao.GetText();
            this.mdInativosEmpresa.Show();
            this.grdInativosporEmpresas.Refresh();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.selecionarCheck = function (atributoAngular, valor) {
        this.EntityTela[atributoAngular] = valor;
        this.RefreshAngular();
    };
    C_Produt.prototype.validarDocumento = function () {
        if (this.chkA1.Check.checked || this.chkA2.Check.checked || this.chkA3.Check.checked || this.chkB1.Check.checked ||
            this.chkB2.Check.checked || this.chkC1.Check.checked || this.chkC2.Check.checked || this.chkC3.Check.checked ||
            this.chkC4.Check.checked || this.chkC5.Check.checked) {
            this.selecionarCheck("Bspo", true);
        }
        else {
            this.selecionarCheck("Bspo", false);
            ;
        }
        if (this.chkA1.Check.checked || this.chkA2.Check.checked || this.chkA3.Check.checked || this.chkB2.Check.checked ||
            this.chkC4.Check.checked) {
            this.selecionarCheck("Bmpo", true);
        }
        else {
            this.selecionarCheck("Bmpo", false);
        }
    };
    C_Produt.prototype.OnChkA1CheckChange = function () {
        this.validarDocumento();
    };
    C_Produt.prototype.OnChkA2CheckChange = function () {
        this.validarDocumento();
    };
    C_Produt.prototype.OnChkA3CheckChange = function () {
        this.validarDocumento();
    };
    C_Produt.prototype.OnChkB1CheckChange = function () {
        this.validarDocumento();
    };
    C_Produt.prototype.OnChkB2CheckChange = function () {
        this.validarDocumento();
    };
    C_Produt.prototype.OnChkC1CheckChange = function () {
        this.validarDocumento();
    };
    C_Produt.prototype.OnChkC2CheckChange = function () {
        this.validarDocumento();
    };
    C_Produt.prototype.OnChkC3CheckChange = function () {
        this.validarDocumento();
    };
    C_Produt.prototype.OnChkC4CheckChange = function () {
        this.validarDocumento();
    };
    C_Produt.prototype.OnChkC5CheckChange = function () {
        this.validarDocumento();
    };
    C_Produt.prototype.OnEndCallBackModalImportarDados = function () {
        this.txtProdutoImportar.Focus();
    };
    C_Produt.prototype.OnTextBoxPrecoDolarChange = function () {
        return this.CalcularDolar();
    };
    C_Produt.prototype.OnTextBoxMarkupChange = function () {
        if (this.txtMargemReal && this.txtMargemReal.Textbox) {
            this.txtMargemReal.Textbox.value = this.txtMarkup_P.Textbox.value.FormatNumber(3);
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.Preco_Dolar
            && this.txtPrecoDolar
            && this.txtPrecoDolar.Textbox
            && CNum(this.txtPrecoDolar.GetText()) > 0) {
            return this.CalcularDolar();
        }
        else {
            return this.AtualizarValorVenda();
        }
    };
    C_Produt.prototype.OnComboBoxEmpresaFornecedorChange = function () {
        this.txtFornecedor.LimparParametros();
        this.txtFornecedor.AddParametro("codEmpresa", this.cboEmpresaFornecedor.GetValue().toString());
    };
    C_Produt.prototype.OnPesquisouFornecedor = function (s, e) {
        var parametros;
        var retorno;
        if (this.txtFornecedor.GetText().CNum() <= 0) {
            return;
        }
        parametros = {
            codFornecedor: this.txtFornecedor.GetText().CNum(),
            codEmpresa: this.cboEmpresaFornecedor.GetValue()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("isFornecedorPertenceEmpresa", parametros);
        if (!retorno) {
            this.txtFornecedor.Limpar();
            this.txtFornecedor.LimparParametros();
            MostrarAlerta("Este fornecedor não pertence a empresa selecionada!");
            this.txtFornecedor.Focus();
            return;
        }
    };
    C_Produt.prototype.OnPesquisouContaContabil = function (s, e) {
        var parametros;
        var retorno;
        if (this.txtContaContabil.GetText().CNum() <= 0) {
            return;
        }
        parametros = {
            codConta: this.txtContaContabil.GetText().CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("IsContaAnalitica", parametros);
        if (!retorno) {
            this.txtContaContabil.Limpar();
            this.txtContaContabil.LimparParametros();
            MostrarAlerta("A Conta Contábil informada deve ser do tipo 'Analítica'!");
            this.txtContaContabil.Focus();
            return;
        }
        retorno = this.ExecutarFuncaoServerSideSynch("IsContaDespesa", parametros);
        if (!retorno) {
            this.txtContaContabil.Limpar();
            this.txtContaContabil.LimparParametros();
            MostrarAlerta("A Conta Contábil informada deve possuir a origem 'Despesa'!");
            this.txtContaContabil.Focus();
            return;
        }
    };
    C_Produt.prototype.OnTextBoxPrecoCustoChange = function () {
        return this.AtualizarValoresProduto();
    };
    C_Produt.prototype.OnTextBoxCodigoBarrasChange = function () {
        var _this = this;
        try {
            var parametros;
            var retorno;
            parametros = {
                codProduto: this.txtCodigo.GetText().CNum(),
                codBarras: this.txtCodigoBarras.GetText()
            };
            retorno = this.ExecutarFuncaoServerSideSynch("GerarCodigoBarras", parametros);
            this.txtCodigoBarras.SetText(retorno);
            parametros = {
                codProduto: this.txtCodigo.GetText().CNum(),
                codBarras: this.txtCodigoBarras.GetText()
            };
            var codProduto = this.ExecutarFuncaoServerSideSynch("IsCodigoBarrasUtilizado", parametros);
            if (codProduto > 0) {
                MsgBoxJS("Este Código de Barras já está cadastrado para o produto " + codProduto + ". Deseja visualizá-lo ? ", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                    if (result.Resultado == MsgBoxResult.Yes) {
                        _this.PreencherEntidade("" + result.Argument);
                    }
                    else {
                        _this.txtCodigoBarras.Limpar();
                    }
                }, codProduto);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.RespostaAnimalSilvestre = function (result) {
        if (result.Resultado == MsgBoxResult.No) {
            this.EntityTela.Animal_Silvestre = true;
            this.chkAnimal_Silvestre.Checked = true;
            this.btnMicrochip_Anilhas.Visible = true;
        }
        else {
            this.Anilhas = [];
        }
    };
    //private OnRespostaVerProdutoCodigoBarras(botaoSelecionado: MouraModalDialogBotoes) {
    //    if (botaoSelecionado == MouraModalDialogBotoes.Sim) {
    //        this.btnBuscarProduto.Botao.DoClick();
    //    }
    //}
    C_Produt.prototype.OnTextBoxPrecoVendaChange = function () {
        this.AtualizarMargem();
        this.AtualizarMarkup();
        if (this.txtPrecoVenda.Textbox.value.CNum() == 0) {
            this.txtPrecoVenda.Textbox.value = "";
        }
        else if (this.txtPrecoPorcentagem && this.txtPrecoPorcentagem.Textbox) {
            this.txtPrecoPorcentagem.Textbox.value = "";
        }
        var listaPrecosLocal = this.ListaPrecos;
        for (var x = 0; x < listaPrecosLocal.length; x++) {
            var preco = listaPrecosLocal[x];
            if (preco.Margem_Lista >= 0 && preco.Preco_Base_Lista == "Preco_Produto") {
                if (preco.Operacao_Subtrair_Lista) {
                    preco.Valor_Produto_Preco = this.txtPrecoVenda.GetText().CNum() - (preco.Margem_Lista / 100) * this.txtPrecoVenda.GetText().CNum();
                }
                else {
                    preco.Valor_Produto_Preco = this.txtPrecoVenda.GetText().CNum() + (preco.Margem_Lista / 100) * this.txtPrecoVenda.GetText().CNum();
                }
            }
            if (preco.Custo_Produto_Preco <= 0) {
                preco.Custo_Produto_Preco = this.txtPrecoCusto.GetText().CNum();
            }
        }
        this.ListaPrecos = listaPrecosLocal;
        //this.GridPrecos.Grid.PerformCallback();
        //this.GridPrecos.PerformCallback();
    };
    C_Produt.prototype.AtualizarValoresProduto = function () {
        var parametros;
        if (this.CampoAtualizar == "M") {
            this.AtualizarMargem();
            this.AtualizarMarkup();
        }
        else {
            this.AtualizarValorVenda();
        }
    };
    C_Produt.prototype.AtualizarValorVenda = function () {
        try {
            var precoVenda;
            var parametros;
            if (ValoresSismoura.Sistema_Pais == 607 /* Portugal */) {
                var IVA = this.cboTaxa_IVA.GetValue();
                var precoCusto = this.txtPrecoCusto.GetText().CNum();
                var margem = this.txtMarkup_P.GetText().CNum();
                if (margem > 0) {
                    margem += 100;
                }
                var PVP = (precoCusto / 100) * margem;
                PVP = PVP * (IVA / 100 + 1);
                this.EntityTela.Preco_Produto = PVP;
            }
            else {
                parametros = {
                    precoCusto: this.txtPrecoCusto.GetText().CNum(),
                    margem: this.txtMarkup_P.GetText().CNum()
                };
                precoVenda = this.ExecutarFuncaoServerSideSynch("ObterPrecoVenda", parametros);
                this.EntityTela.Preco_Produto = precoVenda;
            }
            this.RefreshAngular();
            //this.txtPrecoVenda.Textbox.value = precoVenda.Format(this.txtPrecoVenda.QuantidadeCasas);
            //this.cbpListaPrecos.CallBackPanel.PerformCallback("AtualizarValorListas");
            //L = Atualizar valor listas
            this.AtualizarListaPrecos(this.EntityTela, "V", this.txtPrecoVenda.GetText().CNum(), this.txtQtdEmbalagem.GetText().CNum());
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.AtualizarListaPrecos = function (entity, atualizar, precoVenda, qtdeEmbalagem) {
        try {
            if (!this.chkListaPrecos.Checked)
                return;
            var precoCusto = CNum(this.txtPrecoCusto.GetText());
            if (!precoCusto) {
                precoCusto = 0;
            }
            var parametros = {
                strLista: JSON.stringify(this.ListaPrecos),
                precoCustoProduto: precoCusto,
                txtPrecoVenda: precoVenda,
                txtQtdEmbalagem: qtdeEmbalagem,
                atualizar: atualizar,
                codProduto: CNum(this.txtCodigo.GetText())
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("AtualizarListasPrecos", parametros);
            if (retorno && retorno.Atualizar) {
                var itemAtualizado = retorno.Lista;
                this.ListaPrecos = itemAtualizado;
                this.RefreshAngular();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.AtualizarMarkup = function () {
        var MarkUp;
        var Lucro;
        var Custo;
        Custo = this.txtPrecoCusto.GetText().CNum();
        Lucro = this.txtPrecoVenda.GetText().CNum() - Custo;
        if (Custo > 0) {
            MarkUp = ((Lucro / Custo) * 100);
        }
        else {
            MarkUp = 0;
        }
        ;
        this.txtMarkup_P.SetText(MarkUp.Format(2));
    };
    C_Produt.prototype.AtualizarMargem = function () {
        try {
            var parametros;
            if (ValoresSismoura.Sistema_Pais == 607 /* Portugal */) {
                var IVA = this.cboTaxa_IVA.GetValue();
                var precoCusto = this.txtPrecoCusto.GetText().CNum();
                var PVP = this.txtPrecoVenda.GetText().CNum();
                var PvpSIva = PVP / (IVA / 100 + 1);
                var margem = (PvpSIva - precoCusto) * 100 / precoCusto;
                this.EntityTela.Margem = margem;
            }
            else {
                var margem;
                parametros = {
                    precoCusto: this.txtPrecoCusto.GetText().CNum(),
                    precoVenda: this.txtPrecoVenda.GetText().CNum()
                };
                margem = this.ExecutarFuncaoServerSideSynch("ObterMargemProduto", parametros);
                if (ValoresSismoura.ConfiguracoesRetaguarda.Calcular_Margem) {
                    this.EntityTela.Margem = margem;
                }
            }
            if (this.txtMargemReal) {
                this.txtMargemReal.SetText(margem.Format(this.txtMargemReal.QuantidadeCasas));
            }
            this.RefreshAngular();
            this.AtualizarListaPrecos(this.EntityTela, "M", this.txtPrecoVenda.GetText().CNum(), this.txtQtdEmbalagem.GetText().CNum());
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.CalcularDolar = function () {
        var valor;
        valor = this.CotacaoDolar * this.txtPrecoDolar.GetText().CNum();
        this.txtPrecoCusto.Textbox.value = valor.Format(this.txtPrecoCusto.QuantidadeCasas);
        this.EntityTela.Preco_Custo = CNum(valor.Format(this.txtPrecoCusto.QuantidadeCasas));
        this.txtPrecoVenda.Textbox.value = (this.txtPrecoCusto.Textbox.value.CNum() * (1 + (this.txtMarkup_P.Textbox.value.CNum() / 100))).Format(this.txtPrecoVenda.QuantidadeCasas);
        this.EntityTela.Preco_Produto = CNum((this.txtPrecoCusto.Textbox.value.CNum() * (1 + (this.txtMarkup_P.Textbox.value.CNum() / 100))).Format(this.txtPrecoVenda.QuantidadeCasas));
    };
    C_Produt.prototype.CorrigirCamposFarmaciaPopular = function () {
        if (this.chkFarmaciaPopular.Check.checked) {
            this.txtQtdeCaixaFarmacia.Textbox.readOnly = false;
            this.chkGratuidade.Check.disabled = false;
        }
        else {
            if (!this.EntityTela.ProdutoFarmaciaEntity) {
                this.EntityTela.ProdutoFarmaciaEntity = {};
            }
            this.EntityTela.ProdutoFarmaciaEntity.Fp_Qtde_Caixa = 0;
            this.RefreshAngular();
            //this.txtQtdeCaixaFarmacia.Textbox.value = "0".FormatNumber(this.txtQtdeCaixaFarmacia.QuantidadeCasas);
            this.txtQtdeCaixaFarmacia.Textbox.readOnly = true;
            this.chkGratuidade.Check.checked = false;
            this.chkGratuidade.Check.disabled = true;
        }
        this.CorrigirCamposGratuidade();
    };
    C_Produt.prototype.CorrigirCamposGratuidade = function () {
        if (this.chkGratuidade.Check.checked) {
            this.txtValorMaxAprovadoMS.Textbox.readOnly = false;
        }
        else {
            this.txtValorMaxAprovadoMS.Textbox.readOnly = true;
            this.txtValorMaxAprovadoMS.Textbox.value = "0".FormatNumber(this.txtValorMaxAprovadoMS.QuantidadeCasas);
            this.txtValorUnitarioCaixa.Textbox.value = "0".FormatNumber(this.txtValorUnitarioCaixa.QuantidadeCasas);
            if (this.chkFarmaciaPopular.Check.checked) {
                if (this.txtQtdeCaixaFarmacia.GetText().CNum() > 0) {
                    this.txtValorMaxAprovadoMS.Textbox.value = (this.txtPrecoVenda.GetText().CNum() / this.txtQtdeCaixaFarmacia.GetText().CNum()).Format(5);
                }
                this.txtValorUnitarioCaixa.Textbox.value = (this.txtPrecoVenda.GetText().CNum()).Format(2);
            }
        }
    };
    C_Produt.prototype.OnTextBoxQtdeCaixaFarmaciaChange = function () {
        var valor;
        if (this.chkGratuidade.Check.checked) {
            valor = 0;
            this.txtValorMaxAprovadoMS.SetText(valor.Format(this.txtValorMaxAprovadoMS.QuantidadeCasas));
            this.txtValorUnitarioCaixa.SetText(valor.Format(this.txtValorMaxAprovadoMS.QuantidadeCasas));
            return;
        }
        if (this.txtQtdeCaixaFarmacia.GetText().CNum() > 0) {
            valor = this.txtPrecoVenda.GetText().CNum() / this.txtQtdeCaixaFarmacia.GetText().CNum();
            this.txtValorMaxAprovadoMS.SetText(valor.Format(5));
            this.txtValorUnitarioCaixa.Textbox.value = this.txtPrecoVenda.GetText();
            return;
        }
    };
    C_Produt.prototype.OnTextBoxValorMaxAprovadoMS = function () {
        var valor;
        valor = this.txtValorMaxAprovadoMS.GetText().CNum() * this.txtQtdeCaixaFarmacia.GetText().CNum();
        this.txtValorUnitarioCaixa.SetText(valor.Format(this.txtValorUnitarioCaixa.QuantidadeCasas));
    };
    C_Produt.prototype.OnTextBoxTabelaPrecoChange = function () {
        var precoVenda;
        var parametros;
        parametros = {
            codTabela: this.txtTabelaPreco.GetText().CNum()
        };
        precoVenda = this.ExecutarFuncaoServerSideSynch("ObterPrecoTabela", parametros);
        //this.AtualizarValoresProduto();
        if (precoVenda > 0) {
            this.txtPrecoVenda.Textbox.value = precoVenda.Format(this.txtPrecoVenda.QuantidadeCasas);
        }
        else if (precoVenda == -1) {
            this.txtTabelaPreco.SetText("");
            MostrarAlerta("Tabela de Preço não cadastrada.");
        }
        else {
            this.txtTabelaPreco.SetText("");
        }
        this.AtualizarMargem();
    };
    C_Produt.prototype.OnAdicionouFornecedor = function (s, e) {
        this.txtFornecedor.Focus();
    };
    C_Produt.prototype.OnAdicionouRegraCFOP = function (s, e) {
        this.cboEmpresaRegraCFOP.Focus();
    };
    C_Produt.prototype.OnAdicionouRegraFinalidade = function (s, e) {
        this.cboEmpresaRegraFinalidade.Focus();
    };
    C_Produt.prototype.OnValidandoAdicionarDun14 = function (s, e) {
        if (!this.Dun14.Codigo_Barras) {
            MostrarAlerta("Informe o Código DUN14 para que o mesmo seja adicionado / armazenado.");
            e.cancelar = true;
            return;
        }
        if (!this.Dun14.Qtde_Vinculada) {
            MostrarAlerta("Informe a Qtde Vinculada ao DUN14 para que o mesmo seja adicionado / armazenado.");
            e.cancelar = true;
            return;
        }
    };
    C_Produt.prototype.OnValidandoAdicionarFornecedor = function (s, e) {
        try {
            var fornecedor = e.item;
            if (!fornecedor) {
                return;
            }
            if (!fornecedor.Codigo_Fornecedor || fornecedor.Codigo_Fornecedor <= 0) {
                MostrarAlerta("Informe o fornecedor!");
                e.cancelar = true;
                return;
            }
            if (ValoresSismoura.ConfiguracoesRetaguarda.Fornec_Produt_Obrig && String.IsNullOrWhiteSpace(fornecedor.Codigo_Produto_Fornecedor)) {
                MostrarAlerta("Informe o código do produto no fornecedor!");
                e.cancelar = true;
                return;
            }
            if (!String.IsNullOrWhiteSpace(fornecedor.Unidade_Calculo)) {
                if (String.IsNullOrWhiteSpace(fornecedor.Calculo)) {
                    MostrarAlerta("Informe o cálculo!");
                    e.cancelar = true;
                    return;
                }
                if (!fornecedor.Valor_Calculo || fornecedor.Valor_Calculo <= 0) {
                    MostrarAlerta("Informe o valor do cálculo!");
                    e.cancelar = true;
                    return;
                }
            }
            fornecedor.Descricao_Fornecedor = this.txtFornecedor.GetResultado();
            fornecedor.Descricao_Empresa = this.cboEmpresaFornecedor.GetText();
            var parametros = {
                codProduto: this.txtCodigo.GetText().CNum(),
                codFornecedor: fornecedor.Codigo_Fornecedor
            };
            var retCompra = this.ExecutarFuncaoServerSideSynch("GetInformacoesUltimaCompra", parametros);
            if (retCompra) {
                fornecedor.Data_Ultima_Compra = retCompra.Data_Ultima_Compra;
                fornecedor.Ultima_Nota_Fiscal = retCompra.Ultima_Nota_Fiscal;
                fornecedor.Produto_Valor_Unitario = retCompra.Produto_Valor_Unitario;
                fornecedor.Quantidade_Compra = retCompra.Quantidade_Compra;
            }
            if (e.index < 0) {
                fornecedor.Codigo = 0;
            }
            var maiorContador;
            if (this.Fornecedores.length > 0) {
                maiorContador = Math.max.apply(Math, this.Fornecedores.map(function (o) { return o.Contador; })) + 1;
            }
            else {
                maiorContador = 1;
            }
            fornecedor.Contador = maiorContador;
            e.item = fornecedor;
        }
        catch (ex) {
            e.cancelar = true;
            LogarException(ex);
        }
    };
    C_Produt.prototype.OnLimpouItemFornecedor = function (s, e) {
        try {
            var fornecedor = e.item;
            if (!fornecedor) {
                fornecedor = {};
            }
            fornecedor.Codigo_Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.OnValidandoAdicionarRegraCFOP = function (s, e) {
        try {
            var regra = e.item;
            if (!regra) {
                return;
            }
            if (!regra.Codigo_Empresa || regra.Codigo_Empresa <= 0) {
                MostrarAlerta("Informe uma empresa!");
                e.cancelar = true;
                return;
            }
            if (String.IsNullOrWhiteSpace(regra.CFOP)) {
                MostrarAlerta("Informe o CFOP!");
                e.cancelar = true;
                return;
            }
            if (!regra.Tipo_Regra_Imposto || regra.Tipo_Regra_Imposto <= 0) {
                MostrarAlerta("Informe a regra de imposto!");
                e.cancelar = true;
                return;
            }
            var regraFind = $.grep(this.RegrasCFOP, function (e) { return (e.Codigo_Empresa == regra.Codigo_Empresa && e.CFOP == regra.CFOP); });
            if (regraFind && regraFind.length > 0) {
                MostrarAlerta("Já existe uma regra informada para esta empresa e este CFOP!");
                e.cancelar = true;
                return;
            }
            regra.Descricao_Empresa = this.cboEmpresaRegraCFOP.GetText();
            regra.Descricao_Regra_Imposto = this.cboRegraImpostoCFOP.GetText();
            if (e.index < 0) {
                regra.Codigo = 0;
            }
            var maiorContador;
            if (this.RegrasCFOP.length > 0) {
                maiorContador = Math.max.apply(Math, this.RegrasCFOP.map(function (o) { return o.Contador; })) + 1;
            }
            else {
                maiorContador = 1;
            }
            regra.Contador = maiorContador;
            e.item = regra;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.OnValidandoAdicionarRegraFinalidade = function (s, e) {
        try {
            var regra = e.item;
            if (!regra) {
                return;
            }
            if (!regra.Empresa || regra.Empresa <= 0) {
                MostrarAlerta("Informe uma empresa!");
                e.cancelar = true;
                return;
            }
            if (!regra.Finalidade || regra.Finalidade <= 0) {
                MostrarAlerta("Informe a Finalidade!");
                e.cancelar = true;
                return;
            }
            if (!regra.Tipo_Regra_Imposto || regra.Tipo_Regra_Imposto <= 0) {
                MostrarAlerta("Informe a regra de imposto!");
                e.cancelar = true;
                return;
            }
            var regraFind = $.grep(this.RegrasFinalidade, function (e) { return (e.Empresa == regra.Empresa && e.Finalidade == regra.Finalidade); });
            if (regraFind && regraFind.length > 0) {
                MostrarAlerta("Já existe uma regra informada para esta empresa e esta finalidade!");
                e.cancelar = true;
                return;
            }
            regra.Descricao_Empresa = this.cboEmpresaRegraFinalidade.GetText();
            regra.Descricao_Regra_Imposto = this.cboRegraImpostoFinalidade.GetText();
            regra.Descricao_Finalidade = this.cboFinalidade.GetText();
            if (!regra.Data_Carga) {
                regra.Data_Carga = this.DataServidor();
            }
            if (e.index < 0) {
                regra.Codigo = 0;
            }
            e.item = regra;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.OnLimpouItemRegraCFOP = function (s, e) {
        try {
            var regra = e.item;
            if (!regra) {
                regra = {};
            }
            regra.Codigo_Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.OnLimpouItemRegraFinalidade = function (s, e) {
        try {
            var regra = e.item;
            if (!regra) {
                regra = {};
            }
            regra.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.OnAdicionouExcipiente = function (s, e) {
        this.txtExcipiente.Focus();
    };
    C_Produt.prototype.OnAdicionouAnilha = function (s, e) {
        this.txtMicrochip.Focus();
    };
    C_Produt.prototype.OnValidandoAdicionarExcipiente = function (s, e) {
        try {
            var item = e.item;
            if (!item) {
                return;
            }
            if (!item.Codigo_Excipiente || item.Codigo_Excipiente <= 0) {
                MostrarAlerta("Informe o excipiente!");
                e.cancelar = true;
                return;
            }
            if (!item.Codigo_Prioridade || item.Codigo_Prioridade <= 0) {
                MostrarAlerta("Informe a prioridade!");
                e.cancelar = true;
                return;
            }
            var regraFind = $.grep(this.Excipientes, function (e) { return (e.Codigo_Excipiente == item.Codigo_Excipiente); });
            if (regraFind && regraFind.length > 0) {
                MostrarAlerta("Este excipiente já foi informado!");
                e.cancelar = true;
                return;
            }
            item.Descricao_Excipiente = this.txtExcipiente.GetResultado();
            item.Descricao_Prioridade = this.cboPrioridade.GetText();
            if (e.index < 0) {
                item.Codigo = 0;
            }
            var maiorContador;
            if (this.Excipientes.length > 0) {
                maiorContador = Math.max.apply(Math, this.Excipientes.map(function (o) { return o.Contador; })) + 1;
            }
            else {
                maiorContador = 1;
            }
            item.Contador = maiorContador;
            e.item = item;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.OnValidandoAdicionarAnilha = function (s, e) {
        try {
            var item = e.item;
            if (!item) {
                return;
            }
            if (!item.Anilha || item.Anilha == "") {
                MostrarAlerta("Informe a descrição!");
                e.cancelar = true;
                return;
            }
            var regraFind = $.grep(this.Anilhas, function (e) { return (e.Anilha == item.Anilha); });
            if (regraFind && regraFind.length > 0) {
                MostrarAlerta("A descrição já foi informada!");
                e.cancelar = true;
                return;
            }
            if (e.index < 0) {
                item.Codigo = 0;
            }
            var maiorContador;
            if (this.Anilhas.length > 0) {
                maiorContador = Math.max.apply(Math, this.Anilhas.map(function (o) { return o.Contador; })) + 1;
            }
            else {
                maiorContador = 1;
            }
            item.Contador = maiorContador;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.LimparGradeEstoques = function () {
        this.DepositoEstoques = this.DepositosEstoquesLimpo;
    };
    C_Produt.prototype.LimparGradeInativos = function () {
        this.grdInativosporEmpresas.PreencherGrid(this.EmpresasLimpo);
    };
    C_Produt.prototype.LimparGradeListaPrecos = function () {
        this.ListaPrecos = this.ListaPrecosLimpo;
    };
    C_Produt.prototype.LimparGradeEstoqueMinMax = function () {
        this.EstoqueMinEmpresas = this.EstoqueEmpresaLimpo;
    };
    C_Produt.prototype.LimparGradeRegraImposto = function () {
        this.RegrasImposto = this.RegrasLimpo;
    };
    C_Produt.prototype.PreencherGradeRegraImposto = function (entity) {
        this.LimparGradeRegraImposto();
        if (!entity.RegrasImposto) {
            entity.RegrasImposto = [];
        }
        var lista = this.RegrasLimpo;
        for (var x = 0; x <= entity.RegrasImposto.length - 1; x++) {
            var result = $.grep(lista, function (e) { return e.Codigo_Empresa == entity.RegrasImposto[x].Empresa; });
            if (result && result.length > 0) {
                result[0].Codigo_Empresa = entity.RegrasImposto[x].Empresa;
                result[0].Codigo_Tipo_Regra = entity.RegrasImposto[x].Tipo_Regra_Imposto;
                result[0].Pauta_Valor = entity.RegrasImposto[x].Pauta_Valor_Money;
            }
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_iMendes) {
            if (lista && lista.length > 0) {
                var parametros = {
                    codTipo: lista.FirstOrDefault('Codigo_Empresa', ValoresSismoura.EmpresaPadraoUsuario).Codigo_Tipo_Regra
                };
                this.HabilitaRegraImposto(this.ExecutarFuncaoServerSideSynch('IsIMendes', parametros));
            }
        }
        this.RegrasImposto = lista;
    };
    C_Produt.prototype.PreencherGradeListaPrecos = function (entity) {
        this.LimparGradeListaPrecos();
        if (!entity.Precos) {
            entity.Precos = [];
        }
        var lista = this.ListaPrecosLimpo;
        for (var x = 0; x <= entity.Precos.length - 1; x++) {
            var result = $.grep(lista, function (e) { return e.Codigo_Lista == entity.Precos[x].Lista_Preco; });
            if (result && result.length > 0) {
                result[0].Produto = this.txtCodigo.GetText().CNum();
                result[0].Codigo_Lista = entity.Precos[x].Lista_Preco;
                result[0].Codigo_Produto_Preco = entity.Precos[x].Codigo;
                result[0].Comissao_Produto_Preco = entity.Precos[x].Comissao;
                result[0].Custo_Produto_Preco = entity.Precos[x].Preco_Custo;
                result[0].Data_Carga_Produto_Preco = new Date();
                if ((result[0].Operacao_Subtrair_Lista && entity.Precos[x].Margem > 0) || (result[0].Operacao_Subtrair_Lista == false && entity.Precos[x].Margem < 0)) {
                    result[0].Margem_Produto_Preco = entity.Precos[x].Margem * (-1);
                }
                else {
                    result[0].Margem_Produto_Preco = entity.Precos[x].Margem;
                }
                result[0].Quantidade_Minima_Produto_Preco = entity.Precos[x].Qtde_Minima;
                result[0].Valor_Produto_Preco = entity.Precos[x].Valor;
            }
        }
        this.ListaPrecos = lista;
        var precoVenda = entity.Preco_Produto;
        if (!precoVenda) {
            precoVenda = 0;
        }
        var qtdeEmbalagem = entity.Quantidade;
        if (!qtdeEmbalagem) {
            qtdeEmbalagem = 0;
        }
        //Calcular de acordo com os valores
        this.AtualizarListaPrecos(entity, "C", precoVenda, qtdeEmbalagem);
    };
    C_Produt.prototype.PreencherGradeEstoqueMinEmpresa = function (entity) {
        this.LimparGradeEstoqueMinMax();
        if (!entity.Estoques) {
            entity.Estoques = [];
        }
        var lista = this.EstoqueEmpresaLimpo;
        for (var x = 0; x <= entity.Estoques.length - 1; x++) {
            var result = $.grep(lista, function (e) { return e.Codigo_Empresa == entity.Estoques[x].Empresa; });
            if (result && result.length > 0) {
                result[0].Codigo_Empresa = entity.Estoques[x].Empresa;
                result[0].Custo_Medio = entity.Estoques[x].Custo_Medio;
                result[0].Estoque_Maximo = entity.Estoques[x].Estoque_Maximo;
                result[0].Estoque_Maximo_Dias = entity.Estoques[x].Estoque_Maximo_Dias;
                result[0].Estoque_Minimo = entity.Estoques[x].Estoque_Minimo;
                result[0].Estoque_Minimo_Dias = entity.Estoques[x].Estoque_Minimo_Dias;
            }
        }
        this.EstoqueMinEmpresas = lista;
    };
    C_Produt.prototype.PreencherListaRegraImposto = function (entity) {
        entity.RegrasImposto = [];
        var lista = this.RegrasImposto;
        for (var x = 0; x <= lista.length - 1; x++) {
            if (lista[x].Codigo_Tipo_Regra && lista[x].Codigo_Tipo_Regra > 0) {
                var item = {};
                item.Codigo = lista[x].Codigo;
                item.Data_Carga = new Date();
                item.Data_Vigencia = new Date();
                item.Empresa = lista[x].Codigo_Empresa;
                item.Pauta_Valor_Money = lista[x].Pauta_Valor;
                item.Produto = this.txtCodigo.GetText().CNum();
                item.Tipo_Regra_Imposto = lista[x].Codigo_Tipo_Regra;
                entity.RegrasImposto.push(item);
            }
        }
    };
    C_Produt.prototype.PreencherListaProdutPreco = function (entity) {
        entity.Precos = [];
        var lista = this.ListaPrecos;
        for (var x = 0; x <= lista.length - 1; x++) {
            if ((lista[x].Valor_Produto_Preco && lista[x].Valor_Produto_Preco > 0) || (lista[x].Quantidade_Minima_Produto_Preco && lista[x].Quantidade_Minima_Produto_Preco > 0)) {
                var preco = {};
                preco.Codigo = lista[x].Codigo_Produto_Preco;
                preco.Comissao = lista[x].Comissao_Produto_Preco;
                preco.Data_Carga = new Date();
                preco.Lista_Preco = lista[x].Codigo_Lista;
                preco.Margem = lista[x].Margem_Produto_Preco;
                preco.Produto = this.txtCodigo.GetText().CNum();
                preco.Qtde_Minima = lista[x].Quantidade_Minima_Produto_Preco;
                preco.Valor = lista[x].Valor_Produto_Preco;
                preco.Preco_Custo = lista[x].Custo_Produto_Preco;
                entity.Precos.push(preco);
            }
        }
    };
    C_Produt.prototype.PreencherListaEstoque = function (entity) {
        entity.EstoqueProduto = [];
        if (ValoresSismoura.ConfiguracoesRetaguarda.Modificar_Estoque_Cad_Pro) {
            entity.EstoqueProduto = this.DepositoEstoques;
        }
    };
    C_Produt.prototype.PreencherListaEstoqueMinEmpresa = function (entity) {
        entity.Estoques = [];
        var lista = this.EstoqueMinEmpresas;
        for (var x = 0; x <= lista.length - 1; x++) {
            var item = {};
            item.Custo_Medio = lista[x].Custo_Medio;
            item.Empresa = lista[x].Codigo_Empresa;
            item.Estoque_Maximo = lista[x].Estoque_Maximo;
            item.Estoque_Maximo_Dias = lista[x].Estoque_Maximo_Dias;
            item.Estoque_Minimo = lista[x].Estoque_Minimo;
            item.Estoque_Minimo_Dias = lista[x].Estoque_Minimo_Dias;
            item.Id = 0;
            item.Produto = this.txtCodigo.GetText().CNum();
            entity.Estoques.push(item);
        }
    };
    C_Produt.prototype.PreencherGradeInativos = function (entity) {
        this.LimparGradeInativos();
        if (!entity.Inativo_Empresas) {
            entity.Inativo_Empresas = [];
        }
        var lista = this.EmpresasLimpo;
        for (var x = 0; x <= entity.Inativo_Empresas.length - 1; x++) {
            var result = $.grep(lista, function (e) { return e.Empresa == entity.Inativo_Empresas[x].Empresa; });
            if (result && result.length > 0) {
                result[0].Id = entity.Inativo_Empresas[x].Id;
                result[0].Empresa = entity.Inativo_Empresas[x].Empresa;
                result[0].Inativo = entity.Inativo_Empresas[x].IsInativo = true;
            }
        }
        this.grdInativosporEmpresas.PreencherGrid(lista);
    };
    C_Produt.prototype.PreencherGradeFracionados = function (entity) {
        try {
            this.Fracionados = [];
            var parametros = {
                codProduto: entity.Codigo
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGridProduto", parametros);
            if (retorno) {
                this.Fracionados = retorno;
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.PreencherListaInativos = function (entity) {
        entity.Inativo_Empresas = [];
        var lista = this.grdInativosporEmpresas.DataSource;
        for (var x = 0; x <= lista.length - 1; x++) {
            if (lista[x].Inativo) {
                var item = {};
                item.Data_Carga = new Date();
                item.Empresa = lista[x].Empresa;
                item.Id = lista[x].Id;
                item.Produto = this.txtCodigo.GetText().CNum();
                item.IsInativo = lista[x].Inativo;
                entity.Inativo_Empresas.push(item);
            }
        }
    };
    C_Produt.prototype.OnClickBotaoOKInativo = function (s, e) {
        e.processOnServer = false;
        this.mdInativosEmpresa.Hide();
    };
    C_Produt.prototype.OnClickBotaoExtraBalanca = function (s, e) {
        e.processOnServer = false;
        this.mdInfExtraBalanca.Show();
        this.txtInfExtra1.Focus();
    };
    C_Produt.prototype.OnClickOKInfExtraBalanca = function (s, e) {
        e.processOnServer = false;
        this.mdInfExtraBalanca.Hide();
    };
    C_Produt.prototype.OnClickBotaoSimilares = function (s, e) {
        e.processOnServer = false;
        this.mdSimilares.Show();
        this.txtProdutoSimilar.Limpar();
        this.txtProdutoSimilar.Focus();
        this.GridProdutosSimilares.Refresh();
    };
    C_Produt.prototype.OnClickOKSimilares = function (s, e) {
        e.processOnServer = false;
        this.mdSimilares.Hide();
    };
    C_Produt.prototype.OnClickAdicionarSimilar = function (s, e) {
        try {
            e.processOnServer = false;
            if (this.txtProdutoSimilar.GetText().CNum() <= 0) {
                MostrarAlerta("Informe o produto");
                this.txtProdutoSimilar.Focus();
                return;
            }
            var item = {};
            var lista = this.Similares;
            var codigoProduto = this.txtProdutoSimilar.GetText().CNum();
            var result = [];
            if (lista.length > 0) {
                result = $.grep(lista, function (e) { return e.Codigo_Produto == codigoProduto; });
            }
            if (result && result.length > 0) {
                MostrarAlerta("Este produto já foi informado");
                this.txtProdutoSimilar.Focus();
                return;
            }
            var parametros = {
                codProduto: codigoProduto
            };
            var qtdeEstoque = this.ExecutarFuncaoServerSideSynch("GetEstoqueProduto", parametros);
            var maiorContador;
            if (lista.length > 0) {
                maiorContador = Math.max.apply(Math, lista.map(function (o) { return o.Contador; })) + 1;
            }
            else {
                maiorContador = 1;
            }
            item.ID = 0;
            item.Contador = maiorContador;
            item.Nome_Produto = this.txtProdutoSimilar.GetResultado();
            item.Estoque_Produto = qtdeEstoque;
            item.Codigo_Produto = codigoProduto;
            lista.push(item);
            this.Similares = lista;
            this.txtProdutoSimilar.Limpar();
            this.txtProdutoSimilar.Focus();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.PreencherListaSimilares = function (entity) {
        entity.Similares = [];
        var lista = this.GridProdutosSimilares.DataSource;
        for (var x = 0; x <= lista.length - 1; x++) {
            var item = {};
            item.Produto = this.txtCodigo.GetText().CNum();
            item.Similar = lista[x].Codigo_Produto;
            item.Id = lista[x].ID;
            entity.Similares.push(item);
        }
    };
    C_Produt.prototype.PreencherListaExcipientes = function (entity) {
        entity.Excipientes = [];
        var lista = this.Excipientes;
        for (var x = 0; x <= lista.length - 1; x++) {
            var item = {};
            item.Produto = this.txtCodigo.GetText().CNum();
            item.Excipiente = lista[x].Codigo_Excipiente;
            item.Prioridade = lista[x].Codigo_Prioridade;
            item.Codigo = lista[x].Codigo;
            entity.Excipientes.push(item);
        }
    };
    C_Produt.prototype.PreencherListaAnilhas = function (entity) {
        entity.Anilhas = [];
        var lista = this.Anilhas;
        for (var x = 0; x <= lista.length - 1; x++) {
            var item = {};
            item.Produto = this.txtCodigo.GetText().CNum();
            item.Anilha = lista[x].Anilha;
            item.Codigo = lista[x].Codigo;
            entity.Anilhas.push(item);
        }
    };
    C_Produt.prototype.OnClickBotaoImportarDados = function (s, e) {
        e.processOnServer = false;
        this.mdImportarDados.Show();
        this.txtProdutoImportar.Limpar();
        this.txtProdutoImportar.Focus();
    };
    C_Produt.prototype.OnClickBotaoCancelarImportarDados = function (s, e) {
        e.processOnServer = false;
        this.mdImportarDados.Hide();
    };
    C_Produt.prototype.OnClickBotaoImportarProduto = function (s, e) {
        e.processOnServer = false;
        if (this.txtProdutoImportar.GetText().CNum() <= 0) {
            MostrarAlerta("Informe o produto que deseja importar!");
            this.txtProdutoImportar.Focus();
            return;
        }
        this.Limpar();
        this.PreencherEntidade(this.txtProdutoImportar.GetText());
        this.GetScope().Entity.Codigo = 0;
        this.GetScope().Entity.Codigo_Barra = "";
        this.LimparGradeEstoques();
        this.GetScope().$applyAsync();
        this.mdImportarDados.Hide();
        return false;
    };
    C_Produt.prototype.OnClickBotaoRemoverCodigoBarra = function (s, e) {
        try {
            e.processOnServer = false;
            var codigoSelecionado = this.lstCodigoBarras.SelectedValue;
            if (codigoSelecionado == null || codigoSelecionado == undefined) {
                MostrarAlerta("Selecione o código de barras que deseja remover!");
                return;
            }
            var produto = this.GetScope().Entity;
            if (!produto.Codigos_Barras) {
                produto.Codigos_Barras = [];
            }
            for (var x = 0; x <= produto.Codigos_Barras.length - 1; x++) {
                if (produto.Codigos_Barras[x].Codigo_Barra == codigoSelecionado) {
                    produto.Codigos_Barras.splice(x, 1);
                    break;
                }
            }
            this.AtualizarListaCodigosBarra(produto);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.IsCodigoBarraValido = function (codigoBarra, entity) {
        try {
            if (!entity.Codigos_Barras) {
                entity.Codigos_Barras = [];
            }
            var listaCodigos = entity.Codigos_Barras.map(function (o) { return o.Codigo_Barra; });
            var parametros = {
                codProduto: this.txtCodigo.GetText().CNum(),
                codBarra: codigoBarra,
                listaCodigos: listaCodigos
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("IsCodigoBarraValido", parametros);
            if (!String.IsNullOrWhiteSpace(retorno.Alerta)) {
                MostrarAlerta(retorno.Alerta);
                this.txtCodigoBarrasAdicionar.Focus();
                return "";
            }
            return retorno.Codigo_Barra;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.OnClickBotaoAdicionarCodigoBarra = function (s, e) {
        try {
            e.processOnServer = false;
            if (String.IsNullOrWhiteSpace(this.txtCodigoBarrasAdicionar.GetText())) {
                MostrarAlerta("Informe o código de barras que deseja adicionar!");
                this.txtCodigoBarrasAdicionar.Focus();
                return;
            }
            var entity = this.GetScope().Entity;
            if (!entity) {
                return;
            }
            if (!entity.Codigos_Barras) {
                entity.Codigos_Barras = [];
            }
            var codigoBarra = this.IsCodigoBarraValido(this.txtCodigoBarrasAdicionar.GetText(), entity);
            if (String.IsNullOrWhiteSpace(codigoBarra)) {
                return;
            }
            var item = {};
            item.Codigo_Barra = codigoBarra;
            item.Data_Carga = new Date();
            item.Produto = this.txtCodigo.GetText().CNum();
            item.Id = 0;
            entity.Codigos_Barras.push(item);
            this.AtualizarListaCodigosBarra(entity);
            this.SetEntity(entity);
            this.txtCodigoBarrasAdicionar.SetText("");
            this.txtCodigoBarrasAdicionar.Focus();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.AtualizarListaCodigosBarra = function (entity) {
        if (!entity || !this.lstCodigoBarras) {
            return;
        }
        if (!entity.Codigos_Barras) {
            entity.Codigos_Barras = [];
        }
        this.lstCodigoBarras.RemoverTodosItens();
        for (var x = 0; x <= entity.Codigos_Barras.length - 1; x++) {
            this.lstCodigoBarras.AdicionarItem(entity.Codigos_Barras[x].Codigo_Barra, entity.Codigos_Barras[x].Codigo_Barra);
        }
    };
    C_Produt.prototype.OnAlterouNCM = function (s, e) {
        try {
            var parametros = {
                ncm: this.txtNCM.GetText()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetListaCest", parametros);
            if (retorno) {
                if (retorno.length > 1) {
                    this.mdCest.Show();
                    this.gridCest.PreencherGrid(retorno);
                    this.lblNcmCest.Text = this.txtNCM.GetText();
                }
                else {
                    var entity = this.GetScope().Entity;
                    if (retorno.length > 0) {
                        entity.Codigo_CEST = ("" + retorno[0].ID_CEST);
                    }
                    else {
                        entity.Codigo_CEST = null;
                    }
                    this.GetScope().$applyAsync();
                }
            }
        }
        catch (ex) {
            MostrarAlerta("Não foi possível fazer a pesquisa no banco da internet. Verifique a sua conexão!");
            console.log(ex);
        }
    };
    C_Produt.prototype.OnSelecionouCEST = function (s, e) {
        try {
            var entity = this.GetScope().Entity;
            entity.Codigo_CEST = ("" + e.rowKey);
            this.GetScope().$applyAsync();
            this.mdCest.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.OnAlterouProdutoPreco = function (s, e) {
        try {
            var item = e.item;
            var margemAnterior = 0, valorAnterior = 0, precoCusto = 0;
            var fieldAlterado = e.fieldNameAlterado;
            if (e.oldRowValue.Margem_Produto_Preco) {
                margemAnterior = e.oldRowValue.Margem_Produto_Preco;
            }
            if (e.oldRowValue.Valor_Produto_Preco) {
                valorAnterior = e.oldRowValue.Valor_Produto_Preco;
            }
            if (ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_Custo_Lista_Preco) {
                if (item.Custo_Produto_Preco) {
                    precoCusto = item.Custo_Produto_Preco;
                }
            }
            else {
                precoCusto = this.txtPrecoCusto.GetText().CNum();
            }
            var parametros = {
                strItem: JSON.stringify(item),
                margemAnterior: margemAnterior,
                valorAnterior: valorAnterior,
                precoCusto: precoCusto,
                txtPrecoVenda: this.txtPrecoVenda.GetText().CNum(),
                txtQtdEmbalagem: this.txtQtdEmbalagem.GetText().CNum(),
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("CalcularGradePrecos", parametros);
            if (retorno && retorno.Atualizar) {
                var itemAtualizado = retorno.Item;
                item.Valor_Produto_Preco = itemAtualizado.Valor_Produto_Preco;
                item.Margem_Produto_Preco = itemAtualizado.Margem_Produto_Preco;
                item.Margem_Real = itemAtualizado.Margem_Real;
                item.Custo_Produto_Preco = itemAtualizado.Custo_Produto_Preco;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.criarEntidadePersonalizados = function (Entidade) {
        var listaOrdem = [];
        if (!Entidade.Campos_Valor) {
            Entidade.Campos_Valor = [];
        }
        $("[moura-personalizado-campo]").each(function (index, element) {
            var campo = parseInt($(element).attr("moura-personalizado-campo"));
            var encontrado;
            for (var x = 0; x < Entidade.Campos_Valor.length; x++) {
                if (Entidade.Campos_Valor[x].Campo == campo) {
                    encontrado = Entidade.Campos_Valor[x];
                    break;
                }
            }
            if (!encontrado) {
                encontrado = {};
                encontrado.Campo = campo;
                encontrado.Produto = Entidade.Codigo;
            }
            listaOrdem.push(encontrado);
        });
        for (var x = 0; x < listaOrdem.length; x++) {
            if (listaOrdem[x].Produto != undefined) {
                var parametros = {
                    codCampo: listaOrdem[x].Campo,
                    item: listaOrdem[x].Produto
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("GetByItemPersonalizado", parametros);
                if (retorno && retorno.Descricao) {
                    listaOrdem[x].Valor = retorno.Descricao;
                }
            }
        }
        Entidade.Campos_Valor = listaOrdem;
    };
    C_Produt.prototype.OnClickBotaoDrogaria = function (s, e) {
        try {
            e.processOnServer = false;
            this.mdFarmarcia.Show();
            this.TabFarmacia.SetActiveTabIndex(0);
            this.CorrigirCamposFarmaciaPopular();
            this.cboLaboratorio.Focus();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.OnClickOKModalDrogaria = function (s, e) {
        try {
            e.processOnServer = false;
            this.mdFarmarcia.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.OnClickBotaoManipulacao = function (s, e) {
        try {
            e.processOnServer = false;
            this.mdManipulacao.Show();
            this.txtSinonimo.Limpar();
            this.AtualizarGridSinonimos();
            this.tabManipulacao.SetActiveTabIndex(0);
            this.txtDiluicao.Focus();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.OnClickOKModalManipulacao = function (s, e) {
        try {
            e.processOnServer = false;
            this.mdManipulacao.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.OnClickAdicionarSinonimo = function (s, e) {
        try {
            e.processOnServer = false;
            if (String.IsNullOrWhiteSpace(this.txtSinonimo.GetText())) {
                MostrarAlerta("Informe o Sinônimo");
                this.txtSinonimo.Focus();
                return;
            }
            var lista = this.EntityTela.Sinonimos;
            if (!lista) {
                lista = [];
            }
            var item = {};
            item.Descricao = this.txtSinonimo.GetText();
            item.Produto = this.txtCodigo.GetText().CNum();
            item.Codigo = 0;
            var maiorContador;
            if (lista.length > 0) {
                maiorContador = Math.max.apply(Math, lista.map(function (o) { return o.Contador; })) + 1;
            }
            else {
                maiorContador = 1;
            }
            item.Contador = maiorContador;
            lista.push(item);
            this.EntityTela.Sinonimos = lista;
            this.AtualizarGridSinonimos();
            this.txtSinonimo.Limpar();
            this.txtSinonimo.Focus();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.AtualizarGridSinonimos = function () {
        if (!this.EntityTela) {
            this.gridSinonimo.PreencherGrid([]);
            return;
        }
        if (!this.EntityTela.Sinonimos) {
            this.EntityTela.Sinonimos = [];
        }
        for (var x = 0; x <= this.EntityTela.Sinonimos.length - 1; x++) {
            this.EntityTela.Sinonimos[x].Contador = x;
        }
        this.gridSinonimo.PreencherGrid(this.EntityTela.Sinonimos);
    };
    C_Produt.prototype.OnClickDocumentos = function (s, e) {
        try {
            e.processOnServer = false;
            if (this.txtCodigo.GetText().CNum() <= 0) {
                MostrarAlerta("Informe um produto já cadastrado!");
                return;
            }
            this.mdAnexo.MostrarClient(this.PATH_DOCUMENTOS + this.txtCodigo.GetText().CNum());
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.OnSelecionouLinhaGrade = function (s, e) {
        var entity = this.EntityTela;
        if (entity.Codigo > 0) {
            var parametrosTela = [];
            parametrosTela.push("codigo=" + CNum(this.EntityTela.Codigo));
            parametrosTela.push("empresa=" + CNum(ValoresSismoura.EmpresaPadraoUsuario));
            abrirTelaNovaAbaParametros(formataURLRelativa("/Modulos/Compras/Estoque/Produto/C_ProdFra.aspx"), parametrosTela);
            //e.processOnServer = false;
        }
        else {
            //e.processOnServer = false;
            MostrarAlerta("Selecione ao menos um produto para visualizar o Fracionamento");
        }
        this.RefreshAngular();
    };
    C_Produt.prototype.VerificaHabilitarBotaoBalanca = function (Entidade) {
        if (!Entidade) {
            this.btnInfBalanca.Visible = false;
            return;
        }
        if (Entidade.Balanca && ("" + ValoresSismoura.ConfiguracoesRetaguarda.Modelo_Balanca_Etiqueta).toUpperCase() == "TOLEDO") {
            this.btnInfBalanca.Visible = true;
        }
        else {
            this.btnInfBalanca.Visible = false;
        }
    };
    C_Produt.prototype.OnchkProdutoBalancaChange = function (s, e) {
        try {
            if (this.chkProdutoBalanca.Checked) {
                this.EntityTela.Balanca = 1;
            }
            else {
                this.EntityTela.Balanca = 0;
            }
            this.VerificaHabilitarBotaoBalanca(this.EntityTela);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.PreencherCampoInformacoesExtraBalanca = function (Entidade) {
        if (!Entidade) {
            return;
        }
        if (String.IsNullOrWhiteSpace(Entidade.Produto_Balanca_Inf_Extra)) {
            this.LimparInfExtraBalanca();
            return;
        }
        var texto = Entidade.Produto_Balanca_Inf_Extra.split("\r\n");
        this.txtInfExtra1.SetText(texto[0]);
        if (texto.length >= 2) {
            this.txtInfExtra2.SetText(texto[1]);
        }
        if (texto.length >= 3) {
            this.txtInfExtra3.SetText(texto[2]);
        }
        if (texto.length >= 4) {
            this.txtInfExtra4.SetText(texto[3]);
        }
        if (texto.length >= 5) {
            this.txtInfExtra5.SetText(texto[4]);
        }
    };
    C_Produt.prototype.LimparInfExtraBalanca = function () {
        this.txtInfExtra1.Limpar();
        this.txtInfExtra2.Limpar();
        this.txtInfExtra3.Limpar();
        this.txtInfExtra4.Limpar();
        this.txtInfExtra5.Limpar();
    };
    C_Produt.prototype.PreencherEntidadeInfExtraBalanca = function (Entidade) {
        var texto = "";
        texto += this.txtInfExtra1.GetText() + '\r\n';
        texto += this.txtInfExtra2.GetText() + '\r\n';
        texto += this.txtInfExtra3.GetText() + '\r\n';
        texto += this.txtInfExtra4.GetText() + '\r\n';
        texto += this.txtInfExtra5.GetText() + '\r\n';
        Entidade.Produto_Balanca_Inf_Extra = texto;
    };
    C_Produt.prototype.OnRowValidatingGridEstoque = function (s, e) {
        try {
            var produto = this.EntityTela;
            if (produto) {
                if (produto.Controlado) {
                    e.errorText = "Produto controlado não pode ter o estoque alterado nesta grade";
                    e.isValid = false;
                    return;
                }
                var estUnitario;
                if (e.newData.Quantidade) {
                    estUnitario = this.AtualizarEstoqueUnitario(e.newData.Quantidade);
                }
                else {
                    estUnitario = this.AtualizarEstoqueUnitario(0);
                }
                e.newData.Estoque_Unitario = estUnitario;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.AlterarColunaEditavelEstoque = function () {
        var _this = this;
        var produto = this.EntityTela;
        if (produto) {
            if (produto.Controlado || !ValoresSismoura.ConfiguracoesRetaguarda.Modificar_Estoque_Cad_Pro) {
                this.GridEstoque.SetColunaEditavel("Quantidade", false);
            }
            else {
                this.GridEstoque.SetColunaEditavel("Quantidade", true);
            }
        }
        setTimeout(function () { _this.GridEstoque.Refresh(); }, 200);
    };
    C_Produt.prototype.AlterouControlado = function (newValue, oldValue) {
        this.AlterarColunaEditavelEstoque();
    };
    C_Produt.prototype.AlterouIVA = function (newValue, oldValue) {
        if (this.EntityTela) {
            if (ValoresSismoura.Sistema_Pais == 607 /* Portugal */) {
                this.cboMotivoIsencao.Visible = (this.EntityTela.Porcentagem_IVA == 0);
                this.cboMotivoIsencao.Obrigatorio = (this.EntityTela.Porcentagem_IVA == 0);
            }
        }
    };
    C_Produt.prototype.AlterouUnidade = function (newValue, oldValue) {
        var produto = this.EntityTela;
        var lista = this.DepositoEstoques;
        var estUnitario;
        if (produto) {
            for (var x = 0; x <= lista.length - 1; x++) {
                if (!String.IsNullOrWhiteSpace(produto.Unidade)) {
                    if (lista[x].Quantidade) {
                        estUnitario = this.AtualizarEstoqueUnitario(lista[x].Quantidade);
                    }
                    else {
                        estUnitario = this.AtualizarEstoqueUnitario(0);
                    }
                }
                else {
                    estUnitario = "";
                }
                lista[x].Estoque_Unitario = estUnitario;
            }
            this.DepositoEstoques = lista;
        }
    };
    C_Produt.prototype.AtualizarEstoqueUnitario = function (qtdeEstoque) {
        var Entidade = this.EntityTela;
        if (!Entidade) {
            return;
        }
        var pUnidade = "", pPeso = 0;
        if (Entidade.Unidade) {
            pUnidade = Entidade.Unidade;
        }
        if (Entidade.Peso_Produto) {
            pPeso = Entidade.Peso_Produto;
        }
        var parametros = {
            codProduto: ("" + Entidade.Codigo).CNum(),
            unidadeProduto: pUnidade,
            qtdeEstoque: qtdeEstoque,
            pesoProduto: pPeso,
        };
        var unitario = this.ExecutarFuncaoServerSideSynch("CalcularEstoqueUnitario", parametros);
        return unitario;
    };
    C_Produt.prototype.AbrirModalGrade = function () {
        var produtoEntity = {};
        produtoEntity = cloneObject(this.EntityTela);
        this.txtMdGradeCor.agrProcura.SetTextLabelControl(" * Cor");
        this.Grade.Descricao = produtoEntity.Nome;
        this.Grade.Referencia = produtoEntity.Referencia;
        this.Grade.Cod_Barra = produtoEntity.Codigo_Barra;
        this.ProdutosGrade = [];
        this.RefreshAngular();
        this.mdCadastroGrade.Show();
        this.grdMdGrade.Grid.OrderBy("Cor", "asc");
    };
    C_Produt.prototype.OnClicouGerarGrade = function () {
        var _this = this;
        if (!this.Grade.Descricao || String.IsNullOrWhiteSpace(this.Grade.Descricao)) {
            MostrarAlerta("Preencha corretamente o campo: Descrição");
            return;
        }
        if (!this.Grade.Grade || this.Grade.Grade <= 0) {
            MostrarAlerta("Preencha corretamente o campo: Grade");
            return;
        }
        if (this.txtMdGradeCor.SourceLista.length <= 0) {
            MostrarAlerta("Preencha corretamente o campo: Cor");
            return;
        }
        MsgBoxJS("Confirma gerar os produtos para a grade selecionada?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (d) {
            if (d.Resultado == MsgBoxResult.Yes) {
                _this.GerarProdutosGrade();
            }
        });
    };
    C_Produt.prototype.GerarProdutosGrade = function () {
        var _this = this;
        var grade = [];
        var parametros = {
            codGrade: this.Grade.Grade
        };
        abrirEspera();
        this.ExecutarFuncaoServerSideAsynch("GetTamanhosGrade", parametros, function (d) {
            try {
                grade = GetRetornoAJAX(d);
                if (grade) {
                    for (var i = 0; i < grade.length; i++) {
                        var item = grade[i];
                        for (var j = 0; j < _this.txtMdGradeCor.SourceLista.length; j++) {
                            var prodGrade = {};
                            var contador;
                            if (c_Produt.ProdutosGrade.length <= 0) {
                                contador = 1;
                            }
                            else {
                                contador = Math.max.apply(Math, _this.ProdutosGrade.map(function (o) { return o.Contador + 1; }));
                            }
                            prodGrade = cloneObject(_this.EntityTela);
                            if (contador > 1) {
                                prodGrade.Codigo = 0;
                            }
                            prodGrade.Nome = _this.Grade.Descricao;
                            prodGrade.Referencia = _this.Grade.Referencia;
                            prodGrade.Codigo_Barra = _this.Grade.Cod_Barra;
                            if (CNum(prodGrade.Codigo_Barra) > 0) {
                                prodGrade.Codigo_Barra = (CNum(prodGrade.Codigo_Barra) + contador - 1).toString();
                            }
                            prodGrade.Contador = contador;
                            prodGrade.Tamanho = item.Tamanho;
                            prodGrade.Cor = _this.txtMdGradeCor.SourceLista[j].Value;
                            if (!prodGrade.CorEntity) {
                                prodGrade.CorEntity = {};
                            }
                            prodGrade.CorEntity.Codigo = prodGrade.Cor;
                            var auxCor = _this.txtMdGradeCor.SourceLista[j].Text.split(" - ").length - 1;
                            prodGrade.CorEntity.Nome = _this.txtMdGradeCor.SourceLista[j].Text.split(" - ")[auxCor];
                            _this.ProdutosGrade.push(prodGrade);
                        }
                    }
                    _this.Grade.Grade = 0;
                    _this.txtMdGradeCor.Limpar();
                }
                else {
                    MostrarAlerta("Não foram encontrados registros de tamanho para esta grade. Por favor, verifique o Cadastro de Grade e tente novamente.");
                }
                _this.RefreshAngular();
                fecharEspera();
            }
            catch (e) {
                fecharEspera();
                LogarException(e);
            }
        }, function (e) {
            fecharEspera();
            LogarException(e);
        }, this);
    };
    C_Produt.prototype.OnClicouGravarGrade = function () {
        var _this = this;
        if (!this.ProdutosGrade || this.ProdutosGrade.length <= 0) {
            MostrarAlerta("Antes de Gravar é necessário informar os parâmetros da tela e depois clicar em Gerar");
            return;
        }
        MsgBoxJS("Esta operação pode demorar alguns minutos, deseja realmente gravar os produtos informados na grade?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (d) {
            if (d.Resultado == MsgBoxResult.Yes) {
                _this.GravarProdutosGrade();
            }
        });
    };
    C_Produt.prototype.GravarProdutosGrade = function () {
        var _this = this;
        var produtos;
        produtos = JSON.stringify(this.ProdutosGrade);
        var parametros = {
            produtos: produtos,
            codUsuario: ValoresSismoura.UsuarioLogado
        };
        abrirEspera();
        this.ExecutarFuncaoServerSideAsynch("GravarProdutosGrade", parametros, function (d) {
            _this.OnClicouFecharGrade();
            fecharEspera();
            MostrarMensagem("Produtos da Grade inseridos com sucesso!");
        }, function (e) {
            fecharEspera();
            LogarException(e);
        }, this);
    };
    C_Produt.prototype.OnClicouFecharGrade = function () {
        this.Grade = {};
        this.ProdutosGrade = [];
        this.txtMdGradeCor.agrItens.Obrigatorio = false;
        this.txtMdGradeCor.btnLimpar.DoClick();
        this.RefreshAngular();
        this.mdCadastroGrade.Hide();
    };
    C_Produt.prototype.HabilitaRegraImposto = function (habilita) {
        var editavel = (habilita ? "none" : "");
        $(this.divNFImpostos).css("pointer-events", editavel);
        $(this.divNFAdicionais).css("pointer-events", editavel);
    };
    C_Produt.prototype.ConsultaIMendes = function () {
        var _this = this;
        var produtos;
        var prodiMendes;
        try {
            produtos = [];
            prodiMendes = {};
            prodiMendes.id = 1;
            prodiMendes.cod = this.EntityTela.Codigo;
            prodiMendes.descricao = this.EntityTela.Nome;
            prodiMendes.ean = this.EntityTela.Codigo_Barra;
            prodiMendes.codIMendes = this.EntityTela.codiMendes;
            produtos.push(prodiMendes);
            abrirEspera("");
            var parametros = {
                codEmpresa: ValoresSismoura.EmpresaPadraoUsuario,
                produtos: produtos,
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            //var retorno = this.ExecutarFuncaoServerSideSynch("GetProdutos", parametros);
            this.ExecutarFuncaoServerSideAsynch("GetProdutos", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (retorno) {
                        var produtos = [];
                        var retornos = [];
                        for (var i = 0; i < retorno.Produtos.length; i++) {
                            for (var x = 0; x < retorno.Produtos[i].length; x++) {
                                produtos.push(retorno.Produtos[i][x]);
                            }
                        }
                        for (var i = 0; i < retorno.Retornos.length; i++) {
                            for (var x = 0; x < retorno.Retornos[i].length; x++) {
                                retornos.push(retorno.Retornos[i][x]);
                            }
                        }
                        _this.mdIntegracao.Show();
                        _this.GridIntegracao.PreencherGrid(produtos);
                        _this.PreencherRetornos(retornos);
                        _this.PreencherProdutos(produtos);
                        _this.btnAtualizar.SetEnabled(produtos[0].encontrou);
                    }
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarExceptionAjax(erro);
            }, this);
        }
        catch (ex) {
            MostrarAlerta("Houve uma falha na consulta!");
        }
    };
    C_Produt.prototype.PreencherComboRegraImposto = function () {
        try {
            var parametros = void 0;
            var entity = this.EntityTela;
            var retorno = this.ExecutarFuncaoServerSideSynch('PreencherComboRegraImposto', parametros);
            //this.GridRegraImposto.Colunas.FirstOrDefault('FieldName', 'Codigo_Tipo_Regra').DataSourceCombo = retorno;
            this.GridRegraImposto.AlterarDataSourceColunaCombo('Codigo_Tipo_Regra', retorno);
            this.PreencherEntidade('' + this.EntityTela.Codigo);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.AlternarCamposSetarProduto = function () {
        if (this.optTipoProdutoCombo.GetValue() == "P") {
            this.txtProdutoCombo.Visible = true;
            this.txtGrupoCombo.Visible = false;
            this.txtSubgrupoCombo.Visible = false;
        }
        else {
            if (this.optTipoProdutoCombo.GetValue() == "G") {
                this.txtProdutoCombo.Visible = false;
                this.txtGrupoCombo.Visible = true;
                this.txtSubgrupoCombo.Visible = false;
            }
            else {
                this.txtProdutoCombo.Visible = false;
                this.txtGrupoCombo.Visible = false;
                this.txtSubgrupoCombo.Visible = true;
            }
            this.txtQtdeParticipanteDecimal.Visible = false;
            this.txtQtdeParticipanteInteiro.Visible = true;
        }
        this.LimparProdutoCombo();
    };
    C_Produt.prototype.LimparProdutoCombo = function () {
        this.txtSubgrupoCombo.Limpar();
        this.txtProdutoCombo.Limpar();
        this.txtGrupoCombo.Limpar();
        this.txtQtdeParticipanteDecimal.Limpar();
        this.txtQtdeParticipanteInteiro.Limpar();
        this.txtValorCombo.Limpar();
        this.txtOrdemCombo.Limpar();
    };
    C_Produt.prototype.LimpouItemProdutoCombo = function (s, e) {
        this.optTipoProdutoCombo.SetValue("P");
        this.Produto_Combo_Item.Tipo_Participante = "P";
    };
    C_Produt.prototype.ValidarProdutoCombo = function (s, e) {
        var pgc = e.item;
        e.cancelar = false;
        if (!pgc) {
            MostrarAlerta("Preencha os campos corretamente");
            e.cancelar = true;
            return;
        }
        if (!this.optTipoProdutoCombo.GetValue() || this.optTipoProdutoCombo.GetValue() == "") {
            MostrarAlerta("Preencha o campo corretamente");
            e.cancelar = true;
            return;
        }
        else {
            if (!pgc.Tipo_Participante)
                pgc.Tipo_Participante = this.optTipoProdutoCombo.GetValue();
        }
        if (this.txtProdutoCombo.Visible)
            pgc.Codigo_Participante = pgc.Codigo_ParticipanteProduto;
        if (this.txtSubgrupoCombo.Visible)
            pgc.Codigo_Participante = pgc.Codigo_ParticipanteSubGrupo;
        if (this.txtGrupoCombo.Visible)
            pgc.Codigo_Participante = pgc.Codigo_ParticipanteGrupo;
        if (!pgc.Codigo_Participante || pgc.Codigo_Participante <= 0) {
            if (this.txtProdutoCombo.Visible)
                MostrarAlerta("Preencha o campo corretamente: Produto");
            if (this.txtSubgrupoCombo.Visible)
                MostrarAlerta("Preencha o campo corretamente: Subgrupo");
            if (this.txtGrupoCombo.Visible)
                MostrarAlerta("Preencha o campo corretamente: Grupo de Produtos");
            e.cancelar = true;
            return;
        }
        else {
            if (this.txtProdutoCombo.Visible)
                pgc.Nome = this.txtProdutoCombo.GetResultado();
            if (this.txtSubgrupoCombo.Visible)
                pgc.Nome = this.txtSubgrupoCombo.GetResultado();
            if (this.txtGrupoCombo.Visible)
                pgc.Nome = this.txtGrupoCombo.GetResultado();
        }
        if (!pgc.Qtde_Participante || pgc.Qtde_Participante <= 0) {
            MostrarAlerta("Preencha o campo corretamente: Qtde Participante");
            e.cancelar = true;
            return;
        }
        if (!pgc.Valor_Unitario || pgc.Valor_Unitario <= 0) {
            MostrarAlerta("Preencha o campo corretamente: Valor Unitário");
            e.cancelar = true;
            return;
        }
        if (!pgc.Ordem_Combo || pgc.Ordem_Combo <= 0) {
            MostrarAlerta("Preencha o campo corretamente: Ordem Combo");
            e.cancelar = true;
            return;
        }
        var valid = this.Produto_Combo.filter(function (p) { return p.Ordem_Combo == pgc.Ordem_Combo; });
        if (valid.length > 0) {
            MostrarAlerta("Ordem já utilizada no Combo!");
            e.cancelar = true;
            return;
        }
        valid = this.Produto_Combo.filter(function (p) { return p.Tipo_Participante == pgc.Tipo_Participante && pgc.Codigo_Participante == p.Codigo_Participante; });
        if (valid.length > 0) {
            MostrarAlerta("Produto já existe na grade");
            e.cancelar = true;
            return;
        }
        var count = this.Produto_Combo.filter(function (p) { return (p.Tipo_Participante == "S" || p.Tipo_Participante == "G"); }).length;
        if (count > 23) {
            MostrarAlerta("Não é possivel adicionar mais de 24 itens do tipo Grupo/Subgrupo no Combo");
            e.cancelar = true;
            return;
        }
    };
    C_Produt.prototype.ProcuraProduto = function () {
        var parametros;
        var result;
        if (this.txtProdutoCombo.GetText().CNum() <= 0)
            return;
        try {
            parametros = {
                codProduto: this.txtProdutoCombo.GetText().CNum()
            };
            result = this.ExecutarFuncaoServerSideSynch("ProdutoPermitirInserirCombo", parametros);
            if (!result || this.txtCodigo.GetText().CNum() == this.txtProdutoCombo.GetText().CNum()) {
                this.txtProdutoCombo.Limpar();
                this.txtProdutoCombo.Focus();
                MostrarAlerta("Este Produto não pode ser adicionado no Combo!");
                return;
            }
            result = this.ExecutarFuncaoServerSideSynch("ProdutoIsFracionado", parametros);
            if (result) {
                this.txtQtdeParticipanteDecimal.Visible = true;
                this.txtQtdeParticipanteInteiro.Visible = false;
                this.txtQtdeParticipanteInteiro.Limpar();
            }
            else {
                this.txtQtdeParticipanteDecimal.Visible = false;
                this.txtQtdeParticipanteInteiro.Visible = true;
                this.txtQtdeParticipanteDecimal.Limpar();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Produt.prototype.OnBuscaProdutoCombo = function () {
        this.txtProdutoCombo.AddParametro("ProdutoCombo", "15");
    };
    C_Produt.prototype.OnAntesBuscaProdutoCombo = function () {
        this.txtProdutoCombo.AddParametro("ProdutoCombo", "15");
    };
    C_Produt.prototype.ValidaValorDecimal = function (e) {
        if (e.GetText().CNum() < 0.0) {
            e.SetText("0,00");
        }
    };
    C_Produt.prototype.ValidaValorInteiro = function (e) {
        if (e.GetText().CNum() < 0) {
            e.SetText("0");
        }
    };
    C_Produt.prototype.InitListas = function () {
        var parametros;
        try {
            var listas = this.ExecutarFuncaoServerSideSynch("InitListas", parametros);
            this.EmpresasLimpo = listas.EmpresasLimpo;
            if (ValoresSismoura.ConfiguracoesRetaguarda.Varios_Precos) {
                this.ListaPrecosLimpo = listas.ListaPrecosLimpo;
            }
            else {
                this.ListaPrecosLimpo = [];
            }
            if (ValoresSismoura.ConfiguracoesRetaguarda.Estoque_Minimo_Empresa) {
                this.EstoqueEmpresaLimpo = listas.EstoqueEmpresaLimpo;
            }
            else {
                this.EstoqueEmpresaLimpo = [];
            }
            this.RegrasLimpo = listas.RegrasLimpo;
            this.DepositosEstoquesLimpo = listas.DepositosEstoquesLimpo;
            this.CotacaoDolar = listas.CotacaoDolar;
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_Produt;
}(MouraPageCadastroAngular));
var c_Produt = new C_Produt;
//# sourceMappingURL=C_Produt.js.map