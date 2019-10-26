declare class C_FichaAval extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Ficha_Avaliacao> {
    readonly Grid: MouraGridViewJS;
    readonly grdItens: MouraGridViewJSEditavel;
    Itens: SiSMoura.Core.Entity.Animais_Ficha_Avaliacao_Item[];
    protected Init(): void;
    protected OnAntesAdicionarItem(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Animais_Ficha_Avaliacao): void;
    protected BuscarItemCadastrado(codigo: number): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Ficha_Avaliacao): void;
    private PreencherItem;
    protected CarregarItens(codigo: number): void;
    protected GetCadastrados(): void;
    OnPageLoad(): void;
}
declare var c_FichaAval: C_FichaAval;
//# sourceMappingURL=C_FichaAval.d.ts.map