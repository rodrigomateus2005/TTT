declare class C_InfAna extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Franquia_Informacao_Analise> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Franquia_Informacao_Analise): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_InfAna: C_InfAna;
//# sourceMappingURL=C_InfAna.d.ts.map