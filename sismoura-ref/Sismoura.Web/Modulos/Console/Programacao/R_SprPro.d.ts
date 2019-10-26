declare class R_SprPro extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly grid: MouraGridViewJS;
    readonly grdSprint: MouraGridViewJS;
    readonly grdProgramadores: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected PreencherGrade(): void;
    protected LimparCampos(): void;
    protected OnEditouItemGrade(s: any, e: any): void;
    protected OnGridCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
}
declare var r_SprPro: R_SprPro;
//# sourceMappingURL=R_SprPro.d.ts.map