declare class C_Grupo extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Grupo_Produto> {
    readonly Grid: MouraGridViewJS;
    readonly grdContaContabil: MouraGridViewJSEditavel;
    Conta: SiSMoura.Core.Entity.Grupo_Produto_Conta_Contabil;
    Contas: SiSMoura.Core.Entity.Grupo_Produto_Conta_Contabil[];
    readonly txtCodigo: MouraTextBoxProcura;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly cboGrupoMouraBurger: MouraComboBox;
    readonly txtPlanoContasSped: MouraTextBoxProcura;
    readonly txtDescricao: MouraTextBox;
    readonly acordContas: MouraAccordion;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnVerificaContaContabil(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Grupo_Produto): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Grupo_Produto): void;
    protected PreencherGrade(): void;
    protected PreencherGradeCC(Entity: SiSMoura.Core.Entity.Grupo_Produto): void;
    protected OnValidando(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected verificaEmpresaConta(codPlanoContaSpeed: any, codEmpresa: any): boolean;
    protected verificaGrupoEmpresa(codGrupo: any, codEmpresa: any): boolean;
    protected OnAntesGravar(): boolean;
    protected OnRespondeuMensagemExistente(result: MsgBoxResultEventArgs): void;
    protected LimparConta(): void;
    protected OnGridCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
}
declare var c_Grupo: C_Grupo;
//# sourceMappingURL=C_Grupo.d.ts.map