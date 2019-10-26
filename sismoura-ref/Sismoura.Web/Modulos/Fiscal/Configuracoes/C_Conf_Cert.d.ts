declare class C_Conf_Cert extends MouraPage {
    readonly cboTipoArquivo: DevExpress.Web.Scripts.ASPxClientComboBox;
    readonly cboCertificados: DevExpress.Web.Scripts.ASPxClientComboBox;
    readonly btnAnexos: MouraButton;
    readonly txtSenha: MouraTextBox;
    readonly chkBancoNuvem: MouraTextBox;
    protected Init(): void;
    protected OnValueChangedComboTipo(s: any, e: any): boolean;
}
declare var c_Conf_Cert: C_Conf_Cert;
//# sourceMappingURL=C_Conf_Cert.d.ts.map