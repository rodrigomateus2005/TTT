declare class R_OS extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grdAnalitico: MouraGridViewJS;
    readonly accCadastro: MouraAccordion;
    readonly tabModal: MouraTabPanel;
    readonly grdProdutos: MouraGridViewJS;
    readonly grdServicos: MouraGridViewJS;
    readonly txtCodigoCliente: MouraTextBoxProcura;
    readonly txtNomeCliente: MouraTextBox;
    readonly grdSintetico: MouraGridViewJS;
    readonly txtCNPJ: MouraTextBoxCPF;
    readonly txtCPF: MouraTextBoxCPF;
    readonly tab: MouraTabPanel;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly mdDetalhes: MouraModal;
    readonly btnDetalhe: MouraButton;
    Carregamento: any;
    OnPageLoad(): void;
    Init(): void;
    OnMudouNomeCliente(): void;
    protected BloquearCampos(): void;
    OnClicouDetalhe(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnClientePesquisou(): void;
    LimparCampos(): void;
    PreencherGrade(): void;
}
declare const r_OS: R_OS;
//# sourceMappingURL=R_OS.d.ts.map