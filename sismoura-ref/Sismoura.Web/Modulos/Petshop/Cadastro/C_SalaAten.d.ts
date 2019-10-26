declare class C_SalaAten extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Sala> {
    readonly Grid: MouraGridViewJSEditavel;
    readonly GridCadastrados: MouraGridViewJS;
    Grupos: SiSMoura.Core.Entity.AnimaisSalaGrupoRetorno[];
    Grupo: SiSMoura.Core.Entity.AnimaisSalaGrupoRetorno;
    readonly txtServico: MouraTextBoxProcura;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly lstEmpresaDestino: MouraListBoxEmpresa;
    readonly lstSalas: MouraCheckBoxList;
    readonly mdReplicar: MouraModal;
    readonly lblEmpresaOrigem: MouraLabel;
    readonly btnOK: MouraButton;
    readonly btnReplicar: MouraButton;
    readonly btnCancelar: MouraButton;
    readonly txtCodigo: MouraTextBoxProcura;
    protected Init(): void;
    protected OnCodigoAntesAbrirProcura(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraAntesAbrirProcuraEventArgs): void;
    protected OnExpanded(): void;
    protected OnClickBotaoOk(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
    protected OnClickBotaoCancelar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
    protected OnClickBotaoReplicar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
    protected OnMudouEmpresa(): void;
    protected OnValidandoAlteracao(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Sala): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(empresa: number): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Animais_Sala): void;
    protected OnAntesGravar(): boolean;
}
declare const c_SalaAten: C_SalaAten;
//# sourceMappingURL=C_SalaAten.d.ts.map