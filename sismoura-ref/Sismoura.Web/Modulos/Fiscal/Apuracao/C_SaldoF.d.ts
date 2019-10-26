declare class C_SaldoF extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Fiscal_Saldos> {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly cboImposto: MouraComboBox;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly txtPeriodo: MouraTextBoxData;
    readonly txtCredito: MouraTextBox;
    readonly txtDebito: MouraTextBox;
    readonly txtOutros_ICMS_Devido: MouraTextBox;
    readonly txtSaldoDevedor: MouraTextBox;
    readonly txtDeducao: MouraTextBox;
    readonly txtImpostoRecolher: MouraTextBox;
    readonly txtSaldoCredor: MouraTextBox;
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected MudouTipo(): void;
    protected BuscarGrade(Imposto: string, Empresa: String): void;
    protected OnGrdSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisDeletar(): boolean;
    protected OnAntesGravar(): boolean;
}
declare var c_SaldoF: C_SaldoF;
//# sourceMappingURL=C_SaldoF.d.ts.map