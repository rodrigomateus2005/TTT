declare class C_Deposi extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly GridDepositados: MouraGridViewJS;
    readonly accCadastro: MouraAccordion;
    readonly chkNaoGerarLancamento: MouraCheckBox;
    readonly cboContaCorrente: MouraContaCorrenteCombo;
    readonly txtTipoLancamentoBaixa: MouraTextBoxProcuraConfiguracaoContabil;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly txtContaContabil: MouraTextBoxProcura;
    readonly btnDepositar: MouraButton;
    OnPageLoad(): void;
    Init(): void;
    PreencherGrade(): void;
    LimparCampos(): void;
    private ClickBotaoDepositar;
    private OnSelecionouMsgBox;
    private DepositarCheques;
    private GetValoresRowsSelecionadas;
    private ProcurouTipoLancamentoBaixa;
    private SelecionouContaCorrente;
    private SelecionouEmpresa;
    private Grid_SelecionouLinha;
}
declare const c_Deposi: C_Deposi;
//# sourceMappingURL=C_Deposi.d.ts.map