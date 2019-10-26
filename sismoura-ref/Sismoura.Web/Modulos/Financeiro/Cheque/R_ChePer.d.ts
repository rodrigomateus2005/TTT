declare class R_ChePer_Angular extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    private somaColuna;
    private counter;
    readonly optTipoPeriodo: MouraRadioButtonList;
    readonly txtNumeroCheque: MouraTextBox;
    readonly txtTitular: MouraTextBox;
    readonly cboSituacao: MouraComboBox;
    readonly cboTipoCheque: MouraComboBox;
    readonly cboOrigem: MouraComboBox;
    readonly txtEnviado: MouraTextBox;
    readonly txtCliente: MouraTextBox;
    readonly txtVendedor: MouraTextBox;
    readonly lstContaCorrente: MouraContaCorrenteLista;
    readonly grid: MouraGridViewJS;
    readonly btnAlterarSituacao: MouraButton;
    readonly txtDataLancamento: MouraTextBoxData;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtNovaContaContabil: MouraTextBoxProcura;
    readonly txtNovaSituacao: MouraTextBoxProcura;
    readonly cboNovaContaCorrente: MouraContaCorrenteCombo;
    readonly txtConfiguracaoLancamento: MouraTextBoxProcura;
    readonly txtNovoVencimento: MouraTextBoxData;
    OnPageLoad(): void;
    protected Init(): void;
    protected OnSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnClickBtnAlterarSituacao(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnSelecionouMsgBox(result: MsgBoxResultEventArgs): void;
    protected PreencherGrade(): boolean;
    protected CampoObrigatorio(campo: string): string;
    protected SelectedValuesIn(values: string[]): string;
    protected AlterarSituacoes(): boolean;
    protected LimparCampos(): void;
    protected LimparCamposSalvar(): void;
    private CalculateCustomSummary;
}
declare const r_ChePer_Angular: R_ChePer_Angular;
//# sourceMappingURL=R_ChePer.d.ts.map