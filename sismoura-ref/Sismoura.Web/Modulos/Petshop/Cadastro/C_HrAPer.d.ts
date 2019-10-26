declare class C_HrAPer extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Profissional_Horario_Periodo> {
    readonly grid: MouraGridViewJS;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtProfissional: MouraTextBoxProcura;
    readonly txtSala: MouraTextBoxProcura;
    readonly lstDia: MouraCheckBoxList;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly cboCategoriaPeriodo: MouraComboBox;
    readonly txtHora: MouraTextBoxHora;
    readonly txtHoraFinal: MouraTextBoxHora;
    readonly txtIntervalo: MouraTextBox;
    readonly dlgTelaModal: MouraTelaModal;
    readonly btnIndisponibilidade: MouraButton;
    private _codProfissional;
    protected Init(): void;
    protected OncboEmpresaSelectedItemChanged(): void;
    protected OnClickIndisponibilidade(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnDepoisBuscarProfissional(): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Profissional_Horario_Periodo): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisDeletar(): boolean;
    protected OnAntesGravar(): boolean;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGrade(): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Profissional_Horario_Periodo): void;
}
declare const c_HrAPer: C_HrAPer;
//# sourceMappingURL=C_HrAPer.d.ts.map