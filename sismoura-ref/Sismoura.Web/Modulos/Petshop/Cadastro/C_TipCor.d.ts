declare class C_TipCor extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Tipo_Cortesia> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Tipo_Cortesia): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_TipCor: C_TipCor;
//# sourceMappingURL=C_TipCor.d.ts.map