declare class MouraFileUpdloadJsStartUpload {
    cancelar: boolean;
    fileName: string;
}
declare class MouraFileUploadJS extends MouraControl {
    FileUploadComplete: MouraGenericEventHandler<MouraFileUploadJS, any>;
    FileUploadStart: MouraGenericEventHandler<any, MouraFileUpdloadJsStartUpload>;
    ValueChanged: MouraGenericEventHandler<MouraFileUploadJS, any>;
    FileUploadInstance: DevExpress.ui.dxFileUploader;
    readonly DvFileUpload: HTMLDivElement;
    private _accept;
    Accept: string;
    private _pathSalvarArquivo;
    PathSalvarArquivo: string;
    private _file;
    File: File;
    readonly FileUpload: DevExpress.ui.dxFileUploader;
    Enabled: boolean;
    ChangeAccept(newAccept: string): void;
    private SetURLUpload;
    constructor(id: string);
    GetURLUpload(fileName: string): string;
    protected IniciarComponenteFileUpload(): void;
    protected IniciarEventos(): void;
    Limpar(): void;
    protected OnUploadStart(e: any): void;
    protected OnUploadComplete(e: any): void;
    protected OnValueChanged(e: any): void;
    AbrirTela(): void;
    EnviarArquivoAtual(nomeMetodoServer: string): Promise<any>;
}
//# sourceMappingURL=MouraFileUploadJS.d.ts.map