declare class C_AniPer extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Temperamento> {
    readonly GridAniPer: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Temperamento): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_AniPer: C_AniPer;
//# sourceMappingURL=C_AniPer.d.ts.map