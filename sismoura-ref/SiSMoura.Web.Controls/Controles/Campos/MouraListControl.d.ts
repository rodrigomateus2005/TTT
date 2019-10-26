declare class MouraListControl extends MouraCampo {
    SelectionChanged: MouraEventHandler;
    private _AspUniqueIdLista;
    AspUniqueIdLista: string;
    readonly Lista: HTMLElement;
    constructor(id: string);
    readonly btnMarcar: DevExpress.Web.Scripts.ASPxClientButton;
    readonly btnDesmarcar: DevExpress.Web.Scripts.ASPxClientButton;
    readonly PainelList: HTMLDivElement;
    protected IniciarEventos(): void;
    protected OnListChanged(): void;
}
//# sourceMappingURL=MouraListControl.d.ts.map