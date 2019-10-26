declare class C_CauObi extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Causa_Obito> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Causa_Obito): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_CauObi: C_CauObi;
//# sourceMappingURL=C_CauObi.d.ts.map