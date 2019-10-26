declare class C_TipoPelage extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Tipo_Pelagem> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Tipo_Pelagem): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_TipoPelage: C_TipoPelage;
//# sourceMappingURL=C_TipoPelage.d.ts.map