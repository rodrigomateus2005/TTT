declare class MouraFotosPasta extends MouraControl {
    Pasta: string;
    readonly hdnPasta: HTMLInputElement;
    readonly img: DevExpress.Web.Scripts.ASPxClientImageSlider;
    readonly callBackPanel: MouraCallBackPanel;
    readonly uploader: MouraFileUpload;
    readonly botaoRemover: MouraButton;
    constructor(id: string);
    protected IniciarEventos(): void;
    SetEnabled(value: boolean): void;
    private OnUploaderFilesUploadComplete;
    private OnBotaoRemoverClick;
    Atualizar(): void;
    Limpar(): void;
    RespostaMessageBox(result: MsgBoxResultEventArgs): void;
    ExcluirSelecionada(): void;
}
//# sourceMappingURL=MouraFotosPasta.d.ts.map