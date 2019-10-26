declare class R_SerFil extends MouraPageRelacaoAngular {
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
declare const r_SerFil: R_SerFil;
//# sourceMappingURL=R_SerFil.d.ts.map