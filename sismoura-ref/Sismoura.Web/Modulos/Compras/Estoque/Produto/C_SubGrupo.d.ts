declare class C_SubGrupo extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Subgrupo> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Subgrupo): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_SubGrupo: C_SubGrupo;
//# sourceMappingURL=C_SubGrupo.d.ts.map