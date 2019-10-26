declare class MouraTextBoxChat extends MouraCampo {
    readonly DivChat: HTMLDivElement;
    readonly SpanMensagem: HTMLSpanElement;
    constructor(id: string);
    protected IniciarEventos(): void;
    GetText(): string;
    SetText(value: string): void;
}
//# sourceMappingURL=MouraTextBoxChat.d.ts.map