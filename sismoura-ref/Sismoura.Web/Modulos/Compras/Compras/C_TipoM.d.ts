declare class C_TipoM extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Conversao_Tipo_Moeda> {
    readonly GridJS: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Conversao_Tipo_Moeda): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_TipoM: C_TipoM;
//# sourceMappingURL=C_TipoM.d.ts.map