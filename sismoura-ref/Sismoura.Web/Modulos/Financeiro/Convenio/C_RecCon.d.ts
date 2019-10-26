declare class C_RecCon extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly btnGerarF: MouraButton;
    readonly gridResumida: MouraGridViewJS;
    readonly btnImprContFechada: MouraButton;
    readonly btnImprimir: MouraButton;
    readonly txtConvenio: MouraTextBoxProcura;
    private somaColuna;
    private counter;
    OnPageLoad(): void;
    Init(): void;
    LimparCampos(): void;
    PreencherGrade(): void;
    private MudouDiscriminada;
    private acumulado;
    private OnCellPrepared;
    private CalculateCustomSummary;
    private SelecionouLinha;
    private OnClickGerarFechamento;
    private GerarFechamento;
    private OnClickImprimirFechada;
    private OnClickImprimir;
    private OnProcurouConvenio;
}
declare const c_RecCon: C_RecCon;
//# sourceMappingURL=C_RecCon.d.ts.map