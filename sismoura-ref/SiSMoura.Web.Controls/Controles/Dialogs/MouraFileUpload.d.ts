declare class MouraFileUpload extends MouraControl {
    FileUploadComplete: MouraGenericEventHandler<MouraFileUpload, DevExpress.Web.Scripts.ASPxClientUploadControlFileUploadCompleteEventArgs>;
    FileUploadStart: MouraEventHandler;
    readonly FileName: string;
    readonly FileUpload: DevExpress.Web.Scripts.ASPxClientUploadControl;
    constructor(id: string);
    protected IniciarEventos(): void;
    private OnFileUploadComplete;
    private OnFileUploadStart;
}
//# sourceMappingURL=MouraFileUpload.d.ts.map