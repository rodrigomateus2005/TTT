declare class MouraComboBoxPDV extends MouraControl {
    ComboPDVSelectedIndexChanged: MouraEventHandler;
    ListaEmpresaSelectedIndexChanged: MouraEventHandler;
    readonly divBotao: JQuery<HTMLElement>;
    readonly divCombo: JQuery<HTMLElement>;
    readonly divTotal: JQuery<HTMLElement>;
    readonly cboPdv: MouraComboBox;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly agrupamento: MouraAgrupamento;
    private _exibirListBoxEmpresa;
    ExibirListBoxEmpresa: boolean;
    private _selecionarEmpresaPadrao;
    SelecionarEmpresaPadrao: boolean;
    private _EmpresaAutoPostBack;
    EmpresaAutoPostBack: boolean;
    private _PdvAutoPostBack;
    PdvAutoPostBack: boolean;
    readonly dlgAnexo: MouraModal;
    protected IniciarEventos(): void;
    protected OnComboChange(): void;
    protected ListaSelectedIndexChanged(): void;
    protected listPDV: any[];
    Limpar(): void;
    readonly EmpresasSelecionadas: string[];
    readonly PDVSelecionado: number;
    readonly PDVSCarregados: number[];
    constructor(id: string);
    private OnSelectedIndexChange;
    OnClickDesmarcar(): void;
}
//# sourceMappingURL=MouraComboBoxPDV.d.ts.map