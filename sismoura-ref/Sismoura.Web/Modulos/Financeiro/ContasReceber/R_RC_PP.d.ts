declare class R_RC_PP extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly lstPosicoesTitulos: MouraCheckBoxList;
    readonly lstContaCorrente: MouraContaCorrenteLista;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly chkSemConvenio: MouraCheckBox;
    readonly grid: MouraGridViewJS;
    readonly infVenda: MouraInformacoesVenda;
    OnPageLoad(): void;
    Init(): void;
    LimparCampos(): void;
    PreencherGrade(): void;
    private MudouAgrupamento;
    private OnMudouEmpresa;
    private OnSelecionouLinha;
    private OnClickBotaoLinha;
    private OnCellPrepared;
    private MudouNotaFiscal;
    private GetInformacoesNF;
}
declare const r_RC_PP: R_RC_PP;
//# sourceMappingURL=R_RC_PP.d.ts.map