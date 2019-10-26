declare class MouraTextBoxComLista extends MouraControl {
    readonly hdnSource: HTMLInputElement;
    readonly txtProcura: MouraTextBox;
    readonly lstItens: MouraListBox;
    readonly btnAdicionar: MouraButton;
    readonly btnRemover: MouraButton;
    readonly btnLimpar: MouraButton;
    SourceLista: ItemSourceTL[];
    constructor(id: string);
    protected IniciarEventos(): void;
    AdicionarItem(text: string): void;
    Limpar(): void;
    RemoverItem(index: number): void;
    protected OnBtnAdicionarClick(s: MouraButton, e: MouraClickEventArgs): void;
    protected OnBtnRemoverClick(s: MouraButton, e: MouraClickEventArgs): void;
    protected OnBtnLimparClick(s: MouraButton, e: MouraClickEventArgs): void;
    protected OnLstItensDoubleClick(e: any): void;
}
interface ItemSourceTL {
    Text: string;
}
//# sourceMappingURL=MouraTextBoxComLista.d.ts.map