declare class R_RecProg extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grd: MouraGridViewJS;
    readonly mdDetalhe: MouraModal;
    readonly grdDetalhe: MouraGridViewJS;
    readonly lblInfProgramador: MouraLabel;
    OnPageLoad(): void;
    protected Init(): void;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
    private GetDadosRelacao;
    protected ConfigurarGrade(): void;
    protected OnGridCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected OnGridClicouBotao(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected FuncaoCustomText(data: any): string;
    protected AbriDetalhamentoProgramador(dataInicial: string, dataFinal: string, codProgramador: number): void;
    FecharModal(): void;
}
declare var r_RecProg: R_RecProg;
//# sourceMappingURL=R_RecProg.d.ts.map