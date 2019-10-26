declare class C_Conven extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Convenio> {
    readonly lstTipo: MouraRadioButtonList;
    readonly txtCPF: MouraTextBoxCPF;
    readonly txtRG: MouraTextBox;
    readonly txtCep: MouraTextBoxCep;
    readonly txtEndereco: MouraTextBox;
    readonly txtBairro: MouraTextBox;
    readonly txtNumero: MouraTextBox;
    readonly grdGrupos: MouraGridViewJSEditavel;
    readonly cboOperadora: MouraComboBox;
    readonly cboTipo_Custo: MouraComboBox;
    readonly cboContribuinte_ICMS: MouraComboBox;
    Grupos: SiSMoura.Core.Entity.ConvenioGrupoRetorno[];
    readonly txtDesconto: MouraTextBox;
    readonly txtAcrescimo: MouraTextBox;
    readonly txtLayout: MouraTextBoxProcura;
    protected Init(): void;
    OnPageLoad(): void;
    protected SetTextOnCpf(): void;
    protected BuscarGrid(): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Convenio): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    private PreencherGrupos;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected MudouTipo(newValue: any, oldValue: any): void;
    protected GetIcmsFromPessoa(codCliente: any): any;
    protected OnConsultarCEP(s: any, e: MouraTextBoxCepPesquisouEventArgs): void;
    protected OnDepoisSetEntidade(Entidade: SiSMoura.Core.Entity.Convenio): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Convenio): void;
    protected MudouPrecoCusto(): void;
}
declare const c_Conven: C_Conven;
//# sourceMappingURL=C_Conven.d.ts.map