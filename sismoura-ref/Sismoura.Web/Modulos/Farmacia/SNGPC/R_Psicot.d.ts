declare class R_Psicot extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly lstPortaria: MouraCheckBoxList;
    OnPageLoad(): void;
    Init(): void;
    private OnCellPrepared;
    SelecionarTodos(): void;
    LimparCampos(): void;
    protected PreencherGrade(): void;
}
declare const r_Psicot: R_Psicot;
//# sourceMappingURL=R_Psicot.d.ts.map