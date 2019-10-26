declare class R_IndChe extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly txtProfissional: MouraTextBoxProcura;
    readonly chkApenasParaProfissional: MouraCheckBox;
    readonly grd: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected LimparCampos(): void;
    PreencherGrade(): void;
    protected ValidarPeriodo(dataInicio: Date, dataFim: Date): boolean;
}
declare const r_IndChe: R_IndChe;
//# sourceMappingURL=R_IndChe.d.ts.map