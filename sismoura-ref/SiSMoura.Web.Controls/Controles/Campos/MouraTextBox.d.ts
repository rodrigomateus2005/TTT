declare enum MouraTextBoxTipo {
    Texto = 0,
    Numerico = 1,
    Decimal = 2
}
declare class MouraTextBox extends MouraCampo {
    TextChanged: MouraEventHandler;
    LostFocus: MouraEventHandler;
    private tipo;
    Tipo: MouraTextBoxTipo;
    private quantidadeCasas;
    QuantidadeCasas: number;
    private permitirVazio;
    PermitirVazio: boolean;
    private permitirZeroEsquerda;
    PermitirZeroEsquerda: boolean;
    private permitirSomenteNegativo;
    PermitirSomenteNegativo: boolean;
    private permitirSomentePositivo;
    PermitirSomentePositivo: boolean;
    readonly Textbox: HTMLInputElement;
    private readOnly;
    ReadOnly: boolean;
    Disabled: boolean;
    Enabled: boolean;
    constructor(id: string);
    protected IniciarEventos(): void;
    GetText(): string;
    SetText(valor: string): void;
    Limpar(): void;
    Focus(): void;
    SelectAll(): void;
    protected OnTextBoxKeyPress(ev: JQueryKeyEventObject): void;
    protected OnTextBoxKeyDown(ev: JQueryKeyEventObject): void;
    protected OnTextBoxKeyUp(ev: JQueryKeyEventObject): void;
    protected OnTextBoxChange(ev: JQueryEventObject): void;
    protected OnTextBoxBlur(ev: JQueryEventObject): void;
    protected verificanumeros(e: any): boolean;
    protected verificadecimais(e: any): boolean;
    IsValido(): boolean;
    iniciarMascara(mascara: string): void;
}
//# sourceMappingURL=MouraTextBox.d.ts.map