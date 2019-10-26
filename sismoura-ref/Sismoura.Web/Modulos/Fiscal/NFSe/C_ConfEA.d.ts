declare class C_ConfEA extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Config_Envio_Automatico> {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly cboSerie: MouraComboBox;
    readonly txtDiaEmissao: MouraTextBox;
    readonly cboTipoCompetencia: MouraComboBox;
    readonly cboServico: MouraComboBox;
    readonly cboServicoEspecifico: MouraComboBox;
    readonly txtDescricaoServico: MouraTextBox;
    readonly chkEmissaoTodos: MouraCheckBox;
    readonly chkIssRetido: MouraCheckBox;
    readonly txtCidade: MouraTextBoxProcura;
    readonly txtValorEmissao: MouraTextBox;
    readonly grid: MouraGridViewJS;
    ServicoItens: SiSMoura.Core.Entity.Config_Envio_Automatico_Servico[];
    Servico: SiSMoura.Core.Entity.Config_Envio_Automatico_Servico;
    readonly gridServicos: MouraGridViewJSEditavel;
    protected Init(): void;
    OnPageLoad(): void;
    protected PreencherGrade(): void;
    protected PreencherGradeServico(Entidade: SiSMoura.Core.Entity.Config_Envio_Automatico): void;
    protected PreencherComboServico(): void;
    protected OnSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnSelecionouLinhaServico(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnAntesGravar(): boolean;
    protected OnValidando(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected CheckChange(): void;
    protected OnAntesDeletar(): boolean;
    protected OnDepoisDeletar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Config_Envio_Automatico): void;
    protected LimparCampos(): void;
}
declare const c_ConfEA: C_ConfEA;
//# sourceMappingURL=C_ConfEA.d.ts.map