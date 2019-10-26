declare var intervalId: number;
declare class Cockpit2 extends MouraPageAngular {
    EmpresaIndividual: number;
    Empresa: number;
    readonly lblValorFaturado: MouraLabel;
    readonly lblMarkup: MouraLabel;
    readonly lblTicket: MouraLabel;
    readonly lblPA: MouraLabel;
    readonly cboEmpresaFaturamentoIndividual: MouraComboBoxEmpresa;
    readonly lblValorFaturadoInd: MouraLabel;
    readonly lblMarkupInd: MouraLabel;
    readonly lblTicketInd: MouraLabel;
    readonly lblPAInd: MouraLabel;
    readonly callBackPnlTop5PA: MouraCallBackPanel;
    readonly callBackPnlTop5Markup: MouraCallBackPanel;
    readonly callBackPnlTop5ProdutosVendidos: MouraCallBackPanel;
    readonly callBackPnlTop5TicketMedio: MouraCallBackPanel;
    FaturamentoTotal: any;
    FaturamentoIndividual: any;
    FaturamentoLojas: any[];
    readonly hdnEmpresa: HTMLInputElement;
    protected Init(): void;
    OnPageLoad(): void;
    MudouEmpresa(): void;
    CorrigirLabels(): void;
    PreencherTodos(): void;
    PreencherFaturamentoLojas(): void;
    PreencherFaturamentoTotal(): void;
    PreencherFaturamentoIndividual(): void;
}
declare var cockpit2: Cockpit2;
//# sourceMappingURL=Cockpit2.d.ts.map