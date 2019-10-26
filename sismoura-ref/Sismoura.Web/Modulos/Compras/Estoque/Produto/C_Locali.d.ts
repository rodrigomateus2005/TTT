declare class C_Locali extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Produto_Localizacao> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Produto_Localizacao): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_Locali: C_Locali;
//# sourceMappingURL=C_Locali.d.ts.map