declare class C_Promoc_Antiga extends MouraPageCadastro<SiSMoura.Core.Entity.Produto_Promocao> {
    readonly txtProduto: MouraTextBox;
    readonly txtDesconto: MouraTextBox;
    readonly txtPromocao: MouraTextBox;
    readonly txtPeriodoProrrogar: MouraTextBoxPeriodo;
    readonly cboSituacao: MouraComboBox;
    protected Init(): void;
    protected OnTextBoxDescontoChange(): void;
    protected OnTextBoxPromocaoChange(): void;
    protected OnCboSituacao(s: DevExpress.Web.Scripts.ASPxClientComboBox, e: DevExpress.Web.Scripts.ASPxClientEventArgs): void;
    protected Calcular_Valor(): void;
    protected Calcular_PCento(): void;
}
declare var c_Promoc_Antiga: C_Promoc_Antiga;
//# sourceMappingURL=C_Promoc_Antiga.d.ts.map