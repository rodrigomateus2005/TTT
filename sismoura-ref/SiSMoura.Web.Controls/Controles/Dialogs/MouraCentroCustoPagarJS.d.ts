declare class MouraCentroCustoPagarJS extends MouraControl {
    InformouCentroCusto: MouraGenericEventHandler<any, MouraEventArgs>;
    readonly pnModal: MouraModal;
    readonly btnOK: MouraButton;
    readonly btnAdicionar: MouraButton;
    readonly txtCentroCustoCodigo: MouraTextBoxProcura;
    readonly lblValor: MouraLabel;
    readonly txtValorTotal: MouraTextBox;
    readonly lblValorTotalPago: MouraLabel;
    readonly grd: MouraGridViewJS;
    readonly hdnCentrosCusto: HTMLInputElement;
    readonly hdnCodContaPagar: HTMLInputElement;
    readonly hdnValorPago: HTMLInputElement;
    readonly hdnCodUsuario: HTMLInputElement;
    readonly hdnTela: HTMLInputElement;
    CentrosCusto: SiSMoura.Core.Entity.ContasPagarCentroCustoRetorno[];
    constructor(id: string);
    protected IniciarEventos(): void;
    Mostrar(codContaPagar: number, valorPago: number, tela: string, codUsuario: number): void;
    protected LimparCampos(): void;
    private OnClickOk;
    private InformarCentroCusto;
    private OnClickAdicionar;
    private AdicionarCentroCusto;
    private PreencherGrade;
    private LimparCamposCentroCusto;
    private OnBuscouCentroCustoCodigo;
    private GetByCodPagarCentroCusto;
    private OnGridExcluiuItem;
}
//# sourceMappingURL=MouraCentroCustoPagarJS.d.ts.map