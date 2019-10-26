declare class R_FecCar extends MouraPageRelacaoAngular {
    private documentos;
    readonly AccordionFiltros: MouraAccordion;
    readonly mdItens: MouraModal;
    readonly lblPedido: MouraLabel;
    readonly gridItens: MouraGridViewJS;
    readonly grid: MouraGridViewJS;
    OnPageLoad(): void;
    Init(): void;
    private GetDocumentos;
    LimparCampos(): void;
    PreencherGrade(): void;
    private OnSelecionouLinha;
    private PreencherGridItens;
    private CellPrepared;
}
declare const r_FecCar: R_FecCar;
//# sourceMappingURL=R_FecCar.d.ts.map