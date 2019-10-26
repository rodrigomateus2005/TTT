declare class C_Racas extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Raca> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Raca): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_Racas: C_Racas;
//# sourceMappingURL=C_Racas.d.ts.map