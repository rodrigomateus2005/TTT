declare class C_TipOco extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Orcamento_Ocorrencia_Tipo> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Orcamento_Ocorrencia_Tipo): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_TipOco: C_TipOco;
//# sourceMappingURL=C_TipOco.d.ts.map