interface EnvioWhatsAppParametro {
    ID_Mensagem: string;
    Celular_Destinatario: string;
    Mensagem: string;
    Retorno_Status_Codigo: number;
    Retorno_Status_Descricao: string;
    Retorno_Detalhe_Codigo: number;
    Retorno_Detalhe_Descricao: string;
}
declare class EnviandoMensagemWhatsAppEventArgs extends MouraEventArgs {
    Mensagem: string;
    Index: number;
}
declare class MouraWhatsApp extends MouraControl {
    private commandArgument;
    private destinatarios;
    private IsClient;
    EnviandoMensagem: MouraGenericEventHandler<any, EnviandoMensagemEventArgs>;
    readonly pnModal: MouraModal;
    readonly txtMensagem: MouraTextBox;
    readonly txtDestinatarios: MouraTextBox;
    readonly chkGravarModelo: MouraCheckBox;
    readonly btnEnviar: MouraButton;
    readonly btnCancelar: MouraButton;
    readonly hdnCommandArgument: HTMLInputElement;
    readonly hdnDestinatarios: HTMLInputElement;
    constructor(id: string);
    protected IniciarEventos(): void;
    AbrirClient(commandArgument: string, destinatarios: string[]): void;
    OnBtnEnviarClick(s: DevExpress.Web.Scripts.ASPxClientControl, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    OnBtnCancelarClick(s: DevExpress.Web.Scripts.ASPxClientControl, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
}
//# sourceMappingURL=MouraWhatsApp.d.ts.map