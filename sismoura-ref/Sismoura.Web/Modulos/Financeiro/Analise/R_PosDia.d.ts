declare class R_PosDia extends MouraPageRelacaoAngular {
    readonly grid: MouraGridViewJS;
    readonly AccordionFiltros: MouraAccordion;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    OnPageLoad(): void;
    Init(): void;
    PreencherGrade(): void;
    PreencherGrid(): boolean;
    LimparCampos(): void;
    OnGridCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    OnGridColumns(): void;
}
declare const r_PosDia: R_PosDia;
//# sourceMappingURL=R_PosDia.d.ts.map