declare class R_RCCOM extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly mdEmail: MouraModal;
    readonly cboContaCorrente: MouraContaCorrenteCombo;
    readonly mouraEmail: MouraEmail;
    readonly lstFormaPagamento: MouraCheckBoxList;
    readonly btnEnviar: MouraButton;
    readonly btnGerarLista: MouraButton;
    readonly btnImprimirC: MouraButton;
    readonly btnCancelar: MouraButton;
    readonly grid: MouraGridViewJS;
    Email: any;
    readonly btnEnviarEmail: MouraButton;
    OnPageLoad(): void;
    Init(): void;
    PreencherGrade(): void;
    LimparCampos(): void;
    private LimparCamposModal;
    private OnClickMalaDireta;
    private GerarListaMalaDireta;
    private OnClickEnviar;
    private VerificaDestinarios;
    private OnClickImprimir;
    private Imprimir;
    private OnClickCancelar;
    private OnClickEnviarEmail;
    private EnviarEmail;
    private ValidarCamposModal;
}
declare const r_RCCOM: R_RCCOM;
//# sourceMappingURL=R_RCCOM.d.ts.map