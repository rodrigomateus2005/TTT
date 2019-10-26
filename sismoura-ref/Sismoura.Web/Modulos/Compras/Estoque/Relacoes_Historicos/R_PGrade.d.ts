declare class R_PGrade extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly gridColuna: MouraGridViewJS;
    readonly txtModelo: MouraTextBoxProcura;
    readonly accRelacao: MouraTabPanel;
    readonly txtReferencia: MouraTextBoxProcura;
    readonly chkDeposito: MouraCheckBoxList;
    readonly cboAgrupar: MouraComboBox;
    Init(): void;
    OnPageLoad(): void;
    LimparCampos(): void;
    protected ConfigurarGrade(grid: MouraGridViewJS): void;
    private LimparColunas;
    private LimparColunasGridLinha;
    private LimparColunasGridColuna;
    protected PreencherGrade(): void;
    private PreencherGridLinha;
    private PreencherGridColunas;
    private OnGridCellPrepared;
}
declare const r_PGrade: R_PGrade;
//# sourceMappingURL=R_PGrade.d.ts.map