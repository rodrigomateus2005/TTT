declare class R_AgeAlt extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtUsuarioAutorizou: MouraTextBoxProcura;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly cboCampoAlterado: MouraComboBox;
    readonly grd: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected LimparCampos(): void;
    PreencherGrade(): void;
    protected ValidarPeriodo(dataInicio: Date, dataFim: Date): boolean;
}
declare const r_AgeAlt: R_AgeAlt;
//# sourceMappingURL=R_AgeAlt.d.ts.map