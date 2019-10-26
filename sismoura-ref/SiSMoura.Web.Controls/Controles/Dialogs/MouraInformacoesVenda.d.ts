declare class MouraInformacoesVenda extends MouraControl {
    readonly mdInfVenda: MouraModal;
    readonly grdProdutos: MouraGridViewJS;
    readonly grdPagamentos: MouraGridViewJS;
    readonly lblVenda: MouraLabel;
    readonly btnConsultaVenda: MouraButton;
    readonly lblData: MouraLabel;
    readonly lblVendedor: MouraLabel;
    readonly lblCliente: MouraLabel;
    readonly lblComandas: MouraLabel;
    readonly lblAtendimentos: MouraLabel;
    readonly lblCOO: MouraLabel;
    readonly lblSat: MouraLabel;
    readonly btnFecharVenda: MouraButton;
    readonly tbVenda: MouraTabPanel;
    constructor(id: string);
    protected codVenda: number;
    protected IniciarEventos(): void;
    Abrir(codVenda: number): void;
    protected LimparCampos(): void;
    private PreencherInformacoesVenda;
    OnClickConsultarVenda(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    OnClickFecharVenda(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
}
//# sourceMappingURL=MouraInformacoesVenda.d.ts.map