declare class MouraComboBoxEmpresa extends MouraListControlEmpresa {
    SelectedItemChanged: MouraEventHandler;
    readonly Combo: HTMLSelectElement;
    readonly PainelPrincipal: HTMLSpanElement;
    constructor(id: string);
    protected IniciarEventos(): void;
    private OnComboChange;
    GetValue(): number;
    GetText(): string;
    Visible: boolean;
    Enabled: boolean;
    SetValue(value: number): void;
    LimparSelecao(): void;
    Focus(): void;
    IsValido(): boolean;
    private readOnly;
    ReadOnly: boolean;
    Disabled: boolean;
    Preencher(): void;
    Preencher(codigoUsuario: number): void;
    Preencher(codigoUsuario: number, regioes: string, estados: string, cidades: string): void;
    AdicionarItem(item: string): any;
    AdicionarItem(item: string, key: string): any;
    Limpar(): void;
}
//# sourceMappingURL=MouraComboBoxEmpresa.d.ts.map