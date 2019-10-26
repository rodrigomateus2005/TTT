declare class R_TranRe extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly cboMovimento: MouraComboBox;
    readonly txtProduto: MouraTextBox;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly lstEmpresaOrigem: MouraListBoxEmpresa;
    readonly lstEmpresaDestino: MouraListBoxEmpresa;
    readonly lstDepositoOrigem: MouraCheckBoxList;
    readonly lstDepositoDestino: MouraCheckBoxList;
    readonly mdItensTransf: MouraModal;
    readonly lblMovimentacao: MouraLabel;
    readonly lblDataMovimentacao: MouraLabel;
    readonly grdItens: MouraGridViewJS;
    readonly agpLegenda1: MouraAgrupamento;
    readonly agpLegenda2: MouraAgrupamento;
    readonly agpLegenda3: MouraAgrupamento;
    readonly agpDivergencia: MouraAgrupamento;
    protected Init(): void;
    OnPageLoad(): void;
    protected LimparCampos(): void;
    protected LimparCamposMdItens(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PintarGridMovimentacao(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected PintarGridItensMovimentacao(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected ClicouEmpOrigem(e: MouraEventHandler): void;
    protected ClicouEmpDestino(e: MouraEventHandler): void;
    protected PreencherGrade(): void;
}
declare const r_TranRe: R_TranRe;
//# sourceMappingURL=R_TranRe.d.ts.map