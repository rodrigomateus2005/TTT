declare class R_MovPro extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly chkSomenteComMovimentacao: MouraCheckBox;
    readonly accCadastro: MouraAccordion;
    readonly cboDeposito: MouraComboBox;
    readonly lstGrupo: MouraCheckBoxList;
    readonly cboLote: MouraComboBox;
    readonly txtProduto: MouraTextBoxProcura;
    OnPageLoad(): void;
    Init(): void;
    PreencherGrade(): void;
    LimparCampos(): void;
    ClickVisualizar(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnDepoisPesquisou(): void;
    PreencherComboLote(produto: number): void;
    private PreparaData;
}
declare const r_MovPro: R_MovPro;
//# sourceMappingURL=R_MovPro.d.ts.map