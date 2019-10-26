declare class C_StaOco extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Orcamento_Ocorrencia_Status> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Orcamento_Ocorrencia_Status): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_StaOco: C_StaOco;
//# sourceMappingURL=C_StaOco.d.ts.map