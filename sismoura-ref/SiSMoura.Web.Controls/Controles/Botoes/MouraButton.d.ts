declare class MouraClickEventArgs extends MouraEventArgs {
    cancelEventAndBubble: boolean;
    processOnServer: boolean;
}
declare class MouraButton extends MouraControl {
    Click: MouraGenericEventHandler<MouraButton, MouraClickEventArgs>;
    private ClickFromServer;
    private AutoPostBack;
    private readonly Botao;
    private _clickBotao;
    ClickBotao: string;
    private _idGridEditavel;
    IdGridEditavel: string;
    constructor(id: string);
    protected IniciarEventos(): void;
    Text: string;
    GetEnabled(): boolean;
    SetEnabled(value: boolean): void;
    DoClick(): void;
    Visible: boolean;
    protected OnClickValidar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
    ValidarCamposObrigatorios(): boolean;
    TratarManesagemLabel(mensagem: string): string;
}
//# sourceMappingURL=MouraButton.d.ts.map