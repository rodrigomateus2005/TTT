declare class C_GruCon extends MouraPageAngular {
    Entity: SiSMoura.Core.Entity.Conta_Contabil_Estrutura;
    Entidades: SiSMoura.Core.Entity.Conta_Contabil_Estrutura[];
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtContaContabil: MouraTextBoxProcura;
    readonly grid: MouraGridViewJSEditavel;
    readonly btnGravar: MouraButton;
    readonly btnExcluir: MouraButton;
    readonly btnNovo: MouraButton;
    OnPageLoad(): void;
    Init(): void;
    private LimparCampos;
    private OnDepoisProcurouCodigo;
    private OnDepoisProcurouContaContabil;
    private OnClickExcluir;
    private ExcluirRegistro;
    private OnClickGravar;
    private OnAntesAdicionarItem;
    private ValidarAdicionar;
    private OnClickNovo;
    ValidarCamposObrigatorios(): boolean;
    private IsSintetico;
    private VerificaOrigemAndSintetica;
    private OnDepoisBuscarExistente;
    private PreencherGrade;
}
declare const c_GruCon: C_GruCon;
//# sourceMappingURL=C_GruCon.d.ts.map