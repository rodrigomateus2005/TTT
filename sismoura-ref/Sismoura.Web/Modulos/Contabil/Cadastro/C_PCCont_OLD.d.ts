declare class C_PCCont_OLD extends MouraPage {
    readonly txtCodigo_hdnEmpresaContabil: HTMLInputElement;
    readonly cboEmpresa: MouraComboBox;
    readonly txtDescricao: MouraTextBox;
    readonly txtCodigo: MouraTextBoxProcuraContabil;
    readonly txtCodigoContabil: MouraTextBox;
    readonly cboTipo: MouraComboBox;
    readonly cboOrigem: MouraComboBox;
    readonly cboModalidade: MouraComboBox;
    readonly cboNaturezaSped: MouraComboBox;
    readonly txtPlanoContasSped: MouraTextBoxProcura;
    readonly ckbInativo: MouraCheckBox;
    protected Init(): void;
    PreencherEmpresaContabil(): void;
    protected OnCodigoAntesAbrirProcura(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraAntesAbrirProcuraEventArgs): void;
    protected OnCodigoPesquisando(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraContabilPesquisandoEventArgs): void;
}
declare var c_PCCont_OLD: C_PCCont_OLD;
//# sourceMappingURL=C_PCCont_OLD.d.ts.map