declare class G_SINTEGRA extends MouraPageAngular {
    readonly txtMesAno: MouraTextBoxMesAno;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly chkEnviarInventario: MouraCheckBox;
    readonly txtDataEstoque: MouraTextBoxData;
    readonly cboDeposito: MouraComboBox;
    readonly chkReg53: MouraCheckBox;
    readonly chkEnviar5929: MouraCheckBox;
    readonly btnExportar: MouraButton;
    readonly txtValidacao: MouraTextBox;
    readonly mdValidacao: MouraModal;
    OnPageLoad(): void;
    protected Init(): void;
    protected LimparCampos(): void;
    protected OnClickBtnExportar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected Exportar(): boolean;
}
declare const g_SINTEGRA: G_SINTEGRA;
//# sourceMappingURL=G_SINTEGRA.d.ts.map