declare class C_ChkLstEAdoc extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Checklist_Entrada_Adocao> {
    readonly Grid: MouraGridViewJS;
    readonly grdItens: MouraGridViewJSEditavel;
    Itens: SiSMoura.Core.Entity.Animais_Checklist_Entrada_Adocao_Item[];
    protected Init(): void;
    protected OnAntesAdicionarItem(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Animais_Checklist_Entrada_Adocao): void;
    protected BuscarItemCadastrado(codigo: number): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Checklist_Entrada_Adocao): void;
    private PreencherItem;
    protected CarregarItens(codigo: number): void;
    protected GetCadastrados(): void;
    OnPageLoad(): void;
}
declare const c_ChkLstEAdoc: C_ChkLstEAdoc;
//# sourceMappingURL=C_ChkLstEAdoc.d.ts.map