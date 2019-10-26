declare class R_PC_Exc extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly accCadastro: MouraAccordion;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtFornecedor: MouraTextBoxProcura;
    readonly lstContaCorrente: MouraContaCorrenteLista;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly chkFornecedorInativo: MouraCheckBox;
    readonly grid: MouraGridViewJS;
    OnPageLoad(): void;
    protected PreencherGrade(): void;
    protected LimparCampos(): void;
}
declare const r_PC_Exc: R_PC_Exc;
//# sourceMappingURL=R_PC_Exc.d.ts.map