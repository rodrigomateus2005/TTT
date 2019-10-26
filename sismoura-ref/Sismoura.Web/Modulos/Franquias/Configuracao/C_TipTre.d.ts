declare class C_TipTre extends MouraPage {
    readonly fileUpload: MouraFileUpload;
    readonly lblNomeArquivo: MouraLabel;
    readonly lblArquivoDownload: MouraLabel;
    protected Init(): void;
    protected OnFilesUploadStart(source: DevExpress.Web.Scripts.ASPxClientUploadControl, ev: any): void;
    protected replaceSpecialChars(str: any): any;
}
declare var c_TipTre: C_TipTre;
//# sourceMappingURL=C_TipTre.d.ts.map