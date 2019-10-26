declare class C_SegUsuarioExact extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Console_Exactsales_Vendedor_Segmento> {
    readonly grid: MouraGridViewJS;
    readonly btnAtualizar: MouraButton;
    OnPageLoad(): void;
    Init(): void;
    protected Limpar(): void;
    private PreencherGrade;
    private OnSelecionouLinha;
    protected OnDepoisGravar(): boolean;
    private OnClickAtualizar;
    protected OnDepoisDeletar(): boolean;
}
declare const c_SegUsuarioExact: C_SegUsuarioExact;
//# sourceMappingURL=C_SegUsuarioExact.d.ts.map