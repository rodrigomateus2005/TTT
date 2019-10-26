declare class MouraGridViewJSEditavelItemEventArgs extends MouraEventArgs {
    index: number;
    item: any;
}
declare class MouraGridViewJSEditavelItemCancelavelEventArgs extends MouraEventArgs {
    index: number;
    item: any;
    cancelar: boolean;
}
declare class MouraGridViewJSEditavelItemValidandoEventArgs extends MouraGridViewJSEditavelItemCancelavelEventArgs {
    errorText: string;
    fieldNameAlterado: string;
    valorAlterado: any;
    oldRowValue: any;
}
declare class RetornoExtendidoAdicionarAlterar {
    errorText: string;
}
declare class MouraGridViewJSEditavel extends MouraControl {
    SetandoItem: MouraGenericEventHandler<any, MouraGridViewJSEditavelItemCancelavelEventArgs>;
    SetouItem: MouraGenericEventHandler<any, MouraGridViewJSEditavelItemEventArgs>;
    SelecionandoItem: MouraGenericEventHandler<any, MouraGridViewJSEditavelItemCancelavelEventArgs>;
    SelecionouItem: MouraGenericEventHandler<any, MouraGridViewJSEditavelItemEventArgs>;
    LimpandoItem: MouraGenericEventHandler<any, MouraGridViewJSEditavelItemCancelavelEventArgs>;
    LimpouItem: MouraGenericEventHandler<any, MouraGridViewJSEditavelItemEventArgs>;
    AdicionandoItem: MouraGenericEventHandler<any, MouraGridViewJSEditavelItemValidandoEventArgs>;
    ItemAdicionado: MouraGenericEventHandler<any, MouraGridViewJSEditavelItemEventArgs>;
    AlterandoItem: MouraGenericEventHandler<any, MouraGridViewJSEditavelItemValidandoEventArgs>;
    ItemAlterado: MouraGenericEventHandler<any, MouraGridViewJSEditavelItemEventArgs>;
    ExcluindoItem: MouraGenericEventHandler<any, MouraGridViewJSEditavelItemCancelavelEventArgs>;
    ItemExcluido: MouraGenericEventHandler<any, MouraGridViewJSEditavelItemEventArgs>;
    Validando: MouraGenericEventHandler<any, MouraGridViewJSEditavelItemValidandoEventArgs>;
    ClicouAdicionar: MouraGenericEventHandler<any, MouraGridViewJSEditavelItemCancelavelEventArgs>;
    constructor(id: string);
    readonly btnAdiconar: MouraButton;
    readonly btnNovo: MouraButton;
    readonly Grid: MouraGridViewJS;
    readonly pnGeral: HTMLDivElement;
    readonly Scope: ng.IScope;
    private _ngItem;
    NgItem: string;
    private _ngItens;
    NgItens: string;
    private _indexSelecionado;
    private IndexSelecionado;
    private Item;
    Visible: boolean;
    private Itens;
    protected IniciarEventos(): void;
    OnGridRowValidating(s: any, e: any): void;
    AtualizarGrid(): void;
    OnAdicionarClick(s: MouraButton, e: MouraClickEventArgs): void;
    OnNovoClick(s: DevExpress.Web.Scripts.ASPxClientButton, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    AdicionarOuAlterarItemAtual(): void;
    private AdicionarOuAlterarItemAtualInterno;
    OnSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnExcluindoItem(s: any, e: MouraGridViewJSItemCancelavelEventArgs): void;
    OnExcluiuItem(s: any, e: MouraGridViewJSItemEventArgs): void;
    Excluir(index: number): void;
    Selecionar(index: number): void;
    Limpar(): void;
    private SetItem;
}
//# sourceMappingURL=MouraGridViewJSEditavel.d.ts.map