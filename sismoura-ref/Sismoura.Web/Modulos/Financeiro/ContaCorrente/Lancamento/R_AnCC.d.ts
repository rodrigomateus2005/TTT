declare class R_AnCC extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly lstContaCorrente: MouraContaCorrenteLista;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly lstContaContabil: MouraCheckBoxList;
    readonly chkApenasComMovimentacao: MouraCheckBox;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    OnPageLoad(): void;
    Init(): void;
    PreencherGrade(): void;
    LimparCampos(): void;
    private OnCellPrepared;
}
declare const r_AnCC: R_AnCC;
//# sourceMappingURL=R_AnCC.d.ts.map