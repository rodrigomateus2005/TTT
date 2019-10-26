declare class R_EntParHisPro extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtOrcamento: MouraTextBox;
    readonly txtVenda: MouraTextBoxProcura;
    readonly grid: MouraGridViewJS;
    OnPageLoad(): void;
    Init(): void;
    LimparCampos(): void;
    PreencherGrade(): void;
    private MudouTipo;
    private OnCellPrepared;
}
declare const r_EntParHisPro: R_EntParHisPro;
//# sourceMappingURL=R_EntParHisPro.d.ts.map