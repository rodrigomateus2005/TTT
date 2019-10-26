declare enum MouraAcorddionModoFuncionamento {
    ClientSide = 0,
    ServerSide = 1
}
declare class MouraAccordion extends MouraControl {
    readonly Painel: HTMLDivElement;
    private modoFuncioanmento;
    ModoFuncioanmento: MouraAcorddionModoFuncionamento;
    readonly LabelLink: HTMLAnchorElement;
    readonly PnComponentes: HTMLDivElement;
    readonly MaisCabecalho: HTMLDivElement;
    readonly HiddenExpanded: HTMLInputElement;
    readonly lblTituloCabecalho: HTMLLabelElement;
    TituloCabecalho: string;
    constructor(id: string);
    protected IniciarEventos(): void;
    protected OnLabelLinkClick(ev: JQueryKeyEventObject): void;
    SetExpanded(value: boolean): void;
    GetExpanded(): boolean;
    Toggle(): void;
    Visible: boolean;
    getControles(): MouraCampo[];
}
//# sourceMappingURL=MouraAccordion.d.ts.map