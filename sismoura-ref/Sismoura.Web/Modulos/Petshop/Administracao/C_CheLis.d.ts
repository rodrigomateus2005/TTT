declare class C_CheLis extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Checklist_Atendimento> {
    readonly Grid: MouraGridViewJS;
    readonly grdItens: MouraGridViewJSEditavel;
    Itens: SiSMoura.Core.Entity.Animais_Checklist_Item[];
    protected Init(): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Animais_Checklist_Atendimento): void;
    protected BuscarItemCadastrado(codigo: number): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Checklist_Atendimento): void;
    private PreencherItem;
    protected CarregarItens(codigo: number): void;
    protected GetCadastrados(): void;
    OnPageLoad(): void;
}
declare const c_CheLis: C_CheLis;
//# sourceMappingURL=C_CheLis.d.ts.map