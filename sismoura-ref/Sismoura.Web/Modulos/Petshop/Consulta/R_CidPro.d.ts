declare class R_CidPro extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly Grid: MouraGridViewJS;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly accFiltro: MouraAccordion;
    readonly txtAssunto: MouraTextBoxProcura;
    protected LimparCampos(): void;
    OnPageLoad(): void;
    protected Init(): void;
    PreencherGrade(): void;
    GerarGrade(): void;
}
declare var r_CidPro: R_CidPro;
//# sourceMappingURL=R_CidPro.d.ts.map