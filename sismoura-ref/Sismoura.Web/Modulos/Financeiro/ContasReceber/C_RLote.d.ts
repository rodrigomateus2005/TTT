declare class C_RLote extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly Baixa: MouraBaixaReceberJS;
    readonly cboContaCorrente: MouraContaCorrenteCombo;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly gridBaixa: MouraGridViewJS;
    readonly txtBordero: MouraTextBoxProcura;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtClienteNF: MouraTextBox;
    readonly txtNotaFiscal: MouraTextBox;
    readonly txtValorNF: MouraTextBox;
    readonly txtDataEmissaoNF: MouraTextBox;
    readonly txtDesconto_P: MouraTextBox;
    readonly txtDesconto_R: MouraTextBox;
    readonly btnBaixar: MouraButton;
    readonly lblSelecionado: MouraLabel;
    readonly txtMulta: MouraTextBox;
    OnPageLoad(): void;
    Init(): void;
    LimparCampos(): void;
    private LimparCamposBaixa;
    private CorrigirCamposDesconto;
    private LimparFiltros;
    PreencherGrade(): void;
    private CorrigirFiltros;
    private MudouTipoDesconto;
    private MudouTipo;
    private PreencherComboContaCorrente;
    private OnEmpresaChanged;
    private OnClickBaixar;
    protected OnCarregouFuncaoBloquearBaixaReceberLote(retorno: MouraFuncoesAdministrativasRetorno): void;
    private VerificaBloqueioContaVencida;
    private BaixarContas;
    private GetDadosBaixarContas;
    private OnLostFocusNotaFiscal;
    private PreencherInformacoesNF;
    private OnBaixouContas;
    private SelecionouLinha;
    private CellPrepared;
    private OnTextChangedTextMulta;
    private ObterPorcentagemMulta;
    private CalularPorcentagemMulta;
}
declare const c_RLote: C_RLote;
//# sourceMappingURL=C_RLote.d.ts.map