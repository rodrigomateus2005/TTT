declare class Can_Cont extends MouraPageAngular {
    readonly txtCliente: MouraTextBoxProcura;
    readonly txtContrato: MouraTextBoxProcura;
    readonly txtData: MouraTextBoxData;
    readonly txtMotivo: MouraTextBoxProcura;
    readonly txtObservação: MouraTextBox;
    readonly btnCancelar: MouraButton;
    readonly btnGravarObs: MouraButton;
    readonly btnLimpar: MouraButton;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnClienteProcurou(): void;
    protected OnContratoProcurou(): void;
    protected OnRepostaContrato(result: MsgBoxResultEventArgs): void;
    protected PreencherContrato(): void;
    protected OnClickCancelar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickGravarObs(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickLimpar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected LimparCampos(): void;
    protected LimparCamposSemCliente(): void;
}
declare const can_Cont: Can_Cont;
//# sourceMappingURL=Can_Cont.d.ts.map