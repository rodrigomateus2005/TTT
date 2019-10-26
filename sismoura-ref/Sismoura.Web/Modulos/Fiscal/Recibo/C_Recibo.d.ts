declare class C_Recibo extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Recibo> {
    readonly Grid: MouraGridViewJSEditavel;
    Produto: any;
    Produtos: any[];
    readonly txtCodigo: MouraTextBox;
    readonly lblData: MouraLabel;
    readonly lblCidade: MouraLabel;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly txtVenda: MouraTextBoxProcura;
    readonly txtVencimento: MouraTextBoxData;
    protected Init(): void;
    protected OnVendaProcurou(s: MouraTextBoxProcura, e: MouraEventArgs): void;
    OnPageLoad(): void;
    protected MudouTipo(): any;
    protected OnEmpresaAlterou(): void;
    protected OnDadosEmpresa(): any;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Recibo): void;
}
declare var c_Recibo: C_Recibo;
//# sourceMappingURL=C_Recibo.d.ts.map