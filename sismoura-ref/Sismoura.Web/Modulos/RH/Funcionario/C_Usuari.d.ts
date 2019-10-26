declare class C_Usuari extends MouraPageCadastro<SiSMoura.Core.Entity.Usuario> {
    readonly chkAutonomo: MouraCheckBox;
    readonly chkContador: MouraCheckBox;
    readonly chkFranqueado: MouraCheckBox;
    readonly chkFranqueador: MouraCheckBox;
    readonly chkSocio: MouraCheckBox;
    readonly mdMensagem: MouraModal;
    readonly txtMensagem: MouraTextBox;
    readonly btnOK: MouraButton;
    protected Init(): void;
    protected OnCheckBoxSelectedIndexChangedAutonomo(): void;
    protected VerificaCheckBoxAutonomo(): void;
    protected OnCheckBoxSelectedIndexChangedContador(): void;
    protected AdicionarEventosPagina(): void;
    protected MostrarModalMensagem(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected ONClickOK(s: MouraButton, e: MouraClickEventArgs): void;
}
declare var c_Usuari: C_Usuari;
//# sourceMappingURL=C_Usuari.d.ts.map