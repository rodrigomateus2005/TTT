declare class BIAtvConsole extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly grdBI: MouraPivotGridJS;
    readonly chkConsiderarPosAtendimento: MouraCheckBox;
    readonly mdDetalhe: MouraModal;
    readonly grdDetalhe: MouraGridViewJS;
    readonly mdInf: MouraModal;
    protected DadosAtividade: any;
    OnPageLoad(): void;
    protected Init(): void;
    LimparCampos(): void;
    PreencherGrade(): void;
    protected CriarColunasGrade(): void;
    protected CriarColunasAtividades(): void;
    protected gerarDados(): void;
    private dadosGrade;
    protected DownloadDados(idLista: string, paginas: number, paginaAtual: number): void;
    private setDataSourceGrade;
    private OnCellClick;
    private FecharDetalhe;
    private OnFechouModal;
    protected SelecionouLinhaGrdAtividade(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnClickFecharModalDetalheAtividade(): void;
}
declare var bIAtvConsole: BIAtvConsole;
//# sourceMappingURL=BIAtvConsole.d.ts.map