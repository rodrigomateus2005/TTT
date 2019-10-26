declare class R_RC_Alt extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly lstContaCorrente: MouraContaCorrenteLista;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly grid: MouraGridViewJS;
    readonly infVenda: MouraInformacoesVenda;
    OnPageLoad(): void;
    Init(): void;
    LimparCampos(): void;
    PreencherGrade(): void;
    private OnSelecionouLinha;
    private OnClickBotaoLinha;
    private OnCellPrepared;
}
declare const r_RC_Alt: R_RC_Alt;
//# sourceMappingURL=R_RC_Alt.d.ts.map