declare class MouraHTMLEditor extends MouraCampo {
    readonly Editor: DevExpress.Web.Scripts.ASPxClientHtmlEditor;
    readonly hdnFechar: HTMLInputElement;
    readonly hdnAbriuClient: HTMLInputElement;
    Html: string;
    protected IniciarEventos(): void;
    protected isFullScreen: boolean;
    ToggleFullscreen(): void;
    Mostrar(): void;
    Esconder(): void;
    Abrir(): void;
    Fechar(): void;
    protected OnCustomCommandHTMLEditor(s: any, e: any): void;
}
//# sourceMappingURL=MouraHTMLEditor.d.ts.map