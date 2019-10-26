declare class C_TipLan extends MouraPage {
    readonly txtContaDebito_hdnEmpresaContabil: HTMLInputElement;
    readonly txtContaCredito_hdnEmpresaContabil: HTMLInputElement;
    readonly cboEmpresa: MouraComboBox;
    readonly txtContaCredito: MouraTextBoxProcuraContabil;
    readonly txtContaDebito: MouraTextBoxProcuraContabil;
    protected Init(): void;
    PreencherEmpresaContabil(): void;
    protected OnContaContabilCreditoAntesAbrirProcura(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraAntesAbrirProcuraEventArgs): void;
    protected OnContaContabilCreditoPesquisando(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraContabilPesquisandoEventArgs): void;
    protected OnContaContabilDebitoAntesAbrirProcura(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraAntesAbrirProcuraEventArgs): void;
    protected OnContaContabilDebitoPesquisando(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraContabilPesquisandoEventArgs): void;
}
declare var c_TipLan: C_TipLan;
//# sourceMappingURL=C_TipLan.d.ts.map