declare class R_C_Dia extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtCombustivel: MouraTextBoxProcura;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly lstTanque: MouraCheckBoxList;
    readonly grdRelacaoComprasPeriodo: MouraGridViewJS;
    readonly accCadastro: MouraAccordion;
    OnPageLoad(): void;
    protected Init(): void;
    protected PreencherGrade(): void;
    protected LimparCampos(): void;
}
declare const r_C_Dia: R_C_Dia;
//# sourceMappingURL=R_C_Dia.d.ts.map