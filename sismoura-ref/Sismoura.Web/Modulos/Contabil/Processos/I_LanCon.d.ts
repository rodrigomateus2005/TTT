declare class I_LanCon extends MouraPageAngular {
    readonly Grid: MouraGridViewJS;
    readonly fileUpload: MouraFileUpload;
    readonly lblNomeArquivo: MouraLabel;
    readonly btnGerar: MouraButton;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly btnGravar: MouraButton;
    readonly btnNovo: MouraButton;
    PathArquivo: string;
    protected Init(): void;
    OnClickNovo(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnFilesUploadStart(source: MouraFileUpload, ev: MouraEventArgs): void;
    protected replaceSpecialChars(str: any): any;
    protected LimparCampos(): void;
    protected OnClickGerar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnFileUploadCompleted(s: any, e: DevExpress.Web.Scripts.ASPxClientUploadControlFileUploadCompleteEventArgs): void;
}
declare const i_LanCon: I_LanCon;
//# sourceMappingURL=I_LanCon.d.ts.map