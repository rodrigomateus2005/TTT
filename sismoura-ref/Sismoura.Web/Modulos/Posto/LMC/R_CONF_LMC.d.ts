declare class R_CONF_LMC extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly Grid: MouraGridViewJS;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly lstCombustivel: MouraCheckBoxList;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    OnPageLoad(): void;
    protected Init(): void;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
}
declare const r_CONF_LMC: R_CONF_LMC;
//# sourceMappingURL=R_CONF_LMC.d.ts.map