declare class MouraModalAnexo extends MouraControl {
    PathAnexo: string;
    constructor(id: string);
    readonly dlgAnexo: MouraModal;
    readonly fileUpload: MouraFileUpload;
    readonly grdAnexos: MouraGridViewJS;
    readonly cboTipo: MouraComboBox;
    readonly btnFechar: MouraButton;
    readonly btnAtualizarAnexos: MouraButton;
    readonly hdnPathAnexo: HTMLInputElement;
    protected IniciarEventos(): void;
    CarregarAnexos(path: string): boolean;
    Hide(): void;
    MostrarClient(path: string): void;
    private criarEAtualizarGradeArquivos;
    protected OnBtnAtualizarAnexosClick(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnBtnFecharClick(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnGrdAnexosSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnGrdAnexosExcluiuLinhaGrade(s: any, e: MouraGridViewJSItemEventArgs): void;
    protected OnFileUploadFilesUploadComplete(s: any, e: any): void;
}
//# sourceMappingURL=MouraModalAnexo.d.ts.map