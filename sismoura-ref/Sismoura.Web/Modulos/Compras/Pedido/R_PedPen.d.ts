declare class R_PedPen extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly gridDiscriminada: MouraGridViewJS;
    readonly gridAgrupada: MouraGridViewJS;
    readonly mdPedido: MouraModal;
    readonly dtItens: MouraGridViewJS;
    readonly cboSituacao: MouraComboBox;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly chkPendenteEntrega: MouraCheckBox;
    readonly chkPendente: MouraCheckBox;
    readonly chkAprovado: MouraCheckBox;
    readonly chkAprovadoEntrada: MouraCheckBox;
    readonly btnFechar: MouraButton;
    readonly AbaDiscriminada: MouraTabPage;
    OnPageLoad(): void;
    Init(): void;
    private OnSelecionouLinha;
    private OnClickLinha;
    private OnClickFechar;
    private OnAprovadoChanged;
    private OnPendenteChanged;
    LimparCampos(): void;
    protected PreencherGrade(): void;
    private PreencherGridAgrupada;
    private PreencherGridDiscriminada;
}
declare const r_PedPen: R_PedPen;
//# sourceMappingURL=R_PedPen.d.ts.map