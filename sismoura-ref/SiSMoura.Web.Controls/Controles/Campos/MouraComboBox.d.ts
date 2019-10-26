declare class MouraComboBox extends MouraCampo {
    SelectedItemChanged: MouraEventHandler;
    readonly Combo: DevExpress.Web.Scripts.ASPxClientComboBox;
    private _valueEnabledFalse;
    ValueEnabledFalse: number;
    private _indexEnabledFalse;
    IndexEnabledFalse: number;
    constructor(id: string);
    protected IniciarEventos(): void;
    protected OnComboChange(): void;
    protected OnComboInit(): void;
    GetText(): string;
    GetValue(): any;
    GetSelectedIndex(): number;
    SetSelectedIndex(value: any): void;
    GetItemCount(): number;
    GetItensCombo(): Array<any>;
    SetValue(value: any): void;
    LimparSelecao(): void;
    Focus(): void;
    ClearItems(): void;
    AddItem(text: string, value: any, imageUrl: string): void;
    Enabled: boolean;
    Disabled: boolean;
    IsValido(): boolean;
}
//# sourceMappingURL=MouraComboBox.d.ts.map