declare class C_ChkLstHos extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Checklist_Hospedagem> {
    readonly Grid: MouraGridViewJS;
    readonly grdItens: MouraGridViewJSEditavel;
    Itens: SiSMoura.Core.Entity.Animais_Checklist_Hospedagem_Item[];
    protected Init(): void;
    protected OnAntesAdicionarItem(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Animais_Checklist_Hospedagem): void;
    protected BuscarItemCadastrado(codigo: number): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Checklist_Hospedagem): void;
    private PreencherItem;
    protected CarregarItens(codigo: number): void;
    protected GetCadastrados(): void;
    OnPageLoad(): void;
}
declare const c_ChkLstHos: C_ChkLstHos;
//# sourceMappingURL=C_ChkLstHos.d.ts.map