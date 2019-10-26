declare class R_EntraAniAdoc extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly cboSituacaoEntrada: MouraComboBox;
    readonly cboSituacaoPetsEntrada: MouraComboBox;
    Init(): void;
    private OnClickouVisualizarGrid;
    OnPageLoad(): void;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
    private GetDadosRelacao;
}
declare var r_EntraAniAdoc: R_EntraAniAdoc;
//# sourceMappingURL=R_EntraAniAdoc.d.ts.map