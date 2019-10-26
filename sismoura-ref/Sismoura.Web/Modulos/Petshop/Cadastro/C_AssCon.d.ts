declare class C_AssCon extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Assunto> {
    readonly GridAssCon: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Assunto): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_AssCon: C_AssCon;
//# sourceMappingURL=C_AssCon.d.ts.map