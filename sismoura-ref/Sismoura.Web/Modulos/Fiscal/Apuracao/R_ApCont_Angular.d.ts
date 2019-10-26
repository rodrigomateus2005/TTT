declare class R_ApCont_Angular extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtPeriodo: MouraTextBoxMesAno;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly grid: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected PreencherGrade(): void;
    protected LimparCampos(): void;
}
declare var r_ApCont_Angular: R_ApCont_Angular;
//# sourceMappingURL=R_ApCont_Angular.d.ts.map