declare class C_CatDocWiki extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Console_Wiki_Categoria> {
    readonly grid: any;
    protected Init(): void;
    OnPageLoad(): void;
    protected PreencherGrade(): void;
    protected OnGridSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Console_Wiki_Categoria): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnAntesGravar(): boolean;
}
declare const c_CatDocWiki: C_CatDocWiki;
//# sourceMappingURL=C_CatDocWiki.d.ts.map