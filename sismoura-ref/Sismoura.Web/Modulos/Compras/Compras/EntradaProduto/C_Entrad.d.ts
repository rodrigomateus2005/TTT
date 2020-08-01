interface IMouraScopeEntradaProduto extends IMouraScope<SiSMoura.Core.Entity.Entrada_Produto> {
    Servicos: SiSMoura.Core.Entity.EntradaServicoRetorno[];
    Servico: SiSMoura.Core.Entity.EntradaServicoRetorno;
    Produtos: SiSMoura.Core.Entity.EntradaProdutoItensRetorno[];
    Produto: SiSMoura.Core.Entity.EntradaProdutoItensRetorno;
    EntradaProdutoAjuste: SiSMoura.Core.Entity.Entrada_Produto_Ajustes;
}
interface EntradaProdutoValidacoes {
    GravandoNota: boolean;
    ValidouLotes: boolean;
    ValidouCombustivel: boolean;
    ValidouDuplicata: boolean;
    ValidouEntradaDataAnterior: boolean;
}
interface ProdutoUnitarizado {
    IdLinhaGrade: number;
    Produtos: Array<ProdutoUnitarizadoItem>;
}
interface ProdutoUnitarizadoItem {
    Codigo_Produto: number;
    Descricao_Produto: string;
    Quantidade: number;
}
declare class C_Entrad extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Entrada_Produto> {
    readonly txtNCM: MouraTextBox;
    readonly mdNCM: MouraModal;
    readonly gdNcm: MouraGridViewJSEditavel;
    isNCM: boolean;
    NCM: any;
    NCMs: any[];
    readonly cboTipoImportacao: MouraComboBox;
    readonly txtChaveAcessoImportar: MouraTextBox;
    ValidacoesEntrada: EntradaProdutoValidacoes;
    readonly dlgLote: MouraModalLoteJS;
    readonly lstPedidos: MouraCheckBoxList;
    readonly grdProduto: MouraGridViewJSEditavel;
    readonly tab: MouraTabPanel;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly cboDeposito: MouraComboBox;
    readonly btnAdicionarProduto: MouraButton;
    readonly btnAdicionarServico: MouraButton;
    readonly mdProdutos: MouraModal;
    readonly mdServicos: MouraModal;
    readonly mdImportarXML: MouraModal;
    readonly txtProduto: MouraTextBoxProcura;
    readonly txtServico: MouraTextBoxProcura;
    readonly txtNota: MouraTextBox;
    readonly cboTipoNF: MouraComboBox;
    readonly chkEnviarIcmsSped: MouraCheckBox;
    readonly txtICMSServP: MouraTextBox;
    readonly txtICMSServR: MouraTextBox;
    readonly txtISSR: MouraTextBox;
    readonly txtCifFob: MouraTextBox;
    readonly cboTipoServico: MouraComboBox;
    readonly txtAliquotaPISServico: MouraTextBox;
    readonly txtValorPISServico: MouraTextBox;
    readonly txtSerie: MouraTextBox;
    readonly txtFornecedor: MouraTextBoxProcura;
    readonly txtFornecedorTransferencia: MouraTextBoxProcura;
    readonly chkGerarTodos: MouraCheckBox;
    readonly lblSubTotal: MouraLabel;
    readonly lblSubTotalDolar: MouraLabel;
    readonly txtValorUnitDolar: MouraTextBox;
    readonly txtQuantidade: MouraTextBox;
    readonly hdnCalcularDolar: HTMLInputElement;
    readonly hdnCotacaoDolar: HTMLInputElement;
    readonly lblLocalizacao: MouraLabel;
    readonly lblUnidade: MouraLabel;
    readonly lblEstoqueAtual: MouraLabel;
    readonly txtTotalProduto: MouraTextBox;
    readonly txtV_Seguro: MouraTextBox;
    readonly txtTotalServico: MouraTextBox;
    readonly cboTipoEntrada: MouraComboBox;
    readonly lblTotalNota: MouraLabel;
    readonly txtSomaDescontoUnitario: MouraTextBox;
    protected custo: number[];
    readonly txtValorSeguro: MouraTextBox;
    readonly lblValorRestanteRatear: MouraLabel;
    readonly lblTotalServico: MouraLabel;
    readonly cboCST: MouraComboBox;
    readonly cboSTIPI: MouraComboBox;
    readonly cboSTCOFINS: MouraComboBox;
    readonly cboTipoDias: MouraComboBox;
    readonly txtBaseIcmsStR: MouraTextBox;
    readonly txtICMS: MouraTextBox;
    readonly txtBaseICMSR: MouraTextBox;
    readonly txtIcmsStP: MouraTextBox;
    readonly txtIcmsStR: MouraTextBox;
    readonly txtDiasVencimento: MouraTextBox;
    readonly txtNotaXml: MouraTextBox;
    readonly txtVencInicial: MouraTextBoxData;
    readonly txtDataEmissaoD: MouraTextBoxData;
    readonly chkPrevisao: MouraCheckBox;
    readonly txtContaContabil: MouraTextBoxProcura;
    readonly txtParcelas: MouraTextBox;
    readonly cboDocMercantil: MouraComboBox;
    readonly cboFormaPagamentoD: MouraComboBox;
    readonly txtFornecedorD: MouraTextBoxProcura;
    readonly txtNDocBancario: MouraTextBox;
    readonly cboContaCorrente: MouraContaCorrenteCombo;
    readonly hdnEntradaDataEmissao: HTMLInputElement;
    readonly hdnNomeArquivo: HTMLInputElement;
    readonly hdnConfigRateio: HTMLInputElement;
    readonly hdnDuplicata: HTMLInputElement;
    readonly ConfiguracaoRateio: any;
    readonly hdnXmlCadastrado: HTMLInputElement;
    readonly txtDias: MouraTextBox;
    readonly txtChaveNFE: MouraTextBox;
    readonly cboTanque: DevExpress.Web.Scripts.ASPxClientComboBox;
    readonly cboCombustivel: DevExpress.Web.Scripts.ASPxClientComboBox;
    readonly hdnPossuiContasPagar: HTMLInputElement;
    readonly lblCombustivelRestante: MouraLabel;
    readonly hdnCombustiveis: HTMLInputElement;
    readonly hdnRateioCombustiveis: HTMLInputElement;
    readonly txtQtdTanque: MouraTextBox;
    readonly cboSTPis: MouraComboBox;
    readonly cboSTPisServico: MouraComboBox;
    readonly cboSTCofinsServico: MouraComboBox;
    readonly txtBasePIS: MouraTextBox;
    readonly txtAliquotaPIS: MouraTextBox;
    readonly txtValorPIS: MouraTextBox;
    readonly txtBaseCOFINS: MouraTextBox;
    readonly txtAliquotaCOFINS: MouraTextBox;
    readonly txtTipoLancamentoContabil: MouraTextBoxProcuraConfiguracaoContabil;
    readonly txtTipoLancamentoContabil_hdnEmpresaContabil: HTMLInputElement;
    readonly cboCFOP: MouraComboBox;
    readonly txtValorCOFINS: MouraTextBox;
    readonly txtAliquotaCOFINSServico: MouraTextBox;
    readonly txtValorCofinsServico: MouraTextBox;
    readonly txtIPIP: MouraTextBox;
    readonly txtIPIR: MouraTextBox;
    readonly btnOKServico: MouraButton;
    readonly btnOKMicrochip: MouraButton;
    readonly btnCancelar: MouraButton;
    readonly btnOkFornecedor: MouraButton;
    readonly btnCancelarFornecedor: MouraButton;
    readonly btnFecharServico: MouraButton;
    readonly btnFecharProduto: MouraButton;
    readonly btnOKProduto: MouraButton;
    readonly grdServico: MouraGridViewJSEditavel;
    readonly grdMicrochip: MouraGridViewJSEditavel;
    Produtos: SiSMoura.Core.Entity.EntradaProdutoItensRetorno[];
    Produto: SiSMoura.Core.Entity.EntradaProdutoItensRetorno;
    Anilhas: SiSMoura.Core.Entity.Entrada_Produto_Anilha[];
    Anilha: SiSMoura.Core.Entity.Entrada_Produto_Anilha;
    Servicos: SiSMoura.Core.Entity.EntradaServicoRetorno[];
    Servico: SiSMoura.Core.Entity.EntradaServicoRetorno;
    ItensUnitarios: any[];
    ItemUnitario: any;
    Duplicata: any;
    Duplicatas: any[];
    NFeImportada: Sismoura.Web.View.EntradaProdutoXMLRetorno;
    PathXMLImportado: string;
    ItemNFEAtual: SiSMoura.Core.Entity.ProdutoImportadoNfe;
    readonly lblFornecedorXML: MouraLabel;
    readonly grdDuplicata: MouraGridViewJSEditavel;
    readonly mdDuplicatas: MouraModal;
    readonly btnGerar: MouraButton;
    readonly btnDuplicatas: MouraButton;
    readonly btnOkDuplicatas: MouraButton;
    readonly btnAdicionarCC: MouraButton;
    readonly grdRateioCC: MouraGridViewJSEditavel;
    ListaRateioCC: any[];
    readonly txtValorCC: MouraTextBox;
    readonly txtCentroCustoD: MouraTextBoxProcura;
    readonly txtCentroCusto: MouraTextBoxProcura;
    readonly btnCancelarDup: MouraButton;
    readonly btnAlterarPrecos: MouraButton;
    readonly btnImportarXml: MouraButton;
    readonly btnCarregarXml: MouraButton;
    readonly btnCadForn: MouraButton;
    readonly grdItensArquivo: MouraGridViewJS;
    readonly txtDataEmissaoXml: MouraTextBoxData;
    readonly txtDataEntradaXml: MouraTextBoxData;
    readonly btnOkImportar: MouraButton;
    readonly mdVincularProduto: MouraModal;
    readonly btnVinculaProdutoOK: MouraButton;
    readonly btnVinculaProdutoFechar: MouraButton;
    readonly txtVincularProduto: MouraTextBoxProcura;
    readonly mdInconsistencia: MouraModal;
    readonly grdInconsistencia: MouraGridViewJS;
    readonly mdLotesVinculados: MouraModal;
    readonly grdLotesVinculados: MouraGridViewJS;
    readonly btnProcurarPendentes: MouraButton;
    readonly btnVisualizarLotes: MouraButton;
    readonly grdPendentes: MouraGridViewJS;
    readonly hdnCaminhoSessao: HTMLInputElement;
    readonly tabNfes: MouraTabPanel;
    readonly mdCombustiveis: MouraModal;
    readonly mdAnilha: MouraModal;
    readonly mdFornecedor: MouraModal;
    readonly lblTotalProduto: MouraLabel;
    readonly grdCombustiveis: MouraGridViewJS;
    ListaRateioCombustivel: Array<SiSMoura.Core.Entity.EntradaProdutoItemTanqueRetorno>;
    readonly Combustiveis: SiSMoura.Core.Entity.EntradaProdutoItensRetorno[];
    private _itensPedido;
    itensPedido: Array<SiSMoura.Core.Entity.ConferenciaPedidoRetorno>;
    readonly mdPedidos: MouraModal;
    readonly lstImPedido: MouraListBox;
    readonly grdPedido: MouraGridViewJS;
    ProdutosPedido: Array<SiSMoura.Core.Entity.EntradaPedidoRetorno>;
    readonly lblQtdeUtilizada: MouraLabel;
    readonly lblValorUtilizado: MouraLabel;
    readonly lblDescontoPedido: MouraLabel;
    readonly lblValorPedido: MouraLabel;
    LotesInformados: QtdeLoteInformadoJS[];
    readonly fpXML: MouraFileUploadJS;
    readonly mdInfContaContabil: MouraModal;
    readonly txtCCProduto: MouraTextBoxProcura;
    readonly mdUnitarizar: MouraModal;
    readonly grdUnitarizar: MouraGridViewJSEditavel;
    readonly lblProdutoUnitarizar: MouraLabel;
    readonly lblRestanteUnitarizar: MouraLabel;
    readonly rdTipoRateio: MouraRadioButtonList;
    private _listaUnitarizado;
    ListaUnitarizados: Array<ProdutoUnitarizado>;
    Rateio: any;
    readonly mdAlterarContaContabil: MouraModal;
    readonly mdAlterarContaCorrente: MouraModal;
    readonly txtConta: MouraTextBoxProcura;
    readonly chkEstoque: MouraCheckBox;
    readonly btnGerarRelacao: MouraButton;
    readonly txtGrupo: MouraTextBox;
    readonly txtSubGrupo: MouraTextBox;
    readonly txtLinha: MouraTextBox;
    readonly txtMarca: MouraTextBox;
    readonly txtReferencia: MouraTextBox;
    readonly txtCor: MouraTextBox;
    readonly txtTamanho: MouraTextBox;
    readonly mdConferirPedido: MouraModal;
    EntradaProdutoAjustes: any[];
    readonly cboDivergencias: MouraComboBox;
    readonly grdConferenciaPedidos: MouraGridViewJS;
    readonly btnOkConferencia: MouraButton;
    readonly btnCancelarConferencia: MouraButton;
    readonly lblOrigem: MouraLabel;
    readonly lblMotivoDebitoCredito: MouraLabel;
    readonly grdDebitosCreditos: MouraGridViewJSEditavel;
    readonly txtCodigoAjuste: MouraTextBoxProcura;
    readonly txtOrigem: MouraTextBox;
    readonly txtCST: MouraTextBox;
    readonly txtAliquota: MouraTextBox;
    readonly txtValorDebitoCredito: MouraTextBox;
    readonly txtMotivoDebitoCredito: MouraTextBox;
    readonly txtContaContabilFinanceira: MouraTextBoxProcura;
    readonly mdValoresDesag: MouraModal;
    readonly grdSubDesag: MouraGridViewJS;
    readonly lblTotalQtd: MouraLabel;
    readonly lblTotalPeso: MouraLabel;
    readonly lblTotalMedia: MouraLabel;
    readonly lblTotalCusto: MouraLabel;
    protected Init(): void;
    private isPossuiFaturaXML;
    protected OnClickGerarUnitarizar(): void;
    private jaEntrou;
    protected OnAlterandoItem(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected OnAlterouItem(s: any, e: MouraGridViewJSEditavelItemEventArgs): void;
    protected OnFechouMdImportarXML(): void;
    protected AdicionarEventosPagina(): void;
    private OnAdicionouDebitoCredito;
    private OnExcluiuDebitoCredito;
    protected OnMudouComboDivergencias(): void;
    protected OnClickBotaoGrdDuplicata(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnClickOkConferencia(): void;
    protected OnClickCancelarConferencia(): void;
    protected OnClickOkAlterarContaContabil(): void;
    protected OnClickCancelarAlterarContaContabil(): void;
    protected OnTipoEntradaMudou(s: any, e: any): void;
    protected GetScope(): IMouraScopeEntradaProduto;
    OnPageLoad(): void;
    protected AlterouTipoNota(newValue: any, oldValue: any): void;
    protected AlterouValorServico(newValue: any, oldValue: any): void;
    protected AlterouPisServico(newValue: any, oldValue: any): void;
    protected AlterouCofinsServico(newValue: any, oldValue: any): void;
    protected AlterouISSServico(newValue: any, oldValue: any): void;
    protected AlterouDescontoPProduto(newValue: any, oldValue: any): void;
    protected AlterouDescontoVProduto(newValue: any, oldValue: any): void;
    protected AlterouEncargosProduto(newValue: any, oldValue: any): void;
    protected AlterouValorUnitarioProduto(newValue: any, oldValue: any): void;
    protected AlterouQuantidadeProduto(newValue: any, oldValue: any): void;
    protected AlterouIPIProduto(newValue: any, oldValue: any): void;
    protected AlterouSTTIPIProduto(newValue: any, oldValue: any): void;
    protected AlterouSTTPISProduto(newValue: any, oldValue: any): void;
    protected AlterouSTTCofinsProduto(newValue: any, oldValue: any): void;
    protected AlterouCSTProduto(newValue: any, oldValue: any): void;
    protected AlterouICMSProduto(newValue: any, oldValue: any): void;
    protected AlterouPISProduto(newValue: any, oldValue: any): void;
    protected AlterouIcmsSTProduto(newValue: any, oldValue: any): void;
    protected AlterouCofinsProduto(newValue: any, oldValue: any): void;
    AlteraHabilitou(flag: boolean): void;
    protected AlterouModeloNota(newValue: any, oldValue: any): void;
    protected AlterouDescontoNota(newValue: any, oldValue: any): void;
    protected OnComboTipoDiasSelectedIndexChanged(): void;
    protected OnTextBoxDiasVencimentoChange(): void;
    protected OntextBoxVencInicialChange(): void;
    private daysBetween;
    protected dataBase(): Date;
    protected OnTextBoxNotaChange(): void;
    protected OnTextBoxSerieChange(): void;
    protected OnTextBoxFornecedorPesquisou(): void;
    protected ObterInformacoesNota(): void;
    protected OnClickBotaoAdicionarServico(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
    protected OncboSTPisServicoSelectedIndexChanged(): void;
    protected OncboSTCOFINSServicoSelectedIndexChanged(): void;
    protected OnComboBoxEmpresaChange(): void;
    PreencherEmpresaContabil(codEmpresa: any): void;
    protected OnIniciouComboDeposito(): void;
    protected AtualizarDeposito(Entity: SiSMoura.Core.Entity.Entrada_Produto, codEmpresa: number, atualizarDeposito: boolean): void;
    protected OnPesquisouDadosServico(s: MouraTextBoxProcura, e: MouraEventArgs): void;
    protected OnComboBoxTipoServicoChange(): void;
    protected CalcularTotalNota(EntityEntrada: SiSMoura.Core.Entity.Entrada_Produto): void;
    protected CorrigirCamposNf(): void;
    private GeraNumeroRecibo;
    private respondeuContasPagar;
    protected OnAntesDeletar(): boolean;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Entrada_Produto): void;
    protected LimparValidacoesGravar(): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Entrada_Produto): void;
    protected OnAntesGravar(): boolean;
    protected VerificaProdutosControlados(entity: SiSMoura.Core.Entity.Entrada_Produto): boolean;
    protected OnInformouLoteProduto(s: any, e: any): void;
    protected OnDepoisGravar(): boolean;
    protected ValidarAntesGravar(entity: SiSMoura.Core.Entity.Entrada_Produto): boolean;
    protected PreencherServicosEntity(Entity: SiSMoura.Core.Entity.Entrada_Produto): void;
    protected PreencherProdutosEntity(Entity: SiSMoura.Core.Entity.Entrada_Produto): void;
    protected PreencherRateioCentroCusto(Entity: SiSMoura.Core.Entity.Entrada_Produto): void;
    protected PreencherContasPagarEntity(Entity: SiSMoura.Core.Entity.Entrada_Produto): void;
    protected PreencherCombustiveisEntity(Entity: SiSMoura.Core.Entity.Entrada_Produto): void;
    protected RatearCentroCusto(contaPagar: SiSMoura.Core.Entity.Contas_Pagar, valorTotal: number): void;
    protected IsEntradaContaPaga(entity: SiSMoura.Core.Entity.Entrada_Produto): boolean;
    protected RespostaContasPagar(result: MsgBoxResultEventArgs): void;
    protected OnClickbtnOKServico(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickbtnFecharServico(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClicOkMicrochip(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClicCancelarMicrochip(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClicOkFornecedor(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClicCancelarFornecedor(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnValidandoAdicionarAnilha(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected OnValidandoAdicionarServico(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected OnAdicionouServico(s: any, e: MouraGridViewJSEditavelItemEventArgs): void;
    protected OnLimpouItemServico(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected CalcularTotalServico(servico: SiSMoura.Core.Entity.EntradaServicoRetorno): void;
    protected CalcularISSServico(servico: SiSMoura.Core.Entity.EntradaServicoRetorno): void;
    protected CalcularPISServico(servico: SiSMoura.Core.Entity.EntradaServicoRetorno): void;
    protected CalcularCOFINSServico(servico: SiSMoura.Core.Entity.EntradaServicoRetorno): void;
    protected mudouValorSeguro(newValue: any, oldValue: any): void;
    protected RatearConfiguracoesEntrada(): void;
    protected OnClickFecharDuplicatas(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected CarregarAbaDuplicatas(): void;
    protected OnClickBotaoGerarDuplicatas(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickOKDuplicatas(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnValidandoGradeDuplicatas(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected OnGerouLinhaDuplicata(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected OnValidandoGradeRateio(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected LimparCamposRateio(): void;
    protected CalcularValorRestanteRateio(): void;
    protected OnExcluiuItemRateio(s: any, e: any): void;
    protected OnValidandoItemRateio(s: any, e: any): void;
    protected OnClickBotaoAdicionarProduto(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
    protected OnClickBotaoFecharProduto(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnPesquisouDadosProduto(s: MouraTextBoxProcura, e: MouraEventArgs): void;
    protected OnGerouLinhaConferencia(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected OnGerouLinhaProduto(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    private itemClicado;
    protected idLinhaProdutoContaContabil: number;
    protected OnClicouBotaoLinhaProduto(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnValidandoAlteracaoProduto(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    private inseriuProduto;
    protected OnAdicionouProduto(s: any, e: MouraGridViewJSEditavelItemEventArgs): void;
    protected OnLimpouItemProduto(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected CalcularTotalProduto(produto: SiSMoura.Core.Entity.EntradaProdutoItensRetorno): void;
    protected OnCalcularDolar(): void;
    protected AlterouValorUnitarioDolar(): void;
    private CalcularDolar;
    protected OnAlterouDescontoPProduto(produto: SiSMoura.Core.Entity.EntradaProdutoItensRetorno): void;
    protected OnClickbtnOKProduto(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected CalcularValorDescontoPorcentagemProduto(produto: SiSMoura.Core.Entity.EntradaProdutoItensRetorno): void;
    protected CalcularValorDescontoProduto(produto: SiSMoura.Core.Entity.EntradaProdutoItensRetorno): void;
    protected CalcularIPIPorcentagemProduto(produto: SiSMoura.Core.Entity.EntradaProdutoItensRetorno): void;
    protected CalcularIPIValorProduto(produto: SiSMoura.Core.Entity.EntradaProdutoItensRetorno): void;
    protected OnAlterouSTTIPIProduto(produto: SiSMoura.Core.Entity.EntradaProdutoItensRetorno): void;
    protected OnAlterouSTPisProduto(produto: SiSMoura.Core.Entity.EntradaProdutoItensRetorno): void;
    protected OnAlterouSTCofinsProduto(produto: SiSMoura.Core.Entity.EntradaProdutoItensRetorno): void;
    protected OnAlterouCSTProduto(produto: SiSMoura.Core.Entity.EntradaProdutoItensRetorno): void;
    protected RecalcularValorIcms(produto: SiSMoura.Core.Entity.EntradaProdutoItensRetorno): void;
    protected RecalcularValorPisProduto(produto: SiSMoura.Core.Entity.EntradaProdutoItensRetorno): void;
    protected RecalcularValorIcmsStProduto(produto: SiSMoura.Core.Entity.EntradaProdutoItensRetorno): void;
    protected RecalcularValorCofinsProduto(produto: SiSMoura.Core.Entity.EntradaProdutoItensRetorno): void;
    protected PreencherBaseImpostosProduto(): void;
    protected OnClickBotaoImportarNFE(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected LimparDialogXML(): void;
    protected OnClickBotaoCarregarXML(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected LimparCamposImportarXML(): void;
    private dup;
    protected CarregarXML(fileName: string): void;
    protected OnFileUploadXMLCompleted(s: any, e: any): void;
    protected OnClickBotaoCadForn(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected FormataValorURL(valor: any): string;
    private RETORNO_CAD_FORN;
    private RETORNO_CAD_PROD;
    protected OnRetornouTelaModalCadastro(s: any, e: MouraTelaModalRetornouEventArgs): void;
    protected OnGerouLinhaProdutoNFE(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected OnClicouBotaoLinhaProdutoNFe(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    private _importacaoNFe;
    protected AbrirModalAnilhas(itemXML: SiSMoura.Core.Entity.ProdutoImportadoNfe): void;
    protected AbrirFornecedor(): void;
    protected AbrirModalVincular(item: SiSMoura.Core.Entity.ProdutoImportadoNfe): void;
    protected OnClickBotaoVinculaProdutoFechar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickBotaoVinculaProdutoOK(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickBotaoProcuraPendentes(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnSelecionouLinhaGrdPendentes(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected ConferirPedidos(): boolean;
    protected ImportarProdutos(): void;
    protected OnClickBotaoOkImportar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected AdicionarProdutoXMLNaEntrada(item: SiSMoura.Core.Entity.ProdutoImportadoNfe, isUnitarizado: boolean, codFornecedor: number, dataEntrada: Date, codDeposito: number, ListaLotesNfe: QtdeLoteInformadoJS[]): void;
    protected OnClickBotaoLotes(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    private _quantidadeEntradaUnitarizar;
    private _itemUnitarizar;
    protected AbrirModalUnitarizar(idLinhaGrade: number, quantidadeEntrada: number, itemXML: SiSMoura.Core.Entity.ProdutoImportadoNfe): void;
    protected LimparCamposUnitarizar(): void;
    protected CalcularQtdeRestanteUnitarizar(): void;
    protected OnClickOkUnitarizar(): void;
    protected OnClickCancelarUnitarizar(): void;
    protected OnExcluiuLinhaUnitarizar(s: any, e: any): void;
    protected OnComboBoxCombustivelChange(): void;
    protected VerificaCombustiveis(entity: SiSMoura.Core.Entity.Entrada_Produto): boolean;
    protected OnClickFecharCombustivel(): void;
    protected OnClickOKCombustivel(): void;
    protected OnClickAdicionarCombustivel(): void;
    protected CalculaTotalCombustivelRestante(): void;
    protected LimpaCamposCombustivel(): void;
    protected OnExcluiuCombustivelGrade(s: any, e: any): void;
    protected OnClickFecharPedidos(): void;
    protected OnClickBotaoPedidos(): void;
    protected OnDblClickListaPedidos(s: any, e: MouraListBoxClickEventArgs): void;
    protected OnEditouItemGradePedido(s: any, e: any): void;
    protected CalcularTotaisPedidos(): void;
    protected OnClickPedidoCompleto(): void;
    protected OnClickOKPedido(): void;
    protected OnClickFecharInconsistencia(): void;
    protected OnClickBotaoAbrirAtualizacaoPreco(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnAntesAbrirProcuraLancamentoContabil(s: any, e: any): void;
    protected OnDepoisAbriuProcuraLancamentoContabil(s: any, e: any): void;
    protected OnPesquisandoContabil(s: any, e: any): void;
    protected OnDepoisBuscarTipoLancamentoContabil(): void;
    protected VerificarAtivarProdutosEntrada(produtos: SiSMoura.Core.Entity.ProdutoImportadoNfe[]): void;
    protected OnClickCancelarCCProduto(): void;
    protected OnClickOkProduto(): void;
    protected OnDepoisBuscarCentroCusto(): void;
    protected OnPesquisandoContaContabilFinanceira(s: MouraTextBoxProcuraContabil, e: MouraEventArgs): void;
    protected OnPesquisandoContaContabil(s: MouraTextBoxProcura, e: MouraEventArgs): void;
    protected OnTipoImportacaoMudou(s: any, e: any): void;
    protected AlterarVisibilidadeImportacao(): void;
    protected OnMudouChkEstoque(): void;
    protected OnAlterouAjusteOrigem(value: any): void;
    protected GetTextoOrigem(value: any): "" | "Nacional" | "Estrangeira - Importação Direta" | "Estrangeira – Adquirida no Mercado Interno";
    protected OnAlterouAjusteMotivo(value: any): void;
    protected GetTextoMotivo(value: any): "" | "Táxi" | "Produtor Agropecuário" | "Frotista/Locadora" | "Diplomático/Consular" | "Utilitários e Motocicletas da Amazônia Ocidental e Áreas de Livre Comércio" | "SUFRAMA" | "Venda a Órgão Público" | "Outros (NT 2016/002)" | "Deficiente Condutor (Convênio ICMS 38/12)" | "Deficiente Não Condutor (Convênio ICMS 38/12)" | "Órgão de fomento e desenvolvimento agropecuário" | "Crédito proveniente de empresa optante pelo Simples Nacional";
    protected OnAdicionandoDebitoCredito(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected OnSelecionouLinhaDebitoCredito(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnNovoDebitoCredito(): void;
    protected BloquearCamposDebitoCredito(flag: any): void;
    protected OnClickAtualizarNCM(): void;
    protected OnClickFecharNCM(): void;
    protected PrepararCodigo(grid: any): string;
    protected validarProdutoNCM(): boolean;
    protected RespostaAtualizarNCM(result: MsgBoxResultEventArgs): void;
    protected ExecutarGravar(): void;
    protected AltualizarNCM(): void;
    protected VerificaNCM(): void;
    protected OnCancelarDesagClick(): void;
    protected OnClickConcluirDesag(): void;
    protected VerificarDesagregacao(Codigo_Produto: number): SiSMoura.Core.Entity.Produto_Desagregacao;
    protected CarregarDesagregacao(item: SiSMoura.Core.Entity.EntradaProdutoItensRetorno): boolean;
    protected CalcularSubprodutos(item: SiSMoura.Core.Entity.EntradaProdutoItensRetorno): boolean;
    protected OnEditouItemProduto(s: any, e: any): void;
    protected OnVerificarSomaQuantidade(produto: SiSMoura.Core.Entity.EntradaProdutoItensRetorno): boolean;
}
declare var c_Entrad: C_Entrad;
//# sourceMappingURL=C_Entrad.d.ts.map