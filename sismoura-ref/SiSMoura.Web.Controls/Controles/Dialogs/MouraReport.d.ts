declare class MouraReport extends MouraControl {
    readonly Modal: MouraModal;
    readonly botaoAbrir: MouraButton;
    readonly botaoEditar: MouraButton;
    readonly botaoCancel: MouraButton;
    readonly cboReport: MouraComboBox;
    readonly hdnPathReport: HTMLInputElement;
    PathRelatorios: string;
    constructor(id: string);
    protected IniciarEventos(): void;
    protected OnClickCancelar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickEditar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickAbrir(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    Mostrar(path: string, arquivo: string): void;
}
//# sourceMappingURL=MouraReport.d.ts.map