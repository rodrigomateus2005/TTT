declare class C_ContaC extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Conta_Contabil> {
    readonly gridCadastrados: MouraGridViewJS;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly txtCodContabil: MouraTextBoxProcura;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(Entity: any): void;
    protected OnDepoisGravar(): boolean;
    protected GetCadastrados(): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Conta_Contabil): void;
    protected PreencherEmpresa(Entidade: SiSMoura.Core.Entity.Conta_Contabil): void;
    protected ProcuraEmpresa(codEmpresa: number, lista: SiSMoura.Core.Entity.Conta_Contabil_Empresa[]): SiSMoura.Core.Entity.Conta_Contabil_Empresa;
    protected OnAntesGravar(): boolean;
    protected OnGridCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    private ValidarMascara;
}
declare var c_ContaC: C_ContaC;
//# sourceMappingURL=C_ContaC.d.ts.map