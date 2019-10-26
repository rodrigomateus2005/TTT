declare class C_DeMaxG extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Desconto_Maximo_Grupo> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Desconto_Maximo_Grupo): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_DeMaxG: C_DeMaxG;
//# sourceMappingURL=C_DeMaxG.d.ts.map