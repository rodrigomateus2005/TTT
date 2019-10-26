declare class C_Refere extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Referencia> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Referencia): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_Refere: C_Refere;
//# sourceMappingURL=C_Refere.d.ts.map