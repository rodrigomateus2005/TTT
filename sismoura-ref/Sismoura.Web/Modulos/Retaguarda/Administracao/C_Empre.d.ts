declare class C_Empre extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Empresa> {
    readonly txtCNPJ: MouraTextBoxCPF;
    readonly txtIE: MouraTextBox;
    readonly txtIM: MouraTextBox;
    readonly txtRazaoSocial: MouraTextBox;
    readonly txtNomeFantasia: MouraTextBox;
    readonly txtCep: MouraTextBoxCep;
    readonly txtCodPostal: MouraTextBox;
    readonly txtCidade: MouraTextBoxProcura;
    readonly txtPais: MouraTextBoxProcura;
    readonly txtNumeroMatriz: MouraTextBoxProcura;
    readonly cboTipoEmpresaMulti: MouraComboBox;
    readonly lstRegimeIncidencia: MouraRadioButtonList;
    readonly cboTipoCadastroNFP: DevExpress.Web.Scripts.ASPxClientComboBox;
    readonly cboIndicadorCriterio: MouraComboBox;
    readonly chkUtilizarSPED: MouraCheckBox;
    readonly tab: MouraTabPanel;
    readonly txtNomeContabilista: MouraTextBox;
    readonly txtCPFContabilista: MouraTextBoxCPF;
    readonly txtContabilistaCRC: MouraTextBox;
    readonly txtCNPJEscritorio: MouraTextBoxCPF;
    readonly txtEscritorioCEP: MouraTextBoxCep;
    readonly txtEscritorioEndereco: MouraTextBox;
    readonly txtEscritorioNumero: MouraTextBox;
    readonly txtEscritorioBairro: MouraTextBox;
    readonly txtEscritorioCidade: MouraTextBoxProcura;
    readonly txtEscritorioRazao_Social: MouraTextBox;
    readonly txtEscritorioFone: MouraTextBox;
    readonly txtEscritorioMail: MouraTextBox;
    readonly btnAtualizarNumeroMaquinas: MouraButton;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly mdMaquinas: MouraModal;
    readonly lblSenha: HTMLElement;
    readonly txtSenha: MouraTextBox;
    readonly btnGravar: MouraButton;
    readonly btnCancelar: MouraButton;
    readonly txtAliquota: MouraTextBox;
    readonly txtMsgInfCompl: MouraTextBox;
    readonly agp1: HTMLInputElement;
    readonly txtUsuario_AT: MouraTextBox;
    readonly txtSenha_AT: MouraTextBox;
    readonly txtCapital_Social: MouraTextBox;
    readonly cboUF_IEOutros: MouraComboBox;
    readonly txtIEOutros: MouraTextBox;
    readonly txtDadosAdicionais_IEOutros: MouraTextBox;
    readonly gridIEOutros: MouraGridViewJSEditavel;
    InscricoesEstaduais_Outros: SiSMoura.Core.Entity.Empresa_Ie_Outros_Estados[];
    InscricaoEstadual_Outros: SiSMoura.Core.Entity.Empresa_Ie_Outros_Estados;
    protected Init(): void;
    OnPageLoad(): void;
    protected OntxtNumeroMatrizAntesAbrirProcura(s: any, e: MouraTextBoxProcuraAntesAbrirProcuraEventArgs): void;
    protected OntxtNumeroMatrizProcurou(s: MouraTextBoxProcura, e: MouraEventArgs): void;
    protected ValidarTipoEmpresa(): void;
    protected OnClickGravarNumeroMaquinas(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickCancelarNumeroMaquinas(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickAtualizarNumeroMaquinas(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Empresa): void;
    protected SetEnabledBtnAtualizarMaquinas(Entidade: SiSMoura.Core.Entity.Empresa): void;
    protected MudouTipoRegimeTributario(newValue: any, oldValue: any): void;
    protected MarcarContadorObrigatorio(flag: boolean): void;
    protected MudouTipo(newValue: any, oldValue: any): void;
    protected OnConsultarCEP(s: any, e: MouraTextBoxCepPesquisouEventArgs): void;
    protected OnDigitouRazaoSocial(): void;
    protected OnMudouPais(): void;
    protected AlterarVisiblePortugal(flag: boolean): void;
    protected OnAntesSetEntidade(eventArg: MouraEntidadeCancelavel<SiSMoura.Core.Entity.Empresa>): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Empresa): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected HabilitarTxtFazenda(entidade: SiSMoura.Core.Entity.Empresa): void;
    protected OnValidandoIEOutros(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected PreencherGrade_IEOutros(): void;
    protected habilitaDesabilitaCampos_IEOutros(flag: boolean): void;
}
declare var c_Empre: C_Empre;
//# sourceMappingURL=C_Empre.d.ts.map