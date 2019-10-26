declare class C_DSite extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Console_Download_Site> {
    readonly grid: MouraGridViewJS;
    OnPageLoad(): void;
    Init(): void;
    protected Limpar(): void;
    protected OnDepoisDeletar(): boolean;
    protected OnDepoisGravar(): boolean;
    private PreencherGrade;
    private OnSelecionouLinha;
}
declare const c_DSite: C_DSite;
//# sourceMappingURL=C_DSite.d.ts.map