declare class C_TipAci extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Tipo_Acidente> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Tipo_Acidente): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_TipAci: C_TipAci;
//# sourceMappingURL=C_TipAci.d.ts.map