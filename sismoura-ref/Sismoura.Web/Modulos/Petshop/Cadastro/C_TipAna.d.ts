declare class C_TipAna extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Anamnese> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Anamnese): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_TipAna: C_TipAna;
//# sourceMappingURL=C_TipAna.d.ts.map