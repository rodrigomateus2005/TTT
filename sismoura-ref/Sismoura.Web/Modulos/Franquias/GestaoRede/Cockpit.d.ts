declare var intervalId: number;
declare class Cockpit extends MouraPageAngular {
    TipoFaturamento: string;
    Empresa: number;
    readonly lblValorFaturado: MouraLabel;
    readonly lblMarkup: MouraLabel;
    readonly lblTicket: MouraLabel;
    readonly lblPA: MouraLabel;
    readonly cboGrupoFaturamentoIndividual: MouraComboBoxEmpresa;
    readonly lblValorFaturadoInd: MouraLabel;
    readonly lblMarkupInd: MouraLabel;
    readonly lblTicketInd: MouraLabel;
    readonly lblPAInd: MouraLabel;
    readonly callBackPnlTopCincoLinhas: MouraCallBackPanel;
    FaturamentoTotal: any;
    FaturamentoIndividual: any;
    FaturamentoLojas: any[];
    readonly pnlFaturamentoLoja: MouraGridStackItemPanel;
    readonly pnlFaturamentoGrupo: MouraGridStackItemPanel;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly divPanelTopLinhas: HTMLDivElement;
    readonly exibirPaineisLoja: HTMLDivElement;
    protected Init(): void;
    OnPageLoad(): void;
    CorrigirLabels(): void;
    PreencherTodos(): void;
    PreencherFaturamentoLojas(): void;
    CarregarTodosGraficos(flag: boolean): void;
    PreencherFaturamentoTotal(): void;
    PreencherFaturamentoIndividual(): void;
    private ValidarGrupoDeEmpresasSelecionado;
    private OnCboGrupoIndividualSelectionChanged;
    protected GerarRelacao(): void;
    OnCboEmpresaSelectionChanged(s: any, e: MouraEventArgs): void;
    PreencherFaturamentoGrupos(): void;
}
declare var cockpit: Cockpit;
//# sourceMappingURL=Cockpit.d.ts.map