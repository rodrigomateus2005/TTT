declare class R_ImDCol extends MouraPage {
    readonly fileUpload: MouraFileUpload;
    readonly lblNomeArquivo: MouraLabel;
    protected Init(): void;
    protected OnFilesUploadStart(source: DevExpress.Web.Scripts.ASPxClientUploadControl, ev: any): void;
    protected replaceSpecialChars(str: any): any;
}
declare var r_ImDCol: R_ImDCol;
//# sourceMappingURL=R_ImDCol.d.ts.map