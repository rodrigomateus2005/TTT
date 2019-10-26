declare class C_SitLoc extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Locacao_Equipamento_Situacao> {
    readonly Grid: MouraGridView;
    protected Init(): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected AtualizarGrid(): void;
    protected SelecionarRegistro(s: any, e: MouraGridViewSelecionouEventArgs): void;
}
declare var c_SitLoc: C_SitLoc;
//# sourceMappingURL=C_SitLoc.d.ts.map