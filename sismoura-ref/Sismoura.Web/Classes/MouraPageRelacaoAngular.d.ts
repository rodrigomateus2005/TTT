declare abstract class MouraPageRelacaoAngular extends MouraPageAngular {
    abstract readonly AccordionFiltros: MouraAccordion;
    constructor();
    protected Filtro: any;
    readonly BotaoRelacao_BotaoGerar: MouraButton;
    readonly BotaoRelacao_BotaoLimpar: MouraButton;
    readonly BotaoSalvarFiltros: HTMLAnchorElement;
    readonly selFiltro: MouraFiltroTela;
    protected Init(): void;
    OnPageLoad(): void;
    BotaoRelacao_BotaoGerarClick(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    BotaoRelacao_BotaoLimparClick(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected PreencherGrade(): void;
    protected LimparCampos(): void;
    private BotaoSalvarFiltros_Click;
    PreencherFiltrosSalvos(): void;
    private setNgModelValue;
}
//# sourceMappingURL=MouraPageRelacaoAngular.d.ts.map