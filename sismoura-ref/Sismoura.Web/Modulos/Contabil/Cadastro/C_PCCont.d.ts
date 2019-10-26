declare class C_PCCont extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Contabil_Plano_Contas> {
    readonly txtcodigo_hdnempresacontabil: HTMLInputElement;
    readonly cboEmpresa: MouraComboBox;
    readonly txtDescricao: MouraTextBox;
    readonly txtCodigo: MouraTextBoxProcuraContabil;
    readonly txtCodigoContabil: MouraTextBox;
    readonly cboTipo: MouraComboBox;
    readonly cboOrigem: MouraComboBox;
    readonly cboModalidade: MouraComboBox;
    readonly cboNaturezaSped: MouraComboBox;
    readonly txtPlanoContasSped: MouraTextBoxProcura;
    readonly ckbInativo: MouraCheckBox;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly btnReplicar: MouraButton;
    readonly btnGerar: MouraButton;
    readonly btnCancelar: MouraButton;
    readonly btnReplicarConfirmar: MouraButton;
    readonly grd: MouraGridViewJSEditavel;
    readonly grdReplicar: MouraGridViewJSEditavel;
    readonly mdReplicar: MouraModal;
    Contas: SiSMoura.Core.Entity.Contabil_Plano_Contas[];
    Empresas: SiSMoura.Core.Entity.Contabil_Plano_Contas[];
    protected Init(): void;
    protected OnGerouReplicar(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected OnGerouLinhaSintetica(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    OnPageLoad(): void;
    protected onEmpresaChange(): void;
    protected BuscarGrid(): void;
    protected validaTipo(): void;
    preencherempresacontabil(): void;
    protected onGridSelecionouLinha(s: any, e: MouraGridViewJSEditavelItemEventArgs): void;
    protected OnClickReplicar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected cancelarModalClick(): void;
    protected replicarConfirmar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected ReplicarPlanoContas(): void;
    protected oncodigoantesabrirprocura(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraAntesAbrirProcuraEventArgs): void;
    protected OnDepoisGravar(): boolean;
    protected OnAntesGravar(): boolean;
    protected OnDepoisDeletar(): boolean;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Contabil_Plano_Contas): void;
    protected OnDepoisLimpar(Entidade: SiSMoura.Core.Entity.Contabil_Plano_Contas): void;
    protected LimparCampos(): void;
    protected gerarSituacaoClick(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickCancelar(s: MouraButton, e: MouraClickEventArgs): void;
    protected gerarSituacao(): void;
    protected oncodigopesquisando(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraContabilPesquisandoEventArgs): void;
}
declare var c_PCCont: C_PCCont;
//# sourceMappingURL=C_PCCont.d.ts.map