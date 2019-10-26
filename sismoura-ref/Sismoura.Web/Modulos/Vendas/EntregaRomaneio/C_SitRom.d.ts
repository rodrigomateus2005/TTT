declare class C_SitRom extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Entrega_Situacao> {
    readonly Grid: MouraGridView;
    protected Init(): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected AtualizarGrid(): void;
    protected SelecionarRegistro(s: any, e: MouraGridViewSelecionouEventArgs): void;
}
declare const c_SitRom: C_SitRom;
//# sourceMappingURL=C_SitRom.d.ts.map