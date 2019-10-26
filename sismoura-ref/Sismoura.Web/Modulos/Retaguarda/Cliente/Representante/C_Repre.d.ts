declare class C_Repre extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Representante> {
    readonly txtCep: MouraTextBoxCep;
    readonly txtCPF: MouraTextBoxCPF;
    readonly txtRG: MouraTextBox;
    readonly txtFantasia: MouraTextBox;
    readonly btnVeiculo: MouraButton;
    readonly lblDataCadastro: MouraLabel;
    readonly lblDataAlteracao: MouraLabel;
    readonly txtFone1: MouraTextBox;
    readonly txtFone2: MouraTextBox;
    readonly txtFone_Trabalho: MouraTextBox;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entidade: SiSMoura.Core.Entity.Representante): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected MudouTipo(newValue: any, oldValue: any): void;
    protected MudarLabelComponente(componente: MouraCampo, novoTexto: string): void;
    protected OnConsultarCEP(s: any, e: MouraTextBoxCepPesquisouEventArgs): void;
    protected OnDepoisSetEntidade(Entidade: SiSMoura.Core.Entity.Representante): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Representante): void;
    protected OnClickVeiculo(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected AtualizarData(Entidade: SiSMoura.Core.Entity.Representante): void;
    protected PreencherCidadeEmpresa(Entidade: SiSMoura.Core.Entity.Representante): void;
    protected VerificarConfiguracoesVeiculo(): void;
    protected VerificarConfiguracaoTelefone(): void;
}
declare var c_Repre: C_Repre;
//# sourceMappingURL=C_Repre.d.ts.map