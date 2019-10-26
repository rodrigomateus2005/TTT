declare class R_Conv extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly Grid: MouraGridViewJS;
    Entity: any;
    OnPageLoad(): void;
    Init(): void;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
    protected CellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
}
declare const r_Conv: R_Conv;
//# sourceMappingURL=R_Conv.d.ts.map