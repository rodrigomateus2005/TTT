declare class C_FecCar extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly btnFechar: MouraButton;
    readonly txtCodigo: MouraTextBoxProcura;
    OnPageLoad(): void;
    Init(): void;
    PreencherGrade(): void;
    LimparCampos(): void;
    protected OnClickFecharCarga(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    private FecharCarga;
    private OnCellPrepared;
    private ConcluirCargaVenda;
    private OnClickBotao;
    private BuscouCarga;
}
declare const c_FecCar: C_FecCar;
//# sourceMappingURL=C_FecCar.d.ts.map