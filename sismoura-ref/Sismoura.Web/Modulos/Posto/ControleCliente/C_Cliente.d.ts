declare class C_Cliente extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Pessoa> {
    OnPageLoad(): void;
    Init(): void;
    protected Limpar(): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Pessoa): void;
    protected OnDepoisGravar(): boolean;
    private AtualizarHistoricoProcedimento;
}
declare const c_Cliente: C_Cliente;
//# sourceMappingURL=C_Cliente.d.ts.map