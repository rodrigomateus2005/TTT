declare class C_Pelage extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Pelagem> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Pelagem): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_Pelage: C_Pelage;
//# sourceMappingURL=C_Pelage.d.ts.map