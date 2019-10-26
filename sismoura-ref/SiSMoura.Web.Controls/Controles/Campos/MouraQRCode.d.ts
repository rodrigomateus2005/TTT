declare class MouraQRCode extends MouraControl {
    readonly DivQRCode: HTMLDivElement;
    readonly btnDownloadQRCode: MouraButton;
    private _data;
    Data: string;
    constructor(id: string);
    protected IniciarEventos(): void;
    protected OnClickDownloadQRCode(s: MouraButton, e: MouraClickEventArgs): void;
    protected OnGerarQRCode(text: any): void;
    protected OnDownloadQRCode(): void;
    SetText(valor: string): void;
    Limpar(): void;
}
declare var QRCode: any;
//# sourceMappingURL=MouraQRCode.d.ts.map