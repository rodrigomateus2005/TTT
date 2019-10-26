declare class R_RC_Imp extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly infVenda: MouraInformacoesVenda;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly lstContaCorrente: MouraContaCorrenteLista;
    readonly lstPosicaoTitulos: MouraCheckBoxList;
    OnPageLoad(): void;
    Init(): void;
    private OnSelecionouLinha;
    private OnClickBotaDetalhe;
    private OnEmpresaChenged;
    private PreencherContasCorrente;
    LimparCampos(): void;
    protected PreencherGrade(): void;
}
declare const r_RC_Imp: R_RC_Imp;
//# sourceMappingURL=R_RC_Imp.d.ts.map