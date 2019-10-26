declare class MouraPivotGridJS extends MouraControl {
    CellClick: MouraGenericEventHandler<any, any>;
    readonly cboTipoGrafico: MouraComboBox;
    readonly cboLayout: MouraComboBox;
    readonly pnGridPrincipal: HTMLDivElement;
    readonly divGrid: HTMLDivElement;
    readonly divGrafico: HTMLDivElement;
    readonly btnSalvarLayout: MouraButton;
    readonly btnNovoLayout: MouraButton;
    readonly btnExcluirLayout: MouraButton;
    readonly btnFullScreen: MouraButton;
    readonly btnGrafico: MouraButton;
    readonly btnFecharGrafico: MouraButton;
    readonly mdGrafico: MouraModal;
    readonly Grid: DevExpress.ui.dxPivotGrid;
    private _grafico;
    Grafico: DevExpress.viz.dxChart;
    private _dataSourceObject;
    DataSourceObject: DevExpress.data.PivotGridDataSource;
    private _nomeBI;
    NomeBI: string;
    private _alturaGrade;
    AlturaGrade: number;
    private _colunasIniciais;
    ColunasIniciais: Array<DevExpress.data.PivotGridField>;
    constructor(id: string);
    protected IniciarEventos(): void;
    LimparGrid(removerColunas: boolean): void;
    protected OnClickBotaoFull(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickBotaoGrafico(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickBotaoFecharGrafico(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnFechouModal(s: any, e: any): void;
    private widthPanel;
    GrdFullScreen(): void;
    protected IsGradeFullScreen(pnGrade: JQuery): boolean;
    protected AtualizarComboLayout(codLayoutSelecionar: number): void;
    private criarGrid;
    protected OnCellClick(e: any): void;
    private EsconderGrafico;
    private MostrarGrafico;
    private CriarDataSourceObject;
    PreencherGrade(data: Array<any>): void;
    private setDataSourceGrid;
    IniciarGrade(colunas: Array<DevExpress.data.PivotGridField>): void;
    protected CriarColunasGrade(colunas: Array<DevExpress.data.PivotGridField>): void;
    protected OnAlterouComboGrafico(s: any, e: any): void;
    protected OnAlterouComboLayout(s: any, e: any): void;
    FuncaoFormataNumeroGrid(casasDecimais: number): (value: any) => any;
    protected OnClickBotaoExcluirLayout(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected ExcluirLayout(codLayout: number): void;
    protected OnClickBotaoNovoLayout(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickBotaoSalvarLayout(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected InputBoxLayout(codLayout: number, descricao: string): void;
    protected SalvarLayout(codLayout: number, descricao: string): void;
}
//# sourceMappingURL=MouraPivotGridJS.d.ts.map