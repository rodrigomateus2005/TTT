declare class C_PrvGrpProd extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Grupo_Produto> {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly Grid: MouraGridViewJS;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly lstPartesManequim: MouraListBoxEmpresa;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Grupo_Produto): void;
    protected OnDepoisDeletar(): boolean;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Grupo_Produto): void;
    protected OnDepoisSetEntidade(Entity: SiSMoura.Core.Entity.Grupo_Produto): void;
    protected ValidarAntesGravar(entity: SiSMoura.Core.Entity.Grupo_Produto): boolean;
    protected ProcuraEmpresa(codEmpresa: number, lista: SiSMoura.Core.Entity.Provador_Grupo_Empresa[]): SiSMoura.Core.Entity.Provador_Grupo_Empresa;
    protected AntesGravarPartesManequim(entidade: SiSMoura.Core.Entity.Grupo_Produto): void;
    protected ProcuraPartesManequim(codParteManequim: number, lista: SiSMoura.Core.Entity.Provador_Grupo_Corpo[]): SiSMoura.Core.Entity.Provador_Grupo_Corpo;
    protected PreencherGrade(): void;
}
declare var c_PrvGrpProd: C_PrvGrpProd;
//# sourceMappingURL=C_PrvGrpProd.d.ts.map