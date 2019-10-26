declare class C_CSite extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Console_Cliente_Site> {
    readonly grid: MouraGridViewJS;
    readonly txtCliente: MouraTextBoxProcura;
    readonly txtCodigo: MouraTextBoxProcura;
    OnPageLoad(): void;
    Init(): void;
    Limpar(): void;
    private OnProcurouCliente;
    private VerificaRegistro;
    protected PreencherGrade(): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisDeletar(): boolean;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Console_Cliente_Site): void;
    private OnSelecionouLinha;
}
declare const c_CSite: C_CSite;
//# sourceMappingURL=C_CSite.d.ts.map