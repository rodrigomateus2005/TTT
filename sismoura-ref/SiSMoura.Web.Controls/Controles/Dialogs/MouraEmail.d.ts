declare class MouraEmail extends MouraControl {
    EnviouEmail: MouraEventHandler;
    Destinatarios: string[];
    Anexos: AnexosDataSource[];
    readonly hdnDestinatarios: HTMLInputElement;
    readonly hdnAnexos: HTMLInputElement;
    readonly pnModal: MouraModal;
    readonly btnCancelar: MouraButton;
    readonly btnEnviar: MouraButton;
    readonly btnAtualizar: MouraButton;
    readonly txtEmail: MouraTextBox;
    readonly txtAssunto: MouraTextBox;
    readonly txtMensagem: MouraHTMLEditor;
    readonly grdAnexos: MouraGridViewJS;
    readonly fpArquivo: MouraFileUpload;
    readonly cboRemetentes: MouraComboBox;
    constructor(id: string);
    protected IniciarEventos(): void;
    protected OnBtnCancelarClick(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnBtnEnviarClick(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnBtnAtualizarClick(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnFpArquivoUploadComplete(s: MouraFileUpload, e: DevExpress.Web.Scripts.ASPxClientUploadControlFileUploadCompleteEventArgs): void;
    protected OnPnModalAbriu(s: any, e: MouraEventArgs): void;
    protected OnPnModalFechou(s: any, e: MouraEventArgs): void;
    protected OnGrdAnexosExcluiuLinhaGrade(s: any, e: MouraGridViewJSItemEventArgs): void;
    MostrarClient(destinatarios: string[], anexosFixos: string[], assuntoEmail: string, corpoEmail: string): void;
    PreencherInformacoesEmail(destinatarios: string[], anexosFixos: string[], assuntoEmail: string, corpoEmail: string, codRemetente: number): void;
    AdicionarAnexo(caminhoAspArquivo: string): void;
    LimparCampos(): void;
    preencherGrid(): void;
}
interface AnexosDataSource {
    Contador: number;
    FileName: string;
    FullFileName: string;
}
//# sourceMappingURL=MouraEmail.d.ts.map