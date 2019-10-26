declare class R_Lan_Bl extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly cboContaCorrente: MouraContaCorrenteCombo;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly btnLiberar: MouraButton;
    OnPageLoad(): void;
    Init(): void;
    LimparCampos(): void;
    PreencherGrade(): void;
    private MudouListarTodos;
    private OnClickLiberar;
    private LiberarLancamento;
    private ValidarLiberacao;
}
declare const r_Lan_Bl: R_Lan_Bl;
//# sourceMappingURL=R_Lan_Bl.d.ts.map