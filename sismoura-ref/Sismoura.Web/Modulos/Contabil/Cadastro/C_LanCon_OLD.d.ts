declare class C_LanCon_OLD extends MouraPage {
    readonly txtHistorico: MouraTextBoxProcura;
    readonly txtDescricao: MouraTextBox;
    readonly cboEmpresa_comboBox: DevExpress.Web.Scripts.ASPxClientComboBox;
    readonly txtContaDebito_hdnEmpresaContabil: HTMLInputElement;
    readonly txtContaCredito_hdnEmpresaContabil: HTMLInputElement;
    readonly txtContaDebito: MouraTextBoxProcuraContabil;
    readonly txtContaCredito: MouraTextBoxProcuraContabil;
    readonly cboEmpresa: MouraComboBox;
    protected Init(): void;
    PreencherEmpresaContabil(): void;
    protected OnContaContabilCreditoAntesAbrirProcura(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraAntesAbrirProcuraEventArgs): void;
    protected OnContaContabilCreditoPesquisando(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraContabilPesquisandoEventArgs): void;
    protected OnContaContabilDebitoAntesAbrirProcura(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraAntesAbrirProcuraEventArgs): void;
    protected OnContaContabilDebitoPesquisando(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraContabilPesquisandoEventArgs): void;
    protected OnTxtHistoricoProcurou(s: MouraTextBoxProcura, e: MouraEventArgs): void;
}
declare var c_LanCon_OLD: C_LanCon_OLD;
//# sourceMappingURL=C_LanCon_OLD.d.ts.map