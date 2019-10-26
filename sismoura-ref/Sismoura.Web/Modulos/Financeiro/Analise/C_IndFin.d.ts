declare class C_IndFin extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Indice_Economico_Financeiro> {
    readonly grid: MouraGridViewJS;
    readonly txtCodigo: MouraTextBoxProcura;
    OnPageLoad(): void;
    Init(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Indice_Economico_Financeiro): void;
    PreencherGrade(): void;
    private SelecionouLinha;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisClickNovo(): boolean;
    protected OnDepoisDeletar(): boolean;
    OnDepoisBuscarExistente(entity: SiSMoura.Core.Entity.Indice_Economico_Financeiro): void;
}
declare const c_IndFin: C_IndFin;
//# sourceMappingURL=C_IndFin.d.ts.map