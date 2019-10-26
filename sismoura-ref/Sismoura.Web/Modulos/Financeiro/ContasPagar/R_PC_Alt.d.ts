declare class R_PC_Alt extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly accCadastro: MouraAccordion;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtFornecedor: MouraTextBoxProcura;
    readonly lstContaCorrente: MouraContaCorrenteLista;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly grid: MouraGridViewJS;
    OnPageLoad(): void;
    protected Init(): void;
    protected PreencherGrade(): void;
    private ClickBotao;
    protected LimparCampos(): void;
}
declare const r_PC_Alt: R_PC_Alt;
//# sourceMappingURL=R_PC_Alt.d.ts.map