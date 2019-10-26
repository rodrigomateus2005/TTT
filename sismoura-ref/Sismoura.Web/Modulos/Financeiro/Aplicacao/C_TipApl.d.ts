declare class C_TipApl extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Financeiro_Tipo_Aplicacao> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisGravar(): boolean;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Financeiro_Tipo_Aplicacao): void;
    protected PreencherGrade(): void;
}
declare const c_TipApl: C_TipApl;
//# sourceMappingURL=C_TipApl.d.ts.map