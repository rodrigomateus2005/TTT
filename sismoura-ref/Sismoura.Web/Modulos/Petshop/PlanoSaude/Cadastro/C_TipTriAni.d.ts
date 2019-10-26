declare class C_TipTriAni extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Plano_Tipo_Triagem> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Plano_Tipo_Triagem): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_TipTriAni: C_TipTriAni;
//# sourceMappingURL=C_TipTriAni.d.ts.map