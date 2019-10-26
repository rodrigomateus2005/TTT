declare class C_IntCad extends MouraPageCadastro<SiSMoura.Core.Entity.Animais_Internacao> {
    readonly txtServico: MouraTextBoxProcura;
    readonly txtProduto: MouraTextBoxProcura;
    readonly txtValorUnitario: MouraTextBox;
    readonly txtValorUnitarioProduto: MouraTextBox;
    readonly txtQuantidade: MouraTextBox;
    readonly txtQuantidadeProduto: MouraTextBox;
    readonly txtDesconto: MouraTextBox;
    readonly txtDescontoProduto: MouraTextBox;
    readonly txtDescontoPorcent: MouraTextBox;
    readonly txtDescontoPorcentProduto: MouraTextBox;
    readonly lblTotal: MouraTextBox;
    readonly lblTotalProduto: MouraTextBox;
    readonly cboListaPreco: MouraComboBox;
    readonly cboListaPrecoProduto: MouraComboBox;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    private listaPrecos;
    private listaPrecosProduto;
    protected Init(): void;
    protected OnCboListaPreco_comboBoxChange(s: DevExpress.Web.Scripts.ASPxClientComboBox, e: DevExpress.Web.Scripts.ASPxClientEventArgs): void;
    protected OnCboListaPrecoProduto_comboBoxChange(s: DevExpress.Web.Scripts.ASPxClientComboBox, e: DevExpress.Web.Scripts.ASPxClientEventArgs): void;
    protected OnCboListaPrecoGotFocus(s: any, e: any): void;
    protected OnCboListaPrecoProdutoGotFocus(s: any, e: any): void;
    protected OnTxtServicoProcurou(s: MouraTextBoxProcura, e: MouraEventArgs): void;
    protected OnTxtProdutoProcurou(s: MouraTextBoxProcura, e: MouraEventArgs): void;
    protected CalcularTotalProduto(): void;
    protected CalcularTotalServico(): void;
    protected OnTxtDescontoProdutoChange(): void;
    protected OnTxtDescontoServicoChange(): void;
    protected OnTxtDescontoPorcentProdutoChange(): void;
    protected OnTxtDescontoPorcentServicoChange(): void;
}
declare var c_IntCad: C_IntCad;
//# sourceMappingURL=C_IntCad.d.ts.map