declare class MouraCallBackPanel extends MouraControl {
    readonly CallBackPanel: DevExpress.Web.Scripts.ASPxClientCallbackPanel;
    private readonly hdnBloquearCallBack;
    readonly BloquearCallback: boolean;
    protected IniciarEventos(): void;
    protected OnEndCallBack(s: any, e: any): void;
    protected OnCallBackError(s: any, e: any): void;
    PerformCallback(param: string): void;
    InCallback(): boolean;
    ExecutarEndCallBackMoura(hdnMsgAlerta: any, hdnMsgErro: any, hdnMsgInfo: any): void;
}
//# sourceMappingURL=MouraCallBackPanel.d.ts.map