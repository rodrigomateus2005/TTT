declare class C_CatForPag extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Categoria_Pagamento> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Categoria_Pagamento): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_CatForPag: C_CatForPag;
//# sourceMappingURL=C_CatForPag.d.ts.map