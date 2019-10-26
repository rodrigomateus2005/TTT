declare class R_RC_Exc extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly lstContaCorrente: MouraContaCorrenteLista;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly grid: MouraGridViewJS;
    readonly infVenda: MouraInformacoesVenda;
    OnPageLoad(): void;
    Init(): void;
    private OnClickBotaDetalhe;
    private OnCellPrepared;
    LimparCampos(): void;
    PreencherGrade(): void;
    private OnEmpresaChanged;
    private PreencherContasCorrente;
}
declare const r_RC_Exc: R_RC_Exc;
//# sourceMappingURL=R_RC_Exc.d.ts.map