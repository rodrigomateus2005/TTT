declare class C_Cluster extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Grupo_Empresa> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Grupo_Empresa): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_Cluster: C_Cluster;
//# sourceMappingURL=C_Cluster.d.ts.map