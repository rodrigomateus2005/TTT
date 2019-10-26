declare class C_MailHosp extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Hospedagem_Email> {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly htmlEditorMensagem: MouraHTMLEditor;
    readonly txtTipoDocumento: MouraTextBoxProcura;
    Anexo: SiSMoura.Core.Entity.Animais_Hospedagem_Email_Anexos;
    Anexos: SiSMoura.Core.Entity.Animais_Hospedagem_Email_Anexos[];
    readonly grdAnexos: MouraGridViewJSEditavel;
    readonly grdRegistros: MouraGridViewJS;
    readonly optTipoHospedagem: MouraRadioButtonList;
    protected Init(): void;
    protected OnExcluiondoAnexo(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnAdicionandoAnexo(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected OnAntesGravar(): boolean;
    private ValidarCampos;
    protected OnDepoisGravar(): boolean;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Hospedagem_Email): void;
    protected GetCadastrados(): void;
    OnPageLoad(): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Animais_Hospedagem_Email): void;
    protected GetTags(): string;
}
declare var c_MailHosp: C_MailHosp;
//# sourceMappingURL=C_MailHosp.d.ts.map