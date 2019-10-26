declare class MouraRadioButtonList extends MouraCampo {
    SelectionChanged: MouraEventHandler;
    private _ListName;
    ListName: string;
    private readonly SelectorJQuery;
    readonly RadioButtonList: JQuery;
    readonly PainelList: JQuery;
    GetValue(): string;
    SetValue(value: string): void;
    GetSelectedText(): string;
    LimparSelecao(): void;
    constructor(id: string);
    protected IniciarEventos(): void;
    protected OnListChanged(): void;
    Disabled: boolean;
    AdicionarItem(texto: string, valor: any): void;
    RemoverTodosItens(): void;
    SetEnabledByIndex(enabled: boolean, index: number): void;
}
//# sourceMappingURL=MouraRadioButtonList.d.ts.map