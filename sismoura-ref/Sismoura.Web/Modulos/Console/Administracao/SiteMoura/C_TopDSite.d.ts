declare class C_TopDSite extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Console_Download_Site_Topico> {
    readonly grid: MouraGridViewJS;
    OnPageLoad(): void;
    Init(): void;
    private OnSelecionouLinha;
    private PreencherGrade;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisDeletar(): boolean;
    Limpar(): void;
}
declare const c_TopDSite: C_TopDSite;
//# sourceMappingURL=C_TopDSite.d.ts.map