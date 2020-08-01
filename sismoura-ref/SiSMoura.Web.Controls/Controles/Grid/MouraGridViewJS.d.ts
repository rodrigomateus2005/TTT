declare class MouraGridViewJS extends MouraControl {
    private ID_COLUNA_FINAL;
    ExcluindoLinhaGrade: MouraGenericEventHandler<any, MouraGridViewJSItemCancelavelEventArgs>;
    ExcluiuLinhaGrade: MouraGenericEventHandler<any, MouraGridViewJSItemEventArgs>;
    ClickBotaoLinha: MouraGenericEventHandler<any, MouraGridViewJSClickBotaoLinhaEventArgs>;
    SelecionouLinha: MouraGenericEventHandler<any, MouraGridViewJSClickBotaoLinhaEventArgs>;
    ClickBotaoImprimir: MouraGenericEventHandler<any, MouraGridViewJSClickBotaoLinhaEventArgs>;
    EditouItemGrade: MouraGenericEventHandler<any, MouraGridViewJSItemEventArgs>;
    KeyDown: MouraGenericEventHandler<any, any>;
    RowClick: MouraGenericEventHandler<any, any>;
    RowDblClick: MouraGenericEventHandler<any, any>;
    CellClick: MouraGenericEventHandler<any, any>;
    CellPrepared: MouraGenericEventHandler<any, MouraGridViewJSCellPreparedEventArgs>;
    RowValidating: MouraGenericEventHandler<any, any>;
    SalvandoArquivo: MouraGenericEventHandler<any, any>;
    CalculateCustomSummary: MouraGenericEventHandler<any, MouraGridViewCalculateCustomSummary>;
    CellComboBoxOpened: MouraGenericEventHandler<any, MouraGridViewJSCellComboBoxOpened>;
    constructor(id: string);
    readonly tbMain: HTMLDivElement;
    readonly tbMainJQuery: JQuery<HTMLElement>;
    readonly pnPrincipal: HTMLDivElement;
    readonly hdnSource: HTMLInputElement;
    readonly hdnTam: HTMLInputElement;
    readonly btnSalvarLayout: DevExpress.Web.Scripts.ASPxClientButton;
    readonly btnImprimirExcel: DevExpress.Web.Scripts.ASPxClientButton;
    readonly btnImprimirGrade: DevExpress.Web.Scripts.ASPxClientButton;
    readonly btnImprimirPDF: DevExpress.Web.Scripts.ASPxClientButton;
    readonly btnFullScreen: DevExpress.Web.Scripts.ASPxClientButton;
    readonly hdnDadosLinhasSelecionadas: HTMLInputElement;
    private _permitirMoverColunas;
    PermitirMoverColunas: boolean;
    private _permitirAgruparColunas;
    PermitirAgruparColunas: boolean;
    private _colunas;
    Colunas: SiSMoura.Core.Entity.MouraGridColumn[];
    private _visible;
    Visible: boolean;
    private _salvarStateGrid;
    SalvarStateGrid: boolean;
    private _enabled;
    Enabled: boolean;
    private _totalizacoesColunas;
    TotalizacoesColunas: SiSMoura.Core.Entity.MouraGridSummary[];
    private _totalizacoesAgrupamentoColunas;
    TotalizacoesAgrupamentoColunas: SiSMoura.Core.Entity.MouraGridSummary[];
    private _campoID;
    CampoID: string;
    private _exibirPainelPesquisa;
    ExibirPainelPesquisa: boolean;
    private _exibirPaginacao;
    ExibirPaginacao: boolean;
    private _exibirBotaoSelecionarTodos;
    ExibirBotaoSelecionarTodos: boolean;
    private _permitirEditarGrid;
    PermitirEditarGrid: boolean;
    private _exibirAgrupamento;
    ExibirAgrupamento: boolean;
    private _exibirBotoesRodape;
    ExibirBotoesRodape: boolean;
    private _exibirLinhaFiltro;
    ExibirLinhaFiltro: boolean;
    private _permitirOrdenacao;
    PermitirOrdenacao: boolean;
    private _alturaGrade;
    AlturaGrade: number;
    private _PageSize;
    PageSize: number;
    private _isGradeProcura;
    IsGradeProcura: boolean;
    private _idModalProcura;
    IDModalProcura: string;
    private _campoOrder;
    CampoOrder: string;
    private _tipoOrder;
    TipoOrder: string;
    Height: string;
    readonly Grid: DevExpress.ui.dxDataGrid;
    readonly DataSource: any[];
    Focus(linha: number, coluna: number): void;
    readonly GetSelectedRowsData: Array<any>;
    readonly GetUnselectedRowsData: Array<any>;
    SelectRows(keys: Array<any>, preserve: boolean): void;
    protected IniciarEventos(): void;
    protected IniciarContextMenu(): void;
    iniciarGrid(): void;
    private CorrigePainelAgrupamento;
    protected OnRowUpdated(): (e: any) => void;
    protected OnEditorPreparing(): (e: any) => void;
    protected OnEditorPrepared(opts: any): void;
    protected OnRowValidating(e: any): void;
    protected OnContentReady(e: any): void;
    protected OnSelectionChanged(e: dxDataGridSelectionChangedEventArgs): void;
    protected AtualizaHiddenLinhasSelecionadas(): void;
    protected OnKeyDown(e: any): void;
    private lastRowCLickedId;
    private dtUltClick;
    protected OnRowClick(e: any): void;
    protected OnCellClick(e: any): void;
    protected OnCellPrepared(e: any): void;
    protected OnContextMenuPreparing(e: any): void;
    protected OnClickOcultarColuna(coluna: DevExpress.ui.dxDataGridColumn): (this: this, t: any) => void;
    protected OnClickSeletorColuna(e: any): void;
    protected OnClickTamanhoColuna(coluna: DevExpress.ui.dxDataGridColumn): (this: this, t: any) => void;
    protected OnSelecionouInputTamanhoColuna(result: InputBoxResultEventArgs): void;
    protected CriarTemplateBotaoExcluir(): (container: any, options: any) => void;
    protected CriarTotalizacoes(): any;
    private MouraGridSummaryToDevExtremeSummary;
    calculateCustomSummary(options: any): void;
    protected CriarTemplateBotaoSelecionar(): (container: any, options: any) => void;
    protected CriarTemplateBotaoImprimir(): (container: any, options: any) => void;
    protected CriarTemplateBotaoCustom(text: string, commandName: string): (container: any, options: any) => void;
    protected ClickBotaoSelecionar(options: any): void;
    protected OnClickBotaoImprimir(options: any): void;
    protected ClickCustomButton(buttonText: string, commandName: string, options: any): void;
    protected CriarArgBotao(buttonText: string, commandName: string, options: any): MouraGridViewJSClickBotaoLinhaEventArgs;
    protected ExcluirRegistro(id: any): void;
    Excluir(index: number, perguntar: boolean): void;
    protected ExecutaExclusaoRegistro(e: MsgBoxResultEventArgs): void;
    protected ProcuraRegistroByID(id: any): number;
    protected OnResizeGrid(): void;
    VisibleRowsCount(): number;
    SetFocusEditCell(rowIndex: number, fieldName: string): void;
    protected AtualizarTamanhoGrade(): void;
    PreencherGrid(datasource: Array<any>): void;
    SetDrillDownDataSource(datasource: any): void;
    deselectAll(): void;
    selectAll(): void;
    AjustarWidth(): void;
    LimparSelecao(): void;
    Refresh(): void;
    private setDataSourceGrid;
    protected AtualizarHiddenDataSource(data: any): void;
    protected SetDataSourcePadraoGrade(): void;
    protected formataValor(casasDecimais: number, prefixo: string): (value: any) => any;
    GetColunaByFieldName(fieldName: string): DevExpress.ui.dxDataGridColumn;
    GetColunaByName(name: string): DevExpress.ui.dxDataGridColumn;
    LimparFiltros(): void;
    /** Ordena a Grid pela coluna desejada. No parãmetro tipo passar "asc" ou "desc" */
    OrderBy(fieldName: string, tipo: string): void;
    GroupBy(fieldName: string): void;
    ColunaVisible(colunaOuFieldName: string | DevExpress.ui.dxDataGridColumn, visible: boolean): void;
    FilterColumn(fieldName: string, filter: string): void;
    SetColunaEditavel(fieldName: string, value: boolean): void;
    FixarColuna(fieldName: string, value: boolean): void;
    SetEncodeHTMLColuna(fieldName: string, value: boolean): void;
    SetHeightGrid(altura: number): void;
    protected OnClickExportarExcel(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickExportarPDF(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickSalvarLayout(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    SalvarLayout(): void;
    protected OnSalvouLayout(e: any): void;
    protected OnErroSalvarlayout(ex: JQueryXHR): void;
    protected OnClickFullScreen(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    MoverColunaParaAgrupamento(idAgrupamento: string, fieldNameColuna: string): void;
    GrdFullScreen(): void;
    protected IsGradeFullScreen(pnGrade: JQuery): boolean;
    protected CorrigeColunasEditaveis(): void;
    SetPageSize(pageSize: number): void;
    CancelChanges(): void;
    CollapseAll(): void;
    ExpandAll(groupIndex: number): void;
    FuncaoSort(fieldName: string, funcaoSucesso: (data: any) => any, context: any): void;
    FuncaoGroup(fieldName: string, funcaoSucesso: (data: any) => any, context: any): void;
    FuncaoCustomText(fieldName: string, funcaoSucesso: (data: any) => any, context: any): void;
    ExportarExcel(selectionOnly: boolean): void;
    ExportToPDF(): void;
    ExportToExcelCompleto(): void;
    ExportarExcelData(selectionOnly: boolean): Promise<string>;
    protected _dataFile: any;
    protected _cancelarExportacao: boolean;
    protected OnFileSaving(e: any): void;
    protected OnExported(e: ExportEventArgs): void;
    protected OnExporting(e: ExportEventArgs): void;
    AlterarDataSourceColunaCombo(fieldNameColunaCombo: string, novoDataSource: Array<any>): void;
    private MontaCabecalhoExcelCompleto;
    protected OnClickImprimirGrade(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    private GetControlLabelCorreta;
    ImprimirGrid(): void;
}
interface RowValidatingEventArgs {
    brokenRules: any[];
    component: DevExpress.ui.dxDataGrid;
    element: JQuery;
    errorText: string;
    isValid: boolean;
    key: any;
    newData: {
        [campo: string]: any;
    };
    oldData: any;
}
interface ExportEventArgs {
    component: DevExpress.ui.dxDataGrid;
    element: JQuery;
    data: Blob;
    fileName: string;
    cancel: boolean;
    format: string;
}
//# sourceMappingURL=MouraGridViewJS.d.ts.map