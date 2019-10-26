declare class MouraListBoxClickEventArgs {
    Text: string;
    Value: string;
}
declare class MouraListBox extends MouraCampo {
    DoubleClick: MouraGenericEventHandler<any, MouraListBoxClickEventArgs>;
    readonly Lista: HTMLSelectElement;
    constructor(id: string);
    protected IniciarEventos(): void;
    protected OnDblClickLista(e: any): void;
    AdicionarItem(texto: string, valor: any): void;
    RemoverTodosItens(): void;
    RemoverItem(index: number): void;
    readonly SelectedIndex: number;
    readonly SelectedValue: any;
}
//# sourceMappingURL=MouraListBox.d.ts.map