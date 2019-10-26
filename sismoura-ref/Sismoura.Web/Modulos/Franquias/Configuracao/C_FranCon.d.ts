declare class C_FranCon extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Franquia_Situacao> {
    readonly htmlEditor: MouraHTMLEditor;
    readonly lblAvisoEmail: MouraLabel;
    readonly corpoEmail: HTMLDivElement;
    readonly btnTag: MouraButton;
    readonly txtTagsDisponiveis: MouraTextBox;
    readonly mdTags: MouraModal;
    readonly txtMensagem: MouraTextBox;
    readonly txtAssunto: MouraTextBox;
    readonly cboEmail: MouraComboBox;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected MudouAcao(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Franquia_Situacao): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Franquia_Situacao): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnClickTag(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected GetTags(): string;
}
declare var c_FranCon: C_FranCon;
//# sourceMappingURL=C_FranCon.d.ts.map