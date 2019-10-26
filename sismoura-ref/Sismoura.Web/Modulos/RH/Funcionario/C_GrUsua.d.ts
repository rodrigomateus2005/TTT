declare class C_GrUsua extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Grupo_Usuario> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Grupo_Usuario): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_GrUsua: C_GrUsua;
//# sourceMappingURL=C_GrUsua.d.ts.map