declare class C_Sind extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Sindicato> {
    readonly GridSind: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Sindicato): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_Sind: C_Sind;
//# sourceMappingURL=C_Sind.d.ts.map