declare class C_Catego extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Categoria> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Categoria): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_Catego: C_Catego;
//# sourceMappingURL=C_Catego.d.ts.map