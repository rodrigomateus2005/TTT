declare class R_O_Kit extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly tab: MouraTabPanel;
    readonly gridDetalhado: MouraGridViewJS;
    readonly gridDetalhadoModal: MouraGridViewJS;
    readonly gridAgrupado: MouraGridViewJS;
    readonly mdDetalhado: MouraModal;
    readonly btnFechar: MouraButton;
    OnPageLoad(): void;
    Init(): void;
    PreencherGrade(): void;
    PreencherGradeDetalhado(): void;
    PreencherGradeAgrupado(): void;
    LimparCampos(): void;
    protected OnSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnbtnFechecharClick(): void;
    private CellPrepared;
    private OnClickBotaoLinha;
    private PreencherGridModal;
}
declare const r_O_Kit: R_O_Kit;
//# sourceMappingURL=R_O_Kit.d.ts.map