declare class R_RHiFin extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly txtCliente: MouraTextBoxProcura;
    readonly txtTotal: MouraTextBox;
    readonly lstEmpresa: MouraListBoxEmpresa;
    OnPageLoad(): void;
    Init(): void;
    PreencherGrade(): void;
    LimparCampos(): void;
    private ClickBotao;
    private Procurou;
    protected RowPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
}
declare const r_RHiFin: R_RHiFin;
//# sourceMappingURL=R_RHiFin.d.ts.map