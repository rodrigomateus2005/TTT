declare class R_ConCeg extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtPedido: MouraTextBoxProcura;
    readonly grid: MouraGridViewJS;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtFornecedor: MouraTextBoxProcura;
    readonly gridConsulta: MouraGridViewJS;
    readonly btnConsulta: MouraButton;
    readonly mdConsulta: MouraModal;
    readonly btnGerar: MouraButton;
    readonly btnImprimir: MouraButton;
    OnPageLoad(): void;
    Init(): void;
    protected LimparCampos(): void;
    private LimparCamposModal;
    PreencherGrade(): void;
    private OnDepoisBuscouPedido;
    private OnClickConsulta;
    private OnSelecionouItem;
    private OnClickGerarConsulta;
}
declare const r_ConCeg: R_ConCeg;
//# sourceMappingURL=R_ConCeg.d.ts.map