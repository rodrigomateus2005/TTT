declare class R_PC_PP extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly lstContaCorrente: MouraContaCorrenteLista;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly gridAnaliticaContasPagarPeriodo: MouraGridViewJS;
    readonly gridSintetica: MouraGridViewJS;
    readonly tabResultado: MouraTabPanel;
    OnPageLoad(): void;
    Init(): void;
    PreencherGrade(): void;
    LimparCampos(): void;
    private OnCellPrepared;
    protected ClickBotaoAnalitica(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    private PreencherGradeAnalitica;
    private PreencherGradeSintetica;
}
declare const r_PC_PP: R_PC_PP;
//# sourceMappingURL=R_PC_PP.d.ts.map