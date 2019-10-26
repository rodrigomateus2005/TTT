declare class I_ConEst extends MouraPage {
    readonly fileUpload: MouraFileUpload;
    readonly lblNomeArquivo: MouraLabel;
    readonly lstArquivos: MouraListBox;
    readonly hdnNomeArquivo: HTMLInputElement;
    protected Init(): void;
    protected OnFilesUploadStart(source: DevExpress.Web.Scripts.ASPxClientUploadControl, ev: any): void;
    protected replaceSpecialChars(str: any): any;
}
declare const i_ConEst: I_ConEst;
//# sourceMappingURL=I_ConEst.d.ts.map