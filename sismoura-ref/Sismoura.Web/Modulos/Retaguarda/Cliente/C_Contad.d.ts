declare class C_Contad extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Contador> {
    readonly GridContad: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Contador): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_Contad: C_Contad;
//# sourceMappingURL=C_Contad.d.ts.map