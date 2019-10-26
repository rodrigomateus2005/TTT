declare class C_FranChe extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Franquia_Tipo_Checklist> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Franquia_Tipo_Checklist): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_FranChe: C_FranChe;
//# sourceMappingURL=C_FranChe.d.ts.map