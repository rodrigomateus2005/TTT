declare class R_FluxoS extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly lstEmpresa: MouraListBoxEmpresa;
    OnPageLoad(): void;
    Init(): void;
    PreencherGrade(): void;
    LimparCampos(): void;
    protected ConfigurarGrade(): void;
    private OnCellPrepared;
}
declare const r_FluxoS: R_FluxoS;
//# sourceMappingURL=R_FluxoS.d.ts.map