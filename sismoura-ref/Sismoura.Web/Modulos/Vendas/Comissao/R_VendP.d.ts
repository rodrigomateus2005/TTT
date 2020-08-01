declare class R_VendP extends MouraPageRelacaoAngular {
    readonly gridVenda: MouraGridViewJS;
    readonly gridGrupo: MouraGridViewJS;
    readonly gridVendedor: MouraGridViewJS;
    readonly gridFornecedor: MouraGridViewJS;
    readonly gridFaixa: MouraGridViewJS;
    readonly AccordionFiltros: MouraAccordion;
    readonly txtVendedor: MouraTextBoxProcura;
    readonly txtComissao: MouraTextBox;
    readonly lstCalcular: MouraRadioButtonList;
    readonly lstTipo: MouraRadioButtonList;
    readonly chkConsid_Desc_Baixa: MouraCheckBox;
    readonly chkConsid_Acresc_Baixa: MouraCheckBox;
    readonly lblValorTotal: MouraLabel;
    readonly lblTrocas: MouraLabel;
    readonly lblAcrescimo: MouraLabel;
    readonly lblTotalItem: MouraLabel;
    readonly lblTotalVolume: MouraLabel;
    readonly lblTotalVendedor: MouraLabel;
    readonly lblDesconto: MouraLabel;
    readonly lblTotalFinal: MouraLabel;
    readonly lblComissao: MouraLabel;
    readonly lblComissaoPaga: MouraLabel;
    readonly lblMsgVendedor: MouraLabel;
    readonly cboPdv: MouraComboBoxPDV;
    readonly txtData: MouraTextBoxData;
    readonly btnPagar: MouraButton;
    readonly agpPagamento: MouraAgrupamento;
    private listaCodVenda;
    private listaPagamentoVenda;
    private listaPagamentoVendedor;
    private listaPagamentoGrupo;
    private listaPagamentoFornecedor;
    OnPageLoad(): void;
    Init(): void;
    PreencherGrade(): void;
    MostrarCampos(): void;
    LimparCamposTipo(): void;
    MostrarCamposTipo(): void;
    PreencherGrid(): boolean;
    protected OnAbrirTela(e: MsgBoxResultEventArgs): boolean;
    LimparCampos(): void;
    PagamentoComissao(): void;
}
declare const r_VendP: R_VendP;
//# sourceMappingURL=R_VendP.d.ts.map