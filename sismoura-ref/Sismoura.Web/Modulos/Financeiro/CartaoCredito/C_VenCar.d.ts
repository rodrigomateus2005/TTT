declare class C_VenCar extends MouraPage {
    readonly fileUpload: MouraFileUpload;
    readonly lblNomeArquivo: MouraLabel;
    protected Init(): void;
    protected OnFilesUploadStart(source: MouraFileUpload, ev: MouraEventArgs): void;
    protected OnFilesUploadComplete(source: MouraFileUpload, ev: DevExpress.Web.Scripts.ASPxClientUploadControlFileUploadCompleteEventArgs): void;
    protected replaceSpecialChars(str: any): any;
}
declare const c_VenCar: C_VenCar;
//# sourceMappingURL=C_VenCar.d.ts.map