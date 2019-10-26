declare class MouraImgUpdloadJsStartUpload {
    cancelar: boolean;
}
declare class MouraImgUploadJs extends MouraControl {
    readonly DivImg: HTMLDivElement;
    readonly Img: HTMLImageElement;
    readonly btnLimpar: MouraButton;
    ImgUploadComplete: MouraGenericEventHandler<MouraImgUploadJs, any>;
    ImgUploadStart: MouraGenericEventHandler<any, MouraImgUpdloadJsStartUpload>;
    private _titulo;
    Titulo: string;
    private _accept;
    Accept: string;
    private _maxSize;
    MaxSize: number;
    private _pathSalvarImg;
    PathSalvarImg: string;
    private _imagem;
    Imagem: File;
    readonly ImgUpload: DevExpress.ui.dxFileUploader;
    constructor(id: string);
    protected IniciarEventos(): void;
    protected OnClickLimpar(s: DevExpress.Web.Scripts.ASPxClientControl, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    SetText(valor: string): void;
    Limpar(): void;
    protected IniciarComponenteImgUpload(): void;
    protected OnUploadStart(e: any): boolean;
    OnConvertStringToByteArray(): number[];
    OnConvertByteArrayToString(img: any): string;
    FormatImg(): string;
    protected OnUploadComplete(e: any): void;
}
//# sourceMappingURL=MouraImgUploadJs.d.ts.map