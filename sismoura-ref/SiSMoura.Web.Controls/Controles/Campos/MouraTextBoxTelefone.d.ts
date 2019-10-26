declare class MouraTextBoxTelefone extends MouraCampo {
    readonly TextBoxDDD: HTMLInputElement;
    readonly TextBoxTelefone: HTMLInputElement;
    constructor(id: string);
    protected IniciarEventos(): void;
    protected OnTextBoxDDDKeyPress(ev: JQueryKeyEventObject): boolean;
    protected OnTextBoxDDDKeyUp(ev: JQueryKeyEventObject): void;
    GetText(): string;
    private tipo;
    Tipo: MouraTextBoxTipo;
    IsValido(): boolean;
}
//# sourceMappingURL=MouraTextBoxTelefone.d.ts.map