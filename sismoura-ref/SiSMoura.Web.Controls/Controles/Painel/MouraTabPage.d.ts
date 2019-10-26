declare class MouraTabPage extends MouraControl {
    private _Text;
    Text: string;
    private _Enabled;
    Enabled: boolean;
    private _Visible;
    Visible: boolean;
    private _MouraTabPanel;
    MouraTabPanel: MouraTabPanel;
    readonly TabIndex: number;
    readonly Painel: HTMLDivElement;
    constructor(id: string);
    protected IniciarEventos(): void;
    private validarTabAtiva;
}
//# sourceMappingURL=MouraTabPage.d.ts.map