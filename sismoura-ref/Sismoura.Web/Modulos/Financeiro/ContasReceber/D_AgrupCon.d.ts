declare class D_AgrupCon extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly btnDesfazer: MouraButton;
    readonly grid: MouraGridViewJS;
    readonly txtCodReceber: MouraTextBoxProcura;
    OnPageLoad(): void;
    Init(): void;
    LimparCampos(): void;
    PreencherGrade(): void;
    private CellPrepared;
    private OnClickDesfazer;
    private DesfazerAgrupamento;
    private OnSelecionouLinha;
    private OnProcurouCodReceber;
}
declare const d_AgrupCon: D_AgrupCon;
//# sourceMappingURL=D_AgrupCon.d.ts.map