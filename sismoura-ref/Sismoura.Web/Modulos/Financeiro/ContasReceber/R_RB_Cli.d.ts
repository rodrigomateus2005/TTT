declare class R_RB_Cli extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly lstContaCorrente: MouraContaCorrenteLista;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly infVenda: MouraInformacoesVenda;
    readonly lstPosicaoTitulos: MouraCheckBoxList;
    OnPageLoad(): void;
    Init(): void;
    LimparCampos(): void;
    PreencherGrade(): void;
    private OnSelecionouLinha;
    private OnClickBotaoLinha;
    private OnMudouEmpresa;
}
declare const r_RB_Cli: R_RB_Cli;
//# sourceMappingURL=R_RB_Cli.d.ts.map