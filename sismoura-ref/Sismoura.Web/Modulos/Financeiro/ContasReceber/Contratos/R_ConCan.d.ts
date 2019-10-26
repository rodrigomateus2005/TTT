declare class R_ConCan extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly chkAgruparData: MouraCheckBox;
    readonly chkAgruparMotivo: MouraCheckBox;
    OnPageLoad(): void;
    Init(): void;
    private OnCheckedChanged_Data;
    private OnCheckedChanged_Motivo;
    LimparCampos(): void;
    protected PreencherGrade(): void;
}
declare const r_ConCan: R_ConCan;
//# sourceMappingURL=R_ConCan.d.ts.map