declare class C_TipVei extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Franquia_Veiculacao_Tipo> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Franquia_Veiculacao_Tipo): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_TipVei: C_TipVei;
//# sourceMappingURL=C_TipVei.d.ts.map