declare class C_CodRec extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Fiscal_Codigo_Receita> {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly cboUF: MouraComboBox;
    readonly txtCodigoReceita: MouraTextBox;
    readonly txtDescricao: MouraTextBox;
    readonly txtValidadeInicial: MouraTextBoxData;
    readonly txtValidadeFinal: MouraTextBoxData;
    readonly Grid: MouraGridViewJS;
    readonly lblNomeArquivo: MouraLabel;
    readonly hdnPath: HTMLInputElement;
    readonly btnImportar: MouraButton;
    readonly fileUpload: MouraFileUpload;
    protected Init(): void;
    protected BuscarGrade(): void;
    protected OnGrdSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisDeletar(): boolean;
    protected OnFilesUploadStart(source: DevExpress.Web.Scripts.ASPxClientUploadControl, ev: any): void;
    protected OnFilesUploadComplete(source: DevExpress.Web.Scripts.ASPxClientUploadControl, ev: any): void;
    protected OnClickImportar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnAntesGravar(): boolean;
}
declare var c_CodRec: C_CodRec;
//# sourceMappingURL=C_CodRec.d.ts.map