declare class R_FluxoD extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly lstEmpresa: MouraListBoxEmpresa;
    OnPageLoad(): void;
    Init(): void;
    PreencherGrade(): void;
    LimparCampos(): void;
    protected ConfigurarGrade(): void;
    private OnCellPrepared;
    ValidarCamposObrigatorios(): boolean;
    private ValidarDatas;
}
declare const r_FluxoD: R_FluxoD;
//# sourceMappingURL=R_FluxoD.d.ts.map