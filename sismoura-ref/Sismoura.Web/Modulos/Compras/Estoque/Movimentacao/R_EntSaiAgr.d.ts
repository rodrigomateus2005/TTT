declare class R_EntSaiAgr extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly gridAgrupada: MouraGridViewJS;
    readonly cboDepositoAgrupada: MouraComboBox;
    readonly accCadastro: MouraAccordion;
    readonly cboMovimentoAgrupada: MouraComboBox;
    readonly cboMotivoAgrupada: MouraComboBox;
    readonly txtMarcaAgrupada: MouraTextBoxProcura;
    OnPageLoad(): void;
    Init(): void;
    PreencherGrade(): void;
    LimparCampos(): void;
    private SelectedIndexChanged;
    protected CellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected PreencherComboDeposito(empresaString: string): void;
}
declare const r_EntSaiAgr: R_EntSaiAgr;
//# sourceMappingURL=R_EntSaiAgr.d.ts.map