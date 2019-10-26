declare class R_HisCli_Angular extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly infVenda: MouraInformacoesVenda;
    readonly gridHistoricoCliente: MouraGridViewJS;
    readonly gridHistoricoResumido: MouraGridViewJS;
    readonly lstEmpresa_RE: MouraListBoxEmpresa;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly tab: MouraTabPanel;
    OnPageLoad(): void;
    Init(): void;
    PreencherGrade(): void;
    LimparCampos(): void;
    PreencherGridHistoricoCliente(): void;
    PreencherGridHistoricoResumido(): void;
    private OnClickItem;
}
declare const r_HisCli_Angular: R_HisCli_Angular;
//# sourceMappingURL=R_HisCli_Angular.d.ts.map