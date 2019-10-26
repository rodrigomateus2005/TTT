declare class R_RC_Ven extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly infVenda: MouraInformacoesVenda;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly lstPosicaoTitulos: MouraCheckBoxList;
    readonly lstContaCorrente: MouraContaCorrenteLista;
    readonly optTipoVendedor: MouraRadioButtonList;
    OnPageLoad(): void;
    Init(): void;
    private OnEmpresaChanged;
    private OnSelecionouLinha;
    private OnClickBotaDetalhe;
    private OnCellPrepared;
    private PreencherContasCorrente;
    LimparCampos(): void;
    protected PreencherGrade(): void;
}
declare const r_RC_Ven: R_RC_Ven;
//# sourceMappingURL=R_RC_Ven.d.ts.map