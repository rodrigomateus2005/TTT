declare class R_ComDMS extends MouraPageRelacaoAngular {
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
declare var r_ComDMS: R_ComDMS;
//# sourceMappingURL=R_ComDMS.d.ts.map