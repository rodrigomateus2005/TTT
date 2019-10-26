declare class C_Criado extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Criador> {
    readonly btnImportar: MouraButton;
    readonly mdFornecedor: MouraModal;
    readonly txtCep: MouraTextBoxCep;
    readonly txtCPF: MouraTextBoxCPF;
    readonly txtNome: MouraTextBox;
    readonly txtRG: MouraTextBox;
    readonly txtFantasia: MouraTextBox;
    readonly txtApelido: MouraTextBox;
    readonly txtFornecedor: MouraTextBoxProcura;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly mdCriadoresDuplicados: MouraModal;
    readonly grdCriadoresDuplicados: MouraGridViewJS;
    readonly lstTipo: MouraRadioButtonList;
    protected Init(): void;
    private SelecionarCriador;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Animais_Criador): void;
    protected OnAntesGravar(): boolean;
    protected OnRespondeuMensagemExistente(result: MsgBoxResultEventArgs): void;
    protected OnProcurouFornecedor(): void;
    protected GetDadosFornecedor(codigo: number): SiSMoura.Core.Entity.Fornecedor;
    protected OnConsultarCEP(s: any, e: MouraTextBoxCepPesquisouEventArgs): void;
    OnPageLoad(): void;
    protected MudouTipo(newValue: any, oldValue: any): void;
    protected MudarLabelComponente(componente: MouraCampo, novoTexto: string): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Criador): void;
    protected OnDepoisGravar(): boolean;
    protected OnClickImportar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
    protected OnTextBoxCpfChange(): void;
    protected OnRepostaVisualizarCriadorCPF(result: MsgBoxResultEventArgs): void;
    protected OnDepoisSetEntidade(Entidade: SiSMoura.Core.Entity.Animais_Criador): void;
}
declare var c_Criado: C_Criado;
//# sourceMappingURL=C_Criado.d.ts.map