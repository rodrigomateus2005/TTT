declare class MouraTextBoxProcuraComLista extends MouraControl {
    readonly hdnSource: HTMLInputElement;
    readonly cbpItens: MouraCallBackPanel;
    readonly agrProcura: MouraAgrupamento;
    readonly agrItens: MouraAgrupamento;
    readonly txtProcura: MouraTextBoxProcura;
    readonly lstItens: MouraListBox;
    readonly btnAdicionar: MouraButton;
    readonly btnRemover: MouraButton;
    readonly btnLimpar: MouraButton;
    readonly divProc: HTMLDivElement;
    SourceLista: ItemSource[];
    constructor(id: string);
    protected IniciarEventos(): void;
    AdicionarItem(value: number, text: string): void;
    Limpar(): void;
    SetVisible(visible: boolean): void;
    RemoverItem(index: number): void;
    protected OnBtnAdicionarClick(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnBtnRemoverClick(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnBtnLimparClick(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnLstItensDoubleClick(e: any): void;
}
interface ItemSource {
    Value: number;
    Text: string;
}
//# sourceMappingURL=MouraTextBoxProcuraComLista.d.ts.map