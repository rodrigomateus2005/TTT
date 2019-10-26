declare class C_TMoL extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Franquia_Configuracao_Listavez> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Franquia_Configuracao_Listavez): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_TMoL: C_TMoL;
//# sourceMappingURL=C_TMoL.d.ts.map