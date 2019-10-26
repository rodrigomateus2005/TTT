declare class R_HisCon extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly agpPeriodo: MouraAgrupamento;
    readonly agpConsignacao: MouraAgrupamento;
    readonly grid: MouraGridViewJS;
    readonly lblData: MouraLabel;
    readonly lblCliente: MouraLabel;
    readonly lblVendedor: MouraLabel;
    readonly lblAjudante: MouraLabel;
    readonly lblUtmConsig: MouraLabel;
    readonly txtMsgRodape: MouraTextBox;
    readonly txtInfoAdicionais: MouraTextBox;
    readonly txtConsignacao: MouraTextBox;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    Init(): void;
    OnPageLoad(): void;
    OnAlterouFiltro(): void;
    PreencherGrade(): void;
    protected PreencherTxts(): void;
    protected PreencherLbls(): void;
    protected VerificaVendasMultiConsig(retorno: any): boolean;
    protected PreenchelblUtmConsig(): void;
    LimparCampos(): void;
}
declare const r_HisCon: R_HisCon;
//# sourceMappingURL=R_HisCon.d.ts.map