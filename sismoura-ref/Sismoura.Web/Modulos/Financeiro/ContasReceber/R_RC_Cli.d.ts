declare class R_RC_Cli extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly lstContaCorrente: MouraContaCorrenteLista;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly grid: MouraGridViewJS;
    readonly txtCliente: MouraTextBoxProcura;
    readonly txtNota: MouraTextBoxProcura;
    readonly lblValor: MouraLabel;
    readonly lblLocalCliente: MouraLabel;
    readonly lblLocalCobranca: MouraLabel;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtLocalTrabalho: MouraTextBox;
    readonly txtRG: MouraTextBox;
    readonly txtCPF: MouraTextBox;
    readonly infVenda: MouraInformacoesVenda;
    OnPageLoad(): void;
    Init(): void;
    LimparCampos(): void;
    PreencherGrade(): void;
    private OnProcurouCliente;
    private PreencherInformacoesCliente;
    private OnMudouEmpresa;
    private OnProcurouNota;
    private GetInformacoesNF;
    private OnSelecionouLinha;
    private OnCellPrepared;
    private MudouTipoData;
    private OnClickBotaoLinha;
}
declare const r_RC_Cli: R_RC_Cli;
//# sourceMappingURL=R_RC_Cli.d.ts.map