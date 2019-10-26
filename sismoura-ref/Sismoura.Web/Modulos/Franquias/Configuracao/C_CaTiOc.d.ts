declare class C_CaTiOc extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Franquia_Tipo_Ocorrencia> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Franquia_Tipo_Ocorrencia): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_CaTiOc: C_CaTiOc;
//# sourceMappingURL=C_CaTiOc.d.ts.map