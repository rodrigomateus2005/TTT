declare class C_CadScore extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Plano_Score> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Plano_Score): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_CadScore: C_CadScore;
//# sourceMappingURL=C_CadScore.d.ts.map