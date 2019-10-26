declare class C_VetExt extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Veterinario_Externo> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Veterinario_Externo): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_VetExt: C_VetExt;
//# sourceMappingURL=C_VetExt.d.ts.map