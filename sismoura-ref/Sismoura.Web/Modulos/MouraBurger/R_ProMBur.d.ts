declare class R_ProMBur extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    Entity: any;
    Resultados: any[];
    readonly lstEmpresa: MouraListBoxEmpresa;
    protected Init(): void;
    OnPageLoad(): void;
    protected LimparCampos(): void;
    protected ValidarCampos(): boolean;
    protected PreencherGrade(): void;
}
declare var r_ProMBur: R_ProMBur;
//# sourceMappingURL=R_ProMBur.d.ts.map