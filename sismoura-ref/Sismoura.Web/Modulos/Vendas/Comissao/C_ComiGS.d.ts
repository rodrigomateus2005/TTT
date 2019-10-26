declare class C_ComiGS extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Comissao_Grupo_Subgrupo> {
    readonly grid: MouraGridViewJS;
    readonly txtGrupo: MouraTextBoxProcura;
    protected Init(): void;
    OnDepoisProcurou(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Comissao_Grupo_Subgrupo): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_ComiGS: C_ComiGS;
//# sourceMappingURL=C_ComiGS.d.ts.map