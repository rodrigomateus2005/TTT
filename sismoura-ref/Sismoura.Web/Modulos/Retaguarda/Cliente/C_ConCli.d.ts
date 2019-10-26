declare class C_ConCli extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Conceito_Cliente> {
    readonly Grid: MouraGridViewJS;
    protected PreencherGrade(): void;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnGridSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Conceito_Cliente): boolean;
    protected OnDepoisGravar(): boolean;
}
declare var c_ConCli: C_ConCli;
//# sourceMappingURL=C_ConCli.d.ts.map