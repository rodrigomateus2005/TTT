declare class C_REstor_Angular extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly accCadastro: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly chkExcluirResiduos: MouraCheckBox;
    readonly chkExcluirCheques: MouraCheckBox;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly btnEstornar: MouraButton;
    OnPageLoad(): void;
    LimparCampos(): void;
    private LimpaContaSelecionada;
    Init(): void;
    PreencherGrade(): void;
    private ClickBotaoEstornar;
    private OnSelecionouMsgBox;
    private Estornar;
    private SelecionouLinha;
    private PreencherContaEstorno;
}
declare const c_REstor_Angular: C_REstor_Angular;
//# sourceMappingURL=C_REstor_Angular.d.ts.map