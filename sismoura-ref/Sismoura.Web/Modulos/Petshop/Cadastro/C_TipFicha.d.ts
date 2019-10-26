declare class C_TipFicha extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Ficha_Clinica> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Ficha_Clinica): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_TipFicha: C_TipFicha;
//# sourceMappingURL=C_TipFicha.d.ts.map