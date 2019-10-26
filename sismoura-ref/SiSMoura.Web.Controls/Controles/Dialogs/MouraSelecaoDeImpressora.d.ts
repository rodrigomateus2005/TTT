declare class MouraSelecaoDeImpressora extends MouraControl {
    ClickOk: MouraEventHandler;
    ClickCancel: MouraEventHandler;
    private chave;
    private isClient;
    constructor(id: string);
    readonly ImpressoraSelecionada: number;
    readonly modal: MouraModal;
    readonly cboImpressora: MouraComboBox;
    readonly chkLembrar: MouraCheckBox;
    readonly botaoOk: MouraButton;
    readonly botaoCancel: MouraButton;
    protected IniciarEventos(): void;
    AbrirClient(chave: string): void;
    protected OnBotaoOKClick(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnBotaoCancelarClick(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
}
//# sourceMappingURL=MouraSelecaoDeImpressora.d.ts.map