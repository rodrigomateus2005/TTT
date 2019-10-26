declare class C_PosTit extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Posicao_Titulo> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Posicao_Titulo): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_PosTit: C_PosTit;
//# sourceMappingURL=C_PosTit.d.ts.map