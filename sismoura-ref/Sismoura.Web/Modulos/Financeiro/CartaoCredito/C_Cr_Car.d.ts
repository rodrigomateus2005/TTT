declare class C_Cr_Car extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    private somaColuna;
    private counter;
    FiltroModal: any;
    readonly accCadastro: MouraAccordion;
    readonly Grid: MouraGridViewJS;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly lstCartao: MouraCheckBoxList;
    readonly cboCartao: MouraComboBox;
    readonly rblTipoCartao: MouraRadioButtonList;
    readonly mdLancamento: MouraModal;
    readonly cboContaCorrente: MouraContaCorrenteCombo;
    readonly txtContaContabil: MouraTextBoxProcura;
    readonly btnOK: MouraButton;
    readonly cboSituacao: MouraComboBox;
    readonly btnMdOK: MouraButton;
    readonly rblTipo: MouraRadioButtonList;
    OnPageLoad(): void;
    LimparCampos(): void;
    private LimparCamposModal;
    Init(): void;
    PreencherGrade(): void;
    private PreencheListaCartao;
    private lstEmpresa_SelectedIndexChanged;
    private rblTipoCartao_SelectionChanged;
    private validarCamposObrigatoriosModal;
    private GerarLancamentoConfirmado;
    private ConfirmarContas;
    private RowPrepared;
    private cboContaCorrente_SelectedIndexChanged;
    private btnOK_Click;
    private btnMdOK_Click;
    private OnSelecionouMsgBox;
    private CalculateCustomSummary;
    private Grid_SelecionouLinha;
    private GetValoresRowsSelecionadas;
}
declare const c_Cr_Car: C_Cr_Car;
//# sourceMappingURL=C_Cr_Car.d.ts.map