declare class MouraCheckBox extends MouraCampo {
    CheckChanged: MouraEventHandler;
    readonly Check: HTMLInputElement;
    readonly DivText: HTMLDivElement;
    Checked: boolean;
    Text: string;
    constructor(id: string);
    protected IniciarEventos(): void;
    protected OnCheckChanged(): void;
}
//# sourceMappingURL=MouraCheckBox.d.ts.map