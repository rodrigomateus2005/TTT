declare class C_Produt_Old extends MouraPageCadastro<SiSMoura.Core.Entity.Produto> {
    ListaPrecos: SiSMoura.Core.Entity.ProdutoPrecoRetorno[];
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtCodigoBarras: MouraTextBox;
    readonly cboEmpresaFornecedor: MouraComboBoxEmpresa;
    readonly hdnCodProduto: HTMLInputElement;
    readonly hdnRespondeuCodBarras: HTMLInputElement;
    readonly btnBuscarProduto: MouraButton;
    readonly hdnConfiguracoespermitirPerguntarCodBarra: HTMLInputElement;
    readonly hdnConfiguracoesGerarCodBarraBalanca: HTMLInputElement;
    readonly hdnGerarCodBarra: HTMLInputElement;
    readonly chkProdutoBalanca: MouraCheckBox;
    readonly txtPrecoCusto: MouraTextBox;
    readonly txtMarkup_P: MouraTextBox;
    readonly txtPrecoVenda: MouraTextBox;
    readonly txtFatorCusto: MouraTextBox;
    readonly txtPrecoPorcentagem: MouraTextBox;
    readonly hdnCampoAtualizar: HTMLInputElement;
    readonly hdnListaPrecos: HTMLInputElement;
    readonly hdnCalcularMargem: HTMLInputElement;
    readonly mdFarmarcia: MouraModal;
    readonly cboLaboratorio: DevExpress.Web.Scripts.ASPxClientComboBox;
    readonly mdDrogaria: MouraModal;
    readonly txtDiluicao: MouraTextBox;
    readonly hdnCalcularDolar: HTMLInputElement;
    readonly hdnCotacaoDolar: HTMLInputElement;
    readonly txtPrecoDolar: MouraTextBox;
    readonly txtMargemReal: MouraTextBox;
    readonly cbpListaPrecos: MouraCallBackPanel;
    readonly mdImportarDados: MouraModal;
    readonly txtProdutoImportar: MouraTextBoxProcura;
    readonly txtFornecedor: MouraTextBoxProcura;
    readonly mdInfExtraBalanca: MouraModal;
    readonly txtInfExtra1: MouraTextBox;
    readonly txtProdutoSimilar: MouraTextBoxProcura;
    readonly chkA1: MouraCheckBox;
    readonly chkA2: MouraCheckBox;
    readonly chkA3: MouraCheckBox;
    readonly chkB1: MouraCheckBox;
    readonly chkB2: MouraCheckBox;
    readonly chkC1: MouraCheckBox;
    readonly chkC2: MouraCheckBox;
    readonly chkC3: MouraCheckBox;
    readonly chkC4: MouraCheckBox;
    readonly chkC5: MouraCheckBox;
    readonly chkBMPO: MouraCheckBox;
    readonly chkBSPO: MouraCheckBox;
    readonly hdnURLConsulta: HTMLInputElement;
    readonly btnMaisInformacoes: MouraButton;
    readonly btnHistoricoPreco: MouraButton;
    readonly btnGerarHistoricoPreco: MouraButton;
    readonly cboHistoricoTipo: MouraComboBox;
    readonly cboHistoricoCampoAlterado: MouraComboBox;
    readonly mdHistoricoPreco: MouraModal;
    readonly txtPeriodoHistoricoPreco: MouraTextBoxPeriodo;
    readonly grdHistoricoPreco: MouraGridViewJS;
    readonly txtQtdeCaixaFarmacia: MouraTextBox;
    readonly txtValorMaxAprovadoMS: MouraTextBox;
    readonly txtValorUnitarioCaixa: MouraTextBox;
    readonly chkFarmaciaPopular: MouraCheckBox;
    readonly chkGratuidade: MouraCheckBox;
    readonly txtTabelaPreco: MouraTextBox;
    readonly GridPrecos: MouraGridView;
    readonly GridEstoque: MouraGridViewJSEditavel;
    protected Init(): void;
    OnPageLoad(): void;
    OnDepoisLimpar(): void;
    private Limpar;
    protected OnAntesGravar(): boolean;
    private respontaCodBarras;
    protected abrirConsultaPrecos(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
    protected OnClickHistoricoPreco(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickGerarHistorico(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected selecionarCheck(chk: MouraCheckBox, valor: boolean): void;
    protected validarDocumento(): void;
    protected OnChkA1CheckChange(): void;
    protected OnChkA2CheckChange(): void;
    protected OnChkA3CheckChange(): void;
    protected OnChkB1CheckChange(): void;
    protected OnChkB2CheckChange(): void;
    protected OnChkC1CheckChange(): void;
    protected OnChkC2CheckChange(): void;
    protected OnChkC3CheckChange(): void;
    protected OnChkC4CheckChange(): void;
    protected OnChkC5CheckChange(): void;
    protected OnEndCallBackModalInfExtraBalanca(): void;
    protected OnEndCallBackModalImportarDados(): void;
    protected OnEndCallBackModalFarmacia(): void;
    protected OnEndCallBackModalManipulacao(): void;
    protected OnTextBoxPrecoDolarChange(): void;
    protected OnTextBoxMarkupChange(): void;
    protected OnComboBoxEmpresaFornecedorChange(): void;
    protected OnPesquisouFornecedor(s: MouraTextBoxProcura, e: MouraEventArgs): void;
    protected OnTextBoxPrecoCustoChange(): void;
    protected OnTextBoxCodigoBarrasChange(): void;
    private OnRespostaVerProdutoCodigoBarras;
    protected OnTextBoxPrecoVendaChange(): void;
    private AtualizarValoresProduto;
    private AtualizarValorVenda;
    private AtualizarMarkup;
    private AtualizarMargem;
    private CalcularDolar;
    private CorrigirCamposFarmaciaPopular;
    private CorrigirCamposGratuidade;
    protected OnTextBoxQtdeCaixaFarmaciaChange(): void;
    protected OnTextBoxValorMaxAprovadoMS(): void;
    protected OnTextBoxTabelaPrecoChange(): void;
}
declare var c_Produt_Old: C_Produt_Old;
//# sourceMappingURL=C_Produt_Old.d.ts.map