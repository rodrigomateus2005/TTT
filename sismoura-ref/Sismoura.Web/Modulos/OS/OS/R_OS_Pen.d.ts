declare class R_OS_Pen extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly txtCodigoCliente: MouraTextBoxProcura;
    readonly txtNomeCliente: MouraTextBox;
    readonly accCadastro: MouraAccordion;
    OnPageLoad(): void;
    Init(): void;
    protected BloquearCampos(): void;
    PreencherGrade(): void;
    LimparCampos(): void;
    OnClientePesquisou(): void;
    OnMudouNomeCliente(): void;
}
declare const r_OS_Pen: R_OS_Pen;
//# sourceMappingURL=R_OS_Pen.d.ts.map