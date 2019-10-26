declare class C_Escrit extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Escritorio> {
    readonly GridEscrit: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Escritorio): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_Escrit: C_Escrit;
//# sourceMappingURL=C_Escrit.d.ts.map