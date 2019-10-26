declare class R_SmartM extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly accCadastro: MouraAccordion;
    readonly cboAno: MouraComboBox;
    readonly txtUsuario: MouraTextBoxProcura;
    OnPageLoad(): void;
    protected Init(): void;
    LimparCampos(): void;
    PreencherGrade(): void;
    protected ClickBotaoLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected ProcurouUsuario(s: any, e: MouraTextBoxProcuraPesquisandoEventArgs): void;
    protected PreencherComboAno(itens: number[]): void;
}
declare const r_SmartM: R_SmartM;
//# sourceMappingURL=R_SmartM.d.ts.map