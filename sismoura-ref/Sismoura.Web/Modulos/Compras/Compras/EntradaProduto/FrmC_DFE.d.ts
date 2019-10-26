declare class FrmC_DFE extends MouraPage {
    readonly chkIrEntrada: MouraCheckBox;
    readonly cboOperacao: MouraComboBox;
    readonly txtJustificativa: MouraTextBox;
    readonly btnOk: MouraButton;
    protected Init(): void;
    protected OnComboBoxOperacaoChange(): void;
    private irEntrada;
    protected OnClickBtnOk(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    private ValidarJustificativa;
}
declare var frmC_DFE: FrmC_DFE;
//# sourceMappingURL=FrmC_DFE.d.ts.map