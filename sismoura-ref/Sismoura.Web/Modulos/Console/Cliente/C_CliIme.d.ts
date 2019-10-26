declare class C_CliIme extends MouraPageAngular {
    Pessoa: any;
    Empresa: any;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtValorMens: MouraTextBox;
    readonly txtObs: MouraTextBox;
    readonly btnIntegrar: MouraButton;
    readonly btnCRM: MouraButton;
    readonly btnNovo: MouraButton;
    readonly cboSituCad: MouraComboBox;
    readonly txtCnpj: MouraTextBox;
    readonly txtFantasia: MouraTextBox;
    readonly txtEndereco: MouraTextBox;
    readonly txtNumero: MouraTextBox;
    readonly txtBairro: MouraTextBox;
    readonly txtMunicipio: MouraTextBox;
    readonly txtUf: MouraTextBox;
    readonly txtTel: MouraTextBox;
    readonly txtContato: MouraTextBox;
    readonly txtEmail: MouraTextBox;
    protected Init(): void;
    OnPageLoad(): void;
    protected PreencherPessoa(): void;
    protected onClickNovo(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected LimparCampos(): void;
    protected VerificaCombo(): void;
    protected abrirLink(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected onClickIntegrar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    private validaCamposCliente;
}
declare var c_CliIme: C_CliIme;
//# sourceMappingURL=C_CliIme.d.ts.map