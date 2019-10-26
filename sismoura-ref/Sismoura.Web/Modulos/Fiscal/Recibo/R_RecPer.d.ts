declare class R_RecPer extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly chkPagamento: MouraCheckBox;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGrade(): void;
    protected LimparCampos(): void;
}
declare var r_RecPer: R_RecPer;
//# sourceMappingURL=R_RecPer.d.ts.map