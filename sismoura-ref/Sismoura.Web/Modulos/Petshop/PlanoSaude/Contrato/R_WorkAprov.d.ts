declare class R_WordAprov extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtPet: MouraTextBoxProcuraProprietarioAnimal;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly cboNivel: MouraComboBox;
    readonly Grid: MouraGridViewJS;
    OnPageLoad(): void;
    protected Init(): void;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
    private GetDadosRelacao;
    protected OnGridCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected OnGridClicouBotao(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected AtualizarStatusAprovacao(codAutorizacao: number, codNivelAtual: number, codNivelServico: number, isAprovado: boolean): void;
}
declare var r_WorkAprov: R_WordAprov;
//# sourceMappingURL=R_WorkAprov.d.ts.map