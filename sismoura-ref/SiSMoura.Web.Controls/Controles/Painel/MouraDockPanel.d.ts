declare class MouraDockPanel extends MouraControl {
    constructor(id: string);
    readonly dock: DevExpress.Web.Scripts.ASPxDockPanel;
    readonly dockPanel: DevExpress.Web.Scripts.ASPxClientDockPanel;
    readonly LoadingPanel: DevExpress.Web.Scripts.ASPxClientLoadingPanel;
    readonly PainelConteudo: HTMLDivElement;
    protected IniciarEventos(): void;
    private OnDockEndRender;
    ShowLoadingPanel(): void;
    HideLoadingPanel(): void;
    AdjustControl(): void;
}
//# sourceMappingURL=MouraDockPanel.d.ts.map