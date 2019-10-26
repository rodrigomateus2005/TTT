declare class G_Faturamento extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly btnGerar: MouraButton;
    readonly btnGerarCR: MouraButton;
    readonly grid: MouraGridViewJS;
    readonly btnImprimir: MouraButton;
    readonly mdImpressao: MouraModal;
    readonly accImpressao: MouraAccordion;
    readonly gridImprimir: MouraGridViewJS;
    readonly btnLimparImprimir: MouraButton;
    readonly btnGerarImprimir: MouraButton;
    readonly btnImprimirConta: MouraButton;
    Parcelas: SiSMoura.Core.Entity.ParcelaAgruparContasReceber[];
    Agrupar: any;
    Imprimir: any;
    readonly mdAgrupar: MouraModal;
    readonly cboContaCorrente: MouraContaCorrenteCombo;
    readonly btnCancelar: MouraButton;
    readonly btnAgrupar: MouraButton;
    readonly txtContaContabil: MouraTextBoxProcura;
    OnPageLoad(): void;
    Init(): void;
    LimparCampos(): void;
    private LimparFiltros;
    private LimparCamposModalImprimir;
    private LimparCamposModal;
    PreencherGrade(): void;
    private OnClickCancelar;
    private OnClickGerarCR;
    private ValidarCamposGravar;
    private ValidarCamposParcelas;
    private OnSelecionouLinha;
    private OnClickGerar;
    private GerarParcelas;
    private OnClickAgrupar;
    private AgruparContasReceber;
    private ImprimirFaturamento;
    private OnClickImprimir;
    private OnClickGerarImprimir;
    private PreencherGradeImprimir;
    private OnClickImprimirRelacao;
    private ImprimirFatAgrupado;
    private OnSelectionContaChanged;
    private OnAntesProcurarContaContabil;
    private OnDepoisProcurouConta;
    private VerificarContaContabilEmpresa;
    private VerificarContaContabil;
}
declare const g_Faturamento: G_Faturamento;
//# sourceMappingURL=G_Faturamento.d.ts.map