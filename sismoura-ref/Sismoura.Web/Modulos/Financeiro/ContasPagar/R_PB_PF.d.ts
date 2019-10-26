declare class R_PB_PF extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly lstContaCorrente: MouraContaCorrenteLista;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly grid: MouraGridViewJS;
    readonly txtNumeroCheque: MouraTextBox;
    readonly cboTipoEmpresa: MouraComboBox;
    OnPageLoad(): void;
    Init(): void;
    LimparCampos(): void;
    PreencherGrade(): void;
}
declare const r_PB_PF: R_PB_PF;
//# sourceMappingURL=R_PB_PF.d.ts.map