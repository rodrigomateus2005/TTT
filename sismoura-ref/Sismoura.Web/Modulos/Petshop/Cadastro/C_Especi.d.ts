declare class C_Especi extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Especie> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Especie): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_Especi: C_Especi;
//# sourceMappingURL=C_Especi.d.ts.map