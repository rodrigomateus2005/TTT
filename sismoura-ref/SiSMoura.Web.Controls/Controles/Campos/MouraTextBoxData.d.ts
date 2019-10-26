declare class MouraTextBoxData extends MouraCampo {
    ValueChanged: MouraEventHandler;
    LostFocus: MouraEventHandler;
    private readonly TextBoxCalendario;
    private readonly Textbox;
    constructor(id: string);
    protected IniciarEventos(): void;
    Date: Date;
    Text: string;
    Disabled: boolean;
    Focus(): void;
    IsValido(): boolean;
    protected AlterouData(s: any, e: DevExpress.Web.Scripts.ASPxClientEventArgs): void;
    protected OnLostFocus(s: any, e: DevExpress.Web.Scripts.ASPxClientEventArgs): void;
}
//# sourceMappingURL=MouraTextBoxData.d.ts.map