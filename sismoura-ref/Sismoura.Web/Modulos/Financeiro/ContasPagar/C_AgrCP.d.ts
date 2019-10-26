declare class C_AgrCP extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly btnAgrupar: MouraButton;
    readonly btnCancelar: MouraButton;
    readonly btnGerar: MouraButton;
    readonly btnGravar: MouraButton;
    readonly cboContaCorrente: MouraContaCorrenteCombo;
    readonly grid: MouraGridViewJS;
    readonly txtFornecedor: MouraTextBoxProcura;
    readonly txtContaContabil: MouraTextBoxProcura;
    Agrupar: any;
    Parcelas: SiSMoura.Core.Entity.ParcelaContasPagar[];
    readonly mdAgrupar: MouraModal;
    OnPageLoad(): void;
    Init(): void;
    PreencherGrade(): void;
    LimparCampos(): void;
    private LimparFiltros;
    private LimparCamposModal;
    private OnAntesProcurarContaContabil;
    private OnAntesProcurarFornecedor;
    private RetornaEmpresasUsuario;
    private OnClickAgrupar;
    private OnClickCancelar;
    private ValidarCamposModal;
    private VerificarParcelas;
    private OnClickGerar;
    private GerarParcelas;
    private OnClickGravar;
    private GravarContas;
    private OnSelectionContaChanged;
    private OnDepoisProcurouConta;
    private VerificarContaContabilEmpresa;
    private OnSelecionouLinha;
}
declare const c_AgrCP: C_AgrCP;
//# sourceMappingURL=C_AgrCP.d.ts.map