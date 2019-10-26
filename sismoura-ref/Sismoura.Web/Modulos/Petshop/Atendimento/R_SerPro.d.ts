declare class R_SerPro extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly grd: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected LimparCampos(): void;
    PreencherGrade(): void;
    protected ValidarPeriodo(dataInicio: Date, dataFim: Date): boolean;
}
declare const r_SerPro: R_SerPro;
//# sourceMappingURL=R_SerPro.d.ts.map