declare class MouraTextBoxCPFPesquisouEventArgs extends MouraEventArgs {
    DadosEmpresa: SiSMoura.Core.Entity.RetornoConsultaCNPJ;
}
declare class MouraTextBoxCPF extends MouraTextBox {
    private ticketCaptcha;
    Procurou: MouraGenericEventHandler<any, MouraTextBoxCPFPesquisouEventArgs>;
    readonly hdnCanProcurar: HTMLInputElement;
    readonly hdnIsCPF: HTMLInputElement;
    readonly Modal: MouraModal;
    readonly BotaoConsultar: DevExpress.Web.Scripts.ASPxClientButton;
    readonly imageCaptcha: HTMLImageElement;
    readonly textBoxCaptcha: HTMLInputElement;
    readonly BotaoOKCaptcha: MouraButton;
    IsCPF: boolean;
    CanProcurar: boolean;
    AtualizarPodeProcurar(): void;
    AtualizarMascaras(): void;
    constructor(id: string);
    protected IniciarEventos(): void;
    ConsultarAPI(): void;
    Consultar(): void;
    protected OnBotaoConsultarClick(s: DevExpress.Web.Scripts.ASPxClientButton, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnBotaoOKCaptchaClick(s: MouraButton, e: MouraClickEventArgs): void;
    protected OnTextBoxProcuraKeyDown(e: any): void;
}
//# sourceMappingURL=MouraTextBoxCPF.d.ts.map