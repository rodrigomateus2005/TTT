declare class R_EntrParc extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly txtOrcamento: MouraTextBox;
    readonly txtVenda: MouraTextBoxProcura;
    readonly lblDescricaoProduto: MouraLabel;
    OnPageLoad(): void;
    Init(): void;
    private MudouTipo;
    private OnDescricaoVenda;
    LimparCampos(): void;
    protected PreencherGrade(): void;
}
declare const r_EntrParc: R_EntrParc;
//# sourceMappingURL=R_EntrParc.d.ts.map