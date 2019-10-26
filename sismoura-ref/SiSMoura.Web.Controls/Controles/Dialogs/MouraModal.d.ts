declare class MouraModal extends MouraControl {
    Abriu: MouraEventHandler;
    Fechou: MouraEventHandler;
    Titulo: string;
    private _exibirNaConfiguracaoDeCampos;
    ExibirNaConfiguracaoDeCampos: boolean;
    readonly ModalDialog: DevExpress.Web.Scripts.ASPxClientPopupControlBase;
    constructor(id: string);
    protected IniciarEventos(): void;
    OnClosing(): void;
    Show(): void;
    Hide(): void;
    BringToFront(): void;
    SetHeaderText(value: string): void;
}
//# sourceMappingURL=MouraModal.d.ts.map