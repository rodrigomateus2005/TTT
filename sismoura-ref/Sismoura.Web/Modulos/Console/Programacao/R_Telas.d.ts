declare class R_Telas extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly cboIsConverter: MouraComboBox;
    readonly cboIsConvertida: MouraComboBox;
    readonly cboIsAngular: MouraComboBox;
    readonly cboModulo: MouraComboBox;
    readonly txtTitulo: MouraTextBox;
    readonly grid: MouraGridViewJS;
    readonly mdTela: MouraModal;
    readonly lblTela: MouraLabel;
    readonly lblTitulo: MouraLabel;
    readonly lblModulo: MouraLabel;
    readonly lblConverter: MouraLabel;
    readonly lblIsConvertida: MouraLabel;
    readonly lblIsAngular: MouraLabel;
    readonly lblObservacao: MouraLabel;
    readonly lblAtivConversao: MouraLabel;
    readonly lblSituacaoAtivConversao: MouraLabel;
    readonly lblPrioridadeConversao: MouraLabel;
    readonly lblHorasConversao: MouraLabel;
    readonly mdCadAtividade: MouraModal;
    readonly txtDescricaoAtividade: MouraTextBox;
    readonly cboModuloAtividade: MouraComboBox;
    readonly btnSalvarAtividade: MouraButton;
    readonly btnCancelarAtividade: MouraButton;
    readonly chkDesconsiderarBaixadasDev: MouraCheckBox;
    protected Init(): void;
    OnPageLoad(): void;
    protected PreencherGrade(): void;
    protected LimparCampos(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected codTela: number;
    protected OnClicouBotaoLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    private GravarAtividadeConversao;
    protected OnClickCancelarAtividade(s: any, e: MouraClickEventArgs): void;
    protected OnClickSalvarAtividade(s: any, e: MouraClickEventArgs): void;
}
declare var r_Telas: R_Telas;
//# sourceMappingURL=R_Telas.d.ts.map