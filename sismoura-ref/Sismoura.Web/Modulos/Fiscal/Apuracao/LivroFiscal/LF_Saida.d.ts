declare enum Arquivo {
    LIVRO_FISCAL = "Livro_Fiscal_Saida",
    RESUMO_UF = "Livro_Fiscal_Saida_UF",
    RESUMO_CFOP = "Livro_Fiscal_Saida_CFOP"
}
declare class LF_Saida extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly gridLivroSaida: MouraGridViewJS;
    readonly gridResumoUF: MouraGridViewJS;
    readonly gridResumoCFOP: MouraGridViewJS;
    readonly btnImprimir: MouraButton;
    readonly tabResultado: MouraTabPanel;
    OnPageLoad(): void;
    protected Init(): void;
    protected PreencherGrade(): void;
    private Imprimir;
    protected LimparCampos(): void;
    protected OnGerouLinhaLivroFiscal(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
}
declare const lF_Saida: LF_Saida;
//# sourceMappingURL=LF_Saida.d.ts.map