declare class C_TabPre extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Lista_Preco> {
    readonly txtCodigo: MouraTextBox;
    readonly txtDescricao: MouraTextBox;
    readonly cboPrecoBase: MouraComboBox;
    readonly cboOperacao: MouraComboBox;
    readonly txtMargem: MouraTextBox;
    readonly cboTipo: MouraComboBox;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly chkIsTabelaEspecial: MouraCheckBox;
    readonly divPeriodoListaPreco: HTMLElement;
    readonly Grid: MouraGridViewJS;
    readonly grdDiasSemana: MouraGridViewJSEditavel;
    Dias: SiSMoura.Core.Entity.ListaPrecoDiasRetorno[];
    Dia: SiSMoura.Core.Entity.ListaPrecoDiasRetorno;
    OnPageLoad(): void;
    protected Init(): void;
    protected PreencherGrade(): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnSelecionouAtualizarTodos(result: MsgBoxResultEventArgs): void;
    protected LimparCampos(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Lista_Preco): void;
    protected OnDepoisDeletar(): boolean;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Lista_Preco): void;
    protected PreencherEmpresas(empresas: SiSMoura.Core.Entity.Lista_Preco_Empresa[]): void;
    protected PreencherDias(dias: SiSMoura.Core.Entity.Lista_Preco_Dias[]): void;
    private RetornaDiaDescricao;
}
declare const c_TabPre: C_TabPre;
//# sourceMappingURL=C_TabPre.d.ts.map