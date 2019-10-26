declare class R_EquiObr extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtCLiente: MouraTextBoxProcura;
    readonly txtProduto: MouraTextBoxProcura;
    readonly txtObra: MouraTextBoxProcura;
    readonly grid: MouraGridViewJSEditavel;
    readonly accRelacao: MouraAccordion;
    OnPageLoad(): void;
    protected LimparCampos(): void;
    protected PreencherGrade(): boolean;
    protected OnGridClickBotaoLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
}
declare var r_EquiObr: R_EquiObr;
//# sourceMappingURL=R_EquiObr.d.ts.map