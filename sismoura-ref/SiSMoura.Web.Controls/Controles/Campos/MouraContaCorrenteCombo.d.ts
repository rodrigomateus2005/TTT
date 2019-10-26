declare class MouraContaCorrenteCombo extends MouraCampo {
    private config;
    Config: string;
    private _valueItemTodos;
    ValueItemTodos: string;
    readonly Combo: DevExpress.Web.Scripts.ASPxClientComboBox;
    readonly LabelBanco: HTMLLabelElement;
    readonly LabelAgencia: HTMLLabelElement;
    readonly LabelContaCorrente: HTMLLabelElement;
    readonly HiddenSourceJSON: HTMLInputElement;
    readonly hdnEmpresas: HTMLInputElement;
    readonly CheckBox: MouraCheckBox;
    DataSource: SiSMoura.Core.Entity.Conta_Corrente[];
    constructor(id: string);
    protected IniciarEventos(): void;
    protected OnComboInit(): void;
    OnCheckInativos(): void;
    protected OnComboSelectedIndexChanged(sender: DevExpress.Web.Scripts.ASPxClientComboBox, e: DevExpress.Web.Scripts.ASPxClientEventArgs): void;
    Limpar(): void;
    AtualizarLabels(): void;
    GetEmpresa(): number;
    SetContaCorrente(value: string): void;
    GetContaCorrente(): string;
    GetContaCorrenteText(): string;
    protected GetItemSelecionado(): SiSMoura.Core.Entity.Conta_Corrente;
    Preencher(codEmpresas: number[], somenteAtivos: boolean): void;
    IsValido(): boolean;
}
//# sourceMappingURL=MouraContaCorrenteCombo.d.ts.map