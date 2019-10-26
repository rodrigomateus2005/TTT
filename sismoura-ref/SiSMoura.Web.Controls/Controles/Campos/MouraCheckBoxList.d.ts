declare class MouraCheckBoxList extends MouraListControl {
    constructor(id: string);
    private readonly SelectorJQuery;
    readonly CheckBoxList: JQuery;
    LimparSelecao(): void;
    readonly SelectedIndexes: number[];
    GetValues(): string[];
    GetValuesRelacao(): string[];
    SetValues(values: Array<string>): void;
    LimparSelecaoItems(values: Array<string>): void;
    readonly SelectedValues: any[];
    readonly SelectedTextes: string[];
    IsValido(): boolean;
    AdicionarItem(texto: string, valor: any): void;
    RemoverTodosItens(): void;
}
//# sourceMappingURL=MouraCheckBoxList.d.ts.map