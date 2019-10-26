declare class R_RC_PPA extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly lstPosicaoTitulo: MouraCheckBoxList;
    readonly lstContaCorrente: MouraContaCorrenteLista;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly grid: MouraGridViewJS;
    OnPageLoad(): void;
    Init(): void;
    LimparCampos(): void;
    PreencherGrade(): void;
    private OnMudouEmpresa;
}
declare const r_RC_PPA: R_RC_PPA;
//# sourceMappingURL=R_RC_PPA.d.ts.map