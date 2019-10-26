declare class R_Cobran extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly lstContaCorrente: MouraContaCorrenteLista;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly grid: MouraGridViewJS;
    readonly lblTotalContratos: MouraLabel;
    readonly lblTotalClientes: MouraLabel;
    OnPageLoad(): void;
    Init(): void;
    private OnEmpresaChanged;
    private PreencherContasCorrente;
    LimparCampos(): void;
    PreencherGrade(): void;
}
declare const r_Cobran: R_Cobran;
//# sourceMappingURL=R_Cobran.d.ts.map