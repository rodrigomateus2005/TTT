declare class MouraFotosPastaJS extends MouraControl {
    Pasta: string;
    readonly hdnPasta: HTMLInputElement;
    readonly uploader: MouraFileUploadJS;
    readonly botaoRemover: MouraButton;
    readonly DivComponente: HTMLDivElement;
    protected _fileUploader: any;
    readonly fileUploader: DevExpress.ui.dxGallery;
    constructor(id: string);
    protected IniciarEventos(): void;
    protected IniciarComponente(): void;
    private PreencherImagens;
    SetEnabled(value: boolean): void;
    private OnUploaderFilesUploadComplete;
    selectedIndex: number;
    readonly selectedItem: string;
    readonly Items: Array<string>;
    private OnBotaoRemoverClick;
    Atualizar(): void;
    Limpar(): void;
    RespostaMessageBox(result: MsgBoxResultEventArgs): void;
    ExcluirSelecionada(): void;
}
//# sourceMappingURL=MouraFotosPastaJS.d.ts.map