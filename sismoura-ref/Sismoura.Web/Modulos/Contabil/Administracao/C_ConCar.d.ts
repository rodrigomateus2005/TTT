declare class C_ConCar extends MouraPage {
    readonly txtContaContabilCartao_hdnEmpresaContabil: HTMLInputElement;
    readonly txtContaContabilTaxa_hdnEmpresaContabil: HTMLInputElement;
    readonly cboEmpresa: MouraComboBox;
    readonly txtContaContabilTaxa: MouraTextBoxProcuraContabil;
    readonly txtContaContabilCartao: MouraTextBoxProcuraContabil;
    protected Init(): void;
    PreencherEmpresaContabil(): void;
    protected OnContaContabilCartaoAntesAbrirProcura(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraAntesAbrirProcuraEventArgs): void;
    protected OnContaContabilCartaoPesquisando(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraContabilPesquisandoEventArgs): void;
    protected OnContaContabilTaxaAntesAbrirProcura(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraAntesAbrirProcuraEventArgs): void;
    protected OnContaContabilTaxaPesquisando(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraContabilPesquisandoEventArgs): void;
}
declare var c_ConCar: C_ConCar;
//# sourceMappingURL=C_ConCar.d.ts.map