declare class MouraSignaturePad extends MouraControl {
    private signaturePad;
    Salvou: MouraEventHandler;
    readonly hdnImagem: HTMLInputElement;
    readonly Modal: DevExpress.Web.Scripts.ASPxPopupControl;
    readonly Canvas: HTMLCanvasElement;
    readonly btnSalvar: HTMLButtonElement;
    readonly btnLimpar: HTMLButtonElement;
    assinaturaBase64: string;
    constructor(id: string);
    protected IniciarEventos(): void;
    protected OnBtnLimparClick(ev: JQueryEventObject): void;
    protected OnBtnSalvarClick(ev: JQueryEventObject): void;
    abrir(): void;
    limpar(): void;
    setEnabled(flag: boolean): void;
    atualizarAssinatura(): void;
}
//# sourceMappingURL=MouraSignaturePad.d.ts.map