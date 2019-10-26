declare class E_ArqFis extends MouraPage {
    readonly mdEmail: MouraModal;
    readonly txtEmailContabilista: MouraTextBox;
    readonly txtEmailSecundario: MouraTextBox;
    readonly txtCorpoEmail: MouraTextBox;
    readonly btnEnviar: MouraButton;
    readonly btnCancelar: MouraButton;
    readonly enviarEmail: MouraEmail;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtMesAno: MouraTextBoxMesAno;
    readonly btnExportar: MouraButton;
    readonly optTipo: MouraRadioButtonList;
    protected Init(): void;
    protected OnClickExportar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickEnviarEmail(s: MouraButton, e: MouraClickEventArgs): void;
    protected OnClickCancelarEmail(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
}
declare var e_ArqFis: E_ArqFis;
//# sourceMappingURL=E_ArqFis.d.ts.map