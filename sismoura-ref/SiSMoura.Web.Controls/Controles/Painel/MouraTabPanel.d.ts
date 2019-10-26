declare class MouraTabPanel extends MouraControl {
    ActiveTabChanged: MouraEventHandler;
    private AutoPostBack;
    private _NomesTabs;
    private NomesTabs;
    ActiveTabIndex: number;
    readonly hdnActiveTabIndex: HTMLInputElement;
    readonly Painel: HTMLDivElement;
    readonly PainelInterno: HTMLDivElement;
    readonly Cabecalho: HTMLUListElement;
    readonly Tabs: MouraTabPage[];
    constructor(id: string);
    protected IniciarEventos(): void;
    private iniciarJqueryUITabs;
    protected OnActiveTabChanged(source: any, e: DevExpress.Web.Scripts.ASPxClientTabControlTabEventArgs): void;
    AlterarVisibleAba(Aba: string, Visible: boolean): void;
    IsAbaVisible(Aba: string): boolean;
    SetActiveTabIndex(index: number): void;
    GetActiveTabIndex(): number;
    GetTabByName(name: string): MouraTabPage;
    Visible: boolean;
}
//# sourceMappingURL=MouraTabPanel.d.ts.map